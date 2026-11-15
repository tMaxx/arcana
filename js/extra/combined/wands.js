"use strict";

/* ------------------------------------------------------------------ *
 * Combined summaries: Wands.
 * Field-dependent: one [upright, reversed] pair per selected set of
 * love / career / health contexts.
 * ------------------------------------------------------------------ */

const COMBINED_WANDS = {
  "wands-ace": {
    "love+career": [
      "A spark of interest in someone and a spark of ambition tend to arrive together, each lending the other courage. Act on one this week, then use the confidence it gives you to start the other.",
      "Fizzled enthusiasm in one place dampens the other, so a stalled romance and a stalled project can leave you flat in both. Rebuild from whichever is easier to restart, and let small wins there revive the rest.",
    ],
    "love+health": [
      "Fresh desire for someone brings a physical lift, and a rested, energized body makes you warmer company. Follow the spark with something active you can share, such as a walk or a dance class.",
      "A flat mood dulls attraction, and a cooling connection drains your energy in turn. Stop waiting to feel inspired, and begin with a short, gentle routine that you can do alone or alongside someone.",
    ],
    "career+health": [
      "New ambition and a surge of vitality feed each other, so the project you start now gets momentum from how alert you feel. Channel that energy into one clear first task, then stop before you overextend.",
      "A project that will not start and low energy keep reinforcing each other, each excusing the other. Shrink the first task until it feels almost easy, and protect your sleep so the next attempt has fuel.",
    ],
    "love+career+health": [
      "A single spark can light all three areas if you let it. Interest in someone, a promising idea, and a surge of energy support one another, so start small in each and keep the pace sustainable enough that none burns out first.",
      "When the spark fades, closeness, ambition, and energy cool together, each making the others harder to restart. Pick the easiest of the three to rekindle, perhaps a simple routine, and let that small movement warm the other two.",
    ],
  },
  "wands-2": {
    "love+career": [
      "Choosing a direction at work and deciding what you want from a relationship rely on the same clarity. Name your long-term aim in each, then check whether the two point the same way.",
      "Indecision in one area spills into the other, so a hesitant career plan and a vague romantic stance keep you stuck in comfort. Make one firm decision this week, and let it set the terms for the other.",
    ],
    "love+health": [
      "Planning with someone means asking what each of you needs to stay well over time. Plan a shared habit that supports you both, and be honest about the energy you can give.",
      "Fear of change keeps you in a relationship pattern that no longer suits you, and it keeps tired habits in place as well. Name one thing you avoid in each, then take a small step away from the familiar.",
    ],
    "career+health": [
      "A big plan needs a body that can carry it, so match your ambitions to the stamina you actually have. Map the next stage of your career alongside a realistic routine for rest and movement.",
      "Playing small at your job and neglecting your energy often travel together, each confirming the other. Choose one bolder professional move and one supportive daily habit, and begin both in modest form.",
    ],
    "love+career+health": [
      "Deciding where to go next involves all three areas at once. Consider what you want from a relationship, what your career needs, and what your energy can sustain, then choose a path where none is sacrificed for another.",
      "Hesitation in one area keeps the other two waiting. A relationship left undefined, a career plan left vague, and habits left unchanged all feed one another, so make a single clear decision and let it start loosening the rest.",
    ],
  },
  "wands-3": {
    "love+career": [
      "Your efforts are beginning to travel, and both a relationship and a career benefit from the long view. Keep looking ahead in each, and trust that patience now builds something wider than either alone.",
      "Delays at work can sour your mood with someone you care about, and a distant relationship can leave your ambitions unsupported. Name which delay is real and which is frustration, then adjust your timeline accordingly.",
    ],
    "love+health": [
      "Seeing further together widens what feels possible, and feeling well makes you more willing to travel or try new things. Plan something that stretches you both, with enough room to stay comfortable.",
      "Waiting on a reply or a shared plan can wear down your patience, and frustration settles in your body as tension. Release what you cannot control, and spend that energy on something you can move forward.",
    ],
    "career+health": [
      "Work set in motion begins to return results, and steady energy lets you follow it through. Keep your pace even, and plan the next stage so growth does not outrun your stamina.",
      "Setbacks in your plans make you restless, and restless energy makes foresight harder. Pause to see what the delay is teaching, rest if you are run down, and revise the plan before pushing again.",
    ],
    "love+career+health": [
      "Things you started are beginning to travel. A relationship, a career, and your energy each gain from a long view, so look ahead in all three, let steady progress in one support patience in the others, and keep your expectations realistic.",
      "Delay in one area breeds frustration in the rest: a stalled plan sours your mood with others, and a drained body makes setbacks feel larger. Sort what is genuinely late from what simply feels slow, and adjust your expectations before pushing on.",
    ],
  },
  "wands-4": {
    "love+career": [
      "Stability at home and recognition at work reinforce each other when you take time to celebrate both. Mark a milestone with people who matter, and let that shared joy steady your next professional step.",
      "Tension at home can pull your focus from your job, and a shaky position at work can strain your closest bonds. Address the unsettled one first, and ask for support rather than carrying it silently.",
    ],
    "love+health": [
      "Feeling settled with someone supports the body, and a restored body makes celebration easier. Create a small ritual of togetherness, such as a shared meal or an unhurried evening, to anchor both.",
      "Unease at home keeps you tense, and tension makes you harder to be close to. Rather than performing happiness, make space for a quiet conversation and a good night of sleep.",
    ],
    "career+health": [
      "A milestone at your job feels better when you have the energy to enjoy it, and steady habits make steady success possible. Pause to acknowledge what you built, and keep the routines that got you here.",
      "An unstable job situation wears on your stamina, and a worn-down state makes the instability harder to resolve. Secure what you can control first, such as a schedule or a boundary, and ask a colleague for help.",
    ],
    "love+career+health": [
      "A sense of home grows when all three areas are steady. A warm bond, solid footing on the job, and energy that holds up each reinforce the others, so take time to celebrate a milestone with people close to you.",
      "Unrest at home, uncertainty on the job, and a tired body tend to amplify one another. Choose the one you can stabilize most easily, perhaps a calm routine or an honest talk, and let that firm ground steady the rest.",
    ],
  },
  "wands-5": {
    "love+career": [
      "Friction in a relationship and competition on the job both sharpen you when handled with good humor. Treat disagreement as practice in speaking plainly, and carry what you learn from one setting into the other.",
      "Avoided conflict at your job and unspoken resentment at home keep tension simmering in both. Choose the conversation you have postponed longest, and keep it direct, brief, and free of point scoring.",
    ],
    "love+health": [
      "Disagreements with someone close put energy in your body, and that energy can become either heat or clarity. Move physically first, then talk, so the argument has less adrenaline behind it.",
      "Swallowing irritation to keep the peace leaves you tense, and a tense body makes small things feel like fights. Say what bothers you gently, then release the leftover charge with exercise or a long walk.",
    ],
    "career+health": [
      "Competition on the job raises your game when you have the stamina for it. Treat rivalry as training, set limits on how much you take on, and recover fully between pushes.",
      "Constant jostling at your job leaves you wired and worn, and a worn-out state makes every disagreement sharper. Step back from one contest that does not matter, and spend that energy on recovery.",
    ],
    "love+career+health": [
      "Friction shows up everywhere right now, and it can be useful. Disagreement with someone close, competition on the job, and restless physical energy all ask for a channel, so spend the energy through movement and speak plainly in both settings.",
      "Unresolved friction leaks across all three: resentment at home, tension on the job, and a body that never settles. Pick the conflict that costs you most, resolve it directly, and use physical activity to release whatever tension remains afterward.",
    ],
  },
  "wands-6": {
    "love+career": [
      "Recognition at your job and admiration from someone close boost each other, and both are earned. Accept praise graciously in each setting, and share credit so the success holds up.",
      "Pride in a title can make you less available to the people near you, and a need for praise at home can pull you toward the wrong goals. Look for approval that does not depend on an audience.",
    ],
    "love+health": [
      "Feeling proud of how you look after yourself makes you more confident with someone you care about, and their admiration sustains your good habits. Accept the compliment, and keep doing what earned it.",
      "Seeking admiration from a partner can push you to ignore your own limits, and a poor sense of yourself makes closeness harder. Care for yourself privately first, for your own sake and not for applause.",
    ],
    "career+health": [
      "Success on the job is easier to enjoy when you have energy left for it. Celebrate the win, rest properly afterward, and let confidence come from steady habits, not just from the applause.",
      "A hollow win leaves you drained, and being drained makes the achievement feel even smaller. Ask what the effort actually cost you, and rebuild your reserves before chasing the next title.",
    ],
    "love+career+health": [
      "Confidence earned in one area lifts the others. Recognition on the job, admiration from someone close, and pride in how you look after yourself all strengthen each other, so accept praise with grace and keep the habits behind it.",
      "Chasing approval can drain all three areas: a showy win, a relationship built on being admired, and a body pushed to keep up appearances. Seek recognition you would still value in private, and pace yourself so that the effort stays sustainable over time.",
    ],
  },
  "wands-7": {
    "love+career": [
      "Holding your ground on the job and holding your ground in a relationship call on the same steadiness. Know which position is worth defending in each, and state it calmly without escalating.",
      "Defensiveness in one area leaks into the other, so a bruising day at your job can turn a loved one into a target. Notice when you are bracing, and answer the real person in front of you.",
    ],
    "love+health": [
      "Standing firm on what you need protects both closeness and vitality. Set one clear boundary with someone you care about, such as time to rest, and expect that honesty makes the bond sturdier.",
      "Giving in too quickly leaves your own needs unmet, while constant defensiveness keeps you braced and tired. Find a middle stance where you can say no kindly and still stay connected.",
    ],
    "career+health": [
      "Pressure on the job asks you to hold firm, and firm footing depends on a body that is not running on empty. Defend your priorities, guard your recovery time, and decline what you cannot sustain.",
      "Yielding too much to demands leaves you exhausted, and exhaustion makes you yield even more. Draw one boundary you can keep, perhaps on hours, and protect it consistently.",
    ],
    "love+career+health": [
      "Life asks you to hold a position, and it needs support from all sides. Stand firm in a relationship, on the job, and in protecting your energy, choosing the one thing worth defending in each and letting the rest go.",
      "Overwhelm in one area makes you either cave or bristle in the others. Giving in on the job, snapping at someone close, and running low on energy feed the same cycle, so set one boundary and keep it kindly.",
    ],
  },
  "wands-8": {
    "love+career": [
      "News and momentum on the job tend to arrive alongside quick developments in a relationship. Reply promptly, stay clear in your messages, and make sure speed in one setting does not outrun care in the other.",
      "Crossed signals and delays in your career can leave you scattered, and the scatter shows up as missed texts and half attention at home. Slow down, finish one thing, then respond to the other person fully.",
    ],
    "love+health": [
      "Things move quickly, and movement helps your mood. Use a burst of energy to plan something active with someone you care about, keeping the pace fast enough to be fun but not so fast it exhausts either of you.",
      "Scattered attention keeps you from being present with someone, and a restless body struggles to settle. A forced pause can help, so cut one commitment, sit still together, and let your pulse slow.",
    ],
    "career+health": [
      "Momentum on the job is real, and you can use it if your energy keeps up. Move quickly on what matters, and build short recovery breaks into the schedule so speed does not turn into strain.",
      "Many tasks launched at once leave your energy scattered, and fatigue then slows every project further. Accept the forced slowdown, choose the single task that counts, and recover before accelerating again.",
    ],
    "love+career+health": [
      "Fast developments reach all three areas together. Messages from someone close, rapid progress on the job, and a surge of physical energy can carry you far, as long as you reply with care and build in time to recover.",
      "Scattered energy blurs all three areas at once: missed conversations, half-finished tasks, and a restless body. Accept the slowdown, finish one thing completely, and let that single act of focus steady the others before you speed up again.",
    ],
  },
  "wands-9": {
    "love+career": [
      "Close to the finish line in both a relationship and a career, you feel wariness that comes from having been hurt before. Keep your guard moderate, accept help, and take one more steady step in each.",
      "Wariness hardens into suspicion at home, and exhaustion on the job makes quitting look attractive. Before giving up on either, ask whether you need a break, not an exit, and talk with someone you trust.",
    ],
    "love+health": [
      "Having been through something hard, you carry caution into closeness and tiredness into daily life. Let one trusted person see how worn you feel, and let their care help you recover enough for the last stretch.",
      "Guardedness keeps people at a distance just when you need them, and being depleted makes suspicion worse. Rest first, then test the assumption that everyone will let you down, and allow some support in.",
    ],
    "career+health": [
      "Nearly through a demanding stretch on the job, and your body is asking for care. Finish what is closest to done, say no to extra demands, and plan a real recovery once the push ends.",
      "Burnout makes the final push feel impossible, and quitting a step short wastes what you built. Distinguish true exhaustion from fear, then ask for relief, reduce the load, and rest before deciding.",
    ],
    "love+career+health": [
      "You have been tested and you are still standing. Keep a little guard up in relationships, finish the last stretch on the job, and treat your tiredness as real information, since each area needs the others to hold.",
      "Exhaustion colors everything: suspicion at home, a wish to quit your job, and a body that wants to stop. Rest comes first, and decisions made after recovery are usually kinder to everyone, including you, across all three areas.",
    ],
  },
  "wands-10": {
    "love+career": [
      "You carry a lot in both a relationship and a career, and success has become heavy. Name what is yours, hand off what is not, and say plainly what you need from the people near you.",
      "Overwork leaves no time for the people you care about, and a strained bond makes the workload heavier. Drop one duty or delegate it, then spend the freed time on a person, not a task.",
    ],
    "love+health": [
      "Taking on too much of the load for someone you care about wears you down, and a worn-down state makes closeness feel like another chore. Share the weight, ask for help, and keep some energy for yourself.",
      "Putting the burden down brings relief, though collapse is possible if you wait too long. Tell someone close how heavy things have become, and accept care, rest, and a lighter routine.",
    ],
    "career+health": [
      "Responsibility has piled up on the job, and your body is paying for it. Delegate what others can do, cut one nonessential task, and stagger the final stretch so you reach the end intact.",
      "Letting go of obligations brings relief, whereas pushing through leads toward collapse. Hand off a major task now, protect your sleep, and give your energy back to the few things only you can do.",
    ],
    "love+career+health": [
      "Too much responsibility is crowding everything. Your relationship, your career, and your energy all suffer when you carry it alone, so delegate what you can, ask for support at home, and finish the final stretch at a sustainable pace.",
      "Collapse in one area can bring down the rest: a strained bond, a swamped schedule, and a depleted body feed the same overload. Release one burden this week, and let the relief ripple through the others before you take on anything new.",
    ],
  },
  "wands-page": {
    "love+career": [
      "Curiosity and enthusiasm are your best assets right now, in a new connection and in a new idea alike. Ask questions, try something unfamiliar, and treat news in either area as an invitation to explore.",
      "Hasty ideas and unfocused flirtation both come to nothing if you never follow through. Choose one direction in each setting, and finish a small step before chasing the next exciting thing.",
    ],
    "love+health": [
      "Playfulness with someone you like lifts your energy, and a lively body makes you more curious about them. Try a new activity together, keeping it light, and enjoy the discovery.",
      "Restless enthusiasm in new attachments can leave you jittery and underslept. Slow your pace, give each new interest a proper chance, and notice whether your energy rises or falls around it.",
    ],
    "career+health": [
      "A fresh idea on the job grows best when you stay energized and curious. Start a small experiment, keep your routine active and varied, and let enthusiasm lead without burning through your reserves.",
      "Procrastination and half-formed plans waste energy, and low energy makes it harder to begin. Break one project into tiny steps, get moving physically, and set a short deadline to build momentum.",
    ],
    "love+career+health": [
      "Curiosity opens doors in all three areas. A new connection, a new idea on the job, and a fresh interest in feeling energetic each invite exploration, so try something small in each, share what you find, and keep the mood playful.",
      "Scattered enthusiasm leaves each area half begun: a connection without follow-up, an idea without a plan, and a body without a routine. Choose one thing to carry through to the end this week, and let that finished effort steady the others.",
    ],
  },
  "wands-knight": {
    "love+career": [
      "Bold energy brings progress in romance and in your career, as long as you direct it. Make the confident move in each, then slow down enough to hear how the other side responds.",
      "Impatience and temper do damage in both settings, so a sharp reply in a meeting and a careless remark at home come from the same impatience. Pause before sending or speaking, and aim your drive at one thing.",
    ],
    "love+health": [
      "Passion and energy rise together, and adventure with someone you care about feeds both. Plan something active and a little daring, but build in rest so the excitement does not exhaust you.",
      "Anger and haste leave you scattered and wired, and a wired body shortens your patience with someone close. Burn off tension through movement before you talk, and let the day end quietly.",
    ],
    "career+health": [
      "Drive on the job gains force when your body keeps pace. Take the bold project and move fast on it, while scheduling the recovery that lets you keep going.",
      "Rushing from task to task leads to burnout, and burnout makes you more impulsive. Slow your pace, finish what you started, and treat rest as part of the plan rather than a reward.",
    ],
    "love+career+health": [
      "Your drive is high and can reach all three areas. Go after the adventure with someone you care about, the ambitious project on the job, and an active routine, but leave time for recovery so the energy lasts.",
      "Quick tempers spill across everything: a sharp word at home, an overreach on the job, and a body running on adrenaline. Slow one thing down today, ideally the one you are most eager to rush, and notice how the others settle.",
    ],
  },
  "wands-queen": {
    "love+career": [
      "Warm confidence draws people in, at home and on the job. Lead with generosity and certainty, let your enthusiasm show, and use your standing in one setting to encourage the other.",
      "Jealousy and demands in a relationship often come from shaky confidence in your career. Notice where you feel insecure, rebuild it there first, and ask for what you need without making it a test.",
    ],
    "love+health": [
      "Feeling vibrant makes you generous with someone you care about, and their warmth keeps you glowing. Take care of your own vitality first, since a full cup is easy to share. Then offer it freely, and let their warmth refill you.",
      "Self-doubt makes you needy or possessive with someone close, and constant need leaves you depleted. Rebuild your sense of worth through small acts of self-care, and ask for reassurance directly, not through tests.",
    ],
    "career+health": [
      "Charisma and determination suit your job, and they last longer when you look after your vitality. Take the lead, inspire the people near you, and keep a routine that restores your energy.",
      "Doubt about your abilities makes you demanding, and demands burn you out. Step back from proving yourself, trim what you carry, and rebuild confidence through small, achievable wins.",
    ],
    "love+career+health": [
      "Warm, confident energy serves every area. Generosity in a relationship, determination on the job, and care for your own vitality keep each other strong, so let yourself shine while pacing your effort, and notice which area feeds the others most this week.",
      "Shaken confidence shows up everywhere: jealousy with someone close, demands on the job, and a drained body. Rebuild from the one that feels most within reach, ask for reassurance plainly, and let small wins restore the rest of your steadiness.",
    ],
  },
  "wands-king": {
    "love+career": [
      "Vision and decisive leadership serve you on the job, and the same steadiness makes you a reliable presence at home. Set a clear course in your career, and share the plan with the person you love.",
      "Domineering habits in your career leak into relationships, and a controlling streak at home hardens into ruthlessness on the job. Ask for opinions, listen to the answer, and loosen your grip on one decision.",
    ],
    "love+health": [
      "Leadership with someone you care about means setting the tone of vitality together. Model good habits, invite them rather than command them, and keep your own stamina steady.",
      "Bossiness with someone you love, combined with ignoring your own limits, leaves both of you strained. Share decisions, admit when you are tired, and let your body set the pace for once.",
    ],
    "career+health": [
      "A bold vision needs a leader who can last, so lead with energy you can maintain. Take charge of the big picture, delegate the details, and protect your own recovery as seriously as the plan.",
      "Ruthless ambition burns through your stamina, and exhaustion makes you more impulsive and domineering. Let go of control over small matters, slow the pace, and restore yourself before the next decision.",
    ],
    "love+career+health": [
      "Steady vision can guide all three areas. Lead with calm authority in a relationship and on the job, and set habits for your own vitality as firmly as you set goals, since each one supports the other two and none stays steady alone.",
      "A need for control fractures all three: a dominating hand with someone close, ruthless ambition on the job, and a body pushed past its limits. Share one decision this week, listen fully to the answer, and slow your pace enough to notice the cost.",
    ],
  },
};

Object.assign(COMBINED_READINGS, COMBINED_WANDS);

Object.entries(COMBINED_WANDS).forEach(([id, combined]) => {
  if (EXTRA[id]) EXTRA[id].combined = combined;
});
