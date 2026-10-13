/*
 * multiplayer/test/server.test.mjs
 * Boots the REAL multiplayer/server.mjs as a child process and talks to it over
 * HTTP + WebSocket using Node's built-in WebSocket (no client library).
 *
 * Each test gets its OWN server instance, so a room can never leak from one test
 * into the next and every test starts from an empty room.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadCore, plain } from './_core.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SERVER = path.join(HERE, '..', 'server.mjs');

const hasWebSocket = typeof WebSocket === 'function';
const skip = hasWebSocket ? false : 'WebSocket is not available in this Node build';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function freePort() {
    return new Promise((resolve, reject) => {
        const srv = net.createServer();
        srv.unref();
        srv.on('error', reject);
        srv.listen(0, '127.0.0.1', () => {
            const port = srv.address().port;
            srv.close(() => resolve(port));
        });
    });
}

function startServer(args) {
    return new Promise((resolve, reject) => {
        const child = spawn(process.execPath, [SERVER, ...args], {
            stdio: ['ignore', 'pipe', 'pipe'],
            // Run the server exactly as a player would (no debug tracing).
            // Export BSS_MP_DEBUG=1 before `npm test` to add per-message traces
            // to the log that is dumped when a test fails.
            env: { ...process.env }
        });
        let out = '';
        let ready = false;
        // Keep collecting output for the whole life of the child: the log is the
        // first thing you want when a relay test fails.
        child.stdout.on('data', (b) => {
            out += b.toString();
            if (!ready && out.includes('listening on')) {
                ready = true;
                resolve({ child, output: () => out });
            }
        });
        child.stderr.on('data', (b) => { out += b.toString(); });
        child.on('error', reject);
        child.on('exit', (code) => { if (!out.includes('listening on')) reject(new Error('server exited: ' + code + '\n' + out)); });
        setTimeout(() => reject(new Error('server did not start:\n' + out)), 8000);
    });
}

/** Minimal WebSocket client with a message queue and forward-only waits. */
class Client {
    constructor(url) {
        this.url = url;
        this.messages = [];
        this.waiters = [];
        this.closed = false;
        this.ws = new WebSocket(url);
        this.ready = new Promise((resolve, reject) => {
            this.ws.addEventListener('open', () => resolve());
            this.ws.addEventListener('error', () => reject(new Error('ws error')));
        });
        this.cursor = 0;
        this.ws.addEventListener('message', (e) => {
            const data = typeof e.data === 'string' ? e.data : Buffer.from(e.data).toString('utf8');
            let msg;
            try { msg = JSON.parse(data); } catch { return; }
            const index = this.messages.length;
            this.messages.push(msg);
            this.waiters = this.waiters.filter((w) => {
                if (index >= this.cursor && w.pred(msg)) {
                    this.cursor = index + 1;   // consume it, once
                    w.resolve(msg);
                    return false;
                }
                return true;
            });
        });
        this.ws.addEventListener('close', () => { this.closed = true; });
    }
    get open() { return this.ws.readyState === (this.ws.OPEN === undefined ? 1 : this.ws.OPEN); }
    /** Fail loudly on a closed socket instead of silently dropping the message. */
    send(obj) {
        if (!this.open) throw new Error('cannot send: socket readyState=' + this.ws.readyState);
        this.ws.send(JSON.stringify(obj));
    }
    sendRaw(str) {
        if (!this.open) throw new Error('cannot send: socket readyState=' + this.ws.readyState);
        this.ws.send(str);
    }
    /**
     * Wait for the next UNCONSUMED message matching `pred`.
     *
     * A per-client cursor means (a) a message that arrived while an earlier
     * `await` was pending is still seen, and (b) asking twice for the same shape
     * of message gives the first, then the second, ... — never the same one twice.
     * The timeout is generous (10 s) because Node runs test FILES in parallel and
     * those files start real WebRTC peers that can starve this child process.
     */
    waitFor(pred, timeoutMs = 10000) {
        for (let i = this.cursor; i < this.messages.length; i++) {
            if (pred(this.messages[i])) {
                this.cursor = i + 1;
                return Promise.resolve(this.messages[i]);
            }
        }
        return new Promise((resolve, reject) => {
            // A timed-out wait MUST unregister itself: a leftover waiter would
            // silently swallow the next matching message, which looks exactly
            // like a server that never answered.
            const waiter = {
                pred,
                resolve: (m) => { clearTimeout(t); resolve(m); }
            };
            const t = setTimeout(() => {
                this.waiters = this.waiters.filter((w) => w !== waiter);
                reject(new Error('timeout waiting for message; got: ' + JSON.stringify(this.messages.slice(-6))));
            }, timeoutMs);
            this.waiters.push(waiter);
        });
    }
    waitType(type, timeoutMs) { return this.waitFor((m) => m.t === type, timeoutMs); }
    close() { try { this.ws.close(); } catch { /* ignore */ } }
}

const hello = (id, name, profile) => ({
    v: 2, t: 'hello', q: 0,
    d: { id, name, profile: profile || { honey: 0, pollen: 0, capacity: 100 } }
});

/** Start a fresh server, run `fn`, then tear the server and its clients down. */
async function withServer(extraArgs, fn) {
    const port = await freePort();
    const srv = await startServer(['--port', String(port), '--host', '127.0.0.1', ...extraArgs]);
    const clients = [];
    const ctx = {
        port,
        base: `http://127.0.0.1:${port}`,
        wsUrl: `ws://127.0.0.1:${port}/ws`,
        output: srv.output,
        client() { const c = new Client(ctx.wsUrl); clients.push(c); return c; }
    };
    try {
        await fn(ctx);
    } catch (err) {
        // On failure, surface the server's own log — it is the fastest way to
        // tell a server crash from a client-side timing problem.
        console.error('--- server output ---\n' + srv.output());
        console.error('--- child exitCode ---', srv.child.exitCode, 'signal', srv.child.signalCode);
        throw err;
    } finally {
        clients.forEach((c) => c.close());
        srv.child.kill('SIGKILL');
        await sleep(80);
    }
}

const DEFAULT_ARGS = ['--room', 'testroom', '--seed', '1337', '--max-players', '3'];

/* ---- CLI --------------------------------------------------------------- */

test('--help prints usage and exits 0', () => {
    const r = spawnSync(process.execPath, [SERVER, '--help'], { encoding: 'utf8' });
    assert.equal(r.status, 0, r.stderr);
    assert.match(r.stdout, /Usage:/);
    assert.match(r.stdout, /--max-players/);
    assert.match(r.stdout, /--port/);
    assert.match(r.stdout, /--seed/);
    assert.match(r.stdout, /--room/);
    assert.match(r.stdout, /--host/);
});

test('an unknown flag exits non-zero with usage', () => {
    const r = spawnSync(process.execPath, [SERVER, '--bogus'], { encoding: 'utf8' });
    assert.notEqual(r.status, 0);
    assert.match(r.stderr, /Unknown option/);
});

test('--max-players is clamped to the supported 2..12 range', { skip }, async () => {
    await withServer(['--max-players', '99'], async (ctx) => {
        assert.match(ctx.output(), /max players\s+:\s+12/);
    });
    await withServer(['--max-players', '1'], async (ctx) => {
        assert.match(ctx.output(), /max players\s+:\s+2/);
    });
});

/* ---- HTTP -------------------------------------------------------------- */

test('serves the game over HTTP', { skip }, async () => {
    await withServer(DEFAULT_ARGS, async (ctx) => {
        const res = await fetch(ctx.base + '/');
        assert.equal(res.status, 200);
        assert.match(res.headers.get('content-type'), /text\/html/);
        const body = await res.text();
        assert.match(body, /Bee Swarm Simulator/);

        // and the multiplayer scripts themselves
        for (const file of ['multiplayer/mp-core.js', 'multiplayer/mp-client.js', 'multiplayer/server.mjs']) {
            const r = await fetch(ctx.base + '/' + file);
            assert.equal(r.status, 200, file + ' should be served');
            assert.match(r.headers.get('content-type'), /javascript/);
        }
    });
});

/*
 * The real client flow, end to end: multiplayer/mp-client.js starts the session
 * (which speaks `hello` immediately) BEFORE the WebSocket has finished its
 * handshake. A browser WebSocket is CONNECTING at that moment, so this is the
 * one test that proves the client actually joins a room over a real socket.
 * It is also the regression test for the outbox: without it the `hello` was
 * dropped and no `welcome` ever arrived.
 */
test('the real client flow joins a room (hello sent while CONNECTING)', { skip }, async () => {
    const C = loadCore({ WebSocket: globalThis.WebSocket });
    await withServer(DEFAULT_ARGS, async (ctx) => {
        const transport = C.createServerTransport({ url: ctx.wsUrl, id: 'live1' });
        const session = C.createSession({ transport: transport, role: 'client', id: 'live1', name: 'Live One' });
        const seen = [];
        session.on('welcome', (e) => seen.push(['welcome', e.d]));
        session.on('error', (e) => seen.push(['error', e]));

        const started = session.start();
        assert.equal(started.ok, true, 'start() succeeds even though the socket is still connecting');

        const welcome = await waitForEvent(session, 'welcome', 8000);
        // The event payload is the whole `welcome` message: the assigned profile
        // is `you`. mp-client reads `w.you`, and this asserts that contract.
        assert.equal(welcome.id, 'live1');
        assert.equal(welcome.you.hiveIndex, 0, 'the client owns hive #0');
        assert.deepEqual(plain(welcome.you.hivePos), [7.375, 1.5, -7.5]);
        assert.equal(welcome.players.length, 1);

        // A second real client joins and both end up on the roster.
        const t2 = C.createServerTransport({ url: ctx.wsUrl, id: 'live2' });
        const s2 = C.createSession({ transport: t2, role: 'client', id: 'live2', name: 'Live Two' });
        const w2 = new Promise((resolve) => s2.on('welcome', (e) => resolve(e)));
        s2.start();
        const welcome2 = await w2;
        assert.equal(welcome2.you.hiveIndex, 1, 'the second client owns hive #1');

        // Movement from one client reaches the other through the real server,
        // attributed to the sender (not to the transport label "server").
        const move = waitForMessage(session, (m) => m.id === 'live2', 8000);
        s2.sendMove({ p: [4, 1, 4], y: 0, m: 1, s: 3 });
        const relayed = await move;
        assert.equal(relayed.id, 'live2', 'the server stamped the origin');
        assert.deepEqual(plain(relayed.d.p), [4, 1, 4]);

        session.disconnect();
        s2.disconnect();
    });
});

/** Resolve on the next session event of `name`. */
function waitForEvent(session, name, timeoutMs) {
    return new Promise((resolve, reject) => {
        const t = setTimeout(() => reject(new Error('timed out waiting for ' + name)), timeoutMs);
        session.on(name, (e) => { clearTimeout(t); resolve(e); });
    });
}

/** Resolve on the next remote `move` (or any other pass-through message). */
function waitForMessage(session, pred, timeoutMs) {
    return new Promise((resolve, reject) => {
        const t = setTimeout(() => reject(new Error('timed out waiting for a message')), timeoutMs);
        session.on('move', (m) => { if (pred(m)) { clearTimeout(t); resolve(m); } });
    });
}

test('path traversal is refused', { skip }, async () => {
    await withServer(DEFAULT_ARGS, async (ctx) => {
        const res = await fetch(ctx.base + '/../../../etc/passwd');
        assert.ok(res.status === 403 || res.status === 404, 'got ' + res.status);
    });
});

/* ---- WebSocket --------------------------------------------------------- */

test('handshake, welcome and roster', { skip }, async () => {
    await withServer(DEFAULT_ARGS, async (ctx) => {
        const a = ctx.client();
        await a.ready;
        a.send(hello('a', 'Alice'));
        const welcome = await a.waitType('welcome');
        assert.equal(welcome.d.id, 'a');
        assert.equal(welcome.d.room, 'testroom');
        assert.equal(welcome.d.maxPlayers, 3);
        assert.ok(Array.isArray(welcome.d.players));
        assert.equal(welcome.d.you.hiveIndex, 0, 'first player gets hive #0');
    });
});

test('three players relay movement and the server stamps the origin', { skip }, async () => {
    await withServer(DEFAULT_ARGS, async (ctx) => {
        const a = ctx.client(), b = ctx.client(), c = ctx.client();
        await Promise.all([a.ready, b.ready, c.ready]);
        a.send(hello('a', 'Alice'));
        b.send(hello('b', 'Bob'));
        c.send(hello('c', 'Cara'));
        await a.waitType('welcome');
        await b.waitType('welcome');
        await c.waitType('welcome');

        // Everyone ends up on the roster (hive #0, #1, #2).
        const roster = await a.waitFor((m) => m.t === 'roster' && m.d.players.length === 3);
        assert.deepEqual(roster.d.players.map((p) => p.hiveIndex).sort(), [0, 1, 2]);

        // Bob moves; Alice and Cara must both receive it, stamped f=b.
        b.send({ v: 2, t: 'move', q: 1, d: { p: [11, 1, 22], y: 0, m: 1, s: 3 } });
        const atAlice = await a.waitType('move');
        const atCara = await c.waitType('move');
        assert.equal(atAlice.f, 'b', 'the origin is stamped by the server, not the payload');
        assert.deepEqual(atAlice.d.p, [11, 1, 22]);
        assert.deepEqual(atCara.d.p, [11, 1, 22]);

        // A payload trying to spoof `f` is ignored: the server overwrites it.
        b.send({ v: 2, t: 'move', q: 2, f: 'c', d: { p: [1, 1, 1], y: 0, m: 1, s: 1 } });
        const spoofed = await a.waitFor((m) => m.t === 'move' && m.d.p[0] === 1);
        assert.equal(spoofed.f, 'b', 'spoofed origin replaced by the real one');

        // Chat from Bob reaches both others exactly once, attributed to him.
        b.send({ v: 2, t: 'chat', q: 3, d: { m: 'hi all' } });
        const chatA = await a.waitType('chatMsg');
        const chatC = await c.waitType('chatMsg');
        assert.equal(chatA.d.from, 'b');
        assert.equal(chatC.d.m, 'hi all');

        // A malformed message does not kill the socket.
        b.sendRaw('{{{ not json');
        b.send({ v: 2, t: 'ping', q: 4, d: { t: 7 } });
        assert.equal((await b.waitType('pong')).d.t, 7);
    });
});

test('the server validates a collect (claim-once) and a purchase', { skip }, async () => {
    await withServer(DEFAULT_ARGS, async (ctx) => {
        const a = ctx.client();
        await a.ready;
        a.send(hello('a', 'Alice', { honey: 3000000, pollen: 0, capacity: 100 }));
        const welcome = await a.waitType('welcome');
        const plot = welcome.d.you.hivePos;

        // A collect for a token that does not exist is refused.
        a.send({ v: 2, t: 'collect', q: 1, d: { kind: 'token', id: 'no-such-token' } });
        assert.equal((await a.waitType('collectResult')).d.ok, false);

        // Stand in front of hive #0 (where token0 was seeded), then collect it.
        a.send({ v: 2, t: 'move', q: 2, d: { p: [plot[0], plot[1], plot[2] - 2], y: 0, m: 0, s: 0 } });
        a.send({ v: 2, t: 'collect', q: 3, d: { kind: 'token', id: 'token0' } });
        const ok = await a.waitFor((m) => m.t === 'collectResult' && m.d.id === 'token0');
        assert.equal(ok.d.ok, true, 'the seeded token was collected');
        assert.equal(ok.d.amount, 10);

        // A SECOND collect of the same token is refused: claim-once.
        a.send({ v: 2, t: 'collect', q: 4, d: { kind: 'token', id: 'token0' } });
        const again = await a.waitFor((m) => m.t === 'collectResult' && m.d.id === 'token0');
        assert.equal(again.d.ok, false, 'a claimed reward is gone for everybody');

        // The `buy` channel is deliberately slow (0.7/s): only the first of two
        // back-to-back buys is answered.
        a.send({ v: 2, t: 'buy', q: 5, d: { item: 'hiveSlot' } });
        const bought = await a.waitType('actionResult');
        assert.equal(bought.d.ok, true);
        assert.equal(bought.d.cost, 3000000, 'server-priced, not client-priced');

        a.send({ v: 2, t: 'buy', q: 6, d: { item: 'hiveSlot' } });
        const spam = await a.waitType('actionResult', 700).then(() => 'answered').catch(() => 'throttled');
        assert.equal(spam, 'throttled', 'a second buy inside the same second is rate limited');

        // Wait out the bucket, then: not enough honey left for a second slot.
        await sleep(1600);
        a.send({ v: 2, t: 'buy', q: 7, d: { item: 'hiveSlot' } });
        const refused = await a.waitType('actionResult');
        assert.equal(refused.d.ok, false);
        assert.equal(refused.d.reason, 'not_enough_honey');

        // A client cannot name a price at all: unknown items are refused.
        await sleep(1600);
        a.send({ v: 2, t: 'buy', q: 8, d: { item: 'freeStuff', price: 0, cost: 0 } });
        const unknown = await a.waitType('actionResult');
        assert.equal(unknown.d.ok, false);
        assert.equal(unknown.d.reason, 'unknown_item');
    });
});

test('a duplicate id is refused and the socket is closed', { skip }, async () => {
    await withServer(DEFAULT_ARGS, async (ctx) => {
        const first = ctx.client();
        await first.ready;
        first.send(hello('dup', 'One'));
        await first.waitType('welcome');

        const second = ctx.client();
        await second.ready;
        second.send(hello('dup', 'Two'));
        const err = await second.waitType('error');
        assert.equal(err.d.code, 'already_connected');
        await sleep(250);
        assert.equal(second.closed, true, 'the duplicate connection was closed');
    });
});

test('garbage is dropped without killing the socket', { skip }, async () => {
    await withServer(DEFAULT_ARGS, async (ctx) => {
        const a = ctx.client();
        await a.ready;
        a.send(hello('g', 'Garbage'));
        await a.waitType('welcome');

        a.sendRaw('this is not json');
        a.sendRaw(JSON.stringify({ v: 1, t: 'move', d: {} }));                       // wrong version
        a.sendRaw(JSON.stringify({ v: 2, t: 'nope', d: {} }));                        // unknown type
        a.sendRaw(JSON.stringify({ v: 2, t: 'chat', d: { m: 'x'.repeat(9000) } }));   // oversize

        a.send({ v: 2, t: 'ping', q: 1, d: { t: 42 } });
        assert.equal((await a.waitType('pong')).d.t, 42);
        assert.equal(a.closed, false, 'the socket is still open');
    });
});

test('the room is full at --max-players and refuses a 4th player', { skip }, async () => {
    await withServer(DEFAULT_ARGS, async (ctx) => {
        for (let i = 0; i < 3; i++) {
            const c = ctx.client();
            await c.ready;
            c.send(hello('full' + i, 'F' + i));
            await c.waitType('welcome');
        }
        const fourth = ctx.client();
        await fourth.ready;
        fourth.send(hello('full3', 'F3'));
        const err = await fourth.waitType('error');
        assert.equal(err.d.code, 'server_full');
        await sleep(250);
        assert.equal(fourth.closed, true, 'the full-room connection was closed');
    });
});

test('a leaving player frees their hive for the next player', { skip }, async () => {
    await withServer(DEFAULT_ARGS, async (ctx) => {
        const a = ctx.client();
        await a.ready;
        a.send(hello('leaveA', 'A'));
        const wa = await a.waitType('welcome');
        const plot = wa.d.you.hiveIndex;

        const b = ctx.client();
        await b.ready;
        b.send(hello('leaveB', 'B'));
        await b.waitType('welcome');

        a.send({ v: 2, t: 'bye', q: 1, d: { reason: 'bye' } });
        a.close();
        await sleep(300);

        const c = ctx.client();
        await c.ready;
        c.send(hello('leaveC', 'C'));
        const wc = await c.waitType('welcome');
        assert.equal(wc.d.you.hiveIndex, plot, 'the freed hive plot is reused');
    });
});
