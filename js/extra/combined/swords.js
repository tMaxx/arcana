"use strict";

/* ------------------------------------------------------------------ *
 * Combined summaries: Swords.
 * Field-dependent: one [upright, reversed] pair per selected set of
 * love / career / health contexts.
 * ------------------------------------------------------------------ */

const COMBINED_SWORDS = {
  "swords-ace": {
    "love+career": [
      "A clear, honest word cuts through confusion with someone close and sharpens your thinking on the job at the same time. Say the plain thing kindly to your partner, then put your best idea into writing at work.",
      "Blunt words or unspoken truths strain a close bond, while muddled messages cloud your standing at work. Pause before replying to either, check what you actually know, then say the simple version with care.",
    ],
    "love+health": [
      "Honest clarity about what you feel with someone close brings your mind a rare calm. Name one truth to a person you trust, then notice how much lighter your thoughts and your rest become.",
      "Sharp words or a swallowed truth keep your mind racing around someone close, and a wired mind leaves little patience for tenderness. Step away from the screen, sleep on it, and return to the talk once your head is quieter.",
    ],
    "career+health": [
      "A clear insight about your work gives your mind a sense of order, and a calmer head makes your decisions sharper. Write down the one thing you now see plainly, then protect the quiet that let you see it.",
      "A foggy, overworked mind produces muddled plans, and unclear plans keep your thoughts churning at night. Step back from the noise, rest before you decide, and gather the missing facts in the morning.",
    ],
    "love+career+health": [
      "Clear thinking runs through all three areas: an honest word steadies a close bond, a sharp idea sets your direction at work, and a quieter mind lets you rest. Start with one plain truth, say it kindly, and let the calm spread.",
      "A clouded mind trips up each area at once: harsh or hidden words strain closeness, careless thinking muddles your work, and a restless head wears down your rest. Slow down, separate fact from assumption, and tackle only one conversation today.",
    ],
  },
  "swords-2": {
    "love+career": [
      "Holding off on a hard choice keeps a close bond and your career both in a polite standoff. Gather the facts you are avoiding, then decide on one of them this week so neither stays frozen.",
      "The standoff breaks and relief arrives, whether through a truth finally spoken with someone close or a decision made at work. Follow through on what you chose, and let each area settle into its new honest shape.",
    ],
    "love+health": [
      "Guarding your feelings with someone close keeps your mind braced and your shoulders tight. Admit one thing you have been avoiding saying, and give your body a few slow breaths while you do.",
      "Relief comes as the guard drops, and an honest word with someone close loosens the tension you have been carrying. Rest into it, and let your mind stay open rather than rushing to rebuild the wall.",
    ],
    "career+health": [
      "Refusing to look at a work decision keeps your mind tense and your energy stuck in neutral. Name the choice in front of you, set a small deadline, and give yourself real downtime afterward.",
      "A decision finally made lets your mind unclench, and the energy you spent holding back returns. Act on the choice while it feels clear, and use the lighter mood to rest properly.",
    ],
    "love+career+health": [
      "Avoidance holds all three in suspense: an unspoken truth with someone close, a stalled decision at work, and a mind braced against rest. Choose the smallest honest step in one area, and notice how the tension eases in the others.",
      "The blindfold slips and relief moves through every area: a truth spoken eases closeness, a choice made frees your work, and your mind finally settles. Keep acting on what you now see, and let rest follow the clarity.",
    ],
  },
  "swords-3": {
    "love+career": [
      "Pain from a hard truth lands in a close bond, and the sting can follow you into your working day. Let yourself feel it, tell one trusted person, and keep your tasks small and manageable while the ache is fresh.",
      "Old hurt is loosening, yet replaying it with someone close can still sour your focus at work. Forgive in small, honest steps, stop rehearsing the story, and let your projects remind you that you are moving forward.",
    ],
    "love+health": [
      "Heartache with someone close weighs on your mind and leaves you tired and tense. Grieve without hurrying, talk to someone steady, and keep sleep, meals and gentle movement simple and regular while this passes.",
      "The pain is easing, but replaying old wounds with someone close keeps your thoughts spinning and your rest light. Let the story end when it ends, and give your mind kinder things to dwell on tonight.",
    ],
    "career+health": [
      "A hard setback or sharp criticism at work stings, and the sting settles into a tired, heavy mind. Treat it as hurt, not a verdict on you, and rest before you decide what to do next.",
      "Recovering from a work disappointment goes better when you stop rehashing it, since rumination keeps your energy low. Take what the experience taught you, set the rest down, and spend your evenings on real recovery.",
    ],
    "love+career+health": [
      "Heartbreak reaches into every area: a painful truth hurts closeness, a setback dents your focus at work, and grief leaves you worn in body and mind. Be honest about the hurt, lean on one steady person, and lower your demands for now.",
      "Healing is underway, though replaying the hurt can still pull on closeness, scatter your focus at work, and keep your sleep thin. Forgive at your own pace, set the story down when it loops, and let routine carry you.",
    ],
  },
  "swords-4": {
    "love+career": [
      "Stepping back for quiet restores both closeness and your career, because you return clearer. Tell someone close you need space, then protect one block of uninterrupted time away from tasks.",
      "Pushing past your need for stillness leaves you short with someone close and scattered at work. Admit that you are running on empty, ask for a pause, and return only when you can listen properly.",
    ],
    "love+health": [
      "Quiet time alone does your mind and your closeness with others the most good right now. Tell someone you trust that you need a gentle stretch of rest, then actually take it.",
      "Restlessness keeps your mind busy and leaves you jumpy with someone close. Skip the urge to fix everything, and let your body settle through slow evenings before you reopen a hard talk.",
    ],
    "career+health": [
      "A deliberate pause is the best thing you can do for your focus and your energy. Block out real recovery time this week, and let your thinking sharpen on its own before you return to demanding tasks.",
      "Returning to full speed too soon, or being unable to switch off, wears down your focus and your reserves together. Cut one task, set a hard stop to the day, and let your mind rest before it asks again.",
    ],
    "love+career+health": [
      "Rest serves every area: a quiet retreat steadies closeness, a pause sharpens your thinking at work, and stillness refills your energy. Nothing here asks you to do more. Protect one unhurried stretch of time this week, and tell the people involved why.",
      "An unquiet mind leaves you short with those close to you, scattered at work, and low on reserves, and the three feed one another. Admit you need a break, drop one commitment, and let stillness come before you take on anything new.",
    ],
  },
  "swords-5": {
    "love+career": [
      "Winning the argument can cost you the closeness, and the same habit at work leaves people guarded. Ask what you actually want from each exchange, then choose the response that keeps trust intact.",
      "The urge to fight is fading, and you can mend what pride damaged, with someone close or among colleagues. Offer a plain apology where it is due, and drop the old score.",
    ],
    "love+health": [
      "A fight with someone close leaves your mind churning and your body wound up long after the words end. Cool down before you speak again, and aim for being understood rather than for winning.",
      "Tension is draining out of a strained bond, and your mind finally quiets with it. Make amends where you owe them, then let your shoulders drop and your sleep deepen.",
    ],
    "career+health": [
      "Constant friction at work keeps your mind on alert and your energy spent on the fight. Choose your battles, step away when tempers rise, and recover fully before the next round.",
      "Letting a work conflict end frees up the energy it was eating, and your mind steadies. Accept a fair compromise, put the grudge down, and use the calmer time to recover.",
    ],
    "love+career+health": [
      "Conflict spreads across all three: sharp words strain closeness, rivalry at work keeps you guarded, and the constant alert state drains your energy. Pick which fights are worth having, walk away from the rest, and rest properly afterward, since a calmer you handles all three better.",
      "The fight is losing its grip, and peace helps everywhere: an apology mends closeness, a compromise calms work, and a quieter mind restores your energy. Let go of the score, and spend what you saved on rest, since a quieter mind helps every conversation after this one.",
    ],
  },
  "swords-6": {
    "love+career": [
      "Moving toward calmer waters helps a close bond and your career at once. Leave behind one old pattern in each, and let a trusted person help you carry the change.",
      "Old baggage keeps you tied to a past pattern with someone close, and it slows a needed change at work. Name what you are carrying, set one piece down, and take the first small step forward.",
    ],
    "love+health": [
      "A gentle move away from turbulence brings your mind real peace, and closeness with a steady person helps. Let yourself be accompanied through the change, and give yourself quiet evenings along the way.",
      "Staying in a painful past keeps your mind heavy and your closeness uneasy. Notice what you keep carrying, talk it through with someone safe, and let rest help you take a first step.",
    ],
    "career+health": [
      "A change of direction at work brings your thinking noticeable calm, and a quieter mind carries you further. Travel light, accept advice from someone experienced, and keep your pace steady.",
      "Resisting a needed change at work keeps your mind restless and your energy tied up. Admit what is holding you in place, ask for guidance, and make one small move before you rest.",
    ],
    "love+career+health": [
      "Calmer water is ahead in all three: closeness grows easier with a steady companion, a shift at work opens a clearer path, and your mind unwinds as you leave old turbulence behind. Move at an even pace and accept help.",
      "Unfinished baggage anchors you in each area: old patterns hold closeness back, a stalled change keeps work uncertain, and a restless mind drains your energy. Name one thing to set down, then take a single step away from it.",
    ],
  },
  "swords-7": {
    "love+career": [
      "Keeping secrets or working around people can feel clever, yet it erodes trust with someone close and your standing at work. Choose openness in one place today, and see how much lighter the plan becomes.",
      "Coming clean, with someone close or at work, brings a hard moment and then real relief. Own the part that is yours, offer a plain explanation, and let trust rebuild through steady actions.",
    ],
    "love+health": [
      "Hiding something from someone close keeps your mind on guard and your sleep restless. Consider telling the truth to one safe person, and let your body feel what it is like to stop holding the secret.",
      "Confessing what you have hidden from someone close loosens a tight, watchful mind. Speak plainly and take responsibility, then rest, since honesty often brings the first easy night in a while.",
    ],
    "career+health": [
      "Cutting corners or going it alone at work keeps your mind vigilant and your energy thin. Ask for help instead of working around people, and notice how much calmer your thinking feels.",
      "Admitting a shortcut or mistake at work frees a mind that has been quietly on guard. Correct what you can, ask for support, and let the lighter feeling give you a better night of rest.",
    ],
    "love+career+health": [
      "Secrecy tangles all three: hidden things weaken trust with someone close, clever workarounds put your standing at work at risk, and constant vigilance wears down your rest. Pick one place to be open, and let it ease the others.",
      "Honesty returns across all three: coming clean rebuilds trust with someone close, owning a mistake steadies your work, and a conscience at ease lets your mind rest. Take responsibility plainly, then give the relief time to settle, and let one honest act lead to the next.",
    ],
  },
  "swords-8": {
    "love+career": [
      "Feeling boxed in by a situation with someone close and by your role at work often grows from limiting beliefs as much as from real constraints. List the options you actually have in each, and take one small step toward them.",
      "Your view is widening, and options open up with someone close and at work. Notice which restrictions were habit rather than fact, and walk through the first door that feels honest.",
    ],
    "love+health": [
      "Feeling trapped in a close bond keeps your mind circling and your body tight. Write down what is truly outside your control and what is not, then choose one small action from the second list.",
      "Relief arrives as you see a way out of a restrictive pattern with someone close, and your mind loosens. Take one honest step toward freedom, and let slow breathing remind you that you have room to move.",
    ],
    "career+health": [
      "A sense of being stuck at work keeps your thoughts looping and your energy low. Separate real limits from assumed ones, ask someone you trust about options, and allow yourself breaks while you look.",
      "Seeing that you have more choices at work lifts the weight on your mind and restores some energy. Take one practical step toward a change, and let the relief remind you to rest.",
    ],
    "love+career+health": [
      "Being stuck can spread through all three: a stuck dynamic with someone close, a role at work that seems fixed, and a mind tight with worry. Sort real limits from assumed ones, and take one small action in the area that feels least stuck.",
      "The binds loosen everywhere: closeness gets room to breathe, work shows real options, and your mind finally unclenches. Test one of those options this week, and let the relief guide you rather than rushing, since steady steps keep the new freedom lasting.",
    ],
  },
  "swords-9": {
    "love+career": [
      "Late-night worry about someone close and about work feeds on itself, and the fears often look larger in the dark. Write each worry down, mark what you can act on, and share one with a trusted person.",
      "Worries about a close bond and your career begin to lose their grip, especially once you say them aloud. Keep reaching out, and act on the one concern that has a practical next step.",
    ],
    "love+health": [
      "Worrying about someone close can keep you awake, and a tired mind makes every fear seem larger. Put the thoughts on paper before bed, and rely on a steady bedtime routine rather than on solving everything tonight.",
      "The night worries around someone close are easing, and your sleep begins to recover. Keep talking honestly with a trusted person, and let your mind rest without checking the fear again.",
    ],
    "career+health": [
      "Anxious thinking about work follows you into the night, and poor sleep makes the next day look worse. Jot down the tasks for tomorrow, set a firm wind-down time, and treat worry as a pattern you can work with.",
      "Worry about work is loosening, and your mind gets quieter nights as a result. Tell someone about what remains, handle the one task that matters, and protect the sleep that is returning.",
    ],
    "love+career+health": [
      "Worry runs through all three at night: fears about someone close, pressure from work, and a tired mind that magnifies both. Write the worries down, act on one practical item, and keep a steady bedtime so rest can help you see each one at its true size.",
      "The grip of worry is loosening across each area: fears about closeness quiet down, work pressure feels more manageable, and sleep slowly improves. Keep sharing what weighs on you, act on small, practical steps, and let each easier night confirm that the worry is a pattern, not a fact.",
    ],
  },
  "swords-10": {
    "love+career": [
      "An ending that hurts, with someone close or in a role at work, can feel total, yet it is also the end of a strain. Allow the loss, lean on trusted people, and plan only the next small step.",
      "The worst has passed, and recovery begins with someone close and at work. Resist reopening what has ended, accept the support around you, and build the next phase slowly and honestly.",
    ],
    "love+health": [
      "Losing a bond that mattered can leave your mind and body drained. Let yourself grieve, keep your basic routines of sleep and meals, and remember that the lowest point is also a turning point.",
      "Recovery is starting after a painful chapter with someone close, and your mind feels lighter. Do not rush; let sleep and gentle days rebuild you, and keep supportive people near.",
    ],
    "career+health": [
      "A harsh ending at work leaves you exhausted, yet it also clears away something that was weighing on you. Rest before making big decisions, and take stock of what you can rebuild.",
      "Behind you now is the worst of a work ordeal, and your energy slowly returns. Resist dwelling on what is over, rebuild a steady routine, and take on new things at a gentle pace.",
    ],
    "love+career+health": [
      "A painful ending touches all three: loss with someone close, a collapse at work, and a depleted mind. It is real, and it is also the point where the strain stops. Rest, accept support, and plan only the next small step.",
      "Recovery begins in every area: closeness heals, work stabilizes, and your energy returns. Do not reopen what has ended, accept help, and let each small gain build the next one at a steady pace, since patience is doing real work here.",
    ],
  },
  "swords-page": {
    "love+career": [
      "Curiosity serves you well with someone close and at work, since good questions reveal what assumptions hide. Ask one honest question in each place, and listen to the whole answer before you reply.",
      "Sharp remarks or careless gossip can damage trust with someone close and your reputation at work. Think before you speak, check what you have actually heard, and keep your words truthful and kind.",
    ],
    "love+health": [
      "An inquisitive, alert mind helps you understand someone close and notice what your body needs. Ask questions with real interest, and pause between ideas so curiosity does not turn into restlessness.",
      "A scattered, jumpy mind leads to cutting words with someone close and leaves you wired. Slow your speech, put the screen down, and say only what you have thought through.",
    ],
    "career+health": [
      "Eager learning at work keeps your mind lively, provided you pace it. Study one thing at a time, ask the questions you have been holding back, and schedule breaks so curiosity does not wear you out.",
      "Scattered attention and nervous chatter at work leave your mind frayed and your energy leaking. Choose one task, mute the distractions, and give your head a quiet stretch to recover.",
    ],
    "love+career+health": [
      "Curiosity connects all three: honest questions deepen closeness, learning opens options at work, and noticing what your mind needs keeps you steady. Ask one real question in each area this week, and take short breaks between so your mind stays fresh and your listening stays kind.",
      "A restless, sharp-tongued mind scatters across each area: careless words strain closeness, divided focus muddles work, and constant mental chatter leaves you frazzled. Slow down, say less, and finish one thing before the next, so your attention has somewhere to rest.",
    ],
  },
  "swords-knight": {
    "love+career": [
      "Bold, direct action moves both a close bond and your career forward, as long as you keep listening. Say what you want plainly, then give others room to answer before you push on.",
      "Rushing in with blunt words can bruise someone close and cost you goodwill at work. Slow your pace, check the facts, and speak after you have heard the other side.",
    ],
    "love+health": [
      "Your drive to speak up with someone close is strong, and acting on it can be a relief. Keep your pace sustainable, since a racing mind and a tense body make it harder to listen.",
      "Impatience makes you sharp with someone close, and the rush leaves you wound up and short on rest. Pause before you answer, breathe slowly, and let the heat cool before you act.",
    ],
    "career+health": [
      "Fast, focused action drives your progress at work, though a mind at full speed needs regular recovery. Push on the priority that matters, then schedule a firm stop so your energy lasts.",
      "Charging ahead without a plan scatters your focus at work and burns through your energy. Slow down, sort what truly matters, and rest your mind before you take another leap.",
    ],
    "love+career+health": [
      "Decisive energy can move all three: straight talk clarifies closeness, bold action advances your work, and a clear aim gives your mind purpose. Keep listening, check in with the people affected, and pace yourself, since speed without rest wears everyone down, including you.",
      "Haste and a sharp edge work against you everywhere: careless words strain closeness, rushed moves undermine your work, and the constant sprint leaves you drained. Pause, check the facts, and choose one thing to do well before you take on the next.",
    ],
  },
  "swords-queen": {
    "love+career": [
      "Clear, fair honesty strengthens a close bond and your standing at work alike. State your boundaries calmly in each place, and let compassion guide how you phrase the truth.",
      "Coldness or bitterness, especially when carried from old hurt, distances someone close and sours your dealings with colleagues. Notice where you use sharpness as armor, and soften one conversation this week.",
    ],
    "love+health": [
      "A calm, discerning mind helps you see clearly what you need from someone close. Voice your limits kindly, and let that clarity ease the tension you carry in your body.",
      "Guarding yourself with coldness keeps someone close at a distance, and the held-in tension wears on your mind. Admit one honest feeling, and let your shoulders and breath soften as you do.",
    ],
    "career+health": [
      "Clear judgment at work and firm limits on your time protect your energy. Decline what does not fit, speak plainly, and let that discipline keep your mind calm.",
      "Cutting criticism and a hardened attitude at work isolate you and leave your mind tense. Name the hurt underneath, ask for what you need, and give yourself recovery time away from the pressure.",
    ],
    "love+career+health": [
      "Plain honesty serves all three: plain words and firm limits protect closeness, fair judgment steadies your work, and a clear head keeps your energy intact. Speak the truth with compassion, keep your boundaries consistent, and let your calm set the tone for everyone around you.",
      "Armor made of sharpness pushes everything away: a cold edge distances closeness, bitterness sours work, and the tension keeps your mind and body tight. Soften one conversation, name what hurts, and allow rest, since the armor is heavier than it looks.",
    ],
  },
  "swords-king": {
    "love+career": [
      "Fair, thoughtful judgment guides both a close bond and your career. Decide by principle rather than mood, explain your reasoning kindly, and hold yourself to the standard you expect of others.",
      "Control or cold logic can hurt someone close and make you hard to work with. Ask whether you are being fair or just right, and listen before you hand down a ruling.",
    ],
    "love+health": [
      "Reasoned calm helps you handle closeness with fairness and keeps your body easier. Think before you speak, explain yourself kindly, and let steadiness replace the need to control.",
      "Rigid rules and cold reasoning with someone close leave your mind tight and your body tense. Loosen your grip, listen first, and rest before you decide what to say.",
    ],
    "career+health": [
      "Clear authority and fair decisions at work are most effective when your mind is rested. Set standards you can sustain, delegate where you can, and protect your recovery time as part of your leadership.",
      "Overcontrol or harsh judgment at work sours your mood and leaves your mind running hot. Admit where you are being rigid, ask for another view, and cool down before the next decision.",
    ],
    "love+career+health": [
      "Fair judgment and a steady mind guide all three: reasoned honesty protects closeness, ethical decisions strengthen your work, and calm self-discipline keeps your energy sustainable. Lead with principle, explain your reasons with kindness, and rest as a matter of course so your judgment stays clear and fair even when the pressure builds at work or at home.",
      "Rigid control spreads through every area: cold rulings distance closeness, harsh standards sour your work, and a mind that never loosens keeps your body tense. Ask where you can listen, delegate, and let some things be imperfect.",
    ],
  },
};

Object.assign(COMBINED_READINGS, COMBINED_SWORDS);

Object.entries(COMBINED_SWORDS).forEach(([id, combined]) => {
  if (EXTRA[id]) EXTRA[id].combined = combined;
});
