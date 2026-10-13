import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadCore, plain } from './_core.mjs';

const C = loadCore();

test('only legal state transitions are allowed', () => {
    assert.ok(C.STATES.includes('idle'));
    assert.equal(C.canTransition('idle', 'hosting'), true);
    assert.equal(C.canTransition('idle', 'connecting'), true);
    assert.equal(C.canTransition('connected', 'idle'), false, 'must disconnect first');
    assert.equal(C.canTransition('hosting', 'connected'), true);
    assert.equal(C.canTransition('disconnecting', 'idle'), true);
    assert.equal(C.canTransition('connected', 'hosting'), false);
    assert.equal(C.canTransition('idle', 'idle'), false, 'a self transition is not a transition');
    assert.equal(C.canTransition('nonsense', 'idle'), false);
});

test('a session without a transport is a programming error', () => {
    assert.throws(() => C.createSession({}), /transport/i);
});

test('interpolation moves smoothly between two samples', () => {
    const interp = C.createInterpolator({ bufferMs: 100, snapDistance: 4 });
    interp.push({ t: 0, p: [0, 0, 0], y: 0, m: 1, s: 5 });
    interp.push({ t: 1000, p: [10, 0, 0], y: 0, m: 1, s: 5 });
    const mid = interp.sample(600);          // render 500ms in the past -> halfway
    assert.equal(mid.ready, true);
    assert.equal(mid.snapped, false, 'small moves interpolate');
    assert.ok(mid.p[0] > 4 && mid.p[0] < 6, `expected ~5, got ${mid.p[0]}`);
});

test('a teleport snaps instead of interpolating', () => {
    const interp = C.createInterpolator({ bufferMs: 100, snapDistance: 4 });
    interp.push({ t: 0, p: [0, 0, 0], y: 0, m: 1, s: 5 });
    interp.push({ t: 1000, p: [500, 0, 0], y: 1, m: 1, s: 5 });
    const s = interp.sample(600);
    assert.equal(s.snapped, true, 'a 500m jump in 1s snaps');
    assert.deepEqual(plain(s.p), [500, 0, 0], 'it snaps to the newer sample');
});

test('interpolation holds the newest sample when rendering ahead', () => {
    const interp = C.createInterpolator({ bufferMs: 100 });
    interp.push({ t: 0, p: [0, 0, 0], y: 0, m: 1, s: 1 });
    interp.push({ t: 50, p: [1, 0, 0], y: 0, m: 1, s: 1 });
    const s = interp.sample(999999);
    assert.deepEqual(plain(s.p), [1, 0, 0]);
    assert.equal(s.ready, true);
});

test('a single sample is reported as snapped (nothing to interpolate)', () => {
    const interp = C.createInterpolator({ bufferMs: 100 });
    interp.push({ t: 0, p: [3, 4, 5], y: 0.2, m: 0, s: 0 });
    const s = interp.sample(1000);
    assert.equal(s.snapped, true);
    assert.deepEqual(plain(s.p), [3, 4, 5]);
});

test('yaw interpolation takes the shortest way around', () => {
    const a = C.shortestAngle(3.0, -3.0);
    assert.ok(Math.abs(a) < Math.PI, 'shortest path is not the long way');
    const interp = C.createInterpolator({ bufferMs: 0, snapDistance: 999 });
    interp.push({ t: 0, p: [0, 0, 0], y: 3.0, m: 1, s: 1 });
    interp.push({ t: 100, p: [0, 0, 0], y: -3.0, m: 1, s: 1 });
    const s = interp.sample(50);
    assert.ok(s.y > 3.0 || s.y < -3.0, `yaw should wrap, got ${s.y}`);
});

/* ---- a real two-peer session over the loopback transport -------------- */

function makePair() {
    const hub = C.createLocalHub();
    const tA = C.createLocalTransport({ id: 'pA', hub, room: 'test' });
    const tB = C.createLocalTransport({ id: 'pB', hub, room: 'test' });
    const sA = C.createSession({ transport: tA, role: 'authority', id: 'pA', name: 'Host' });
    const sB = C.createSession({ transport: tB, role: 'client', id: 'pB', name: 'Guest' });
    return { hub, tA, tB, sA, sB };
}

test('a client joins, is welcomed and appears on the roster', () => {
    const { sA, sB } = makePair();
    const welcomes = [];
    sB.on('welcome', (w) => welcomes.push(w));
    assert.equal(sA.start().ok, true);
    assert.equal(sB.start().ok, true);

    assert.equal(welcomes.length, 1, 'the guest got a welcome');
    assert.ok(welcomes[0].you.hiveIndex >= 0);
    const ids = plain(sA.players()).map((p) => p.id).sort();
    assert.deepEqual(ids, ['pA', 'pB']);
    // and the client sees the same roster
    assert.deepEqual(plain(sB.players()).map((p) => p.id).sort(), ['pA', 'pB']);
});

test('movement is relayed and appears as an interpolated remote', () => {
    const { sA, sB } = makePair();
    sA.start();
    sB.start();
    sB.sendMove({ p: [1, 0, 2], y: 0.1, m: 1, s: 3 });
    sA.sendMove({ p: [-5, 0, -5], y: 0, m: 0, s: 0 });

    // The host sees the guest, the guest sees the host.
    const onHost = sA.remotePlayers();
    assert.ok(onHost.pB, 'host sees the guest');
    assert.ok(Math.abs(onHost.pB.p[0] - 1) < 1e-6);
    const onGuest = sB.remotePlayers();
    assert.ok(onGuest.pA, 'guest sees the host');
    assert.ok(Math.abs(onGuest.pA.p[1]) < 1e-6);
});

test('duplicate ids are refused at session level too', () => {
    const hub = C.createLocalHub();
    const host = C.createSession({
        transport: C.createLocalTransport({ id: 'h', hub }),
        role: 'authority', id: 'h', name: 'H'
    });
    host.start();
    const t2 = C.createLocalTransport({ id: 'x1', hub });
    const s2 = C.createSession({ transport: t2, role: 'client', id: 'dup', name: 'A' });
    s2.start();
    // a second client announcing the same id
    const t3 = C.createLocalTransport({ id: 'x2', hub });
    const s3 = C.createSession({ transport: t3, role: 'client', id: 'dup', name: 'B' });
    const errors = [];
    s3.on('error', (e) => errors.push(e));
    s3.start();
    assert.ok(errors.some((e) => e.code === 'already_connected'), 'duplicate id reported');
    assert.equal(host.players().filter((p) => p.id === 'dup').length, 1, 'only one dup player');
});

test('the player cap is enforced end to end', () => {
    const hub = C.createLocalHub();
    const host = C.createSession({
        transport: C.createLocalTransport({ id: 'h', hub }),
        role: 'authority', id: 'h', name: 'H', maxPlayers: 2
    });
    host.start();
    const a = C.createSession({ transport: C.createLocalTransport({ id: 'a', hub }), role: 'client', id: 'a', name: 'A' });
    a.start();
    const b = C.createSession({ transport: C.createLocalTransport({ id: 'b', hub }), role: 'client', id: 'b', name: 'B' });
    const errs = [];
    b.on('error', (e) => errs.push(e));
    b.start();
    assert.ok(errs.some((e) => e.code === 'server_full'), 'third player refused');
    assert.equal(host.authority.playerCount(), 2);
});

test('a leaving player is pruned from the roster and frees the hive', () => {
    const { hub, sA, sB, tB } = makePair();
    sA.start();
    sB.start();
    const hive = sA.authority.getPlayer('pB').hive.index;
    assert.equal(sA.players().length, 2);

    tB.disconnect();              // the guest drops off
    assert.equal(sA.players().length, 1, 'roster pruned');
    assert.equal(sA.authority.getPlayer('pB'), undefined, 'player removed');

    // another guest reuses the freed hive
    const tC = C.createLocalTransport({ id: 'pC', hub });
    const sC = C.createSession({ transport: tC, role: 'client', id: 'pC', name: 'C' });
    sC.start();
    assert.equal(sA.authority.getPlayer('pC').hive.index, hive, 'the freed hive is reused');
});

test('a stale/duplicate sequence is rejected by the session authority', () => {
    const { sA, sB } = makePair();
    sA.start();
    sB.start();
    // Artificially replay an older sequence directly at the authority.
    assert.equal(sA.authority.noteSeq('pB', 10), true);
    assert.equal(sA.authority.noteSeq('pB', 10), false);
    assert.equal(sA.authority.noteSeq('pB', 9), false);
});

test('violations eventually drop a flooding client', () => {
    const { sA, sB } = makePair();
    sA.start();
    sB.start();
    // Flood the move channel well past 20/s.
    for (let i = 0; i < 200; i++) sB.sendMove({ p: [i % 10, 0, 0], y: 0, m: 1, s: 1 });
    assert.equal(sA.authority.getPlayer('pB'), undefined, 'the flooder was dropped');
});

test('reset clears interpolators and limiter state', () => {
    const { sA, sB } = makePair();
    sA.start();
    sB.start();
    sB.sendMove({ p: [1, 2, 3], y: 0, m: 1, s: 1 });
    assert.ok(Object.keys(sA.remotePlayers()).length >= 1);
    sA.reset();
    assert.deepEqual(plain(sA.remotePlayers()), {});
});

test('chat round trips through the authority exactly once', () => {
    const { sA, sB } = makePair();
    const hostChat = [];
    const guestChat = [];
    sA.on('chat', (m) => hostChat.push(m));
    sB.on('chat', (m) => guestChat.push(m));
    sA.start();
    sB.start();
    sB.sendChat('hello from guest');
    assert.equal(hostChat.length, 1);
    assert.equal(hostChat[0].m, 'hello from guest');
    assert.equal(guestChat.length, 1, 'the guest receives the relayed chat');
    assert.equal(guestChat[0].name, 'Guest');
});

test('an empty chat message is refused locally', () => {
    const { sA } = makePair();
    sA.start();
    const r = sA.sendChat('   ');
    assert.equal(r.ok, false);
    assert.equal(r.error.code, 'empty');
});
