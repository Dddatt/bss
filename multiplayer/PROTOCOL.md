# Bee Swarm Simulator — optional multiplayer wire protocol (v2)

This is the protocol **as implemented** in `multiplayer/mp-core.js`. Every rule
below is enforced in code, not just described here. The browser host and the
dedicated server (`multiplayer/server.mjs`) both load that same file, so there is
exactly one implementation of the rules.

## 1. Envelope

Every message is a single JSON text frame:

```json
{ "v": 2, "t": "move", "q": 17, "f": "p1a2b3", "d": { "p": [1,2,3], "y": 0.5, "m": 1, "s": 4.2 } }
```

| field | meaning |
|-------|---------|
| `v`   | protocol version. Must be exactly `2`, anything else is rejected. |
| `t`   | message type (see the table below). |
| `q`   | sender's monotonic sequence number. The authority rejects stale/duplicate values per player. |
| `f`   | **relayed origin**: the id of the player a relayed message originally came from. Stamped by the authority, never believed from a direct peer. Optional. |
| `d`   | payload. Rebuilt and cleaned by the validator for that type. |

## 2. Message types

| type | direction | payload (after validation) |
|------|-----------|----------------------------|
| `hello` | client → authority | `{ id, name, profile? }` |
| `welcome` | authority → client | `{ id, room, seed, maxPlayers, players[], you{hiveIndex,hivePos,honey,pollen,capacity,bees} }` |
| `roster` | authority → all | `{ players[] }` |
| `ping` / `pong` | either | `{ t }` |
| `bye` | either | `{ reason }` |
| `error` | authority → client | `{ code, message }` |
| `move` | client → others | `{ p:[x,y,z], y:yaw, m:0\|1, s:speed, st? }` |
| `bees` | client → others | `{ bees:[{ id, type, p:[x,y,z], tgt?, st? }] }` |
| `world` | authority → all | `{ pollen?, tokens?, enemies? }` |
| `collect` | client → authority | `{ kind, id, field, amount }` |
| `collectResult` | authority → all | `{ ok, id, amount, by, reason? }` |
| `damage` | client → others | `{ target, type?, amount, p? }` |
| `convert` | client → authority | `{ amount }` |
| `buy` | client → authority | `{ item, qty?, hiveIndex? }` |
| `actionResult` | authority → client | `{ ok, action, item?, reason?, cost?, honey?, pollen?, gained?, bees?, slots? }` |
| `chat` | client → authority | `{ m }` |
| `chatMsg` | authority → all | `{ from, name, m, ts }` |
| `quest` | client → others | `{ id, state, progress }` |
| `emote` | client → others | `{ e }` |

## 3. Validation pipeline

`decode(raw)` runs, **in this order**:

1. **Size gate before parsing.** More than `8 KiB` (8192 bytes of UTF-8, not
   characters) is rejected with `oversize` — `JSON.parse` never runs on it.
2. `JSON.parse` in a `try/catch` → `malformed` on failure.
3. `v === 2` → `bad_version`.
4. `t` must be one of the known types → `unknown_type`.
5. `q`, when present, must be a finite non-negative number → `bad_seq`.
6. The per-type **validator rebuilds a brand new payload object** and
   **drops unknown keys**, then returns it. A validator that cannot produce a
   clean object yields `bad_payload`.

### Clamping and sanitising (applied by the validators)

* positions → clamped into `WORLD` (`x,z ∈ [-2000,2000]`, `y ∈ [-200,800]`); a
  non-numeric coordinate triple falls back to the origin rather than a corner;
* angles → normalised into `(-π, π]`;
* amounts → `[0, 1e15]`; counts/quanta → integers inside their own range
  (e.g. bee level `1..25`, player count `2..12`);
* strings → control characters (`\u0000-\u001f`, `\u007f`, `\u2028`, `\u2029`)
  stripped, whitespace collapsed, trimmed, truncated (chat 200, names 24,
  generic 120);
* `id`-like strings → sanitised and capped at 64 characters;
* a join-time `profile` → clamped to legal limits (honey/pollen/capacity,
  `honeyPerPollen ∈ [0.01, 2]`, at most 50 bees, bee levels `1..25`).

## 4. Rate limiting

Token bucket **per player, per channel**. Capacity is one second of tokens, but
never below 1 (otherwise a slow channel could never send a single message).
`move` and friends refill continuously; `now` is injectable so the tests are
deterministic.

| channel | messages / second |
|---------|-------------------|
| `move` | 20 |
| `bees` | 8 |
| `world` | 8 |
| `collect` | 6 |
| `damage` | 10 |
| `convert` | 3 |
| `buy` | 0.7 |
| `chat` | 0.66 |
| anything else | 4 |

A message over the limit is **dropped silently** (no reply) and counts as a
violation. After **40** violations the offender is removed from the room and its
connection is closed.

Oversized or malformed messages also count as violations and are dropped
*without* killing the socket, so a broken client cannot take down the room.

## 5. Identity

* A connection is **pinned to the id it announced in `hello`** (the peer host
  re-keys its slot; the server maps the socket to that id). It cannot re-declare
  who it is afterwards.
* The authority always derives a message's sender from the **live connection**,
  never from the payload. A payload's own `f` is ignored.
* `f` is only honoured when the sender of the bytes **is the authority** — a
  WebSocket client or a WebRTC guest, which only ever hear from the authority.
  A host only ever hears *directly* from guests, so it ignores `f` entirely.
  This is what stops a peer from impersonating another player.
* Duplicate id → `already_connected` and the connection is closed.
* Room full (`maxPlayers`, one hive per player, 2–12) → `server_full` and the
  connection is closed.

## 6. Authority rules

* **Hive plots are unique** and are freed when a player leaves (or times out), so
  the next joiner reuses the freed plot.
* **Rewards are claim-once.** `collect` on a token flips `claimedBy` atomically:
  of two racing players exactly one gets it, the other receives
  `{ ok: false, reason: "gone" }`.
* **Pollen respects capacity.** The bag fills to `capacity`; the remainder is
  reported as `overflow` and is lost.
* **Distance is checked.** A token further than `TOKEN_PICKUP_RADIUS` (12 m) is
  refused (`too_far`).
* **Purchases are priced by the authority.** The client only ever names an item;
  a price in the payload does not exist. Unknown item → `unknown_item`; not
  enough honey → `not_enough_honey`.
* **Hive slots** are a purchase: 25 free, then 25 more at
  `3,000,000 × 1.35^(k-1)` for the k-th extra slot (the last one is about
  `4.03 × 10⁹` honey).
  The single price table lives in `mp-core.js` (`hiveSlotCost`,
  `nextHiveSlotCost`, `ITEM_PRICES`).
* **Pollen converts to honey only at your own hive** (within
  `HIVE_INTERACT_RADIUS`, 8 m of *your* plot), at your own `honeyPerPollen`.
* **Enemy hp** is owned by the authority; a target that reaches 0 is removed.
* Stale/duplicate `q` values are rejected per player.

## 7. Transports

All three expose the same interface:

```js
transport.start()
transport.send(t, d)            transport.sendTo(id, t, d)
transport.broadcast(t, d)       transport.getState()
transport.disconnect()          transport.reconnect()      transport.reset()
transport.on('message' | 'state' | 'join' | 'leave' | 'violation', fn)
```

| transport | factory | notes |
|-----------|---------|-------|
| loopback | `createLocalTransport({ id, hub })` | in-process, used by tests; `sendRaw` drives the validator directly |
| peer (WebRTC) | `createPeerTransport({ role:'host'\|'guest', maxPlayers, useStun })` | host = star centre + authority; one ordered `RTCDataChannel` per guest |
| server (WebSocket) | `createServerTransport({ url })` | the server process is the authority |

### Peer-to-peer codes

`createOffer(slot)` returns `'BSSR1' + base64(JSON.stringify({ t: 'offer', s: sdp }))`.
`acceptOffer(code)` on the guest returns the matching `answer` code, and
`acceptAnswer(slot, code)` applies it on the host. Codes are pure text and can be
sent over Discord/chat/email — there is no signalling server.

Typed refusals (never exceptions, never half-open connections):

| situation | code |
|-----------|------|
| garbage / non-base64 / wrong JSON / missing sdp | `garbage_code` |
| an offer code handed to `acceptAnswer` (or vice versa) | `wrong_code_type` |
| `acceptAnswer` for a slot with no offer | `no_offer` |
| a second offer while one is outstanding | `already_negotiating` |
| slot index out of range / no such slot | `bad_slot` |
| guest asked to create an offer, host asked to accept one | `not_host` / `is_host` |
| WebRTC unavailable in the environment | `no_webrtc` |
| `createDataChannel` missing/failed (partial WebRTC) | `webrtc_failed` |
| `reconnect()` | `needs_new_codes` (peer-to-peer cannot resume without new codes) |

### Opening order (why a client can speak immediately)

A session starts speaking the instant it is started, and its first message is
`hello`. For a browser WebSocket the socket is still `CONNECTING` at that
moment, and a peer guest has no `DataChannel` until the host's answer code has
been applied. Both transports therefore keep a bounded **outbox**:

* `server` — a frame sent while the socket is not open is queued and flushed in
  order on `open`; a frame sent before `start()` is still a `not_connected`
  error; the queue is dropped on close/disconnect, and if it ever fills (64
  frames) the **newest** frame is refused (`outbox_full`) so `hello` — the
  oldest — is never the one lost.
* `peer` (guest only) — the queue drains when the channel opens. The host needs
  no queue: it only speaks to slots that are already open, and a new guest gets
  a fresh `welcome` in response to its own `hello`.

Mirroring this, the host installs its receive path on a `DataChannel` **as soon
as the channel object exists**, not on `open`: the guest flushes `hello` the
moment *its* channel opens, which can precede the host's own `open` event, and a
data-channel message that arrives with no listener attached is lost. Messages
that land in that window are buffered and replayed once the slot is set up.

### Star relay (3+ players)

The host relays a guest's `move`, `bees`, `world`, `damage`, `emote` and `quest`
to the **other** guests, stamping `f` with the original sender. Messages the
authority *converts* (`chat` → `chatMsg`, `collect` → `collectResult`,
`buy`/`convert` → `actionResult`) are **not** relayed raw, so nothing is applied
twice.

### WebSocket framing (server)

Hand-rolled RFC 6455: text frames only (binary → close 1003), ping/pong, close,
client frames must be masked, single frames up to 64 KiB (`MAX_FRAME_BYTES`) with
continuation frames reassembled. A dead connection is swept after 15 s and its
hive released.

## 8. Synchronisation stages

* **Stage A — movement (implemented, tested).** The local transform is sent at
  20 Hz (`MOVE_SEND_HZ`). Remote players are interpolated with a 100 ms render
  buffer (`DEFAULT_RENDER_BUFFER_MS`); a jump that is both larger than
  `TELEPORT_SNAP_DISTANCE` (4 m) **and** implies a speed above `MAX_INTERP_SPEED`
  (60 m/s) is treated as a teleport and snapped to. Local input is never blocked
  and remote rendering never writes to the local player's body.
* **Stage B — bees (implemented, basic).** Bee lists are sent at 8 Hz
  (`BEES_SEND_HZ`), capped at 50 per player, attributed per owner, and stored per
  owner in the session. Remote bee *rendering* is not wired into the game's bee
  pipeline yet.
* **Stage C — shared world (implemented on the authority side).** Field pollen,
  tokens, enemies, honey and hive slots are authority-owned and validated; the
  client names items and never prices. The game's own flower/token rendering is
  not yet driven by these updates, so the visible shared world is limited to
  what the client already synchronises.
* **Stage D — extras (implemented).** Roster, chat, emotes and quest relays, plus
  the always-visible mode badge.

## 9. One clock

`Date.now()` is the single clock for the authority, the transports and the
session (`MPCore.clock`). Tests inject their own `now`.
