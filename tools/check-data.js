#!/usr/bin/env node
"use strict";

/* Non-visual integrity check for the static data layer.
 * Usage: node tools/check-data.js
 * Exits non-zero on the first category of problems found. */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.dirname(__dirname);
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), "utf8");

const ctx = vm.createContext({ console });
const sources = [
  "js/data.js",
  "js/extra/major.js",
  "js/extra/minor-wands-cups.js",
  "js/extra/minor-swords-pentacles.js",
  "js/extra/health.js",
  "js/spreads.js",
  "js/combos.js",
].map(read);

// Top-level `const` bindings are lexical, so evaluate everything as one script
// and hand the values back explicitly.
const exported = vm.runInContext(
  sources.join("\n") +
    "\n;({ CARDS, CARD_BY_ID, EXTRA, HEALTH_READINGS, SUITS, SUIT_ORDER, RANKS, SPREADS, SPREAD_BY_ID, COMBOS, findCombos })",
  ctx,
  { filename: "data-bundle.js" }
);

const { CARDS, CARD_BY_ID, EXTRA, HEALTH_READINGS, SUITS, SUIT_ORDER, RANKS, SPREADS, SPREAD_BY_ID, COMBOS, findCombos } = exported;
const problems = [];
const fail = (msg) => problems.push(msg);

/* --- cards --- */
if (CARDS.length !== 78) fail(`expected 78 cards, found ${CARDS.length}`);
if (CARD_BY_ID.size !== CARDS.length) fail("duplicate card ids");

const seen = new Set();
for (const c of CARDS) {
  if (seen.has(c.id)) fail(`duplicate id: ${c.id}`);
  seen.add(c.id);
  if (!c.name || !c.upright || !c.reversed) fail(`missing text: ${c.id}`);
  if (!Array.isArray(c.keywords) || !c.keywords.length) fail(`missing keywords: ${c.id}`);
  if (c.arcana === "major" && !c.glyph) fail(`missing glyph: ${c.id}`);
  if (c.arcana === "minor" && !SUITS[c.suit]) fail(`bad suit: ${c.id}`);
}

/* --- extra content --- */
for (const c of CARDS) {
  const e = EXTRA[c.id];
  if (!e) {
    fail(`missing EXTRA entry: ${c.id}`);
    continue;
  }
  for (const key of ["love", "career", "health"]) {
    if (!Array.isArray(e[key]) || e[key].length !== 2 || e[key].some((s) => !s)) {
      fail(`bad ${key} text: ${c.id}`);
    }
  }
  if (!e.question) fail(`missing question: ${c.id}`);
  if (!Array.isArray(e.yn) || e.yn.length !== 2 || e.yn.some((v) => !["yes", "no", "maybe"].includes(v))) {
    fail(`bad yn: ${c.id}`);
  }
}
for (const id of Object.keys(EXTRA)) {
  if (!CARD_BY_ID.has(id)) fail(`EXTRA entry for unknown card: ${id}`);
}
if (Object.keys(HEALTH_READINGS).length !== CARDS.length) {
  fail(`expected ${CARDS.length} health entries, found ${Object.keys(HEALTH_READINGS).length}`);
}
for (const id of Object.keys(HEALTH_READINGS)) {
  if (!CARD_BY_ID.has(id)) fail(`health entry for unknown card: ${id}`);
}

/* --- artwork --- */
for (const c of CARDS) {
  const file = path.join(ROOT, "img", "cards", `${c.id}.webp`);
  if (!fs.existsSync(file)) fail(`missing artwork: ${c.id}.webp`);
}

/* --- spreads --- */
if (!SPREAD_BY_ID.has("free")) fail("missing free spread");
for (const s of SPREADS) {
  if (!s.name || !s.blurb) fail(`spread missing name/blurb: ${s.id}`);
  if (!s.positions.length) continue;
  if (!s.cols || !s.rows) fail(`spread ${s.id} has positions but no grid`);
  const occupied = new Set();
  for (const p of s.positions) {
    if (!p.name || !p.hint) fail(`spread ${s.id}: position missing name/hint`);
    if (p.col < 1 || p.col > s.cols || p.row < 1 || p.row > s.rows) {
      fail(`spread ${s.id}: position "${p.name}" outside ${s.cols}x${s.rows} grid`);
    }
    const key = `${p.col},${p.row}`;
    if (occupied.has(key) && !p.rot) fail(`spread ${s.id}: overlapping position "${p.name}"`);
    occupied.add(key);
  }
}

/* --- combos --- */
for (const c of COMBOS) {
  if (!["good", "warn", "mixed"].includes(c.kind)) fail(`combo bad kind: ${c.name}`);
  if (!c.name || !c.text) fail("combo missing name/text");
  if (!Array.isArray(c.cards) || c.cards.length < 2) fail(`combo needs 2+ cards: ${c.name}`);
  for (const id of c.cards) if (!CARD_BY_ID.has(id)) fail(`combo "${c.name}" references unknown card: ${id}`);
}

/* --- runtime smoke: findCombos --- */
const sample = [
  { id: "death", rev: false },
  { id: "tower", rev: true },
  { id: "swords-5", rev: false },
  { id: "swords-7", rev: false },
  { id: "swords-9", rev: false },
];
const found = findCombos(sample);
if (!found.some((c) => c.name === "Total upheaval")) fail("findCombos missed death+tower");
if (!found.some((c) => c.pattern)) fail("findCombos missed a pattern");

/* --- report --- */
if (problems.length) {
  console.error(`FAIL (${problems.length})`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(
  `OK: ${CARDS.length} cards, ${Object.keys(EXTRA).length} extra entries, ` +
    `${SPREADS.length} spreads, ${COMBOS.length} combos, 78 artwork files.`
);
