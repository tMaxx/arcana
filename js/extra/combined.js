"use strict";

/* ------------------------------------------------------------------ *
 * Combined summaries.
 * One synthesis per card, aimed at mixed questions that span love,
 * work and wellbeing. Shown when more than one context is selected
 * and the Combined summary toggle is on.
 * ------------------------------------------------------------------ */

const COMBINED_READINGS = {
  // ---- Major Arcana ----
  "fool": [
    "Love, work and wellbeing all ask for a brave first step. Curiosity opens doors, but keep one foot on the ground so the leap feeds you rather than scatters you.",
    "The same restlessness can look like fear in love, impulsiveness at work and scattered energy in the body. Ground yourself before you leap.",
  ],
  "magician": [
    "The same focused will that attracts love can build a project and restore your energy. Use your resources deliberately, and the different areas of life reinforce each other.",
    "Scattered focus or charm used as a shortcut can show up as mixed signals in love, overpromising at work and nervous strain in the body. Simplify and act with integrity.",
  ],
  "high-priestess": [
    "In love, work and health, the answer is quiet and inward. Trust what you sense beneath the surface; patience and rest will reveal more than forcing a decision.",
    "Ignored intuition can become distance in love, missing details at work and tension in the body. Listen to the warning you have been talking over.",
  ],
  "empress": [
    "Nurture is the common thread: affection in love, steady growth at work and gentle care for your body. What you tend patiently will flourish.",
    "Smothering, overgiving or neglecting yourself can distort love, work and health at once. Return to simple care and let others carry their share.",
  ],
  "emperor": [
    "Structure supports every area: clear commitments in love, firm plans at work and steady routines for your body. Build the frame that lets you relax inside it.",
    "Rigidity or overcontrol can become coldness in love, micromanagement at work and tightness in the body. Loosen the grip without abandoning the structure.",
  ],
  "hierophant": [
    "Shared values and trusted guidance anchor love, work and wellbeing. Follow a practice that has stood the test of time, and let community support you.",
    "Inherited rules may no longer fit your love life, your work or your health. Question the convention and keep only what genuinely serves you.",
  ],
  "lovers": [
    "Choice and alignment run through love, work and health. Say yes to what matches your values, and the different parts of your life will pull in the same direction.",
    "Misalignment shows up as indecision in love, a poor work fit and a body that feels divided. Make the honest choice you have been avoiding.",
  ],
  "chariot": [
    "Focused drive can carry love, work and health forward at once. Harness the opposing pulls and keep moving in one clear direction.",
    "Scattered effort or force can become power struggles in love, burnout at work and exhaustion in the body. Slow down and regain control of the pace.",
  ],
  "strength": [
    "Gentle courage is the thread: patience in love, composure at work and kindness toward your body. Quiet persistence outlasts force.",
    "Self-doubt or suppressed anger can weaken love, work and health together. Acknowledge your limits and ask for support.",
  ],
  "hermit": [
    "Solitude and reflection restore love, work and wellbeing. Step back from the noise, and the right direction becomes easier to hear.",
    "Isolation can deepen distance in love, stall your work and drain your energy. Reach out before solitude turns into avoidance.",
  ],
  "wheel-of-fortune": [
    "The same turning cycle touches love, work and health. Move with the change and let the new phase carry you rather than resisting it.",
    "Repeating patterns can show up as bad timing in love, stagnation at work and a body stuck in the same groove. Make one small change to break the cycle.",
  ],
  "justice": [
    "Fairness and honesty balance love, work and health. Clear boundaries and accountable choices restore equilibrium in every area.",
    "Imbalance or self-judgement can distort love, work and wellbeing at once. Release harsh comparisons and restore fairness in your routine.",
  ],
  "hanged-man": [
    "A deliberate pause helps love, work and health alike. Surrender the need to push, and a new perspective will reveal the way forward.",
    "Stalling or martyrdom can keep love, work and health stuck. Stop waiting for permission and take one gentle step.",
  ],
  "death": [
    "An ending clears space in love, work and health at the same time. Release what is already over so new energy can enter.",
    "Resisting a necessary ending prolongs strain in love, work and the body. Let the old pattern close before you try to rebuild.",
  ],
  "temperance": [
    "Balance is the common thread in love, work and wellbeing. Small, steady adjustments blend the competing demands into something sustainable.",
    "Excess or imbalance can throw love, work and health off together. Return to gentle routines and avoid all-or-nothing swings.",
  ],
  "devil": [
    "The same attachment can bind love, work and health: desire, ambition or habit. See what you are choosing freely and what is choosing you.",
    "Breaking free from an unhealthy pattern affects love, work and the body at once. The first step is honest, and the rest needs patience.",
  ],
  "tower": [
    "A shock or upheaval can shake love, work and health together. Clear away what was never stable and rebuild on more honest foundations.",
    "Resisting an unavoidable change prolongs stress in love, work and the body. Let the structure fall before you rebuild.",
  ],
  "star": [
    "Hope and gentle healing touch love, work and wellbeing. Recover slowly, and let one small source of faith guide the next step.",
    "Discouragement can dim love, work and health at once. Reconnect with one modest hope and care for yourself while it returns.",
  ],
  "moon": [
    "Confusion or hidden feelings can blur love, work and health. Move slowly, trust your intuition and avoid decisions made from fear.",
    "The fog is lifting, but lingering anxiety can still disturb love, work and rest. Keep grounding routines close as clarity returns.",
  ],
  "sun": [
    "Warmth and clarity lift love, work and health together. Let yourself enjoy what is going well and share that energy with others.",
    "Energy is returning after a low period, though love, work and health may still feel tender. Do not rush the recovery.",
  ],
  "judgement": [
    "An honest reckoning renews love, work and health. Forgive what is past, answer the call you have been avoiding and step forward lighter.",
    "Harsh self-judgement can hold back love, work and wellbeing alike. Forgive yourself and take one concrete step toward renewal.",
  ],
  "world": [
    "A cycle completes across love, work and wellbeing. Celebrate what you have built and let yourself feel whole before the next chapter.",
    "Loose ends in love, work or health keep the cycle from closing. Attend to the last small steps and finish what you started.",
  ],

  // ---- Wands ----
  "wands-ace": [
    "A spark of vitality can ignite love, work and health together. Act on the desire while it is fresh, but keep the flame sustainable.",
    "The spark fizzles when love, work or the body is depleted. Rest before forcing motivation that is not there yet.",
  ],
  "wands-2": [
    "You are choosing a direction that affects love, work and wellbeing. Plan the next move, and let the bigger vision include all of you.",
    "Fear of change can keep love, work and health small and stalled. Start with one low-risk step outside the comfort zone.",
  ],
  "wands-3": [
    "Early efforts begin to pay off in love, work and health. Stay consistent and look beyond the immediate horizon.",
    "Delays or lack of foresight frustrate love, work and wellbeing at once. Adjust the plan rather than abandoning it.",
  ],
  "wands-4": [
    "Stability and celebration support love, work and health. Enjoy the people, home and routines that make you feel safe.",
    "Instability at home or in a relationship unsettles work and wellbeing too. Rebuild a sense of safety in small ways.",
  ],
  "wands-5": [
    "Friction and competition raise the temperature in love, work and the body. Use the energy for honest conversation or exercise, not conflict.",
    "Avoided conflict or simmering resentment wears down love, work and health. Address the tension before it turns inward.",
  ],
  "wands-6": [
    "Recognition lifts love, work and confidence together. Accept praise and let success motivate healthy habits.",
    "Hurt pride or seeking validation can drain love, work and wellbeing. Measure yourself by how you feel, not by applause.",
  ],
  "wands-7": [
    "You are defending boundaries in love, work and health. Stand firm without tensing every muscle, and rest between battles.",
    "Constant defensiveness exhausts love, work and the body. Choose which fights are worth your energy.",
  ],
  "wands-8": [
    "Momentum carries love, work and health forward quickly. Act while energy is high, but keep the pace sustainable.",
    "Rushed decisions or scattered messages create stress in love, work and the body. Slow down and finish one thing at a time.",
  ],
  "wands-9": [
    "You are near the end of a demanding stretch in love, work or health. Protect your reserves and do not abandon your boundaries now.",
    "Exhaustion and suspicion wear down love, work and wellbeing. Ask for help and lower your guard where it is safe.",
  ],
  "wands-10": [
    "A heavy load is pressing on love, work and health. Delegate, rest and set down what is not yours to carry.",
    "Overload is becoming unsustainable across love, work and the body. Release one obligation before your body forces the issue.",
  ],
  "wands-page": [
    "Curiosity and fresh energy invite play in love, work and health. Try something new without demanding perfection.",
    "Restlessness scatters love, work and wellbeing. Ground yourself in one simple practice.",
  ],
  "wands-knight": [
    "Bold, fast energy can move love, work and health forward. Use it for action, but watch for haste and strain.",
    "Impulsiveness or burnout makes love, work and the body erratic. Slow the pace and recover before the next charge.",
  ],
  "wands-queen": [
    "Warm confidence and vitality radiate into love, work and health. Nurture your own spark as generously as you nurture others.",
    "Overgiving or jealousy drains love, work and wellbeing. Reclaim time for your own needs and pleasures.",
  ],
  "wands-king": [
    "Leadership and steady vision give love, work and health a purpose. Direct your energy toward what you can realistically sustain.",
    "Domineering drive or overwork burns out love, work and the body. Share the load and soften your grip.",
  ],

  // ---- Cups ----
  "cups-ace": [
    "Emotional renewal opens love, work and health together. Let yourself feel and receive care without needing to earn it.",
    "Blocked feelings or emotional exhaustion affect love, work and the body. Gentle release is needed, not force.",
  ],
  "cups-2": [
    "Connection and mutual care restore love, work and wellbeing. Spend time with someone who makes you feel seen.",
    "Imbalance in a relationship drains love, work and health. Restore your own emotional centre first.",
  ],
  "cups-3": [
    "Friendship and shared joy lift love, work and health. Community and celebration are good medicine.",
    "Social overload or strained friendships tire love, work and wellbeing. Choose quality connection over obligation.",
  ],
  "cups-4": [
    "Apathy or boredom signals unmet needs in love, work and health. Notice what you are ignoring and allow yourself to receive.",
    "You are ready to re-engage with love, work and life. Accept the small offer of connection in front of you.",
  ],
  "cups-5": [
    "Grief and disappointment touch love, work and health. Let yourself mourn without turning away from what remains.",
    "You are beginning to heal in love, work and wellbeing. Take one small step out of isolation.",
  ],
  "cups-6": [
    "Nostalgia and gentle memories soothe love, work and health. Reconnect with what felt safe and joyful.",
    "Living in the past keeps love, work and wellbeing stuck. Honour the memory and return to the present.",
  ],
  "cups-7": [
    "Too many options and fantasies scatter love, work and health. Ground yourself in what is real and choose one path.",
    "Confusion begins to clear in love, work and life. Let go of illusions and act on what you actually need.",
  ],
  "cups-8": [
    "Leaving what no longer fulfils you is healthy in love, work and life. Give yourself permission to walk toward something truer.",
    "Fear of leaving keeps love, work and wellbeing stuck. Examine what you are really staying for.",
  ],
  "cups-9": [
    "Contentment and pleasure are available in love, work and health. Enjoy them without guilt and notice what genuinely satisfies you.",
    "Overindulgence or chasing pleasure leaves love, work and wellbeing empty. Look for satisfaction beneath the surface.",
  ],
  "cups-10": [
    "Emotional security and family warmth support love, work and health. Lean on the people who feel like home.",
    "Family tension or an idealised picture of harmony strains love, work and wellbeing. Accept the real, imperfect support available.",
  ],
  "cups-page": [
    "Tender feelings and intuition ask for expression in love, work and health. Creative or emotional play helps you process what you feel.",
    "Emotional immaturity or moodiness unsettles love, work and the body. Give feelings room without letting them drive every choice.",
  ],
  "cups-knight": [
    "Romantic, imaginative energy lifts love, work and health. Follow what moves your heart, but keep one foot on the ground.",
    "Moodiness or escapism pulls you away from love, work and reality. Return to simple routines and honest feelings.",
  ],
  "cups-queen": [
    "Compassion and emotional wisdom steady love, work and health. Trust your intuition and care for yourself as deeply as others.",
    "Overwhelm or absorbing others' emotions drains love, work and the body. Set boundaries and return to your own centre.",
  ],
  "cups-king": [
    "Emotional maturity and calm authority support love, work and health. Respond rather than react, and keep your heart open.",
    "Suppressed feelings or emotional manipulation create tension in love, work and the body. Name what you feel and seek honest support.",
  ],

  // ---- Swords ----
  "swords-ace": [
    "Clarity cuts through confusion in love, work and health. Name the problem honestly and make a clean, informed decision.",
    "Mental fog or harsh self-talk clouds love, work and wellbeing. Rest your mind before forcing an answer.",
  ],
  "swords-2": [
    "Indecision and tension keep love, work and health stuck. Step away from the choice long enough to breathe and see clearly.",
    "The stalemate is breaking in love, work and life. Make the decision you have been avoiding, even if it is imperfect.",
  ],
  "swords-3": [
    "Heartache or mental pain touches love, work and health. Let yourself grieve and avoid replaying the wound.",
    "Healing is beginning in love, work and wellbeing, though the ache lingers. Be patient with the recovery process.",
  ],
  "swords-4": [
    "Rest is essential for love, work and health. Withdraw, sleep and give your nervous system a genuine break.",
    "Restlessness or burnout signals that love, work and the body have not rested enough. Return to stillness before pushing on.",
  ],
  "swords-5": [
    "Conflict and winning at all costs drain love, work and health. Choose peace over being right where you can.",
    "The aftermath of a fight weighs on love, work and wellbeing. Make amends or walk away and release the tension.",
  ],
  "swords-6": [
    "Moving away from turbulence brings relief to love, work and health. Choose calmer waters and give yourself time to transition.",
    "You are carrying old stress into love, work and life. Leave the mental baggage behind where you can.",
  ],
  "swords-7": [
    "Avoidance or self-deception costs energy in love, work and health. Face what you are hiding from and tell yourself the truth.",
    "A secret or evasion is coming to light in love, work or life. Honesty restores your energy.",
  ],
  "swords-8": [
    "Feeling trapped is often a mental cage in love, work and health. Challenge the story that says you have no options.",
    "The bind is loosening in love, work and life. Take one small action that proves you are not powerless.",
  ],
  "swords-9": [
    "Anxiety and sleepless worry touch love, work and health. Talk to someone and ground yourself in the present.",
    "The worst of the anxiety is passing in love, work and life. Keep using the supports that help you feel safe.",
  ],
  "swords-10": [
    "A painful ending or mental exhaustion asks you to stop fighting in love, work and health. Rest and let the cycle close.",
    "Recovery is beginning in love, work and wellbeing after a low point. Do not rush, but let yourself rise slowly.",
  ],
  "swords-page": [
    "Curiosity and clear communication help love, work and health. Ask questions and stay mentally flexible.",
    "Gossip, scattered thoughts or harsh words create stress in love, work and the body. Pause before speaking or believing.",
  ],
  "swords-knight": [
    "Fast, decisive energy moves love, work and health forward. Act with purpose, but watch for mental overdrive.",
    "Recklessness or aggression burns out love, work and the body. Slow down and choose your battles carefully.",
  ],
  "swords-queen": [
    "Clear boundaries and honest speech protect love, work and health. Say what you mean with compassion.",
    "Coldness or biting criticism strains love, work and wellbeing. Soften the inner voice and allow warmth back in.",
  ],
  "swords-king": [
    "Mental discipline and fair judgement support love, work and health. Make decisions from principle, not fear.",
    "Rigid thinking or harsh authority creates tension in love, work and the body. Question the rule and make room for nuance.",
  ],

  // ---- Pentacles ----
  "pentacles-ace": [
    "A seed of physical wellbeing and stability is available in love, work and health. Start one simple, practical habit.",
    "Missed opportunities or neglect of the body affect love, work and life. Begin with one small, tangible step.",
  ],
  "pentacles-2": [
    "Balance and adaptability keep love, work and health steady. Juggle your commitments without dropping your own needs.",
    "Overcommitment or disorganisation strains love, work and wellbeing. Simplify and drop what is not essential.",
  ],
  "pentacles-3": [
    "Skill, collaboration and steady work build strength in love, work and health. Value the craft of caring for yourself.",
    "Lack of support or poor planning undermines love, work and the body. Ask for help and improve the routine.",
  ],
  "pentacles-4": [
    "Security and boundaries protect love, work and health. Hold on to what sustains you without becoming rigid.",
    "Hoarding or fear of loss tightens love, work and the body. Loosen your grip and let support circulate.",
  ],
  "pentacles-5": [
    "Hardship or isolation weighs on love, work and health. Accept help and remember you are not alone.",
    "The worst of the scarcity is passing in love, work and life. Keep reaching for support and rebuild slowly.",
  ],
  "pentacles-6": [
    "Generosity and fair exchange restore balance in love, work and health. Give and receive support without keeping score.",
    "Imbalance in giving or receiving drains love, work and wellbeing. Set limits and ask for what you need.",
  ],
  "pentacles-7": [
    "Patience and steady effort are paying off in love, work and health. Tend your routines and trust the slow growth.",
    "Impatience or scattered effort stalls love, work and life. Return to one sustainable practice.",
  ],
  "pentacles-8": [
    "Focused, repetitive practice builds mastery and calm in love, work and health. Dedicate time to a craft or skill that grounds you.",
    "Perfectionism or boredom with routine creates strain in love, work and the body. Vary the practice and release the need to be flawless.",
  ],
  "pentacles-9": [
    "Self-sufficiency and comfort support love, work and health. Enjoy the fruits of your care and independence.",
    "Overwork or dependence on status leaves love, work and wellbeing unfulfilled. Reconnect with simple pleasures.",
  ],
  "pentacles-10": [
    "Long-term stability and family support nourish love, work and health. Invest in the home and relationships that sustain you.",
    "Family or financial strain unsettles love, work and wellbeing. Focus on the foundations you can realistically repair.",
  ],
  "pentacles-page": [
    "A practical new beginning is available in love, work and health. Learn one small skill or habit that supports your body.",
    "Lack of focus or follow-through stalls love, work and life. Choose one simple practice and keep it.",
  ],
  "pentacles-knight": [
    "Steady, methodical effort gets results in love, work and health. Keep your routines consistent and unglamorous.",
    "Stubbornness or drudgery wears down love, work and the body. Vary the routine and remember why you started.",
  ],
  "pentacles-queen": [
    "Nurturing, grounded care restores love, work and health. Tend to your body, home and the people who depend on you.",
    "Overgiving or neglect of self-care depletes love, work and wellbeing. Put your own needs back on the list.",
  ],
  "pentacles-king": [
    "Stability, discipline and material security support love, work and health. Build a sustainable foundation for long-term wellbeing.",
    "Greed, rigidity or overwork undermines love, work and health. Loosen your grip and invest in rest.",
  ],
};

Object.entries(COMBINED_READINGS).forEach(([id, reading]) => {
  if (EXTRA[id]) EXTRA[id].combined = reading;
});
