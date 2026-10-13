import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadCore } from './_core.mjs';

const C = loadCore();

test('burst is allowed up to the channel rate, then denied', () => {
    const rl = C.createRateLimiter({ now: () => 0 });
    const rate = C.CHANNELS.move;              // 20/s
    for (let i = 0; i < rate; i++) {
        assert.equal(rl.take('p1', 'move', 0).ok, true, `burst take ${i} should pass`);
    }
    const denied = rl.take('p1', 'move', 0);
    assert.equal(denied.ok, false);
    assert.ok(denied.retryAfter > 0, 'a retry delay is reported');
});

test('the bucket refills over time', () => {
    const rl = C.createRateLimiter({ now: () => 0 });
    const rate = C.CHANNELS.chat;              // 0.66/s
    // one token of capacity for chat (0.66 * 1s)
    let ok = 0;
    while (rl.take('p1', 'chat', 0).ok) { ok++; if (ok > 10) break; }
    assert.ok(ok <= 1, `chat burst should be ~1 message, got ${ok}`);
    // after 2 seconds we have >1 token again
    assert.equal(rl.take('p1', 'chat', 2000).ok, true);
});

test('a full second of elapsed time refills the move channel', () => {
    const rl = C.createRateLimiter({ now: () => 0 });
    const rate = C.CHANNELS.move;
    for (let i = 0; i < rate; i++) rl.take('p1', 'move', 0);
    assert.equal(rl.take('p1', 'move', 0).ok, false);
    assert.equal(rl.take('p1', 'move', 1000).ok, true);
});

test('rate limiting is isolated per owner', () => {
    const rl = C.createRateLimiter({ now: () => 0 });
    const rate = C.CHANNELS.bees;
    for (let i = 0; i < rate; i++) rl.take('alice', 'bees', 0);
    assert.equal(rl.take('alice', 'bees', 0).ok, false, 'alice is exhausted');
    assert.equal(rl.take('bob', 'bees', 0).ok, true, 'bob is unaffected');
});

test('rate limiting is isolated per channel', () => {
    const rl = C.createRateLimiter({ now: () => 0 });
    for (let i = 0; i < C.CHANNELS.move; i++) rl.take('alice', 'move', 0);
    assert.equal(rl.take('alice', 'move', 0).ok, false);
    assert.equal(rl.take('alice', 'chat', 0).ok, true, 'chat is a different bucket');
    assert.equal(rl.take('alice', 'buy', 0).ok, true, 'buy is a different bucket');
});

test('unlisted types use the default channel rate', () => {
    const rl = C.createRateLimiter({ now: () => 0 });
    let ok = 0;
    while (rl.take('p1', 'some_new_type', 0).ok) { ok++; if (ok > 50) break; }
    assert.equal(ok, Math.floor(C.DEFAULT_CHANNEL_RATE), `expected ~${C.DEFAULT_CHANNEL_RATE}, got ${ok}`);
});

test('violations are counted per owner and can be reset', () => {
    const rl = C.createRateLimiter({ now: () => 0 });
    assert.equal(rl.violationCount('p1'), 0);
    for (let i = 0; i < 39; i++) rl.violate('p1');
    assert.equal(rl.violationCount('p1'), 39);
    assert.equal(rl.violationCount('p2'), 0, 'counts are per owner');
    assert.equal(rl.violate('p1'), C.VIOLATION_LIMIT, 'the 40th violation is the limit');
    rl.reset('p1');
    assert.equal(rl.violationCount('p1'), 0);
    assert.equal(rl.limit, 40);
});

test('buy and chat have deliberately low rates', () => {
    assert.equal(C.CHANNELS.buy, 0.7);
    assert.equal(C.CHANNELS.chat, 0.66);
    assert.equal(C.CHANNELS.move, 20);
    assert.equal(C.CHANNELS.bees, 8);
    assert.equal(C.CHANNELS.collect, 6);
    assert.equal(C.CHANNELS.convert, 3);
});

test('an injected clock drives refills deterministically', () => {
    let now = 0;
    const rl = C.createRateLimiter({ now: () => now });
    const rate = C.CHANNELS.damage;            // 10/s
    for (let i = 0; i < rate; i++) assert.equal(rl.take('p', 'damage').ok, true);
    assert.equal(rl.take('p', 'damage').ok, false);
    now += 300;                                 // 0.3s -> 3 tokens
    let refilled = 0;
    while (rl.take('p', 'damage').ok) refilled++;
    assert.equal(refilled, 3);
});
