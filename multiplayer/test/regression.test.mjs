/*
 * multiplayer/test/regression.test.mjs
 * Single-player is sacred. These tests prove that merely LOADING the two
 * multiplayer scripts creates no WebSocket and no RTCPeerConnection, and that
 * the existing save system and page wiring are untouched.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { GAME_ROOT, CORE_PATH } from './_core.mjs';

const INDEX_HTML = path.join(GAME_ROOT, 'index.html');
const INDEX_JS = path.join(GAME_ROOT, 'index.js');
const CLIENT_JS = path.join(GAME_ROOT, 'multiplayer', 'mp-client.js');

function fakeDom() {
    return {
        readyState: 'complete',
        getElementById: () => null,
        createElement: () => ({
            style: {}, dataset: {}, children: [],
            appendChild() {}, querySelector() { return null; }, set textContent(v) {}, get textContent() { return ''; }
        }),
        addEventListener() {},
        querySelector: () => null
    };
}

/** Evaluate a classic script in a vm with counting network constructors. */
function loadScriptCounted(file) {
    const counts = { rtc: 0, ws: 0 };
    const sandbox = {
        console: { log() {}, warn() {}, error() {} },
        setTimeout: () => 0,
        clearTimeout() {},
        setInterval: () => 0,
        clearInterval() {},
        RTCPeerConnection: function RTCPeerConnection() { counts.rtc++; },
        WebSocket: function WebSocket() { counts.ws++; },
        document: fakeDom(),
        navigator: {},
        alert() {}
    };
    sandbox.window = sandbox;
    sandbox.self = sandbox;
    sandbox.globalThis = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: path.basename(file) });
    return { sandbox, counts };
}

test('index.html loads the multiplayer scripts AFTER index.js', () => {
    const html = fs.readFileSync(INDEX_HTML, 'utf8');
    // Look for the actual <script src=...> tags, not any prose mention of them.
    const tag = (file) => {
        const re = new RegExp('<script[^>]*src=["\'][^"\']*' + file.replace(/[.]/g, '\\.') + '["\'][^>]*>');
        const m = re.exec(html);
        return m ? m.index : -1;
    };
    const idx = tag('index.js');
    const core = tag('mp-core.js');
    const client = tag('mp-client.js');
    assert.ok(idx >= 0, 'index.js is still loaded');
    assert.ok(core > idx, 'mp-core.js must be loaded after index.js');
    assert.ok(client > core, 'mp-client.js must be loaded after mp-core.js');
    // relative paths only, so file:// still works
    assert.ok(!/<script[^>]*src=["']\//.test(html), 'no absolute script paths');
});

test('every script the page loads actually exists on disk', () => {
    const html = fs.readFileSync(INDEX_HTML, 'utf8');
    const re = /<script[^>]*src=["']([^"']+)["'][^>]*>/g;
    let m;
    const missing = [];
    while ((m = re.exec(html))) {
        const src = m[1];
        if (/^https?:\/\//.test(src)) continue;
        if (!fs.existsSync(path.join(GAME_ROOT, src))) missing.push(src);
    }
    assert.deepEqual(missing, [], 'missing script files: ' + missing.join(', '));
});

test('both multiplayer files exist at the documented paths', () => {
    assert.ok(fs.existsSync(CORE_PATH), 'multiplayer/mp-core.js exists');
    assert.ok(fs.existsSync(CLIENT_JS), 'multiplayer/mp-client.js exists');
    assert.ok(fs.existsSync(path.join(GAME_ROOT, 'multiplayer', 'server.mjs')));
});

test('loading mp-core.js creates no network connection', () => {
    const { counts } = loadScriptCounted(CORE_PATH);
    assert.equal(counts.rtc, 0, 'no RTCPeerConnection');
    assert.equal(counts.ws, 0, 'no WebSocket');
});

test('loading mp-client.js creates no network connection', () => {
    const { sandbox, counts } = loadScriptCounted(CORE_PATH);
    assert.ok(sandbox.MPCore, 'core loaded');
    // Now load the client on top of the same sandbox.
    vm.runInContext(fs.readFileSync(CLIENT_JS, 'utf8'), sandbox, { filename: 'mp-client.js' });
    assert.equal(counts.rtc, 0, 'loading the client opens no WebRTC connection');
    assert.equal(counts.ws, 0, 'loading the client opens no WebSocket');
    assert.ok(sandbox.BSSMultiplayer, 'the public API is exposed');
    assert.equal(sandbox.BSSMultiplayer.state.mode, 'single', 'the default mode is single-player');
});

test('selecting single-player still opens no connection', () => {
    const { sandbox, counts } = loadScriptCounted(CORE_PATH);
    vm.runInContext(fs.readFileSync(CLIENT_JS, 'utf8'), sandbox, { filename: 'mp-client.js' });
    sandbox.BSSMultiplayer.startSingle();
    assert.equal(counts.rtc, 0);
    assert.equal(counts.ws, 0);
    assert.equal(sandbox.BSSMultiplayer.getTransport(), null);
    assert.equal(sandbox.BSSMultiplayer.getSession(), null);
});

test('the game source never constructs a socket of its own', () => {
    for (const file of [INDEX_JS, path.join(GAME_ROOT, 'GLSLShaders.js'), path.join(GAME_ROOT, 'MathHelper.js'), path.join(GAME_ROOT, 'playerGear.js'), path.join(GAME_ROOT, 'mapMesh.js')]) {
        const src = fs.readFileSync(file, 'utf8');
        assert.ok(!/new\s+WebSocket\b/.test(src), file + ' must not open a WebSocket');
        assert.ok(!/new\s+RTCPeerConnection\b/.test(src), file + ' must not open a peer connection');
        assert.ok(!/\bfetch\s*\(/.test(src), file + ' must not fetch');
        assert.ok(!/\bXMLHttpRequest\b/.test(src), file + ' must not use XHR');
    }
});

test('the save system is unchanged in shape (IndexedDB -> worlds -> {id,data})', () => {
    const src = fs.readFileSync(INDEX_JS, 'utf8');
    assert.match(src, /indexedDB\.open\("IndexedDB_BeeSwarmSimulator",\s*1\)/);
    assert.match(src, /createObjectStore\("worlds",\s*\{\s*keyPath:\s*"id"\s*\}\)/);
    assert.match(src, /store\.put\(\{\s*id:\s*id,\s*data:\s*data\s*\}\)/);
    assert.match(src, /window\.createDatabase\s*=\s*createDatabase/);
    assert.match(src, /window\.loadFromDB\s*=\s*loadFromDB/);
    assert.match(src, /window\.saveToDB\s*=\s*saveToDB/);
    assert.match(src, /window\.deleteFromDB\s*=\s*deleteFromDB/);
    // existing save-code entry points survive
    assert.match(src, /window\.initSave\s*=/);
    assert.match(src, /window\.renameSave\s*=/);
    assert.match(src, /window\.getSave\s*=/);
    assert.match(src, /window\.deleteSave\s*=/);
});

test('the extension hook still publishes the gameplay globals', () => {
    const src = fs.readFileSync(INDEX_JS, 'utf8');
    assert.match(src, /window\.exposeCheats\s*=/);
    for (const g of ['window.player', 'window.items', 'window.effects', 'window.flowers', 'window.NPCs', 'window.objects']) {
        assert.ok(src.includes(g), 'exposeCheats still sets ' + g);
    }
});

test('every element mp-client.js looks up exists in index.html', () => {
    // Catches a typo'd menu id without needing a browser: the client wires the
    // UI by id, so a missing id would silently disable that control.
    const html = fs.readFileSync(INDEX_HTML, 'utf8');
    const client = fs.readFileSync(CLIENT_JS, 'utf8');
    const ids = new Set();
    const re = /\$\('([^']+)'\)/g;
    let m;
    while ((m = re.exec(client))) ids.add(m[1]);
    assert.ok(ids.size >= 25, 'the client still wires the full menu (' + ids.size + ' ids)');
    const missing = [...ids].filter((id) => !html.includes("id='" + id + "'") && !html.includes('id="' + id + '"'));
    assert.deepEqual(missing, [], 'ids missing from index.html: ' + missing.join(', '));
});

test('test/all.mjs imports every test file (directory form stays complete)', () => {
    const dir = path.join(GAME_ROOT, 'multiplayer', 'test');
    const all = fs.readFileSync(path.join(dir, 'all.mjs'), 'utf8');
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.test.mjs')).sort();
    assert.ok(files.length >= 7, 'the suite still has all of its files');
    for (const f of files) {
        assert.ok(all.includes("'./" + f + "'"), 'all.mjs imports ' + f);
    }
});

test('the multiplayer menu exists in index.html and does not replace the main menu', () => {
    const html = fs.readFileSync(INDEX_HTML, 'utf8');
    for (const id of ['mainMenu', 'mainSelectMenu', 'mainPlay', 'mainNew', 'createNewGame', 'createImportedGame', 'savedGames', 'mainInfoMenu']) {
        assert.ok(html.includes(`id='${id}'`) || html.includes(`id="${id}"`), 'existing menu id ' + id + ' kept');
    }
    assert.ok(html.includes("id='mainMultiplayer'"), 'a Multiplayer entry button was added');
    assert.ok(html.includes("id='mpMenu'"), 'the multiplayer menu panel was added');
    assert.ok(html.includes("id='mpBadge'"), 'the mode badge was added');
    for (const id of ['mpModeSingle', 'mpModePeer', 'mpModeServer', 'mpMaxPlayers', 'mpServerUrl', 'mpDisconnect', 'mpReconnect', 'mpReset', 'mpChatLog', 'mpPlayers']) {
        assert.ok(html.includes(`id='${id}'`), 'multiplayer control ' + id + ' present');
    }
});
