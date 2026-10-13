/*
 * multiplayer/mp-core.js
 * ---------------------------------------------------------------------------
 * OPTIONAL MULTIPLAYER — pure networking core for the HTML5 Bee Swarm
 * Simulator (Bee Swarm Simulator Ripoff Edition).
 *
 * This file contains NO DOM access and NO game code. It is a plain classic
 * script so it can be:
 *   - loaded in a browser with  <script src="multiplayer/mp-core.js"></script>
 *   - loaded in Node with      require('.../mp-core.js')
 *   - evaluated in a Node vm context (that is how multiplayer/server.mjs and
 *     the test suite load it, so the browser host and the dedicated server run
 *     the SAME authority code instead of two drifting copies)
 *
 * It exposes the module on `module.exports` (CommonJS) and on the root object
 * as `MPCore` (browser / vm). Nothing here requires a network at load time.
 *
 * Sections:
 *   1. constants           2. helpers
 *   3. protocol codec      4. rate limiting
 *   5. pricing tables      6. authoritative world rules (createAuthority)
 *   7. session state machine
 *   8. transports: local, peer (WebRTC star), server (WebSocket)
 * ---------------------------------------------------------------------------
 */
(function (root, factory) {
    'use strict';
    var api = factory();
    if (typeof module === 'object' && module && module.exports) module.exports = api;
    if (root && typeof root === 'object') root.MPCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : (typeof self !== 'undefined' ? self : this), function () {
    'use strict';

    /* =====================================================================
     * 1. CONSTANTS
     * ===================================================================== */

    var VERSION = '1.0.0';

    /** Wire protocol version. Bumped only for breaking envelope changes. */
    var PROTOCOL_VERSION = 2;

    /** Hard cap on a single inbound message, checked BEFORE JSON.parse. */
    var MAX_MESSAGE_BYTES = 8 * 1024;          // 8 KiB (browser + authority)

    /** WebSocket server accepts frames up to this size (server.mjs). */
    var MAX_FRAME_BYTES = 64 * 1024;           // 64 KiB

    /** Send rates (messages per second), per player, per channel. */
    var CHANNELS = {
        move: 20,
        bees: 8,
        world: 8,
        collect: 6,
        damage: 10,
        convert: 3,
        buy: 0.7,
        chat: 0.66
    };
    /** Anything not listed above is limited to this rate. */
    var DEFAULT_CHANNEL_RATE = 4;

    /** After this many dropped/denied messages the player is removed. */
    var VIOLATION_LIMIT = 40;

    /** Every known message type (protocol v2). */
    var TYPES = [
        'hello', 'welcome', 'roster', 'ping', 'pong', 'bye', 'error',
        'move', 'bees', 'world', 'collect', 'collectResult', 'damage',
        'convert', 'buy', 'actionResult', 'chat', 'chatMsg', 'quest', 'emote'
    ];

    /** World clamping box (metres). Generous — the real map is smaller. */
    var WORLD = { minX: -2000, maxX: 2000, minY: -200, maxY: 800, minZ: -2000, maxZ: 2000 };

    /** Absolute sanity caps for numeric payload fields. */
    var MAX_AMOUNT = 1e15;
    var MAX_STRING = 120;
    var MAX_CHAT = 200;
    var MAX_NAME = 24;

    /** Player / hive rules (BSS reference numbers). */
    var MIN_PLAYERS = 2;
    var MAX_PLAYERS = 12;
    var DEFAULT_MAX_PLAYERS = 6;     // BSS ships 6 hives per server
    var HIVE_BASE_SLOTS = 25;        // free slots in every hive
    var HIVE_MAX_SLOTS = 50;         // hard cap
    var HIVE_SLOT_BASE_COST = 3000000;   // first extra slot costs 3,000,000 honey
    var HIVE_SLOT_GROWTH = 1.35;         // sub-exponential price growth

    /**
     * One hive plot per player. Index is the plot; value is the hive origin in
     * world space. The first slot is the game's original hive position.
     */
    var HIVE_PLOTS = [];
    (function () {
        for (var i = 0; i < MAX_PLAYERS; i++) {
            HIVE_PLOTS.push([
                7.375 + (i % 6) * 12.0,
                1.5,
                -7.5 + Math.floor(i / 6) * 12.0
            ]);
        }
    })();

    /** You must be this close to YOUR OWN hive to convert pollen / buy slots. */
    var HIVE_INTERACT_RADIUS = 8;
    /** A reward token must be this close to be collectable. */
    var TOKEN_PICKUP_RADIUS = 12;

    /** Remote-transform rendering. */
    var DEFAULT_RENDER_BUFFER_MS = 100;   // ~100 ms interpolation buffer
    var MIN_RENDER_BUFFER_MS = 0;
    var MAX_RENDER_BUFFER_MS = 1000;
    var TELEPORT_SNAP_DISTANCE = 4;       // metres; bigger = candidate teleport
    /** Implied speed (m/s) above which a jump is treated as a teleport. */
    var MAX_INTERP_SPEED = 60;
    var MOVE_SEND_HZ = 20;                // Stage A: local transform at 20 Hz
    var BEES_SEND_HZ = 8;                 // Stage B: bee transforms at 8 Hz
    var WORLD_SEND_HZ = 8;

    /** Default honey per pollen used by the authority when converting. */
    var DEFAULT_HONEY_PER_POLLEN = 0.25;
    var MIN_HONEY_PER_POLLEN = 0.01;
    var MAX_HONEY_PER_POLLEN = 2;

    /* =====================================================================
     * 2. HELPERS  (environment agnostic; no TextEncoder / Buffer required)
     * ===================================================================== */

    /** Configurable environment so tests / the server can inject WebRTC etc. */
    var ENV = (typeof globalThis !== 'undefined') ? globalThis : {};
    function setEnv(env) { ENV = env || {}; return ENV; }
    function getEnv() { return ENV; }

    /** The one clock shared by authority, transports and session. */
    var clock = {
        now: function () { return Date.now(); }
    };

    var _uidCounter = 0;
    /** Unique id, e.g. uid('p') -> "p1a2b3c4d5e". */
    function uid(prefix) {
        _uidCounter = (_uidCounter + 1) % 0xffff;
        var t = clock.now().toString(36);
        var r = Math.floor(Math.random() * 0x7fffffff).toString(36);
        return (prefix || '') + t + r + (_uidCounter.toString(36));
    }

    function clamp(v, min, max) {
        v = Number(v);
        if (!isFinite(v)) return min;
        if (v < min) return min;
        if (v > max) return max;
        return v;
    }

    function clampInt(v, min, max) {
        return Math.round(clamp(v, min, max));
    }

    /** Normalise an angle to (-PI, PI]. */
    function clampAngle(a) {
        a = Number(a);
        if (!isFinite(a)) return 0;
        var twoPi = Math.PI * 2;
        a = a % twoPi;
        if (a <= -Math.PI) a += twoPi;
        if (a > Math.PI) a -= twoPi;
        return a;
    }

    /** Clamp a [x,y,z] triple into the world box. Returns a fresh array. */
    function clampPosition(p) {
        if (!p || typeof p !== 'object') return [0, 0, 0];
        var x = clamp(p[0], WORLD.minX, WORLD.maxX);
        var y = clamp(p[1], WORLD.minY, WORLD.maxY);
        var z = clamp(p[2], WORLD.minZ, WORLD.maxZ);
        return [x, y, z];
    }

    /**
     * Strip control characters, collapse whitespace runs, trim and truncate.
     * Used for every inbound string so nothing hostile reaches the UI.
     */
    function sanitizeString(s, maxLen) {
        if (typeof s !== 'string') return '';
        maxLen = maxLen || MAX_STRING;
        var out = '';
        for (var i = 0; i < s.length && out.length < maxLen; i++) {
            var c = s.charCodeAt(i);
            if (c === 9 || c === 10 || c === 13) { out += ' '; continue; }
            if (c < 32 || c === 127) continue;             // control chars
            if (c >= 0x2028 && c <= 0x2029) { out += ' '; continue; }   // line/para separators
            out += s.charAt(i);
        }
        out = out.replace(/\s+/g, ' ').trim();
        if (out.length > maxLen) out = out.slice(0, maxLen);
        return out;
    }

    /** UTF-8 byte length without depending on TextEncoder (vm safe). */
    function utf8ByteLength(str) {
        if (typeof str !== 'string') return 0;
        var n = 0;
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if (c < 0x80) n += 1;
            else if (c < 0x800) n += 2;
            else if (c >= 0xd800 && c <= 0xdbff && i + 1 < str.length) {
                var c2 = str.charCodeAt(i + 1);
                if (c2 >= 0xdc00 && c2 <= 0xdfff) { n += 4; i++; }
                else n += 3;
            } else n += 3;
        }
        return n;
    }

    var B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    /** Manual base64 of a UTF-8 string (no btoa / Buffer dependency). */
    function base64Encode(str) {
        var bytes = [];
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if (c < 0x80) bytes.push(c);
            else if (c < 0x800) {
                bytes.push(0xc0 | (c >> 6), 0x80 | (c & 63));
            } else if (c >= 0xd800 && c <= 0xdbff && i + 1 < str.length) {
                var lo = str.charCodeAt(++i);
                var cp = 0x10000 + ((c - 0xd800) << 10) + (lo - 0xdc00);
                bytes.push(0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 63),
                           0x80 | ((cp >> 6) & 63), 0x80 | (cp & 63));
            } else {
                bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
            }
        }
        var out = '';
        for (var j = 0; j < bytes.length; j += 3) {
            var b0 = bytes[j], b1 = bytes[j + 1], b2 = bytes[j + 2];
            out += B64[b0 >> 2];
            out += B64[((b0 & 3) << 4) | ((b1 === undefined ? 0 : b1) >> 4)];
            out += b1 === undefined ? '=' : B64[((b1 & 15) << 2) | ((b2 === undefined ? 0 : b2) >> 6)];
            out += b2 === undefined ? '=' : B64[b2 & 63];
        }
        return out;
    }

    /** Manual base64 decode back to a UTF-8 string. */
    function base64Decode(b64) {
        if (typeof b64 !== 'string') return '';
        b64 = b64.replace(/[^A-Za-z0-9+/=]/g, '');
        var bytes = [];
        for (var i = 0; i < b64.length; i += 4) {
            var e0 = B64.indexOf(b64[i]);
            var e1 = B64.indexOf(b64[i + 1]);
            if (e0 < 0 || e1 < 0) break;
            var e2 = b64[i + 2] === '=' || b64[i + 2] === undefined ? -1 : B64.indexOf(b64[i + 2]);
            var e3 = b64[i + 3] === '=' || b64[i + 3] === undefined ? -1 : B64.indexOf(b64[i + 3]);
            bytes.push((e0 << 2) | (e1 >> 4));
            if (e2 >= 0) bytes.push(((e1 & 15) << 4) | (e2 >> 2));
            if (e3 >= 0) bytes.push(((e2 & 3) << 6) | e3);
        }
        var out = '';
        for (var j = 0; j < bytes.length;) {
            var b = bytes[j++];
            if (b < 0x80) out += String.fromCharCode(b);
            else if (b < 0xe0) {
                out += String.fromCharCode(((b & 31) << 6) | (bytes[j++] & 63));
            } else if (b < 0xf0) {
                out += String.fromCharCode(((b & 15) << 12) | ((bytes[j++] & 63) << 6) | (bytes[j++] & 63));
            } else {
                var cp = ((b & 7) << 18) | ((bytes[j++] & 63) << 12) | ((bytes[j++] & 63) << 6) | (bytes[j++] & 63);
                cp -= 0x10000;
                out += String.fromCharCode(0xd800 + (cp >> 10), 0xdc00 + (cp & 1023));
            }
        }
        return out;
    }

    /** Typed error. Expected failure paths RETURN these; they never throw. */
    function MPError(code, message, detail) {
        var e = new Error(message || code);
        e.name = 'MPError';
        e.code = code;
        if (detail !== undefined) e.detail = detail;
        return e;
    }
    function isMPError(e) { return !!(e && e.name === 'MPError'); }
    function fail(code, message) { return { ok: false, error: MPError(code, message) }; }
    function pass(v) { v = v || {}; v.ok = true; return v; }

    /** Tiny event emitter used by transports + sessions. */
    function createEmitter() {
        var handlers = Object.create(null);
        var api = {
            on: function (event, cb) {
                if (typeof cb !== 'function') return function () {};
                (handlers[event] || (handlers[event] = [])).push(cb);
                return function () { api.off(event, cb); };
            },
            off: function (event, cb) {
                var list = handlers[event];
                if (!list) return;
                var i = list.indexOf(cb);
                if (i >= 0) list.splice(i, 1);
            },
            emit: function (event) {
                var list = handlers[event];
                if (!list || !list.length) return;
                var args = Array.prototype.slice.call(arguments, 1);
                var copy = list.slice();
                for (var i = 0; i < copy.length; i++) {
                    try { copy[i].apply(null, args); }
                    catch (e) { /* a bad listener must never break the transport */ }
                }
            },
            removeAll: function () { handlers = Object.create(null); }
        };
        return api;
    }

    /* =====================================================================
     * 3. PROTOCOL CODEC + VALIDATORS
     * =====================================================================
     * Envelope: { v: 2, t: <type>, q: <sequence>, f?: <relayed origin id>, d: payload }
     *
     * decode() performs, in order:
     *   size check -> JSON.parse -> v === 2 -> known type -> per-type validator
     * A validator REBUILDS a clean payload object and DROPS unknown keys, so a
     * malicious peer cannot smuggle extra fields through to the game.
     * ===================================================================== */

    var TYPESET = Object.create(null);
    for (var _ti = 0; _ti < TYPES.length; _ti++) TYPESET[TYPES[_ti]] = true;

    function isPlainObject(o) {
        return !!o && typeof o === 'object' && !Array.isArray(o);
    }

    /**
     * Build a clean vec3 from an arbitrary value, clamped to the world box.
     * Anything that is not a finite numeric triple falls back to the supplied
     * default (usually the origin) rather than to a world corner.
     */
    function cleanVec3(v, fallback) {
        var fb = fallback ? fallback.slice() : [0, 0, 0];
        if (!v || typeof v !== 'object' || v.length === undefined || v.length < 3) return fb;
        var mins = [WORLD.minX, WORLD.minY, WORLD.minZ];
        var maxs = [WORLD.maxX, WORLD.maxY, WORLD.maxZ];
        var out = [];
        for (var i = 0; i < 3; i++) {
            var n = Number(v[i]);
            if (!isFinite(n)) return fb;
            out.push(clamp(n, mins[i], maxs[i]));
        }
        return out;
    }

    function cleanVec3List(list, max, fallback) {
        if (!Array.isArray(list)) return [];
        var out = [];
        for (var i = 0; i < list.length && out.length < max; i++) {
            out.push(cleanVec3(list[i], fallback));
        }
        return out;
    }

    function cleanUint8(v) { return v ? 1 : 0; }

    /** Validate an id-like string: short, printable, no control characters. */
    function cleanId(v, fallback) {
        var s = sanitizeString(typeof v === 'string' ? v : '', 64);
        return s.length ? s : (fallback || '');
    }

    // ---- per-type validators ------------------------------------------------
    // Each returns a CLEAN payload object or null (null => invalid -> dropped).

    var validators = {
        hello: function (d) {
            var name = sanitizeString(d.name, MAX_NAME);
            // `id` lets a peer announce the id its connection will be PINNED to.
            var out = { name: name || 'Bee', id: cleanId(d.id) };
            if (isPlainObject(d.profile)) {
                // Join-time profile is clamped to legal limits (trusted once).
                out.profile = cleanProfile(d.profile);
            }
            return out;
        },

        welcome: function (d) {
            return {
                id: cleanId(d.id),
                room: sanitizeString(d.room, 48),
                seed: clampInt(d.seed, 0, 2147483647),
                maxPlayers: clampInt(d.maxPlayers, MIN_PLAYERS, MAX_PLAYERS),
                players: cleanRosterPlayers(d.players),
                you: isPlainObject(d.you) ? {
                    hiveIndex: clampInt(d.you.hiveIndex, 0, MAX_PLAYERS - 1),
                    hivePos: cleanVec3(d.you.hivePos),
                    honey: clamp(d.you.honey, 0, MAX_AMOUNT),
                    pollen: clamp(d.you.pollen, 0, MAX_AMOUNT),
                    capacity: clamp(d.you.capacity, 0, MAX_AMOUNT),
                    bees: clampInt(d.you.bees, 0, HIVE_MAX_SLOTS)
                } : null
            };
        },

        roster: function (d) {
            return { players: cleanRosterPlayers(d.players) };
        },

        ping: function (d) { return { t: clamp(d.t, 0, MAX_AMOUNT) }; },
        pong: function (d) { return { t: clamp(d.t, 0, MAX_AMOUNT) }; },

        bye: function (d) { return { reason: sanitizeString(d.reason, 64) }; },

        error: function (d) {
            return {
                code: sanitizeString(d.code, 40) || 'error',
                message: sanitizeString(d.message, 200)
            };
        },

        move: function (d) {
            return {
                p: cleanVec3(d.p),
                y: clampAngle(d.y),
                m: cleanUint8(d.m),
                s: clamp(d.s, 0, 500),
                st: d.st ? sanitizeString(d.st, 24) : ''
            };
        },

        bees: function (d) {
            var list = Array.isArray(d.bees) ? d.bees : [];
            var out = [];
            for (var i = 0; i < list.length && out.length < HIVE_MAX_SLOTS; i++) {
                var b = list[i];
                if (!isPlainObject(b)) continue;
                out.push({
                    id: cleanId(b.id),
                    type: sanitizeString(b.type, 32),
                    p: cleanVec3(b.p),
                    tgt: b.tgt ? cleanVec3(b.tgt) : null,
                    st: sanitizeString(b.st, 24)
                });
            }
            return { bees: out };
        },

        world: function (d) {
            var out = {};
            if (Array.isArray(d.pollen)) {
                out.pollen = [];
                for (var i = 0; i < d.pollen.length && i < 32; i++) {
                    var f = d.pollen[i];
                    if (!isPlainObject(f)) continue;
                    out.pollen.push({
                        field: sanitizeString(f.field, 32),
                        amount: clamp(f.amount, 0, MAX_AMOUNT)
                    });
                }
            }
            if (Array.isArray(d.tokens)) {
                out.tokens = [];
                for (var j = 0; j < d.tokens.length && j < 32; j++) {
                    var tk = d.tokens[j];
                    if (!isPlainObject(tk)) continue;
                    out.tokens.push({
                        id: cleanId(tk.id),
                        type: sanitizeString(tk.type, 32),
                        p: cleanVec3(tk.p),
                        value: clamp(tk.value, 0, MAX_AMOUNT)
                    });
                }
            }
            if (Array.isArray(d.enemies)) {
                out.enemies = [];
                for (var k = 0; k < d.enemies.length && k < 32; k++) {
                    var en = d.enemies[k];
                    if (!isPlainObject(en)) continue;
                    out.enemies.push({
                        id: cleanId(en.id),
                        type: sanitizeString(en.type, 32),
                        p: cleanVec3(en.p),
                        hp: clamp(en.hp, 0, MAX_AMOUNT)
                    });
                }
            }
            return out;
        },

        collect: function (d) {
            return {
                kind: sanitizeString(d.kind, 16) || 'token',
                id: cleanId(d.id),
                field: sanitizeString(d.field, 32),
                amount: clamp(d.amount, 0, MAX_AMOUNT)
            };
        },

        collectResult: function (d) {
            return {
                ok: !!d.ok,
                id: cleanId(d.id),
                amount: clamp(d.amount, 0, MAX_AMOUNT),
                by: cleanId(d.by),
                reason: sanitizeString(d.reason, 48)
            };
        },

        damage: function (d) {
            return {
                target: cleanId(d.target),
                type: sanitizeString(d.type, 32),
                amount: clamp(d.amount, 0, MAX_AMOUNT),
                p: d.p ? cleanVec3(d.p) : null
            };
        },

        convert: function (d) { return { amount: clamp(d.amount, 0, MAX_AMOUNT) }; },

        buy: function (d) {
            // The client only ever NAMES the item. It never sends a price.
            return {
                item: sanitizeString(d.item, 40),
                qty: clampInt(d.qty === undefined ? 1 : d.qty, 1, 999),
                hiveIndex: d.hiveIndex === undefined ? undefined : clampInt(d.hiveIndex, 0, MAX_PLAYERS - 1)
            };
        },

        actionResult: function (d) {
            return {
                ok: !!d.ok,
                action: sanitizeString(d.action, 24),
                item: sanitizeString(d.item, 40),
                reason: sanitizeString(d.reason, 48),
                cost: clamp(d.cost, 0, MAX_AMOUNT),
                honey: clamp(d.honey, 0, MAX_AMOUNT),
                pollen: clamp(d.pollen, 0, MAX_AMOUNT),
                gained: clamp(d.gained, 0, MAX_AMOUNT),
                bees: clampInt(d.bees, 0, HIVE_MAX_SLOTS),
                slots: clampInt(d.slots, 0, HIVE_MAX_SLOTS)
            };
        },

        chat: function (d) { return { m: sanitizeString(d.m, MAX_CHAT) }; },

        chatMsg: function (d) {
            return {
                from: cleanId(d.from),
                name: sanitizeString(d.name, MAX_NAME) || 'Bee',
                m: sanitizeString(d.m, MAX_CHAT),
                ts: clamp(d.ts, 0, MAX_AMOUNT)
            };
        },

        quest: function (d) {
            return {
                id: cleanId(d.id),
                state: sanitizeString(d.state, 24),
                progress: clamp(d.progress, 0, MAX_AMOUNT)
            };
        },

        emote: function (d) { return { e: sanitizeString(d.e, 24) }; }
    };

    function cleanProfile(p) {
        var out = {};
        out.name = sanitizeString(p.name, MAX_NAME);
        out.honey = clamp(p.honey, 0, MAX_AMOUNT);
        out.pollen = clamp(p.pollen, 0, MAX_AMOUNT);
        out.capacity = clamp(p.capacity, 1, MAX_AMOUNT);
        out.honeyPerPollen = clamp(
            p.honeyPerPollen === undefined ? DEFAULT_HONEY_PER_POLLEN : p.honeyPerPollen,
            MIN_HONEY_PER_POLLEN, MAX_HONEY_PER_POLLEN);
        out.bees = [];
        if (Array.isArray(p.bees)) {
            for (var i = 0; i < p.bees.length && i < HIVE_MAX_SLOTS; i++) {
                var b = p.bees[i];
                if (!isPlainObject(b)) continue;
                out.bees.push({
                    type: sanitizeString(b.type, 32),
                    level: clampInt(b.level === undefined ? 1 : b.level, 1, 25),
                    gifted: !!b.gifted
                });
            }
        }
        // A versioned, optional extra field on the save. Absent = singleplayer.
        out.mpVersion = clampInt(p.mpVersion === undefined ? PROTOCOL_VERSION : p.mpVersion, 1, 9999);
        return out;
    }

    function cleanRosterPlayers(list) {
        if (!Array.isArray(list)) return [];
        var out = [];
        for (var i = 0; i < list.length && out.length < MAX_PLAYERS; i++) {
            var p = list[i];
            if (!isPlainObject(p)) continue;
            out.push({
                id: cleanId(p.id),
                name: sanitizeString(p.name, MAX_NAME) || 'Bee',
                authority: !!p.authority,
                hiveIndex: clampInt(p.hiveIndex, 0, MAX_PLAYERS - 1),
                hivePos: cleanVec3(p.hivePos),
                bees: clampInt(p.bees, 0, HIVE_MAX_SLOTS),
                honey: clamp(p.honey, 0, MAX_AMOUNT),
                pollen: clamp(p.pollen, 0, MAX_AMOUNT),
                capacity: clamp(p.capacity, 0, MAX_AMOUNT)
            });
        }
        return out;
    }

    /** Encode a message to its JSON wire string. */
    function encode(t, d, opts) {
        opts = opts || {};
        var env = { v: PROTOCOL_VERSION, t: t };
        if (opts.q !== undefined) env.q = opts.q | 0;
        if (opts.f) env.f = opts.f;
        env.d = d === undefined ? {} : d;
        return JSON.stringify(env);
    }

    /**
     * Decode + validate a wire string.
     * Returns { ok:true, msg } or { ok:false, error }.
     * The 8 KiB check happens BEFORE JSON.parse.
     */
    function decode(raw) {
        if (typeof raw !== 'string') {
            if (raw && typeof raw.length === 'number') { /* typed array? */ }
            else return fail('not_text', 'message is not text');
        }
        if (utf8ByteLength(raw) > MAX_MESSAGE_BYTES) {
            return fail('oversize', 'message exceeds ' + MAX_MESSAGE_BYTES + ' bytes');
        }
        var env;
        try { env = JSON.parse(raw); }
        catch (e) { return fail('malformed', 'invalid JSON'); }
        return validateMessage(env);
    }

    /** Validate an already-parsed envelope. */
    function validateMessage(env) {
        if (!isPlainObject(env)) return fail('malformed', 'envelope is not an object');
        if (env.v !== PROTOCOL_VERSION) return fail('bad_version', 'unsupported protocol version');
        if (typeof env.t !== 'string' || !TYPESET[env.t]) return fail('unknown_type', 'unknown message type');
        if (env.q !== undefined && (!isFinite(env.q) || env.q < 0)) return fail('bad_seq', 'bad sequence');
        var clean = validators[env.t](isPlainObject(env.d) ? env.d : {});
        if (clean === null || typeof clean !== 'object') return fail('bad_payload', 'invalid payload');
        var msg = { v: PROTOCOL_VERSION, t: env.t, q: env.q === undefined ? 0 : (env.q | 0), d: clean };
        // `f` is the RELAYED origin. It is preserved (sanitised) so a receiving
        // peer can attribute a relayed message, but an authority NEVER trusts
        // it: the authority stamps/overrides `f` itself and uses the live
        // connection as the identity. See session.handleInbound().
        if (env.f !== undefined) {
            var f = cleanId(env.f);
            if (f) msg.f = f;
        }
        return { ok: true, msg: msg };
    }

    /* =====================================================================
     * 4. RATE LIMITING
     * =====================================================================
     * Token bucket per (owner, channel). Capacity is one second of tokens.
     * `at` can be injected for deterministic tests.
     * ===================================================================== */

    function createRateLimiter(opts) {
        opts = opts || {};
        var channels = opts.channels || CHANNELS;
        var defaultRate = opts.defaultRate || DEFAULT_CHANNEL_RATE;
        var burstSeconds = opts.burstSeconds === undefined ? 1 : opts.burstSeconds;
        var nowFn = opts.now || clock.now;
        var buckets = Object.create(null);   // ownerId -> channel -> {tokens, at}
        var violations = Object.create(null); // ownerId -> count

        function rateOf(channel) {
            var r = channels[channel];
            return (typeof r === 'number' && r > 0) ? r : defaultRate;
        }

        // Capacity is one second of tokens, but never below 1 — otherwise a
        // slow channel (chat/buy) could never send even a single message.
        function capacityOf(channel) {
            return Math.max(1, rateOf(channel) * burstSeconds);
        }

        function bucketFor(owner, channel) {
            var byOwner = buckets[owner] || (buckets[owner] = Object.create(null));
            return byOwner[channel] || (byOwner[channel] = { tokens: capacityOf(channel), at: nowFn() });
        }

        return {
            /** Take one token. -> { ok, retryAfter } */
            take: function (owner, channel, at) {
                at = at === undefined ? nowFn() : at;
                var b = bucketFor(owner, channel);
                var rate = rateOf(channel);
                var elapsed = (at - b.at) / 1000;
                if (elapsed > 0) {
                    b.tokens = Math.min(capacityOf(channel), b.tokens + elapsed * rate);
                    b.at = at;
                }
                if (b.tokens >= 1) {
                    b.tokens -= 1;
                    return { ok: true, retryAfter: 0 };
                }
                var retryAfter = (1 - b.tokens) / rate * 1000;
                return { ok: false, retryAfter: retryAfter };
            },
            /** Count a violation for an owner; -> total count. */
            violate: function (owner) {
                violations[owner] = (violations[owner] || 0) + 1;
                return violations[owner];
            },
            violationCount: function (owner) { return violations[owner] || 0; },
            reset: function (owner) { delete buckets[owner]; delete violations[owner]; },
            resetAll: function () { buckets = Object.create(null); violations = Object.create(null); },
            limit: VIOLATION_LIMIT
        };
    }

    /* =====================================================================
     * 5. PRICING
     * =====================================================================
     * Hive slots are a purchase, not a freebie. Costs live HERE, in one place,
     * and the authority prices every purchase; the client never sends a price.
     * ===================================================================== */

    /** Cost of the k-th EXTRA slot (k = 1 is the first purchasable slot). */
    function hiveSlotCost(extraIndex) {
        if (extraIndex < 1) return null;
        return Math.round(HIVE_SLOT_BASE_COST * Math.pow(HIVE_SLOT_GROWTH, extraIndex - 1));
    }

    /** Full price table: 25 free + 25 purchasable = 50 slots max. */
    function hiveSlotCosts() {
        var table = [];
        var extras = HIVE_MAX_SLOTS - HIVE_BASE_SLOTS;
        for (var k = 1; k <= extras; k++) {
            table.push({ slot: HIVE_BASE_SLOTS + k, cost: hiveSlotCost(k) });
        }
        return table;
    }

    /**
     * Cost to grow a hive from `currentSlots` to `currentSlots + 1`.
     * null when the hive is already at the cap.
     */
    function nextHiveSlotCost(currentSlots) {
        currentSlots = clampInt(currentSlots, 0, HIVE_MAX_SLOTS);
        if (currentSlots >= HIVE_MAX_SLOTS) return null;
        if (currentSlots < HIVE_BASE_SLOTS) return 0;   // inside the free 25
        return hiveSlotCost(currentSlots - HIVE_BASE_SLOTS + 1);
    }

    /** Simple item prices for authoritative buys (keyed by item name). */
    var ITEM_PRICES = {
        hiveSlot: null,          // dynamic, see nextHiveSlotCost
        basicEgg: 1000,
        silverEgg: 5000,
        goldEgg: 25000,
        diamondEgg: 100000,
        treat: 100,
        royalJelly: 250
    };

    /** Authority-side price lookup. Unknown items return null (refused). */
    function priceOf(item, context) {
        if (item === 'hiveSlot') return nextHiveSlotCost(context && context.slots);
        if (!Object.prototype.hasOwnProperty.call(ITEM_PRICES, item)) return null;
        return ITEM_PRICES[item];
    }

    /* =====================================================================
     * 6. AUTHORITATIVE WORLD RULES
     * =====================================================================
     * The server (server.mjs) and the browser host both build the authority
     * from THIS function, so the rules can never drift apart.
     * ===================================================================== */

    function createAuthority(opts) {
        opts = opts || {};
        var clockFn = opts.now || clock.now;
        var seed = (opts.seed === undefined ? 1337 : opts.seed) >>> 0;
        var maxPlayers = clampInt(opts.maxPlayers === undefined ? DEFAULT_MAX_PLAYERS : opts.maxPlayers, MIN_PLAYERS, MAX_PLAYERS);
        var room = opts.room || 'world';
        var authorityId = opts.id || uid('a');
        var events = createEmitter();

        var players = Object.create(null);      // id -> player record
        var order = [];                          // join order of ids
        var usedPlots = Object.create(null);     // plot index -> id
        var tokens = Object.create(null);        // tokenId -> {id,type,value,pos,claimedBy}
        var fields = Object.create(null);        // fieldId -> pollen
        var enemies = Object.create(null);       // enemyId -> {id,type,pos,hp}
        var rngState = seed || 1;

        function rng() {   // deterministic xorshift32 so a --seed reproduces
            rngState ^= rngState << 13; rngState >>>= 0;
            rngState ^= rngState >>> 17;
            rngState ^= rngState << 5; rngState >>>= 0;
            return rngState / 4294967296;
        }

        function playerCount() { return order.length; }

        function freePlot() {
            for (var i = 0; i < HIVE_PLOTS.length; i++) {
                if (usedPlots[i] === undefined) return i;
            }
            return -1;
        }

        /** Public roster entry. */
        function publicPlayer(p) {
            return {
                id: p.id,
                name: p.name,
                authority: p.id === authorityId,
                hiveIndex: p.hive.index,
                hivePos: p.hive.pos.slice(),
                bees: p.bees.length,
                honey: p.honey,
                pollen: p.pollen,
                capacity: p.capacity
            };
        }

        function roster() {
            var list = [];
            for (var i = 0; i < order.length; i++) list.push(publicPlayer(players[order[i]]));
            return list;
        }

        function snapshot() {
            return {
                room: room,
                seed: seed,
                maxPlayers: maxPlayers,
                players: roster(),
                tokens: Object.keys(tokens).map(function (k) { return tokens[k]; }),
                fields: Object.keys(fields).map(function (k) { return { field: k, amount: fields[k] }; }),
                enemies: Object.keys(enemies).map(function (k) { return enemies[k]; })
            };
        }

        /**
         * Join a player. Enforces a unique id, the player cap and unique hive
         * plots. Returns { ok, id, welcome } or a typed failure.
         */
        function join(req) {
            req = req || {};
            var id = cleanId(req.id);
            if (!id) id = uid('p');
            if (players[id]) return fail('already_connected', 'id already connected');
            if (playerCount() >= maxPlayers) return fail('server_full', 'room is full');
            var plot = freePlot();
            if (plot < 0) return fail('server_full', 'no hive plots left');

            var profile = isPlainObject(req.profile) ? cleanProfile(req.profile) : null;
            var p = {
                id: id,
                name: sanitizeString(req.name, MAX_NAME) || (profile && profile.name) || 'Bee',
                hive: { index: plot, pos: HIVE_PLOTS[plot].slice() },
                honey: profile ? profile.honey : 0,
                pollen: profile ? profile.pollen : 0,
                capacity: profile ? profile.capacity : 100,
                honeyPerPollen: profile ? profile.honeyPerPollen : DEFAULT_HONEY_PER_POLLEN,
                bees: profile ? profile.bees.map(function (b) { return { type: b.type, level: b.level, gifted: b.gifted }; }) : [],
                joinedAt: clockFn(),
                lastSeen: clockFn(),
                seq: 0,
                violations: 0
            };
            // A save adopted at join time is clamped to legal limits.
            while (p.bees.length > HIVE_MAX_SLOTS) p.bees.pop();
            // Extra (purchasable) slots already owned = everything past the 25 free.
            p.extraSlots = Math.max(0, p.bees.length - HIVE_BASE_SLOTS);
            p.slots = HIVE_BASE_SLOTS + p.extraSlots;

            players[id] = p;
            order.push(id);
            usedPlots[plot] = id;
            events.emit('join', { id: id, player: publicPlayer(p) });
            return pass({ id: id, plot: plot, welcome: welcomeFor(id) });
        }

        function welcomeFor(id) {
            var p = players[id];
            return {
                id: id,
                room: room,
                seed: seed,
                maxPlayers: maxPlayers,
                players: roster(),
                you: {
                    hiveIndex: p.hive.index,
                    hivePos: p.hive.pos.slice(),
                    honey: p.honey,
                    pollen: p.pollen,
                    capacity: p.capacity,
                    bees: p.bees.length
                }
            };
        }

        /** Leave (or be dropped). Frees the hive plot for the next player. */
        function leave(id, reason) {
            var p = players[id];
            if (!p) return fail('unknown_player', 'no such player');
            delete players[id];
            var i = order.indexOf(id);
            if (i >= 0) order.splice(i, 1);
            if (usedPlots[p.hive.index] === id) delete usedPlots[p.hive.index];
            // Release any tokens this player claimed from the "in flight" set.
            events.emit('leave', { id: id, hiveIndex: p.hive.index, reason: reason || 'bye' });
            return pass({ id: id, freed: p.hive.index });
        }

        function touch(id, at) {
            var p = players[id];
            if (p) p.lastSeen = at === undefined ? clockFn() : at;
        }

        /** Remove players whose lastSeen is older than `timeoutMs`. */
        function sweep(timeoutMs, at) {
            at = at === undefined ? clockFn() : at;
            timeoutMs = timeoutMs === undefined ? 15000 : timeoutMs;
            var removed = [];
            for (var i = order.length - 1; i >= 0; i--) {
                var id = order[i];
                if (at - players[id].lastSeen > timeoutMs) {
                    leave(id, 'timeout');
                    removed.push(id);
                }
            }
            return removed;
        }

        function dist(a, b) {
            var dx = a[0] - b[0], dy = a[1] - b[1], dz = a[2] - b[2];
            return Math.sqrt(dx * dx + dy * dy + dz * dz);
        }

        /** Claim a token exactly once. Two racers -> exactly one wins. */
        function collect(ownerId, d) {
            var p = players[ownerId];
            if (!p) return fail('unknown_player', 'not in the room');
            var kind = d.kind || 'token';

            if (kind === 'token') {
                var tk = tokens[d.id];
                if (!tk) return fail('gone', 'no such token');
                if (tk.claimedBy) return fail('gone', 'token already claimed');
                var pp = p.lastPos;
                if (pp && dist(pp, tk.pos) > TOKEN_PICKUP_RADIUS) return fail('too_far', 'token out of range');
                tk.claimedBy = ownerId;              // claim-once, atomically
                var amount = tk.value;
                var before = p.pollen;
                p.pollen = Math.min(p.capacity, p.pollen + amount);
                var gained = p.pollen - before;      // overflows the bag, stays capped
                events.emit('collect', { by: ownerId, id: tk.id, amount: gained, overflow: amount - gained });
                return pass({ id: tk.id, amount: gained, overflow: amount - gained, pollen: p.pollen, capacity: p.capacity });
            }

            // Flower / field collection: authority checks the field exists and
            // the drain is sane, then the client applies the visual change.
            if (kind === 'flower') {
                var fieldPollen = fields[d.field];
                if (fieldPollen === undefined) return fail('no_field', 'unknown field');
                var take = clamp(d.amount, 0, fieldPollen);
                fields[d.field] = fieldPollen - take;
                var b4 = p.pollen;
                p.pollen = Math.min(p.capacity, p.pollen + take);
                return pass({ field: d.field, amount: p.pollen - b4, pollen: p.pollen, capacity: p.capacity });
            }

            return fail('bad_kind', 'unknown collect kind');
        }

        /** Damage an enemy; the authority owns enemy hp. */
        function damage(ownerId, d) {
            if (!players[ownerId]) return fail('unknown_player', 'not in the room');
            var en = enemies[d.target];
            if (!en) return fail('gone', 'no such enemy');
            var amt = clamp(d.amount, 0, 1e9);
            en.hp = Math.max(0, en.hp - amt);
            var killed = en.hp <= 0;
            if (killed) delete enemies[en.id];
            return pass({ target: en.id, hp: en.hp, killed: killed });
        }

        /** Convert pollen to honey AT YOUR OWN HIVE. */
        function convert(ownerId, d) {
            var p = players[ownerId];
            if (!p) return fail('unknown_player', 'not in the room');
            var atHive = !p.lastPos || dist(p.lastPos, p.hive.pos) <= HIVE_INTERACT_RADIUS;
            if (!atHive) return fail('not_at_hive', 'conversion only happens at your own hive');
            var amount = clamp(d.amount, 0, p.pollen);
            var gained = Math.floor(amount * p.honeyPerPollen);
            p.pollen -= amount;
            p.honey += gained;
            return pass({ converted: amount, gained: gained, honey: p.honey, pollen: p.pollen });
        }

        /** Buy something. The authority prices it; the client never sends one. */
        function buy(ownerId, d) {
            var p = players[ownerId];
            if (!p) return fail('unknown_player', 'not in the room');

            if (d.item === 'hiveSlot') {
                // The player's hive grows one slot at a time; extra slots start
                // after the free 25 and the price grows sub-exponentially. The
                // ONE price table lives in this file — the client never sends one.
                var ownedExtras = Math.max(0, p.extraSlots || 0);
                if (HIVE_BASE_SLOTS + ownedExtras >= HIVE_MAX_SLOTS) return fail('max_slots', 'hive is already full');
                var cost = hiveSlotCost(ownedExtras + 1);
                if (p.honey < cost) return fail('not_enough_honey', 'not enough honey');
                p.honey -= cost;
                p.extraSlots = ownedExtras + 1;
                p.slots = HIVE_BASE_SLOTS + p.extraSlots;
                p.bees.push({ type: '', level: 1, gifted: false });   // empty slot
                return pass({
                    action: 'buy', item: 'hiveSlot', cost: cost,
                    honey: p.honey, slots: p.slots, slotsMax: HIVE_MAX_SLOTS
                });
            }

            var price = priceOf(d.item, { slots: p.slots || HIVE_BASE_SLOTS });
            if (price === null) return fail('unknown_item', 'unknown item');
            var total = price * (d.qty || 1);
            if (p.honey < total) return fail('not_enough_honey', 'not enough honey');
            p.honey -= total;
            return pass({ action: 'buy', item: d.item, cost: total, qty: d.qty || 1, honey: p.honey });
        }

        /** Generate the world's starting tokens/fields (deterministic by seed). */
        function seedWorld(tokenSpecs, fieldSpecs) {
            tokens = Object.create(null);
            fields = Object.create(null);
            enemies = Object.create(null);
            (tokenSpecs || []).forEach(function (t, i) {
                var id = t.id || ('tok' + i);
                tokens[id] = {
                    id: id,
                    type: sanitizeString(t.type, 32) || 'honey',
                    value: clamp(t.value === undefined ? 10 : t.value, 0, MAX_AMOUNT),
                    pos: clampPosition(t.p || [0, 0, 0]),
                    claimedBy: null
                };
            });
            (fieldSpecs || []).forEach(function (f) {
                fields[sanitizeString(f.field, 32)] = clamp(f.amount === undefined ? 0 : f.amount, 0, MAX_AMOUNT);
            });
            return snapshot();
        }

        return {
            id: authorityId,
            room: room,
            seed: seed,
            maxPlayers: maxPlayers,
            on: events.on,
            off: events.off,

            join: join,
            leave: leave,
            welcomeFor: welcomeFor,
            roster: roster,
            snapshot: snapshot,
            playerCount: playerCount,
            getPlayer: function (id) { return players[id]; },
            players: function () { return order.slice(); },
            touch: touch,
            sweep: sweep,
            rng: rng,

            /** Record the last position we saw for a player (distance checks). */
            notePosition: function (id, pos) {
                var p = players[id];
                if (p) p.lastPos = clampPosition(pos);
            },
            /** Advance the per-player sequence; stale/duplicate -> false. */
            noteSeq: function (id, q) {
                var p = players[id];
                if (!p) return false;
                if (typeof q === 'number' && q <= p.seq) return false;
                if (typeof q === 'number') p.seq = q;
                return true;
            },

            collect: collect,
            damage: damage,
            convert: convert,
            buy: buy,
            seedWorld: seedWorld,

            // test / server helpers
            setToken: function (t) {
                var id = cleanId(t.id) || uid('tok');
                tokens[id] = {
                    id: id, type: sanitizeString(t.type, 32) || 'honey',
                    value: clamp(t.value === undefined ? 10 : t.value, 0, MAX_AMOUNT),
                    pos: clampPosition(t.p || [0, 0, 0]), claimedBy: null
                };
                return tokens[id];
            },
            getToken: function (id) { return tokens[id]; },
            getField: function (f) { return fields[f]; }
        };
    }

    /* =====================================================================
     * 7. SESSION STATE MACHINE + INTERPOLATION
     * ===================================================================== */

    var STATES = ['idle', 'hosting', 'connecting', 'connected', 'disconnecting', 'error'];

    /** Legal transitions. Anything else is refused with a typed error. */
    var TRANSITIONS = {
        idle: ['hosting', 'connecting'],
        hosting: ['connected', 'disconnecting', 'error', 'idle'],
        connecting: ['connected', 'error', 'idle'],
        connected: ['disconnecting', 'error'],
        disconnecting: ['idle', 'error'],
        error: ['idle', 'connecting', 'hosting']
    };

    function canTransition(from, to) {
        var allowed = TRANSITIONS[from];
        return !!(allowed && allowed.indexOf(to) >= 0);
    }

    /**
     * Interpolates remote transforms. Samples describe a position + yaw at a
     * clock time. We render `bufferMs` in the past so a sample has usually
     * already arrived. Large jumps SNAP instead of interpolating.
     */
    function createInterpolator(opts) {
        opts = opts || {};
        var bufferMs = clamp(opts.bufferMs === undefined ? DEFAULT_RENDER_BUFFER_MS : opts.bufferMs,
            MIN_RENDER_BUFFER_MS, MAX_RENDER_BUFFER_MS);
        var snapDistance = opts.snapDistance === undefined ? TELEPORT_SNAP_DISTANCE : opts.snapDistance;
        var maxSpeed = opts.maxSpeed === undefined ? MAX_INTERP_SPEED : opts.maxSpeed;
        var samples = [];
        var lastSnap = true;
        var lastOut = null;

        function push(sample) {
            sample = sample || {};
            samples.push({
                t: clamp(sample.t === undefined ? clock.now() : sample.t, 0, 1e15),
                p: clampPosition(sample.p),
                y: clampAngle(sample.y),
                m: sample.m ? 1 : 0,
                s: clamp(sample.s, 0, 500)
            });
            if (samples.length > 32) samples.shift();
        }

        function lerp(a, b, k) { return a + (b - a) * k; }

        /** Sample the buffered timeline. Returns { p, y, m, s, snapped, ready }. */
        function sample(at) {
            at = at === undefined ? clock.now() : at;
            var renderAt = at - bufferMs;
            if (!samples.length) return null;
            if (samples.length === 1) {
                var only = samples[0];
                lastOut = { p: only.p.slice(), y: only.y, m: only.m, s: only.s, snapped: true, ready: true };
                return lastOut;
            }
            var b = null, a = null;
            for (var i = 0; i < samples.length; i++) {
                if (samples[i].t <= renderAt) b = samples[i];
                if (samples[i].t > renderAt) { a = samples[i]; break; }
            }
            var older = samples.length >= 2 ? samples[samples.length - 2] : null;
            var newest = samples[samples.length - 1];

            if (!a) {   // ahead of the newest sample: hold it
                lastOut = { p: newest.p.slice(), y: newest.y, m: newest.m, s: newest.s, snapped: false, ready: true };
                return lastOut;
            }
            if (!b) {   // behind the oldest sample
                lastOut = { p: samples[0].p.slice(), y: samples[0].y, m: samples[0].m, s: samples[0].s, snapped: true, ready: true };
                return lastOut;
            }
            // A TELEPORT is a large jump in a short time (implied speed far above
            // anything a player can run). A fast run over a whole second is still
            // interpolated smoothly.
            var jump = dist3(b.p, a.p);
            var dtSec = Math.max((a.t - b.t) / 1000, 0.001);
            if (jump > snapDistance && (jump / dtSec) > maxSpeed) {
                lastOut = { p: a.p.slice(), y: a.y, m: a.m, s: a.s, snapped: true, ready: true };
                return lastOut;
            }
            var span = a.t - b.t;
            var k = span > 0 ? (renderAt - b.t) / span : 0;
            k = clamp(k, 0, 1);
            lastOut = {
                p: [lerp(b.p[0], a.p[0], k), lerp(b.p[1], a.p[1], k), lerp(b.p[2], a.p[2], k)],
                y: b.y + shortestAngle(b.y, a.y) * k,
                m: b.m,
                s: lerp(b.s, a.s, k),
                snapped: false,
                ready: true
            };
            return lastOut;
        }

        return {
            bufferMs: bufferMs,
            snapDistance: snapDistance,
            push: push,
            sample: sample,
            samples: function () { return samples.slice(); },
            reset: function () { samples = []; lastOut = null; lastSnap = true; }
        };
    }

    function dist3(a, b) {
        var dx = a[0] - b[0], dy = a[1] - b[1], dz = a[2] - b[2];
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    /** Signed shortest angular difference from a to b, in (-PI, PI]. */
    function shortestAngle(a, b) {
        var d = clampAngle(b - a);
        return d;
    }

    /**
     * A session ties a transport to gameplay. The SAME session code runs in
     * peer-to-peer and server modes; only the transport differs. When
     * `role === 'authority'` the session also runs the authoritative rules
     * from createAuthority().
     */
    function createSession(opts) {
        opts = opts || {};
        var transport = opts.transport;
        if (!transport) throw MPError('no_transport', 'a session needs a transport');
        var role = opts.role === 'authority' ? 'authority' : 'client';
        var authority = role === 'authority'
            ? (opts.authority || createAuthority({
                seed: opts.seed, maxPlayers: opts.maxPlayers, room: opts.room, now: opts.now
            }))
            : null;
        var emitter = createEmitter();
        var nowFn = opts.now || clock.now;
        var selfId = opts.id || (authority ? authority.id : uid('p'));
        var seq = 0;
        var state = 'idle';
        var limiters = createRateLimiter({ now: nowFn });
        var interpolators = Object.create(null);
        var profiles = Object.create(null);
        var joined = Object.create(null);
        var name = sanitizeString(opts.name, MAX_NAME) || 'Bee';
        var renderBufferMs = opts.renderBufferMs === undefined ? DEFAULT_RENDER_BUFFER_MS : opts.renderBufferMs;
        var remoteRoster = [];   // last roster this client received from the authority
        var remoteBeeState = {}; // ownerId -> latest bee list (Stage B)

        function setState(next, detail) {
            if (state === next) return true;
            if (!canTransition(state, next)) {
                emitter.emit('error', MPError('bad_state', 'illegal transition ' + state + ' -> ' + next));
                return false;
            }
            state = next;
            emitter.emit('state', { state: state, mode: transport.getState().mode, detail: detail });
            return true;
        }

        function interpFor(id) {
            return interpolators[id] || (interpolators[id] = createInterpolator({ bufferMs: renderBufferMs }));
        }

        function rosterPayload() {
            return authority ? authority.roster() : [];
        }

        function sendTo(id, t, d) { transport.sendTo(id, t, d); }
        function broadcast(t, d) { transport.broadcast(t, d); }

        // ---- inbound handling -------------------------------------------------

        function handleInbound(envelope, from) {
            // Identity comes from the CONNECTION (the authority holds it), never
            // from the payload's own `f`.
            var owner = from || null;
            if (owner && owner === selfId) return;   // never apply our own relayed message

            // Rate limit on the channel named by the type (authority only).
            if (authority && owner) {
                var take = limiters.take(owner, envelope.t);
                if (!take.ok) {
                    var count = authority.getPlayer(owner) ? limiters.violate(owner) : limiters.violationCount(owner);
                    emitter.emit('violation', { id: owner, type: envelope.t, count: count, retryAfter: take.retryAfter });
                    if (count >= VIOLATION_LIMIT) {
                        authority.leave(owner, 'violations');
                        transport.drop(owner);
                        emitter.emit('leave', { id: owner, reason: 'violations' });
                    }
                    return;
                }
            }

            switch (envelope.t) {
                case 'hello': {
                    if (!authority) return;
                    // `origin` is the raw connection handle; `realId` is the id the
                    // peer announces. Errors must go back to the CONNECTION (the
                    // announced id does not exist yet when the join fails).
                    var origin = owner;
                    var realId = envelope.d.id || origin;
                    if (typeof transport.pinPeer === 'function') transport.pinPeer(origin, realId);
                    owner = realId;
                    var res = authority.join({
                        id: realId, name: envelope.d.name, profile: envelope.d.profile
                    });
                    if (!res.ok) {
                        sendTo(origin, 'error', { code: res.error.code, message: res.error.message });
                        if (typeof transport.drop === 'function') transport.drop(origin);
                        return;
                    }
                    joined[owner] = true;
                    sendTo(owner, 'welcome', res.welcome);
                    broadcast('roster', { players: rosterPayload() });
                    emitter.emit('join', { id: owner, player: authority.getPlayer(owner) });
                    emitter.emit('players', rosterPayload());
                    return;
                }
                case 'move': {
                    authority && authority.notePosition(owner, envelope.d.p);
                    interpFor(owner).push({
                        t: nowFn(), p: envelope.d.p, y: envelope.d.y, m: envelope.d.m, s: envelope.d.s
                    });
                    emitter.emit('move', { id: owner, d: envelope.d });
                    return;
                }
                case 'bees':
                    if (owner) remoteBeeState[owner] = envelope.d.bees;
                    emitter.emit('bees', { id: owner, d: envelope.d });
                    return;
                case 'world':
                    emitter.emit('world', { id: owner, d: envelope.d });
                    return;
                case 'collect': {
                    if (!authority) return;
                    var r = authority.collect(owner, envelope.d);
                    sendTo(owner, 'collectResult', r.ok
                        ? { ok: true, id: r.id, amount: r.amount, by: owner }
                        : { ok: false, id: envelope.d.id, reason: r.error.code });
                    if (r.ok) broadcast('collectResult', { ok: true, id: r.id, amount: r.amount, by: owner });
                    emitter.emit('collect', { id: owner, d: envelope.d, result: r });
                    return;
                }
                case 'damage': {
                    if (!authority) return;
                    var rd = authority.damage(owner, envelope.d);
                    emitter.emit('damage', { id: owner, d: envelope.d, result: rd });
                    return;
                }
                case 'convert': {
                    if (!authority) return;
                    var rc = authority.convert(owner, envelope.d);
                    var out = rc.ok
                        ? { ok: true, action: 'convert', gained: rc.gained, honey: rc.honey, pollen: rc.pollen }
                        : { ok: false, action: 'convert', reason: rc.error.code };
                    sendTo(owner, 'actionResult', out);
                    emitter.emit('action', { id: owner, result: out });
                    return;
                }
                case 'buy': {
                    if (!authority) return;
                    var rb = authority.buy(owner, envelope.d);
                    var bout = rb.ok
                        ? { ok: true, action: 'buy', item: rb.item, cost: rb.cost, honey: rb.honey, slots: rb.slots }
                        : { ok: false, action: 'buy', item: envelope.d.item, reason: rb.error.code };
                    sendTo(owner, 'actionResult', bout);
                    if (rb.ok && rb.item === 'hiveSlot') broadcast('roster', { players: rosterPayload() });
                    emitter.emit('action', { id: owner, result: bout });
                    return;
                }
                case 'chat': {
                    // Only the authority converts chat into a chatMsg broadcast.
                    if (!authority) return;
                    var m = envelope.d.m;
                    if (!m) return;
                    var pl = authority ? authority.getPlayer(owner) : null;
                    var payload = { from: owner || selfId, name: (pl && pl.name) || name, m: m, ts: nowFn() };
                    broadcast('chatMsg', payload);
                    emitter.emit('chat', payload);
                    return;
                }
                case 'ping':
                    sendTo(owner || selfId, 'pong', { t: envelope.d.t });
                    return;
                case 'welcome':
                case 'roster':
                    remoteRoster = envelope.d.players || [];
                    emitter.emit('roster', remoteRoster);
                    emitter.emit('players', remoteRoster);
                    if (envelope.t === 'welcome' && envelope.d && envelope.d.you) {
                        emitter.emit('welcome', envelope.d);
                    }
                    return;
                case 'collectResult':
                case 'actionResult':
                    emitter.emit('result', { id: owner, t: envelope.t, d: envelope.d });
                    return;
                case 'chatMsg':
                    emitter.emit('chat', envelope.d);
                    return;
                case 'emote':
                    emitter.emit('emote', { id: owner, e: envelope.d.e });
                    return;
                case 'quest':
                    emitter.emit('quest', { id: owner, d: envelope.d });
                    return;
                case 'bye':
                    if (authority && owner) {
                        authority.leave(owner, envelope.d.reason || 'bye');
                        broadcast('roster', { players: rosterPayload() });
                        emitter.emit('leave', { id: owner, reason: envelope.d.reason || 'bye' });
                        emitter.emit('players', rosterPayload());
                    }
                    return;
                case 'error':
                    emitter.emit('error', MPError(envelope.d.code || 'remote_error', envelope.d.message || 'remote error'));
                    return;
                case 'pong':
                    emitter.emit('pong', envelope.d);
                    return;
                default:
                    emitter.emit('message', { id: owner, t: envelope.t, d: envelope.d });
            }
        }

        // ---- transport wiring ------------------------------------------------

        // Types the host passes through to the other guests unchanged (the star
        // relay). Messages the authority CONVERTS (chat -> chatMsg, collect ->
        // collectResult, buy/convert -> actionResult) are NOT relayed raw, or a
        // guest would apply them twice.
        var RELAYABLE = {
            move: true, bees: true, world: true, damage: true, emote: true, quest: true
        };

        function onTransportMessage(evt) {
            var envelope = evt && evt.msg ? evt.msg : evt;
            if (!envelope || !envelope.t) return;
            var from = evt && evt.from;
            // Host = star centre: relay a guest's message to the other guests so
            // 3+ peers all see each other. Relayed copies carry the origin in `f`.
            if (role === 'authority' && from && from !== selfId && evt.raw &&
                RELAYABLE[envelope.t] && typeof transport.relay === 'function') {
                transport.relay(from, evt.raw);
            }
            handleInbound(envelope, from);
        }

        var offs = [];
        offs.push(transport.on('message', onTransportMessage));
        offs.push(transport.on('join', function (e) { emitter.emit('peerJoin', e); }));
        offs.push(transport.on('leave', function (e) {
            delete interpolators[e.id];
            // A peer whose connection dropped must also be pruned from the
            // authority roster, so its hive is freed for the next player.
            if (authority && e && e.id && authority.getPlayer(e.id)) {
                authority.leave(e.id, e.reason || 'transport_left');
            }
            emitter.emit('leave', e);
            if (authority) emitter.emit('players', rosterPayload());
        }));
        offs.push(transport.on('state', function (e) { emitter.emit('transportState', e); }));
        offs.push(transport.on('violation', function (e) { emitter.emit('violation', e); }));

        var api = {
            id: selfId,
            role: role,
            authority: authority,
            transport: transport,

            on: emitter.on,
            off: emitter.off,

            start: function () {
                if (state === 'idle') {
                    if (!setState(role === 'authority' ? 'hosting' : 'connecting')) return fail('bad_state', 'cannot start');
                }
                var started = transport.start();
                if (started && started.ok === false) return started;
                if (!setState('connected')) return fail('bad_state', 'cannot connect');
                if (role === 'client') {
                    api.send('hello', { id: selfId, name: name, profile: opts.profile });
                } else {
                    // The host is a player too: it joins its own authority.
                    var res = authority.join({ id: selfId, name: name, profile: opts.profile });
                    if (!res.ok) { setState('error'); return res; }
                    joined[selfId] = true;
                    emitter.emit('welcome', authority.welcomeFor(selfId));
                    emitter.emit('players', rosterPayload());
                }
                return pass({ state: state });
            },

            send: function (t, d, to) {
                seq = (seq + 1) % 0x7fffffff;
                // The authority stamps its OWN id on messages it originates, so
                // peers can attribute them to a real player rather than to a
                // transport label like "host". A client's `f` is ignored by the
                // authority anyway (identity comes from the connection).
                var opts = { q: seq };
                if (role === 'authority') opts.f = selfId;
                if (to) return transport.sendTo(to, t, d, opts);
                return transport.broadcast(t, d, opts);
            },

            /** Stage A: local transform. Applied locally for the authority. */
            sendMove: function (move) {
                var d = validators.move(move);
                if (authority) {
                    authority.notePosition(selfId, d.p);
                    interpFor(selfId).push({ t: nowFn(), p: d.p, y: d.y, m: d.m, s: d.s });
                }
                return api.send('move', d);
            },
            sendBees: function (payload) {
                var d = validators.bees(payload);
                return api.send('bees', d);
            },
            sendWorld: function (payload) {
                var d = validators.world(payload);
                return api.send('world', d);
            },
            sendCollect: function (payload) { return api.send('collect', validators.collect(payload)); },
            sendDamage: function (payload) { return api.send('damage', validators.damage(payload)); },
            sendConvert: function (amount) { return api.send('convert', { amount: amount }); },
            sendBuy: function (item, qty) { return api.send('buy', { item: item, qty: qty || 1 }); },
            sendChat: function (text) {
                var m = sanitizeString(text, MAX_CHAT);
                if (!m) return fail('empty', 'empty chat message');
                if (authority) {
                    var pl = authority.getPlayer(selfId);
                    var payload = { from: selfId, name: (pl && pl.name) || name, m: m, ts: nowFn() };
                    emitter.emit('chat', payload);
                }
                return api.send('chat', { m: m });
            },
            sendEmote: function (e) { return api.send('emote', { e: e }); },

            players: function () { return authority ? authority.roster() : remoteRoster; },
            /** id -> interpolated remote transform (Stage A rendering input). */
            remotePlayers: function () { return ints(); },
            remoteBees: function () { return remoteBeeState; },
            /** Raw bee payloads by owner id (Stage B). */
            sendBeeStates: function (byOwner) { remoteBeeState = byOwner || {}; return remoteBeeState; },
            getState: function () {
                var ts = transport.getState();
                return {
                    state: state,
                    mode: ts.mode,
                    id: selfId,
                    role: role,
                    room: ts.room,
                    players: ts.players === undefined ? api.players() : ts.players,
                    isAuthority: role === 'authority'
                };
            },
            setState: setState,

            disconnect: function () {
                if (!setState('disconnecting')) return fail('bad_state', 'cannot disconnect');
                if (authority) { authority.leave(selfId, 'disconnect'); }
                transport.disconnect();
                setState('idle');
                return pass({ state: state });
            },
            reconnect: function () {
                if (state !== 'idle') setState('idle');
                return api.start();
            },
            reset: function () {
                offs.forEach(function (off) { if (typeof off === 'function') off(); });
                offs = [];
                interpolators = Object.create(null);
                limiters.resetAll();
                transport.reset();
                state = 'idle';
                emitter.emit('state', { state: state, mode: transport.getState().mode });
                return pass({ state: state });
            },
            stop: function () { return api.disconnect(); }
        };

        // Remote player view: interpolated transforms keyed by id.
        function ints() {
            var out = {};
            var ids = Object.keys(interpolators);
            for (var i = 0; i < ids.length; i++) {
                if (ids[i] === selfId) continue;
                var s = interpolators[ids[i]].sample(nowFn());
                if (s) out[ids[i]] = s;
            }
            return out;
        }

        return api;
    }

    /* =====================================================================
     * 8. TRANSPORTS
     * =====================================================================
     * All three implement the SAME interface:
     *   start, send, sendTo, broadcast, getState, disconnect, reconnect, reset,
     *   on('message'|'state'|'join'|'leave'|'violation')
     * ===================================================================== */

    /**
     * Shared: decode + validate inbound text, then emit.
     *
     * `trustRelayedOrigin` says whether the sender of these bytes is the
     * AUTHORITY. Only then may the envelope's `f` be believed:
     *   - a guest / WebSocket client only ever hears from the authority, so `f`
     *     (stamped by the authority when it relays) is the real original sender;
     *   - a host only ever hears DIRECTLY from guests, so `f` is just a claim by
     *     that guest and is IGNORED. Identity is the live connection.
     * This is what stops a peer from impersonating another player.
     */
    function makeInbound(emitter, trustRelayedOrigin) {
        return function (raw, from) {
            if (typeof raw === 'string' && utf8ByteLength(raw) > MAX_MESSAGE_BYTES) {
                emitter.emit('violation', { id: from, type: 'oversize', count: 0 });
                return false;
            }
            var res = decode(raw);
            if (!res.ok) {
                emitter.emit('violation', { id: from, type: res.error.code, count: 0, message: res.error.message });
                return false;
            }
            var origin = (trustRelayedOrigin && res.msg.f) || from || null;
            emitter.emit('message', { msg: res.msg, from: origin, raw: raw });
            return true;
        };
    }

    /* ---- 8a. LOCAL (loopback) --------------------------------------------- */

    function createLocalTransport(opts) {
        opts = opts || {};
        var emitter = createEmitter();
        var mode = 'local';
        // Local delivery is direct (there is no authority relaying), so `f` is
        // never trusted here.
        var inbox = makeInbound(emitter, false);
        var listeners = [];   // other endpoints in this process
        var id = opts.id || uid('p');
        var state = 'idle';
        var hub = opts.hub || null;

        function emitState() {
            emitter.emit('state', { mode: mode, state: state, id: id, players: listeners.filter(function (l) { return l.getState().state === 'connected'; }).map(function (l) { return l.getState().id; }) });
        }

        var api = {
            mode: mode,
            id: id,
            getState: function () {
                return {
                    mode: mode,
                    state: state,
                    id: id,
                    room: opts.room || 'local',
                    players: listeners.map(function (l) { return l.id; })
                };
            },
            on: emitter.on,
            off: emitter.off,
            start: function () {
                state = 'connected';
                if (hub) hub.register(api);
                emitState();
                return pass({});
            },
            send: function (t, d, o) { return api.broadcast(t, d, o); },
            sendTo: function (to, t, d, o) {
                var target = listeners.filter(function (l) { return l.id === to; })[0];
                if (!target) return fail('unknown_peer', 'no such peer');
                var raw = encode(t, d, o);
                var env = decode(raw).msg;
                target._deliver(env, id);
                return pass({});
            },
            broadcast: function (t, d, o) {
                var raw = encode(t, d, o);
                var env = decode(raw).msg;
                listeners.forEach(function (l) { l._deliver(env, id); });
                return pass({});
            },
            /** Loop a raw wire string through the inbound validator. */
            sendRaw: function (raw, to) {
                if (to) {
                    var target = listeners.filter(function (l) { return l.id === to; })[0];
                    if (!target) return false;
                    target._deliverRaw(raw, id);
                    return true;
                }
                listeners.forEach(function (l) { l._deliverRaw(raw, id); });
                return true;
            },
            drop: function (peerId) {
                listeners = listeners.filter(function (l) { return l.id !== peerId; });
                emitter.emit('leave', { id: peerId });
            },
            disconnect: function () {
                state = 'disconnected';
                if (hub) hub.unregister(api);
                listeners.forEach(function (l) { l._removePeer(id); });
                listeners = [];
                emitState();
                return pass({});
            },
            reconnect: function () { return api.start(); },
            reset: function () { listeners = []; return pass({}); },
            _peerList: listeners,
            _removePeer: function (peerId) {
                listeners = listeners.filter(function (l) { return l.id !== peerId; });
                emitter.emit('leave', { id: peerId });
            },
            _announceJoin: function (peerId) { emitter.emit('join', { id: peerId }); },
            _announceLeave: function (peerId) { emitter.emit('leave', { id: peerId }); },
            _deliver: function (env, from) {
                emitter.emit('message', { msg: env, from: from });
            },
            _deliverRaw: function (raw, from) {
                inbox(raw, from);
            },
            _setPeers: function (peers) { listeners = peers; }
        };
        return api;
    }

    /**
     * A hub wires N local transports together in one process. Used by the test
     * suite (and available as a loopback playground). Every endpoint gets every
     * OTHER endpoint in its peer list; joins/leaves are announced.
     */
    function createLocalHub() {
        var endpoints = [];

        function refresh() {
            endpoints.forEach(function (o) {
                o._setPeers(endpoints.filter(function (x) { return x.id !== o.id; }));
            });
        }

        var hub = {
            register: function (t) {
                if (endpoints.indexOf(t) >= 0) return;
                endpoints.push(t);
                refresh();
                endpoints.forEach(function (o) { if (o !== t) o._announceJoin(t.id); });
            },
            unregister: function (t) {
                endpoints = endpoints.filter(function (o) { return o !== t; });
                refresh();
                endpoints.forEach(function (o) { o._announceLeave(t.id); });
            },
            endpoints: function () { return endpoints.slice(); },
            count: function () { return endpoints.length; }
        };
        return hub;
    }

    /* ---- 8b. PEER-TO-PEER (WebRTC star) ----------------------------------- */

    /**
     * Host = star centre + authority. One RTCPeerConnection per guest slot.
     * Guest = exactly one connection, to the host.
     * No signalling server: offer/answer codes are exchanged by hand.
     */
    function createPeerTransport(opts) {
        opts = opts || {};
        var emitter = createEmitter();
        var env = getEnv();
        var RTCPC = opts.RTCPeerConnection || env.RTCPeerConnection;
        var iceServers = opts.iceServers || [];
        var useStun = !!opts.useStun;
        var mode = opts.role === 'host' ? 'peer-host' : 'peer-guest';
        var isHost = opts.role === 'host';
        var id = opts.id || uid('p');
        var maxPlayers = clampInt(opts.maxPlayers === undefined ? DEFAULT_MAX_PLAYERS : opts.maxPlayers, MIN_PLAYERS, MAX_PLAYERS);
        var state = 'idle';
        var channels = Object.create(null);    // peerId -> {pc, dc, status}
        var slotByPeer = Object.create(null);  // peerId -> slot index
        var slots = [];                        // host: slot records
        // A guest only ever hears from the host (the authority), so it may trust
        // the relayed origin `f`. The host hears directly from guests and may not.
        var inbox = makeInbound(emitter, !isHost);

        if (isHost) {
            for (var s = 0; s < maxPlayers - 1; s++) {
                slots.push({ index: s, peerId: null, status: 'empty', pc: null, dc: null, offer: null, answer: null });
            }
        }

        function servers() {
            if (!iceServers.length && useStun) {
                return [{ urls: 'stun:stun.l.google.com:19302' }];
            }
            return iceServers;
        }

        function requireRTC() {
            if (typeof RTCPC !== 'function') {
                return fail('no_webrtc', 'WebRTC is unavailable in this environment');
            }
            return null;
        }

        function emitState() {
            emitter.emit('state', { mode: mode, state: state, id: id, slots: slotStatus(), players: connectedIds() });
        }

        // NOTE: `channels` doubles as the guest's single-connection record
        // (__pc / __dc) and the host's map of peerId -> {pc, dc, status}.


        function connectedIds() {
            if (!isHost) {
                return (channels.__dc && channels.__dc.readyState === 'open') ? ['host'] : [];
            }
            var out = [];
            for (var i = 0; i < slots.length; i++) {
                if (slots[i].peerId && slots[i].dc && slots[i].dc.readyState === 'open') out.push(slots[i].peerId);
            }
            return out;
        }

        function slotStatus() {
            if (!isHost) return [];
            return slots.map(function (s) {
                return { index: s.index, status: s.status, peerId: s.peerId };
            });
        }

        // --- event style adapters (browser vs werift) -------------------------
        function onEvent(target, name, handler) {
            if (!target) return;
            if (typeof target.addEventListener === 'function') { target.addEventListener(name, handler); return; }
            if (typeof target.on === 'function') { try { target.on(name, handler); return; } catch (e) {} }
            var prop = 'on' + name;
            try { target[prop] = handler; } catch (e) {}
        }

        function gather(pc, timeoutMs) {
            return new Promise(function (resolve) {
                var done = false;
                function finish() { if (!done) { done = true; resolve(); } }
                if (pc.iceGatheringState === 'complete') { finish(); return; }
                onEvent(pc, 'icegatheringstatechange', function () {
                    if (pc.iceGatheringState === 'complete') finish();
                });
                onEvent(pc, 'icecandidate', function (e) {
                    var cand = e && (e.candidate !== undefined ? e.candidate : e);
                    if (e && e.candidate === null) finish();   // end of candidates
                    else if (cand === null) finish();
                });
                setTimeout(finish, timeoutMs || 2500);
            });
        }

        /**
         * @param adopt  optional drain hook (see setupPending). When given, the
         *               receive path is handed over to this channel instead of
         *               being attached here, and anything that arrived before
         *               we could listen is replayed through it.
         */
        function setupChannel(peerId, dc, pc, slot, adopt) {
            channels[peerId] = { pc: pc, dc: dc, status: 'connected' };
            dc.binaryType = 'arraybuffer';
            // Resolve the origin DYNAMICALLY: a guest announces its real id in
            // `hello`, after which the slot is re-pinned (see pinPeer). Reading
            // the slot each time keeps later messages attributed to the real id.
            function originId() { return (slot && slot.peerId) || peerId; }
            function handle(data) {
                if (typeof data !== 'string') {
                    emitter.emit('violation', { id: originId(), type: 'binary' });
                    return;
                }
                inbox(data, originId());
            }
            if (typeof adopt === 'function') adopt(handle);
            else onEvent(dc, 'message', function (e) { handle(e && e.data !== undefined ? e.data : e); });
            function closed() {
                if (!channels[peerId]) return;
                delete channels[peerId];
                if (isHost) {
                    var slot = slots[slotByPeer[peerId]];
                    if (slot) { slot.peerId = null; slot.status = 'empty'; slot.pc = null; slot.dc = null; slot.offer = null; slot.answer = null; slot.negotiating = false; }
                    delete slotByPeer[peerId];
                }
                emitter.emit('leave', { id: peerId });
                emitState();
            }
            onEvent(dc, 'close', closed);
            onEvent(dc, 'error', closed);
            onEvent(pc, 'connectionstatechange', function () {
                var st = pc.connectionState || pc.iceConnectionState;
                if (st === 'failed' || st === 'closed' || st === 'disconnected') closed();
            });
            emitter.emit('join', { id: peerId });
            emitState();
        }

        // --- host: create an offer for a slot ---------------------------------
        function createOffer(slotIndex) {
            var err = requireRTC();
            if (err) return Promise.resolve(err);
            if (!isHost) return Promise.resolve(fail('not_host', 'only the host creates offers'));
            var slot = slots[slotIndex];
            if (!slot) return Promise.resolve(fail('bad_slot', 'no such slot'));
            // A slot may only start negotiating from a clean state, so a second
            // offer while one is outstanding/connecting is refused.
            if (slot.status !== 'empty' && slot.status !== 'error') {
                return Promise.resolve(fail('already_negotiating', 'slot is busy'));
            }
            teardownSlot(slot);
            slot.status = 'negotiating';
            slot.negotiating = true;
            emitState();
            var pc;
            try { pc = new RTCPC({ iceServers: servers() }); }
            catch (e) { slot.status = 'empty'; slot.negotiating = false; return Promise.resolve(fail('webrtc_failed', String(e && e.message || e))); }
            slot.pc = pc;
            var dc;
            try { dc = pc.createDataChannel('bss', { ordered: true }); }
            catch (e) {
                // A partial/broken WebRTC implementation must not turn a click
                // into an exception: report it as a typed failure instead.
                slot.status = 'empty'; slot.negotiating = false;
                return Promise.resolve(fail('webrtc_failed', String(e && e.message || e)));
            }
            if (!dc) {
                slot.status = 'empty'; slot.negotiating = false;
                return Promise.resolve(fail('webrtc_failed', 'createDataChannel returned nothing'));
            }
            setupPending(slot, pc, dc);
            return pc.createOffer()
                .then(function (offer) { return pc.setLocalDescription(offer); })
                .then(function () { return gather(pc, 3000); })
                .then(function () {
                    var sdp = (pc.localDescription && pc.localDescription.sdp) || (pc.currentLocalDescription && pc.currentLocalDescription.sdp);
                    if (!sdp) throw new Error('no local description');
                    slot.offer = encodeCode({ t: 'offer', s: sdp });
                    slot.status = 'offered';
                    emitState();
                    return pass({ slot: slotIndex, code: slot.offer, status: slot.status });
                })
                .catch(function (e) {
                    slot.status = 'empty'; slot.negotiating = false;
                    return fail('negotiation_failed', String(e && e.message || e));
                });
        }

        /** Close whatever a slot was holding so a new offer starts clean. */
        function teardownSlot(slot) {
            if (slot.dc && typeof slot.dc.close === 'function') { try { slot.dc.close(); } catch (e) {} }
            if (slot.pc && typeof slot.pc.close === 'function') { try { slot.pc.close(); } catch (e) {} }
            if (slot.peerId && slotByPeer[slot.peerId] !== undefined) delete slotByPeer[slot.peerId];
            slot.peerId = null; slot.pc = null; slot.dc = null; slot.offer = null; slot.answer = null;
            slot.wired = false;        // a fresh offer may take this slot again
        }

        /**
         * Host side: prepare a slot BEFORE any code has been exchanged.
         *
         * The receive path is installed the moment the DataChannel exists —
         * never only on 'open'. A peer can speak before our own `open` event
         * has fired (a queued `hello` does exactly that: the guest flushes it
         * the instant ITS channel opens), and a data-channel message that
         * arrives with no listener attached is simply lost. Anything that lands
         * early is buffered here and replayed as soon as setupChannel() is
         * listening, so a guest never has to retry its `hello`.
         */
        function setupPending(slot, pc, dc) {
            var sink = null;          // set once setupChannel is listening
            var early = [];           // messages that beat the 'open' event
            var wired = null;         // the channel object we attached to

            function install(ch) {
                if (!ch || ch === wired) return;
                wired = ch;
                onEvent(ch, 'message', function (e) {
                    var data = e && e.data !== undefined ? e.data : e;
                    if (sink) { sink(data); return; }
                    early.push(data);
                });
                onEvent(ch, 'open', function () {
                    if (slot.wired) return;    // this slot is already taken over
                    slot.wired = true;
                    // Guest id is unknown until `hello`; use a temporary handle,
                    // then the authority pins the connection to the announced id.
                    var peerId = slot.peerId || ('guest' + slot.index + '-' + uid(''));
                    slot.peerId = peerId;
                    slot.dc = ch;              // the slot MUST hold its channel
                    slot.status = 'connected';
                    slotByPeer[peerId] = slot.index;
                    setupChannel(peerId, ch, pc, slot, function adopt(handler) {
                        sink = handler;
                        while (early.length) handler(early.shift());
                    });
                });
            }

            onEvent(pc, 'datachannel', function (e) {
                var ch = e && e.channel ? e.channel : e;
                if (ch) { slot.dc = ch; install(ch); }
            });
            install(dc);
            slot.dc = dc;
        }

        /** Host: consume a guest's answer code for a slot. */
        function acceptAnswer(slotIndex, code) {
            var err = requireRTC();
            if (err) return Promise.resolve(err);
            if (!isHost) return Promise.resolve(fail('not_host', 'only the host accepts answers'));
            var slot = slots[slotIndex];
            if (!slot) return Promise.resolve(fail('bad_slot', 'no such slot'));
            if (!slot.pc || !slot.offer) return Promise.resolve(fail('no_offer', 'create an offer for this slot first'));
            var parsed = decodeCode(code);
            if (!parsed.ok) return Promise.resolve(parsed);
            if (parsed.code.t !== 'answer') return Promise.resolve(fail('wrong_code_type', 'expected an answer code, got an offer code'));
            return slot.pc.setRemoteDescription({ type: 'answer', sdp: parsed.code.s })
                .then(function () {
                    slot.status = 'connecting';
                    emitState();
                    return pass({ slot: slotIndex, status: slot.status });
                })
                .catch(function (e) {
                    slot.status = 'offered';
                    return fail('bad_answer', String(e && e.message || e));
                });
        }

        /** Guest: consume a host's offer code and return an answer code. */
        function acceptOffer(code) {
            var err = requireRTC();
            if (err) return Promise.resolve(err);
            if (isHost) return Promise.resolve(fail('is_host', 'the host does not accept offers'));
            if (state === 'negotiating') return Promise.resolve(fail('already_negotiating', 'already negotiating'));
            if (state === 'connected') return Promise.resolve(fail('already_connected', 'already connected'));
            var parsed = decodeCode(code);
            if (!parsed.ok) return Promise.resolve(parsed);
            if (parsed.code.t !== 'offer') return Promise.resolve(fail('wrong_code_type', 'expected an offer code, got an answer code'));
            state = 'negotiating';
            emitState();
            var pc;
            try { pc = new RTCPC({ iceServers: servers() }); }
            catch (e) { state = 'idle'; return Promise.resolve(fail('webrtc_failed', String(e && e.message || e))); }
            channels.__pc = { pc: pc, dc: null, status: 'connecting' };
            onEvent(pc, 'datachannel', function (e) {
                var ch = e && e.channel ? e.channel : e;
                if (ch) {
                    channels.__dc = ch;
                    onEvent(ch, 'open', function () { state = 'connected'; emitState(); flushOutbox(); });
                    onEvent(ch, 'message', function (me) {
                        var data = me && me.data !== undefined ? me.data : me;
                        if (typeof data !== 'string') { emitter.emit('violation', { id: 'host', type: 'binary' }); return; }
                        inbox(data, 'host');
                    });
                    onEvent(ch, 'close', function () {
                        delete channels.__pc; delete channels.__dc;
                        state = 'idle';
                        outbox.clear();   // a dead channel can never deliver them
                        emitter.emit('leave', { id: 'host' });
                        emitState();
                    });
                    channels.__ready = true;
                }
            });
            return pc.setRemoteDescription({ type: 'offer', sdp: parsed.code.s })
                .then(function () { return pc.createAnswer(); })
                .then(function (answer) { return pc.setLocalDescription(answer); })
                .then(function () { return gather(pc, 3000); })
                .then(function () {
                    var sdp = (pc.localDescription && pc.localDescription.sdp) || (pc.currentLocalDescription && pc.currentLocalDescription.sdp);
                    if (!sdp) throw new Error('no local description');
                    return pass({ code: encodeCode({ t: 'answer', s: sdp }) });
                })
                .catch(function (e) {
                    state = 'idle';
                    return fail('negotiation_failed', String(e && e.message || e));
                });
        }

        function _peerDc(peerId) {
            if (!isHost) {
                if (peerId === 'host' || peerId === id || !peerId) return channels.__dc || null;
                return null;
            }
            var ch = channels[peerId];
            return ch ? ch.dc : null;
        }

        /**
         * A GUEST talks to exactly one peer (the host) and the DataChannel does
         * not exist until the host's answer code has been applied. Frames sent
         * before that — starting with `hello` — are queued and flushed in order
         * when the channel opens. The host needs no queue: it only ever speaks
         * to slots that are already open (a new guest gets a fresh welcome at
         * its own `hello`).
         */
        var outbox = createOutbox();

        function guestChannelOpen() {
            var dc = channels.__dc;
            return !!dc && dc.readyState === 'open';
        }

        function flushOutbox() {
            var dc = channels.__dc;
            if (!dc || dc.readyState !== 'open') return 0;
            return outbox.flush(function (raw) { dc.send(raw); });
        }

        var api = {
            mode: mode,
            id: id,
            isHost: isHost,
            getState: function () {
                return {
                    mode: mode,
                    state: state,
                    id: id,
                    room: opts.room || 'peer',
                    slots: slotStatus(),
                    players: connectedIds(),
                    iceServers: servers()
                };
            },
            on: emitter.on,
            off: emitter.off,
            start: function () {
                // Peer mode needs WebRTC to exist at all. Failing here with a
                // typed error is much friendlier than failing at negotiation.
                var err = requireRTC();
                if (err) return err;
                state = isHost ? 'hosting' : 'idle';
                emitState();
                return pass({});
            },
            createOffer: createOffer,
            acceptAnswer: acceptAnswer,
            acceptOffer: acceptOffer,
            slotStatus: slotStatus,
            /** Host: free a slot too (used when the authority evicts a peer). */
            drop: function (peerId) {
                var dc = _peerDc(peerId);
                if (dc && typeof dc.close === 'function') { try { dc.close(); } catch (e) {} }
                if (isHost) {
                    var idx = slotByPeer[peerId];
                    var slot = idx !== undefined ? slots[idx] : null;
                    if (slot && slot.pc && typeof slot.pc.close === 'function') { try { slot.pc.close(); } catch (e) {} }
                } else {
                    var c = channels.__pc;
                    if (c && typeof c.pc.close === 'function') { try { c.pc.close(); } catch (e) {} }
                }
                delete channels[peerId];
                emitter.emit('leave', { id: peerId });
                emitState();
            },
            send: function (t, d, o) { return api.broadcast(t, d, o); },
            sendTo: function (to, t, d, o) {
                var raw = encode(t, d, o);
                // A guest can only ever address the host, so reject anything else
                // before queueing. A queued frame always goes to the host — it is
                // addressed by construction.
                if (!isHost && to && to !== 'host' && to !== id) {
                    return fail('peer_gone', 'a guest can only message the host');
                }
                if (!isHost && !guestChannelOpen()) {
                    if (outbox.push(raw)) return pass({ queued: outbox.size() });
                    return fail('outbox_full', 'too many messages before the host answered');
                }
                var dc = _peerDc(to);
                if (!dc || dc.readyState !== 'open') return fail('peer_gone', 'peer is not connected');
                try { dc.send(raw); } catch (e) { return fail('send_failed', String(e && e.message || e)); }
                return pass({});
            },
            broadcast: function (t, d, o) {
                var raw = encode(t, d, o);
                var sent = 0;
                if (isHost) {
                    for (var i = 0; i < slots.length; i++) {
                        var sl = slots[i];
                        if (sl.dc && sl.dc.readyState === 'open' && typeof sl.dc.send === 'function') {
                            try { sl.dc.send(raw); sent++; } catch (e) {}
                        }
                    }
                } else {
                    if (!guestChannelOpen()) {
                        // Host has not answered yet: hold it (this is how a
                        // guest's `hello` reaches the host at all).
                        if (outbox.push(raw)) return pass({ queued: outbox.size() });
                        return fail('outbox_full', 'too many messages before the host answered');
                    }
                    var dc = _peerDc('host');
                    if (dc && dc.readyState === 'open') { try { dc.send(raw); sent++; } catch (e) {} }
                }
                return sent ? pass({ sent: sent }) : fail('no_peers', 'no open peer connections');
            },
            /**
             * Host relays a message it received from one guest to every OTHER
             * guest, stamping the original sender in `f`. This is what lets
             * 3+ peers all see each other.
             */
            relay: function (fromId, raw) {
                if (!isHost) return fail('not_host', 'only the host relays');
                var sent = 0;
                for (var i = 0; i < slots.length; i++) {
                    var sl = slots[i];
                    if (!sl.dc || sl.dc.readyState !== 'open' || sl.peerId === fromId) continue;
                    var env;
                    try { env = JSON.parse(raw); } catch (e) { continue; }
                    env.f = fromId;
                    var out = JSON.stringify(env);
                    try { sl.dc.send(out); sent++; } catch (e) {}
                }
                return pass({ sent: sent });
            },
            disconnect: function () {
                Object.keys(channels).forEach(function (k) {
                    var c = channels[k];
                    if (c && c.dc && typeof c.dc.close === 'function') { try { c.dc.close(); } catch (e) {} }
                    if (c && c.pc && typeof c.pc.close === 'function') { try { c.pc.close(); } catch (e) {} }
                });
                slots.forEach(function (sl) {
                    if (sl.pc && typeof sl.pc.close === 'function') { try { sl.pc.close(); } catch (e) {} }
                    sl.peerId = null; sl.status = 'empty'; sl.pc = null; sl.dc = null; sl.offer = null; sl.answer = null; sl.negotiating = false;
                });
                channels = Object.create(null);
                state = 'idle';
                outbox.clear();
                emitState();
                return pass({});
            },
            /** Frames still waiting for a channel (tests + UI). */
            queued: function () { return outbox.size(); },
            // Peer-to-peer cannot resume without a NEW code exchange.
            reconnect: function () {
                state = 'idle';
                emitState();
                return fail('needs_new_codes', 'peer-to-peer needs a fresh offer/answer exchange');
            },
            reset: function () { return api.disconnect(); },
            /**
             * Re-key a live connection from its temporary handle to the id the
             * peer announced in `hello`. A connection is then pinned to that id
             * for its whole life, so a payload can never re-declare who it is.
             */
            pinPeer: function (tempId, realId) {
                if (!isHost || !tempId || !realId || tempId === realId) return;
                var slotIdx = slotByPeer[tempId];
                if (slotIdx === undefined) return;
                var slot = slots[slotIdx];
                slot.peerId = realId;
                slotByPeer[realId] = slotIdx;
                delete slotByPeer[tempId];
                if (channels[tempId]) { channels[realId] = channels[tempId]; delete channels[tempId]; }
                emitState();
            },
            /** raw wire hook so the host can run relay() from its authority loop */
            _inbox: inbox
        };
        return api;
    }

    function encodeCode(obj) {
        return 'BSSR1' + base64Encode(JSON.stringify(obj));
    }

    function decodeCode(code) {
        if (typeof code !== 'string') return fail('garbage_code', 'code is not text');
        code = code.trim();
        var body = code.indexOf('BSSR1') === 0 ? code.slice(5) : code;
        if (!body) return fail('garbage_code', 'empty code');
        var json;
        try { json = base64Decode(body); }
        catch (e) { return fail('garbage_code', 'not valid base64'); }
        var obj;
        try { obj = JSON.parse(json); }
        catch (e) { return fail('garbage_code', 'code is not valid JSON'); }
        if (!obj || typeof obj !== 'object' || typeof obj.s !== 'string' || !obj.s) {
            return fail('garbage_code', 'code is missing its session description');
        }
        if (obj.t !== 'offer' && obj.t !== 'answer') return fail('garbage_code', 'unknown code type');
        return { ok: true, code: { t: obj.t, s: obj.s } };
    }

    /* ---- 8b-bis. OUTBOX --------------------------------------------------- */

    /**
     * Outbox: frames handed to a CLIENT transport while its pipe is not open
     * yet are queued here and flushed, in order, the moment it opens.
     *
     * This is not a nicety. A session starts speaking the moment it is started
     * and its first message is `hello`. For a browser WebSocket the socket is
     * still CONNECTING at that point, and for a peer-to-peer guest the
     * DataChannel does not even exist until the host's answer code is applied.
     * Without a queue those frames are dropped, the `hello` never arrives and
     * the player never joins the room — in server mode AND in peer mode.
     *
     * Queued frames are bounded, and on overflow the NEWEST frame is refused:
     * the oldest ones (starting with `hello`) are the ones that matter.
     */
    function createOutbox(limit) {
        var frames = [];
        var refused = 0;
        limit = limit || 64;
        return {
            push: function (raw) {
                if (typeof raw !== 'string' || !raw) return false;
                if (frames.length >= limit) { refused++; return false; }
                frames.push(raw);
                return true;
            },
            /** Send queued frames oldest-first; `send` may throw, then we stop. */
            flush: function (send) {
                var sent = 0;
                while (frames.length) {
                    var raw = frames[0];
                    try { send(raw); }
                    catch (e) { return sent; }      // keep the unsent frame queued
                    frames.shift();
                    sent++;
                }
                return sent;
            },
            clear: function () { frames.length = 0; },
            size: function () { return frames.length; },
            refused: function () { return refused; }
        };
    }

    /* ---- 8c. SERVER (WebSocket client) ------------------------------------ */

    function createServerTransport(opts) {
        opts = opts || {};
        var emitter = createEmitter();
        var env = getEnv();
        var WSImpl = opts.WebSocket || env.WebSocket;
        var url = opts.url || 'ws://localhost:8787/ws';
        var id = opts.id || uid('p');
        var state = 'idle';
        var ws = null;
        // The socket only ever talks to the server (the authority), which stamps
        // `f` on everything it relays, so the relayed origin is trusted.
        var inbox = makeInbound(emitter, true);
        var seq = 0;
        // Frames produced while the socket is still CONNECTING (starting with
        // `hello`) are held here and flushed on open, never lost.
        var outbox = createOutbox();

        function emitState() {
            emitter.emit('state', { mode: 'server', state: state, id: id, url: url });
        }

        function socketOpen() {
            return !!ws && (ws.readyState === 1 || ws.readyState === ws.OPEN);
        }

        function flushOutbox() {
            if (!socketOpen()) return 0;
            var sock = ws;
            return outbox.flush(function (raw) { sock.send(raw); });
        }

        var api = {
            mode: 'server',
            id: id,
            getState: function () {
                return { mode: 'server', state: state, id: id, url: url, room: opts.room || null, players: [] };
            },
            on: emitter.on,
            off: emitter.off,
            start: function () {
                if (typeof WSImpl !== 'function') return fail('no_websocket', 'WebSocket is unavailable in this environment');
                if (state === 'connected' || state === 'connecting') return pass({});
                state = 'connecting';
                emitState();
                try { ws = new WSImpl(url); }
                catch (e) { state = 'error'; emitState(); return fail('ws_failed', String(e && e.message || e)); }
                ws.onopen = function () { state = 'connected'; emitState(); flushOutbox(); };
                ws.onmessage = function (e) {
                    var data = e && e.data !== undefined ? e.data : e;
                    if (typeof data !== 'string') { emitter.emit('violation', { id: 'server', type: 'binary' }); return; }
                    inbox(data, 'server');
                };
                ws.onclose = function () {
                    state = 'idle';
                    // A closed socket can never deliver queued frames.
                    outbox.clear();
                    emitState();
                    emitter.emit('leave', { id: 'server' });
                };
                ws.onerror = function () {
                    state = 'error';
                    emitState();
                    emitter.emit('violation', { id: 'server', type: 'socket_error' });
                };
                return pass({});
            },
            send: function (t, d, o) { return api.broadcast(t, d, o); },
            sendTo: function (to, t, d, o) { return api.broadcast(t, d, o, to); },
            broadcast: function (t, d, o, to) {
                if (!ws) return fail('not_connected', 'socket is not open');
                seq = (seq + 1) % 0x7fffffff;
                var q = seq;
                var raw = encode(t, d, { q: q });
                if (!socketOpen()) {
                    // Still CONNECTING: queue it so `hello` is not lost. The
                    // frames go out in order the moment the socket opens.
                    if (outbox.push(raw)) return pass({ queued: outbox.size() });
                    return fail('outbox_full', 'too many messages while connecting');
                }
                try { ws.send(raw); } catch (e) { return fail('send_failed', String(e && e.message || e)); }
                return pass({});
            },
            drop: function () {
                if (ws && typeof ws.close === 'function') { try { ws.close(); } catch (e) {} }
                state = 'idle';
                emitState();
            },
            disconnect: function () {
                if (ws && typeof ws.close === 'function') { try { ws.close(); } catch (e) {} }
                ws = null;
                state = 'idle';
                outbox.clear();
                emitState();
                return pass({});
            },
            reconnect: function () { return api.start(); },
            reset: function () {
                var r = api.disconnect();
                seq = 0;
                return r;
            },
            /** Frames still waiting for the socket to open (tests + UI). */
            queued: function () { return outbox.size(); },
            _deliverRaw: function (raw, from) { inbox(raw, from); }
        };
        return api;
    }

    function createTransport(mode, opts) {
        if (mode === 'local' || mode === 'loopback') return createLocalTransport(opts);
        if (mode === 'peer' || mode === 'webrtc') return createPeerTransport(opts || {});
        if (mode === 'server' || mode === 'ws') return createServerTransport(opts);
        throw MPError('bad_mode', 'unknown transport mode: ' + mode);
    }

    /* =====================================================================
     * EXPORT
     * ===================================================================== */

    return {
        VERSION: VERSION,
        PROTOCOL_VERSION: PROTOCOL_VERSION,
        MAX_MESSAGE_BYTES: MAX_MESSAGE_BYTES,
        MAX_FRAME_BYTES: MAX_FRAME_BYTES,
        TYPES: TYPES,
        CHANNELS: CHANNELS,
        DEFAULT_CHANNEL_RATE: DEFAULT_CHANNEL_RATE,
        VIOLATION_LIMIT: VIOLATION_LIMIT,
        WORLD: WORLD,
        HIVE_PLOTS: HIVE_PLOTS,
        HIVE_INTERACT_RADIUS: HIVE_INTERACT_RADIUS,
        TOKEN_PICKUP_RADIUS: TOKEN_PICKUP_RADIUS,
        MAX_INTERP_SPEED: MAX_INTERP_SPEED,
        HIVE_BASE_SLOTS: HIVE_BASE_SLOTS,
        HIVE_MAX_SLOTS: HIVE_MAX_SLOTS,
        HIVE_SLOT_BASE_COST: HIVE_SLOT_BASE_COST,
        HIVE_SLOT_GROWTH: HIVE_SLOT_GROWTH,
        MIN_PLAYERS: MIN_PLAYERS,
        MAX_PLAYERS: MAX_PLAYERS,
        DEFAULT_MAX_PLAYERS: DEFAULT_MAX_PLAYERS,
        DEFAULT_RENDER_BUFFER_MS: DEFAULT_RENDER_BUFFER_MS,
        TELEPORT_SNAP_DISTANCE: TELEPORT_SNAP_DISTANCE,
        MOVE_SEND_HZ: MOVE_SEND_HZ,
        BEES_SEND_HZ: BEES_SEND_HZ,
        WORLD_SEND_HZ: WORLD_SEND_HZ,
        STATES: STATES,
        ITEM_PRICES: ITEM_PRICES,

        setEnv: setEnv,
        getEnv: getEnv,
        clock: clock,
        createEmitter: createEmitter,

        uid: uid,
        clamp: clamp,
        clampInt: clampInt,
        clampAngle: clampAngle,
        clampPosition: clampPosition,
        sanitizeString: sanitizeString,
        utf8ByteLength: utf8ByteLength,
        base64Encode: base64Encode,
        base64Decode: base64Decode,
        dist3: dist3,
        shortestAngle: shortestAngle,

        encode: encode,
        decode: decode,
        validateMessage: validateMessage,
        validators: validators,
        cleanProfile: cleanProfile,

        createRateLimiter: createRateLimiter,
        createInterpolator: createInterpolator,

        hiveSlotCost: hiveSlotCost,
        hiveSlotCosts: hiveSlotCosts,
        nextHiveSlotCost: nextHiveSlotCost,
        priceOf: priceOf,

        createAuthority: createAuthority,
        createSession: createSession,
        canTransition: canTransition,

        createLocalTransport: createLocalTransport,
        createLocalHub: createLocalHub,
        createPeerTransport: createPeerTransport,
        createServerTransport: createServerTransport,
        createTransport: createTransport,
        encodeCode: encodeCode,
        decodeCode: decodeCode,

        MPError: MPError,
        isMPError: isMPError,
        fail: fail,
        pass: pass
    };
});
