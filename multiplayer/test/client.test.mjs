/*
 * multiplayer/test/client.test.mjs
 * ---------------------------------------------------------------------------
 * Headless UI test for multiplayer/mp-client.js — the only file that knows the
 * game. There is no browser here, so this builds a tiny fake DOM out of the
 * REAL ids in index.html and drives the real menu handlers:
 *
 *   main menu -> Multiplayer -> mode buttons -> Connect / chat / Back
 *
 * It proves the wiring works, that single-player opens nothing, and that the
 * default server address the shipped HTML carries is the one actually dialled.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { GAME_ROOT, CORE_PATH } from './_core.mjs';

const INDEX_HTML = path.join(GAME_ROOT, 'index.html');
const CLIENT_JS = path.join(GAME_ROOT, 'multiplayer', 'mp-client.js');

/** Build a fake DOM containing every id (and input value) index.html defines. */
function buildDom() {
    const html = fs.readFileSync(INDEX_HTML, 'utf8');
    const els = new Map();

    function makeEl(id) {
        const el = {
            id: id || '',
            style: {},
            dataset: {},
            children: [],
            value: '',
            checked: false,
            textContent: '',
            scrollTop: 0,
            scrollHeight: 0,
            onclick: null,
            onkeydown: null,
            onchange: null,
            appendChild(child) {
                this.children.push(child);
                if (child && child.id) els.set(child.id, child);
                return child;
            },
            querySelector() { return null; },
            querySelectorAll() { return []; },
            addEventListener() {},
            removeEventListener() {}
        };
        Object.defineProperty(el, 'innerHTML', {
            get() { return this._html || ''; },
            set(v) {
                this._html = String(v);
                // The client builds the peer slots with innerHTML, then looks the
                // new ids up by id — so register them, like a real parser would.
                for (const m of this._html.matchAll(/id=["']([^"']+)["']/g)) {
                    if (!els.has(m[1])) els.set(m[1], makeEl(m[1]));
                }
            }
        });
        return el;
    }

    // Every id in the page, with the default value the page ships for inputs.
    const tagRe = /<[a-zA-Z][^>]*id=["']([A-Za-z0-9_-]+)["'][^>]*>/g;
    let m;
    while ((m = tagRe.exec(html))) {
        const el = makeEl(m[1]);
        const val = /value=["']([^"']*)["']/.exec(m[0]);
        const checked = /\bchecked\b/.test(m[0]);
        if (val) el.value = val[1];
        if (checked) el.checked = true;
        els.set(m[1], el);
    }

    const document = {
        readyState: 'complete',           // boot() runs immediately, no DOMContentLoaded
        getElementById: (id) => els.get(id) || null,
        createElement: () => makeEl(''),
        querySelector: () => null,
        addEventListener() {},
        body: makeEl('body')
    };
    return { document, els, el: (id) => els.get(id) };
}

/** Load mp-core.js + mp-client.js in a vm with counting network fakes. */
function bootClient() {
    const dom = buildDom();
    const created = { sockets: [], pcs: 0 };
    const timers = [];

    class FakeWebSocket {
        constructor(url) {
            this.url = url;
            this.readyState = 0;          // CONNECTING, like a browser
            this.OPEN = 1;
            this.sent = [];
            created.sockets.push(this);
        }
        send(raw) { this.sent.push(raw); }
        close() { this.readyState = 3; }
    }
    function FakeRTCPeerConnection() { created.pcs++; }

    const sandbox = {
        console: { log() {}, warn() {}, error() {} },
        setTimeout: () => 0,
        clearTimeout() {},
        setInterval: (fn) => { timers.push(fn); return timers.length; },
        clearInterval() {},
        document: dom.document,
        navigator: {},
        alert() {},
        WebSocket: FakeWebSocket,
        RTCPeerConnection: FakeRTCPeerConnection,
        // No save API and no game globals: the client must degrade, not throw.
        indexedDB: undefined
    };
    sandbox.window = sandbox;
    sandbox.self = sandbox;
    sandbox.globalThis = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync(CORE_PATH, 'utf8'), sandbox, { filename: 'mp-core.js' });
    vm.runInContext(fs.readFileSync(CLIENT_JS, 'utf8'), sandbox, { filename: 'mp-client.js' });
    return {
        sandbox, dom, created, timers,
        api: sandbox.BSSMultiplayer,
        el: dom.el,
        // The client polls for the game globals on a timer; run ticks by hand.
        runBootPoll: () => timers[0](),
        runPoll: () => timers.slice().forEach((fn) => fn())
    };
}

test('loading the client opens nothing and shows the single-player badge', () => {
    const { api, created, el } = bootClient();
    assert.ok(api, 'BSSMultiplayer is exposed');
    assert.equal(api.state.mode, 'single', 'the default mode is single-player');
    assert.equal(created.sockets.length, 0, 'no WebSocket was created at load');
    assert.equal(created.pcs, 0, 'no RTCPeerConnection was created at load');
    assert.equal(el('mpBadge').textContent, 'Mode: Single-player');
    assert.equal(el('mpBadge').style.display, 'block', 'the badge is visible');
});

test('the main menu opens the multiplayer panel and Back restores it', () => {
    const { api, el, created } = bootClient();
    const open = el('mainMultiplayer').onclick;
    assert.equal(typeof open, 'function', 'the Multiplayer button is wired');

    open();
    assert.equal(el('mpMenu').style.display, 'block', 'the multiplayer menu is shown');
    assert.equal(el('mainMenu').style.display, 'none', 'the main menu is hidden');
    assert.equal(el('mpModeSingle').style.outline, '3px solid #2a7', 'single-player is the highlighted mode');
    assert.equal(created.sockets.length, 0, 'opening the menu opens nothing');

    el('mp_back').onclick();
    assert.equal(el('mpMenu').style.display, 'none');
    assert.equal(el('mainMenu').style.display, 'block');

    // And the mode buttons are all wired.
    for (const id of ['mpModeSingle', 'mpModePeer', 'mpModeServer', 'mpConnect', 'mpDisconnect', 'mpReconnect', 'mpReset', 'mpSend']) {
        assert.equal(typeof el(id).onclick, 'function', id + ' has a click handler');
    }
    void api;
});

test('choosing single-player from the menu opens no connection', () => {
    const { api, el, created } = bootClient();
    el('mainMultiplayer').onclick();
    el('mpModeServer').onclick();              // look at server mode first
    el('mpModeSingle').onclick();
    assert.equal(api.state.mode, 'single');
    assert.equal(api.getTransport(), null);
    assert.equal(created.sockets.length, 0, 'still no socket');
    assert.equal(el('mpBadge').textContent, 'Mode: Single-player');
});

test('server mode dials the default address from the shipped HTML, once', () => {
    const { api, el, created } = bootClient();
    el('mainMultiplayer').onclick();
    el('mpModeServer').onclick();
    assert.equal(el('mpServerPanel').style.display, '', 'the server panel is shown');
    assert.equal(el('mpPeerPanel').style.display, 'none', 'the peer panel is hidden');
    assert.equal(el('mpServerUrl').value, 'ws://localhost:8787/ws', 'the page ships this default');
    assert.equal(created.sockets.length, 0, 'showing the panel does not connect');

    el('mpConnect').onclick();
    assert.equal(created.sockets.length, 1, 'Connect dials exactly one socket');
    assert.equal(created.sockets[0].url, 'ws://localhost:8787/ws');
    assert.equal(api.state.mode, 'server');
    assert.match(el('mpStatus').textContent, /Connecting to ws:\/\/localhost:8787\/ws/);
    assert.equal(el('mpBadge').textContent, 'Mode: Server');

    // The client speaks before the socket opens (browser behaviour), so the
    // hello is queued rather than lost.
    const transport = api.getTransport();
    assert.equal(transport.queued(), 1, 'the hello is queued while connecting');

    // Disconnect tears the session down and re-dials exactly once more.
    el('mpDisconnect').onclick();
    assert.equal(api.getTransport(), null);
    assert.equal(api.state.mode, 'single', 'disconnect falls back to single-player');
    el('mpConnect').onclick();
    assert.equal(created.sockets.length, 2, 'reconnecting dials one more socket');
});

test('a URL without ws:// is refused instead of dialling', () => {
    const { api, el, created } = bootClient();
    el('mpModeServer').onclick();
    el('mpServerUrl').value = 'http://example.com';
    el('mpConnect').onclick();
    assert.equal(created.sockets.length, 0, 'nothing was dialled');
    assert.match(el('mpStatus').textContent, /ws:\/\/ or wss:\/\//);
    assert.equal(api.getTransport(), null);
});

test('peer-to-peer host mode builds one slot per guest without connecting', async () => {
    const { api, el, created } = bootClient();
    el('mpMaxPlayers').value = '4';
    el('mpMaxPlayers').onchange();
    el('mpModePeer').onclick();
    assert.equal(api.state.mode, 'peer');
    assert.equal(api.state.peerRole, 'host');
    assert.equal(el('mpPeerPanel').style.display, '');
    assert.equal(created.sockets.length, 0, 'peer-to-peer never opens a WebSocket');
    assert.equal(created.pcs, 0, 'no peer connection exists until an offer is created');

    const slots = el('mpSlots').children.map((c) => c.innerHTML).join('\n');
    assert.match(slots, /Guest slot 1/);
    assert.match(slots, /Guest slot 3/);
    assert.ok(!/Guest slot 4/.test(slots), 'max 4 players = 3 guest slots');
    assert.equal(el('mpSlots').children.length, 3, 'one row per guest slot');
    assert.equal(typeof el('mpSlotOffer0').onclick, 'function', 'each slot can create an offer');
    // Clicking "Create offer code" with a stub WebRTC implementation must report
    // a failure in the slot, never throw out of the click handler.
    assert.equal(el('mpSlotOffer0').onclick(), undefined, 'the click handler returns nothing and does not throw');
    await new Promise((r) => setImmediate(r));
    assert.match(el('mpSlotOfferText0').value, /^error: /, 'the slot reports the failure');
    assert.equal(created.sockets.length, 0, 'still no WebSocket');
    assert.equal(created.pcs, 1, 'exactly the one peer connection the slot asked for');
});

test('chat with no session is reported in the log instead of throwing', () => {
    const { el } = bootClient();
    el('mpChatInput').value = 'hello?';
    el('mpSend').onclick();
    assert.equal(el('mpChatInput').value, '', 'the input is cleared');
    assert.equal(el('mpChatLog').children.length, 1, 'a line was added to the chat log');
    assert.match(el('mpChatLog').children[0].textContent, /not connected/);
});

test('duplicate save copies the save at that row index, never another one', async () => {
    const { sandbox, api } = bootClient();
    // Deliberately NOT sorted by lastSaved: the game indexes the array returned
    // by loadFromDB() in its own order, so the row index is the array index.
    const saves = [
        { id: 'a', data: { name: 'Older', saveCode: 'CODE-OLD', lastSaved: 100 } },
        { id: 'b', data: { name: 'Newer', saveCode: 'CODE-NEW', lastSaved: 900 } }
    ];
    const written = [];
    sandbox.window.loadFromDB = () => Promise.resolve(saves);
    sandbox.window.saveToDB = (id, data) => { written.push({ id, data }); return Promise.resolve(1); };

    api.duplicateSave(0);
    await new Promise((r) => setImmediate(r));
    await new Promise((r) => setImmediate(r));

    assert.equal(written.length, 1, 'exactly one new save was written');
    assert.equal(written[0].data.saveCode, 'CODE-OLD', 'row 0 is the older save, not the newest');
    assert.equal(written[0].data.name, 'Older (copy)');
    assert.notEqual(written[0].id, 'a', 'the copy gets a new id, the original is untouched');
    assert.equal(saves.length, 2, 'nothing was deleted or added to the source list');
});

test('game globals that appear late are still picked up (slow poll)', () => {
    const { api, sandbox, runPoll } = bootClient();
    assert.equal(api.Hooks.ready, false);

    // The fast poll runs out after ~3 s without a game (the player is still in
    // the menus), which switches to the slow poll instead of giving up.
    for (let i = 0; i < 12; i++) runPoll();
    assert.equal(api.Hooks.ready, false, 'no game yet');

    // Much later the player presses Play and the game publishes its globals.
    sandbox.window.player = { hive: [], honey: 0, pollen: 0, capacity: 100 };
    runPoll();
    assert.equal(api.Hooks.ready, true, 'the late globals were picked up');
    assert.ok(!api.Hooks.missing.includes('player'), 'the core hook is no longer missing');
});

test('the readouts survive with no game globals (menu-only mode)', () => {
    const { api, el, runBootPoll } = bootClient();
    assert.equal(api.Hooks.ready, false);
    runBootPoll();
    assert.equal(api.Hooks.ready, false, 'no game globals exist in this sandbox');
    assert.ok(api.Hooks.missing.includes('player'), 'the missing game hooks are reported');
    el('mainMultiplayer').onclick();
    assert.match(el('mpPlayers').innerHTML, /Single-player/, 'the roster degrades to a note');
    assert.match(el('mpPlayers').innerHTML, /Players: 0/);
});
