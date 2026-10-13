/*
 * multiplayer/test/outbox.test.mjs
 * ---------------------------------------------------------------------------
 * The client's FIRST message is `hello`, and it is handed to the transport the
 * instant the session starts. In a real browser the pipe is not open at that
 * moment:
 *
 *   - server mode: `new WebSocket(url)` returns with readyState === CONNECTING;
 *   - peer-to-peer guest: there is no DataChannel at all until the host's
 *     answer code has been applied.
 *
 * These tests use a browser-faithful fake (readyState 0, `onopen` on a later
 * turn) and prove that `hello` is queued and delivered, in order, once the pipe
 * opens — which is exactly what the earlier fakes could not show, because they
 * were always "open" already.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadCore } from './_core.mjs';

const C = loadCore();

/** A fake WebSocket that behaves like a browser one: CONNECTING until open(). */
function FakeWebSocket(url) {
    const sock = this;
    this.url = url;
    this.readyState = 0;                 // CONNECTING
    this.OPEN = 1;
    this.sent = [];
    this.closeCalls = 0;
    this.onopen = null;
    this.onmessage = null;
    this.onclose = null;
    this.onerror = null;
    FakeWebSocket.instances.push(this);

    this.send = (raw) => {
        if (this.readyState !== 1) throw new Error('InvalidStateError: still connecting');
        this.sent.push(raw);
    };
    this.close = () => {
        this.closeCalls++;
        this.readyState = 3;
        if (typeof sock.onclose === 'function') sock.onclose({});
    };
    /** Simulate the browser finishing the handshake. */
    this.open = () => {
        this.readyState = 1;
        if (typeof sock.onopen === 'function') sock.onopen({});
    };
    /** Simulate the server pushing a frame. */
    this.deliver = (obj) => {
        if (typeof sock.onmessage === 'function') sock.onmessage({ data: JSON.stringify(obj) });
    };
}
FakeWebSocket.instances = [];

function serverTransport(extra) {
    return C.createServerTransport(Object.assign({
        url: 'ws://localhost:8787/ws',
        id: 'p1',
        WebSocket: FakeWebSocket
    }, extra || {}));
}

test('a connecting WebSocket queues the hello instead of losing it', () => {
    FakeWebSocket.instances = [];
    const t = serverTransport();
    t.start();
    const sock = FakeWebSocket.instances[0];
    assert.equal(sock.readyState, 0, 'the socket starts CONNECTING, like a browser');

    // A session sends `hello` immediately after start().
    const res = t.send('hello', { id: 'p1', name: 'Alice' });
    assert.equal(res.ok, true, 'a frame sent while connecting must not fail');
    assert.equal(res.queued, 1);
    assert.deepEqual(sock.sent, [], 'nothing hits the wire before the handshake');
    assert.equal(t.queued(), 1);

    sock.open();                          // handshake completes
    assert.equal(sock.sent.length, 1, 'the queued frame is flushed on open');
    const frame = JSON.parse(sock.sent[0]);
    assert.equal(frame.v, 2);
    assert.equal(frame.t, 'hello');
    assert.equal(frame.d.name, 'Alice');
    assert.equal(t.queued(), 0);
});

test('queued frames keep their order and their sequence numbers', () => {
    FakeWebSocket.instances = [];
    const t = serverTransport({ id: 'p2' });
    t.start();
    const sock = FakeWebSocket.instances[0];

    t.send('hello', { id: 'p2', name: 'Bob' });
    t.send('move', { p: [1, 1, 1], y: 0, m: 0, s: 0 });
    t.send('chat', { m: 'still connecting' });
    assert.equal(t.queued(), 3);

    sock.open();
    const frames = sock.sent.map((s) => JSON.parse(s));
    assert.deepEqual(frames.map((f) => f.t), ['hello', 'move', 'chat']);
    assert.deepEqual(frames.map((f) => f.q), [1, 2, 3], 'sequence numbers stay monotonic');
});

test('the outbox is bounded: the newest frame is refused, hello is kept', () => {
    FakeWebSocket.instances = [];
    const t = serverTransport({ id: 'p3' });
    t.start();
    const sock = FakeWebSocket.instances[0];

    t.send('hello', { id: 'p3', name: 'Carol' });
    let last = null;
    for (let i = 0; i < 200; i++) last = t.send('move', { p: [i % 10, 0, 0], y: 0, m: 1, s: 1 });
    assert.equal(last.ok, false);
    assert.equal(last.error.code, 'outbox_full');

    sock.open();
    const frames = sock.sent.map((s) => JSON.parse(s));
    assert.equal(frames[0].t, 'hello', 'the oldest frame — hello — survives');
    assert.ok(frames.length <= 65, `bounded queue, got ${frames.length}`);
});

test('a socket that closes while connecting drops its queue', () => {
    FakeWebSocket.instances = [];
    const t = serverTransport({ id: 'p4' });
    t.start();
    const sock = FakeWebSocket.instances[0];
    t.send('hello', { id: 'p4', name: 'Dee' });
    assert.equal(t.queued(), 1);
    sock.close();                          // never opened
    assert.equal(t.queued(), 0, 'a dead socket cannot deliver queued frames');
    assert.deepEqual(sock.sent, []);
});

test('disconnect clears the queue and reset rewinds the sequence', () => {
    FakeWebSocket.instances = [];
    const t = serverTransport({ id: 'p5' });
    t.start();
    const sock = FakeWebSocket.instances[0];
    t.send('hello', { id: 'p5', name: 'Eve' });
    t.disconnect();
    assert.equal(t.queued(), 0);

    // A fresh start on a connected socket sends immediately, no queue.
    FakeWebSocket.instances = [];
    t.start();
    const sock2 = FakeWebSocket.instances[0];
    sock2.open();
    const r = t.send('hello', { id: 'p5', name: 'Eve' });
    assert.equal(r.ok, true);
    assert.equal(r.queued, undefined, 'not queued: the socket is open');
    assert.equal(JSON.parse(sock2.sent[0]).q, 2, 'sequence keeps counting across a reconnect');

    t.reset();
    assert.equal(t.queued(), 0);
});

test('sending before start() is still an error (nothing can carry it)', () => {
    const t = serverTransport({ id: 'p6' });
    const r = t.send('hello', { id: 'p6', name: 'Fay' });
    assert.equal(r.ok, false);
    assert.equal(r.error.code, 'not_connected');
});

/* ------------------------------------------------------------------------
 * Peer-to-peer guest: no DataChannel exists until the host's answer is used.
 * ---------------------------------------------------------------------- */

/**
 * Minimal RTCPeerConnection good enough for a guest-side negotiation.
 *
 * The guest never creates a DataChannel of its own — the HOST does, and the
 * guest learns about it through the `datachannel` event — so the test builds a
 * channel by hand and delivers it the same way, then opens it.
 */
function fakeRTC() {
    const pcs = [];
    class FakeDC {
        constructor() { this.readyState = 'connecting'; this.sent = []; this.listeners = {}; }
        addEventListener(n, fn) { (this.listeners[n] = this.listeners[n] || []).push(fn); }
        send(raw) { if (this.readyState !== 'open') throw new Error('channel not open'); this.sent.push(raw); }
        close() { this.readyState = 'closed'; }
        fire(n, e) { (this.listeners[n] || []).forEach((fn) => fn(e || {})); }
        open() { this.readyState = 'open'; this.fire('open'); }
    }
    class FakePC {
        constructor() { this.localDescription = null; this.remoteDescription = null; this.iceGatheringState = 'complete'; this.listeners = {}; pcs.push(this); }
        addEventListener(n, fn) { (this.listeners[n] = this.listeners[n] || []).push(fn); }
        createDataChannel() { return new FakeDC(); }
        createOffer() { return Promise.resolve({ type: 'offer', sdp: 'offer-sdp' }); }
        createAnswer() { return Promise.resolve({ type: 'answer', sdp: 'answer-sdp' }); }
        setLocalDescription(d) { this.localDescription = d; return Promise.resolve(); }
        setRemoteDescription(d) { this.remoteDescription = d; return Promise.resolve(); }
        close() {}
    }
    return {
        RTCPeerConnection: FakePC,
        newChannel: () => new FakeDC(),
        /** Hand the guest the host's channel, exactly like a real browser. */
        announceChannel: (dc) => { pcs.forEach((pc) => (pc.listeners.datachannel || []).forEach((fn) => fn({ channel: dc }))); }
    };
}

test('a peer guest queues its hello until the host\'s channel opens', async () => {
    const RTC = fakeRTC();
    const t = C.createPeerTransport({ role: 'guest', id: 'g1', RTCPeerConnection: RTC.RTCPeerConnection });
    assert.equal(t.start().ok, true);

    // The session speaks before any code has been exchanged.
    const r = t.send('hello', { id: 'g1', name: 'Guest' });
    assert.equal(r.ok, true);
    assert.equal(r.queued, 1);
    assert.equal(t.queued(), 1);

    // Guest applies the host's offer code.
    const offer = 'BSSR1' + Buffer.from(JSON.stringify({ t: 'offer', s: 'host-sdp' })).toString('base64');
    const ans = await t.acceptOffer(offer);
    assert.equal(ans.ok, true, 'the offer was accepted');

    // The host's data channel arrives, then opens.
    const dc = RTC.newChannel();
    RTC.announceChannel(dc);
    assert.equal(t.queued(), 1, 'the channel exists but is not open yet');
    dc.open();
    assert.equal(t.queued(), 0, 'hello is flushed when the channel opens');
    const frame = JSON.parse(dc.sent[0]);
    assert.equal(frame.t, 'hello');
    assert.equal(frame.d.id, 'g1');

    // Once open, a move goes straight out.
    const m = t.send('move', { p: [1, 2, 3], y: 0, m: 1, s: 5 });
    assert.equal(m.ok, true);
    assert.equal(JSON.parse(dc.sent[1]).t, 'move');
});

test('a peer guest that disconnects drops its queued frames', () => {
    const RTC = fakeRTC();
    const t = C.createPeerTransport({ role: 'guest', id: 'g2', RTCPeerConnection: RTC.RTCPeerConnection });
    t.start();
    t.send('hello', { id: 'g2', name: 'G2' });
    assert.equal(t.queued(), 1);
    t.disconnect();
    assert.equal(t.queued(), 0);
});
