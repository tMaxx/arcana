"use strict";

/* ------------------------------------------------------------------ *
 * Combined summaries: Cups.
 * Field-dependent: one [upright, reversed] pair per selected set of
 * love / career / health contexts.
 * ------------------------------------------------------------------ */

const COMBINED_CUPS = {
  "cups-ace": {
    "love+career": [
      "Open feeling toward someone close and a new sense of purpose at work lift each other, since warmth makes you braver on the job. Offer kindness to someone this week, then bring that same openness to a talk about your goals.",
      "Numbness with a loved one can leave your working life feeling hollow, and a joyless routine at work leaves little tenderness for anyone close. Name one feeling honestly to someone you trust, and let the work follow.",
    ],
    "love+health": [
      "Tenderness toward someone and a softer, more settled body feed each other, because feeling safe in affection eases tension. Receive a kindness today and pair it with something nourishing, like a warm meal or a slow walk.",
      "Held-back feelings in a connection can show up as heaviness or fatigue, while an exhausted body leaves little room to be open. Give yourself rest first, then share one honest sentence with someone safe.",
    ],
    "career+health": [
      "Renewed care for what you do and a gentler attitude toward your own limits support each other. Let enthusiasm guide one task, and keep your pace kind enough that your energy lasts through the week.",
      "Emotional exhaustion drains your focus at work, and a depleted body makes it hard to care about outcomes. Trim one obligation this week and use the time to restore yourself without forcing a better mood.",
    ],
    "love+career+health": [
      "An open heart ties all three areas together: affection warms your closeness, meaning revives your work, and feeling cared for settles your body. Let one act of receiving, such as accepting help, ripple into each, and keep the pace easy.",
      "Blocked feeling travels through everything, dulling closeness, draining your drive at work, and leaving you tired in body. Do not force joy. Choose one small act of release, like a quiet talk, and let rest follow. Small, patient steps count here.",
    ],
  },
  "cups-2": {
    "love+career": [
      "Mutual respect shapes both a close bond and a good working partnership, and each teaches the other how to listen. Notice where you give and receive evenly, then bring that fairness to your next negotiation or conversation.",
      "Uneven give and take at home can spill into how you deal with colleagues, and resentment at work makes affection harder to offer. Pick one imbalance and name it kindly, then ask for a fair adjustment.",
    ],
    "love+health": [
      "Feeling seen by someone calms your nervous system, and a rested, steady body lets you meet them with more presence. Spend unhurried time together, and let the ease you feel there guide your daily habits.",
      "Disconnection from someone you care about can leave you tense and sleeping poorly, and low reserves make misunderstandings more likely. Restore your own steadiness with rest and simple routines before a difficult conversation.",
    ],
    "career+health": [
      "A good working alliance steadies your mood, and a calm, well-cared-for self makes you easier to collaborate with. Seek a colleague you trust, and protect the breaks that keep you balanced.",
      "Friction with a colleague can tighten your shoulders and cloud your sleep, and a strained state makes cooperation harder in return. Clear one misunderstanding directly, and give yourself a real pause afterward.",
    ],
    "love+career+health": [
      "Fair exchange runs through every area now: trust in someone close, respect among colleagues, and a settled sense of your own wellbeing all depend on balance. Check where you give too much, adjust gently, and let that evenness spread.",
      "When give and take tips out of balance, closeness cools, work partnerships sour, and your own energy pays the price. Start with the lopsided exchange that bothers you most, and restore it with one honest request. Fairness tends to spread once it starts.",
    ],
  },
  "cups-3": {
    "love+career": [
      "Shared celebration strengthens bonds with those you love and with colleagues, and goodwill in one circle carries into the other. Mark a win with the people who helped, and let affection and teamwork reinforce each other.",
      "Too many social obligations can crowd out time with the one you love, while office gossip sours the warmth you bring home. Choose the gatherings that feed you, and keep your talk about others kind.",
    ],
    "love+health": [
      "Laughter with loved ones lightens your mood and loosens tension you did not know you carried. Plan a gathering that includes movement or good food, and let the joy do part of the restoring.",
      "Overdoing the social calendar leaves you drained, and strained ties with friends or a loved one weigh on you in turn. Pick one gathering that truly nourishes, and give yourself a quiet evening to recover.",
    ],
    "career+health": [
      "Good company on a team lifts your spirits, and a lighter mood makes collaboration flow more easily. Share a meal or a short break with colleagues, and let the shared pleasure refresh you.",
      "Constant networking, after-hours events, and workplace chatter can wear you thin, leaving you more tired and less useful to the team. Decline one event this week and protect an evening for rest.",
    ],
    "love+career+health": [
      "Community holds all three areas up: loved ones share your joy, colleagues share your wins, and good company restores your spirits. Gather the people who lift you, and let the laughter count as care for yourself. Joy shared widely tends to come back to you.",
      "A crowded schedule of obligations can strain closeness, make work friendships messy, and leave you worn out. Trim the gatherings that only drain you, and keep the few that nourish you in love, work, and rest. Quality matters more than quantity here.",
    ],
  },
  "cups-4": {
    "love+career": [
      "Boredom in a close bond and a flat stretch at work often share a root, a quiet sense that nothing new is on offer. Look up from your thoughts and accept one small invitation in either place.",
      "Waking up to what is on offer, you notice care from someone close and a worthwhile opening at work that you had overlooked. Reply to one of them this week, and let the other follow.",
    ],
    "love+health": [
      "Apathy toward someone who cares for you often travels with sluggishness and low appetite for life. Notice what you have been turning away from, and accept one simple offer of company or a shared walk.",
      "Your appetite for life returns, and a gesture from someone close lands more warmly because you feel more present. Accept the offer in front of you, and build on it with one nourishing routine.",
    ],
    "career+health": [
      "Restlessness at work and a heavy, unmotivated state feed each other, each making the other seem pointless. Step back and ask what you actually need, then take a real rest before deciding anything.",
      "Interest returns in your work just as your energy starts to lift, so each helps the other along. Say yes to one small opportunity, and keep your routines gentle enough to sustain it.",
    ],
    "love+career+health": [
      "Withdrawal can settle over all three areas at once: you drift from someone close, coast through work, and run low in body and mood. Pause, name what is missing, and accept one small offer in any of them.",
      "A turn toward life is under way, and attention you return to loved ones, work, and your own care helps the others open. Accept the offer in front of you, and keep your pace gentle so it lasts.",
    ],
  },
  "cups-5": {
    "love+career": [
      "A loss in one area casts a shadow over the other, so heartache can make a work setback feel heavier, and the reverse. Let yourself grieve, then notice who and what remains within reach.",
      "Healing begins to show up in both areas: you grow ready to receive closeness again, and a setback at work starts to feel survivable. Take one small step toward someone, and one toward your next task.",
    ],
    "love+health": [
      "Sorrow over a loss sits heavily in the body, and a worn-out body makes sorrow feel even larger. Be patient with yourself, let someone near you offer comfort, and keep simple routines of food and rest.",
      "Gentle recovery is underway, and comfort from someone close eases tension while a calmer body makes affection easier to take in. Step out of isolation with one small visit or call, and keep your pace soft.",
    ],
    "career+health": [
      "A disappointment at work can weigh on your energy, and low reserves make every setback seem larger. Give yourself time to feel it, and keep your routines steady while you take stock of what is still intact.",
      "Your strength returns as you stop replaying a professional setback, and each small recovery makes the next step easier. Turn toward one remaining opportunity, and keep rest and routine in place beside it.",
    ],
    "love+career+health": [
      "Loss in one area tends to color the others, so sorrow with someone close, a setback at work, and a tired body can pile together. Grieve gently, ask for support, and name one thing in each area that still stands.",
      "Peace slowly returns across closeness, work, and your own state, each small recovery making the next easier. Turn toward what is left, take one step in each area, and let healing set its own speed. Nothing needs to be rushed.",
    ],
  },
  "cups-6": {
    "love+career": [
      "Familiar kindness from the past can warm both a close bond and your standing at work, since old loyalty is a real asset. Reach out to someone who knew you early, and bring that same generosity to a current project.",
      "Longing for how things used to be can keep you from loving someone as they are now, and from seeing that your work has moved on. Honor the memory, then make one change that belongs to the present.",
    ],
    "love+health": [
      "Sweet memories shared with someone you love soothe you, and a calm mood loosens tension you carry. Look through old photos together or revisit a favorite place, and let the gentleness sink in.",
      "Living in a past version of yourself or a past romance can leave you restless and low in the present. Thank the memory, then build one new habit that suits who you are today.",
    ],
    "career+health": [
      "Remembering what once made you proud of your craft restores some of your drive, and the ease of that recollection soothes you. Revisit an early project or mentor, and carry that confidence into today.",
      "Clinging to how your career once felt can leave you stale and weary, and tiredness makes the past look even brighter. Respect what you learned, then invest your energy in something current.",
    ],
    "love+career+health": [
      "Fond memories can support all three areas: reunions with loved ones, pride in how far your work has come, and a soothed mood. Let the past comfort you, then use that warmth to take one fresh step. Gratitude for what was can fuel what comes next.",
      "Looking backward too long can stall closeness, keep you from growing at work, and leave you worn down in the present. Honor what was good, and choose one small action in each area that belongs to now. The present has its own gentle rewards.",
    ],
  },
  "cups-7": {
    "love+career": [
      "Daydreams about an ideal partner and a dazzling career path both tempt you to wait for perfection. Write down what each option would truly require, then pick one to pursue in each area.",
      "Clarity cuts through the fog in both areas, and you can tell a real prospect from a flattering fantasy. Make one decision about someone close and one about your work, and act on them.",
    ],
    "love+health": [
      "Too many wishes about how someone should be can leave you restless and scattered, and a scattered mind makes it hard to tell what you truly need. Ground yourself with regular meals and sleep, then ask for one clear thing.",
      "Fog lifts, and you see your feelings more plainly, which brings real calm in a close bond. Let that steadiness guide a simple choice, and support it with routines that keep you grounded.",
    ],
    "career+health": [
      "A flood of possibilities at work can leave you wired, foggy, and unable to settle, and a depleted state makes every option look equally shiny. Choose one path, and protect your sleep while you test it.",
      "Your focus returns as you drop the fantasy that suits no one, and a clearer head makes sound decisions possible. Commit to one realistic goal, and keep your routines steady so it can take root.",
    ],
    "love+career+health": [
      "Wishful thinking can spread across all three areas, with fantasies about someone, dreams of a perfect career, and scattered habits that never settle. Choose one concrete step in each, and let reality do the sorting. A few honest choices will quiet the noise.",
      "Clarity arrives, and you can see what is real in your closeness, your work, and your own needs. Make one clear decision in each area, and trust the steadier footing it gives you. Clear seeing is a form of care for all three.",
    ],
  },
  "cups-8": {
    "love+career": [
      "Walking away from what no longer fulfills you can clear space in both areas, since honesty in one often prompts honesty in the other. Decide what you are ready to leave, and head toward something with more meaning.",
      "Fear of leaving keeps you in a stale bond and a stale job, each excusing the other. Ask what you are truly staying for, and take one honest step toward either change.",
    ],
    "love+health": [
      "Leaving a draining dynamic can feel like a weight lifting from your shoulders, and a lighter body makes the next chapter easier to enter. Move on with care, and keep nourishing routines as you go.",
      "Staying in a situation that no longer feeds you can leave you tense, tired, and quietly sad. Name what you are afraid of losing, and take one gentle step toward what feels more true.",
    ],
    "career+health": [
      "Stepping away from work that no longer satisfies you can relieve strain you have carried for a long time. Plan your exit with patience, and protect your rest so you leave with strength, not exhaustion.",
      "Drifting in a role you have outgrown wears you down, and fatigue makes leaving seem even harder. Name the real reason you stay, and take a small, steady step toward a change that restores you.",
    ],
    "love+career+health": [
      "Choosing to leave what no longer fulfills you can clear all three areas at once, easing a strained bond, an unsatisfying role, and the tiredness they cause. Go slowly, keep supports in place, and move toward meaning. Leaving well is a skill worth practicing.",
      "Staying put out of fear can leave closeness stale, work empty, and your spirits low. Ask honestly what holds you, and take one modest step in the area where change feels most possible. One honest move often loosens the other two.",
    ],
  },
  "cups-9": {
    "love+career": [
      "Satisfaction in a close bond and pride in your work feed each other, and contentment at home makes success feel richer. Enjoy what you have built, and thank the people who helped you build it.",
      "Chasing pleasure or praise can leave both affection and ambition feeling hollow, as if getting what you wanted did not fill you. Ask what would truly satisfy you in each place, and aim there.",
    ],
    "love+health": [
      "Contentment with someone you love and a body at ease reinforce each other. Savor good food, laughter, and rest together without guilt, and let the comfort be enough for now.",
      "Indulgence can stand in for real closeness, and the empty feeling afterward leaves you sluggish and discontent. Swap one habit of excess for a moment of honest connection or a restful evening.",
    ],
    "career+health": [
      "Satisfaction with your efforts and a comfortable, well-fed state support each other, so achievement tastes better when you are rested. Enjoy a reward you earned, and keep the routines that got you here.",
      "Chasing rewards at work can leave you stuffed with success and still unsatisfied, with habits of excess wearing you down. Ask what would truly feel like enough, and let moderation back in.",
    ],
    "love+career+health": [
      "Contentment spreads across all three areas: affection feels easy, your work brings pride, and you feel well in yourself. Enjoy the comfort without guilt, and keep the habits that helped you reach it. Gratitude makes the contentment last.",
      "Hollow satisfaction can show up everywhere, with closeness that feels staged, achievements that do not fill you, and indulgence that leaves you drained. Ask what you truly want in each place, and choose substance over show. Real satisfaction is usually quieter than it looks.",
    ],
  },
  "cups-10": {
    "love+career": [
      "A secure home life gives you a base to take risks at work, and professional stability lets you be more generous with those you love. Plan something shared that honors both, and enjoy what you have built.",
      "A picture of the perfect household can pressure both affection and ambition, as if success must look a certain way. Accept the real, imperfect version of each, and talk openly about what matters most.",
    ],
    "love+health": [
      "Feeling at home with the people you love eases tension and helps you rest deeply. Make time for shared meals and quiet evenings, and let belonging do some of the restoring.",
      "Tension in the household weighs on you, and a worn-out body leaves less patience for those you love. Accept the support that is real, and take one calm breath before each hard conversation.",
    ],
    "career+health": [
      "A steady, secure footing at work makes room for rest, and feeling settled in yourself brings calm to your daily tasks. Build routines that protect both, and let stability be a quiet reward.",
      "Chasing an idealized picture of success can strain you, leaving you stretched thin and unsettled at work. Accept that security is imperfect, and set limits that keep you rested.",
    ],
    "love+career+health": [
      "Belonging supports every area at once: a loving household steadies you, secure work gives you a base, and feeling safe lets your body rest. Share the contentment with those around you, and protect the routines that sustain it.",
      "Discord at home can spread, souring work focus and leaving you drained. Let go of the ideal picture, accept the support that is real, and set one boundary in each area to restore steadiness. Small adjustments often calm the whole household of your life.",
    ],
  },
  "cups-page": {
    "love+career": [
      "A tender message or creative idea can open doors in both areas, because sincere curiosity is attractive to a loved one and to colleagues alike. Share your feeling or idea openly, and see who responds.",
      "Hurt feelings and irritability can color how you read both a loved one and a colleague, making small remarks seem larger. Pause before reacting, and check the facts with a calm question.",
    ],
    "love+health": [
      "Playful, creative expression with someone you care about eases tension and lifts your mood. Try something light together, like drawing, cooking, or a stroll, and let your feelings show naturally.",
      "Mood swings can leave you drained and a bit raw, and sensitivity makes small slights with someone close sting more. Give your feelings space on paper first, then share only what you want to.",
    ],
    "career+health": [
      "Creative play and a gentle attitude toward your own sensitivity can restore your work and your energy together. Let a fresh idea take shape without judgment, and give yourself breaks to daydream.",
      "Creative blocks and moody days feed each other, as a stalled idea makes you low and low spirits stall it further. Try a small, playful exercise, and keep your routines steady beneath it.",
    ],
    "love+career+health": [
      "Sensitivity can serve all three areas now: an open heart invites affection, a creative idea freshens your work, and giving feelings an outlet eases tension. Express one thing playfully in each, and notice what lights up. Gentleness with your own sensitivity makes this easier.",
      "Unsettled feelings can tint closeness, stall your creative drive at work, and leave you wrung out. Slow down, write or sketch what you feel, and let routines hold you steady while the mood passes. Feelings moved through gently tend to settle.",
    ],
  },
  "cups-knight": {
    "love+career": [
      "An invitation or proposal can arrive in both areas, since a romantic spirit tends to make you charming at work too. Follow what moves you, and keep your commitments clear so the dream has footing.",
      "Charm without substance can mislead in both places, with sweet promises to a loved one and big visions at work that go nowhere. Check that your words match your actions before you offer more.",
    ],
    "love+health": [
      "A romantic, imaginative mood brings a lift in energy, and feeling well makes you more attentive to the one you care about. Plan a thoughtful outing, and keep it simple enough that you enjoy it.",
      "Escaping into daydreams about romance can leave you ungrounded, and irregular habits make your moods swing further. Return to simple routines, and ask honestly what you need from the connection.",
    ],
    "career+health": [
      "Inspired ideas at work bring a lift in energy, and a lighter mood helps you pitch them well. Follow the idea that moves you, and keep your meals and sleep steady so enthusiasm stays sustainable.",
      "Daydreaming about glamorous plans can pull you from the task at hand, and unsteady routines make the drifting worse. Return to one concrete deliverable, and anchor your day with regular habits.",
    ],
    "love+career+health": [
      "A romantic, inspired energy can lift all three areas: an invitation to someone close, a creative pitch at work, and a lightness in your own mood. Follow what moves you, and keep habits steady enough to carry it.",
      "Escapism can leave closeness full of empty promises, work plans untethered, and your habits unsteady. Come back to what is real, and take one grounded step in each area before the next big idea. Romance of any kind lasts longer when it has roots.",
    ],
  },
  "cups-queen": {
    "love+career": [
      "Emotional wisdom lets you be present with a loved one and perceptive with colleagues, and each skill sharpens the other. Listen first in both places, and offer care that still respects your limits.",
      "Absorbing everyone else feelings can leave you overextended at home and overloaded in your role. Set one clear boundary in each place, and let others carry their own share.",
    ],
    "love+health": [
      "Compassion for someone you love and compassion for yourself belong together, and a calm, nurtured body supports both. Treat yourself with the same tenderness you offer them, and rest without apology.",
      "Giving too much to someone close leaves you depleted, and a worn-out state makes it harder to see where you end and they begin. Say no to one request, and restore yourself before offering more.",
    ],
    "career+health": [
      "Trusting your intuition at work and caring for your own needs strengthen each other, since a settled person reads situations clearly. Pause to listen to your instincts, and schedule restoring time you will actually keep.",
      "Soaking up the stress of colleagues leaves you frazzled, and a frazzled state makes boundaries harder to hold. Decide what is yours to carry, and protect a quiet space to reset daily.",
    ],
    "love+career+health": [
      "Compassion with boundaries serves all three areas: you listen well to loved ones, read situations at work, and tend to your own wellbeing. Trust your intuition, and give yourself the same care you offer others. Kindness works best when it flows both ways.",
      "Taking on everyone else emotions can overload closeness, crowd your work, and wear you down. Pick one boundary in each area, and return to your own center before helping anyone further. You can only pour well from a full cup.",
    ],
  },
  "cups-king": {
    "love+career": [
      "Calm emotional maturity helps you respond rather than react, which builds trust with someone close and authority at work. Listen fully before answering, and let your steady manner do the persuading.",
      "Bottled-up feelings can turn cold or controlling in both places, with distance at home and quiet manipulation at work. Name what you feel plainly to one person, and let honesty replace pressure.",
    ],
    "love+health": [
      "Emotional steadiness with someone you love allows your body to settle, and a calmer state helps you respond with care. Share what you feel in plain words, and keep the rhythms that keep you balanced.",
      "Suppressed feelings can harden into distance with someone close and show up as tension or restlessness. Say what you feel to someone safe, and give your system time to unwind.",
    ],
    "career+health": [
      "Staying composed under pressure supports your authority, and looking after your own needs keeps that composure from wearing thin. Make decisions calmly, and schedule real recovery after demanding stretches.",
      "Swallowing stress to look in control can make you brittle or sharp at work, and the strain builds in you over time. Name the pressure to someone sound, and let yourself recover.",
    ],
    "love+career+health": [
      "Emotional balance holds all three areas together: you stay generous with loved ones, steady in your role, and calm in yourself. Respond rather than react, and keep the habits that make composure sustainable. Calm shared freely tends to steady everyone nearby.",
      "Repressed feeling can chill closeness, harden your manner at work, and settle as strain in you. Admit what you feel to one trusted person, and let honest expression soften the others. A single plain statement can ease a surprising amount.",
    ],
  },
};

Object.assign(COMBINED_READINGS, COMBINED_CUPS);

Object.entries(COMBINED_CUPS).forEach(([id, combined]) => {
  if (EXTRA[id]) EXTRA[id].combined = combined;
});
