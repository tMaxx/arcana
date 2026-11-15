"use strict";

/* ------------------------------------------------------------------ *
 * Deep-dive readings: Major Arcana, The Hanged Man to The World.
 * Long-form interpretations for readers who want more than the short
 * meaning. One pair per reading context; [upright, reversed].
 * ------------------------------------------------------------------ */

const DEEP_MAJOR_2 = {
  "hanged-man": {
    general: [
      "Progress has paused, and the pause is doing work you cannot see yet. It shows up as a decision that will not resolve, a stretch where effort changes nothing, or a nagging sense that you are looking at the problem from the wrong side. Stop pushing and let the situation turn in your hands. Ask what you would notice if you stayed still and looked at it from the opposite direction.",
      "The waiting has stopped teaching you anything. You may be calling a stall patience, giving up something for a cause that no longer needs it, or holding a position mostly because moving feels like admitting a mistake. A real pause brings insight, and this one only brings fatigue. Name what you are waiting for, set a date to revisit it, and choose a different posture if nothing has shifted by then.",
    ],
    love: [
      "A relationship asks you to lower your guard and see it from another seat. This may be a partner whose reasons you have only guessed at, a family standoff, or a friendship that cooled while both of you waited for the other to call. Stop arguing your case for a while and listen to theirs fully. Let understanding come first, and expect that the right move becomes clearer once you stop forcing one.",
      "Someone is waiting, sacrificing or holding out, and no one is getting closer. It can look like staying in a stalled romance out of loyalty, giving endlessly to a family member who never notices, or refusing to bend first in a quarrel. Martyrdom is not the same as love. Say plainly what you are giving up, ask whether it is wanted, and stop paying for a change nobody has agreed to make.",
    ],
    career: [
      "Your working life is on hold, and the hold may be the smartest option available. A promotion is delayed, a project is awaiting approval, or you are between roles with no clear next step. Use the gap to study, rethink your approach, and question the assumptions behind your goals. Resist grabbing the first offer simply to end the discomfort, since the better angle usually appears once urgency has loosened its grip.",
      "Delay is costing you money and momentum without teaching you anything. You may be stuck in a role out of habit, sacrificing evenings and weekends for a company that has not earned it, or putting off a decision about your direction. Indecision is a choice, and it has a price. Tally what the waiting has actually cost, then take one concrete step, such as an application, a conversation or a budget change.",
    ],
    health: [
      "Your body and mind are asking for a real pause, and resting now is productive rather than lazy. Fatigue, a slow season or a forced break may be pointing at how long you have run on will alone. Let yourself lie still, reflect, and see your habits from a fresh angle. Choose rest that actually restores you, such as quiet, sleep or slow time outdoors, rather than rest spent in distraction.",
      "Rest has curdled into stagnation, or sacrifice has become a habit that drains you. You may be putting your own needs last so long that it feels normal, or lingering in low motivation because starting seems too hard. Neither is true recovery. Begin with something small and kind, like a short walk, a regular bedtime or a call to someone supportive, and let movement return gradually instead of demanding a full turnaround.",
    ],
  },
  "death": {
    general: [
      "Something in your life has run its course, and the ending is making room instead of taking something away. It shows up as a role that no longer fits, a routine that feels hollow, or a loss you already sense coming. Do not rush to fill the space left behind. Honor what the old chapter gave you, then ask what you are ready to stop carrying so that the next one can take shape.",
      "An ending is being resisted, and the resistance is the real cost. You may be keeping a finished situation on life support, replaying the same pattern in new settings, or avoiding grief by staying busy. Stagnation feels safer than change until it does not. Name what has actually ended, allow yourself to feel the loss, and take one deliberate step away from it instead of waiting for it to release you.",
    ],
    love: [
      "A phase of your closest bonds is ending so that something more honest can begin. It may be the close of a relationship, a pattern of arguing, or an old role you have played in your family or among friends. This is rarely comfortable, but it is clarifying. Grieve what is leaving without trying to rescue it, and be willing to let the connection reshape into something truer or to part with care.",
      "You are holding on to a bond, or a version of one, that has already changed. Fear of being alone, loyalty to the past or the sunk cost of years can keep you in a cycle that repeats the same pain. The ending you avoid tends to arrive anyway, only more slowly. Decide what you would choose if starting from today, and speak to that truth rather than the history.",
    ],
    career: [
      "A job, role or way of earning reaches its natural end, and the work now is to close it well. This might be a layoff, a resignation, a project wrapping up or a field you have outgrown. Tidy the practical details, keep your professional relationships intact, and give yourself time before choosing what comes next. The skills you built stay with you, even as the title and the routine fall away.",
      "You are staying in something finished because change feels more frightening than decline. A role may have lost its purpose, an industry may be shrinking, or a plan may have failed long ago while you kept investing in it. Stagnation slowly eats confidence and income alike. Assess honestly what still has a future, put a timeline on your exit, and begin building the next step while you are still steady.",
    ],
    health: [
      "A season of depletion is closing, and your energy can reorganize around something lighter. Old habits, worries or attachments that sapped your vitality may finally loosen their hold. Expect some tiredness or grief as they go, which is a normal part of release. Support the transition with steady sleep, simple meals and gentle movement, and give yourself permission to feel lighter without needing to explain it to anyone.",
      "Resisting a needed change is draining you more than the change itself would. You may be clinging to a habit, routine or self-image that no longer sustains you, and lingering fatigue or sadness may reflect that grip. Recovery does not stall forever, even when it feels slow. Name the one pattern you are ready to release, take a small step away from it, and lean on trusted people while you adjust.",
    ],
  },
  "temperance": {
    general: [
      "Your life is finding its proportions, and patience is the working method. It shows up as competing demands starting to fit together, a slow recovery that is actually taking hold, or a calmer way of handling things that were once hard. Keep to the middle path and make small adjustments instead of dramatic ones. Notice what you have been combining well, and give it time to settle before judging the result.",
      "Something is out of proportion, and quick fixes are making it worse. You may be swinging between too much and too little, losing patience with a process that needs time, or letting one area of life swallow the rest. Extremes feel decisive but rarely last. Pick the single imbalance that bothers you most, adjust it by a modest amount, and hold that change for a few weeks before changing anything else.",
    ],
    love: [
      "Two people are learning to blend without losing themselves. A partnership grows steadier through compromise, a family rift softens through patient talks, or a friendship deepens because both of you adjust. Warmth builds slowly here and lasts longer for it. Give and receive in roughly equal measure, speak calmly when feelings run high, and trust a connection that unfolds at an even pace over one that arrives in a rush.",
      "The give and take has tilted, or the emotional temperature keeps swinging. One person may be carrying most of the effort, the pace may alternate between intense closeness and distance, or arguments flare without resolving. Passion without patience wears both people out. Say honestly where the balance has slipped, propose one small adjustment each, and resist the urge to settle everything in a single heated conversation.",
    ],
    career: [
      "Steady, measured effort is what moves your work forward now. You may be balancing several responsibilities, blending different skills, or working with others whose strengths complement yours. Avoid big swings and favor sustainable pacing, careful budgeting and patient negotiation, because progress will look modest week to week and substantial over a year. Ask which commitments you can keep indefinitely, and trim anything that only works if you stay frantic.",
      "Your workload, spending or priorities have lost their proportion. Overcommitment, impatience with slow results and lopsided effort can all appear here, along with money that goes out faster than it comes in. Hurrying to compensate usually adds new problems. Write down what you have promised and what you can realistically deliver, renegotiate whatever does not fit, and rebuild a rhythm you can maintain without heroic effort.",
    ],
    health: [
      "Balance is your best medicine, and small consistent habits count more than bold overhauls. Regular sleep, varied meals, a mix of activity and rest, and time for both company and quiet all support you now. Healing may feel slow, yet it is real and cumulative. Adjust one routine at a time, pay attention to how your energy responds, and treat moderation as a skill you are practicing rather than a restriction.",
      "You are swinging between extremes, and your energy follows. Periods of strict discipline may alternate with indulgence, long stretches of overwork may lead to collapse, or stress may be spilling into every part of your day. All-or-nothing plans fail because they ignore how you actually live. Choose a gentler baseline you can keep on a bad day, and return to it each time you drift rather than starting over.",
    ],
  },
  "devil": {
    general: [
      "You are tied to something, and the tie is tighter in your mind than in the facts. It shows up as a habit you defend, a comfort you cannot refuse, or a situation you say you cannot leave while quietly choosing it each day. Look at it without shame. Ask what it gives you, what it costs, and which part of the bond you could loosen this week if you decided to.",
      "The grip is starting to loosen, or it is tightening behind a convincing story. Some readers feel the first honest recognition of a pattern and the rough start of change. Others deepen the attachment by denying that it is one, and both are possible here. Tell one trusted person the plain truth about what has hold of you, and pay attention to how your reaction feels once it is out loud.",
    ],
    love: [
      "A bond holds you tight, whether through strong attraction, jealousy, dependence or a habit of keeping someone close for the wrong reasons. This is not limited to romance, and can describe a family dynamic or a friendship built on obligation or control. Ask how much of the connection you choose freely and how much you simply fear losing. Honest answers can make the bond healthier or show you where its edges are.",
      "You are beginning to step out of a tangled attachment, though old habits may still call you back. Shame, loneliness or the pull of familiar drama can make leaving feel harder than staying. Alternatively, the knot may be tightening while both of you call it passion. Set one boundary you can actually keep, tell someone you trust what is happening, and judge the relationship by how you feel afterward.",
    ],
    career: [
      "Something about your working life holds you more firmly than you admit. It may be a salary that justifies a job you dislike, long hours that feel obligatory, or a fixation on status and money. The chain is often loose, and you can see that when you stop and count it. List what you would gain and lose by leaving, then decide whether the trade is still one you would choose.",
      "You are starting to see through an unhealthy arrangement and to reclaim some independence. That might mean questioning a toxic workplace, cutting back on ambition that was costing too much, or facing debt and spending habits directly. The old pull toward security or recognition remains strong, and it can lure you back. Make one practical move toward freedom this month, such as building savings, updating your resume or setting a firm limit on hours.",
    ],
    health: [
      "A habit or craving may be taking more energy than it gives back. This could be food, screens, caffeine, alcohol, work or a pattern of numbing out when you are stressed. Look at it with curiosity rather than shame, since shame tends to feed the cycle. Notice when the urge appears and what feeling sits beneath it, then try small substitutions, supportive company and honest conversation with someone you trust to loosen the hold.",
      "You are making your way out of an unhealthy pattern, and the process is uneven. Cravings, restlessness, guilt or low mood can show up as the old comfort recedes, and that does not mean you are failing. Alternatively, denial may be keeping the pattern in place. Ask for support, whether from friends, a counselor or a professional, and aim for steady progress over perfection, one day at a time.",
    ],
  },
  "tower": {
    general: [
      "A structure that looked solid is giving way, and the shock is also a release. It shows up as news you did not expect, a plan that collapses, or a truth that can no longer be ignored. The first days are for safety and basics, not big decisions. Once the dust settles, look at what actually fell, which was probably something that rested on assumptions you can now replace with sturdier ones.",
      "The upheaval is slower, quieter or narrowly avoided, and that does not make it smaller. You may sense that something is cracking but keep patching it, or you may have escaped one crisis and ignored its lesson. Pressure left unspoken tends to build. Name the foundation you are worried about, examine it while you still have choices, and make a modest repair or a planned exit rather than waiting for a forced one.",
    ],
    love: [
      "A truth breaks through and a relationship, or your picture of one, changes suddenly. It may be a revelation, a breakup, a family rupture or a friendship that ends over something long unspoken. The pain is real, and so is the clearing it creates. Let yourself react, lean on people who steady you, and wait before making permanent decisions, since what survives this honest moment can be rebuilt on far firmer ground.",
      "The break is delayed, internal or deliberately avoided. You may be holding together a bond that is quietly failing, or you may have dodged a confrontation that still waits for you. The tension you postpone does not disappear, and it often grows heavier. Say the thing you have been avoiding, in a calm moment and with care, because a controlled conversation is almost always gentler than a collapse that arrives on its own schedule.",
    ],
    career: [
      "A sudden change disrupts your working life, such as a layoff, a restructuring, a failed project or a reputation hit. It is disorienting, and it also removes a setup that was weaker than it appeared. Deal with the practical items first: income, paperwork and key contacts. Then take stock of the skills and relationships that remain, and rebuild on honest foundations, even if that means choosing something different from what fell.",
      "A crisis is brewing or has been postponed, and avoiding it is making it larger. Warning signs may include unresolved conflict, unsustainable finances or a business model that no longer works. You may also be resisting a change that is clearly coming. Prepare now by building a cushion, updating your options and speaking candidly with the people involved, since a planned adjustment costs far less than a surprise one.",
    ],
    health: [
      "A jolt of stress or a sudden change has shaken your routine, and your system needs time to settle. You may feel wired, drained or unmoored in the days after. Put basics first: sleep, regular meals, quiet and company you trust. Avoid pushing through or making sweeping lifestyle changes during the shock, because recovery usually comes in stages and gentle steadiness will serve you better than any dramatic effort to feel normal.",
      "Tension has been building under the surface, or a shock has left lingering unease. You may be holding on to stress, replaying a difficult event or bracing for something that has not happened. Rebuild slowly rather than powering through the wreckage. Create small anchors, such as a predictable bedtime, time outdoors and someone to talk to, and consider professional support if the unease stays heavy for weeks.",
    ],
  },
  "star": {
    general: [
      "Calm returns after a hard stretch, and with it a quiet, believable hope. It shows up as an easier mood, a sense that things are slowly mending, or a renewed interest in a goal you had set aside. Do not rush it or demand proof. Tend what is working, do small and honest things each day, and let your sense of direction grow back at its own gentle pace.",
      "Hope has dimmed, and discouragement is coloring how you see everything. You may be waiting for a sign, comparing your pace to other lives, or deciding in advance that effort will not help. This is exhaustion more than truth. Look for one small thing that still feels worth caring about and give it regular, modest attention, since faith tends to return through practice rather than argument.",
    ],
    love: [
      "Trust and tenderness are returning to your close relationships. A strained partnership may soften, a family wound may begin to heal, or you may meet someone whose company feels easy and honest. Be open without hurrying, and let yourself receive as well as give. Speak about your hopes plainly, and honor the quiet, steady moments, which are the ones that build lasting affection.",
      "You have stopped believing that closeness is available to you, or that you deserve it. Past disappointment may be keeping you guarded, and you might be waiting for a perfect sign before you try again. Comparison with other couples or old stories makes the doubt louder. Treat yourself with the kindness you would offer a friend, reach out to one person, and let small warm exchanges rebuild your trust.",
    ],
    career: [
      "Your work is regaining purpose, and patient effort is beginning to pay off. A creative idea may return, a long-term goal may seem possible again, or recognition may arrive after a quiet stretch. Keep your focus on the craft rather than the applause. Set a modest, steady routine, share your work with people who encourage you, and trust that consistent progress will add up even if results are gradual.",
      "Discouragement is draining your ambition, and the work feels pointless or out of reach. You may have lost faith after a setback, compare yourself unfavorably to peers, or feel your creativity has dried up. Burnout often hides behind this mood. Rest first, then pick one small project you can finish and enjoy, because completing something modest rebuilds the belief that larger goals are worth pursuing.",
    ],
    health: [
      "Recovery is under way, and rest is doing its quiet work. Energy returns slowly, mood lifts and the body responds to gentle care. Spend time outdoors, sleep well, drink water and let yourself move at a comfortable pace. Healing here is steady rather than dramatic, so notice small gains, such as better sleep or a calmer morning, instead of measuring it day by day, and let them reassure you.",
      "Low spirits and weariness are dimming your energy, and it is hard to believe things will improve. You may be neglecting small comforts because they feel pointless, or feeling disconnected from the things that usually restore you. Start tiny: a short walk, a glass of water, a call to someone kind. If the heaviness persists, seek out support, since wellbeing often returns through small, repeated acts of care.",
    ],
  },
  "moon": {
    general: [
      "Things are not entirely as they appear, and your feelings may be running ahead of the facts. It shows up as vivid dreams, vague unease, mixed signals or a sense that something important is hidden. Move carefully and avoid large decisions made at night or under worry. Write down what you actually know, separate it from what you fear, and give the situation time to reveal its shape.",
      "The fog is starting to lift, though some fear remains. A confusing situation may become clear, a secret may surface, or an anxiety you suppressed may finally ask for attention. Either way, what was hidden is easier to see now. Check your first impressions against evidence, and address the leftover worry directly rather than letting it work quietly in the background and color your choices.",
    ],
    love: [
      "Feelings and signals are hard to read, and imagination fills the gaps. A partner may seem distant without saying why, a family dynamic may carry unspoken tension, or you may be unsure of your own heart. Move slowly and ask direct, gentle questions instead of relying on guesses. Notice where old insecurity is shaping what you see, and let time and consistent behavior show who is trustworthy.",
      "Confusion is easing, and what was unsaid is coming into the open. A concealed truth may surface, or you may realize that fear, not fact, has been shaping your view of someone close. Some anxiety may linger and tint how you interpret small things. Talk plainly about what you have noticed, give the other person room to answer, and let their actions weigh more than your worst assumptions.",
    ],
    career: [
      "Information at work is incomplete, and not everyone is telling you everything. A project may have murky goals, a deal may hide details, or your own path may feel unclear. Avoid committing to major changes until the picture sharpens. Ask for specifics in writing, double-check figures and listen for what is left unsaid, because patience now prevents expensive mistakes and lets your instincts work with better evidence.",
      "The uncertainty is clearing, and hidden facts are coming forward. A misunderstanding may be resolved, a quiet problem may be exposed, or you may recognize that anxiety has been inflating a risk. Some worry may remain, and it deserves a plain look. Review what has been revealed, correct course where needed, and speak up about anything you had been quietly avoiding so the clarity can hold.",
    ],
    health: [
      "Your emotional tides are strong, and rest may be restless. Dreams, worry and a vague sense of unease can show up, especially in the evening. Protect your sleep, keep a steady routine and avoid making decisions from fear. Time near water, gentle movement and writing out your thoughts can help settle them, as long as you treat the feelings as information to be heard, not as predictions of what will happen.",
      "Anxiety is easing, though it may still disturb your rest or color your mood. You might notice old fears resurfacing in quiet moments, or clarity arriving in patches. Keep your grounding habits close: regular meals, a consistent bedtime, daylight and honest talk with someone safe. If worry stays heavy for weeks, consider speaking with a counselor, who can help you sort real concern from echoes.",
    ],
  },
  "sun": {
    general: [
      "Clarity and warmth are available, and things are working more simply than you expected. It shows up as an easy confidence, good news, a project that goes well or a mood that lifts without effort. Enjoy it fully instead of waiting for the catch. Share what you have, spend time in the open and let your gratitude be visible, since success is more lasting when other people can feel it too.",
      "The brightness is present but dimmed, and the delay is temporary. Optimism may have dipped after a setback, expectations may be too high to be met, or confidence may be tipping into assuming everything will work out unaided. The good result is still available. Adjust your expectations to match the facts, give things a little more time, and keep doing the plain work that supports your hopes.",
    ],
    love: [
      "Affection is open and easy, and joy in company comes naturally. A partnership feels warm and honest, a new romance feels playful, or a family and friends gather in real contentment. Do not hold back out of caution. Say what you appreciate, make time for fun and let people see you as you are, because simple, shared happiness is a good foundation and deserves your attention.",
      "Warmth is real but clouded for now, and happiness delayed is not happiness denied. A partner may be distracted or cooler than usual, expectations may be unrealistically high, or doubt may be dimming something good. Avoid testing the relationship or demanding constant sunshine from it. Be patient, plan something enjoyable together, and talk honestly about what each of you needs so the ease can return.",
    ],
    career: [
      "Your efforts are visible and rewarded, and the results are clear. Recognition, a successful launch, a raise or simply the energy of doing work you believe in may all show up. Take credit where it is earned and thank those who helped. Use the momentum to share your plans, take on a worthwhile challenge and build on what is working while the confidence is high.",
      "A good outcome is slower or smaller than hoped, and your mood about it may be sinking. Overconfidence can lead you to skip details, while pessimism can make a sound project look doomed. The work is probably fine. Review the facts without gloss, fix whatever is genuinely weak, and keep going, since steady effort through a modest patch usually brings the recognition you expected.",
    ],
    health: [
      "Vitality is strong, and your body and mood respond readily to care. You may feel rested, energetic and more at ease with yourself. Use the daylight: walk outside, play, eat well and sleep deeply. Enjoy activities that make you feel alive rather than those you feel obliged to do, and build habits that you can carry into more demanding seasons.",
      "Energy is returning after a dip, and it may be uneven for a while. Cloudy days still happen, and you may be tempted to rush back to full speed or to push too hard because you feel better. Let recovery have its own pace. Spend a little time in daylight each day, add activity gradually and allow your mood to catch up with your body.",
    ],
  },
  "judgement": {
    general: [
      "A moment of honest reckoning is here, and it carries an invitation. It shows up as a sudden clarity about your past choices, a persistent sense that you are meant for something different, or a chance to forgive and begin again. Look at your history plainly, without excuses or cruelty. Decide what you are ready to answer, take the first visible step, and let the old story stop deciding your future.",
      "You are judging yourself too harshly, or ignoring a call you clearly hear. Old mistakes may be replaying on a loop, fear of what others think may be keeping you quiet, or you may be avoiding an evaluation you know is due. This keeps you stuck without improving anything. Write down what you actually did, what you learned and what you can repair, then give yourself the same fairness you would offer a friend.",
    ],
    love: [
      "A frank reckoning lets a relationship begin again, or lets you leave one cleanly. Forgiveness may be offered or asked for, an old estrangement in a family may finally be addressed, or you may recognize what you truly want in love. Speak honestly about the past without keeping score. Take responsibility for your part, accept the same from the other person, and let the connection start fresh from where you are.",
      "Self-criticism or unspoken grudges are keeping you stuck in the same pattern. You may believe that past failures make you unworthy of closeness, replay old hurts in new relationships, or avoid a conversation that would clear the air. Resentment holds both people in place. Decide what you are ready to forgive, in yourself or someone else, and have the difficult talk that lets you move forward.",
    ],
    career: [
      "A turning point in your work invites you to respond to a real vocation. It might be a review, a decision about your direction or a renewed sense that you are suited to something larger. Take stock of what you have done, including the lessons from mistakes, and apply for the role or take on the challenge you have been circling. Step forward with confidence in your record rather than hiding behind modesty.",
      "Self-doubt, or fear of evaluation, is stopping you from answering what you know is right. You may be turning down opportunities, dwelling on old failures, or staying in work that ignores your abilities. The call tends to return until it is heard. Review your record fairly, include your successes as well as your errors, and take one concrete step, such as a conversation, a course or an application.",
    ],
    health: [
      "An honest look at how you have been living brings relief and motivation. You may recognize patterns that need changing, or feel a clear urge to treat yourself better. Forgive past neglect and build on today. Choose one realistic change, such as a regular sleep schedule or time to move, and commit to it kindly, since wellbeing improves most when it comes from self-respect rather than punishment.",
      "Harsh self-criticism is wearing you down more than any habit it targets. You may blame yourself for past choices, avoid facing how you actually feel, or put off caring for yourself until you feel worthy. Shame is a poor source of energy. Speak to yourself as you would to someone you care about, take one small caring step today, and let consistency do the rebuilding.",
    ],
  },
  "world": {
    general: [
      "A significant cycle is closing, and the work you put in has come together. It shows up as a sense of arrival, a goal reached, a move or milestone, or a feeling of being at home in your life. Take time to honor how far you have come before looking ahead. Mark the completion in some visible way, thank those who helped, and then let the next direction emerge from what you have learned.",
      "You are near the finish but not quite there, and something keeps the cycle from closing. A final task may be unfinished, a shortcut may have left a gap, or you may be delaying the end because what follows feels uncertain. Completion needs the last steps as well as the main effort. List what remains, finish it properly, and allow yourself to let the chapter end instead of lingering at its edge.",
    ],
    love: [
      "A relationship reaches a satisfying sense of wholeness. This may be a lasting commitment, a shared milestone, a family that feels settled or a friendship that has weathered years and proved itself. You feel complete in yourself as well as with others. Celebrate together, say what you value, and enjoy the security without rushing on, because from this stable place you can decide what you want to build next.",
      "A closeness is almost whole but unfinished, with loose ends keeping it from settling. An old conversation may never have happened, a commitment may be held back, or feelings from a previous chapter may still be unresolved. Closure matters more than speed. Say what is left unsaid, finish what you started or end it cleanly, and give yourself room to feel complete before moving into something new.",
    ],
    career: [
      "A major goal is achieved, and your work comes together as a coherent whole. A project completes, a degree or certification finishes, or a long effort pays off and opens wider horizons, possibly further afield. Acknowledge the accomplishment and record what you learned. Then consider where your expanded skills could be used next, and take time to rest before you begin another demanding phase.",
      "A project is nearly finished, but gaps, shortcuts or lack of closure keep it from landing. Final details may be neglected, approval may be pending, or you may be hesitant to complete something because the next step is unclear. Unfinished work drains attention from new ventures. Identify what is still open, handle each item in turn and formally wrap up so that your next opportunity gets your full focus.",
    ],
    health: [
      "A period of healing or effort reaches a natural completion, and you feel more whole in body and mind. Your habits and your sense of self line up, and energy flows more evenly. Celebrate this progress, perhaps with a favorite outing or a quiet day of gratitude. Keep the practices that carried you here, and let yourself enjoy feeling well before you set the next health goal.",
      "Recovery or a wellbeing project is close to done but not quite settled. A few small steps may be left undone, a lingering tiredness may remain, or you may stop just short of consolidating a habit. Do not abandon the process at the final stretch. Review what still needs care, finish those last items patiently, and give yourself the time to feel fully restored before declaring it over.",
    ],
  },
};

Object.assign(DEEP_READINGS, DEEP_MAJOR_2);
Object.entries(DEEP_MAJOR_2).forEach(([id, deep]) => {
  if (EXTRA[id]) EXTRA[id].deep = deep;
});
