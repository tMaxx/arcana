"use strict";

/* ------------------------------------------------------------------ *
 * Deep-dive readings: Swords.
 * Long-form interpretations for readers who want more than the short
 * meaning. One pair per reading context; [upright, reversed].
 * ------------------------------------------------------------------ */

const DEEP_SWORDS = {
  "swords-ace": {
    general: [
      "A clear thought arrives and cuts through weeks of fog. It may be a plain fact you have been avoiding, a decision that suddenly feels obvious, or the right words for something you could not explain. Trust the clarity while it is fresh and write it down before doubt returns. Then act on it honestly and in proportion, since truth lands best when it is delivered with care.",
      "Your thinking is clouded, and the answers you reach feel either too sharp or not sharp enough. You may be reacting to half the facts, speaking bluntly to win a point, or burying a truth because naming it feels risky. Slow down and separate what you know from what you assume. Gather the missing information, then say the simple version out loud before you decide anything.",
    ],
    love: [
      "An honest conversation is ready to happen, and it can finally show you where you stand. This could be a partner, a parent, a sibling or a friend, and the subject is something that has gone unsaid for a long while. Speak plainly, without accusation, and listen to the answer without rehearsing a defense. Relief usually comes from the clarity itself, whatever the news turns out to be.",
      "Words are doing damage in a close bond. Someone may be using cold logic to dismiss a feeling, or a needed truth stays unspoken because everyone fears what it will break. Notice whether you are being honest or merely harsh. If a conversation went badly, return to it once tempers settle and aim to be understood rather than to be right.",
    ],
    career: [
      "A sharp idea or a decisive insight gives you an edge at work. You can see the real problem in a project, a contract or a budget, and your recommendation is likely to hold up under questions. Put it in writing and keep the language precise. This is a good moment to make a fair, well-reasoned decision about your direction or your money.",
      "Plans are undermined by muddled thinking and unclear communication. A message may be read the wrong way, numbers may not add up, or a blunt approach may cost you goodwill with people you need. Check your facts before presenting anything. Rewrite the important emails after a pause, and ask a trusted colleague to challenge your reasoning before it goes further.",
    ],
    health: [
      "Your mind has a window of unusual clarity, and it is a good time to be honest about how you feel. You may see exactly which habit, worry or pace of life is wearing you down. Name it simply and choose one change that fits your actual life. Clear thinking is a form of rest in itself, so let it settle you rather than drive you.",
      "A fog sits over your thoughts, and the inner voice has turned harsh. You may be pushing for an answer while exhausted, or criticizing yourself in ways you would never use on a friend. Rest your mind before demanding conclusions. Reduce noise, take a walk without a screen, and let a night of sleep soften the sharpest edges of your thinking.",
    ],
  },
  "swords-2": {
    general: [
      "You are holding two options in careful balance and refusing to look at either one. The stillness feels safer than choosing, yet it uses up energy every day. A truce or a pause can be useful, but it is not a decision. List what each path would cost and what it would give, then set a date by which you will choose.",
      "The blindfold is slipping, and information you avoided is coming into view. This can feel like relief or like a jolt of anxiety, often both. Resist the urge to spin the new facts into endless scenarios. Take what you now know, choose the next small step, and accept that an imperfect decision still moves you out of the stalemate, which tells you the choice is yours to make now.",
    ],
    love: [
      "A guarded standoff sits at the center of a close relationship. Neither of you is willing to say what you want, so feelings stay folded behind a calm face. This could involve romance, a family rift or a friendship that has gone cautious. Pick one true sentence you can offer, such as what you need or what you fear, and say it first.",
      "Hidden feelings surface, and the avoided conversation can no longer wait. You may find you know exactly what you want, or you may feel anxious that the truth is now out. Both reactions are normal. Move at a steady pace, speak to the person directly rather than to a circle of advisors, and let the answer you already have guide you.",
    ],
    career: [
      "Two offers, two paths or two sets of obligations are in balance, and you are stalling on the choice. Waiting for perfect certainty has become its own decision, usually a costly one. Gather the numbers, ask the one question you have been avoiding, and compare the options against what matters most to you. Then commit by a date you set.",
      "A long period of indecision ends as facts finally emerge. The relief is real, though overthinking may still follow you, especially where money is involved. Do not reopen every option now that the picture is clearer. Check the new information once, choose, and put your attention on carrying out the decision instead of defending it, so give the decision a firm start date and a review point.",
    ],
    health: [
      "Tension from an unmade choice is taking up room in your body and your sleep. You may be holding your breath, clenching, or going over the same question each night. Step away from the decision long enough to rest and breathe. A calm walk or a quiet hour often shows more clearly than another round of analysis, since a settled mind rests better than a divided one.",
      "The stalemate loosens, and your system begins to let go. You may notice lighter shoulders, easier breathing or a first decent night in a while. Some anxiety can ride along with that relief, so keep your routines steady. Make the decision you have been circling, even if it is imperfect, and let your body register that the waiting is over.",
    ],
  },
  "swords-3": {
    general: [
      "A real sorrow is present, and it asks to be felt rather than explained away. It may come from a loss, a disappointment or a truth you did not want to learn. Pain like this is not a sign that you are failing. Give it time, speak it aloud to someone safe, and avoid rehearsing the injury again and again.",
      "Healing is underway, though it is uneven. You may be forgiving, releasing or finally speaking about an old hurt. Or you may be holding the pain down so tightly that it leaks out as irritability and distance. Be patient with the pace, let some of it surface in a safe setting, and allow time to do its slow work without hurrying it along.",
    ],
    love: [
      "Heartbreak or a painful truth has reached you, and the grief is real. It could be a breakup, a betrayal, a family estrangement or the quiet loss of a friend. Do not rush to be fine. Let people who care for you stay close, and put off any big decisions until the first wave has passed, and be kind to yourself about how long it takes.",
      "Old hurt is beginning to ease, and forgiveness may be possible, whether toward someone else or toward yourself. Recovery is rarely a straight line, so a bad day does not erase progress. Watch for pain you keep tucked away, since it can shape how you trust new people. Name it gently, and allow closeness to return at a pace you choose.",
    ],
    career: [
      "A setback at work stings, whether it is a rejection, a layoff, harsh criticism or a project that fell apart. The disappointment is legitimate, and you need not pretend otherwise. Look at what actually happened, separate fact from verdict, and take one practical step, such as updating your resume or asking for specific feedback. Acting does not cancel the hurt, but it restores some footing.",
      "You are recovering from a workplace wound, and the sharpest edge has dulled. Some bitterness or buried disappointment may remain, especially if the matter was never discussed. Without making a drama of it, give yourself a chance to process it, perhaps with a mentor or a friend outside work. That makes it easier to move into the next opportunity with an open mind.",
    ],
    health: [
      "Emotional pain is weighing on you, and it can show up as tiredness, a heavy chest or a loss of appetite for things you enjoy. Allow the sadness to be present without turning it into a project. Gentle routines, time with caring people and a willingness to cry if you need to will all help. Avoid replaying the wound late at night.",
      "Your heart is slowly mending, and the ache comes in waves rather than constantly. Be patient and keep your supports in place, even on days you feel fine. If you have been holding feelings down, notice where they gather, such as in your shoulders or your sleep. A few quiet minutes of honest reflection or writing can release some of that pressure.",
    ],
  },
  "swords-4": {
    general: [
      "This is a season for withdrawal and repair. You have been carrying more than you admit, and your mind needs a pause before the next demand arrives. Rest is not laziness here, and it is the work that makes later effort possible. Clear a few days, say no to what you can, and let yourself do very little without guilt.",
      "Restlessness or burnout is telling you that rest has not really happened. You may have stopped working but kept thinking about it, or you may be rushing back before you have recovered. Stagnation can also set in if retreat becomes hiding. Set a clear window for recovery, protect it, and plan a gentle return rather than a sudden leap, so that rest becomes a bridge and not a hiding place.",
    ],
    love: [
      "A relationship or your own heart needs quiet and space. You may step back from dating, ease the pace with a partner, or give family and friends a break from heavy conversations. Say so plainly, so that distance is not mistaken for rejection. Healing needs time, and nobody is owed a quick answer, and trust that the people who matter will wait for you.",
      "Withdrawal has gone on past its usefulness, or you are leaving your retreat before the heart is ready. Either way, connection is being strained. Check whether you are resting or simply avoiding. If you need more time, say so kindly, and if you are ready, reach out with one small invitation and see how much energy you really have for connection right now.",
    ],
    career: [
      "Step back before the next push. A sabbatical, a lighter schedule, a few real days off or a pause between projects will let your mind and your finances settle. Decisions made while exhausted tend to be poor ones. Hand off what you can, avoid starting anything new, and use the quiet to think about what you actually want from your work.",
      "Exhaustion is being ignored, or restlessness is pulling you back to your desk too soon. The result may be flat output, slow mistakes and a sense of going nowhere. Rest properly before you press harder. If a break feels impossible, make a smaller version of one, such as an uninterrupted afternoon or a protected evening each week, since steady recovery makes you more effective than constant pushing ever will.",
    ],
    health: [
      "Your body and mind are asking for deep rest. Sleep as much as you can, reduce stimulation, and let your nervous system settle. Quiet is the treatment here, and it does not need to be earned. Make the room dim, the schedule light and the evenings calm, and allow yourself to recover without measuring how productive you are, and trust that doing less right now is the sensible choice.",
      "Rest has been cut short, and the tiredness shows in restless nights and a jumpy, scattered mind. You may feel unable to relax even when nothing is asked of you. Return to stillness in small stages, with a regular bedtime, a few minutes of slow breathing and fewer screens. Build the habit before you add more activity, so that your body learns again that it is safe to stop.",
    ],
  },
  "swords-5": {
    general: [
      "A contest is on, and winning it may cost more than it gains. The other side may walk away hurt, and you may find the victory feels thin. Look closely at what you are really fighting for. If the point is no longer worth the damage, you can choose to let it go without losing your dignity, and let that clear view guide whether to press on or stand down.",
      "The fight is over, and the aftermath is setting in. You may feel regret, a wish to make peace, or resentment that will not fade. Sometimes the strongest move is to walk away from a battle that cannot be won cleanly. Decide whether you owe an apology, a clear boundary or simply your absence, and then act on it, so that you are not carrying the conflict into the next chapter.",
    ],
    love: [
      "An argument leaves one person triumphant and the other hurt, and the bond pays the price. You might be keeping score, needing the last word or refusing to concede a small point. Ask yourself whether being right is worth what is being lost. A quiet admission of your part can disarm the whole dispute, and consider how much closeness you would trade for a point.",
      "After a bitter quarrel, remorse or a fragile truce appears, though resentment may still linger. Someone may also decide to walk away for good, and that choice deserves respect. If you want to repair things, apologize for your specific part and avoid reopening the argument. If you do not, leave cleanly and without further blame, and give the other person the same dignity you would want yourself.",
    ],
    career: [
      "Rivalry or a win-at-all-costs tactic is shaping your workplace, and the victory may be hollow. Gains won by pressure or by undercutting colleagues tend to erode trust and your standing. Pick your battles with care, and ask which ones actually serve your goals. Sometimes it is wiser to let someone else have the credit and keep the relationship, and remember that your reputation will outlast any single win.",
      "You regret a past conflict at work, or you are considering leaving a contest that is not worth the effort. Reconciliation is possible if you approach it with a specific, honest acknowledgement. If the culture itself is toxic, stepping away may be the strongest option. Either way, stop replaying the fight and decide what you want your next move to be.",
    ],
    health: [
      "Conflict is draining your reserves. Tension from an argument or a rivalry can sit in the body long after the words have stopped, leaving you wired and short on patience. Where you can, choose peace over being right. Take a walk after a heated exchange, and give yourself time to cool down before you reply, and notice how your body softens once the contest is off your mind.",
      "The aftermath of a fight weighs on you, and your mind keeps returning to what was said. Regret or lingering resentment can disturb your rest. Either make amends or walk away, and then deliberately release the matter. A short written note you never send, or a conversation with a neutral friend, can help the tension leave, so that your mind can finally stop replaying the exchange.",
    ],
  },
  "swords-6": {
    general: [
      "You are moving away from rough waters toward something calmer. The journey is gradual, and some baggage travels with you, but the direction is right. Let the transition take the time it takes, and avoid dragging every old grievance onto the new shore. Decide what is worth carrying and put the rest down along the way, and trust that calmer water is already within reach.",
      "You want to leave, but something keeps you in place. Old baggage, unfinished business or fear of what is on the other side is holding the boat close to the shore. Moving on rarely feels ready. Identify the one thing keeping you tied here, deal with it directly, and then take a small, definite step toward the change you know is needed.",
    ],
    love: [
      "You are leaving turbulence behind, and gentler days are ahead. This may mean moving on from a hard relationship, easing out of a family conflict or simply settling into a calmer rhythm with people you love. Some emotional baggage is coming along, so be honest with yourself and with any new person about what you carry. Healing is under way.",
      "Old baggage keeps you tied to a painful pattern, and moving on stalls because the transition feels daunting. You may stay in contact with someone who hurts you, or compare every new connection to a past one. Look at which feelings are yours to resolve and which belong to the past. Resolve them gradually, and allow a calmer chapter to begin.",
    ],
    career: [
      "A move toward a better job, project or financial footing is under way. It may take time and not every detail is settled, but you can feel the pressure easing. Plan the transition carefully, tie off loose ends, and keep your professional relationships in good order. Take your skills and your lessons with you, and leave the old office politics behind.",
      "A needed career change is delayed, either by fear or by unresolved problems from the past. You remain in rough water because the new shore looks unfamiliar. Name what is holding you, whether it is money, confidence or a sense of loyalty. Then take one concrete step, such as updating your skills, a conversation with a mentor or a savings goal.",
    ],
    health: [
      "You are moving away from a stressful stretch, and your system is beginning to settle. Expect the recovery to be gradual, with calm days alternating with leftover tension. Give yourself generous time to transition. Choose quieter surroundings, steady routines and gentle company, and let yourself feel the relief rather than rushing to the next demand, and let the calm settle in before you decide what comes next.",
      "Stress from an earlier situation is following you into calmer circumstances. You may feel tense even though nothing is currently wrong, because the habits of vigilance have stayed on. Practice putting the old burden down on purpose. Slow breathing, time outdoors and talking through what happened will help your body accept that the rough water is behind you, and remind yourself regularly that you are in a different place now.",
    ],
  },
  "swords-7": {
    general: [
      "Someone is acting by stealth, or you are tempted to. It might be a half truth, an omission, a shortcut that avoids accountability, or a plan you are keeping quiet. Strategy has its place but secrecy has a cost, so ask what you are avoiding and who it affects. If you notice a pattern of evasion around you, quietly verify what you are told.",
      "A secret comes out, or your conscience will not let it rest. Being caught or choosing to confess forces you to face consequences you had hoped to dodge. Beware also of self-deception, where the story you tell yourself is the one that needs correcting. Decide what honesty would look like here, and take the first step before someone else does it for you.",
    ],
    love: [
      "Someone is being evasive, keeping secrets or telling you only part of the story. It might be a partner, a relative or a friend, or it might be you holding something back. Trust what you observe more than what you are told. Ask direct, calm questions and let the answers, or the lack of them, tell you what you need to know.",
      "A hidden matter is coming out, or your conscience is pushing you to be honest. Confessing can be frightening, yet it ends the strain of keeping it up. Take care that the version you share is the whole truth, not a softened one that protects you. If someone else is confessing to you, listen first, and decide your response afterward.",
    ],
    career: [
      "Watch for office politics, a convenient shortcut or someone taking credit for work that is not theirs. Strategy is more useful than confrontation just now. Keep records, put important agreements in writing and be careful about what you share. If you are the one tempted to cut corners, consider whether the gain is worth the risk to your reputation, and keep your own conduct something you would be comfortable explaining.",
      "A scheme is exposed, or you decide to come clean about a mistake or an omission. The consequences may be uncomfortable, yet they are usually smaller than the cost of continuing to hide it. Prepare what you will say, take responsibility without excuses, and offer a plan to fix it. If the exposure involves someone else, handle it through proper channels.",
    ],
    health: [
      "Avoidance is costing you energy. A symptom of stress you keep ignoring, a habit you are not owning up to, or a story you tell yourself about being fine can all wear on you. Face what you are hiding from, gently, and tell yourself the truth about what you need. Honesty with yourself is the first piece of rest, and notice how much lighter you feel once you stop explaining it away.",
      "A thing you have been evading is coming into view, and facing it brings some relief even when it is uncomfortable. Self-deception may still color how you describe your own state. Check the story against how you really sleep, eat and feel. Tell one trusted person the honest version, and let the effort of concealment drop away, so that your energy can go toward living instead of guarding a story.",
    ],
  },
  "swords-8": {
    general: [
      "You feel bound and unable to see a way out, yet the restraints are looser than they appear. Much of what holds you is a belief about what is possible, formed from fear or past experience. Test that belief with one small action. A phone call, a question or a single step in a new direction can show you how much room you actually have.",
      "The blindfold is coming off, and your options are coming into view. Freedom does not arrive all at once, so move carefully and keep your steps practical. You may feel exposed as the old limits fall away. Take back your agency in stages, and notice which limits were real and which were habits you can now set aside, and let each small success make the next one easier.",
    ],
    love: [
      "You feel trapped in a relationship or a pattern and powerless to change it. Look closely at which constraints are truly imposed and which come from fear of conflict, loneliness or disapproval. Talk to someone outside the situation for perspective. Then state one clear need to the person involved, because speaking up is often the first loosening of the ropes.",
      "You are slipping free of a limiting dynamic and taking back your agency, one careful step at a time. It may feel strange to make choices without anyone granting permission. Go at a steady pace and lean on people who support your growth. Honor the instinct that told you the bindings were never as tight as they felt, and notice how much steadier you feel making your own decisions.",
    ],
    career: [
      "You feel boxed in at work or by money worries, and most of the walls are mental. Fear of the unknown, a belief that you have no leverage or an old story about what you can do keeps you where you are. List the real constraints and the imagined ones separately. Then pick one imagined limit and test it with a small, low-risk action.",
      "A sense of options is coming back, and the restriction that seemed solid begins to give. You may see a way to change roles, renegotiate terms or manage a debt more calmly. Change your perspective first, and then your plan. Take one step this week that proves to you that you are not stuck, and build on it, and let that evidence steadily replace the old belief.",
    ],
    health: [
      "You may feel hemmed in by your own thoughts, with a loop that says nothing will change and you cannot cope. This is a mental pattern and not a fact. Challenge the story gently by asking what small thing is possible today. A short walk, a call to a friend or a change of scenery can show you that the bind is looser than it feels.",
      "The mental cage is loosening, and your breathing and posture may open with it. Notice the first signs of ease, and reinforce them with one small action that proves you are not powerless. Choose something simple and repeatable, such as a morning stretch or a regular outdoor walk. Let your confidence rebuild in small, steady steps, and let each small success make the next effort feel lighter.",
    ],
  },
  "swords-9": {
    general: [
      "Worry has taken over the small hours, and the dread feels larger than the facts behind it. Guilt, what-ifs and imagined disasters circle until rest becomes difficult. The fear is real as an experience, even when the danger is mostly in your head. Write the worries down, separate what you can act on from what you cannot, and tell someone you trust.",
      "Hope is returning as you reach for support, or the anxiety is deepening because you keep it to yourself. The difference often comes down to whether you share what you are carrying. Choose one person to tell, and be specific about what is troubling you. Small, regular supports such as routine, company and daylight can slowly loosen the grip of night thoughts.",
    ],
    love: [
      "Dread and guilt about a relationship fill your nights. You may rehearse arguments, imagine rejection or blame yourself for things beyond your control. Most of these fears are born in your own mind rather than in what is happening. Say your worry aloud to the person involved, or to a trusted friend, and see how it looks in daylight, and notice how much of the fear shrinks once someone else hears it.",
      "You are beginning to reach out, and speaking your fears to someone who cares is bringing hope back. Alternatively, you may be hiding the worry and letting it grow in the dark. Choose honesty over silence. Ask for reassurance in plain words, and let the other person respond to what you really feel instead of to the version you present.",
    ],
    career: [
      "Anxiety about money, deadlines or performance keeps you awake, and the worry has grown bigger than the actual problem. Write down exactly what you are afraid will happen and what you could do about each item. Often the list is shorter and more manageable than the night makes it seem. Share the burden with a colleague, a mentor or a financial adviser.",
      "You finally ask for help with work stress, and the load starts to lighten. If you stay silent instead, unspoken worry can spiral into exhaustion and a gloomy view of every task. Tell your manager or a trusted peer what is happening, and ask for one concrete adjustment. Small changes to workload or timing can break the cycle early, since early support is easier to ask for than late rescue.",
    ],
    health: [
      "Worry is keeping you awake, and the dread feels heavier at night than it will in the morning. Tell someone how you are feeling, and ground yourself in the present with slow breathing, a warm drink or a short written list of what is actually true right now. Keep the evening quiet and give your mind a task that is gentle and finite.",
      "The worst of the anxious stretch is passing, and you are finding supports that help you feel safe. Keep using them even when things improve, since steady habits protect your calm. A regular bedtime, daytime movement and honest talk with a friend all matter. If the worry deepens instead, do not carry it alone, and reach out to someone you trust.",
    ],
  },
  "swords-10": {
    general: [
      "Something has reached a painful and final end. The collapse may feel total, yet the worst has already happened, and the horizon holds the first light of a new day. Stop fighting what is finished. Give yourself time to grieve, accept help, and let the old structure fall away so there is room for something simpler to be built, and trust that the next chapter does not need to be rushed.",
      "You are recovering from a low point, or you are resisting an ending that has already taken place. Clinging prolongs the pain and delays the rebuilding. If you are recovering, go gently and avoid rushing back into old patterns. If you are resisting, name what is over, thank it for what it gave, and turn your attention to what remains.",
    ],
    love: [
      "A relationship, a friendship or a family bond has come to a painful end, perhaps with betrayal. It hurts, and it is allowed to hurt. The dawn behind the pain suggests the worst is over, even if you cannot feel it yet. Lean on the people who stay, avoid contacting the one who left in moments of weakness, and take the recovery one day at a time.",
      "You are surviving and beginning to rebuild, or you are refusing to let a finished relationship go. Reviving something that has ended usually extends the pain without changing the outcome. Ask yourself what you are hoping a final conversation would give you. If you are recovering, be patient, and let trust grow back at its own pace, since your steadiness now matters more than any final word.",
    ],
    career: [
      "A job, venture or financial plan has collapsed, and you may be starting over from a hard floor. It feels brutal, but it also clears the ground. Take stock calmly, ask for support from your network, and handle the immediate practical needs first. The only direction from here is upward, and you can begin with one small, concrete action today.",
      "The worst of the career upheaval is passing, and you are slowly rebuilding. Holding on to a lost position, a title or a version of your plan only drags the process out. Let go of what is gone and reconsider what you actually want to build next. Rebuild with realistic goals, and give yourself time before taking on large commitments.",
    ],
    health: [
      "You are at the end of your reserves, and the mind and body ask you to stop fighting. Mental exhaustion after a long strain is a signal to rest and not to push harder. Let the cycle close. Reduce demands, sleep when you can, accept help with daily tasks, and remember that the lowest point is also where recovery can begin.",
      "Recovery is starting after a low period. Rise slowly, and do not rush to prove you are back to full strength. Tiredness may come in waves, so keep your routines gentle and your expectations modest. If you are clinging to a pattern that has already ended, give yourself permission to release it, and let healing proceed at its own speed.",
    ],
  },
  "swords-page": {
    general: [
      "A curious, watchful mind is awake in you or in someone near you. New ideas, sharp questions and a thirst for information are all on offer. Use that energy to learn before you judge by asking the question you would normally hold back, reading widely and staying open to being corrected. The result is a clearer picture and fewer assumptions.",
      "Talk is running ahead of thought. Gossip, hasty replies, scattered attention and a habit of speaking before listening create more noise than understanding. You may find yourself repeating things you have not verified, so slow down, check your sources and hold your tongue when you are unsure. Choose one topic to follow properly rather than skimming many, and let curiosity replace the urge to react.",
    ],
    love: [
      "Mental chemistry is the draw here. Someone curious and talkative asks real questions, and conversation becomes the way you grow closer. This can describe a new romantic interest, a lively friendship or a young person in your family who wants honest answers. Be open about what you think, ask what they think in return, and keep the tone playful and the questions sincere.",
      "Careless words and idle talk are eroding trust. There may be gossip, sharp teasing or someone who speaks often of love and rarely commits to it. Check whether your jokes are landing as jabs, and before you pass something on or react to a rumor, ask the person directly. Honest, kind speech repairs most of what clever speech has damaged.",
    ],
    career: [
      "You are in a stage of rapid learning, and curiosity is your best asset. New ideas, sharp questions and fresh information can open a useful opportunity. Stay alert in meetings, take notes and follow up with people who know more than you. Share your findings clearly and keep your claims modest until you have verified them, and treat every answer as a stepping stone toward real expertise.",
      "Scattered thinking, hasty emails and workplace gossip are wasting energy. Plans remain all talk, with little follow-through, and your credibility can suffer as a result. Pause before sending anything important, and keep sensitive information to yourself. Pick one project, set a small deliverable and finish it before turning to the next interesting thing, so that people remember your follow-through rather than your chatter.",
    ],
    health: [
      "A lively mind is a gift, and it benefits from direction. Curiosity can lead you toward new habits, useful information and better understanding of what your body needs. Learn gently, and avoid searching for every possible worry at midnight. Pair mental activity with movement and fresh air, so that your thoughts have somewhere healthy to go, and notice which sources leave you calmer and which leave you more anxious.",
      "Your thoughts are racing and scattered, and harsh words, whether from others or from within, create stress. Reading rumors or comparing yourself to others online can add to the strain. Pause before you speak or believe something that upsets you. Give your attention one task at a time, and allow quiet time between conversations, so that your thoughts have room to settle before the day ends.",
    ],
  },
  "swords-knight": {
    general: [
      "You are charging ahead with conviction, and the speed carries real results. Ideas come fast, your arguments are clear, and obstacles seem to move aside. The risk is bluntness and tunnel vision, so keep your pace but check your direction at regular intervals and listen to what others tell you as you pass. Speed works best when it points at the right target.",
      "Haste is running ahead of judgment. You may be acting before the facts are in, speaking sharply, or spreading your effort across too many fights. Others may feel steamrolled, and you may feel the strain without knowing why. Slow down for a day, list what truly matters, pick one aim, and apply your force there while the rest waits, which usually gets more done than fighting everywhere.",
    ],
    love: [
      "A direct, intense energy enters your connections. This could be a suitor who moves quickly and speaks bluntly, or your own urge to say exactly what you think. The excitement is real, though tact may be in short supply, so keep the honesty and add warmth. Pause long enough to hear the other person finish, and let your decisiveness serve the relationship rather than win it.",
      "Impatience or a cutting temper is wrecking the moment. Someone speeds ahead without listening, and the other person feels run over. If this is you, breathe before you reply, and ask a question before you offer a verdict. If it is someone else, name the effect of their pace calmly and ask them to slow down, and give the relationship a moment to catch up with your pace.",
    ],
    career: [
      "You are pushing forward with fast, focused ambition and a clear argument. Results arrive quickly when you stay on course, and your confidence can win support. Manage your bluntness, since people may remember how you made them feel. Make your case with facts, give colleagues time to respond, and keep your energy directed at the goal rather than at obstacles you create.",
      "Reckless decisions, aggressive tactics and scattered effort are leading toward conflict and fatigue. You may be moving too fast to notice the consequences. Slow down and think before you act. Review your plan for gaps, apologize where your speed has bruised a colleague, and choose a single priority to see through to the end, and confirm that the people you rely on are still with you.",
    ],
    health: [
      "Fast, decisive energy moves you forward, and your mind is sharp and eager. Use it to start something supportive, like a training plan or a structured routine. Watch for mental overdrive, where thoughts race and rest gets postponed. Build in deliberate pauses, and eat and sleep as seriously as you work, so the pace is sustainable, and let recovery time count as part of the work.",
      "Recklessness and irritability are burning you out. You may be pushing through tiredness, snapping at small things or taking on every fight. Slow down and choose your battles carefully, since gentler movement, regular meals and an earlier night will do more for your drive than another sprint. Allow your mind to idle without an urgent task, because the long run rewards steadiness over bursts of force.",
    ],
  },
  "swords-queen": {
    general: [
      "You see clearly and speak honestly, and that is a strength. This energy values truth over flattery and sets clear boundaries without apology. It may describe you or an independent person in your life who cuts through nonsense. Use it with care by saying what you mean in a way that can be heard, and let your clarity be useful instead of cutting.",
      "Coldness, sarcasm or old hurt has made you guarded. A sharp tongue keeps people at a distance, and the closeness you want stays out of reach. Criticism may flow more easily than kindness, so consider what past experience taught you to armor up. Choose one situation this week to respond with plain warmth, and see whether honesty can coexist with an open heart.",
    ],
    love: [
      "An independent, candid person values honesty above comfortable illusions. In a relationship this means clear boundaries, direct requests and little patience for games. It can be you or someone close to you. Bring your truthfulness, add enough gentleness that your words invite closeness, and tell your partner or friend what you need while asking what they need in return, so honesty becomes a gift rather than a test.",
      "Guardedness is getting in the way of connection. Sarcasm, aloofness or a long-held grievance keeps people from reaching you, and a sharp comment may feel like protection, but it also pushes away the intimacy you want. Notice when you reach for a cutting remark and try a plain statement of feeling instead. Let one person see something more vulnerable, and give them time to respond.",
    ],
    career: [
      "Clear, unbiased judgment and direct communication make you a trusted voice at work. You can see through noise, spot the weak point in an argument and decide fairly. Put these strengths to use in evaluations, negotiations and difficult conversations. State your reasoning plainly, keep your tone professional, and remain open to information that changes your view, and let your calm precision settle disputes before they harden.",
      "Harsh criticism, aloofness or a cynical stance is alienating colleagues. Your precision is valuable, but it lands badly when delivered without any warmth. Before giving feedback, name what is working, and ask more questions while making fewer pronouncements. Colleagues will take your insight more seriously when they feel respected by the person offering it, and clarity works best when others can approach you.",
    ],
    health: [
      "Honest boundaries protect your energy. You know where your limits lie, and you can say so without apology. Speak with compassion, including to yourself, and keep your schedule from filling with obligations you resent. Quiet time alone, clear routines and plain talk about what you need will keep your mind sharp and your reserves steady, and remember that clear limits are a form of self-respect.",
      "Coldness toward yourself or others is straining you. The inner critic may be sharp, and you may be shutting out comfort when you most need it. Soften your inner voice, and notice how you speak to yourself when you are tired. Allow warmth back in through a kind conversation, a hot meal or time with someone who asks nothing of you.",
    ],
  },
  "swords-king": {
    general: [
      "Fair judgment, clear thinking and principle are your best tools now. This energy leads through reason, weighs evidence before acting and holds itself to high ethical standards. It may describe you or someone with authority in your life. Make decisions that you could explain openly, put your reasoning in order, and use your influence to protect fairness, and let that standard guide the choices that others cannot see.",
      "Authority is being used coldly or unfairly. Logic becomes a weapon, rules harden into rigidity, and feelings are dismissed as irrelevant. This may describe a person in power or your own inner critic. Ask whether the rule still serves its purpose and who is being hurt by it, then bring flexibility and human consideration back into the decision so that trust can recover.",
    ],
    love: [
      "A fair, articulate and steady presence offers reliable communication and a well-considered commitment. This can be a partner, a parent or a mentor-like friend who leads with integrity. Let reason and honesty shape the bond, and add tenderness so that logic is not mistaken for distance. Speak clearly about what you want, and keep your promises, and let your steadiness give the other person room to be heard.",
      "Reason is being used to dominate. A controlling or emotionally cold person may dismiss feelings, win every debate and leave little room for the other voice. If this describes you, notice when you are choosing to be right over being close. If it describes someone else, hold your ground calmly, state your needs in simple terms and watch how they respond.",
    ],
    career: [
      "Authority, strategic thinking and ethical judgment help you lead. You can analyze contracts, read the fine print, set clear policy and make decisions that others see as sound. Take responsibility for the outcome and explain your reasoning to those affected. Use your position to build structures that are fair, and be willing to hear a well-argued objection, and let your reputation rest on consistency over cleverness.",
      "Misused authority, manipulation or cold, rigid rules are damaging morale. A manager may exercise control without listening, or you may be tempted to rely on position instead of persuasion. Question whether your authority serves fairness or only your own convenience. Invite honest feedback, review the rules that are causing harm, and be ready to change them, and remember that lasting authority is built on trust more than on rules.",
    ],
    health: [
      "Mental discipline and fair judgment support you. Make choices about sleep, food and activity from principle rather than from fear or impulse. A clear, steady routine lowers tension, and plain reasoning helps you avoid spiraling. Treat yourself the way a good leader treats those in their care, with firm structure and real consideration, and let your routines be firm enough to hold you but never harsh.",
      "Rigid thinking or a harsh inner authority is creating tension. You may be holding yourself to strict rules, dismissing what you feel, or pushing through for the sake of discipline. Question the rule and make room for nuance. A flexible plan that includes rest and some kindness will serve your wellbeing better than a perfect schedule you resent, and remember that discipline works best when it includes mercy.",
    ],
  },
};

Object.assign(DEEP_READINGS, DEEP_SWORDS);
Object.entries(DEEP_SWORDS).forEach(([id, deep]) => {
  if (EXTRA[id]) EXTRA[id].deep = deep;
});
