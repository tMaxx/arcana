"use strict";

/* ------------------------------------------------------------------ *
 * Combined summaries: Major Arcana, The Hanged Man to The World.
 * Field-dependent: one [upright, reversed] pair per selected set of
 * love / career / health contexts.
 * ------------------------------------------------------------------ */

const COMBINED_MAJOR_2 = {
  "hanged-man": {
    "love+career": [
      "Stepping back from a stalled decision at your job shows you what your partner has been trying to say, and the reverse is true too. Hold off on forcing an answer in either place, and ask what a different angle would reveal.",
      "Waiting has become a habit, and both your relationship and your job sit in limbo while you call it patience. Make one small decision this week, because sacrifice that changes nothing helps neither side.",
    ],
    "love+health": [
      "Slowing down lets your heart and your energy catch up with each other. Release the urge to fix things between you and a partner, and rest long enough to notice what your own needs are saying.",
      "You may be giving up rest and comfort to keep a relationship smooth, and the sacrifice is not buying closeness. Name one need you have been postponing, and ask for it plainly.",
    ],
    "career+health": [
      "A deliberate pause from ambition restores the energy your ambition depends on. Step away from the pressing task, rest without guilt, and let a fresh angle on your career arrive on its own.",
      "Pushing through exhaustion is not noble if nothing changes at your desk. Notice where you are stalling and where you are spending energy for no gain, then drop one commitment that gives nothing back.",
    ],
    "love+career+health": [
      "Everything slows for a reason, and the pause touches your relationship, your job, and your energy at once. Let go of control in one area and watch how the others shift. A rested mind sees more clearly than force does.",
      "You are waiting on every front, and sacrifice in one place quietly drains the others. Your partner senses distance, your job stalls, and your energy flags. Pick the area where a decision is overdue and act there first.",
    ],
  },
  "death": {
    "love+career": [
      "An ending in one area clears space in the other, such as a role that closes making room for a deeper bond. Let the old version go on purpose, and keep what still has life in it.",
      "Clinging to a worn-out pattern at your job keeps your relationship stuck in the same groove, and the reverse holds too. Name what has already finished, then take one step toward what comes next.",
    ],
    "love+health": [
      "Closing an old chapter between you and a partner frees energy you did not know you were spending. Grieve what ends, then notice how much lighter you feel once you stop holding it up.",
      "Holding on to what has already ended keeps you tense, and that tension colors how you meet the people close to you. Let one old habit or hope go, and see what softens.",
    ],
    "career+health": [
      "Releasing a role, routine, or standard that has run its course gives your energy somewhere better to go. Shed what drains you, and let a leaner, steadier rhythm take its place.",
      "Resisting a necessary change at your job leaves you stuck and worn down at once. Admit what is finished, grieve it briefly, and move toward a pace you can actually sustain.",
    ],
    "love+career+health": [
      "A real ending is under way, and it reaches your relationship, your job, and your energy together. Resist the urge to rush any of them. Let go of what is spent, and each area gets room to renew in its own time.",
      "Fear of change is holding all three in place: a bond that has gone quiet, a job that no longer fits, and a tired rhythm you keep repeating. Choose one thing to release, and the others loosen more easily.",
    ],
  },
  "temperance": {
    "love+career": [
      "Balance in one area steadies the other, so a measured share of attention at your job leaves your partner more of your patience. Blend the two gently, without trading one against the other.",
      "Excess in one place starves the other, such as long days that leave nothing for your partner. Adjust the proportions slowly, and aim for a mix that you can keep up without resentment.",
    ],
    "love+health": [
      "Moderation helps you and the person beside you, because a steady, gentle rhythm makes closeness easier and your energy last longer. Share the pace instead of racing ahead or lagging behind.",
      "Swinging between too much and too little leaves both your bond and your energy uneven. Slow down, add a little of what is missing, and let the two of you settle into a gentler routine.",
    ],
    "career+health": [
      "A measured pace at your job protects the energy that keeps you good at it, so mix effort with real rest. Let patience do what sprinting cannot, and keep the blend steady from one week to the next.",
      "Too much effort, too little rest, or the other way around, is throwing your routine off. Adjust one habit at a time, and let your career pace match what your energy can sustain.",
    ],
    "love+career+health": [
      "Your relationship, your job, and your energy all do better with a steady blend. Give each a fair share instead of letting one run the show. Patience here is a practical choice, and it keeps the whole mix calm.",
      "One area is overflowing while the others run dry, and the imbalance shows up everywhere. A partner gets leftovers, your job gets rushed effort, and your energy sags. Measure out your time more evenly, and be patient with the adjustment.",
    ],
  },
  "devil": {
    "love+career": [
      "A bond may be tied to security, status, or habit more than choice, and the same hold can shape your job. Ask honestly what keeps you attached, and where you could loosen the grip.",
      "Seeing the chain is the first step out of it, whether it is a dependent relationship or a role you stay in for the wrong reasons. Take one small step toward independence, and notice how the other area responds.",
    ],
    "love+health": [
      "A strong pull toward someone or something may be running your habits more than you admit. Enjoy what is real, but look at what you reach for to feel secure, and whether it costs your energy.",
      "You are starting to see the loose chain, and you may be ready to take it off. Be honest about a pattern that ties you to a person or a comfort, and choose small acts that restore your own balance.",
    ],
    "career+health": [
      "Ambition, status, or a paycheck can tighten into a grip that costs your energy. Look at what you do from compulsion rather than choice, and loosen one habit that keeps you running on empty.",
      "You are starting to see how a role or routine has held you, and the chain is looser than it feels. Cut back one compulsive pattern, and let your energy return to you instead of the grind.",
    ],
    "love+career+health": [
      "A hold on you may be showing up in all three: a bond kept out of fear, a job kept for status, and habits that numb the strain. None of it is permanent. Name the pattern, then loosen it in whichever area feels most possible.",
      "You are waking up to what has bound you, and pulling free in one area gives courage in the others. Reclaim a choice about your partner, your job, or a daily habit, and let the change spread. Slip back into denial and all three tighten.",
    ],
  },
  "tower": {
    "love+career": [
      "A sudden shake in one area exposes weak foundations in the other, and what falls away is painful but clarifying. Stay honest, and rebuild what both your relationship and your job truly need.",
      "You can feel the cracks coming, and avoiding them in one area only stretches out the strain in the other. Face the truth now, on your terms, before it arrives on its own schedule.",
    ],
    "love+health": [
      "A shock to your closest bond rattles your sense of ground, and your energy takes the hit as well. Be gentle with yourself while the dust settles, and let honest truth be the new foundation.",
      "Tension you have been holding in is building, and it affects how you connect with a partner. Release it in small, safe ways now, rather than waiting for a larger break to do it for you.",
    ],
    "career+health": [
      "A sudden change at your job tests your footing and drains your energy at the same time. Look after your basics first, then rebuild your plans on truer ground than the ones that fell.",
      "Strain has been building at your job, and you are bracing against it at a cost to your energy. Let go of the structure that no longer holds, and make a gentler change before a hard one forces your hand.",
    ],
    "love+career+health": [
      "Upheaval in one area sends shock through the rest: a bond rattled, a job unsettled, and your energy stretched. It is hard, but false structures are what fall. Care for yourself first, then rebuild each area on honest ground.",
      "The upheaval is quieter, but it is still spreading. Strain at your job, distance with a partner, and fatigue feed each other while you brace against it all. Choose one honest conversation or change, and let it release some pressure for the rest.",
    ],
  },
  "star": {
    "love+career": [
      "Hope is returning, and it steadies both your relationship and your job. Offer a partner your open, unguarded self, and let the same quiet sincerity guide your next professional step.",
      "Discouragement in one area dims your outlook on the other. Reconnect with what first inspired you, in your relationship or your job, and take one small, sincere step to restore it.",
    ],
    "love+health": [
      "Renewal flows both ways here, since tender closeness restores your energy and a calmer, rested self is easier to love and be loved by. Make time for gentle, nourishing moments together and alone.",
      "Feeling low drains your sense of closeness, and distance deepens the low in turn. Start small, with rest, fresh air, or an honest word with someone who cares, and let hope return slowly.",
    ],
    "career+health": [
      "Renewed hope at your job and a restored sense of ease support one another. Choose goals that inspire you, and protect the calm routines that let you pursue them without burning out.",
      "Doubt about your career can leave you worn out, and being worn out deepens the doubt. Return to something that reminds you why you started, and give your energy gentle, regular care.",
    ],
    "love+career+health": [
      "A calm, hopeful stretch is opening, and your relationship, your job, and your energy all benefit from it. Let each one restore the others: rest feeds your sincerity, and your sincerity makes room for steady, inspired effort that you can keep up.",
      "Hope feels distant, and the gloom is touching your relationship, your job, and your energy at once. Do not wait for a big shift, but tend one small thing in each area and let faith rebuild from there.",
    ],
  },
  "moon": {
    "love+career": [
      "Uncertainty in one area colors the other, so you may read hidden meanings into a partner just as you doubt where your job is heading. Move slowly, ask direct questions, and trust what stays steady.",
      "A fog is beginning to lift, and what you feared in one area may turn out smaller than imagined. Check your assumptions about your partner and your job against plain facts, and let go of the stories you made up.",
    ],
    "love+health": [
      "Anxiety can stir up doubts about a partner, while uncertainty with them can stir up restless nights. Give your feelings room without treating each one as proof, and lean on steady routines and open, gentle questions.",
      "Fear you have been pushing down is surfacing in your closeness with someone and in how you feel day to day. Name it aloud to someone you trust, and let your energy settle as the shadows shrink.",
    ],
    "career+health": [
      "Unclear prospects at your job feed worry, and worry clouds your judgment in return. Stick to steady routines and verified facts, and take decisions in daylight rather than in the dead of night.",
      "Something you have been avoiding at your job is coming into focus, and your anxiety may ease once you look at it. Replace the vague dread with facts and one concrete next step, and let your rest improve.",
    ],
    "love+career+health": [
      "Uncertainty spreads across all three: unsaid things with a partner, an unclear path at your job, and unsettled energy. Do not trust each worry as fact. Keep to steady habits, ask plain questions, and move step by step through the fog.",
      "The haze is beginning to clear, and you can see how fears about a partner, your job, and your energy were feeding each other. Test each story against what is real, and release the ones that fall apart.",
    ],
  },
  "sun": {
    "love+career": [
      "Warmth and confidence in one area lift the other, since a happy bond gives you clarity to shine at your job and success there makes you easy to be with. Share your wins openly, and enjoy them together.",
      "A cloud is passing over, and overconfidence or a dull stretch in one area may be dimming the other. Be honest about what is missing, and let simple, shared joy bring the light back.",
    ],
    "love+health": [
      "Joy and vitality feed one another, since closeness with someone you trust raises your energy and feeling well makes you more playful and open. Spend time outdoors together, and let ease be enough.",
      "Your usual sparkle is a little muted, and it shows in how connected you feel. Do not force cheer, but rest, laugh, and spend simple time with someone warm until the glow returns.",
    ],
    "career+health": [
      "Energy and success are lifting each other, so you feel clear and capable and the results reinforce your strength. Enjoy the momentum, and keep the simple habits that fuel it.",
      "Overconfidence at your job may be pushing past what your energy can give, or low energy may be dulling real accomplishment. Slow down, check in honestly, and let achievement and rest share the stage.",
    ],
    "love+career+health": [
      "Things are bright, and each area helps the others glow: a warm bond steadies you, success at your job builds confidence, and good energy carries both. Enjoy it fully, and share the credit with those who helped along the way.",
      "The light is still there, only dimmed, and overconfidence or a dull patch in one area is clouding your relationship, your job, and your energy. Return to simple pleasures, stay honest about where you stand, and let joy come back in time.",
    ],
  },
  "judgement": {
    "love+career": [
      "A call is waking you in two places at once. Look honestly at what your relationship and your job have been telling you, forgive past missteps in both, and answer the call that feels most true.",
      "Harsh self-criticism about the past is stalling a choice in your relationship and your job. Forgive yourself for what you did not know, and stop pretending you cannot hear what is calling you.",
    ],
    "love+health": [
      "A wake-up call invites you to review how you have been treating yourself and those close to you. Forgive old patterns, and choose a caring habit that honors both your energy and your closeness.",
      "Self-blame is wearing you down, and it makes it harder to be open with someone. Treat yourself with the compassion you would give a friend, and let the past stop dictating how you feel today.",
    ],
    "career+health": [
      "A reckoning is clarifying whether your job still suits the person you are becoming. Review your habits and your energy honestly, forgive past choices, and answer the call to rebuild your days.",
      "You may be ignoring a signal that your pace or your path needs to change, and harsh self-judgment will not help. Listen with kindness, and make one decision that respects both your ambitions and your energy.",
    ],
    "love+career+health": [
      "A clear call is rising, and it asks you to review your relationship, your job, and your energy as one picture. Forgive what is behind you, listen to what feels true, and let rebirth begin where it matters most.",
      "Self-criticism is drowning out an honest call, and it dims your closeness, your job, and your energy together. Release the old verdict you passed on yourself, then choose one change that answers what you already know deep down.",
    ],
  },
  "world": {
    "love+career": [
      "A cycle is closing well, and the closure in one area gives the other room to complete. Your relationship and your job both feel more whole, so celebrate the accomplishment and prepare for the next chapter.",
      "You are nearly there, but a loose end in one area holds the other back. Finish what is still open instead of skipping ahead, and bring your relationship and your job to a real close.",
    ],
    "love+health": [
      "A sense of wholeness settles over you, as closeness and personal ease reinforce each other and you feel complete as you are. Take time to appreciate how far you have come, and let it nourish what is next.",
      "Something still feels unfinished, and it keeps you from fully relaxing with someone you care for. Tend to the loose thread, whether a conversation or a habit, and let completion bring you peace.",
    ],
    "career+health": [
      "A major goal comes to fruition, and you are well placed to enjoy it. Honor the finish with real rest, and let the accomplishment settle in before you chase the next one.",
      "A project is almost done, but cutting corners or ignoring tiredness keeps it from truly closing. Finish properly, rest honestly, and let your energy catch up with what you have achieved.",
    ],
    "love+career+health": [
      "A cycle completes across your whole life, and your relationship, your job, and your energy feel integrated rather than competing. Celebrate what you have built, take time to rest in it, and prepare calmly for what comes after.",
      "You are close to completion, but loose ends in one area hold back the others. Shortcuts at your job, an unspoken matter with a partner, or ignored tiredness all keep the cycle open. Finish the one that is nearest, and the rest follow.",
    ],
  },
};

Object.assign(COMBINED_READINGS, COMBINED_MAJOR_2);
Object.entries(COMBINED_MAJOR_2).forEach(([id, combined]) => {
  if (EXTRA[id]) EXTRA[id].combined = combined;
});
