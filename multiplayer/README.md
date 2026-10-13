# Optional multiplayer for Bee Swarm Simulator (Ripoff Edition)

Multiplayer is **opt-in and additive**. With it unused, the game boots, plays,
saves and loads exactly as before, from `file://`, with no server, no account,
no hosted service and no new dependency.

Everything lives in this folder plus three small, commented hooks:

| change | where | size |
|--------|-------|------|
| two `<script>` tags after `index.js` | `index.html` | 4 lines |
| the multiplayer menu markup | `index.html` | static block |
| extra globals in the existing `window.exposeCheats()` | `index.js` | 9 lines |
| one per-frame render call | `index.js` | 5 lines |

Nothing else in the game was touched.

---

## Which machine runs what

| mode | what runs where |
|------|-----------------|
| **Single-player** (default) | nothing but your browser. `file://` works. |
| **Peer-to-peer (WebRTC)** | browsers only. No server at all. The **host's** browser is the authority. |
| **Server-based (WebSocket)** | one machine runs `node multiplayer/server.mjs`; everyone else just opens the game. |

---

## 1. Single-player

Open `index.html` from disk (double-click it, or `file:///…/index.html`) and press
**Play**. That is the original game.

The mode badge in the top-left corner reads `Mode: Single-player`. Nothing in
`multiplayer/` opens a socket until you pick a multiplayer mode.

---

## 2. Peer-to-peer (WebRTC, no server)

**Start here only if you want a quick 2–6 player game and your network allows it.**

1. Both players open the game and press **Multiplayer → Peer-to-peer (WebRTC)**.
2. The **host** presses **Host** and sets *Max players* (2–12, default 6).
   There is one guest slot per guest.
3. For **each** slot the host presses **Create offer code**, copies the long code
   it produces and sends it to that guest (Discord, chat, email — anything).
4. The **guest** presses **Join**, pastes the offer code into the box and presses
   **Create answer code**. A second code appears.
5. The guest sends that answer code back to the host. The host pastes it into the
   same slot and presses **Use pasted answer**. The slot turns `connected`.
6. Press **Play** to enter the world. Repeat 3–5 for each extra guest — the host
   can run up to `maxPlayers − 1` guests at once, and a slot is reusable after a
   guest disconnects.

### Being honest about NAT

Direct WebRTC connections **cannot always be established**. They fail on
carrier-grade NAT (most mobile networks), symmetric NAT, strict corporate
firewalls and some hotel/guest Wi-Fi. Ticking **Try a public STUN server** helps
on many home networks but **cannot fix symmetric NAT**.

If a slot never reaches `connected`, that is why — use server mode instead.

Peer-to-peer has **no cryptographic authority**: the host is the authority and a
modified host can cheat. It is fine for playing with friends; use server mode
when you want the fair option.

---

## 3. Server-based (WebSocket)

### On the machine that will host

```
node multiplayer/server.mjs
```

Zero npm packages — plain Node. Options:

```
node multiplayer/server.mjs --port 8787 --host 0.0.0.0 --room world --seed 1337 --max-players 6
node multiplayer/server.mjs --help
```

The same machine can be a spare PC, a VPS, a Raspberry Pi — anything that can
stay on. **Self-hosting avoids paying for any service.**

On start it prints a banner with the URLs to share, for example:

```
  Share one of these URLs with the players:
    this machine    http://localhost:8787/
    same LAN        http://192.168.1.24:8787/
    internet        http://<your-public-ip>:8787/   (needs TCP 8787 forwarded)
```

Opening `http://<host>:8787/` serves the game **and** the multiplayer scripts, so
players on that machine can play straight from the page.

### On each player's machine

1. Open the game (the copy served by the server, or your own `file://` copy).
2. **Multiplayer → Server-based**.
3. Enter the server address (default `ws://localhost:8787/ws`):
   * same machine as the server → `ws://localhost:8787/ws`
   * **same LAN** → `ws://<lan-ip>:8787/ws` (e.g. `ws://192.168.1.24:8787/ws`)
   * **over the internet** → `ws://<public-ip>:8787/ws`
4. Press **Connect**, then press **Play**.

`ws://localhost:8787/ws` is **only reachable by you** — it means "the server is
running on this very computer".

### Firewalls and port forwarding

* **Same LAN:** allow Node through the host machine's firewall (on Windows the
  first run normally prompts; allow it for *private* networks). Nothing else is
  needed and no router change is required.
* **Over the internet:** forward **TCP port 8787** on the router to the host
  machine's LAN IP (a NAT/port-forwarding rule, sometimes called a "virtual
  server" entry). Then players use `ws://<your-public-ip>:8787/ws`. Change the
  forwarded port with `--port`.
* **No port forwarding possible?** Use a VPN/mesh network (Tailscale, ZeroTier,
  Hamachi…) and use the address that network gives the host. Nothing about the
  game is tied to a specific hostname or IP — the address is just a text field.
* A `wss://` address also works if you put the server behind a TLS-terminating
  reverse proxy; the menu accepts `ws://` and `wss://`.

---

## 4. In-session controls

* **Mode badge** (top-left, always visible) — the current mode.
* **Status line** — readable connection state and error text.
* **Player list** — count plus each player's hive number (`#1`, `#2`, …).
* **Honey / pollen readout** for the local player.
* **Chat** — press Enter or **Send**; messages are sanitised and rate limited.
* **Disconnect / Reconnect / Reset** —
  * *Reconnect* re-dials in server mode; in peer-to-peer it asks for a **fresh
    code exchange**, because a dropped WebRTC connection cannot be resumed.
  * *Reset* tears everything down and clears remote-player state.
* Only the controls that belong to the selected mode are shown.

---

## 5. Hives, saves and more players

* **A save is a hive.** The existing save system is untouched: same IndexedDB
  database (`IndexedDB_BeeSwarmSimulator`), same `worlds` store, same
  `{ id, data: { lastSaved, saveCode, name } }` records, same save-select menu,
  rename, delete, export and import.
* Every player in a session ends up with **their own hive plot** (distinct
  `hiveIndex`), and leaving frees that plot for the next player. The cap is the
  number of plots, configurable 2–12 (`max-players`).
* The save menu gains a **Copy** button, which duplicates a save to a new id. It
  is added by `mp-client.js` using the game's own `loadFromDB` / `saveToDB`; the
  record shape is unchanged and nothing is deleted implicitly.
* **Hive slots are a purchase, not a freebie.** 25 slots are free; extra slots
  cost `3,000,000 × 1.35^(k−1)` honey for the k-th extra slot, up to 50 slots.
  The authority prices and validates every purchase — the client never sends a
  price.
* A save is adopted **once** at join time, clamped to legal limits. After that the
  authority owns honey/pollen/bees for the rest of the session, so a client
  cannot rewrite its own resources mid-game. Join-time profiles are **trusted**
  (like loading a save file); that is the price of co-op without accounts.

---

## 6. Running the tests

The test suite needs one **dev-only** package for the real WebRTC test. The game
and the server never need it.

```
cd multiplayer
npm install              # installs the devDependency (werift), nothing else
npm test                 # or: node --test "test/**/*.test.mjs"
```

From the repository root (either form works):

```
node --test multiplayer/test/                 # bare directory
node --test "multiplayer/test/**/*.test.mjs" # portable glob, one process per file
```

> **Why both?** On Node 22+ the test runner is glob-based and a bare directory is
> resolved as a module instead of being expanded, which fails with
> `Cannot find module '.../test'`. `multiplayer/test/package.json` points `main`
> at `multiplayer/test/all.mjs`, which imports every `*.test.mjs`, so the bare
> directory form still works. The quoted glob works on every Node version and
> runs each file in its own process — prefer it if you are debugging one file.

> **Server traces:** export `BSS_MP_DEBUG=1` before running the server (or the
> tests) to log every accepted message, decoded frame and rejected frame to
> stdout. Off by default.

The suite (116 tests) covers protocol round trips and rejections, rate limiting,
the session state machine, interpolation/snapping, every authority rule, the
client outbox (a `hello` sent while the socket is still `CONNECTING`), the
headless menu wiring (a fake DOM built from the real ids in `index.html`), the
real client flow against the real server, a **real `RTCPeerConnection` handshake
with a 3-peer star and a guest that starts its session before the handshake**, and
regression tests asserting that **no `WebSocket` and no `RTCPeerConnection` is ever
constructed when multiplayer is not selected**.

---

## 7. What synchronises, and what does not

**Synchronised (and tested):**

* player movement (20 Hz, interpolated with a 100 ms buffer, teleport snapping);
* player roster, hive number per player, and the always-visible mode badge;
* chat and emotes;
* authority-owned pollen bag / honey / capacity / bee count per player;
* claim-once reward tokens, with distance and rate checks;
* authority-priced hive-slot and item purchases;
* pollen → honey conversion, allowed only at your own hive;
* enemy damage bookkeeping;
* unique hive plots, freed on leave, with `server_full` at the cap.

**Not synchronised (deliberately left out for now):**

* remote players are drawn as simple avatar boxes, not the game's full gear
  models, and they have no floating name tags in-world (names appear in the
  player list); remote avatars are drawn only while the multiplayer session is
  active and silently disabled if the game's `Mesh`/`mat4` hooks are missing;
* remote bees are transmitted and stored, but not yet drawn through the game's
  bee renderer;
* the game's own flowers, NPCs, quests and shop UI are not driven by the shared
  world — the authority validates collections and purchases, but the visible
  field/token state is not yet rendered from authority updates;
* drops, gear, quests and progression are per-player and not shared.

---

## 8. Files

| file | what it is |
|------|------------|
| `mp-core.js` | pure networking core: helpers, codec + validators, rate limiting, authority, session, three transports. No DOM, no game code. Loads in a browser, in a Node `vm`, and in the server. |
| `mp-client.js` | the only file that knows the game: hooks adapter, remote-player rendering, menu/chat UI, session lifecycle. |
| `server.mjs` | zero-dependency WebSocket + static file server that runs the shared authority. |
| `PROTOCOL.md` | the wire protocol as implemented. |
| `test/` | `node --test` suites. |
| `package.json` | test script + the dev-only WebRTC dependency. |
