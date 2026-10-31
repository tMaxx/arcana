#!/usr/bin/env node
"use strict";

/* Non-visual smoke test for the app logic.
 * Usage: node tools/check-app.js
 *
 * Loads the real scripts in a VM with a minimal DOM stub, then exercises
 * the hand/spread/context logic. No browser and no screenshots. */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.dirname(__dirname);
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), "utf8");

const SCRIPTS = [
  "js/data.js",
  "js/extra/major.js",
  "js/extra/minor-wands-cups.js",
  "js/extra/minor-swords-pentacles.js",
  "js/extra/health.js",
  "js/spreads.js",
  "js/combos.js",
  "js/app.js",
];

/* ---------- minimal DOM stub ---------- */

function makeEl(sel = "") {
  const classes = new Set();
  return {
    _sel: sel,
    innerHTML: "",
    textContent: "",
    value: "",
    hidden: false,
    disabled: false,
    open: false,
    dataset: {},
    classList: {
      add: (...c) => c.forEach((x) => classes.add(x)),
      remove: (...c) => c.forEach((x) => classes.delete(x)),
      toggle: (c, force) => {
        if (force === undefined) classes.has(c) ? classes.delete(c) : classes.add(c);
        else if (force) classes.add(c);
        else classes.delete(c);
      },
      contains: (c) => classes.has(c),
    },
    setAttribute() {},
    getAttribute() {
      return null;
    },
    addEventListener() {},
    removeEventListener() {},
    querySelector: () => makeEl("child"),
    querySelectorAll: () => [],
    closest: () => null,
    matches: () => false,
    focus() {},
    blur() {},
    showModal() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
  };
}


const elements = new Map();
const document = {
  querySelector(sel) {
    if (!elements.has(sel)) elements.set(sel, makeEl(sel));
    return elements.get(sel);
  },
  querySelectorAll() {
    return [];
  },
  addEventListener() {},
};

const storage = new Map();
const localStorage = {
  getItem: (k) => (storage.has(k) ? storage.get(k) : null),
  setItem: (k, v) => storage.set(k, String(v)),
  removeItem: (k) => storage.delete(k),
  clear: () => storage.clear(),
};

const ctx = vm.createContext({
  console,
  document,
  localStorage,
  window: { addEventListener() {}, scrollTo() {} },
  location: { hash: "", protocol: "file:" },
  navigator: {},
  HTMLDialogElement: class HTMLDialogElement {},
  setTimeout,
  clearTimeout,
  confirm: () => true,
});

const exported = vm.runInContext(
  SCRIPTS.map(read).join("\n") +
    "\n;({ CARDS, CARD_BY_ID, EXTRA, SPREADS, SPREAD_BY_ID, COMBOS, state, toggleCard, setSpread, fillEmptySlot, moveInHand, handAsText, setCtx, setArt, setView, meaningFor, findCombos, matchesQuery, visibleCardIds })",
  ctx,
  { filename: "app-bundle.js" }
);

const {
  CARDS,
  CARD_BY_ID,
  EXTRA,
  SPREADS,
  SPREAD_BY_ID,
  COMBOS,
  state,
  toggleCard,
  setSpread,
  fillEmptySlot,
  moveInHand,
  handAsText,
  setCtx,
  setArt,
  setView,
  meaningFor,
  findCombos,
  matchesQuery,
  visibleCardIds,
} = exported;

const problems = [];
const check = (cond, msg) => {
  if (!cond) problems.push(msg);
};

/* ---------- load-time state ---------- */

check(CARDS.length === 78, `expected 78 cards, got ${CARDS.length}`);
check(SPREADS.length === 8, `expected 8 spreads, got ${SPREADS.length}`);
check(SPREAD_BY_ID.has("yesno"), "missing yes/no spread");
check(SPREAD_BY_ID.get("yesno").positions.length === 3, "yes/no spread should have 3 positions");
check(COMBOS.length === 42, `expected 42 combos, got ${COMBOS.length}`);
check(Array.isArray(state.hand), "state.hand is not an array");
check(SPREAD_BY_ID.has(state.spread), `invalid default spread: ${state.spread}`);
check(["art", "symbols"].includes(state.art), `invalid default art: ${state.art}`);
check(["list", "layout"].includes(state.view), `invalid default view: ${state.view}`);
check(["general", "love", "career", "health"].includes(state.ctx), `invalid default context: ${state.ctx}`);

/* ---------- richer content ---------- */

for (const c of CARDS) {
  const e = EXTRA[c.id];
  check(e && Array.isArray(e.health) && e.health.length === 2, `missing health text: ${c.id}`);
  check(e && Array.isArray(e.love) && e.love.length === 2, `missing love text: ${c.id}`);
  check(e && Array.isArray(e.career) && e.career.length === 2, `missing career text: ${c.id}`);
  check(e && typeof e.question === "string" && e.question, `missing question: ${c.id}`);
  check(e && Array.isArray(e.yn) && e.yn.length === 2, `missing yn: ${c.id}`);
}

/* ---------- search aliases ---------- */

const sevenCups = CARD_BY_ID.get("cups-7");
check(matchesQuery(sevenCups, "7 cups"), "search missed 7 cups");
check(matchesQuery(sevenCups, "vii cups"), "search missed vii cups");
check(matchesQuery(sevenCups, "7 of cups"), "search missed 7 of cups");
check(matchesQuery(sevenCups, "vii of cups"), "search missed vii of cups");
check(matchesQuery(sevenCups, "seven cups"), "search missed seven cups");
check(matchesQuery(sevenCups, "cups 7"), "search missed cups 7");
check(matchesQuery(sevenCups, "cups vii"), "search missed cups vii");
check(!matchesQuery(sevenCups, "x cups"), "x cups should not match seven of cups");
check(matchesQuery(CARD_BY_ID.get("cups-10"), "x cups"), "search missed x cups");
check(matchesQuery(CARD_BY_ID.get("cups-ace"), "i cups"), "search missed i cups");
check(matchesQuery(CARD_BY_ID.get("cups-ace"), "1 cups"), "search missed 1 cups");
check(matchesQuery(CARD_BY_ID.get("cups-ace"), "ace cups"), "search missed ace cups");
check(matchesQuery(CARD_BY_ID.get("cups-page"), "pg cups"), "search missed pg cups");
check(matchesQuery(CARD_BY_ID.get("cups-knight"), "kn cups"), "search missed kn cups");
check(matchesQuery(CARD_BY_ID.get("cups-queen"), "q cups"), "search missed q cups");
check(matchesQuery(CARD_BY_ID.get("cups-king"), "k cups"), "search missed k cups");
check(matchesQuery(CARD_BY_ID.get("chariot"), "vii"), "search missed vii for the chariot");
check(matchesQuery(CARD_BY_ID.get("chariot"), "7"), "search missed 7 for the chariot");
check(matchesQuery(CARD_BY_ID.get("world"), "xxi"), "search missed xxi for the world");
check(matchesQuery(CARD_BY_ID.get("world"), "21"), "search missed 21 for the world");
check(matchesQuery(CARD_BY_ID.get("fool"), "0"), "search missed 0 for the fool");
check(!matchesQuery(sevenCups, "vii wands"), "vii wands should not match seven of cups");

state.tab = "all";
state.query = "vii cups";
check(visibleCardIds().join(",") === "cups-7", "visibleCardIds should return seven of cups for vii cups");
state.query = "7 cups";
check(visibleCardIds().join(",") === "cups-7", "visibleCardIds should return seven of cups for 7 cups");
state.query = "x cups";
check(visibleCardIds().join(",") === "cups-10", "visibleCardIds should return ten of cups for x cups");
state.query = "";

/* ---------- free hand ---------- */

state.hand = [];
state.spread = "free";
state.pendingSlot = null;
toggleCard("fool");
check(state.hand.length === 1 && state.hand[0].id === "fool", "free hand add failed");
toggleCard("fool");
check(state.hand.length === 0, "free hand remove failed");

/* ---------- spread slots ---------- */

state.hand = [];
setSpread("three");
check(state.spread === "three", "setSpread failed");
check(state.hand.length === 0, "spread change should not invent cards");

// Fill position 2 first, then the earlier gap.
fillEmptySlot(1);
check(state.pendingSlot === 1, "fillEmptySlot did not record the slot");
toggleCard("fool");
check(state.hand.length === 2, `expected padded hand length 2, got ${state.hand.length}`);
check(state.hand[0] === null, "slot 1 should be empty");
check(state.hand[1] && state.hand[1].id === "fool", "fool should be in slot 2");

toggleCard("magician");
check(state.hand[0] && state.hand[0].id === "magician", "first gap should be filled first");
check(state.hand[1] && state.hand[1].id === "fool", "existing slot should not move");

// Reorder across an empty slot.
state.hand = [{ id: "fool", rev: false }, null, { id: "star", rev: false }];
moveInHand("star", -1);
check(state.hand[1] && state.hand[1].id === "star", "move into empty slot failed");
check(!state.hand[2], "move should leave the old slot empty");

// Removing from a spread leaves the position empty, not shifted.
state.hand = [{ id: "fool", rev: false }, { id: "magician", rev: false }, { id: "star", rev: false }];
toggleCard("magician");
check(state.hand[1] === null, "spread removal should leave an empty slot");
check(state.hand[2] && state.hand[2].id === "star", "spread removal should not shift later cards");

// Switching to a free hand compacts the placeholders.
setSpread("free");
check(state.hand.every(Boolean), "free hand should not keep empty slots");

/* ---------- text + contexts ---------- */

state.hand = [{ id: "death", rev: false }, { id: "tower", rev: true }];
state.spread = "three";
const text = handAsText();
check(text.includes("Past: Death"), "handAsText missing position label");
check(text.includes("(reversed)"), "handAsText missing reversed marker");
check(text.includes("Combinations:"), "handAsText missing combinations");

setCtx("health");
check(state.ctx === "health", "setCtx health failed");
const health = meaningFor(CARD_BY_ID.get("fool"), false);
check(health === EXTRA.fool.health[0], "health context did not select health text");
const healthText = handAsText();
check(healthText.includes("Context: Health"), "health context missing from copied text");
check(healthText.includes("not medical advice"), "health disclaimer missing from copied text");

setArt("symbols");
check(state.art === "symbols", "setArt failed");
setView("layout");
check(state.view === "layout", "setView failed");

/* ---------- combinations ---------- */

const combos = findCombos([
  { id: "death", rev: false },
  { id: "tower", rev: true },
  { id: "swords-5", rev: false },
  { id: "swords-7", rev: false },
  { id: "swords-9", rev: false },
]);
check(combos.some((c) => c.name === "Total upheaval"), "findCombos missed death+tower");
check(combos.some((c) => c.pattern), "findCombos missed a pattern");

/* ---------- report ---------- */

if (problems.length) {
  console.error(`FAIL (${problems.length})`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(
  `OK: app loads; ${CARDS.length} cards, ${SPREADS.length} spreads, ${COMBOS.length} combos; ` +
    "hand, slots, contexts and combinations behave."
);
