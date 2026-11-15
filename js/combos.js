"use strict";

/* ------------------------------------------------------------------ *
 * Static database of card combinations to watch for.
 * kind: "good" (favorable) | "warn" (caution) | "mixed" (depends on context)
 * A combo is active when ALL of its cards are in the hand, in any
 * order and in any orientation.
 * ------------------------------------------------------------------ */

const COMBOS = [
  // ---- Major + Major ----
  { cards: ["death", "tower"], kind: "warn", name: "Total upheaval",
    text: "Sudden, dramatic change that cannot be reversed. A structure collapses and an old chapter ends. Painful, but the clearing is necessary.",
    long: "Together these cards describe an ending that arrives fast and leaves no way back. It often shows up as a job loss, a breakup or a plan that falls apart overnight. At work, expect restructuring; in relationships, expect a break you cannot patch; do not rebuild the old form. Protect the basics, ask for help, and wait for the dust to settle before choosing what comes next." },
  { cards: ["wheel-of-fortune", "tower"], kind: "warn", name: "Fate intervenes",
    text: "A sudden twist of fortune you did not see coming. Expect events to move outside your control.",
    long: "Luck turns and the shock lands in the same moment. You may see an unexpected piece of news, a market shift or a change of circumstances that no amount of planning could have prevented. At work, a decision gets made above your head. Focus on what you can still steer, keep some reserves in place, and avoid forcing outcomes while events are still moving." },
  { cards: ["devil", "tower"], kind: "mixed", name: "Chains broken by crisis",
    text: "A crisis shatters an unhealthy bond, habit or illusion. Disruptive, but it may be the only way out.",
    long: "Something that has held you in place, such as a toxic tie, an addiction or a comforting lie, is cracked open by events. The shock feels harsh, yet it can also be a release. In relationships, a controlling dynamic may end; for health, a wake-up call may arrive. Use the opening to leave properly, and get support so the old pattern does not rebuild itself." },
  { cards: ["lovers", "devil"], kind: "warn", name: "Obsessive attachment",
    text: "Passion tipping into possessiveness, dependency or temptation. Check whether this is love or compulsion.",
    long: "Strong desire is mixing with fear, jealousy or need. In a relationship this can look like intense chemistry that also feels draining, controlling or hard to leave. It can also point to temptation that pulls against a real commitment; ask whether you feel freer or smaller around this person. Set clear boundaries, and be honest with yourself about what you are chasing." },
  { cards: ["lovers", "hierophant"], kind: "good", name: "Committed union",
    text: "A relationship moving toward formal commitment: engagement, marriage, or a vow publicly recognized.",
    long: "Personal choice and shared tradition line up here. Love is ready to take a recognized form, whether that means a proposal, a wedding, moving in together or a signed agreement. The same pattern can describe a business partnership with clear terms; say plainly what you want, and make promises you can keep. Rituals and family expectations may matter, so include the people who matter to you." },
  { cards: ["empress", "emperor"], kind: "good", name: "Power couple",
    text: "Nurture and structure in balance. A stable, productive partnership or a household that thrives.",
    long: "Warmth and discipline support each other rather than compete. In a relationship, this suggests two people who share the load, with one providing care and the other providing direction. At work, it favors a team that is both creative and well organized; keep both sides active. Too much structure goes cold and too much comfort drifts, so check in regularly on how the balance feels." },
  { cards: ["magician", "high-priestess"], kind: "good", name: "Will meets intuition",
    text: "Conscious action aligned with inner knowing. Skill and insight working together.",
    long: "Your plans and your gut agree; you have the means to act, and you also sense what is unspoken in the situation. This helps at work when you need to read a room and then deliver; it also helps in creative or study projects. Trust the quiet signals, then take a concrete step instead of waiting for certainty. Note what you notice and test it." },
  { cards: ["chariot", "strength"], kind: "good", name: "Disciplined victory",
    text: "Success through composure rather than force. Willpower guided by patience.",
    long: "Drive is paired with self-control, so you can move forward without burning bridges. Progress comes from steady pressure and a calm manner instead of loud pushing. At work, this suits negotiations and long projects; for health, it supports building habits that last. Keep your pace even, manage your reactions when things get tense, and let consistency do the winning for you." },
  { cards: ["sun", "moon"], kind: "mixed", name: "Truth against illusion",
    text: "Clarity and confusion pull against each other. What looks bright may hide something; what looks murky may soon resolve.",
    long: "Light and shadow share the same space, so the picture is only partly readable. You may feel optimistic and uneasy at once, or receive good news that has unanswered questions attached. In relationships, notice what is said against what is shown. Slow down on big commitments, gather facts, and give the situation a little time; clarity is coming, but it may arrive in stages." },
  { cards: ["star", "sun"], kind: "good", name: "Healing and clarity",
    text: "Hope turns into visible results. A strongly positive pairing for recovery and renewed confidence.",
    long: "A quiet period of restoring yourself now gives way to something you can actually see and enjoy. This is a gentle sign for health, recovery and mood, and it supports putting yourself out there again at work or in love. Do not rush past the healing that got you here. Share your progress with people you trust, and let yourself accept good things without waiting for a catch." },
  { cards: ["star", "moon"], kind: "mixed", name: "Hope through the fog",
    text: "Faith is tested by uncertainty. Keep your direction even when the path is hard to see.",
    long: "Hope is present, but the way ahead is unclear, and doubt tries to creep in. You may feel tender, intuitive or worried about things you cannot confirm; for health or stress, rest and routine help a great deal. Take small steps, avoid making large decisions in the dark hours, and check your fears against facts. The guidance is steady, even if the view is not." },
  { cards: ["sun", "world"], kind: "good", name: "Triumphant completion",
    text: "A goal achieved in full, and recognized. Success, celebration and closure.",
    long: "A long effort reaches its natural finish and the result is visible to others. Think of a degree, a launch, a recovery milestone or a relationship stage that has come full circle. At work, expect credit and a sense of closure; take the time to celebrate properly and thank those who helped. Then pick your next aim deliberately instead of drifting into it." },
  { cards: ["fool", "world"], kind: "good", name: "Full circle",
    text: "One cycle ends as another begins. Completion flowing straight into a new adventure.",
    long: "You are finishing one chapter and standing at the edge of another, and there is almost no gap between them. This can show up as a move, a career change, a graduation or a fresh start after a long relationship phase. Carry forward what you learned and leave the rest. Prepare enough to be safe, then step out with curiosity and a light grip." },
  { cards: ["fool", "death"], kind: "mixed", name: "Fresh start after an ending",
    text: "Something must end before the new journey begins. Let go of the old to travel light.",
    long: "A real ending clears the path for a leap into the unknown. It might be leaving a role, a city or a long habit, with no clear picture of what follows. The feeling can swing between fear and relief; grieve what is finished without clinging to it. Make a short list of essentials, keep your savings steady, and let the next step be small and honest." },
  { cards: ["death", "judgement"], kind: "mixed", name: "Rebirth",
    text: "Deep transformation and a call to rise renewed. Reflect on what you are leaving behind.",
    long: "An old identity is closing and a more honest one is being called forward. Often this follows a period of review where you see your past clearly and decide to change. It can touch work, health habits or how you relate to people. Do the reflection before acting, forgive what you can, and then commit to the new direction in concrete ways." },
  { cards: ["justice", "judgement"], kind: "mixed", name: "Reckoning",
    text: "Accountability arrives. Past actions are weighed and consequences, good or bad, are delivered.",
    long: "Decisions from the past come up for review, and the outcome follows from what was actually done. This can appear as a legal matter, a performance review, a contract or a frank talk with someone you affected. The result is fair rather than kind or cruel. Gather your records, own your part without excuses, and accept the verdict so you can move on with a clean slate." },
  { cards: ["hermit", "hanged-man"], kind: "mixed", name: "Deep pause",
    text: "Withdrawal and suspension. A time for reflection, but watch for stagnation if it drags on.",
    long: "You are being asked to step back and look at things from another angle, away from noise and demands. Progress on the outside is slow, but insight can grow on the inside. At work, a project may be on hold, and in health, rest is advised; use the pause on purpose by journaling or consulting a mentor. Set a loose date to reassess so waiting does not become avoidance." },
  { cards: ["temperance", "devil"], kind: "warn", name: "Moderation versus excess",
    text: "A struggle between balance and indulgence. Examine habits, appetites and dependencies.",
    long: "Part of you wants a steady, measured life while another part reaches for more, whether that is food, spending, screens, work or company. This often matters most for health and money. Notice when habits stop feeling like choices. Change one thing at a time, build in gentle limits, and ask for support if a pattern feels stronger than your intentions." },

  // ---- Major + Minor ----
  { cards: ["hanged-man", "swords-2"], kind: "warn", name: "Stalemate",
    text: "Stuck between options and unwilling to move. Indecision is itself becoming the decision.",
    long: "You are holding still, partly because you are blocking out what you fear to see. Neither choice feels safe, so nothing moves. At work or in a relationship, this can look like a talk that keeps being postponed; waiting has a cost too. Name the real fear, list what each option gives and risks, and set a date to decide, even if the choice is imperfect." },
  { cards: ["lovers", "cups-2"], kind: "good", name: "Soulful connection",
    text: "A deep, mutual bond with real chemistry. Love is returned in equal measure.",
    long: "Attraction and genuine understanding meet in the same place. This is a sign of a relationship where both people give and receive, whether it is new romance or a long partnership renewed. Honest talk comes easily; do not hold back out of caution alone. Say what you feel, treat the other person as an equal, and let trust build at a pace that feels natural to you both." },
  { cards: ["magician", "wands-ace"], kind: "good", name: "Creative ignition",
    text: "A spark of inspiration with the skill to act on it. Start the project now.",
    long: "A fresh idea arrives and you already have what you need to begin. This suits a new venture, a creative piece or a bold proposal at work; energy is high and the timing is good. Write the idea down, choose the first concrete step and take it this week. Do not wait for perfect conditions, because momentum is what gives the spark somewhere to go." },
  { cards: ["justice", "swords-ace"], kind: "good", name: "Clear verdict",
    text: "Truth is established and a fair decision becomes possible. Good for legal and ethical questions.",
    long: "Facts come into focus and a fair conclusion becomes possible. This is well suited to legal matters, contracts, difficult conversations and decisions at work where honesty is needed. Speak plainly and stay with what can be shown; keep your tone measured so the truth lands without needless harm. Once the decision is made, follow through consistently so that it holds." },
  { cards: ["moon", "swords-9"], kind: "warn", name: "Night terrors",
    text: "Anxiety fed by imagination. Fears feel real but are largely unverified. Seek light and perspective.",
    long: "Worry spirals in the dark hours and makes small things look huge. This often touches sleep, health and stress, and it can distort how you read other people. Do not treat every fear as a fact; write the thoughts down, check them in daylight, and talk to someone you trust. If anxiety stays heavy for weeks, consider professional support." },
  { cards: ["moon", "swords-7"], kind: "warn", name: "Deception",
    text: "Hidden agendas, half-truths or self-deception. Verify before you trust.",
    long: "Something is not being said plainly, and it may be coming from others or from your own wish to look away. At work, this can mean unclear motives or a quietly shifted plan. In relationships, it can be evasiveness; check details, keep records and ask direct questions. Trust what is demonstrated over what is promised, and avoid sharing sensitive information until things are clearer." },
  { cards: ["devil", "swords-7"], kind: "warn", name: "Dishonest dealings",
    text: "Manipulation, temptation to cheat, or being cheated. Guard your interests.",
    long: "Self-interest and sneaky tactics are in play. You might meet a deal that looks too easy, a person who bends the rules, or a temptation to take a shortcut yourself. At work and with money, this calls for care; read the fine print, get terms in writing and keep your own conduct clean. If something feels off, step back before you sign or share anything." },
  { cards: ["hermit", "cups-8"], kind: "mixed", name: "Soul-searching departure",
    text: "Walking away from the familiar to look for deeper meaning. Solitary, but purposeful.",
    long: "You are leaving something that looks fine on paper because it no longer feels true. The path is quiet and often lonely, but it has direction. This can show up as a career shift, a retreat or an end to a relationship that lacks depth. Be clear about what you are looking for; tell a few key people your plan, and allow time alone without cutting everyone off." },
  { cards: ["tower", "swords-knight"], kind: "warn", name: "Reckless collision",
    text: "A rash action or blunt words trigger an explosion. Think before charging ahead.",
    long: "Speed and sharp words set off a blow-up that could have been avoided. An email sent in anger, a hasty decision at work or an argument that escalates fast may be the trigger. Pause before you react and sleep on important messages. If damage is already done, apologize directly and keep it short; repair works better when it is calm and specific." },
  { cards: ["empress", "pentacles-queen"], kind: "good", name: "Abundant home",
    text: "Nurturing, comfort and practical prosperity. Home, family or a creative project flourishes.",
    long: "Care and practical skill combine to create a place where people and projects can grow. This favors home life, family, cooking, gardens and any work that looks after others. Money tends to be steady and well managed; invest in comfort that lasts and look after your own health too. Share the abundance generously, and let yourself receive the same care you give." },

  // ---- Minor + Minor ----
  { cards: ["swords-3", "swords-10"], kind: "warn", name: "Heartbreak and ruin",
    text: "Pain reaching its lowest point. Betrayal or loss that feels final, though the worst is passing.",
    long: "A hurt that cuts deep is followed by a sense of total defeat. It may come from betrayal, a harsh diagnosis or the end of something you worked hard to build. The pain is real, yet this combination also marks the bottom, after which things can only rise. Rest, speak openly to someone supportive and avoid big decisions for now; recovery begins with accepting that it is over." },
  { cards: ["cups-5", "swords-3"], kind: "warn", name: "Deep grief",
    text: "Sorrow and mourning. Allow the feelings, but remember that something remains.",
    long: "Loss and heartache sit together, and your attention is fixed on what has gone. This could be a death, a breakup or a painful disappointment; it is healthy to mourn and not to rush the process. Lean on friends, keep simple routines for sleep and meals, and watch for isolation. When you are ready, turn to what is still standing, because it is more than it feels like." },
  { cards: ["cups-4", "cups-8"], kind: "mixed", name: "Discontent becomes departure",
    text: "Boredom and apathy hardening into the decision to leave. Make sure you are leaving toward something.",
    long: "Restlessness has been growing and now it is turning into action. You may be tired of a job, a routine or a relationship that no longer feeds you. Leaving can be the right call, but it works best with a destination. Name what is missing, test whether it can be fixed where you are, and if not, plan your exit with care instead of drifting away." },
  { cards: ["cups-3", "cups-10"], kind: "good", name: "Joyful gathering",
    text: "Celebration with friends and family. Strong bonds, reunions and shared happiness.",
    long: "Warm company and emotional fulfillment are on offer. Expect parties, reunions, milestones or simply a close circle that feels good to be in. In love and family life, this is a lovely sign of belonging; at work, a team may gel. Accept invitations, make time for those you care about, and say thank you out loud; joy grows when it is shared." },
  { cards: ["cups-page", "cups-ace"], kind: "good", name: "Message of love",
    text: "A heartfelt invitation, confession or new emotional beginning. Open your heart to the news.",
    long: "A gentle, sincere message opens a new emotional chapter. It could be a declaration, an invitation, news of a pregnancy or a creative idea that moves you. Stay receptive instead of guarded; if you are the one with something to say, say it kindly and plainly. Early feelings are tender, so let them develop slowly and see what they become." },
  { cards: ["wands-ace", "wands-8"], kind: "good", name: "Quick start",
    text: "An idea moves into action fast. News arrives, plans accelerate.",
    long: "A new spark turns into movement almost at once. Messages, travel, launches and decisions pick up speed, and things that were stuck begin to flow. At work, expect a rapid start on a project; be ready to respond promptly, and keep your priorities clear so you do not scatter your energy. Check the details as you go, because speed works best with a little care." },
  { cards: ["pentacles-10", "pentacles-king"], kind: "good", name: "Established wealth",
    text: "Financial security, inheritance or a lasting legacy with sound stewardship.",
    long: "Long-term security and wise management work together. This points to family wealth, a stable business, a secure home or an inheritance handled well. At work, it supports building something that outlasts you; keep records tidy, plan for the next generation and avoid risky shortcuts. Looking after what you have, and sharing it sensibly, matters more than adding more." },
  { cards: ["swords-5", "wands-5"], kind: "warn", name: "Open hostility",
    text: "Competition turned hostile. Winning may cost more than it is worth.",
    long: "Rivalry has lost its friendly edge and people are fighting to win, not to solve anything. At work, this looks like office politics or a heated dispute. In a relationship, it is the argument that keeps going for the sake of being right; ask what you actually want from the conflict. Sometimes the best move is to step away, or to propose a calm third-party conversation." },
  { cards: ["swords-8", "swords-9"], kind: "warn", name: "Trapped by worry",
    text: "Fear and self-imposed limits feeding each other. The cage is largely mental: look for the loose ropes.",
    long: "Anxious thoughts and a feeling of having no options reinforce one another. You may be stuck at work, in a decision or in a mood that will not lift; often more choices exist than it seems. List them on paper, however small, and ask someone outside the situation for a view. Rest matters here, so protect your sleep and take one small step to loosen the knot." },
  { cards: ["pentacles-5", "cups-5"], kind: "warn", name: "Loss on all fronts",
    text: "Material hardship alongside emotional grief. Reach out for support rather than carrying it alone.",
    long: "Money worries and emotional pain arrive together, and each makes the other feel heavier. This can follow job loss, illness or a breakup with financial consequences. Help is closer than it looks, whether from family, community services or a counselor. Reach out early, cover essentials first and take it one day at a time; looking after your health keeps you able to handle the rest." },
  { cards: ["wands-10", "pentacles-8"], kind: "mixed", name: "Heavy workload",
    text: "Relentless effort and responsibility. Productive, but a burnout risk if not paced.",
    long: "You are carrying a lot and doing the work carefully, so results are real but the cost is rising. At work this means long hours and a pile of tasks that never quite shrink; for health, watch fatigue and tension. Delegate what you can, say no to extras and schedule rest as seriously as deadlines. Steady craft is a strength, provided it does not wear you down." },

  // ---- Triples ----
  { cards: ["death", "tower", "swords-10"], kind: "warn", name: "Complete collapse",
    text: "Endings, upheaval and ruin stacked together. A decisive, irreversible break. Expect hard times, but also the end of a long struggle.",
    long: "Three heavy cards point to a break that is thorough and final. Something that has been failing for a while ends all at once, and it may feel like too much to absorb. The silver lining is that the long strain is over; put practical support in place first, such as money, housing, health and trusted people. Rebuilding can wait until you have recovered your strength." },
  { cards: ["moon", "swords-7", "devil"], kind: "warn", name: "Web of illusion",
    text: "Deception, temptation and confusion converge. Someone, possibly you, is not telling the whole truth.",
    long: "Confusion, sneaky behavior and temptation reinforce one another, so it is hard to know what is real. A situation at work, with money or in love may be built on partial truths; slow everything down. Ask direct questions, verify claims independently and pay attention to patterns instead of promises. If you are bending the truth yourself, now is the time to come clean." },
  { cards: ["sun", "star", "world"], kind: "good", name: "Radiant fulfillment",
    text: "Hope, joy and completion together. A rare, strongly positive alignment.",
    long: "Renewed hope, open joy and a sense of completion line up in your favor. This is a fine sign for recovery, long-held goals and a feeling of being at home in your life. Relationships feel warm and work reaches a satisfying finish; enjoy it without bracing for loss. Express your gratitude, share the good news and let this settled confidence guide your next choices." },
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
 * @returns {{cards: string[], kind: string, name: string, text: string, long?: string, pattern?: boolean}[]}
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
        name: `${group.length}x ${r.name}s`,
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
      text: "Many reversed cards: energy is blocked, internalized or delayed. Look at what is being held back.",
    });
  }

  return out;
}
