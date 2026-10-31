"use strict";

/* ------------------------------------------------------------------ *
 * Spread layouts.
 * Cards in the hand fill the positions in order (card 1 -> position 1).
 * col/row place a position on the layout grid (1-based).
 * rot: the card is drawn crossed over the one below it (Celtic Cross).
 * ------------------------------------------------------------------ */

const SPREADS = [
  {
    id: "free",
    name: "Free hand",
    blurb: "No fixed positions. Add as many cards as you like.",
    cols: 0,
    rows: 0,
    positions: [],
  },
  {
    id: "single",
    name: "Single card",
    blurb: "A quick answer or a message for the day.",
    cols: 1,
    rows: 1,
    positions: [
      { name: "The card", hint: "Your message for the day, or the answer to a simple question.", col: 1, row: 1 },
    ],
  },
  {
    id: "three",
    name: "Past · Present · Future",
    blurb: "A simple timeline of a situation.",
    cols: 3,
    rows: 1,
    positions: [
      { name: "Past", hint: "What shaped the situation.", col: 1, row: 1 },
      { name: "Present", hint: "Where things stand now.", col: 2, row: 1 },
      { name: "Future", hint: "Where it is heading if nothing changes.", col: 3, row: 1 },
    ],
  },
  {
    id: "three-sca",
    name: "Situation · Challenge · Advice",
    blurb: "Three cards for a problem you want to work through.",
    cols: 3,
    rows: 1,
    positions: [
      { name: "Situation", hint: "The heart of the matter.", col: 1, row: 1 },
      { name: "Challenge", hint: "What stands in the way.", col: 2, row: 1 },
      { name: "Advice", hint: "A way forward.", col: 3, row: 1 },
    ],
  },
  {
    id: "yesno",
    name: "Yes / No",
    blurb: "A direct answer from the first card's yes/no leaning, plus what supports it and what to watch.",
    cols: 3,
    rows: 1,
    positions: [
      { name: "Answer", hint: "Read this card's yes/no leaning first, then its meaning.", col: 1, row: 1 },
      { name: "What supports it", hint: "The energy helping the answer come true.", col: 2, row: 1 },
      { name: "What to watch", hint: "The condition, obstacle or caveat attached to it.", col: 3, row: 1 },
    ],
  },
  {
    id: "relationship",
    name: "Relationship",
    blurb: "Five cards for the dynamic between two people.",
    cols: 3,
    rows: 3,
    positions: [
      { name: "You", hint: "Your needs and what you bring.", col: 1, row: 2 },
      { name: "Them", hint: "Their needs and what they bring.", col: 3, row: 2 },
      { name: "Connection", hint: "The bond between you.", col: 2, row: 2 },
      { name: "Challenge", hint: "What strains the relationship.", col: 2, row: 3 },
      { name: "Potential", hint: "Where it can grow.", col: 2, row: 1 },
    ],
  },
  {
    id: "horseshoe",
    name: "Horseshoe",
    blurb: "Seven cards that sweep from the past to the outcome.",
    cols: 7,
    rows: 4,
    positions: [
      { name: "Past", hint: "Events and influences behind the question.", col: 1, row: 1 },
      { name: "Present", hint: "The current situation.", col: 2, row: 2 },
      { name: "Hidden influences", hint: "What is working beneath the surface.", col: 3, row: 3 },
      { name: "Obstacles", hint: "What blocks the way, or must be faced.", col: 4, row: 4 },
      { name: "Attitude of others", hint: "How other people affect or see it.", col: 5, row: 3 },
      { name: "Advice", hint: "The best course of action.", col: 6, row: 2 },
      { name: "Outcome", hint: "The likely result.", col: 7, row: 1 },
    ],
  },
  {
    id: "celtic",
    name: "Celtic Cross",
    blurb: "The classic ten-card spread for a deep look at one question.",
    cols: 5,
    rows: 4,
    positions: [
      { name: "Present", hint: "The heart of the matter.", col: 2, row: 2 },
      { name: "Challenge", hint: "What crosses you: the immediate obstacle or influence.", col: 2, row: 2, rot: true },
      { name: "Foundation", hint: "The root cause or basis of the situation.", col: 2, row: 3 },
      { name: "Recent past", hint: "What is passing away.", col: 1, row: 2 },
      { name: "Conscious goal", hint: "What you aim for, or the best you can hope for.", col: 2, row: 1 },
      { name: "Near future", hint: "What is coming into view.", col: 3, row: 2 },
      { name: "Yourself", hint: "Your attitude and approach.", col: 5, row: 4 },
      { name: "Environment", hint: "Other people and outside influences.", col: 5, row: 3 },
      { name: "Hopes and fears", hint: "What you want and dread, often the same thing.", col: 5, row: 2 },
      { name: "Outcome", hint: "Where it leads if you stay on course.", col: 5, row: 1 },
    ],
  },
];

const SPREAD_BY_ID = new Map(SPREADS.map((s) => [s.id, s]));
