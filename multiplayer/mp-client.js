/*
 * multiplayer/mp-client.js
 * ---------------------------------------------------------------------------
 * OPTIONAL MULTIPLAYER — the ONLY file that knows about the game.
 *
 * Loaded after index.js. It:
 *   - reads the game through the existing  window.exposeCheats()  extension
 *     point (window.player / objects / effects / flowers / NPCs / items ...)
 *   - renders remote players in the existing world using the game's own Mesh
 *     class (best effort; silently disables if the hooks are absent)
 *   - wires up the multiplayer menu, chat, roster, readouts and the badge
 *   - drives a transport + session from mp-core.js
 *
 * A missing hook NEVER throws: the affected feature turns itself off with one
 * console warning. Single-player must stay exactly as it was.
 * ---------------------------------------------------------------------------
 */
(function () {
    'use strict';

    var CORE = typeof window !== 'undefined' ? window.MPCore : null;
    if (!CORE) {
        console.warn('[BSS Multiplayer] mp-core.js was not loaded; multiplayer is disabled.');
        return;
    }

    var $ = function (id) { return document.getElementById(id); };
    var warnedOnce = {};
    function warnOnce(tag, msg) {
        if (warnedOnce[tag]) return;
        warnedOnce[tag] = true;
        console.warn('[BSS Multiplayer] ' + msg);
    }
    function log(msg) {
        var el = $('mpStatus');
        if (el) el.textContent = String(msg);
        // Keep the console informative for self-hosting / debugging.
        if (window.console && console.log) console.log('[BSS Multiplayer] ' + msg);
    }

    var state = {
        mode: 'single',            // 'single' | 'peer' | 'server'
        peerRole: null,            // 'host' | 'guest'
        transport: null,
        session: null,
        maxPlayers: CORE.DEFAULT_MAX_PLAYERS,
        serverUrl: 'ws://localhost:8787/ws',
        useStun: false,
        chat: [],
        lastWarn: null
    };

    /* =====================================================================
     * 1. GAME HOOKS — read the game's globals, degrade gracefully
     * ===================================================================== */

    var Hooks = {
        ready: false,
        missing: [],
        tried: 0,

        /** Ask the game to publish its globals, then re-read them. */
        refresh: function () {
            if (typeof window.exposeCheats === 'function') {
                try { window.exposeCheats(); }
                catch (e) { warnOnce('expose', 'window.exposeCheats() threw; continuing without it.'); }
            }
            var need = {
                player: window.player,
                objects: window.objects,
                effects: window.effects,
                flowers: window.flowers,
                NPCs: window.NPCs,
                items: window.items
            };
            var missing = [];
            Object.keys(need).forEach(function (k) { if (!need[k]) missing.push(k); });
            Hooks.missing = missing;
            Hooks.ready = !!window.player;
            return Hooks.ready;
        },

        /** Local player transform for Stage A movement sync. */
        localTransform: function () {
            var p = window.player;
            if (!p || !p.body || !p.body.position) return null;
            var pos = p.body.position;
            var dir = (p.bodyDir && p.bodyDir.length === 3) ? p.bodyDir : null;
            var v = p.body.velocity || { x: 0, y: 0, z: 0 };
            var speed = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
            return {
                p: [pos.x, pos.y, pos.z],
                y: dir ? Math.atan2(dir[0], dir[2]) : 0,
                m: speed > 0.5 ? 1 : 0,
                s: speed
            };
        },

        /** Join-time profile. A save adopted ONCE at join, clamped by the authority. */
        profile: function () {
            var p = window.player;
            if (!p) return null;
            var bees = [];
            if (Array.isArray(p.hive)) {
                for (var y = 0; y < p.hive.length; y++) {
                    var row = p.hive[y];
                    if (!Array.isArray(row)) continue;
                    for (var x = 0; x < row.length; x++) {
                        var b = row[x];
                        if (!b || !b.type) continue;
                        bees.push({ type: b.type, level: b.level || 1, gifted: !!b.gifted });
                    }
                }
            }
            return {
                name: (window.MPSaveName || 'Bee'),
                honey: p.honey || 0,
                pollen: p.pollen || 0,
                capacity: p.capacity || 100,
                honeyPerPollen: p.honeyPerPollen,
                bees: bees,
                // Optional, versioned extra field. Absent in existing saves.
                mpVersion: CORE.PROTOCOL_VERSION,
                beequips: null
            };
        },

        /** Adopt the authority's numbers for this session (once, at join). */
        adoptWelcome: function (you) {
            var p = window.player;
            if (!p || !you) return;
            if (typeof you.honey === 'number') p.honey = you.honey;
            if (typeof you.pollen === 'number') p.pollen = you.pollen;
            if (typeof you.capacity === 'number') p.capacity = you.capacity;
            if (typeof p.updateUI === 'function') { try { p.updateUI(); } catch (e) {} }
        },

        message: function (text, color) {
            var p = window.player;
            if (p && typeof p.addMessage === 'function') {
                try { p.addMessage(text, color); return; } catch (e) {}
            }
        },

        /** Local bee states for Stage B, capped and attributed to this player. */
        beeStates: function (limit) {
            var p = window.player;
            if (!p || !Array.isArray(p.hive)) return [];
            var out = [];
            var seen = 0;
            for (var y = 0; y < p.hive.length && out.length < limit; y++) {
                var row = p.hive[y];
                if (!Array.isArray(row)) continue;
                for (var x = 0; x < row.length && out.length < limit; x++) {
                    var b = row[x];
                    if (!b || !b.type) continue;
                    out.push({
                        id: (p.id || 'me') + ':' + (y) + ':' + (x),
                        type: b.type,
                        p: [p.hivePos ? p.hivePos[0] : 0, (p.hivePos ? p.hivePos[1] : 0) + 1, p.hivePos ? p.hivePos[2] : 0],
                        tgt: p.body && p.body.position ? [p.body.position.x, p.body.position.y, p.body.position.z] : null,
                        st: 'follow'
                    });
                    seen++;
                }
            }
            return out;
        }
    };

    /* =====================================================================
     * 2. REMOTE PLAYER RENDERING (best effort, uses the game's own Mesh)
     * ===================================================================== */

    var avatars = {};            // id -> { mesh }
    var renderDisabled = false;

    // How often to look for the game's globals: quickly at first, then rarely.
    var FAST_HOOK_POLL_MS = 250;
    var FAST_HOOK_POLLS = 12;    // ~3 seconds of fast polling
    var SLOW_HOOK_POLL_MS = 2000;

    function makeAvatarMesh(g, colorIndex) {
        if (!g || !g.Mesh) return null;
        try {
            var m = new g.Mesh(false);
            m.setMeshFromFunction(function (box) {
                // A simple two-part avatar: body + head, tinted per player.
                var c = [
                    [1.0, 0.55, 0.1], [0.2, 0.9, 0.3], [0.3, 0.6, 1.0],
                    [1.0, 0.3, 0.6], [0.9, 0.9, 0.2], [0.6, 0.3, 1.0]
                ][colorIndex % 6];
                box(0, 0, 0, 0.5, 1.0, 0.5, false, c);
                box(0, 0.85, 0, 0.35, 0.35, 0.35, false, [1, 0.9, 0.7]);
            });
            m.setBuffers();
            return { mesh: m };
        } catch (e) {
            return null;
        }
    }

    function renderRemotePlayers(g) {
        if (state.mode === 'single' || renderDisabled) return;
        if (!state.session || !g || !g.gl || !g.Mesh || !g.mat4) {
            if (state.mode !== 'single') warnOnce('render', 'in-world remote avatars need the Mesh/mat4 hooks; networking still works, avatars are hidden.');
            renderDisabled = true;
            return;
        }
        var remotes;
        try { remotes = state.session.remotePlayers(); }
        catch (e) { return; }
        var view = g.viewMatrix;
        if (!view) return;
        var keys = Object.keys(remotes);
        try {
            g.gl.useProgram(g.program);
            g.gl.uniformMatrix4fv(g.glCache.dynamic_viewMatrix, g.gl.FALSE, view);
            for (var i = 0; i < keys.length; i++) {
                var id = keys[i];
                var s = remotes[id];
                if (!s || !s.p) continue;
                var av = avatars[id] || (avatars[id] = makeAvatarMesh(g, i));
                if (!av) continue;
                var m = new Float32Array(16);
                g.mat4.fromQuat(m, [0, Math.sin(s.y * 0.5), 0, Math.cos(s.y * 0.5)]);
                m[12] = s.p[0]; m[13] = s.p[1]; m[14] = s.p[2];
                g.gl.uniformMatrix4fv(g.glCache.dynamic_modelMatrix, g.gl.FALSE, m);
                av.mesh.render();
            }
        } catch (e) {
            renderDisabled = true;
            warnOnce('render-throw', 'remote avatar rendering failed and has been turned off (' + (e && e.message) + ').');
        }
    }

    // NOTE: remote name tags are shown in the player list instead of floating
    // in-world, because the game's text renderer is not part of the exposed
    // hooks. In-world avatars are the boxes rendered above.

    /* =====================================================================
     * 3. SESSION LIFECYCLE
     * ===================================================================== */

    var moveTimer = null, beeTimer = null;

    function teardown() {
        if (moveTimer) { clearInterval(moveTimer); moveTimer = null; }
        if (beeTimer) { clearInterval(beeTimer); beeTimer = null; }
        if (state.session) { try { state.session.reset(); } catch (e) {} }
        if (state.transport) { try { state.transport.reset(); } catch (e) {} }
        state.session = null;
        state.transport = null;
        avatars = {};
    }

    function startLoops(session) {
        // Stage A: 20 Hz movement. Never blocks local input; we only READ the body.
        moveTimer = setInterval(function () {
            if (!session || state.mode === 'single') return;
            var t = Hooks.localTransform();
            if (t) { try { session.sendMove(t); } catch (e) {} }
        }, 1000 / CORE.MOVE_SEND_HZ);
        // Stage B: 8 Hz bees.
        beeTimer = setInterval(function () {
            if (!session || state.mode === 'single') return;
            var bees = Hooks.beeStates(CORE.HIVE_MAX_SLOTS);
            if (bees.length) { try { session.sendBees({ bees: bees }); } catch (e) {} }
        }, 1000 / CORE.BEES_SEND_HZ);
    }

    function wireSession(session, role) {
        session.on('state', function (e) { refreshUI(); log('connection: ' + e.state); });
        session.on('players', function () { refreshUI(); });
        session.on('welcome', function (w) {
            // The session emits the whole `welcome` message; the profile the
            // authority assigned us is its `you` field. (Reading the outer
            // object here is what silently skipped adopting honey/pollen.)
            var me = (w && w.you) ? w.you : w;
            Hooks.adoptWelcome(me);
            if (me && typeof me.hiveIndex === 'number') {
                log('joined as hive #' + (me.hiveIndex + 1));
            }
            refreshUI();
        });
        session.on('chat', function (m) {
            pushChat(m);
        });
        session.on('result', function (r) {
            var d = r.d || {};
            if (d.ok) {
                if (d.action === 'convert') Hooks.message('Converted pollen (+' + (d.gained | 0) + ' honey)');
                else if (d.action === 'buy') Hooks.message('Bought ' + (d.item || 'item') + ' (-' + (d.cost | 0) + ' honey)');
            } else {
                Hooks.message('Action refused: ' + (d.reason || 'unknown'), [200, 60, 60]);
            }
        });
        session.on('violation', function (v) {
            if (v && v.count >= 5) warnOnce('violations', 'too many rejected messages; the session may drop you.');
        });
        session.on('error', function (e) { log('error: ' + (e && e.message)); });
        session.on('leave', function (e) { log('a player left'); delete avatars[e && e.id]; });
        session.on('join', function (e) {
            if (role === 'authority' && e && e.player) {
                Hooks.message(e.player.name + ' joined the swarm');
                pushChat({ name: 'system', m: e.player.name + ' joined', ts: Date.now() });
            }
        });
        return session.start();
    }

    /* ---- mode: single-player (default, no network at all) -------------- */

    function startSingle() {
        teardown();
        state.mode = 'single';
        state.peerRole = null;
        refreshUI();
        log('Single-player mode. No network code is running.');
    }

    /* ---- mode: peer-to-peer (WebRTC star) ----------------------------- */

    function startPeerHost() {
        teardown();
        state.mode = 'peer';
        state.peerRole = 'host';
        Hooks.refresh();          // pick up the game the moment the player hosts
        var transport = CORE.createPeerTransport({
            role: 'host',
            maxPlayers: state.maxPlayers,
            useStun: state.useStun,
            id: CORE.uid('p')
        });
        var session = CORE.createSession({
            transport: transport,
            role: 'authority',
            maxPlayers: state.maxPlayers,
            name: (window.MPSaveName || 'Host'),
            profile: Hooks.profile()
        });
        state.transport = transport;
        state.session = session;
        wireSession(session, 'authority');
        buildSlots();
        startLoops(session);
        refreshUI();
        log('Hosting a peer-to-peer star (max ' + state.maxPlayers + ' players). Create one offer per guest.');
        return session;
    }

    function startPeerGuest() {
        teardown();
        state.mode = 'peer';
        state.peerRole = 'guest';
        Hooks.refresh();          // pick up the game the moment the player joins
        var transport = CORE.createPeerTransport({ role: 'guest', useStun: state.useStun, id: CORE.uid('p') });
        var session = CORE.createSession({
            transport: transport,
            role: 'client',
            name: (window.MPSaveName || 'Bee'),
            profile: Hooks.profile()
        });
        state.transport = transport;
        state.session = session;
        wireSession(session, 'client');
        startLoops(session);
        refreshUI();
        log('Paste the host\'s OFFER code, then send the ANSWER code back.');
        return session;
    }

    /* ---- mode: server-based (WebSocket) ------------------------------- */

    function connectServer() {
        teardown();
        state.mode = 'server';
        state.peerRole = null;
        Hooks.refresh();          // pick up the game the moment the player connects
        var url = (($('mpServerUrl') && $('mpServerUrl').value) || state.serverUrl || '').trim();
        if (!/^wss?:\/\//i.test(url)) { log('Server address must start with ws:// or wss://'); return null; }
        state.serverUrl = url;
        var transport = CORE.createServerTransport({ url: url, id: CORE.uid('p'), room: 'world' });
        var session = CORE.createSession({
            transport: transport,
            role: 'client',
            name: (window.MPSaveName || 'Bee'),
            profile: Hooks.profile()
        });
        state.transport = transport;
        state.session = session;
        wireSession(session, 'client');
        startLoops(session);
        refreshUI();
        log('Connecting to ' + url + ' …');
        return session;
    }

    function disconnect() {
        if (state.session) { try { state.session.disconnect(); } catch (e) {} }
        teardown();
        state.mode = 'single';
        state.peerRole = null;
        refreshUI();
        log('Disconnected. Back to single-player.');
    }

    function reconnect() {
        if (state.mode === 'server') return connectServer();
        if (state.mode === 'peer') {
            // Peer-to-peer cannot resume without a brand new code exchange.
            log('Peer-to-peer cannot resume — create/announce new codes.');
            if (state.peerRole === 'host') { startPeerHost(); } else { startPeerGuest(); }
            return state.session;
        }
        log('Nothing to reconnect to.');
        return null;
    }

    function resetSession() {
        if (state.session) { try { state.session.reset(); } catch (e) {} }
        avatars = {};
        log('Session reset.');
        refreshUI();
    }

    /* =====================================================================
     * 4. CHAT / ROSTER / READOUTS
     * ===================================================================== */

    function pushChat(m) {
        if (!m || !m.m) return;
        state.chat.push(m);
        if (state.chat.length > 100) state.chat.shift();
        var box = $('mpChatLog');
        if (!box) return;
        var line = document.createElement('div');
        line.style.cssText = 'font-size:13px;padding:1px 4px;word-break:break-word;color:' +
            (m.name === 'system' ? '#888' : '#222');
        var who = m.name ? (m.name + ': ') : '';
        line.textContent = who + m.m;
        box.appendChild(line);
        box.scrollTop = box.scrollHeight;
    }

    function sendChat() {
        var input = $('mpChatInput');
        if (!input) return;
        var text = (input.value || '').trim();
        if (!text) return;
        input.value = '';
        if (!state.session) { pushChat({ name: 'system', m: 'not connected', ts: Date.now() }); return; }
        try { state.session.sendChat(text); } catch (e) {}
        // The local echo happens inside the session (authority) so it is not
        // duplicated here; in client mode the authority echoes it back.
    }

    function rosterRows() {
        var rows = [];
        if (state.session && state.session.authority) {
            rows = state.session.authority.roster();
        } else if (state.session) {
            rows = state.session.players();
        }
        // always show ourselves if the hooks are live
        return rows;
    }

    function refreshRoster() {
        var el = $('mpPlayers');
        if (!el) return;
        var rows = rosterRows();
        var local = Hooks.localTransform();
        var html = '<div style="font-weight:bold;padding:2px">Players: ' + rows.length +
            (state.mode === 'single' ? '' : ' / ' + state.maxPlayers) + '</div>';
        rows.forEach(function (p) {
            html += '<div style="padding:2px 6px;font-size:13px">' +
                '<b>' + escapeHtml(p.name || 'Bee') + '</b>' +
                ' — hive #' + ((p.hiveIndex | 0) + 1) +
                (p.id === (state.session && state.session.id) ? ' <span style="color:#0a0">(you)</span>' : '') +
                (p.authority ? ' <span style="color:#06c">[host]</span>' : '') +
                '</div>';
        });
        if (state.mode === 'single') {
            html += '<div style="padding:2px 6px;font-size:13px;color:#888">Single-player — nobody else is here.</div>';
        }
        el.innerHTML = html;
        if (local === null && state.mode !== 'single') {
            html += '<div style="color:#a00;font-size:12px">(game hooks not ready yet)</div>';
        }
    }

    function refreshStats() {
        var el = $('mpStats');
        if (!el) return;
        var p = window.player;
        if (!p) { el.textContent = 'waiting for the game to start…'; return; }
        el.textContent = 'honey ' + fmt(p.honey) + ' · pollen ' + fmt(p.pollen) + '/' + fmt(p.capacity);
    }

    function fmt(n) {
        n = Number(n) || 0;
        return n >= 1e6 ? (n / 1e6).toFixed(2) + 'm' : (n >= 1e3 ? (n / 1e3).toFixed(1) + 'k' : String(n | 0));
    }

    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    /* =====================================================================
     * 5. UI WIRING
     * ===================================================================== */

    function showMode(panel) {
        ['mpPeerPanel', 'mpServerPanel'].forEach(function (id) {
            var el = $(id);
            if (el) el.style.display = (id === panel) ? '' : 'none';
        });
        ['mpModeSingle', 'mpModePeer', 'mpModeServer'].forEach(function (id) {
            var el = $(id);
            if (el) el.style.outline = (id === panel || (panel === null && id === 'mpModeSingle')) ? '3px solid #2a7' : 'none';
        });
    }

    function refreshUI() {
        var badge = $('mpBadge');
        if (badge) {
            var label = state.mode === 'single' ? 'Single-player'
                : state.mode === 'peer' ? ('Peer-to-peer (' + (state.peerRole || '') + ')')
                : 'Server';
            badge.textContent = 'Mode: ' + label;
            badge.style.background = state.mode === 'single' ? '#444' : (state.mode === 'peer' ? '#06c' : '#0a0');
            badge.style.display = 'block';
        }
        refreshRoster();
        refreshStats();
        var maxEl = $('mpMaxPlayers');
        if (maxEl && String(state.maxPlayers) !== maxEl.value) maxEl.value = state.maxPlayers;
    }

    function buildSlots() {
        var host = $('mpSlots');
        if (!host) return;
        host.innerHTML = '';
        var guests = Math.max(0, state.maxPlayers - 1);
        if (!guests) {
            host.innerHTML = '<div style="color:#a00">Set max players to at least 2.</div>';
            return;
        }
        for (var s = 0; s < guests; s++) {
            (function (idx) {
                var row = document.createElement('div');
                row.style.cssText = 'border:1px solid #ccc;border-radius:6px;padding:6px;margin:6px 0;background:#fafafa';
                row.innerHTML =
                    '<div><b>Guest slot ' + (idx + 1) + '</b> <span id="mpSlotStatus' + idx + '" style="color:#666">empty</span></div>' +
                    '<button id="mpSlotOffer' + idx + '">Create offer code</button> ' +
                    '<button id="mpSlotAnswer' + idx + '">Use pasted answer</button><br>' +
                    '<textarea id="mpSlotOfferText' + idx + '" readonly style="width:100%;height:46px;font-size:11px" placeholder="offer code — send this to guest ' + (idx + 1) + '"></textarea>' +
                    '<textarea id="mpSlotAnswerText' + idx + '" style="width:100%;height:46px;font-size:11px" placeholder="paste the ANSWER code from guest ' + (idx + 1) + '"></textarea>';
                host.appendChild(row);
                var offerBtn = $('mpSlotOffer' + idx);
                var answerBtn = $('mpSlotAnswer' + idx);
                var offerText = $('mpSlotOfferText' + idx);
                var answerText = $('mpSlotAnswerText' + idx);
                offerBtn.onclick = function () {
                    if (!state.transport || state.peerRole !== 'host') return;
                    offerText.value = 'creating…';
                    state.transport.createOffer(idx).then(function (r) {
                        if (r && r.ok) { offerText.value = r.code; setSlotStatus(idx, r.status); }
                        else { offerText.value = 'error: ' + ((r && r.error && r.error.message) || 'unknown'); setSlotStatus(idx, 'error'); }
                    });
                };
                answerBtn.onclick = function () {
                    if (!state.transport || state.peerRole !== 'host') return;
                    state.transport.acceptAnswer(idx, answerText.value || '').then(function (r) {
                        if (r && r.ok) { setSlotStatus(idx, r.status); log('slot ' + (idx + 1) + ': ' + r.status); }
                        else {
                            setSlotStatus(idx, 'error');
                            log('slot ' + (idx + 1) + ' answer refused: ' + ((r && r.error && r.error.message) || 'bad code'));
                        }
                    });
                };
            })(s);
        }
        refreshSlots();
    }

    function setSlotStatus(idx, text) {
        var el = $('mpSlotStatus' + idx);
        if (el) el.textContent = text;
    }

    function refreshSlots() {
        if (!state.transport || state.peerRole !== 'host') return;
        var status = state.transport.slotStatus();
        if (!status) return;
        status.forEach(function (s) { setSlotStatus(s.index, s.status + (s.peerId ? (' ' + s.peerId) : '')); });
    }

    function wireMenu() {
        var openBtn = $('mainMultiplayer');
        if (openBtn) {
            openBtn.onclick = function () {
                var m = $('mpMenu');
                var mm = $('mainMenu');
                if (m) m.style.display = 'block';
                if (mm) mm.style.display = 'none';
                showMode(state.mode === 'peer' ? 'mpPeerPanel' : state.mode === 'server' ? 'mpServerPanel' : null);
                refreshUI();
            };
        }
        var back = $('mp_back');
        if (back) {
            back.onclick = function () {
                var m = $('mpMenu'), mm = $('mainMenu');
                if (m) m.style.display = 'none';
                if (mm) mm.style.display = 'block';
            };
        }
        var maxEl = $('mpMaxPlayers');
        if (maxEl) {
            maxEl.value = state.maxPlayers;
            maxEl.onchange = function () {
                state.maxPlayers = Math.max(CORE.MIN_PLAYERS, Math.min(CORE.MAX_PLAYERS, parseInt(maxEl.value, 10) || CORE.DEFAULT_MAX_PLAYERS));
                maxEl.value = state.maxPlayers;
                refreshUI();
            };
        }
        var stun = $('mpStun');
        if (stun) {
            stun.onchange = function () { state.useStun = !!stun.checked; };
        }
        var urlEl = $('mpServerUrl');
        if (urlEl) urlEl.value = state.serverUrl;

        if ($('mpModeSingle')) $('mpModeSingle').onclick = function () { startSingle(); showMode(null); };
        if ($('mpModePeer')) $('mpModePeer').onclick = function () { showMode('mpPeerPanel'); startPeerHost(); };
        if ($('mpModeServer')) $('mpModeServer').onclick = function () { showMode('mpServerPanel'); };

        if ($('mpHostTab')) $('mpHostTab').onclick = function () {
            startPeerHost();
            var a = $('mpHostPanel'), b = $('mpJoinPanel');
            if (a) a.style.display = 'block';
            if (b) b.style.display = 'none';
        };
        if ($('mpJoinTab')) $('mpJoinTab').onclick = function () {
            startPeerGuest();
            var a = $('mpHostPanel'), b = $('mpJoinPanel');
            if (a) a.style.display = 'none';
            if (b) b.style.display = 'block';
        };
        if ($('mpGuestMakeAnswer')) $('mpGuestMakeAnswer').onclick = function () {
            var offer = ($('mpGuestOffer') && $('mpGuestOffer').value) || '';
            if (!state.transport || state.peerRole !== 'guest') startPeerGuest();
            state.transport.acceptOffer(offer).then(function (r) {
                if (r && r.ok) { $('mpGuestAnswer').value = r.code; log('Answer code ready — send it back to the host.'); }
                else { log('Offer refused: ' + ((r && r.error && r.error.message) || 'bad code')); $('mpGuestAnswer').value = ''; }
            });
        };
        if ($('mpConnect')) $('mpConnect').onclick = function () { connectServer(); };
        if ($('mpDisconnect')) $('mpDisconnect').onclick = function () { disconnect(); };
        if ($('mpReconnect')) $('mpReconnect').onclick = function () { reconnect(); };
        if ($('mpReset')) $('mpReset').onclick = function () { resetSession(); };
        if ($('mpSend')) $('mpSend').onclick = function () { sendChat(); };
        if ($('mpChatInput')) $('mpChatInput').onkeydown = function (e) { if (e.key === 'Enter') sendChat(); };

        showMode(null);
    }

    /* =====================================================================
     * 6. SAVE CONVENIENCE — "Duplicate save" (additive; no index.js surgery)
     * ===================================================================== */

    function duplicateSave(index) {
        if (typeof window.loadFromDB !== 'function' || typeof window.saveToDB !== 'function') {
            warnOnce('dup', 'the save API is not available; cannot duplicate.');
            return;
        }
        window.loadFromDB().then(function (res) {
            if (!Array.isArray(res) || !res.length) return;
            // NO sorting: the game renders one row per entry of the array
            // returned by loadFromDB() and its own Play/Export/Delete buttons
            // index into that same array, so the row's position IS the index
            // (sorting here would copy a different save than the one clicked).
            var src = res[index];
            if (!src || !src.data) return;
            var name = (src.data.name || 'Save') + ' (copy)';
            return window.saveToDB(CORE.uid('save') + Date.now(), {
                lastSaved: Date.now(),
                saveCode: src.data.saveCode,
                name: name
            }).then(function () {
                // Rebuild the save list the game already owns.
                var play = $('mainPlay');
                if (play && typeof play.onclick === 'function') play.onclick();
            });
        }).catch(function () {
            warnOnce('dup-fail', 'could not duplicate the save.');
        });
    }

    /** Add a Duplicate button to every save row in the existing save menu. */
    function decorateSaveRows() {
        var container = $('savedGames');
        if (!container) return;
        var rows = container.children;
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (!row || row.dataset.mpDecorated === '1') continue;
            if (!row.querySelector || !row.querySelector("input[id^='saveName']")) continue;
            row.dataset.mpDecorated = '1';
            var btn = document.createElement('div');
            btn.textContent = 'Copy';
            btn.style.cssText = 'margin-left:265px;margin-top:-31px;width:52px;height:27px;transform:translate(-50%,-50%);' +
                'background-color:rgb(50,150,220);border-radius:4px;border:2px solid black;text-align:center;font-size:14px;cursor:pointer';
            btn.onclick = (function (idx) { return function () { duplicateSave(idx); }; })(i);
            row.appendChild(btn);
        }
    }

    /* =====================================================================
     * 7. BOOTSTRAP
     * ===================================================================== */

    function boot() {
        wireMenu();
        refreshUI();
        // The game publishes its globals (window.player, …) only after the player
        // has picked a save and the world is running — which can be minutes after
        // the page loads. So poll quickly at first, then back off to a slow
        // trickle, and KEEP asking: giving up would leave multiplayer without game
        // hooks (no movement sync, no avatars) for someone who read the menus for
        // a while before pressing Play.
        var tries = 0;
        var slow = null;
        function stopPolling() {
            clearInterval(fast);
            if (slow) clearInterval(slow);
            refreshUI();
        }
        function slowTick() {
            Hooks.refresh();
            decorateSaveRows();
            if (Hooks.ready) stopPolling();
        }
        var fast = setInterval(function () {
            tries++;
            Hooks.refresh();
            decorateSaveRows();
            if (Hooks.ready) {
                if (tries > 2) stopPolling();
                return;
            }
            if (tries >= FAST_HOOK_POLLS) {      // ~3 s in: switch to the slow poll
                clearInterval(fast);
                slow = setInterval(slowTick, SLOW_HOOK_POLL_MS);
            }
        }, FAST_HOOK_POLL_MS);
        setInterval(refreshStats, 1000);
        // Keep the save list decorated as the player navigates.
        setInterval(decorateSaveRows, 1200);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }

    /* Public, addable API — used by tests and by anyone scripting the page. */
    window.BSSMultiplayer = {
        version: CORE.VERSION,
        state: state,
        Hooks: Hooks,
        startSingle: startSingle,
        startPeerHost: startPeerHost,
        startPeerGuest: startPeerGuest,
        connectServer: connectServer,
        disconnect: disconnect,
        reconnect: reconnect,
        reset: resetSession,
        duplicateSave: duplicateSave,
        sendChat: sendChat,
        renderRemotePlayers: renderRemotePlayers,
        getSession: function () { return state.session; },
        getTransport: function () { return state.transport; }
    };
})();
