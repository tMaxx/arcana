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
  "js/extra/short.js",
  "js/extra/major.js",
  "js/extra/minor-wands-cups.js",
  "js/extra/minor-swords-pentacles.js",
  "js/extra/health.js",
  "js/extra/deep/major-1.js",
  "js/extra/deep/major-2.js",
  "js/extra/deep/wands.js",
  "js/extra/deep/cups.js",
  "js/extra/deep/swords.js",
  "js/extra/deep/pentacles.js",
  "js/extra/combined/major-1.js",
  "js/extra/combined/major-2.js",
  "js/extra/combined/wands.js",
  "js/extra/combined/cups.js",
  "js/extra/combined/swords.js",
  "js/extra/combined/pentacles.js",
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
    "\n;({ CARDS, CARD_BY_ID, EXTRA, SPREADS, SPREAD_BY_ID, COMBOS, state, toggleCard, setSpread, fillEmptySlot, moveInHand, handAsText, setCtx, toggleCtx, setCombined, setDepth, setArt, setView, meaningFor, meaningsFor, combinedFor, combinedContexts, textFor, findCombos, matchesQuery, visibleCardIds, activeContexts, handCards, findHandEntry, handCount, moveToClarifier, clarifyProblem, moveEntry, moveProblem, ynTally, flipInHand })",
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
  toggleCtx,
  setCombined,
  setDepth,
  setArt,
  setView,
  meaningFor,
  meaningsFor,
  combinedFor,
  combinedContexts,
  textFor,
  findCombos,
  matchesQuery,
  visibleCardIds,
  activeContexts,
  handCards,
  findHandEntry,
  handCount,
  moveToClarifier,
  clarifyProblem,
  moveEntry,
  moveProblem,
  ynTally,
  flipInHand,
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
check(["list", "layout", "read"].includes(state.view), `invalid default view: ${state.view}`);
check(Array.isArray(state.ctx) && state.ctx.includes("general"), `invalid default context: ${state.ctx}`);

/* ---------- richer content ---------- */

for (const c of CARDS) {
  const e = EXTRA[c.id];
  check(e && Array.isArray(e.health) && e.health.length === 2, `missing health text: ${c.id}`);
  check(e && e.combined && Array.isArray(e.combined["love+career"]) && e.combined["love+career"].length === 2, `missing combined text: ${c.id}`);
  check(e && e.deep && Array.isArray(e.deep.general) && e.deep.general.length === 2, `missing deep text: ${c.id}`);
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
check(state.ctx.join(",") === "health", "setCtx health failed");
const health = meaningFor(CARD_BY_ID.get("fool"), false, "health");
check(health === EXTRA.fool.health[0], "health context did not select health text");
const healthText = handAsText();
check(healthText.includes("Context: Health"), "health context missing from copied text");
check(healthText.includes("not medical advice"), "health disclaimer missing from copied text");

// Multi-context selection + optional combined summary.
setCtx("general");
toggleCtx("love");
toggleCtx("career");
check(state.ctx.join(",") === "general,love,career", `multi-context failed: ${state.ctx}`);
check(activeContexts().length === 3, "activeContexts should return three contexts");
check(combinedContexts().length === 2, "combinedContexts should ignore general");
check(meaningsFor(CARD_BY_ID.get("fool"), false).length === 3, "meaningsFor should return three texts");
setCombined(true);
check(
  combinedFor(CARD_BY_ID.get("fool"), false) === EXTRA.fool.combined["love+career"][0],
  "combined summary should follow the selected areas"
);
const multiText = handAsText();
check(multiText.includes("Context: General, Love"), "multi-context header missing");
check(multiText.includes("Combined:"), "combined summary missing from copied text");
setCombined(false);
const noCombinedText = handAsText();
check(!noCombinedText.includes("Combined:"), "combined summary should be optional");

// One area is not enough for a combined summary.
setCtx("general");
toggleCtx("love");
check(combinedFor(CARD_BY_ID.get("fool"), false) === "", "combined summary needs two areas");
setCtx("general");

/* ---------- reading depth ---------- */

state.spread = "free";
state.hand = [{ id: "fool", rev: false }];
const fool = CARD_BY_ID.get("fool");
check(textFor(fool, false, "general") === fool.upright, "short text should be the default");
setDepth("deep");
check(textFor(fool, false, "general") === EXTRA.fool.deep.general[0], "deep general text not used");
check(textFor(fool, true, "love") === EXTRA.fool.deep.love[1], "deep love reversed text not used");
const deepText = handAsText();
check(deepText.includes(EXTRA.fool.deep.general[0].slice(0, 40)), "deep text missing from copied reading");
setDepth("short");
check(textFor(fool, true, "general") === fool.reversed, "short text should come back");

/* ---------- clarifiers: drag a hand card onto another ---------- */

state.hand = [];
state.spread = "three";
state.pendingSlot = null;
toggleCard("death");
toggleCard("tower");
check(handCount() === 2, `clarifier setup failed: ${handCount()}`);

// dragging the second card onto the first makes it a clarifier
check(moveToClarifier({ index: 1, clarifier: false }, 0), "moveToClarifier failed");
check(state.hand[0].clarifier && state.hand[0].clarifier.id === "tower", "clarifier not attached");
check(!state.hand[1], "the source slot should be empty");
check(handCount() === 1, "moving a card must not add a position");
check(handCards().length === 2, "handCards should include the clarifier");
check(findHandEntry("tower") && findHandEntry("tower").clarifier, "findHandEntry should find the clarifier");

// a card cannot clarify its own position, and a card with its own clarifier cannot move
check(clarifyProblem({ index: 0, clarifier: false }, 0) !== null, "self clarifier should be rejected");
check(!moveToClarifier({ index: 0, clarifier: false }, 1), "a card with a clarifier should not move");

flipInHand("tower");
check(state.hand[0].clarifier.rev === true, "clarifier flip failed");
const tally = ynTally();
check(tally.yes + tally.no + tally.maybe === 2, "tally should include the clarifier");
const clarText = handAsText();
check(clarText.includes("Clarifier: The Tower"), "clarifier missing from copied text");
check(clarText.includes("Combinations:"), "clarifier combination missing from copied text");

// a clarifier can move on to another card, leaving its old holder without one
toggleCard("star");
check(moveToClarifier({ index: 0, clarifier: true }, 1), "moving a clarifier failed");
check(!state.hand[0].clarifier, "the old holder should lose its clarifier");
check(state.hand[1].clarifier && state.hand[1].clarifier.id === "tower", "clarifier not attached to the new card");
check(state.hand[1].clarifier.rev === true, "clarifier orientation should be preserved");

// an occupied clarifier slot refuses a second card
check(clarifyProblem({ index: 0, clarifier: false }, 1) !== null, "target with a clarifier should be rejected");
check(!moveToClarifier({ index: 0, clarifier: false }, 1), "second clarifier should be rejected");

// removal still works
toggleCard("tower");
check(!state.hand[1].clarifier, "clarifier removal failed");
check(handCount() === 2, "clarifier removal should keep the primary");

/* ---------- moving cards between positions ---------- */

state.spread = "three";
state.hand = [
  { id: "death", rev: false },
  { id: "tower", rev: true, clarifier: { id: "star", rev: false } },
];
check(moveEntry(0, 1), "swap via moveEntry failed");
check(state.hand[0].id === "tower" && state.hand[1].id === "death", "swap should exchange cards");
check(state.hand[0].clarifier && state.hand[0].clarifier.id === "star", "the clarifier should travel with its card");
check(moveEntry(1, 2), "move into an empty position failed");
check(!state.hand[1] && state.hand[2].id === "death", "the old position should be empty after a move");
check(moveProblem(2, 2) !== null, "moving onto itself should be rejected");
check(!moveEntry(2, 2), "moveEntry should refuse a no-op move");

setArt("symbols");
check(state.art === "symbols", "setArt failed");
setView("layout");
check(state.view === "layout", "setView failed");
setView("read");
check(state.view === "read", "setView read failed");
setView("list");
check(state.view === "list", "setView list failed");

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
