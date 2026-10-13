import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadCore, plain } from './_core.mjs';

const C = loadCore();

/** One valid sample payload per protocol v2 message type. */
const SAMPLES = {
    hello: { id: 'p1', name: 'Alice', profile: { name: 'Alice', honey: 10, bees: [] } },
    welcome: {
        id: 'a1', room: 'world', seed: 7, maxPlayers: 6, players: [],
        you: { hiveIndex: 0, hivePos: [0, 1, 0], honey: 1, pollen: 2, capacity: 3, bees: 0 }
    },
    roster: { players: [{ id: 'p1', name: 'A', hiveIndex: 1, hivePos: [1, 2, 3] }] },
    ping: { t: 123 },
    pong: { t: 123 },
    bye: { reason: 'leaving' },
    error: { code: 'server_full', message: 'full' },
    move: { p: [1, 2, 3], y: 0.5, m: 1, s: 4.2, st: 'run' },
    bees: { bees: [{ id: 'b1', type: 'basic', p: [1, 2, 3], tgt: [4, 5, 6], st: 'follow' }] },
    world: {
        pollen: [{ field: 'sunflower', amount: 12 }],
        tokens: [{ id: 't1', type: 'honey', p: [0, 1, 0], value: 5 }],
        enemies: [{ id: 'e1', type: 'ladybug', p: [1, 1, 1], hp: 20 }]
    },
    collect: { kind: 'token', id: 't1', field: 'sunflower', amount: 5 },
    collectResult: { ok: true, id: 't1', amount: 5, by: 'p1' },
    damage: { target: 'e1', type: 'tool', amount: 5, p: [0, 0, 0] },
    convert: { amount: 100 },
    buy: { item: 'hiveSlot', qty: 1 },
    actionResult: { ok: true, action: 'buy', item: 'hiveSlot', cost: 3000000, honey: 1, slots: 26 },
    chat: { m: 'hello world' },
    chatMsg: { from: 'p1', name: 'Alice', m: 'hi', ts: 1 },
    quest: { id: 'q1', state: 'active', progress: 3 },
    emote: { e: 'wave' }
};

test('every protocol v2 type is known', () => {
    assert.equal(C.PROTOCOL_VERSION, 2);
    assert.deepEqual(Object.keys(SAMPLES).sort(), [...C.TYPES].sort());
});

test('round trip per type: encode -> decode rebuilds the payload', () => {
    for (const [type, payload] of Object.entries(SAMPLES)) {
        const raw = C.encode(type, payload, { q: 1 });
        const res = C.decode(raw);
        assert.equal(res.ok, true, `${type} should decode: ${res.error && res.error.code}`);
        assert.equal(res.msg.t, type);
        assert.equal(res.msg.v, 2);
        assert.equal(res.msg.q, 1);
        assert.equal(typeof res.msg.d, 'object');
    }
});

test('the relayed-origin field f is sanitised, and never trusted for identity', () => {
    // `f` is the RELAYED origin. It survives validation (sanitised) so a
    // receiving peer can attribute a relayed message...
    const res = C.decode(JSON.stringify({ v: 2, t: 'chat', q: 1, f: 'someone-else', d: { m: 'hi' } }));
    assert.equal(res.ok, true);
    assert.equal(res.msg.f, 'someone-else');

    // ...but it is cleaned like every other string...
    const dirty = C.decode(JSON.stringify({ v: 2, t: 'chat', q: 1, f: 'bad\u0000id\u001f!', d: { m: 'hi' } }));
    assert.equal(dirty.ok, true);
    assert.ok(!/[\u0000-\u001f]/.test(dirty.msg.f), 'control characters are stripped from f');

    // ...and the AUTHORITY never uses it for identity: a local peer that spoofs
    // `f` is still attributed to its own connection.
    const hub = C.createLocalHub();
    const hostT = C.createLocalTransport({ id: 'host', hub });
    const peerT = C.createLocalTransport({ id: 'peer', hub });
    const host = C.createSession({ transport: hostT, role: 'authority', id: 'host', name: 'Host' });
    host.start();
    const seen = [];
    host.on('chat', (m) => seen.push(m));
    peerT.start();
    // hand-craft a wire message that claims to come from someone else
    peerT.sendRaw(JSON.stringify({ v: 2, t: 'chat', q: 1, f: 'host', d: { m: 'impostor' } }));
    assert.equal(seen.length, 1, 'the chat was processed');
    assert.equal(seen[0].from, 'peer', 'attributed to the real connection, not the spoofed f');
});

test('unknown type is rejected', () => {
    const res = C.decode(JSON.stringify({ v: 2, t: 'drop_tables', q: 1, d: {} }));
    assert.equal(res.ok, false);
    assert.equal(res.error.code, 'unknown_type');
});

test('version mismatch is rejected', () => {
    for (const v of [1, 3, '2', null]) {
        const res = C.decode(JSON.stringify({ v, t: 'move', q: 1, d: {} }));
        assert.equal(res.ok, false, `v=${v} must be rejected`);
        assert.equal(res.error.code, 'bad_version');
    }
});

test('malformed JSON is rejected', () => {
    for (const raw of ['', '{', 'not json', '[1,2,3]', 'null', '"str"']) {
        const res = C.decode(raw);
        assert.equal(res.ok, false, `raw=${JSON.stringify(raw)}`);
        assert.ok(['malformed', 'not_text'].includes(res.error.code));
    }
});

test('oversized messages are rejected BEFORE parsing', () => {
    // The string is not valid JSON at all — if parsing happened first we would
    // get 'malformed'. Getting 'oversize' proves the size gate runs first.
    const raw = '{'.repeat(C.MAX_MESSAGE_BYTES + 1);
    const res = C.decode(raw);
    assert.equal(res.ok, false);
    assert.equal(res.error.code, 'oversize');
    // UTF-8 byte length, not character count, decides.
    assert.ok(C.utf8ByteLength('é'.repeat(5000)) > C.MAX_MESSAGE_BYTES);
    assert.equal(C.decode('é'.repeat(5000)).error.code, 'oversize');
});

test('a message just under the limit still parses', () => {
    const text = 'x'.repeat(1000);
    const raw = C.encode('chat', { m: text });
    assert.ok(C.utf8ByteLength(raw) < C.MAX_MESSAGE_BYTES);
    assert.equal(C.decode(raw).ok, true);
});

test('unknown payload keys are dropped by every validator', () => {
    for (const [type, payload] of Object.entries(SAMPLES)) {
        const dirty = Object.assign({}, payload, { __evil: 'x', injected: { a: 1 } });
        const res = C.decode(C.encode(type, dirty));
        assert.equal(res.ok, true, type);
        assert.equal(res.msg.d.__evil, undefined, `${type} kept __evil`);
        assert.equal(res.msg.d.injected, undefined, `${type} kept injected`);
        // and the clean payload is a fresh object, not the input reference
        assert.notEqual(res.msg.d, dirty);
    }
});

test('nested unknown keys are dropped too', () => {
    const res = C.decode(C.encode('bees', {
        bees: [{ id: 'b', type: 'basic', p: [1, 2, 3], hack: 'rm -rf' }],
        extra: 'nope'
    }));
    assert.equal(res.ok, true);
    assert.equal(res.msg.d.extra, undefined);
    assert.equal(res.msg.d.bees[0].hack, undefined);
});

test('positions are clamped to the world bounds', () => {
    const res = C.decode(C.encode('move', { p: [1e9, -1e9, 1e9], y: 0, m: 1, s: 1 }));
    assert.equal(res.ok, true);
    const [x, y, z] = res.msg.d.p;
    assert.ok(x <= C.WORLD.maxX && x >= C.WORLD.minX, 'x clamped');
    assert.ok(y <= C.WORLD.maxY && y >= C.WORLD.minY, 'y clamped');
    assert.ok(z <= C.WORLD.maxZ && z >= C.WORLD.minZ, 'z clamped');
    assert.deepEqual(plain(C.clampPosition([1e9, 1e9, 1e9])), [C.WORLD.maxX, C.WORLD.maxY, C.WORLD.maxZ]);
});

test('non-numeric / missing coordinates fall back safely', () => {
    const res = C.decode(C.encode('move', { p: ['NaN', null, undefined], y: 'x', m: 1, s: 'y' }));
    assert.equal(res.ok, true);
    assert.deepEqual(plain(res.msg.d.p), [0, 0, 0]);
    assert.equal(res.msg.d.y, 0);
});

test('angles are normalised into (-PI, PI]', () => {
    for (const [input, expected] of [[100, C.clampAngle(100)], [-Math.PI, Math.PI], [Math.PI, Math.PI], [3 * Math.PI, Math.PI]]) {
        const res = C.decode(C.encode('move', { p: [0, 0, 0], y: input, m: 0, s: 0 }));
        assert.equal(res.ok, true);
        assert.ok(res.msg.d.y > -Math.PI - 1e-9 && res.msg.d.y <= Math.PI + 1e-9, `y=${res.msg.d.y} out of range`);
        assert.ok(Math.abs(res.msg.d.y - expected) < 1e-9, `y=${input} -> ${res.msg.d.y}, expected ${expected}`);
    }
});

test('amounts and counts are clamped to sane maximums', () => {
    const res = C.decode(C.encode('convert', { amount: 1e300 }));
    assert.equal(res.ok, true);
    assert.equal(res.msg.d.amount, C.clamp(1e300, 0, 1e15));
    const neg = C.decode(C.encode('convert', { amount: -50 }));
    assert.equal(neg.msg.d.amount, 0);
    const qty = C.decode(C.encode('buy', { item: 'treat', qty: -3 }));
    assert.equal(qty.msg.d.qty, 1);
});

test('strings are truncated to a maximum length', () => {
    const res = C.decode(C.encode('chat', { m: 'a'.repeat(5000) }));
    assert.equal(res.ok, true);
    assert.ok(res.msg.d.m.length <= 200, `chat length ${res.msg.d.m.length}`);
    const long = C.decode(C.encode('hello', { name: 'n'.repeat(500) }));
    assert.ok(long.msg.d.name.length <= 24);
});

test('control characters are stripped and whitespace collapsed', () => {
    const dirty = '  he\x00l\x01l\x07o\t\t  th\x1bere\nthere  ';
    const res = C.decode(C.encode('chat', { m: dirty }));
    assert.equal(res.ok, true);
    assert.equal(res.msg.d.m, 'hello there there');
    assert.ok(!/[\u0000-\u001f\u007f]/.test(res.msg.d.m), 'no control characters survive');
    assert.equal(C.sanitizeString('a\u2028b\u2029c'), 'a b c');
});

test('profile adopted at join is clamped (join-time trust boundary)', () => {
    const res = C.decode(C.encode('hello', {
        name: 'A',
        profile: { honey: 1e30, capacity: -5, honeyPerPollen: 999, bees: [{ type: 'basic', level: 900 }] }
    }));
    assert.equal(res.ok, true);
    const p = res.msg.d.profile;
    assert.ok(p.honey <= 1e15);
    assert.ok(p.capacity >= 1);
    assert.ok(p.honeyPerPollen <= 2);
    assert.ok(p.bees[0].level <= 25);
    assert.equal(p.mpVersion, 2);   // optional, versioned, defaults in
});

test('byte length helper handles multi-byte characters', () => {
    assert.equal(C.utf8ByteLength('abc'), 3);
    assert.equal(C.utf8ByteLength('é'), 2);
    assert.equal(C.utf8ByteLength('🐝'), 4);
    assert.equal(C.utf8ByteLength(''), 0);
    assert.equal(C.utf8ByteLength(null), 0);
});

test('base64 code helpers round trip unicode', () => {
    const s = 'v=0\r\no=- 1 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n🐝 ünïcode';
    assert.equal(C.base64Decode(C.base64Encode(s)), s);
});

test('uid is unique and prefixed', () => {
    const seen = new Set();
    for (let i = 0; i < 2000; i++) {
        const id = C.uid('p');
        assert.ok(id.startsWith('p'));
        assert.ok(!seen.has(id), 'duplicate uid');
        seen.add(id);
    }
});
