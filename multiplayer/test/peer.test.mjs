/*
 * multiplayer/test/peer.test.mjs
 * Real RTCPeerConnection handshakes. In Node there is no browser WebRTC, so the
 * DEV-ONLY dependency `werift` is injected as the RTCPeerConnection implementation
 * (it is a devDependency; the game and the server never need it).
 * Codes are copied "by hand": createOffer() returns a code string, and it is
 * passed verbatim into acceptOffer()/acceptAnswer().
 */
import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { loadCore, plain } from './_core.mjs';

const require = createRequire(import.meta.url);
let werift = null;
try { werift = require('werift'); } catch { werift = null; }

const hasWebRTC = !!(werift && typeof werift.RTCPeerConnection === 'function');
const skip = hasWebRTC ? false : 'werift is not installed (dev-only dependency)';

/** A fresh copy of the core whose WebRTC global is werift's implementation. */
function coreWithRTC() {
    const C = loadCore({ RTCPeerConnection: werift.RTCPeerConnection });
    C.setEnv({ RTCPeerConnection: werift.RTCPeerConnection, console });
    return C;
}

// Real WebRTC leaves sockets open. Track every transport so a failing test can
// still tear them down, otherwise the test runner never exits.
const live = [];
function pt(C, opts) { const t = C.createPeerTransport(opts); live.push(t); return t; }

afterEach(async () => {
    live.forEach((t) => { try { t.disconnect(); } catch { /* ignore */ } });
    live.length = 0;
    await new Promise((r) => setTimeout(r, 120));
});

async function hostAndGuest(C, opts = {}) {
    const host = pt(C, { role: 'host', maxPlayers: opts.maxPlayers || 6, id: 'host' });
    const guest = pt(C, { role: 'guest', id: 'guest1' });
    host.start();
    guest.start();
    const offer = await host.createOffer(0);
    assert.equal(offer.ok, true, 'offer created: ' + (offer.error && offer.error.message));
    assert.equal(typeof offer.code, 'string');
    const answer = await guest.acceptOffer(offer.code);
    assert.equal(answer.ok, true, 'answer created: ' + (answer.error && answer.error.message));
    const applied = await host.acceptAnswer(0, answer.code);
    assert.equal(applied.ok, true, 'answer applied: ' + (applied.error && applied.error.message));
    return { host, guest };
}

function waitOpen(transport, timeoutMs = 8000) {
    return new Promise((resolve, reject) => {
        const started = Date.now();
        const tick = () => {
            if (transport.getState().players.length > 0) return resolve(true);
            if (Date.now() - started > timeoutMs) return reject(new Error('datachannel never opened'));
            setTimeout(tick, 25);
        };
        tick();
    });
}

test('a real offer/answer handshake over RTCPeerConnection', { skip }, async () => {
    const C = coreWithRTC();
    const { host, guest } = await hostAndGuest(C);
    await Promise.all([waitOpen(host), waitOpen(guest)]);
    assert.ok(host.getState().players.length >= 1, 'the host sees the guest channel');
    host.disconnect();
    guest.disconnect();
});

/*
 * The real peer GUEST flow: multiplayer/mp-client.js starts the session (which
 * speaks `hello` straight away) BEFORE any code has been exchanged, so there is
 * no DataChannel when the first message is handed to the transport. This proves
 * the queued `hello` still reaches the host, i.e. that a peer guest actually
 * joins — the bug the outbox fixes.
 */
test('a guest that starts its session before the handshake still joins (queued hello)', { skip }, async () => {
    const C = coreWithRTC();
    const host = pt(C, { role: 'host', maxPlayers: 4, id: 'host' });
    const guest = pt(C, { role: 'guest', id: 'guestA' });

    const hostSession = C.createSession({ transport: host, role: 'authority', id: 'host', name: 'Host' });
    const guestSession = C.createSession({ transport: guest, role: 'client', id: 'guestA', name: 'Guest A' });
    assert.equal(hostSession.start().ok, true);

    // Client order, exactly as the UI does it: start first, negotiate after.
    const offer = await host.createOffer(0);
    assert.equal(offer.ok, true, 'offer created');
    assert.equal(guestSession.start().ok, true, 'the guest session starts with no channel at all');
    assert.ok(guest.queued() >= 1, 'the hello is queued until the host answers');

    const answer = await guest.acceptOffer(offer.code);
    assert.equal(answer.ok, true, 'answer created: ' + (answer.error && answer.error.message));
    const applied = await host.acceptAnswer(0, answer.code);
    assert.equal(applied.ok, true, 'answer applied: ' + (applied.error && applied.error.message));

    // The host must end up with the guest on its roster, which can only happen
    // if the queued `hello` was delivered when the channel opened.
    await waitOpen(host);
    await waitUntil(() => hostSession.players().some((p) => p.id === 'guestA'), 8000);
    assert.equal(guest.queued(), 0, 'the queue drained');
    const roster = plain(hostSession.players()).map((p) => p.id).sort();
    assert.deepEqual(roster, ['guestA', 'host'], 'the guest really joined the room');

    // And the guest was welcomed by the authority.
    await waitUntil(() => guestSession.players().some((p) => p.id === 'guestA'), 8000);

    hostSession.disconnect();
    guestSession.disconnect();
});

/** Poll until `fn()` is truthy (used for real WebRTC timelines). */
function waitUntil(fn, timeoutMs = 8000) {
    return new Promise((resolve, reject) => {
        const started = Date.now();
        const tick = () => {
            let v = false;
            try { v = fn(); } catch { v = false; }
            if (v) return resolve(v);
            if (Date.now() - started > timeoutMs) return reject(new Error('waitUntil timed out'));
            setTimeout(tick, 25);
        };
        tick();
    });
}

test('garbage codes are refused with typed errors, and never leave a half-open connection', { skip }, async () => {
    const C = coreWithRTC();
    const host = pt(C, { role: 'host', maxPlayers: 4, id: 'host' });
    const guest = pt(C, { role: 'guest', id: 'guest1' });
    host.start();
    guest.start();

    for (const bad of ['', '   ', 'not-base64!!!', 'BSSR1' + C.base64Encode('{not json'), C.base64Encode(JSON.stringify({ t: 'nope', s: 'x' })), C.base64Encode(JSON.stringify({ t: 'offer' }))]) {
        const r = await guest.acceptOffer(bad);
        assert.equal(r.ok, false, `garbage accepted: ${bad}`);
        assert.equal(r.error.name, 'MPError');
        assert.equal(r.error.code, 'garbage_code');
    }
    // After failed attempts the guest is still idle and can still negotiate.
    assert.equal(guest.getState().state, 'idle');
});

test('an offer handed to setRemoteDescription as an answer is refused', { skip }, async () => {
    const C = coreWithRTC();
    const host = pt(C, { role: 'host', maxPlayers: 4, id: 'host' });
    host.start();
    await host.createOffer(0);                    // slot 0 now expects an answer
    const other = pt(C, { role: 'host', maxPlayers: 4, id: 'host2' });
    other.start();
    const otherOffer = await other.createOffer(0);
    const r = await host.acceptAnswer(0, otherOffer.code);
    assert.equal(r.ok, false);
    assert.equal(r.error.code, 'wrong_code_type');
    host.disconnect();
    other.disconnect();
});

test('invalid states are refused instead of throwing', { skip }, async () => {
    const C = coreWithRTC();
    const host = pt(C, { role: 'host', maxPlayers: 3, id: 'host' });
    const guest = pt(C, { role: 'guest', id: 'g' });
    host.start();
    guest.start();

    // answer with no offer outstanding
    const noOffer = await host.acceptAnswer(0, 'BSSR1' + C.base64Encode(JSON.stringify({ t: 'answer', s: 'v=0' })));
    assert.equal(noOffer.ok, false);
    assert.equal(noOffer.error.code, 'no_offer');

    // bad slot index
    const badSlot = await host.createOffer(99);
    assert.equal(badSlot.ok, false);
    assert.equal(badSlot.error.code, 'bad_slot');

    // a guest cannot create offers, a host cannot accept offers
    const guestOffer = await guest.createOffer(0);
    assert.equal(guestOffer.ok, false);
    assert.equal(guestOffer.error.code, 'not_host');
    const hostOffer = await host.acceptOffer('x');
    assert.equal(hostOffer.ok, false);
    assert.equal(hostOffer.error.code, 'is_host');

    // a second offer on a busy slot while negotiating
    await host.createOffer(0);
    const second = await host.createOffer(0);
    assert.equal(second.ok, false);
    assert.equal(second.error.code, 'already_negotiating');

    host.disconnect();
    guest.disconnect();
});

test('a full session refuses another slot', { skip }, async () => {
    const C = coreWithRTC();
    const host = pt(C, { role: 'host', maxPlayers: 2, id: 'host' });
    host.start();
    // maxPlayers 2 => exactly one guest slot
    assert.equal(host.slotStatus().length, 1);
    const bad = await host.createOffer(1);
    assert.equal(bad.ok, false);
    assert.equal(bad.error.code, 'bad_slot');
    host.disconnect();
});

test('THREE peers: host + two guests all see each other (host relays guest-to-guest)', { skip }, async () => {
    const C = coreWithRTC();

    // --- host with two slots, running the authority -----------------------
    const hostTransport = pt(C, { role: 'host', maxPlayers: 3, id: 'HOST' });
    hostTransport.start();
    const hostSession = C.createSession({
        transport: hostTransport, role: 'authority', id: 'HOST', name: 'Host', maxPlayers: 3
    });
    hostSession.start();

    // --- two guests -------------------------------------------------------
    const g1Transport = pt(C, { role: 'guest', id: 'GUEST1' });
    const g2Transport = pt(C, { role: 'guest', id: 'GUEST2' });
    g1Transport.start();
    g2Transport.start();
    const g1 = C.createSession({ transport: g1Transport, role: 'client', id: 'GUEST1', name: 'G1' });
    const g2 = C.createSession({ transport: g2Transport, role: 'client', id: 'GUEST2', name: 'G2' });

    // hand-copied codes for slot 0
    const offer0 = await hostTransport.createOffer(0);
    assert.equal(offer0.ok, true, offer0.error && offer0.error.message);
    const g1Answer = await g1Transport.acceptOffer(offer0.code);
    assert.equal(g1Answer.ok, true, g1Answer.error && g1Answer.error.message);
    await hostTransport.acceptAnswer(0, g1Answer.code);

    // hand-copied codes for slot 1
    const offer1 = await hostTransport.createOffer(1);
    assert.equal(offer1.ok, true, offer1.error && offer1.error.message);
    const g2Answer = await g2Transport.acceptOffer(offer1.code);
    assert.equal(g2Answer.ok, true, g2Answer.error && g2Answer.error.message);
    await hostTransport.acceptAnswer(1, g2Answer.code);

    // wait for both channels to come up
    await Promise.all([
        waitOpen(hostTransport),
        waitOpen(g1Transport),
        waitOpen(g2Transport)
    ]);
    // let the host session pin the connections via hello
    g1.start();
    g2.start();

    const diag = () => 'hostSlots=' + JSON.stringify(hostTransport.slotStatus()) +
        ' g1=' + JSON.stringify(g1Transport.getState().players) +
        ' g2=' + JSON.stringify(g2Transport.getState().players) +
        ' roster=' + JSON.stringify(hostSession.players().map((p) => p.id));
    const waitFor = (fn, ms = 8000, label = '') => new Promise((resolve, reject) => {
        const t0 = Date.now();
        const tick = () => {
            if (fn()) return resolve(true);
            if (Date.now() - t0 > ms) return reject(new Error('timeout ' + label + ' :: ' + diag()));
            setTimeout(tick, 25);
        };
        tick();
    });

    await waitFor(() => hostSession.authority.playerCount() === 3, 8000, 'playerCount');

    // everyone moves
    hostSession.sendMove({ p: [0, 0, 0], y: 0, m: 1, s: 2 });
    g1.sendMove({ p: [10, 0, 0], y: 0, m: 1, s: 2 });
    g2.sendMove({ p: [20, 0, 0], y: 0, m: 1, s: 2 });

    // Each peer should end up seeing the OTHER two.
    await waitFor(() => Object.keys(hostSession.remotePlayers()).length === 2, 8000, 'host sees 2');
    await waitFor(() => Object.keys(g1.remotePlayers()).length === 2, 8000, 'g1 sees 2');
    await waitFor(() => Object.keys(g2.remotePlayers()).length === 2, 8000, 'g2 sees 2');

    const hostSees = Object.keys(hostSession.remotePlayers()).sort();
    assert.deepEqual(hostSees, ['GUEST1', 'GUEST2'], 'host sees both guests');

    const g1Sees = Object.keys(g1.remotePlayers()).sort();
    assert.deepEqual(g1Sees, ['GUEST2', 'HOST'], 'guest 1 sees the other guest AND the host (relayed)');

    const g2Sees = Object.keys(g2.remotePlayers()).sort();
    assert.deepEqual(g2Sees, ['GUEST1', 'HOST'], 'guest 2 sees the other guest AND the host (relayed)');

    // and guest 1 really received guest 2's position (guest-to-guest relay)
    assert.ok(Math.abs(g1.remotePlayers().GUEST2.p[0] - 20) < 1e-6, 'guest-to-guest movement relayed');

    // chat from guest 1 reaches guest 2 through the host
    const g2Chat = [];
    g2.on('chat', (m) => g2Chat.push(m));
    g1.sendChat('hi from guest 1');
    await waitFor(() => g2Chat.length === 1, 8000);
    assert.equal(g2Chat[0].m, 'hi from guest 1');
    assert.equal(g2Chat[0].from, 'GUEST1', 'the relayed origin is the real sender');

    hostSession.disconnect();
    g1.disconnect();
    g2.disconnect();
});

test('peer-to-peer reconnect demands a fresh code exchange', { skip }, async () => {
    const C = coreWithRTC();
    const host = pt(C, { role: 'host', maxPlayers: 3, id: 'host' });
    host.start();
    const r = host.reconnect();
    assert.equal(r.ok, false);
    assert.equal(r.error.code, 'needs_new_codes');
    host.disconnect();
});

test('a slot is reusable after a guest disconnects', { skip }, async () => {
    const C = coreWithRTC();
    const { host, guest } = await hostAndGuest(C);
    await Promise.all([waitOpen(host), waitOpen(guest)]);
    const statusBefore = host.slotStatus()[0].status;
    assert.equal(statusBefore, 'connected');
    guest.disconnect();
    await new Promise((r) => setTimeout(r, 300));
    const again = await host.createOffer(0);
    assert.equal(again.ok, true, 'the slot accepts a new offer: ' + (again.error && again.error.message));
    host.disconnect();
});

test('without WebRTC the transport fails with a typed error instead of throwing', () => {
    const C = loadCore({});                       // no RTCPeerConnection in the sandbox
    C.setEnv({});
    const t = pt(C, { role: 'guest' });
    const started = t.start();
    assert.equal(started.ok, false);
    assert.equal(started.error.code, 'no_webrtc');
    return t.acceptOffer('x').then((r) => {
        assert.equal(r.ok, false);
        assert.equal(r.error.code, 'no_webrtc');
    });
});
