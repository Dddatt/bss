/*
 * multiplayer/test/_core.mjs
 * Loads multiplayer/mp-core.js exactly the way multiplayer/server.mjs does —
 * evaluated in a Node vm context — so the tests exercise the same artifact the
 * browser and the server run. Extra globals (RTCPeerConnection, WebSocket) can
 * be injected, which is how the WebRTC test swaps in `werift`.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const CORE_PATH = path.join(HERE, '..', 'mp-core.js');
export const MULTIPLAYER_DIR = path.join(HERE, '..');
export const GAME_ROOT = path.join(HERE, '..', '..');

export function loadCore(extraGlobals = {}) {
    const src = fs.readFileSync(CORE_PATH, 'utf8');
    const sandbox = {
        console,
        setTimeout,
        clearTimeout,
        setInterval,
        clearInterval,
        ...extraGlobals
    };
    sandbox.globalThis = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(src, sandbox, { filename: 'mp-core.js' });
    if (!sandbox.MPCore) throw new Error('mp-core.js did not export MPCore on the vm global');
    return sandbox.MPCore;
}

/** Wait until `fn()` is truthy or the timeout elapses. */
export function waitFor(fn, timeoutMs = 5000, stepMs = 10) {
    return new Promise((resolve, reject) => {
        const started = Date.now();
        const tick = () => {
            let value;
            try { value = fn(); } catch (e) { return reject(e); }
            if (value) return resolve(value);
            if (Date.now() - started > timeoutMs) return reject(new Error('waitFor timed out'));
            setTimeout(tick, stepMs);
        };
        tick();
    });
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Normalise a value that came out of the vm realm into plain host objects.
 * Objects created inside a vm context have that context's prototypes, which
 * `assert.deepStrictEqual` treats as different from the host realm's.
 */
export const plain = (v) => (v === undefined ? undefined : JSON.parse(JSON.stringify(v)));
