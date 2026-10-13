/*
 * multiplayer/test/all.mjs
 * ---------------------------------------------------------------------------
 * Compatibility entry point so that a BARE DIRECTORY works as a test target:
 *
 *     node --test multiplayer/test/        (from the repository root)
 *     node --test test/                    (from multiplayer/)
 *
 * On Node >= 22 `node --test <dir>` does not expand directories any more: the
 * argument is resolved as a module instead, so the run fails with
 * "Cannot find module '.../test'". `test/package.json` points `main` here, and
 * this file imports every test file exactly once, in a fixed order.
 *
 * You do not have to use this: the portable form is a quoted glob of every
 * test module in this folder, which works on every Node version and keeps one
 * process per test file (the command is written out in README.md and in
 * package.json's "test" script).
 */
import './protocol.test.mjs';
import './rate-limit.test.mjs';
import './outbox.test.mjs';
import './client.test.mjs';
import './session.test.mjs';
import './authority.test.mjs';
import './peer.test.mjs';
import './server.test.mjs';
import './regression.test.mjs';
