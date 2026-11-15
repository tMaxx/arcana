"use strict";

/* ------------------------------------------------------------------ *
 * Combined summaries: Major Arcana, The Fool to Justice.
 * Field-dependent: one [upright, reversed] pair per selected set of
 * love / career / health contexts.
 * ------------------------------------------------------------------ */

const COMBINED_MAJOR_1 = {
  "fool": {
    "love+career": [
      "A fresh start in romance can ride the same nerve as a new venture, so let one risk teach you how to take the other. Say the honest thing to someone and pitch the untested idea, both while the stakes are still small.",
      "Reckless enthusiasm in a relationship and in your job can feed each other, each impulsive choice excusing the next. Or fear freezes both, and you wait for certainty in each. Pick one small, real step in either and take it this week.",
    ],
    "love+health": [
      "Lightness with someone you care about loosens something in you as well. Play, spontaneity and shared novelty feed your wellbeing, and feeling better makes you more open. Try something new together, and keep it simple enough to enjoy.",
      "Rushing into closeness can leave you drained, and a drained state makes you grab at closeness too fast. Caution can also keep both stuck. Slow the pace, notice how you feel after time together, and let that guide the next step.",
    ],
    "career+health": [
      "A new venture feels lighter when you stay curious instead of driven, and curiosity keeps your energy up for it. Start small, move in ways you enjoy, and let play sit beside ambition rather than below it.",
      "Leaping into a new role while ignoring tiredness spends energy you will need later, while endless hesitation leaves both ambition and vitality idle. Check what you have in reserve before committing, then take one modest, sustainable step.",
    ],
    "love+career+health": [
      "A beginning in one area loosens the others. Openness in romance, a bold try in your career, and play that restores you all draw on the same willingness to be a beginner. Choose one small leap this week and let the other two follow its momentum.",
      "Impulse in one area can cost the other two: a rushed commitment, a hasty career move, or ignored fatigue each makes the next worse. Hesitation does the same quietly. Slow down, name which area carries the most risk, and start there with something small.",
    ],
  },
  "magician": {
    "love+career": [
      "Clear speech serves you in both arenas, since the person who states intent plainly gets heard on a date and in a meeting alike. Decide what you want from each, then ask for it directly and with skill.",
      "Charm used as technique can win a pitch and still cost you trust at home, and smooth talk in one place trains you to perform in the other. Match your words to what you will actually do, then let results speak.",
    ],
    "love+health": [
      "Focused intention gives you the means to shape both closeness and wellbeing. Choose one shared habit, name its purpose aloud, and use the skills you already have to make it routine.",
      "Scattered attention thins both intimacy and self-care, and persuading yourself that you are fine hides what you need. Say what is true to the person near you, then give one need your full attention.",
    ],
    "career+health": [
      "Skill and focus can turn a stalled routine into a system that supports both ambition and stamina. Pick one practice that protects your energy, schedule it like a task that matters, and let results compound.",
      "Talent spread across too many tasks drains the energy it depends on, and a drained state makes spin tempting over substance. Cut the list to one item, protect time to recover, and finish what you start.",
    ],
    "love+career+health": [
      "Your resources are enough, and focus is what links them. A clearly stated wish in romance, a launched project, and a routine that keeps you steady each strengthen the others. Choose one intention for each, then act on all three in small, deliberate ways.",
      "Scattered effort and polished claims drain all three areas at once: promises in love outpace follow-through, projects stall, and your own care gets skipped. Narrow to one real commitment in each, and check it against what you can actually deliver.",
    ],
  },
  "high-priestess": {
    "love+career": [
      "Quiet attention reveals what both a relationship and a job are not saying aloud. Notice the pause in conversation and the unspoken mood in a meeting, then wait before acting. What you sense first usually proves accurate.",
      "Ignoring a hunch about a person while explaining away a doubt about a role keeps you on the surface of both. Secrets, yours or theirs, grow in the silence. Write down what you suspect and ask one direct question.",
    ],
    "love+health": [
      "Your inner sense links what you feel for others with how you feel in yourself. Stillness, journaling or time alone shows which closeness nourishes you and which depletes you. Listen first, then adjust how you spend your time together.",
      "Dismissing an inner signal can leave you unsettled around people you care about, and unspoken feelings show up as tension you cannot place. Make room for quiet, and name what you notice, even if only to yourself.",
    ],
    "career+health": [
      "Your intuition tells you when a role suits you and when it costs more than it pays. Treat tiredness, unease and quiet certainty as information. Make space for stillness before the next big decision.",
      "Pushing past a persistent feeling about a role often shows up later as exhaustion or a dull sense of dread. Ambition drowns out the signal. Slow down enough to ask what you already know, and write it down.",
    ],
    "love+career+health": [
      "A quiet inner sense runs underneath all three areas. What it tells you about a relationship, a role, and how you are holding up fits together if you listen long enough. Set aside regular stillness, and treat what you notice as information rather than noise.",
      "Surface thinking leaves all three areas full of unspoken things: doubts about someone close, unease about your direction, and signals from within that you override. Take quiet time, write plainly what you know, and bring one hidden item into the open.",
    ],
  },
  "empress": {
    "love+career": [
      "Warmth and generosity make a relationship bloom, and the same nurturing instinct makes a project or team grow. Give attention freely in both, and let enjoyment, not output alone, tell you it is going well.",
      "Smothering care or neglect can show up in both a close tie and a role, with too much hovering or too little tending. Dependence, yours or theirs, blurs the line. Offer support, then let things grow on their own.",
    ],
    "love+health": [
      "Affection, touch, good meals and time in comfortable places nourish you and the people close to you together. Let pleasure be a daily practice rather than a reward, and tend yourself as warmly as you tend others.",
      "Giving everything to someone else can leave you depleted, and neglecting yourself leaves you with less to give. Smothering or clinging may follow. Take back one small act of self-care and let the other person manage theirs.",
    ],
    "career+health": [
      "Creative output grows best when you are nourished, rested and comfortable. Feed yourself well, make your space pleasant, and let a steady, sensual pace produce better results than strain.",
      "A creative block and a worn-down routine tend to arrive together, each feeding the other. Overgiving to a team or project drains the supply. Restore basic comforts first, then return to the task with fresh appetite.",
    ],
    "love+career+health": [
      "Abundance flows between all three areas. Nurturing a relationship, tending a project, and caring for yourself with good food and rest each give back to the others. Enjoy the harvest in one, then carry that ease into the remaining two.",
      "Overgiving in one area leaves the others thin: a clingy dynamic, a stalled creative project, and neglected self-care can form a loop. Withdraw some effort from where you hover most, and put it into your own nourishment first.",
    ],
  },
  "emperor": {
    "love+career": [
      "Reliable structure helps both a relationship and a career, since clear commitments, boundaries and routines make trust easier. Take responsibility for what is yours in each, and lead by showing steady follow-through.",
      "Control can seep from one area into the other, so a demanding boss becomes a demanding partner, or the reverse. Rigid rules and absent leadership both strain trust. Loosen one rule and take charge of one neglected duty.",
    ],
    "love+health": [
      "Dependable routines and firm boundaries protect both closeness and steadiness. Agree on rhythms for meals, rest and time together, and keep them. Structure offered with care feels like safety rather than control.",
      "Rigid rules or none at all strain intimacy and leave you unsettled. Needing control over someone, or giving it up entirely, shows up as tension in how you carry yourself. Set one reasonable boundary and invite the other to share it.",
    ],
    "career+health": [
      "Discipline in your schedule supports both achievement and stamina. Set firm hours, keep regular routines for rest and movement, and lead yourself the way you would lead a good team.",
      "Rigid control over a schedule can wear you down, while a lack of structure leaves effort and energy leaking away. Domination of others or of yourself gets expensive. Build a sensible routine and allow some flexibility within it.",
    ],
    "love+career+health": [
      "Structure holds all three areas up. Clear commitments in love, steady authority in your career, and routines that keep you well each make the others easier to maintain. Set one firm boundary and one reliable habit, and keep both.",
      "Control or its absence spreads across all three areas: a domineering streak at home, rigid habits on the job, and neglected routines for yourself. Loosen the grip where it is tightest, and rebuild one small structure where things have drifted.",
    ],
  },
  "hierophant": {
    "love+career": [
      "Shared values and recognized commitments steady both romance and a profession. Learn from a mentor in each, honor agreements, and let tested ways guide you before you start improvising.",
      "Conventions can pinch in both areas, whether it is expected milestones in a relationship or a career path that does not fit. Question which rules are truly yours. Then choose your own terms and state them openly.",
    ],
    "love+health": [
      "Rituals you share, such as a regular meal, a walk, or a family custom, support both closeness and wellbeing. Lean on tested practices and trusted guidance, and let the familiar steady you.",
      "Conforming to what others expect can leave you feeling hollow around people you care about, and rigid habits can hold you back too. Question which customs serve you, and shape a ritual that is truly yours.",
    ],
    "career+health": [
      "Established routines and respected guidance serve both ambition and stamina. Follow a proven method, learn from someone with experience, and let tradition give shape to your days and your habits.",
      "Following the institution blindly can drain you, and so can rebelling against every rule. Consider which expectations in your profession wear you down, and replace one with a practice that suits you better.",
    ],
    "love+career+health": [
      "Tested wisdom supports all three areas. A shared tradition in love, a mentor or proven path in your career, and time-honored habits for your wellbeing each give you something to stand on. Pick one trusted guide and one ritual to rely on.",
      "Expectations press on all three areas, from how a relationship should look to what your career should be to how you should care for yourself. Question each rule on its own terms, keep what fits, and write your own version of the rest.",
    ],
  },
  "lovers": {
    "love+career": [
      "Alignment of values makes choices clear in both areas. When what you want in love and what you pursue in your career point the same way, decisions feel easier. Choose deliberately and say so plainly.",
      "A conflict between the heart and ambition surfaces, and avoiding the choice strains both. Your partner and your profession pull in different directions. Name what you value most, then decide one thing you can adjust.",
    ],
    "love+health": [
      "Honest, mutual connection steadies you, and feeling steady lets you be more present. Choose closeness that matches your values, and let harmony between two people support harmony within you.",
      "Misalignment in a bond shows up as unease in how you feel day to day, and the unease makes the bond harder. Avoiding a decision prolongs both. Say what is true and make the choice you have delayed.",
    ],
    "career+health": [
      "Choosing what fits your values makes ambition sustainable. When your daily tasks align with what matters to you, energy comes more easily. Make one choice this week that brings your habits and goals closer together.",
      "A goal that conflicts with your values leaves you divided and tired, and fatigue makes the next decision harder. Avoiding the choice costs more than making it. Name the mismatch and adjust one thing.",
    ],
    "love+career+health": [
      "A single honest choice aligns all three areas. When you act on what you value, closeness deepens, your career gains direction, and your wellbeing improves. Decide what matters most, then let each area reflect it in one visible way.",
      "Divided loyalties pull on all three areas: the heart wants one thing, ambition another, and your own needs get overruled. Avoided choices compound over time. Name the conflict plainly, and make the one decision that restores alignment across all of them.",
    ],
  },
  "chariot": {
    "love+career": [
      "Determined drive can carry a career forward and make a relationship feel purposeful, as long as you hold both reins. Set a shared direction, keep your focus, and bring the other person along rather than outpacing them.",
      "Ambition and affection pull in opposite directions, and aggression in one spills into the other. Losing the reins in either costs you in both. Pause, choose one direction, and bring the other area back into step.",
    ],
    "love+health": [
      "Discipline and momentum help you keep up a shared effort, whether it is a training plan, a routine, or a goal together. Move forward at a pace you both can sustain, and celebrate steady progress.",
      "Pushing too hard strains both closeness and your reserves, and impatience can turn into sharp words. When forces pull in different directions, slow down, agree on a pace, and take back control of your own.",
    ],
    "career+health": [
      "Willpower can build a lasting routine and drive achievement together. Direct your focus with discipline, keep a pace you can sustain, and let progress in one area give momentum to the other.",
      "Driving yourself hard for a goal burns the energy that the goal needs, and lost direction makes it worse. Consider where you are forcing the pace. Rein in the effort and pick one clear heading.",
    ],
    "love+career+health": [
      "Determination carries all three areas when you hold the reins firmly. Steady progress in your career, a relationship moving in a shared direction, and a pace that your wellbeing can sustain support each other. Set one clear heading and keep control of the speed.",
      "Forces pull three ways: ambition, affection and your own limits each want the wheel. Aggression or drift in one area spills into the rest. Stop, decide what takes priority this month, and bring the other two into line with it.",
    ],
  },
  "strength": {
    "love+career": [
      "Patient courage softens conflict in both areas. A gentle, steady response to tension in a close tie or with a difficult colleague wins more than force. Stay calm, show compassion, and trust quiet confidence.",
      "Self-doubt in a relationship and a shaky sense of competence in a role feed each other, and raw reactions in one area can leak into the other. Respond with care instead of force, starting with yourself.",
    ],
    "love+health": [
      "Gentleness toward yourself and toward someone close reinforce each other. Patience with a difficult feeling makes you kinder in company, and kindness steadies you in turn. Meet impulse with calm, not criticism.",
      "Raw emotion or harsh self-criticism can strain closeness and wear down your reserves in turn. Courage falters when care is missing. Offer yourself the patience you would give someone you cherish.",
    ],
    "career+health": [
      "Quiet resilience carries you through demanding stretches. Patience with setbacks and gentle discipline with your habits build stamina that lasts longer than force. Meet pressure with calm confidence.",
      "Self-doubt and overexertion form a loop, with pressure on the job draining your reserves and low reserves shaking your confidence. Using force in place of care costs more. Return to patience, and ease off one demand.",
    ],
    "love+career+health": [
      "Calm courage links the three areas. Patience with a loved one, steady confidence in your career, and gentleness toward your own limits each build the same quiet power. Meet the next pressure with composure and let kindness lead.",
      "Doubt travels across all three areas: you snap at someone close, second-guess your abilities, and push through fatigue. Force replaces care each time. Choose one place to practice patience with yourself first, then let that gentler habit spread outward to the other two.",
    ],
  },
  "hermit": {
    "love+career": [
      "Time apart to reflect clarifies what you want from both a relationship and a career. Step back from the noise, ask honest questions, and seek advice from someone who has walked a similar path.",
      "Withdrawal can go too far in both areas, leaving a bond quiet and a career isolated. Refusing guidance keeps you stuck. Reach out to one person you trust and share what you have been thinking.",
    ],
    "love+health": [
      "Solitude that restores you also makes you a better companion. Take quiet time to find out what you need, then bring that clarity back to the people you care about.",
      "Retreating too long leaves you lonely and the ones close to you shut out, and loneliness is draining in its own right. Refusing support deepens it. Reach out in a small way and accept some company.",
    ],
    "career+health": [
      "Stepping back to reflect protects your reserves and clarifies your direction. Create a quiet interval in your week, ask what you really want from your path, and let a wise guide help.",
      "Isolation at your desk can turn into exhaustion, and too little solitude does the same. Refusing guidance or rest keeps you stuck. Find the right balance of retreat and contact, starting with one conversation.",
    ],
    "love+career+health": [
      "Reflection shows how the three areas fit together. Quiet time reveals what you want from a relationship, which direction your career should take, and what you need to feel well. Seek out one wise voice and one regular stretch of solitude.",
      "Withdrawal has spread across all three areas: fewer conversations with those close to you, a career pursued alone, and little attention to your own needs. Loneliness compounds. Accept one invitation, ask one person for advice, and rebuild contact gently.",
    ],
  },
  "wheel-of-fortune": {
    "love+career": [
      "A turning point in one area opens movement in the other. Timing is on your side, so say yes to the change in a relationship or a career, and stay flexible about how the pieces fall.",
      "Resisting a change in one area makes the other feel unlucky, and setbacks in both can seem connected. Cycles do turn. Look for the lesson in each, and adapt rather than waiting for things to return to how they were.",
    ],
    "love+health": [
      "A shift in your circumstances brings fresh momentum to both closeness and wellbeing. Accept the turn, notice what feels lighter, and adjust shared routines to match the new season.",
      "A rough patch in your daily rhythm and a dip in closeness can seem to arrive together. Resisting change prolongs both. Treat it as a cycle, keep your routines simple, and let the lesson show itself.",
    ],
    "career+health": [
      "A change in circumstances lifts both ambition and energy. Ride the upswing, but keep sensible habits so you can sustain it, and adjust your schedule to match the new season.",
      "A setback in your career and a dip in energy can arrive together and feed each other. Cycles turn, so avoid drastic moves. Keep routines steady, learn what the downturn teaches, and wait for the shift.",
    ],
    "love+career+health": [
      "Life is turning in your favor across all three areas. A change in closeness, a shift in your career, and a lift in your general wellbeing can reinforce each other. Welcome the movement and keep one steady routine as an anchor.",
      "A run of setbacks seems to touch all three areas at once, with strain in love, delays in your career, and low reserves. Cycles do turn. Resist blaming fate, keep your basics steady, and look for the lesson in each.",
    ],
  },
  "justice": {
    "love+career": [
      "Honesty and fairness make both a relationship and a career sturdier. Be accountable for your part, expect the same in return, and weigh each choice by its consequences before you commit.",
      "Bias or dishonesty in one area can poison the other, such as a double standard at home or at the office. Dodging accountability costs trust in both. Tell the plain truth about your part and ask for the same.",
    ],
    "love+health": [
      "Honest accounting of what you give and receive keeps closeness and wellbeing in balance. Notice where cause and effect show up in your daily habits, and make fair, clear agreements.",
      "Unfair terms and unspoken resentments show up as tension in how you feel. Dodging accountability tips both out of balance. Be honest about what you are owed and what you owe, then adjust.",
    ],
    "career+health": [
      "Fair judgment about what you take on keeps ambition and stamina in balance. Review the consequences of your schedule honestly, set terms you can sustain, and hold yourself to the same standards you expect elsewhere.",
      "Ignoring the consequences of overwork catches up, and unfair demands erode your reserves. Bias clouds your judgment about your limits. Take honest stock of what your schedule costs, and correct one imbalance.",
    ],
    "love+career+health": [
      "Truth and fairness set the terms across all three areas. Honest agreements in love, fair dealing in your career, and honest accounting of what you can sustain hold each other up. Review the consequences of one choice and act on what you find.",
      "Imbalance in one area shifts weight onto the others: unfair terms in a relationship, shortcuts in your career, and costs to your wellbeing you have not tallied. Take honest stock of each, own your part, and correct the largest gap first.",
    ],
  },
};

Object.assign(COMBINED_READINGS, COMBINED_MAJOR_1);
Object.entries(COMBINED_MAJOR_1).forEach(([id, combined]) => {
  if (EXTRA[id]) EXTRA[id].combined = combined;
});
