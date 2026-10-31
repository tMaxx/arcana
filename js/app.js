"use strict";

/* ================================================================== *
 * Arcana: tarot reading helper
 * ================================================================== */

const KEYS = {
  hand: "arcana.hand.v1",
  spread: "arcana.spread.v1",
  art: "arcana.art.v1",
  ctx: "arcana.ctx.v1",
  view: "arcana.view.v1",
  offline: "arcana.offline-toast.v1",
};

const TABS = [
  { id: "all", label: "All" },
  { id: "major", label: "Major Arcana" },
  { id: "wands", label: "Wands" },
  { id: "cups", label: "Cups" },
  { id: "swords", label: "Swords" },
  { id: "pentacles", label: "Pentacles" },
  { id: "combos", label: "Combinations" },
];

const CONTEXTS = [
  { id: "general", label: "General" },
  { id: "love", label: "Love" },
  { id: "career", label: "Work & money" },
  { id: "health", label: "Health" },
];

const KIND_LABEL = { good: "Favourable", warn: "Caution", mixed: "Mixed" };
const YN_LABEL = { yes: "Yes", no: "No", maybe: "Maybe" };

/* ---------- tiny helpers ---------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const prefs = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v === null ? fallback : v;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* storage unavailable: setting simply won't persist */
    }
  },
};

function pick(key, allowed, fallback) {
  const v = prefs.get(key, fallback);
  return allowed.includes(v) ? v : fallback;
}

function loadHand() {
  try {
    const raw = JSON.parse(prefs.get(KEYS.hand, "[]"));
    if (!Array.isArray(raw)) return [];
    // null marks an empty spread position; keep it so cards stay in their slots
    const hand = raw.map((h) => (h && CARD_BY_ID.has(h.id) ? { id: h.id, rev: !!h.rev } : null));
    while (hand.length && hand[hand.length - 1] === null) hand.pop();
    return hand;
  } catch {
    return [];
  }
}

function escapeHTML(s) {
  return s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
}

/* ---------- card content: merge extras + correspondences ---------- */

const MAJOR_CORR = {
  fool: "Air · Uranus",
  magician: "Mercury",
  "high-priestess": "Moon",
  empress: "Venus",
  emperor: "Aries · Fire",
  hierophant: "Taurus · Earth",
  lovers: "Gemini · Air",
  chariot: "Cancer · Water",
  strength: "Leo · Fire",
  hermit: "Virgo · Earth",
  "wheel-of-fortune": "Jupiter",
  justice: "Libra · Air",
  "hanged-man": "Water · Neptune",
  death: "Scorpio · Water",
  temperance: "Sagittarius · Fire",
  devil: "Capricorn · Earth",
  tower: "Mars",
  star: "Aquarius · Air",
  moon: "Pisces · Water",
  sun: "Sun",
  judgement: "Fire · Pluto",
  world: "Saturn · Earth",
};
const COURT_ELEMENT = { page: "Earth", knight: "Air", queen: "Water", king: "Fire" };

function correspondence(card) {
  if (card.arcana === "major") return MAJOR_CORR[card.id] || "";
  const element = SUITS[card.suit].element;
  if (COURT_ELEMENT[card.rank]) return `${COURT_ELEMENT[card.rank]} of ${element}`;
  return `${element} · number ${card.number}`;
}

CARDS.forEach((c) => {
  c.extra = EXTRA[c.id] || null;
  c.corr = correspondence(c);
});

/* ---------- state ---------- */

const state = {
  tab: "all",
  query: "",
  hand: loadHand(), // [{ id, rev } | null]; null = empty spread position
  spread: pick(KEYS.spread, SPREADS.map((s) => s.id), "free"),
  art: pick(KEYS.art, ["art", "symbols"], "art"),
  ctx: pick(KEYS.ctx, CONTEXTS.map((c) => c.id), "general"),
  view: pick(KEYS.view, ["list", "layout"], "list"),
  pendingSlot: null, // spread position waiting for a card from the grid
  navList: [], // card ids for prev/next inside the detail dialog
  navIndex: 0,
};

const handIndex = (id) => state.hand.findIndex((h) => h && h.id === id);
const handCount = () => state.hand.filter(Boolean).length;
const trimHand = () => {
  while (state.hand.length && state.hand[state.hand.length - 1] === null) state.hand.pop();
};
const inHand = (id) => handIndex(id) !== -1;
const currentSpread = () => SPREAD_BY_ID.get(state.spread);

function saveHand() {
  prefs.set(KEYS.hand, JSON.stringify(state.hand));
}

/** Meaning text for a card in the current (or given) reading context. */
function meaningFor(card, rev, ctx = state.ctx) {
  const i = rev ? 1 : 0;
  if (ctx !== "general" && card.extra && card.extra[ctx]) return card.extra[ctx][i];
  return rev ? card.reversed : card.upright;
}

const ynFor = (card, rev) => (card.extra ? card.extra.yn[rev ? 1 : 0] : null);

function ynBadge(card, rev) {
  const v = ynFor(card, rev);
  return v ? `<span class="yn yn-${v}" title="Yes/no leaning">${YN_LABEL[v]}</span>` : "";
}

/* ---------- SVG suit icons ---------- */

const SUIT_ICONS = {
  wands:
    '<path d="M16 52 L46 12"/><path d="M46 12 q8 -1 10 -8 q-9 0 -10 8z"/><path d="M38 23 q-8 0 -11 -6 q7 -2 11 6z"/><path d="M30 34 q8 0 12 6 q-8 3 -12 -6z"/>',
  cups: '<path d="M14 12 h36 c0 15 -7 24 -18 26 c-11 -2 -18 -11 -18 -26z"/><path d="M32 38 v14"/><path d="M21 54 h22"/><path d="M17 20 h30"/>',
  swords:
    '<path d="M32 4 l6 7 v27 h-12 v-27z"/><path d="M32 11 v27"/><path d="M18 38 h28"/><path d="M32 38 v14"/><circle cx="32" cy="56" r="3.5"/>',
  pentacles:
    '<circle cx="32" cy="32" r="25"/><path d="M32 13 L43.17 47.37 L13.93 26.13 L50.07 26.13 L20.83 47.37 Z"/>',
};

function suitIcon(suit) {
  return `<svg class="suit-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SUIT_ICONS[suit]}</svg>`;
}

/* ---------- card rendering ---------- */

// Pip icon size (in cqw of the card width) by number of pips
const PIP_SIZE = [0, 46, 30, 26, 28, 24, 26, 22, 22, 19, 19];

function pipsHTML(card) {
  const n = card.number;
  if (n > 10) return suitIcon(card.suit); // court cards: one large emblem
  const cols = n <= 3 ? 1 : 2;
  const pips = Array.from({ length: n }, () => suitIcon(card.suit)).join("");
  return `<div class="pips" style="--cols:${cols};--pip:${PIP_SIZE[n]}cqw">${pips}</div>`;
}

function faceHTML(card, reversed = false) {
  const cls = card.arcana === "major" ? "major" : `suit-${card.suit}`;
  const rev = reversed ? " reversed" : "";

  if (state.art === "art") {
    return (
      `<div class="card has-art ${cls}${rev}">` +
      `<img class="art-img" src="img/cards/${card.id}.webp" alt="" loading="lazy" decoding="async" draggable="false">` +
      `</div>`
    );
  }

  const art =
    card.arcana === "major" ? `<span class="glyph">${card.glyph}\uFE0E</span>` : pipsHTML(card);
  return (
    `<div class="card ${cls}${rev}">` +
    `<span class="corner tl">${card.label}</span>` +
    `<div class="art">${art}</div>` +
    `<div class="title">${card.name}</div>` +
    `</div>`
  );
}

function cardCategory(card) {
  if (card.arcana === "major") return `Major Arcana · ${card.label}`;
  const s = SUITS[card.suit];
  return `${s.name} · ${s.element}`;
}

function tileHTML(card) {
  const on = inHand(card.id);
  return (
    `<div class="tile${on ? " in-hand" : ""}" data-id="${card.id}">` +
    `<button class="tile-open" data-open="${card.id}" aria-label="View ${card.name}">${faceHTML(card)}</button>` +
    `<button class="tile-add" data-toggle="${card.id}" aria-pressed="${on}" aria-label="${on ? "Remove" : "Add"} ${card.name} ${on ? "from" : "to"} hand" title="${on ? "Remove from hand" : "Add to hand"}">${on ? "✓" : "+"}</button>` +
    `</div>`
  );
}

/* ---------- main view ---------- */

const GROUPS = [
  { id: "major", title: "Major Arcana", sub: "Trumps", blurb: "The soul's journey from the Fool to the World. Major themes and turning points.", filter: (c) => c.arcana === "major" },
  ...SUIT_ORDER.map((s) => ({
    id: s,
    title: SUITS[s].name,
    sub: SUITS[s].element,
    blurb: SUITS[s].blurb,
    filter: (c) => c.suit === s,
  })),
];

function matchesQuery(card, q) {
  const extra = card.extra
    ? [...card.extra.love, ...card.extra.career, ...(card.extra.health || []), card.extra.question].join(" ")
    : "";
  const hay = [card.name, card.keywords.join(" "), card.upright, card.reversed, extra].join(" ").toLowerCase();
  return q.split(/\s+/).every((word) => hay.includes(word));
}

function visibleCardIds() {
  const q = state.query.trim().toLowerCase();
  return CARDS.filter((c) => {
    if (q) return matchesQuery(c, q);
    return state.tab === "all" || GROUPS.find((g) => g.id === state.tab)?.filter(c);
  }).map((c) => c.id);
}

function renderMain() {
  const main = $("#main");
  if (state.tab === "combos") {
    renderCombosTab(main);
    return;
  }

  const ids = new Set(visibleCardIds());
  const groups = GROUPS.map((g) => ({ g, cards: CARDS.filter((c) => ids.has(c.id) && g.filter(c)) })).filter(
    (x) => x.cards.length
  );

  state.navList = groups.flatMap((x) => x.cards.map((c) => c.id));

  if (!groups.length) {
    main.innerHTML = `<p class="empty">No cards match “${escapeHTML(state.query)}”.</p>`;
    return;
  }

  main.innerHTML = groups
    .map(
      ({ g, cards }) =>
        `<section class="group" id="g-${g.id}">` +
        `<header class="group-head"><h2>${g.title} <small>${g.sub} · ${cards.length}</small></h2><p>${g.blurb}</p></header>` +
        `<div class="grid">${cards.map(tileHTML).join("")}</div>` +
        `</section>`
    )
    .join("");
}

function comboMatchesQuery(combo, q) {
  const names = combo.cards.map((id) => CARD_BY_ID.get(id).name).join(" ");
  return `${combo.name} ${combo.text} ${names}`.toLowerCase().includes(q);
}

function comboHTML(combo, active) {
  const chips = combo.cards
    .map((id) => {
      const c = CARD_BY_ID.get(id);
      return `<button class="chip${inHand(id) ? " chip-held" : ""}" data-open="${id}">${c.name}</button>`;
    })
    .join("");
  return (
    `<article class="combo kind-${combo.kind}${active ? " active" : ""}">` +
    `<div class="combo-head"><span class="badge">${combo.pattern ? "Pattern · " : ""}${KIND_LABEL[combo.kind]}</span>` +
    `<h3>${combo.name}</h3>${active ? '<span class="badge live">In your hand</span>' : ""}</div>` +
    `<div class="chips">${chips}</div>` +
    `<p>${combo.text}</p>` +
    `</article>`
  );
}

function renderCombosTab(main) {
  const q = state.query.trim().toLowerCase();
  const ids = new Set(state.hand.filter(Boolean).map((h) => h.id));
  const isActive = (c) => c.cards.every((id) => ids.has(id));
  let list = COMBOS.filter((c) => !q || comboMatchesQuery(c, q));
  // active ones first, otherwise keep authored order
  list = list.filter(isActive).concat(list.filter((c) => !isActive(c)));
  state.navList = [...new Set(list.flatMap((c) => c.cards))];

  main.innerHTML =
    `<section class="group">` +
    `<header class="group-head"><h2>Combinations to watch for <small>${list.length}</small></h2>` +
    `<p>Pairs and triples that shift the meaning of a reading. Combinations present in your current hand are highlighted and listed first.</p></header>` +
    (list.length
      ? `<div class="combo-list">${list.map((c) => comboHTML(c, isActive(c))).join("")}</div>`
      : `<p class="empty">No combinations match “${escapeHTML(state.query)}”.</p>`) +
    `</section>` +
    (q
      ? ""
      : `<section class="group"><header class="group-head"><h2>Patterns <small>automatic</small></h2>` +
        `<p>Beyond the fixed list above, your hand is also checked for:</p></header>` +
        `<ul class="rules">${PATTERN_RULES.map((r) => `<li>${r}</li>`).join("")}</ul></section>`);
}

/* ---------- tabs ---------- */

function renderTabs() {
  $("#tabs").innerHTML = TABS.map(
    (t, i) =>
      `<button role="tab" class="tab${t.id === state.tab ? " active" : ""}" data-tab="${t.id}" aria-selected="${t.id === state.tab}" title="Shortcut: ${i + 1}">${t.label}</button>`
  ).join("");
}

function setTab(id, { scroll = true } = {}) {
  if (!TABS.some((t) => t.id === id)) id = "all";
  state.tab = id;
  renderTabs();
  renderMain();
  if (scroll) window.scrollTo({ top: 0 });
}

/* ---------- settings: art / context / spread / view ---------- */

function syncControls() {
  $$("[data-art]").forEach((b) => b.classList.toggle("active", b.dataset.art === state.art));
  $$("[data-ctx]").forEach((b) => b.classList.toggle("active", b.dataset.ctx === state.ctx));
  $$("[data-view]").forEach((b) => b.classList.toggle("active", b.dataset.view === state.view));
  $$("[data-art],[data-ctx],[data-view]").forEach((b) => b.setAttribute("aria-pressed", b.classList.contains("active")));
  $("#spread-select").value = state.spread;
  $("#view-seg").hidden = state.spread === "free";
}

function refreshOpenViews() {
  if ($("#hand-dialog").open) renderHand();
  if ($("#detail-dialog").open) renderDetail();
}

function setArt(mode) {
  state.art = mode;
  prefs.set(KEYS.art, mode);
  syncControls();
  renderMain();
  refreshOpenViews();
}

function setCtx(ctx) {
  state.ctx = ctx;
  prefs.set(KEYS.ctx, ctx);
  syncControls();
  refreshOpenViews();
}

function cycleCtx() {
  const i = CONTEXTS.findIndex((c) => c.id === state.ctx);
  const next = CONTEXTS[(i + 1) % CONTEXTS.length];
  setCtx(next.id);
  toast(`Context: ${next.label}`);
}

function setView(view) {
  state.view = view;
  prefs.set(KEYS.view, view);
  syncControls();
  renderHand();
}

function setSpread(id) {
  if (!SPREAD_BY_ID.has(id)) return;
  state.spread = id;
  state.pendingSlot = null;
  // A free hand has no positions, so drop any empty-slot placeholders.
  if (!SPREAD_BY_ID.get(id).positions.length) state.hand = state.hand.filter(Boolean);
  prefs.set(KEYS.spread, id);
  syncControls();
  updateBadge();
  renderHand();
}

/* ---------- hand operations ---------- */

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove("show"), 1800);
}

function updateBadge() {
  const n = handCount();
  const total = currentSpread().positions.length;
  $("#hand-count").textContent = total ? `${n}/${total}` : n;
  $("#hand-btn").classList.toggle("has-cards", n > 0);
}

function toggleCard(id) {
  const i = handIndex(id);
  const card = CARD_BY_ID.get(id);
  const spread = currentSpread();

  if (i === -1) {
    let slot = state.pendingSlot;
    state.pendingSlot = null;

    // No explicit slot: use the first gap in the spread, then append.
    if (slot === null && spread.positions.length) {
      const gap = state.hand.findIndex((h, idx) => idx < spread.positions.length && !h);
      if (gap !== -1) slot = gap;
    }
    // A pending slot can only be stale if the spread changed underneath it.
    if (slot !== null && state.hand[slot]) slot = null;

    if (slot !== null) {
      while (state.hand.length < slot) state.hand.push(null);
      state.hand[slot] = { id, rev: false };
      const pos = spread.positions[slot];
      toast(pos ? `Added ${card.name} as ${pos.name}` : `Added ${card.name}`);
    } else {
      state.hand.push({ id, rev: false });
      const pos = spread.positions[state.hand.length - 1];
      toast(pos ? `Added ${card.name} as ${pos.name}` : `Added ${card.name}`);
    }
  } else {
    // In a spread, leave the position empty rather than shifting later cards.
    if (spread.positions.length) state.hand[i] = null;
    else state.hand.splice(i, 1);
    trimHand();
    toast(`Removed ${card.name}`);
  }
  handChanged();
}

function handChanged() {
  saveHand();
  syncTiles();
  updateBadge();
  refreshOpenViews();
  if (state.tab === "combos") renderCombosTab($("#main")); // refresh highlighting
}

function syncTiles() {
  $$(".tile").forEach((tile) => {
    const id = tile.dataset.id;
    const on = inHand(id);
    const name = CARD_BY_ID.get(id).name;
    tile.classList.toggle("in-hand", on);
    const btn = $(".tile-add", tile);
    btn.textContent = on ? "✓" : "+";
    btn.setAttribute("aria-pressed", on);
    btn.setAttribute("aria-label", `${on ? "Remove" : "Add"} ${name} ${on ? "from" : "to"} hand`);
    btn.title = on ? "Remove from hand" : "Add to hand";
  });
}

function moveInHand(id, delta) {
  const i = handIndex(id);
  const j = i + delta;
  if (i === -1 || j < 0 || j >= state.hand.length) return;
  [state.hand[i], state.hand[j]] = [state.hand[j], state.hand[i]];
  trimHand();
  handChanged();
}

function flipInHand(id) {
  const h = state.hand[handIndex(id)];
  if (!h) return;
  h.rev = !h.rev;
  handChanged();
}

function clearHand() {
  if (!handCount()) return;
  if (!confirm("Clear the entire hand?")) return;
  state.hand = [];
  state.pendingSlot = null;
  handChanged();
}

function handAsText() {
  const spread = currentSpread();
  const ctx = CONTEXTS.find((c) => c.id === state.ctx);
  const lines = [];
  if (spread.positions.length) lines.push(`Spread: ${spread.name}`);
  if (state.ctx !== "general") lines.push(`Context: ${ctx.label}`);
  if (state.ctx === "health") lines.push("Health readings are symbolic reflections on wellbeing, not medical advice.");
  if (lines.length) lines.push("");

  state.hand.forEach((h, i) => {
    if (!h) return;
    const c = CARD_BY_ID.get(h.id);
    const pos = spread.positions.length ? (spread.positions[i] ? `${spread.positions[i].name}: ` : "Extra: ") : "";
    const yn = ynFor(c, h.rev);
    lines.push(
      `${i + 1}. ${pos}${c.name}${h.rev ? " (reversed)" : ""}${yn ? ` [${YN_LABEL[yn]}]` : ""}\n   ${meaningFor(c, h.rev)}`
    );
  });
  const combos = findCombos(state.hand.filter(Boolean));
  if (combos.length) {
    lines.push("", "Combinations:");
    combos.forEach((c) => lines.push(`- ${c.name}: ${c.text}`));
  }
  return lines.join("\n");
}

async function copyHand() {
  if (!state.hand.some(Boolean)) return;
  try {
    await navigator.clipboard.writeText(handAsText());
    toast("Reading copied to clipboard");
  } catch {
    toast("Could not access the clipboard");
  }
}

function ynTally() {
  const t = { yes: 0, no: 0, maybe: 0 };
  state.hand.forEach((h) => {
    if (!h) return;
    const v = ynFor(CARD_BY_ID.get(h.id), h.rev);
    if (v) t[v]++;
  });
  return t;
}

/* ---------- hand dialog ---------- */

function handRowHTML(h, i, spread) {
  const c = CARD_BY_ID.get(h.id);
  const pos = spread.positions[i];
  const posLine = spread.positions.length
    ? pos
      ? `<p class="posname">${pos.name} <span>${pos.hint}</span></p>`
      : `<p class="posname extra">Extra card</p>`
    : "";
  const q = c.extra ? `<p class="ask">Ask: ${c.extra.question}</p>` : "";
  return (
    `<li class="hand-row" data-id="${c.id}">` +
    `<button class="mini" data-open="${c.id}" data-from="hand" aria-label="View ${c.name}">${faceHTML(c, h.rev)}</button>` +
    `<div class="hand-info">` +
    posLine +
    `<h3><span class="pos">${i + 1}</span> ${c.name} <span class="orient ${h.rev ? "rev" : ""}">${h.rev ? "Reversed" : "Upright"}</span> ${ynBadge(c, h.rev)}</h3>` +
    `<p class="kw">${c.keywords.join(" · ")}${c.corr ? ` · <span class="corr">${c.corr}</span>` : ""}</p>` +
    `<p>${meaningFor(c, h.rev)}</p>` +
    q +
    `</div>` +
    `<div class="row-actions">` +
    `<button data-flip="${c.id}" title="Flip orientation" aria-label="Flip ${c.name}">⟲ <span>Flip</span></button>` +
    `<button data-left="${c.id}" title="Move earlier" aria-label="Move ${c.name} earlier" ${i === 0 ? "disabled" : ""}>↑</button>` +
    `<button data-right="${c.id}" title="Move later" aria-label="Move ${c.name} later" ${i === state.hand.length - 1 ? "disabled" : ""}>↓</button>` +
    `<button data-remove="${c.id}" title="Remove" aria-label="Remove ${c.name}">✕</button>` +
    `</div>` +
    `</li>`
  );
}

function emptySlotRowHTML(i, pos) {
  return (
    `<li class="hand-row empty-slot"><button class="slot-fill" data-empty="${i}">` +
    `<span class="pos">${i + 1}</span><span><b>${pos.name}</b> <span class="muted">${pos.hint}</span></span>` +
    `<span class="muted">Empty · choose a card</span></button></li>`
  );
}

function layoutHTML(spread) {
  const cells = spread.positions
    .map((p, i) => {
      const at = `grid-column:${p.col};grid-row:${p.row}`;
      const rot = p.rot ? " rot" : "";
      const label = p.rot ? "" : `<span class="slot-name">${p.name}</span>`;
      const h = state.hand[i];
      if (h) {
        const c = CARD_BY_ID.get(h.id);
        return (
          `<div class="slot filled${rot}" style="${at}" title="${p.name}: ${c.name}${h.rev ? " (reversed)" : ""}">` +
          `<button class="mini" data-open="${c.id}" data-from="hand" aria-label="${p.name}: ${c.name}">${faceHTML(c, h.rev)}</button>` +
          `<span class="slot-num">${i + 1}</span>${label}</div>`
        );
      }
      return (
        `<button class="slot empty${rot}" style="${at}" data-empty="${i}" title="${p.name}: ${p.hint}">` +
        `<span class="slot-box"></span><span class="slot-num">${i + 1}</span>${label}</button>`
      );
    })
    .join("");
  const crossNote = spread.positions.some((p) => p.rot)
    ? `<p class="muted layout-note">The crossing card (2) lies over the present card (1).</p>`
    : "";
  return `<div class="spread-scroll"><div class="spread-grid" style="--cols:${spread.cols}">${cells}</div></div>${crossNote}`;
}

function renderHand() {
  const body = $("#hand-body");
  const spread = currentSpread();
  const n = handCount();
  const total = spread.positions.length;
  const inSpread = state.hand.filter((h, i) => i < total && h).length;
  const extras = state.hand.map((h, i) => ({ h, i })).filter((x) => x.i >= total && x.h);

  $("#hand-title-count").textContent = total ? `${n} / ${total} cards` : n ? `${n} card${n === 1 ? "" : "s"}` : "empty";
  $("#hand-copy").disabled = !n;
  $("#hand-clear").disabled = !n;
  syncControls();

  const intro = total
    ? `<p class="spread-blurb"><b>${spread.name}.</b> ${spread.blurb} Cards fill the positions in order.</p>`
    : "";
  const healthNote =
    state.ctx === "health"
      ? `<p class="health-note">Health readings are symbolic reflections on wellbeing, not medical advice.</p>`
      : "";

  if (!n && !total) {
    body.innerHTML =
      healthNote +
      `<div class="empty-hand"><p>Your hand is empty.</p>` +
      `<p class="muted">Use the <b>+</b> on any card to draw it into the reading, or pick a spread above.</p></div>`;
    return;
  }

  const showLayout = total && state.view === "layout";
  let main;
  if (showLayout) {
    main = layoutHTML(spread);
    if (extras.length) {
      main += `<h3 class="section-h">Extra cards</h3><ol class="hand-list" start="${total + 1}">${extras
        .map(({ h, i }) => handRowHTML(h, i, spread))
        .join("")}</ol>`;
    }
    if (inSpread) {
      main += `<h3 class="section-h">Readings</h3><ol class="hand-list">${state.hand
        .map((h, i) => (i < total && h ? handRowHTML(h, i, spread) : ""))
        .join("")}</ol>`;
    }
  } else {
    const rows = [];
    const len = Math.max(state.hand.length, total);
    for (let i = 0; i < len; i++) {
      const h = state.hand[i];
      if (h) rows.push(handRowHTML(h, i, spread));
      else if (i < total) rows.push(emptySlotRowHTML(i, spread.positions[i]));
    }
    main = `<ol class="hand-list">${rows.join("")}</ol>`;
  }

  let tally = "";
  if (n && state.hand.some((h) => h && ynFor(CARD_BY_ID.get(h.id), h.rev))) {
    const t = ynTally();
    tally =
      `<p class="tally"><span class="muted">Yes/no lean:</span> ` +
      `<span class="yn yn-yes">${t.yes} yes</span> <span class="yn yn-no">${t.no} no</span> <span class="yn yn-maybe">${t.maybe} maybe</span></p>`;
  }

  const combos = findCombos(state.hand.filter(Boolean));
  const comboBlock = combos.length
    ? `<section class="hand-combos"><h3>Combinations in this reading</h3><div class="combo-list">${combos.map((c) => comboHTML(c, false)).join("")}</div></section>`
    : n > 1
      ? `<section class="hand-combos"><h3>Combinations in this reading</h3><p class="muted">None of the known combinations appear in this hand.</p></section>`
      : "";

  body.innerHTML = intro + healthNote + tally + main + comboBlock;
}

function openHand() {
  state.pendingSlot = null;
  renderHand();
  const d = $("#hand-dialog");
  if (!d.open) d.showModal();
}

function fillEmptySlot(i) {
  const pos = currentSpread().positions[i];
  if (!pos) return;
  state.pendingSlot = i;
  $("#hand-dialog").close();
  toast(`Pick a card for: ${pos.name}`);
}

/* ---------- detail dialog ---------- */

// Navigation list for the currently open detail dialog.
let detailNav = [];

function openDetail(id, list) {
  detailNav = list && list.includes(id) ? list : state.navList.includes(id) ? [...state.navList] : [id];
  state.navIndex = detailNav.indexOf(id);
  renderDetail();
  const d = $("#detail-dialog");
  if (!d.open) d.showModal();
}

function detailStep(delta) {
  if (!detailNav.length) return;
  state.navIndex = (state.navIndex + delta + detailNav.length) % detailNav.length;
  renderDetail();
}

function renderDetail() {
  const id = detailNav[state.navIndex];
  const card = CARD_BY_ID.get(id);
  const on = inHand(id);
  const related = COMBOS.filter((c) => c.cards.includes(id));

  const relatedHTML = related.length
    ? `<h3>Combinations</h3><ul class="related">${related
        .map((c) => {
          const others = c.cards
            .filter((x) => x !== id)
            .map((x) => CARD_BY_ID.get(x).name)
            .join(" + ");
          return `<li class="kind-${c.kind}"><b>${c.name}</b> <span class="muted">with ${others}</span><br>${c.text}</li>`;
        })
        .join("")}</ul>`
    : "";

  const yn = card.extra
    ? `<div class="yn-row"><span>Upright ${ynBadge(card, false)}</span><span>Reversed ${ynBadge(card, true)}</span></div>`
    : "";
  const reflect = card.extra ? `<h3>Reflect</h3><p class="ask">${card.extra.question}</p>` : "";
  const ctxLabel = state.ctx === "general" ? "" : ` <small>${CONTEXTS.find((c) => c.id === state.ctx).label}</small>`;
  const healthNote =
    state.ctx === "health"
      ? `<p class="health-note">Health readings are symbolic reflections on wellbeing, not medical advice.</p>`
      : "";

  $("#detail-body").innerHTML =
    `<div class="detail-card">${faceHTML(card)}</div>` +
    `<div class="detail-text">` +
    `<p class="eyebrow">${cardCategory(card)}${card.corr ? ` · ${card.corr}` : ""}</p>` +
    `<h2>${card.name}</h2>` +
    `<ul class="chips kw-chips">${card.keywords.map((k) => `<li class="chip static">${k}</li>`).join("")}</ul>` +
    `<h3>Upright${ctxLabel}</h3><p>${meaningFor(card, false)}</p>` +
    `<h3>Reversed${ctxLabel}</h3><p>${meaningFor(card, true)}</p>` +
    healthNote +
    (yn ? `<h3>Yes / no</h3>${yn}` : "") +
    reflect +
    relatedHTML +
    `</div>`;

  const addBtn = $("#detail-add");
  addBtn.textContent = on ? "✓ In hand · remove" : "+ Add to hand";
  addBtn.classList.toggle("on", on);
  addBtn.dataset.toggle = id;

  const multi = detailNav.length > 1;
  $("#detail-prev").disabled = !multi;
  $("#detail-next").disabled = !multi;
  $("#detail-pos").textContent = multi ? `${state.navIndex + 1} / ${detailNav.length}` : "";
}

/* ---------- events ---------- */

document.addEventListener("click", (e) => {
  const t = e.target;

  // click on dialog backdrop closes it
  if (t instanceof HTMLDialogElement) {
    t.close();
    return;
  }

  const tab = t.closest("[data-tab]");
  if (tab) {
    location.hash = tab.dataset.tab;
    return;
  }

  const art = t.closest("[data-art]");
  if (art) return setArt(art.dataset.art);

  const ctx = t.closest("[data-ctx]");
  if (ctx) return setCtx(ctx.dataset.ctx);

  const view = t.closest("[data-view]");
  if (view) return setView(view.dataset.view);

  const empty = t.closest("[data-empty]");
  if (empty) return fillEmptySlot(Number(empty.dataset.empty));

  const open = t.closest("[data-open]");
  if (open) {
    // from the hand dialog, browse through the hand; otherwise the visible list
    const list = open.dataset.from === "hand" ? state.hand.filter(Boolean).map((h) => h.id) : null;
    openDetail(open.dataset.open, list);
    return;
  }

  const toggle = t.closest("[data-toggle]");
  if (toggle) return toggleCard(toggle.dataset.toggle);

  const flip = t.closest("[data-flip]");
  if (flip) return flipInHand(flip.dataset.flip);

  const left = t.closest("[data-left]");
  if (left) return moveInHand(left.dataset.left, -1);

  const right = t.closest("[data-right]");
  if (right) return moveInHand(right.dataset.right, 1);

  const remove = t.closest("[data-remove]");
  if (remove) return toggleCard(remove.dataset.remove);

  const close = t.closest("[data-close]");
  if (close) return close.closest("dialog").close();
});

$("#hand-btn").addEventListener("click", openHand);
$("#hand-clear").addEventListener("click", clearHand);
$("#hand-copy").addEventListener("click", copyHand);
$("#detail-prev").addEventListener("click", () => detailStep(-1));
$("#detail-next").addEventListener("click", () => detailStep(1));
$("#spread-select").addEventListener("change", (e) => setSpread(e.target.value));

$("#search").addEventListener("input", (e) => {
  state.query = e.target.value;
  renderMain();
});

window.addEventListener("hashchange", () => setTab(location.hash.slice(1)));

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const typing = e.target.matches("input, textarea, select");

  if (typing) {
    if (e.key === "Escape" && e.target.matches("input")) {
      if (e.target.value) {
        e.target.value = "";
        state.query = "";
        renderMain();
      } else {
        e.target.blur();
      }
    }
    return;
  }

  if (e.key === "v") return setArt(state.art === "art" ? "symbols" : "art");
  if (e.key === "c") return cycleCtx();

  const detail = $("#detail-dialog");
  const hand = $("#hand-dialog");

  if (detail.open) {
    if (e.key === "ArrowLeft") detailStep(-1);
    else if (e.key === "ArrowRight") detailStep(1);
    else if (e.key === "a") toggleCard(detailNav[state.navIndex]);
    return;
  }

  if (hand.open) {
    if (e.key === "h") hand.close();
    return;
  }

  if (e.key === "/") {
    e.preventDefault();
    $("#search").focus();
  } else if (e.key === "h") {
    openHand();
  } else if (/^[1-7]$/.test(e.key)) {
    location.hash = TABS[Number(e.key) - 1].id;
  }
});

/* ---------- init ---------- */

$("#spread-select").innerHTML = SPREADS.map(
  (s) => `<option value="${s.id}">${s.name}${s.positions.length ? ` (${s.positions.length})` : ""}</option>`
).join("");

syncControls();
updateBadge();
setTab(location.hash.slice(1), { scroll: false });

/* ---------- offline support (needs http/https, not file://) ---------- */

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker
    .register("sw.js")
    .then(() => navigator.serviceWorker.ready)
    .then(() => {
      if (!prefs.get(KEYS.offline, "")) {
        prefs.set(KEYS.offline, "1");
        toast("Ready to use offline");
      }
    })
    .catch(() => {});
}
