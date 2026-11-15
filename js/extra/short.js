"use strict";

/* ------------------------------------------------------------------ *
 * Short card meanings: one [upright, reversed] pair per card.
 * Structure lives in js/data.js; card prose lives in js/extra/.
 * ------------------------------------------------------------------ */

const SHORT_READINGS = {
  "fool": [
    "A fresh start and a leap into the unknown. Trust your instincts, stay curious, and step forward with an open heart.",
    "Recklessness, naivety, or hesitation. Either a leap taken without looking, or fear that keeps you at the edge.",
  ],
  "magician": [
    "You already hold every tool you need. Focused will and skill turn ideas into reality. This is the moment to act.",
    "Manipulation, untapped potential, or scattered energy. Talent that is wasted or used deceptively.",
  ],
  "high-priestess": [
    "Listen to your inner voice. The answers lie beneath the surface, in silence, dreams and hidden knowledge.",
    "Ignored intuition, secrets, or surface-level thinking. A disconnect from your inner voice.",
  ],
  "empress": [
    "Creativity, comfort and growth. Nurturing love, sensual pleasure and fruitful results flourish around you.",
    "Smothering, creative block, dependence, or neglect of self-care.",
  ],
  "emperor": [
    "Order, discipline and protection. Build solid foundations, take responsibility and lead with clear rules.",
    "Rigidity, domination or lack of control. Authority that is abused or missing altogether.",
  ],
  "hierophant": [
    "Established wisdom, shared beliefs and mentorship. Learn from tradition, or commit within a recognized structure.",
    "Rebellion, nonconformity, restrictive dogma. Question received rules and find your own path.",
  ],
  "lovers": [
    "A deep connection and a meaningful choice. Values aligned with action; harmony between partners or within yourself.",
    "Disharmony, misalignment, a choice avoided, or imbalance in a relationship.",
  ],
  "chariot": [
    "Willpower drives success. Harness opposing forces and push forward with discipline and focus.",
    "Loss of direction, aggression, lack of control. Forces pulling you apart.",
  ],
  "strength": [
    "Quiet power over brute force. Tame fear and impulse with gentleness, patience and confidence.",
    "Self-doubt, raw emotion, or weakness. Courage failing, or force used in place of care.",
  ],
  "hermit": [
    "Withdraw to seek truth within. A period of reflection and soul-searching, or a wise guide holding a lantern.",
    "Isolation, loneliness, withdrawal taken too far, or refusing guidance.",
  ],
  "wheel-of-fortune": [
    "Life turns. A change of fortune, often favorable and beyond your control. Embrace the cycle.",
    "Bad luck, resistance to change, broken cycles. Setbacks that carry a lesson.",
  ],
  "justice": [
    "Honest accountability. Decisions have consequences; truth and fairness prevail and legal matters resolve.",
    "Unfairness, dishonesty, dodging accountability. Bias clouds judgment.",
  ],
  "hanged-man": [
    "Suspension and letting go. Pause, release control and see the situation from a new angle.",
    "Stalling, needless sacrifice, resistance. Delay with no insight gained.",
  ],
  "death": [
    "An ending that clears the way. Rarely literal: a chapter closes so that renewal can begin.",
    "Resisting change, stagnation, clinging to the past, fear of letting go.",
  ],
  "temperance": [
    "Blend and balance. Patience, moderation and healing bring a steady, harmonious flow.",
    "Imbalance, excess, impatience, discord.",
  ],
  "devil": [
    "Attachments and addictions that bind. Recognize the chains, often worn loosely, that you have placed on yourself.",
    "Breaking free and reclaiming power; or deeper entanglement and denial.",
  ],
  "tower": [
    "Sudden disruption topples false foundations. Shocking but liberating: the truth breaks through.",
    "Averted disaster, fear of change, a delayed collapse. The upheaval is internal or drawn out.",
  ],
  "star": [
    "Calm after the storm. Hope, faith and serene renewal; you are guided and restored.",
    "Despair, discouragement, lost faith, disconnection.",
  ],
  "moon": [
    "Things are not as they seem. Fear, confusion and dreams: trust your intuition and move carefully through the unclear.",
    "Confusion lifting and secrets revealed; or repressed fear and anxiety.",
  ],
  "sun": [
    "Radiant positivity. Success, warmth, confidence and clarity: a clear and happy outcome.",
    "Temporary clouds, dimmed optimism, overconfidence. Joy delayed rather than denied.",
  ],
  "judgement": [
    "A wake-up call. Reflect, forgive and answer your calling; weigh the past to rise renewed.",
    "Self-doubt, harsh self-judgment, ignoring the call.",
  ],
  "world": [
    "A cycle completes in fulfillment. Accomplishment, travel and integration; you are ready for the next chapter.",
    "Unfinished business, lack of closure, shortcuts. Almost there, but not yet.",
  ],
  "wands-ace": [
    "A surge of creative energy and a bold new opportunity. Seize the spark.",
    "Delays, lack of motivation, a missed spark, false starts.",
  ],
  "wands-2": [
    "Standing at the threshold with the world in your hand. Plan, and choose to leave comfort for a bigger vision.",
    "Fear of the unknown, poor planning, playing small, indecision.",
  ],
  "wands-3": [
    "Plans are set in motion and ships are coming in. Look ahead and widen your horizons.",
    "Delays, obstacles, lack of foresight, frustration.",
  ],
  "wands-4": [
    "Joyous celebration, stability, homecoming, a milestone achieved.",
    "Instability, tension at home, a canceled celebration, lack of support.",
  ],
  "wands-5": [
    "Clashing egos and petty competition. Chaotic, but it can sharpen your skills.",
    "Avoiding conflict, resolution found, or conflict turned dirty and inward.",
  ],
  "wands-6": [
    "Public recognition and triumph. Confidence from well-earned success.",
    "Fall from grace, ego, lack of recognition, a hollow success.",
  ],
  "wands-7": [
    "Defend your position from the higher ground. Stay firm against opposition.",
    "Overwhelmed, giving up, defensiveness, yielding too soon.",
  ],
  "wands-8": [
    "Swift action and rapid developments. Messages arrive and things accelerate.",
    "Delays, frustration, scattered energy, a forced slowdown.",
  ],
  "wands-9": [
    "Battered but unbeaten. One last push: stay guarded and persevere.",
    "Exhaustion, paranoia, giving up just short, burnout.",
  ],
  "wands-10": [
    "Carrying too much. Success has become a weight: delegate, or finish the final stretch.",
    "Release of burdens, delegation, or collapsing under the strain.",
  ],
  "wands-page": [
    "An enthusiastic messenger: new ideas, discovery, a free spirit bringing fresh news.",
    "Immaturity, hasty ideas, lack of direction, bad news or procrastination.",
  ],
  "wands-knight": [
    "Charges ahead with passion and bravado. Exciting, fearless, a little reckless.",
    "Haste, scattered energy, anger, delays, burnout.",
  ],
  "wands-queen": [
    "Magnetic, courageous and independent. Leads with warmth and vibrant confidence.",
    "Jealousy, selfishness, demanding behavior, shaken confidence.",
  ],
  "wands-king": [
    "A visionary leader. Takes charge with charisma and decisive creativity.",
    "Domineering, impulsive, overbearing, ruthless ambition.",
  ],
  "cups-ace": [
    "A fresh emotional beginning. Love, joy, and creative or spiritual overflow.",
    "Blocked emotion, emptiness, repressed feelings, a missed offer of love.",
  ],
  "cups-2": [
    "Mutual attraction and balanced partnership. Love, or a meaningful alliance.",
    "Imbalance, broken communication, disharmony, separation.",
  ],
  "cups-3": [
    "Celebration with friends. Communal joy and support.",
    "Overindulgence, gossip, isolation, third-party trouble.",
  ],
  "cups-4": [
    "Disengaged, ignoring offers while lost in thought. Reassess what you truly want.",
    "Newfound awareness and re-engagement; or lingering withdrawal.",
  ],
  "cups-5": [
    "Mourning what has spilled while overlooking what remains. Let grief pass, then turn around.",
    "Acceptance, moving on, finding peace; or dwelling in regret.",
  ],
  "cups-6": [
    "Sweet memories, childhood, generosity and reunions with the past.",
    "Stuck in the past, unrealistic nostalgia, a push to move forward.",
  ],
  "cups-7": [
    "Many tempting options, some of them illusory. Daydreams must be grounded in a decision.",
    "Clarity, a decision made, a reality check; or overwhelm and scattered focus.",
  ],
  "cups-8": [
    "Deliberately leaving behind what no longer fulfills you in search of something deeper.",
    "Fear of leaving, aimless drifting, staying where you are unfulfilled.",
  ],
  "cups-9": [
    "The wish card. Emotional and material satisfaction: enjoy your hard-won comfort.",
    "Smugness, dissatisfaction, indulgence, hollow wishes.",
  ],
  "cups-10": [
    "Lasting emotional fulfillment. A happy home, family and deep contentment.",
    "Broken family, misaligned values, discord at home.",
  ],
  "cups-page": [
    "A dreamy, sensitive messenger. Creative inspiration, a heartfelt invitation or news.",
    "Emotional immaturity, moodiness, creative blocks, disappointing news.",
  ],
  "cups-knight": [
    "The romantic idealizt. Offers, proposals, and following the heart.",
    "Unrealistic, moody, jealous. Charm that hides insincerity.",
  ],
  "cups-queen": [
    "Nurturing, intuitive and emotionally mature. Compassion with healthy boundaries.",
    "Emotional insecurity, martyrdom, codependency, moodiness.",
  ],
  "cups-king": [
    "Mastery of emotion. Calm, wise and diplomatic, offering steady counsel.",
    "Emotional manipulation, volatility, coldness, repression.",
  ],
  "swords-ace": [
    "A breakthrough of mental clarity. Truth cuts through confusion; a decisive new idea.",
    "Confusion, brutality, clouded judgment, misused words.",
  ],
  "swords-2": [
    "A difficult choice avoided; a blindfolded standoff. A truce, or avoidance.",
    "Indecision released, information revealed; or anxiety and confusion.",
  ],
  "swords-3": [
    "Heartbreak and painful truth. The sorrow is real, but acknowledging it begins healing.",
    "Recovery, forgiveness, release; or suppressed pain.",
  ],
  "swords-4": [
    "Rest and restoration. Withdraw to recharge before the next challenge.",
    "Restlessness, burnout, stagnation, or emerging from rest.",
  ],
  "swords-5": [
    "A hollow victory. Conflict where winning costs more than it gains.",
    "Reconciliation, regret, lingering resentment, walking away.",
  ],
  "swords-6": [
    "Leaving trouble behind for calmer waters. A passage, with some baggage in tow.",
    "Stuck, unresolved baggage, resistance to transition.",
  ],
  "swords-7": [
    "Acting alone and by stealth. Deception, cunning, or avoiding consequences.",
    "Coming clean, getting caught, conscience, or self-deception.",
  ],
  "swords-8": [
    "Feeling bound and blindfolded, yet the bindings are loose. Perspective is the key.",
    "Freedom, release, regained agency, seeing your options.",
  ],
  "swords-9": [
    "Sleepless worry and dread, often worse in the mind than in reality.",
    "Hope returning and reaching out for help; or deepening despair.",
  ],
  "swords-10": [
    "A painful, final ending. But the dawn on the horizon says the worst is over.",
    "Recovery, an inevitable end resisted, refusing to let go, survival.",
  ],
  "swords-page": [
    "A sharp, curious and restless mind. New ideas, honest questions, watchfulness.",
    "Gossip, hasty words, all talk, deception, scattered thinking.",
  ],
  "swords-knight": [
    "Charges forward with ideas and conviction. Fast, direct, perhaps blunt.",
    "Reckless, tactless, scattered, aggressive or unfocused.",
  ],
  "swords-queen": [
    "Sharp, honest and independent. Unbiased judgment and clear boundaries.",
    "Cold, bitter, harsh criticism, cruelty, or being overly guarded.",
  ],
  "swords-king": [
    "Master of logic and truth. Fair, analytical, commands through reason.",
    "Tyrannical, manipulative, cold, abuse of power.",
  ],
  "pentacles-ace": [
    "A seed of material opportunity: a new job, money, health or venture.",
    "A missed opportunity, scarcity, poor planning, a bad investment.",
  ],
  "pentacles-2": [
    "Juggling priorities with grace. Flexibility through changing circumstances.",
    "Overwhelmed, disorganized, financial disarray.",
  ],
  "pentacles-3": [
    "Skilled collaboration. Quality work, recognized and built together.",
    "Poor teamwork, mediocrity, lack of initiative.",
  ],
  "pentacles-4": [
    "Holding tight to resources. Stability and security, or clutching too hard.",
    "Greed and materialism; or a loosening grip, generosity, letting go.",
  ],
  "pentacles-5": [
    "Financial or physical hardship. Feeling left out in the cold, yet help is near.",
    "Recovery, improvement, finding help; or prolonged struggle.",
  ],
  "pentacles-6": [
    "Giving and receiving in balance. Generosity, fair exchange and support.",
    "Strings attached, debt, one-sided giving, stinginess.",
  ],
  "pentacles-7": [
    "Pause to assess the harvest. Patience: results come slowly from sustained effort.",
    "Impatience, poor returns, wasted effort. Time to reassess.",
  ],
  "pentacles-8": [
    "Dedicated practice. Steady craft and improving skill.",
    "Perfectionism, lack of focus, uninspired repetitive work.",
  ],
  "pentacles-9": [
    "Self-made comfort and independence. Enjoy the fruits of your labor.",
    "Overworking, superficiality, financial dependence, living beyond your means.",
  ],
  "pentacles-10": [
    "Lasting wealth and family security. A legacy built over generations.",
    "Financial failure, family conflict, fleeting success, loss.",
  ],
  "pentacles-page": [
    "A diligent student. A new opportunity to learn, plan and ground a goal.",
    "Lack of progress, procrastination, unrealistic goals.",
  ],
  "pentacles-knight": [
    "Slow, steady, dependable progress. Methodical to a fault.",
    "Stagnation, boredom, perfectionism, laziness.",
  ],
  "pentacles-queen": [
    "A warm, practical provider. Creates comfort and plenty.",
    "Self-neglect, smothering, work-life imbalance, insecurity.",
  ],
  "pentacles-king": [
    "Prosperous and dependable. Builds lasting success through steady leadership.",
    "Greed, stubbornness, indulgence, financial mismanagement.",
  ],
};

CARDS.forEach((card) => {
  const pair = SHORT_READINGS[card.id];
  if (pair) {
    card.upright = pair[0];
    card.reversed = pair[1];
  }
});
