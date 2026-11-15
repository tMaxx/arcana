"use strict";

/* ------------------------------------------------------------------ *
 * Static card database: structure only.
 * Card prose lives in js/extra/ (short.js, context files, deep/, combined/).
 * Interpretations follow the common Rider-Waite-Smith tradition.
 * Major Arcana glyphs are the Golden Dawn astrological correspondences.
 * ------------------------------------------------------------------ */

const SUITS = {
  wands: {
    name: "Wands",
    element: "Fire",
    blurb: "Passion, ambition, creativity and action. The spark that sets things moving.",
  },
  cups: {
    name: "Cups",
    element: "Water",
    blurb: "Emotion, intuition, relationships and the inner life.",
  },
  swords: {
    name: "Swords",
    element: "Air",
    blurb: "Thought, truth, communication and conflict. The double-edged mind.",
  },
  pentacles: {
    name: "Pentacles",
    element: "Earth",
    blurb: "Work, money, body, home and the material world.",
  },
};
const SUIT_ORDER = ["wands", "cups", "swords", "pentacles"];

const RANKS = [
  { key: "ace", name: "Ace", label: "A" },
  { key: "2", name: "Two", label: "2" },
  { key: "3", name: "Three", label: "3" },
  { key: "4", name: "Four", label: "4" },
  { key: "5", name: "Five", label: "5" },
  { key: "6", name: "Six", label: "6" },
  { key: "7", name: "Seven", label: "7" },
  { key: "8", name: "Eight", label: "8" },
  { key: "9", name: "Nine", label: "9" },
  { key: "10", name: "Ten", label: "10" },
  { key: "page", name: "Page", label: "Pg" },
  { key: "knight", name: "Knight", label: "Kn" },
  { key: "queen", name: "Queen", label: "Q" },
  { key: "king", name: "King", label: "K" },
];

const ROMAN = [
  "0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI",
  "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI",
];

/* [id, name, glyph, keywords, upright, reversed] — index = card number */
const MAJOR_DATA = [
  ["fool", "The Fool", "♅", "beginnings, innocence, leap of faith, spontaneity"],
  ["magician", "The Magician", "☿", "manifestation, willpower, skill, resourcefulness"],
  ["high-priestess", "The High Priestess", "☽", "intuition, mystery, inner knowing, the subconscious"],
  ["empress", "The Empress", "♀", "abundance, nurturing, fertility, nature"],
  ["emperor", "The Emperor", "♈", "authority, structure, stability, leadership"],
  ["hierophant", "The Hierophant", "♉", "tradition, conformity, spiritual guidance, institutions"],
  ["lovers", "The Lovers", "♊", "love, union, alignment, choices"],
  ["chariot", "The Chariot", "♋", "determination, victory, control, momentum"],
  ["strength", "Strength", "♌", "courage, compassion, patience, inner strength"],
  ["hermit", "The Hermit", "♍", "solitude, introspection, guidance, search"],
  ["wheel-of-fortune", "Wheel of Fortune", "♃", "cycles, fate, turning point, luck"],
  ["justice", "Justice", "♎", "fairness, truth, cause and effect, law"],
  ["hanged-man", "The Hanged Man", "♆", "surrender, pause, new perspective, sacrifice"],
  ["death", "Death", "♏", "endings, transformation, transition, release"],
  ["temperance", "Temperance", "♐", "balance, moderation, patience, harmony"],
  ["devil", "The Devil", "♑", "bondage, shadow, temptation, materialism"],
  ["tower", "The Tower", "♂", "upheaval, sudden change, revelation, collapse"],
  ["star", "The Star", "♒", "hope, healing, renewal, inspiration"],
  ["moon", "The Moon", "♓", "illusion, intuition, uncertainty, dreams"],
  ["sun", "The Sun", "☉", "joy, success, vitality, clarity"],
  ["judgement", "Judgment", "♇", "reckoning, rebirth, calling, absolution"],
  ["world", "The World", "♄", "completion, integration, achievement, wholeness"],
];

/* Per suit, in RANKS order: [keywords, upright, reversed] */
const MINOR_DATA = {
  wands: [
    "inspiration, new spark, potential, drive",
    "planning, decisions, discovery, the future",
    "expansion, foresight, progress, horizons",
    "celebration, home, harmony, milestone",
    "conflict, competition, tension, rivalry",
    "victory, recognition, pride, success",
    "defense, perseverance, standing ground, challenge",
    "speed, movement, news, momentum",
    "resilience, persistence, last stand, wariness",
    "burden, responsibility, overload, hard work",
    "curiosity, enthusiasm, messages, exploration",
    "passion, adventure, impulsiveness, energy",
    "confidence, warmth, charisma, determination",
    "vision, leadership, boldness, honor",
  ],
  cups: [
    "love, new feelings, compassion, overflowing joy",
    "partnership, union, attraction, mutual respect",
    "friendship, celebration, community, joy",
    "apathy, contemplation, boredom, reevaluation",
    "loss, grief, regret, disappointment",
    "nostalgia, memories, innocence, kindness",
    "fantasy, choices, illusion, wishful thinking",
    "walking away, disillusion, seeking meaning, withdrawal",
    "wishes granted, contentment, satisfaction, gratitude",
    "harmony, family, fulfillment, alignment",
    "creativity, sensitivity, intuition, messages of love",
    "romance, charm, imagination, invitation",
    "compassion, calm, emotional security, intuition",
    "emotional balance, diplomacy, control, generosity",
  ],
  swords: [
    "clarity, truth, breakthrough, justice",
    "indecision, stalemate, blocked emotions, denial",
    "heartbreak, grief, sorrow, painful truth",
    "rest, recovery, contemplation, retreat",
    "conflict, defeat, win at all costs, betrayal",
    "transition, moving on, calmer waters, healing",
    "deception, strategy, stealth, evasion",
    "restriction, feeling trapped, self-imposed limits, victim mindset",
    "anxiety, nightmares, worry, guilt",
    "ruin, rock bottom, endings, betrayal",
    "curiosity, vigilance, new ideas, communication",
    "ambition, action, drive, haste",
    "clear mind, independence, directness, perception",
    "intellectual power, authority, truth, ethics",
  ],
  pentacles: [
    "opportunity, prosperity, new venture, abundance",
    "balance, adaptability, juggling, priorities",
    "teamwork, craft, collaboration, skill",
    "security, control, saving, possessiveness",
    "hardship, poverty, isolation, worry",
    "generosity, charity, sharing, balance",
    "patience, assessment, long-term effort, investment",
    "apprenticeship, diligence, mastery, detail",
    "luxury, independence, self-sufficiency, refinement",
    "legacy, wealth, family, inheritance",
    "ambition, study, manifestation, new skills",
    "reliability, routine, patience, hard work",
    "nurturing, practicality, abundance, homeliness",
    "wealth, security, discipline, stewardship",
  ],
};

/* ------------------------------------------------------------------ *
 * Build the flat card list
 * ------------------------------------------------------------------ */

const splitKeywords = (s) => s.split(",").map((k) => k.trim());

const CARDS = [];

MAJOR_DATA.forEach(([id, name, glyph, kw], i) => {
  CARDS.push({
    id,
    arcana: "major",
    suit: null,
    number: i,
    label: ROMAN[i],
    name,
    glyph,
    keywords: splitKeywords(kw),
  });
});

SUIT_ORDER.forEach((suit) => {
  RANKS.forEach((rank, i) => {
    CARDS.push({
      id: `${suit}-${rank.key}`,
      arcana: "minor",
      suit,
      rank: rank.key,
      number: i + 1,
      label: rank.label,
      name: `${rank.name} of ${SUITS[suit].name}`,
      keywords: splitKeywords(MINOR_DATA[suit][i]),
    });
  });
});

const CARD_BY_ID = new Map(CARDS.map((c) => [c.id, c]));

/* Richer per-card content, filled in by js/extra/*.js (keyed by card id).
 * Shape:
 *   love / career / health: [upright, reversed]   short context meanings
 *   combined: { "love+career" | "love+health" | "career+health" | "love+career+health": [upright, reversed] }
 *             synthesis for a multi-context selection (general never takes part)
 *   deep: { general | love | career | health: [upright, reversed] }   long-form readings
 *   question: string
 *   yn: [upright, reversed]   ("yes" | "no" | "maybe")
 * DEEP_READINGS and COMBINED_READINGS are flat registries (card id -> same shape
 * as EXTRA[id].deep / .combined) filled by js/extra/deep/*.js and js/extra/combined/*.js. */
const EXTRA = {};
const DEEP_READINGS = {};
const COMBINED_READINGS = {};
