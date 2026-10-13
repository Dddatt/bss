#!/usr/bin/env node
/*
 * multiplayer/server.mjs
 * ---------------------------------------------------------------------------
 * OPTIONAL MULTIPLAYER — self-hosted server for the HTML5 Bee Swarm Simulator.
 *
 * ZERO npm dependencies. Plain Node.
 *
 *   node multiplayer/server.mjs [--port 8787] [--host 0.0.0.0]
 *                               [--room world] [--seed 1337]
 *                               [--max-players 6] [--help]
 *
 * It does two things:
 *   1. serves the game folder over HTTP, so players just open  http://<host>:8787/
 *   2. upgrades  /ws  to a WebSocket and is THE AUTHORITY for the room
 *
 * The authority rules are NOT re-implemented here: they are loaded out of
 * multiplayer/mp-core.js (evaluated in a Node vm context) so the browser host
 * and this server always run the exact same code.
 *
 * The WebSocket implementation is hand-rolled (RFC 6455):
 *   - text frames only (binary is rejected with 1003)
 *   - ping / pong / close
 *   - payloads up to 64 KiB; message content up to 8 KiB
 *   - client frames MUST be masked, as the spec requires
 * ---------------------------------------------------------------------------
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GAME_ROOT = path.resolve(__dirname, '..');

/* =====================================================================
 * flags
 * ===================================================================== */

const USAGE = `
Bee Swarm Simulator — optional multiplayer server (zero dependencies)

Usage:
  node multiplayer/server.mjs [options]

Options:
  --port <n>          TCP port to listen on            (default 8787)
  --host <addr>       interface to bind                (default 0.0.0.0)
  --room <name>       room name shown to players       (default world)
  --seed <n>          world RNG seed                   (default 1337)
  --max-players <n>   maximum players, 2..12           (default 6)
  --help              show this help and exit

The same machine can also just open the game with file:// for single-player.
Multiplayer needs this server running on a machine all players can reach.
`.trim();

function parseArgs(argv) {
    const opts = {
        port: 8787,
        host: '0.0.0.0',
        room: 'world',
        seed: 1337,
        maxPlayers: 6,
        help: false
    };
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        const next = () => argv[++i];
        switch (a) {
            case '--help': case '-h': opts.help = true; break;
            case '--port': opts.port = Number(next()); break;
            case '--host': opts.host = String(next() || ''); break;
            case '--room': opts.room = String(next() || 'world'); break;
            case '--seed': opts.seed = Number(next()); break;
            case '--max-players': opts.maxPlayers = Number(next()); break;
            default:
                if (a.startsWith('--port=')) opts.port = Number(a.slice(7));
                else if (a.startsWith('--host=')) opts.host = a.slice(7);
                else if (a.startsWith('--room=')) opts.room = a.slice(7);
                else if (a.startsWith('--seed=')) opts.seed = Number(a.slice(7));
                else if (a.startsWith('--max-players=')) opts.maxPlayers = Number(a.slice(15));
                else if (a.trim()) {
                    console.error(`Unknown option: ${a}\n`);
                    console.error(USAGE);
                    process.exit(2);
                }
        }
    }
    if (!Number.isFinite(opts.port) || opts.port < 1 || opts.port > 65535) opts.port = 8787;
    if (!Number.isFinite(opts.seed)) opts.seed = 1337;
    if (!Number.isFinite(opts.maxPlayers)) opts.maxPlayers = 6;
    opts.maxPlayers = Math.max(2, Math.min(12, Math.round(opts.maxPlayers)));
    if (!opts.host) opts.host = '0.0.0.0';
    return opts;
}

/* =====================================================================
 * load the shared core (same file the browser loads)
 * ===================================================================== */

function loadCore() {
    const src = fs.readFileSync(path.join(__dirname, 'mp-core.js'), 'utf8');
    const sandbox = { console, setTimeout, clearTimeout, setInterval, clearInterval };
    sandbox.globalThis = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(src, sandbox, { filename: 'mp-core.js' });
    if (!sandbox.MPCore) throw new Error('mp-core.js did not export MPCore');
    return sandbox.MPCore;
}

/* =====================================================================
 * WebSocket framing (RFC 6455)
 * ===================================================================== */

const OP_CONT = 0x0, OP_TEXT = 0x1, OP_BINARY = 0x2, OP_CLOSE = 0x8, OP_PING = 0x9, OP_PONG = 0xa;
const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

function acceptKey(key) {
    return crypto.createHash('sha1').update(key + GUID).digest('base64');
}

/** Build an unmasked server->client frame. */
function frame(opcode, payload) {
    const data = Buffer.isBuffer(payload) ? payload : Buffer.from(String(payload), 'utf8');
    const len = data.length;
    let header;
    if (len < 126) {
        header = Buffer.alloc(2);
        header[1] = len;
    } else if (len < 65536) {
        header = Buffer.alloc(4);
        header[1] = 126;
        header.writeUInt16BE(len, 2);
    } else {
        header = Buffer.alloc(10);
        header[1] = 127;
        header.writeBigUInt64BE(BigInt(len), 2);
    }
    header[0] = 0x80 | opcode;   // FIN + opcode
    return Buffer.concat([header, data]);
}

/**
 * Per-connection frame reader. Accumulates bytes, yields complete messages.
 * `onMessage(str)`, `onPing()`, `onPong()`, `onClose(code)`, `onProtocolError(reason)`
 */
class FrameReader {
    constructor(limits) {
        this.buf = Buffer.alloc(0);
        this.limits = limits;
        this.fragments = [];
        this.fragmentOpcode = 0;
    }
    push(chunk) {
        this.buf = Buffer.concat([this.buf, chunk]);
        const out = [];
        for (;;) {
            const frame = this.next();
            if (!frame) break;
            out.push(frame);
        }
        return out;
    }
    next() {
        const buf = this.buf;
        if (buf.length < 2) return null;
        const b0 = buf[0], b1 = buf[1];
        const fin = (b0 & 0x80) !== 0;
        const rsv = b0 & 0x70;
        const opcode = b0 & 0x0f;
        const masked = (b1 & 0x80) !== 0;
        let len = b1 & 0x7f;
        let offset = 2;
        if (rsv !== 0) return this._fatal('reserved bits set');
        if (!masked) return this._fatal('client frame not masked');
        if (len === 126) {
            if (buf.length < offset + 2) return null;
            len = buf.readUInt16BE(offset); offset += 2;
        } else if (len === 127) {
            if (buf.length < offset + 8) return null;
            const big = buf.readBigUInt64BE(offset); offset += 8;
            if (big > BigInt(this.limits.maxFrame)) return this._fatal('frame too large');
            len = Number(big);
        }
        if (len > this.limits.maxFrame) return this._fatal('frame too large');
        if (buf.length < offset + 4 + len) return null;
        const mask = buf.subarray(offset, offset + 4); offset += 4;
        const payload = Buffer.from(buf.subarray(offset, offset + len));
        for (let i = 0; i < payload.length; i++) payload[i] ^= mask[i & 3];
        this.buf = buf.subarray(offset + len);

        // control frames may not be fragmented and must be <= 125 bytes
        if (opcode >= 0x8) {
            if (!fin) return this._fatal('fragmented control frame');
            return { type: 'control', opcode, payload, fin: true };
        }
        if (opcode === OP_CONT) {
            if (!this.fragmentOpcode) return this._fatal('continuation without start');
            this.fragments.push(payload);
            if (fin) {
                const whole = Buffer.concat(this.fragments);
                const start = this.fragmentOpcode;
                this.fragments = [];
                this.fragmentOpcode = 0;
                return { type: 'data', opcode: start, payload: whole, fin: true };
            }
            return this.next();
        }
        if (opcode === OP_TEXT || opcode === OP_BINARY) {
            if (!fin) {
                this.fragmentOpcode = opcode;
                this.fragments = [payload];
                return this.next();
            }
            return { type: 'data', opcode, payload, fin: true };
        }
        return this._fatal('unknown opcode ' + opcode);
    }
    _fatal(reason) {
        this.buf = Buffer.alloc(0);
        return { type: 'error', reason };
    }
}

/* =====================================================================
 * main
 * ===================================================================== */

function main() {
    const opts = parseArgs(process.argv.slice(2));
    if (opts.help) {
        console.log(USAGE);
        process.exit(0);
    }

    const MPCore = loadCore();
    const authority = MPCore.createAuthority({
        seed: opts.seed,
        room: opts.room,
        maxPlayers: opts.maxPlayers
    });

    // Seed a small, DETERMINISTIC set of shared reward tokens — one in front of
    // every hive plot. These are the rewards the authority validates collects
    // against, and a claimed reward is gone for everybody (claim-once).
    (function seedTokens() {
        const specs = [];
        for (let i = 0; i < MPCore.HIVE_PLOTS.length; i++) {
            const plot = MPCore.HIVE_PLOTS[i];
            specs.push({
                id: 'token' + i,
                type: 'honey',
                value: 10 + i * 5,
                p: [plot[0], plot[1] - 0.5, plot[2] - 2]
            });
        }
        authority.seedWorld(specs, []);
    })();
    const limiter = MPCore.createRateLimiter();
    const listeners = new Set();     // live connections
    let connSeq = 0;                 // debug tag counter
    const MAX_FRAME = MPCore.MAX_FRAME_BYTES;
    const SOCKET_TIMEOUT_MS = 15000;

    /* ---- static HTTP -------------------------------------------------- */

    const MIME = {
        '.html': 'text/html; charset=utf-8',
        '.js': 'text/javascript; charset=utf-8',
        '.mjs': 'text/javascript; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.json': 'application/json; charset=utf-8',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.mp3': 'audio/mpeg',
        '.ogg': 'audio/ogg',
        '.wav': 'audio/wav',
        '.wasm': 'application/wasm',
        '.md': 'text/markdown; charset=utf-8',
        '.txt': 'text/plain; charset=utf-8',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.rbxl': 'application/octet-stream'
    };

    function serveStatic(req, res) {
        let urlPath;
        try { urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
        catch { urlPath = '/'; }
        if (urlPath.endsWith('/')) urlPath += 'index.html';
        const resolved = path.normalize(path.join(GAME_ROOT, urlPath));
        if (!resolved.startsWith(GAME_ROOT)) {
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            res.end('Forbidden');
            return;
        }
        fs.stat(resolved, (err, stat) => {
            if (err || !stat.isFile()) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not found');
                return;
            }
            const ext = path.extname(resolved).toLowerCase();
            res.writeHead(200, {
                'Content-Type': MIME[ext] || 'application/octet-stream',
                'Content-Length': stat.size,
                'Cache-Control': 'no-store',
                // keep the page usable inside an iframe (the game renders via one)
                'X-Content-Type-Options': 'nosniff'
            });
            fs.createReadStream(resolved).pipe(res);
        });
    }

    const server = http.createServer((req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Method not allowed');
            return;
        }
        serveStatic(req, res);
    });

    /* ---- connection helpers ------------------------------------------- */

    function send(conn, opcode, payload) {
        if (conn.closed || !conn.socket.writable) return false;
        try { conn.socket.write(frame(opcode, payload)); return true; }
        catch { return false; }
    }

    function sendMsg(conn, type, d, f) {
        const env = { v: MPCore.PROTOCOL_VERSION, t: type, q: 0, d: d === undefined ? {} : d };
        if (f) env.f = f;
        return send(conn, OP_TEXT, JSON.stringify(env));
    }

    function broadcast(type, d, f, exceptConn) {
        listeners.forEach((c) => {
            if (c === exceptConn) return;
            if (!c.id) return;                 // not joined yet
            sendMsg(c, type, d, f);
        });
    }

    function closeConn(conn, code, reason) {
        if (conn.closed) return;
        conn.closed = true;
        if (conn.id) {
            authority.leave(conn.id, reason || 'closed');
            limiter.reset(conn.id);
        }
        try {
            const payload = Buffer.alloc(2 + Buffer.byteLength(reason || ''));
            payload.writeUInt16BE(code || 1000, 0);
            payload.write(reason || '', 2);
            send(conn, OP_CLOSE, payload);
        } catch { /* ignore */ }
        try { conn.socket.end(); } catch { /* ignore */ }
        listeners.delete(conn);
        if (conn.id) broadcast('roster', { players: authority.roster() });
    }

    function fullRoomError() {
        return { code: 'server_full', message: 'This room is full. Try again later or raise --max-players.' };
    }

    /* ---- message handling (the server is the authority) ---------------- */

    function handleMessage(conn, msg) {
        if (msg.t === 'hello') {
            if (conn.id) return;                        // already joined
            const wanted = msg.d.id || MPCore.uid('p');
            const res = authority.join({ id: wanted, name: msg.d.name, profile: msg.d.profile });
            if (!res.ok) {
                const code = res.error.code;
                sendMsg(conn, 'error', {
                    code,
                    message: code === 'server_full'
                        ? fullRoomError().message
                        : 'That player id is already connected. Reload to get a new one.'
                });
                if (code === 'already_connected') closeConn(conn, 1008, 'already_connected');
                else if (code === 'server_full') closeConn(conn, 1013, 'server_full');
                else closeConn(conn, 1008, code);
                return;
            }
            conn.id = res.id;
            conn.lastSeen = Date.now();
            console.log(`[join] ${conn.id} (${msg.d.name || 'Bee'}) hive#${res.plot} — ${authority.playerCount()}/${opts.maxPlayers}`);
            sendMsg(conn, 'welcome', res.welcome);
            broadcast('roster', { players: authority.roster() });
            return;
        }

        if (!conn.id) {
            sendMsg(conn, 'error', { code: 'not_authenticated', message: 'Send hello first.' });
            return;
        }

        // token buckets: per player, per channel
        const token = limiter.take(conn.id, msg.t);
        if (!token.ok) {
            const count = limiter.violate(conn.id);
            if (count >= MPCore.VIOLATION_LIMIT) {
                console.log(`[drop] ${conn.id} after ${count} violations`);
                broadcast('roster', { players: authority.roster().filter((p) => p.id !== conn.id) });
                closeConn(conn, 1008, 'too many violations');
            }
            return;
        }
        conn.lastSeen = Date.now();
        authority.touch(conn.id, conn.lastSeen);

        // Set BSS_MP_DEBUG=1 to trace every accepted message (self-hosting aid).
        if (process.env.BSS_MP_DEBUG) console.log(`[msg] ${conn.id} ${msg.t}`);

        switch (msg.t) {
            case 'move':
                authority.notePosition(conn.id, msg.d.p);
                broadcast('move', msg.d, conn.id, conn);
                return;
            case 'bees':
            case 'world':
                broadcast(msg.t, msg.d, conn.id, conn);
                return;
            case 'collect': {
                const r = authority.collect(conn.id, msg.d);
                const out = r.ok
                    ? { ok: true, id: r.id, amount: r.amount, by: conn.id }
                    : { ok: false, id: msg.d.id, reason: r.error.code };
                sendMsg(conn, 'collectResult', out);
                if (r.ok) broadcast('collectResult', out, conn.id, conn);
                return;
            }
            case 'damage': {
                const r = authority.damage(conn.id, msg.d);
                if (r.ok) broadcast('damage', msg.d, conn.id, conn);
                return;
            }
            case 'convert': {
                const r = authority.convert(conn.id, msg.d);
                sendMsg(conn, 'actionResult', r.ok
                    ? { ok: true, action: 'convert', gained: r.gained, honey: r.honey, pollen: r.pollen }
                    : { ok: false, action: 'convert', reason: r.error.code });
                return;
            }
            case 'buy': {
                const r = authority.buy(conn.id, msg.d);
                sendMsg(conn, 'actionResult', r.ok
                    ? { ok: true, action: 'buy', item: r.item, cost: r.cost, honey: r.honey, slots: r.slots }
                    : { ok: false, action: 'buy', item: msg.d.item, reason: r.error.code });
                if (r.ok) broadcast('roster', { players: authority.roster() });
                return;
            }
            case 'chat': {
                if (!msg.d.m) return;
                const p = authority.getPlayer(conn.id);
                const payload = { from: conn.id, name: (p && p.name) || 'Bee', m: msg.d.m, ts: Date.now() };
                sendMsg(conn, 'chatMsg', payload);
                broadcast('chatMsg', payload, conn.id, conn);
                return;
            }
            case 'emote':
            case 'quest':
                broadcast(msg.t, msg.d, conn.id, conn);
                return;
            case 'bye':
                closeConn(conn, 1000, 'bye');
                return;
            case 'ping':
                sendMsg(conn, 'pong', { t: msg.d.t });
                return;
            default:
                return;
        }
    }

    function handleRaw(conn, raw) {
        // Reject oversized/malformed BEFORE anything else, and never let a bad
        // message kill the socket (it only counts as a violation).
        const res = MPCore.decode(raw);
        if (!res.ok) {
            if (process.env.BSS_MP_DEBUG) {
                console.log(`[bad-msg] ${conn.id || '(anon)'} ${res.error.code} :: ${String(raw).slice(0, 120)}`);
            }
            conn.violations = (conn.violations || 0) + 1;
            if (conn.id) limiter.violate(conn.id);
            if (conn.violations >= MPCore.VIOLATION_LIMIT) {
                closeConn(conn, 1008, 'too many bad messages');
            }
            return;
        }
        try { handleMessage(conn, res.msg); }
        catch (e) { console.error('[handler error]', e && e.message); }
    }

    /* ---- upgrade ------------------------------------------------------- */

    server.on('upgrade', (req, socket) => {
        const url = new URL(req.url, 'http://localhost');
        if (url.pathname !== '/ws') {
            socket.write('HTTP/1.1 404 Not Found\r\nConnection: close\r\n\r\n');
            socket.destroy();
            return;
        }
        const key = req.headers['sec-websocket-key'];
        const version = req.headers['sec-websocket-version'];
        if (req.headers.upgrade?.toLowerCase() !== 'websocket' || !key || version !== '13') {
            socket.write('HTTP/1.1 400 Bad Request\r\nConnection: close\r\n\r\n');
            socket.destroy();
            return;
        }
        socket.write(
            'HTTP/1.1 101 Switching Protocols\r\n' +
            'Upgrade: websocket\r\n' +
            'Connection: Upgrade\r\n' +
            `Sec-WebSocket-Accept: ${acceptKey(key)}\r\n\r\n`
        );
        socket.setNoDelay(true);

        const conn = {
            socket,
            id: null,
            closed: false,
            violations: 0,
            lastSeen: Date.now(),
            reader: new FrameReader({ maxFrame: MAX_FRAME })
        };
        listeners.add(conn);

        conn.tag = 'c' + (++connSeq);
        socket.on('data', (chunk) => {
            if (process.env.BSS_MP_DEBUG) console.log(`[bytes] ${conn.tag} id=${conn.id || '-'} len=${chunk.length}`);
            let frames;
            try { frames = conn.reader.push(chunk); }
            catch { return closeConn(conn, 1002, 'protocol error'); }
            for (const fr of frames) {
                if (!fr) continue;
                if (fr.type === 'error') {
                    if (process.env.BSS_MP_DEBUG) console.log(`[frame-error] ${conn.id || '(anon)'} ${fr.reason}`);
                    conn.violations++;
                    if (conn.violations >= MPCore.VIOLATION_LIMIT) closeConn(conn, 1002, fr.reason);
                    continue;
                }
                if (fr.type === 'control') {
                    if (fr.opcode === OP_PING) { send(conn, OP_PONG, fr.payload); conn.lastSeen = Date.now(); }
                    else if (fr.opcode === OP_PONG) { conn.lastSeen = Date.now(); }
                    else if (fr.opcode === OP_CLOSE) {
                        closeConn(conn, 1000, 'client closed');
                    }
                    continue;
                }
                if (fr.opcode === OP_BINARY) {
                    conn.violations++;
                    closeConn(conn, 1003, 'binary frames are not accepted');
                    return;
                }
                handleRaw(conn, fr.payload.toString('utf8'));
            }
        });

        socket.on('close', () => closeConn(conn, 1000, 'socket closed'));
        socket.on('error', () => closeConn(conn, 1011, 'socket error'));
    });

    /* ---- sweep dead connections --------------------------------------- */

    const sweeper = setInterval(() => {
        const now = Date.now();
        const removed = [];
        listeners.forEach((c) => {
            if (c.closed) return;
            if (now - c.lastSeen > SOCKET_TIMEOUT_MS) {
                if (c.id) removed.push(c.id);
                closeConn(c, 1001, 'timeout');
            }
        });
        if (removed.length) {
            console.log(`[sweep] freed ${removed.length} stale connection(s): ${removed.join(', ')}`);
            broadcast('roster', { players: authority.roster() });
        }
    }, 5000);
    if (sweeper.unref) sweeper.unref();

    /* ---- banner -------------------------------------------------------- */

    function urlsFor(port, host) {
        const out = [];
        const ifaces = os.networkInterfaces();
        for (const name of Object.keys(ifaces)) {
            for (const ni of ifaces[name] || []) {
                if (ni.family === 'IPv4' && !ni.internal) out.push(`http://${ni.address}:${port}/`);
            }
        }
        return out;
    }

    server.listen(opts.port, opts.host, () => {
        const lan = urlsFor(opts.port, opts.host);
        const line = '-'.repeat(66);
        console.log(line);
        console.log('  Bee Swarm Simulator — multiplayer server');
        console.log(line);
        console.log(`  room          : ${opts.room}`);
        console.log(`  seed          : ${opts.seed}`);
        console.log(`  max players   : ${opts.maxPlayers}  (one hive each)`);
        console.log(`  listening on  : ${opts.host}:${opts.port}`);
        console.log('');
        console.log('  Share one of these URLs with the players:');
        console.log(`    this machine    http://localhost:${opts.port}/`);
        if (lan.length) {
            lan.forEach((u) => console.log(`    same LAN        ${u}`));
        } else {
            console.log('    same LAN        (no external IPv4 found)');
        }
        console.log(`    internet        http://<your-public-ip>:${opts.port}/   (needs TCP ${opts.port} forwarded)`);
        console.log('');
        console.log('  Players set the server address in the game menu to:');
        console.log(`    ws://<host-they-can-reach>:${opts.port}/ws`);
        console.log(line);
    });

    server.on('error', (err) => {
        if (err && err.code === 'EADDRINUSE') {
            console.error(`\nPort ${opts.port} is already in use. Try:  --port ${opts.port + 1}\n`);
        } else {
            console.error('\nServer error:', err && err.message);
        }
        process.exit(1);
    });

    const shutdown = () => {
        console.log('\nShutting down…');
        listeners.forEach((c) => closeConn(c, 1001, 'server shutting down'));
        clearInterval(sweeper);
        server.close(() => process.exit(0));
        setTimeout(() => process.exit(0), 1000).unref();
    };
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);

    return { server, authority, listeners, opts };
}

/* Only start when run directly (so tests can import parseArgs/FrameReader). */
const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (isMain) {
    main();
}

export { main, parseArgs, FrameReader, frame, acceptKey, loadCore, USAGE };
