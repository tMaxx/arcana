"use strict";

/* ------------------------------------------------------------------ *
 * Static database of card combinations to watch for.
 * kind: "good" (favourable) | "warn" (caution) | "mixed" (depends on context)
 * A combo is active when ALL of its cards are in the hand, in any
 * order and in any orientation.
 * ------------------------------------------------------------------ */

const COMBOS = [
  // ---- Major + Major ----
  { cards: ["death", "tower"], kind: "warn", name: "Total upheaval",
    text: "Sudden, dramatic change that cannot be reversed. A structure collapses and an old chapter ends. Painful, but the clearing is necessary." },
  { cards: ["wheel-of-fortune", "tower"], kind: "warn", name: "Fate intervenes",
    text: "A sudden twist of fortune you did not see coming. Expect events to move outside your control." },
  { cards: ["devil", "tower"], kind: "mixed", name: "Chains broken by crisis",
    text: "A crisis shatters an unhealthy bond, habit or illusion. Disruptive, but it may be the only way out." },
  { cards: ["lovers", "devil"], kind: "warn", name: "Obsessive attachment",
    text: "Passion tipping into possessiveness, dependency or temptation. Check whether this is love or compulsion." },
  { cards: ["lovers", "hierophant"], kind: "good", name: "Committed union",
    text: "A relationship moving toward formal commitment: engagement, marriage, or a vow publicly recognised." },
  { cards: ["empress", "emperor"], kind: "good", name: "Power couple",
    text: "Nurture and structure in balance. A stable, productive partnership or a household that thrives." },
  { cards: ["magician", "high-priestess"], kind: "good", name: "Will meets intuition",
    text: "Conscious action aligned with inner knowing. Skill and insight working together." },
  { cards: ["chariot", "strength"], kind: "good", name: "Disciplined victory",
    text: "Success through composure rather than force. Willpower guided by patience." },
  { cards: ["sun", "moon"], kind: "mixed", name: "Truth against illusion",
    text: "Clarity and confusion pull against each other. What looks bright may hide something; what looks murky may soon resolve." },
  { cards: ["star", "sun"], kind: "good", name: "Healing and clarity",
    text: "Hope turns into visible results. A strongly positive pairing for recovery and renewed confidence." },
  { cards: ["star", "moon"], kind: "mixed", name: "Hope through the fog",
    text: "Faith is tested by uncertainty. Keep your direction even when the path is hard to see." },
  { cards: ["sun", "world"], kind: "good", name: "Triumphant completion",
    text: "A goal achieved in full, and recognised. Success, celebration and closure." },
  { cards: ["fool", "world"], kind: "good", name: "Full circle",
    text: "One cycle ends as another begins. Completion flowing straight into a new adventure." },
  { cards: ["fool", "death"], kind: "mixed", name: "Fresh start after an ending",
    text: "Something must end before the new journey begins. Let go of the old to travel light." },
  { cards: ["death", "judgement"], kind: "mixed", name: "Rebirth",
    text: "Deep transformation and a call to rise renewed. Reflect on what you are leaving behind." },
  { cards: ["justice", "judgement"], kind: "mixed", name: "Reckoning",
    text: "Accountability arrives. Past actions are weighed and consequences, good or bad, are delivered." },
  { cards: ["hermit", "hanged-man"], kind: "mixed", name: "Deep pause",
    text: "Withdrawal and suspension. A time for reflection, but watch for stagnation if it drags on." },
  { cards: ["hanged-man", "swords-2"], kind: "warn", name: "Stalemate",
    text: "Stuck between options and unwilling to move. Indecision is itself becoming the decision." },
  { cards: ["temperance", "devil"], kind: "warn", name: "Moderation versus excess",
    text: "A struggle between balance and indulgence. Examine habits, appetites and dependencies." },

  // ---- Major + Minor ----
  { cards: ["magician", "wands-ace"], kind: "good", name: "Creative ignition",
    text: "A spark of inspiration with the skill to act on it. Start the project now." },
  { cards: ["justice", "swords-ace"], kind: "good", name: "Clear verdict",
    text: "Truth is established and a fair decision becomes possible. Good for legal and ethical questions." },
  { cards: ["moon", "swords-9"], kind: "warn", name: "Night terrors",
    text: "Anxiety fed by imagination. Fears feel real but are largely unverified. Seek light and perspective." },
  { cards: ["moon", "swords-7"], kind: "warn", name: "Deception",
    text: "Hidden agendas, half-truths or self-deception. Verify before you trust." },
  { cards: ["devil", "swords-7"], kind: "warn", name: "Dishonest dealings",
    text: "Manipulation, temptation to cheat, or being cheated. Guard your interests." },
  { cards: ["hermit", "cups-8"], kind: "mixed", name: "Soul-searching departure",
    text: "Walking away from the familiar to look for deeper meaning. Solitary, but purposeful." },
  { cards: ["tower", "swords-knight"], kind: "warn", name: "Reckless collision",
    text: "A rash action or blunt words trigger an explosion. Think before charging ahead." },
  { cards: ["empress", "pentacles-queen"], kind: "good", name: "Abundant home",
    text: "Nurturing, comfort and practical prosperity. Home, family or a creative project flourishes." },

  // ---- Minor + Minor ----
  { cards: ["swords-3", "swords-10"], kind: "warn", name: "Heartbreak and ruin",
    text: "Pain reaching its lowest point. Betrayal or loss that feels final, though the worst is passing." },
  { cards: ["cups-5", "swords-3"], kind: "warn", name: "Deep grief",
    text: "Sorrow and mourning. Allow the feelings, but remember that something remains." },
  { cards: ["cups-4", "cups-8"], kind: "mixed", name: "Discontent becomes departure",
    text: "Boredom and apathy hardening into the decision to leave. Make sure you are leaving toward something." },
  { cards: ["cups-3", "cups-10"], kind: "good", name: "Joyful gathering",
    text: "Celebration with friends and family. Strong bonds, reunions and shared happiness." },
  { cards: ["cups-2", "lovers"], kind: "good", name: "Soulful connection",
    text: "A deep, mutual bond with real chemistry. Love is returned in equal measure." },
  { cards: ["cups-page", "cups-ace"], kind: "good", name: "Message of love",
    text: "A heartfelt invitation, confession or new emotional beginning. Open your heart to the news." },
  { cards: ["wands-ace", "wands-8"], kind: "good", name: "Quick start",
    text: "An idea moves into action fast. News arrives, plans accelerate." },
  { cards: ["pentacles-10", "pentacles-king"], kind: "good", name: "Established wealth",
    text: "Financial security, inheritance or a lasting legacy with sound stewardship." },
  { cards: ["swords-5", "wands-5"], kind: "warn", name: "Open hostility",
    text: "Competition turned hostile. Winning may cost more than it is worth." },
  { cards: ["swords-8", "swords-9"], kind: "warn", name: "Trapped by worry",
    text: "Fear and self-imposed limits feeding each other. The cage is largely mental: look for the loose ropes." },
  { cards: ["pentacles-5", "cups-5"], kind: "warn", name: "Loss on all fronts",
    text: "Material hardship alongside emotional grief. Reach out for support rather than carrying it alone." },
  { cards: ["wands-10", "pentacles-8"], kind: "mixed", name: "Heavy workload",
    text: "Relentless effort and responsibility. Productive, but a burnout risk if not paced." },

  // ---- Triples ----
  { cards: ["death", "tower", "swords-10"], kind: "warn", name: "Complete collapse",
    text: "Endings, upheaval and ruin stacked together. A decisive, irreversible break. Expect hard times, but also the end of a long struggle." },
  { cards: ["moon", "swords-7", "devil"], kind: "warn", name: "Web of illusion",
    text: "Deception, temptation and confusion converge. Someone, possibly you, is not telling the whole truth." },
  { cards: ["sun", "star", "world"], kind: "good", name: "Radiant fulfilment",
    text: "Hope, joy and completion together. A rare, strongly positive alignment." },
];

/* ------------------------------------------------------------------ *
 * Pattern rules, evaluated against the current hand.
 * ------------------------------------------------------------------ */

const RANK_THEMES = {
  ace: "Seeds of new beginnings are appearing in several areas at once.",
  2: "Choices, partnerships and balance are a recurring theme.",
  3: "Growth, collaboration and first results.",
  4: "Stability, or stagnation. Foundations are being tested.",
  5: "Conflict, loss and challenge dominate. Change is being forced.",
  6: "Harmony, healing and movement toward calmer ground.",
  7: "Reassessment and perseverance. Your resolve is being tested.",
  8: "Movement, mastery and focused effort.",
  9: "Nearing completion. Solitary resolve, with results close at hand.",
  10: "Culmination. Endings that may feel heavy or fulfilling.",
  page: "Messages, news and new learning arrive, or immature energy surrounds the situation.",
  knight: "Things are in motion, perhaps too fast. Watch for haste.",
  queen: "Several mature, nurturing influences are involved.",
  king: "Authority figures and mastery. Power dynamics matter.",
};

const SUIT_THEMES = {
  wands: "Fire dominates: action, passion and ambition. Energy is high; watch for burnout and impulsiveness.",
  cups: "Water dominates: emotions, relationships and intuition are the heart of the matter.",
  swords: "Air dominates: thoughts, communication and conflict. Clarity is possible, and so is mental strain.",
  pentacles: "Earth dominates: practical matters like work, money, health and long-term stability.",
};

/* Human-readable list of the rules, shown on the Combinations tab. */
const PATTERN_RULES = [
  "Two or more cards of the same rank (for example, two Fives or two Knights).",
  "Three or more court cards (Page, Knight, Queen, King) in one hand.",
  "A hand dominated by Major Arcana (at least three, and at least half the hand).",
  "A hand dominated by one suit (at least three, and at least half the hand).",
  "A hand dominated by reversed cards (at least three, and at least half the hand).",
];

/**
 * Find every active combination for a hand.
 * @param {{id: string, rev: boolean}[]} hand
 * @returns {{cards: string[], kind: string, name: string, text: string, pattern?: boolean}[]}
 */
function findCombos(hand) {
  const ids = new Set(hand.map((h) => h.id));
  const found = COMBOS.filter((c) => c.cards.every((id) => ids.has(id)));
  return found.concat(findPatterns(hand));
}

function findPatterns(hand) {
  const out = [];
  const cards = hand.map((h) => CARD_BY_ID.get(h.id)).filter(Boolean);
  const n = cards.length;
  if (n < 2) return out;

  // Same rank
  const byRank = {};
  cards.filter((c) => c.arcana === "minor").forEach((c) => {
    (byRank[c.rank] = byRank[c.rank] || []).push(c);
  });
  RANKS.forEach((r) => {
    const group = byRank[r.key];
    if (group && group.length >= 2) {
      out.push({
        cards: group.map((c) => c.id),
        kind: "mixed",
        pattern: true,
        name: `${group.length}x ${r.name}${group.length > 1 ? "s" : ""}`,
        text: RANK_THEMES[r.key],
      });
    }
  });

  // Many courts
  const courts = cards.filter((c) => ["page", "knight", "queen", "king"].includes(c.rank));
  if (courts.length >= 3) {
    out.push({
      cards: courts.map((c) => c.id),
      kind: "mixed",
      pattern: true,
      name: "Crowded stage",
      text: "Many court cards: several people are involved in the situation, or you are playing several roles.",
    });
  }

  // Major dominance
  const majors = cards.filter((c) => c.arcana === "major");
  if (majors.length >= 3 && majors.length * 2 >= n) {
    out.push({
      cards: majors.map((c) => c.id),
      kind: "mixed",
      pattern: true,
      name: "Major-heavy hand",
      text: "Strong presence of Major Arcana: significant, fated or life-shaping themes that go beyond everyday events.",
    });
  }

  // Suit dominance
  SUIT_ORDER.forEach((suit) => {
    const group = cards.filter((c) => c.suit === suit);
    if (group.length >= 3 && group.length * 2 >= n) {
      out.push({
        cards: group.map((c) => c.id),
        kind: "mixed",
        pattern: true,
        name: `${SUITS[suit].name} dominate`,
        text: SUIT_THEMES[suit],
      });
    }
  });

  // Reversed dominance
  const reversed = hand.filter((h) => h.rev);
  if (reversed.length >= 3 && reversed.length * 2 >= n) {
    out.push({
      cards: reversed.map((h) => h.id),
      kind: "mixed",
      pattern: true,
      name: "Reversal-heavy hand",
      text: "Many reversed cards: energy is blocked, internalised or delayed. Look at what is being held back.",
    });
  }

  return out;
}
