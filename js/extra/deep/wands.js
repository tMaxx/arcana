"use strict";

/* ------------------------------------------------------------------ *
 * Deep-dive readings: Wands.
 * Long-form interpretations for readers who want more than the short
 * meaning. One pair per reading context; [upright, reversed].
 * ------------------------------------------------------------------ */

const DEEP_WANDS = {
  "wands-ace": {
    general: [
      "A fresh surge of desire and possibility is available, and it arrives without a guarantee attached. It shows up as an idea you cannot stop turning over, a sudden appetite for something new, or a restlessness with how things have been. Act on it while it is warm, even in a small way. Ask what you would start this week if you trusted the feeling instead of waiting for proof.",
      "The spark is present but something keeps it from catching. You may start many things and finish none, wait for a perfect moment that never comes, or feel flat about a path you used to love. The cause is often timing, fatigue or fear of committing to one direction. Name what is smothering the flame, then give it one concrete, modest task to burn through.",
    ],
    love: [
      "Attraction, affection or playfulness is stirring, and it wants a response rather than analysis. This might be a new person who lights you up, a partner you suddenly see freshly, or a friendship that turns warmer and more daring. Show interest plainly and move first if you are the one hesitating. Let the energy lead for now, and save the long conversation about where it goes for later.",
      "Interest flickers but does not take hold; someone may say they are keen and then go quiet, or you pull back the moment feelings grow real. Old disappointments can make you dampen your own warmth before it has a chance. Ask yourself whether the spark is genuinely absent or simply untended. If it is untended, a direct invitation or an honest message may be all it needs.",
    ],
    career: [
      "An opening for original, energetic work is here: a new role, a project you can shape, a venture, or a pitch that you could be the first to make. Move on it quickly, because enthusiasm is worth most at the start. Build a rough version before you perfect anything. Notice which task you would do unpaid and weigh how to place more of your time there.",
      "A promising idea or opportunity stalls before it has any momentum. Funding falls through, interest cools, or you talk yourself out of starting because the first step feels too exposed. Avoid launching in a rush to prove something, and avoid shelving the idea for good. Revisit the plan, shrink it to a version you can begin cheaply, and set a date for the first action.",
    ],
    health: [
      "A new supply of energy is arriving, and it works best when you give it a direction. You may feel pulled toward movement, a creative practice, or a change in routine that suddenly seems doable. Follow that pull while it lasts and let it build habits gradually. Remember that a first burst is fuel for starting, not a reserve to spend all at once.",
      "Your drive feels low, uneven or hard to ignite, and forcing it tends to backfire. A long stretch of effort may have left you without a spare gallon in the tank, so even simple plans feel heavy. Rather than demand enthusiasm, restore the basics: sleep, regular meals, daylight and one small activity you enjoy. Motivation tends to return once the ground underneath it is rested.",
    ],
  },
  "wands-2": {
    general: [
      "You are standing at a pivot with the early work done and a larger choice ahead. Things are reasonably comfortable, which is exactly why the next move takes deliberate thought. It looks like weighing a bigger commitment, an unfamiliar place, or a wider ambition against what you already hold. Write out where you want to be in three years, then choose the option that moves you toward it, even if it costs some ease.",
      "Possibility is clear but you keep it at a distance. You may over-plan, collect opinions without deciding, or tell yourself the timing is wrong each time the question returns. Comfort and fear are doing the steering. Ask what you would choose if failing were survivable, then take one visible step in that direction, such as a deposit, an application or a call that makes the decision real.",
    ],
    love: [
      "You are deciding how far to widen your emotional world. A relationship may be ready for a bigger step such as moving, merging plans or committing, or you may be choosing between the familiar and a bolder kind of connection. Tell the people involved what you actually want rather than letting them guess. Favor honesty about direction over hoping things will drift your way.",
      "Hesitation is keeping love smaller than it could be. You may keep one foot out of a relationship, delay the conversation about the future, or hold back from someone who asks more of you than you are used to. The fear is usually about losing independence or being disappointed. Decide what you want to protect, then say it aloud so the other person can respond to something real.",
    ],
    career: [
      "You have gained a foothold and are now surveying where to take it. Options may include a promotion path, a new market, a move to another city, or starting something of your own. Gather concrete numbers and timelines rather than relying on a feeling; then commit to a direction and set a review date. The strongest position now comes from choosing, not from keeping every door equally open.",
      "Ambition is present but planning is thin, or a safe job is holding you back from a larger one. You may be delaying a decision, undervaluing what you have built, or pursuing an exciting idea without a realistic budget. Either extreme costs you. Make a short list of what you need to know, find out within a set number of weeks, and act on the answer.",
    ],
    health: [
      "You are choosing a longer-term way of looking after yourself, and the planning stage matters. This might mean settling on a sustainable routine, deciding to change a draining habit, or mapping out how to protect your energy in a busy season. Choose something specific and realistic rather than ambitious in theory. Write down what your best week would look like and begin with the easiest part of it.",
      "Uncertainty about what to change is wearing on you more than the change itself would. You may keep postponing a decision about rest, workload or a habit, and the delay quietly drains your reserves. Perfect planning is not required; pick one small experiment for two weeks, pay attention to how you feel, and adjust. Action usually settles the worry that thinking has only fed.",
    ],
  },
  "wands-3": {
    general: [
      "Something you set in motion is now underway, and your task is to watch it and widen your view. Early effort is beginning to travel beyond your direct control, through other people, other places or longer timelines. This appears as first replies, early results or a sense that the plan is finally real. Stay engaged, keep your expectations measured, and think about the next stage while this one develops.",
      "Progress is slower or less visible than you expected, and waiting feels like standing on a shore with nothing on the water. A delay, a misjudged detail or a lack of foresight may be to blame, or the schedule was simply too hopeful. Check what is within your control and adjust that. Resist the urge to abandon the plan, since a change of route is often enough.",
    ],
    love: [
      "A connection is stretching toward a wider horizon. It may be someone who lives at a distance, a relationship moving into shared plans, or a long wait for a person or reconciliation that is now taking shape. Keep communication steady and generous in the meantime; share what you hope for rather than assuming it is understood. Patience is easier when both of you can see where the road is heading.",
      "Distance, timing or unmet expectations leave love feeling suspended. A partner may be far away in practice or in attention, plans may keep slipping, or you may be waiting for a gesture that was never promised. Ask directly what the other person intends and when. Then decide how long you are willing to wait on that answer, and arrange your own life so that it does not stand still.",
    ],
    career: [
      "Earlier groundwork is now paying off, and opportunities are extending outward. This might mean new clients, remote collaborators, wider markets, or a role that carries you beyond your usual territory. Keep your systems tidy so growth does not outpace you; build relationships along the way, because they will carry this venture further than any single deal. Plan the next phase while the current one is still arriving.",
      "Deliveries, approvals or income are slow to land, and the gap between plan and result is testing your nerve. You may have overlooked a dependency, trusted a vague promise, or expanded before the foundation was ready. Follow up in writing, shorten what can be shortened, and build a buffer for the next stretch. Frustration is useful if it prompts better planning, but it cannot speed up what other people control.",
    ],
    health: [
      "The effort you put into your routines is beginning to show, and a longer view helps you keep going. Whether it is steadier energy, better habits or a calmer mood, small gains are accumulating. Keep doing the unexciting parts, such as regular sleep and consistent movement. Look ahead and consider what a sustainable version of this pace looks like, so that early progress turns into a lasting way of living.",
      "Results feel slow, and impatience tempts you to quit or to overdo it. Progress may have stalled because the plan was too ambitious, too vague or too dependent on circumstances you do not control. Treat this as information rather than failure; adjust one variable, such as timing, intensity or support, and give it a fair stretch. Frustration drains energy that recovery needs, so be gentle with your own timetable.",
    ],
  },
  "wands-4": {
    general: [
      "A stretch of effort has reached solid ground, and the right response is to mark it. This appears as a milestone, a settled home life, a gathering that feels easy, or simply a sense that the foundations are in place. Take time to enjoy it with the people who helped; celebrating is not wasted time. It reinforces what is working and gives you the stability from which the next push can begin.",
      "The sense of a secure base is shaky or delayed. A celebration may be postponed, a home or group may feel tense, or a milestone arrives without anyone around to share it. Instability often comes from unspoken disagreements or from rushing past an achievement before it settled. Look at what would make your base feel dependable, whether that is a conversation, a routine or a gathering, and put it in motion.",
    ],
    love: [
      "Warmth and belonging come easily now. This may be a commitment taking public shape, a home that feels shared, a reunion with family, or friendships that feel steady and generous. Say yes to invitations and host something yourself if you can; let the people you love see how much they matter. A good moment is worth enjoying fully before you start planning what comes next.",
      "Home or the circle around you feels strained, and it is hard to relax inside it. A family gathering may be tense, a commitment may be postponed, or a partner may be present without really being supported. Resist forcing cheer. Name the friction gently and decide what would make the place feel safe again, whether that is clearer roles, kinder routines or honest time alone together.",
    ],
    career: [
      "A project, probation or long stretch of effort has landed well, and the group around you feels like a team. This is a good time to acknowledge shared work, celebrate a launch or settle into a role that fits. Recognize contributors by name. A workplace where people feel secure tends to produce better results, so use this stability to formalize what works and to plan your next goal with others in mind.",
      "The team or workplace lacks the cohesion to hold what it has built. A launch may be delayed, praise may be absent, or tension may make a good result feel hollow. Restructuring, unclear roles or a manager who skips acknowledgment are common causes. Raise the issue plainly, ask for what the group needs, and secure at least one small ritual of recognition so that progress does not pass unnoticed.",
    ],
    health: [
      "Feeling settled is itself restorative, and you can lean on it. A safe home, familiar people and an easier pace are doing quiet work on your body and mood. Protect the routines that support this, such as shared meals, regular rest and time outdoors with others. Enjoy being steady, and resist the urge to fill every gap with new goals just because the load has lightened.",
      "A restless home life or disrupted routine is leaving you unsettled in your body. Noise, tension, a move or postponed plans may be keeping you from truly resting. You may feel on edge even when nothing is demanding action. Rebuild safety in small, physical ways, such as a tidy sleeping space, a regular meal time and one reliable person to talk to, until the environment can carry you again.",
    ],
  },
  "wands-5": {
    general: [
      "Competing wills and scattered effort fill the scene, and nobody is quite in charge. This looks like many opinions in one room, a crowded field, or a general sense of friction with no clear villain. It is more noisy than dangerous; use it to test your ideas and sharpen your skills, and decide which contests are actually worth entering. Staying good-humored will help you far more than winning every point.",
      "Conflict is either being avoided or has settled into something more private and corrosive. You may swallow irritation to keep the peace, only to feel it leak out sideways, or a disagreement may finally be easing into compromise. Watch for the point at which healthy competition turns personal. Say the real issue out loud, in a calm tone, and ask what resolution would look like for everyone.",
    ],
    love: [
      "Disagreements are frequent, loud or petty, and each person wants to be proven right. It may be bickering with a partner, sibling rivalry, or friends who compete without admitting it. Not every clash means the bond is failing, since some friction is how closeness gets sorted out. Listen for the need beneath the complaint, take turns to speak, and ask whether the topic matters or whether the tension is about something else.",
      "Resentment is being stored rather than spoken, or an argument has become sour and indirect. You may avoid a tense conversation until small irritations pile up, or sarcasm and silence may have replaced honest discussion. Alternatively, a long quarrel may finally be winding down. Choose a calm moment, name one specific concern without blame, and be ready to hear theirs; repair begins when both sides stop keeping score.",
    ],
    career: [
      "Competing agendas, overlapping roles and strong personalities make the workplace noisy. Ideas collide, deadlines are contested, and everyone seems to be pushing their own version of the plan. This friction can produce good work if it is channeled with clear goals and mutual respect. Define who decides what, keep discussions on the problem and off the person, and treat rivals as a standard to meet, not an enemy to defeat.",
      "Office politics run underground, or you are dodging a confrontation that needs to happen. Credit games, passive aggression and quiet sabotage are possible, as is a dispute that has finally cooled into a workable arrangement. Document agreements and avoid gossip; address the real conflict directly with the person involved, preferably with a facilitator if tempers are high. Protect your reputation by acting with fairness whatever others do.",
    ],
    health: [
      "Constant friction is keeping your system keyed up. Arguments, crowded schedules or competitive pressure may leave you tense, irritable and slow to wind down. Give that restless energy a physical outlet, such as a brisk walk, a workout or any activity that lets you burn off tension safely. Then build in quiet time away from the noise, so that stress has somewhere to go besides your shoulders and sleep.",
      "Unspoken tension is quietly draining you. You may be holding back anger, replaying old disputes at night, or feeling worn down by a conflict you keep refusing to face. Unaddressed stress tends to settle in tired muscles and a short temper. Find a safe outlet, whether talking it through, writing it out or moving your body, and consider resolving the dispute itself so your energy can return to you.",
    ],
  },
  "wands-6": {
    general: [
      "Effort is being noticed, and you have earned some visible credit. This shows up as praise, a result that others can see, or a growing sense that you are on the right track. Accept the recognition without deflecting it and thank those who helped. Let this confidence carry you into the next challenge, while remembering that standing in the light is a stage, not a permanent address.",
      "Success is either missing its audience or leaving you strangely empty. Credit may be taken by others, praise may feel shallow, or you may be so attached to approval that a quiet period feels like failure. Pride can also harden into ego; ask what you were really working toward and whether the applause matters. Build on your own measure of a job well done rather than borrowed opinions.",
    ],
    love: [
      "You feel seen, appreciated and proud of the connections you have made. A relationship may earn public approval, a partner may celebrate your achievements, or you may feel confident enough to be openly affectionate. Return the favor by praising the people close to you specifically and sincerely. Confidence is attractive, but warmth makes it last, so share the spotlight and let others enjoy their own wins beside you.",
      "A need for admiration is straining closeness, or you feel overlooked by someone who should be proud of you. You might compare your relationship to others, perform happiness for an audience, or sulk when a partner forgets to notice your effort. Ask for acknowledgment directly and give it freely in return. Intimacy deepens when you value being known more than being applauded, and when a partner sees you without an audience.",
    ],
    career: [
      "Results are visible and your reputation is rising. A promotion, award, strong review or successful launch may be at hand, and others are ready to follow your lead. Document your wins and share credit with the team, since generosity strengthens your standing. Use the goodwill to ask for something concrete, such as a raise, a bigger scope or a mentorship, while your record is fresh in the minds of everyone.",
      "Credit is slipping away, a victory feels hollow, or a fall in status is stinging. Someone may have taken the praise, a promotion may have come with little real authority, or your own pride has led you to overreach. Keep a clear record of your contributions and speak up about them without bluster. Then ask whether the title you chase serves the work you actually want to do.",
    ],
    health: [
      "A sense of accomplishment is feeding your energy, and it is worth using wisely. Confidence after a win can lift mood and help you commit to healthy habits. Celebrate in ways that restore you instead of ways that drain you, such as a good meal with friends rather than a night of overextension. Let pride in progress motivate you, then give your body rest to consolidate the gain.",
      "Your wellbeing depends too heavily on outside approval, and the lows are steep. When praise is missing, mood drops, and when it arrives you push harder to keep it coming; that cycle is tiring. Practice noticing what makes you feel well on an ordinary day without an audience, such as a quiet walk or a finished chore. Steady self-regard burns far more cleanly than applause.",
    ],
  },
  "wands-7": {
    general: [
      "You hold a position worth keeping, and others are pressing against it. This might be criticism, competition, or pressure to abandon something you believe in; you have the advantage of knowing your ground, so use it. Decide clearly what is non-negotiable and what can be shared, then stand firm on the first and relax on the second. Staying steady is easier when you stop treating every challenge as an attack.",
      "Defending yourself has become a way of life, and it is wearing thin. You may give in too quickly to avoid a fight, or you may see enemies where there are only differing views. Either way, your energy is leaking into reaction; choose the two or three things worth protecting and let the rest go. Ask whether any criticism contains a useful point before dismissing it as hostility.",
    ],
    love: [
      "You are defending a relationship, a boundary or your own choices against outside opinion. Family may disapprove, a rival may press in, or you may simply need to say no to something that does not fit. Speak calmly and consistently, and let your partner know you are on the same side. Boundaries guard a bond best when they are explained rather than hurled at someone.",
      "Defensiveness is crowding out intimacy. You may bristle at gentle feedback, treat a partner as an opponent, or fold under pressure from others and lose your own voice. Notice when you are bracing for a fight that is not coming. Try answering with curiosity instead of a wall, and be clear about the one or two boundaries that truly matter; being soft does not mean you have yielded.",
    ],
    career: [
      "You hold a position that others want, and competition or criticism is testing it. Your experience gives you the high ground, provided you keep it by being prepared and consistent. Know your numbers, document your decisions, and respond to challenges with facts instead of heat. Select your battles carefully, and do not pretend that holding the line means ignoring every colleague who offers a better idea.",
      "The pressure to defend your role is exhausting, and your response may be hurting you. You might concede territory you should keep, cling to a stance out of pride, or read useful feedback as an insult. Take a step back and decide what you are really protecting, whether it is income, reputation or an idea. Then respond to that, and let go of arguments that do not serve it.",
    ],
    health: [
      "You are using a lot of energy to stay on guard, and it shows in your body. Clenched jaws, a tight chest or poor sleep can be signs that you are always braced. Stand your ground in your daily life, then deliberately stand down in the evenings. Stretch, breathe slowly and spend time somewhere no one is asking you to justify yourself; recovery between challenges is part of the defense.",
      "Constant vigilance is draining reserves faster than rest can refill them. You may be giving up on self-care because every day feels like another contest, or bracing so hard that you never truly relax. Pick the pressures that can wait and release them on purpose. Protect a few small, undefended pockets in your week for rest, gentle company and quiet, so your guard can lower safely.",
    ],
  },
  "wands-8": {
    general: [
      "Things are moving quickly, and you have the chance to ride the wave. Messages arrive, decisions come due, and events that were stuck now pick up pace. Respond promptly and clear your schedule where you can, because windows like this do not stay open. Keep a short list of priorities so speed does not turn into scatter, and check that the direction you are moving in is still the one you want.",
      "Momentum stalls or scatters, and the pace refuses to match your intentions. Messages are delayed, plans collide, or you are doing so many things that nothing gets finished; forcing speed tends to make mistakes. Take a breath, sort the tasks into what truly needs attention now and what can wait, and finish one thing before beginning another. Sometimes a forced pause is simply your schedule asking for a rethink.",
    ],
    love: [
      "Feelings and communication move fast. A message, invitation or declaration may arrive suddenly, and a slow situation may speed up or a distant connection may close the gap. Reply with warmth and keep things honest as the pace picks up; check in about expectations rather than assuming they match. Fast romance can be wonderful, and it lasts longer when both people say what they actually want.",
      "Signals cross or go missing, and it is hard to know where you stand. A message may sit unanswered, a whirlwind may cool abruptly, or plans may fall through at the last moment. Rather than chasing, state what you need clearly and give the other person room to answer. If the pace feels dizzy, slow it deliberately; real connection can survive a delay, while confusion is usually a sign to ask directly.",
    ],
    career: [
      "Work is accelerating, with offers, emails, deadlines and travel arriving in quick succession. This is an excellent time to push projects forward, close deals and make fast decisions while the opportunity is open. Prioritize ruthlessly and keep communication clear, since speed multiplies small errors. Confirm important details in writing and delegate what you can; when the rush passes, review what you set in motion so nothing is left half done.",
      "Deadlines slip, messages get lost and effort is scattered across too many fronts. A project may be stuck waiting on someone else, or you may be moving so fast that quality suffers. Use the delay to fix gaps, such as unclear instructions or missing approvals. Narrow your focus to the one or two outcomes that matter most this month, and communicate any change in timeline before others have to ask.",
    ],
    health: [
      "Your energy is high and you are moving quickly, which feels good but can mask the cost. Use this phase for something that benefits you, such as movement, travel or a project you enjoy. Still, eat regular meals, drink water and sleep at least a protected few hours each night. Speed becomes strain when you skip the small maintenance that keeps it running, so schedule recovery as firmly as you schedule tasks.",
      "A scattered pace is leaving you wired but unproductive. Racing thoughts, too many commitments and constant notifications may keep you from settling into any single rest or task. Reduce inputs for a day, switch off alerts and do things in sequence; a forced slowdown, such as an unexpected cancellation, may be doing you a favor. Let your system return to a pace at which you can feel your own tiredness.",
    ],
  },
  "wands-9": {
    general: [
      "You have been through a long stretch and are nearly at the end of it. Fatigue and caution are natural, and they are earned. This appears as a guarded stance, an expectation that the next problem is on its way, and a determination to see things through. Keep going, but do it sensibly; take stock of what you actually need to finish, and drop everything that is only weight.",
      "Weariness has tipped into suspicion or surrender. You may be expecting trouble everywhere, leaving a project just before it completes, or carrying old injuries into new situations. The risk is giving up short of the finish line, or hardening into someone who never relaxes. Rest first, then reassess what is genuinely still a threat; ask someone you trust for help, and let them carry a piece of it.",
    ],
    love: [
      "Past hurts have made you watchful, and yet you are still here, still trying. You may be cautious with new affection or holding on in a relationship that has been tested; that persistence counts for something. Share what you are guarding against so a partner can reassure you, and let down your defenses a little at a time. Trust returns in small increments rather than in one dramatic leap.",
      "Wariness has become a wall, and it may be keeping out people who mean well. You might read ordinary behavior as a threat, expect betrayal that has not occurred, or walk away just as a relationship becomes safe. Look at which fears belong to the past and which belong to the present. Consider speaking with a trusted friend about the pattern, and give someone a chance to prove reliable.",
    ],
    career: [
      "A demanding project or period is close to done, and you are depleted but still standing. Your experience has taught you where the pitfalls are, so use it by checking details and protecting what matters. Do not start anything large right now. Focus on completing the final stretch, ask for specific support, and plan some real time off at the finish, so that recovery is built into the end.",
      "Exhaustion and distrust at work are pushing you toward quitting at the worst moment. You might see every colleague as a rival, resent each new request, or consider walking away after nearly reaching a goal. Before deciding, take a few days of true rest and look again; if the job is genuinely harmful, plan an exit with care. If it is only fatigue, finish strong and then renegotiate your load.",
    ],
    health: [
      "You are running on reserves, and the end of the demanding stretch is in sight. Respect your limits by lowering commitments that are optional and protecting sleep fiercely. Small aches and irritability are signals to slow down, not to push harder. Plan your recovery in advance, with a day or a week that is truly yours, so that the finish line leads to rest and not to the next obligation.",
      "Depletion has reached the stage where it distorts your mood. Everything feels like a threat, small tasks feel enormous, and you may be tempted to drop all your healthy routines in frustration. This is exhaustion speaking, not a true measure of your capacity; ask for practical help, lower your standards for a while and rest without guilt. Cheerful resolve usually returns once your body has been allowed to recover.",
    ],
  },
  "wands-10": {
    general: [
      "You are carrying more than a single person should, and it has grown heavier gradually. Responsibilities that began as signs of success have piled up into a load that dominates your days. Look honestly at each item and ask whether it is yours, whether it is necessary, and whether anyone else could take it. You can finish the final stretch, but only if you stop adding to the pile.",
      "The load is either being put down or is about to break you. You might finally delegate, decline or walk away from something, which brings relief and a bit of grief. Or you may keep pushing until a breakdown makes the decision for you; do not wait for a crisis. Choose what to release this week, tell the people affected, and accept that some things will be done differently.",
    ],
    love: [
      "You are doing most of the emotional and practical work in your closest relationships. It may be the household, the planning, the worrying or the peacekeeping, and the imbalance is becoming visible. Say plainly what you are carrying and what help would look like. Loved ones cannot share a weight they do not know exists, and many will step up once they are asked specifically.",
      "The imbalance in who gives and who receives is coming to a head. You may finally refuse to carry a role that was never fair, or exhaustion may be pushing you into withdrawal and resentment. This can open a long overdue conversation; be specific about what you will no longer do and what you need. Offer to share the load differently, and see who is willing to meet you there.",
    ],
    career: [
      "Success has brought so many duties that the work itself is no longer enjoyable. Your reliability makes people hand you more, and you keep saying yes. Make a complete list of your commitments, rank them by impact and delegate or drop the bottom third. Have a direct conversation with your manager or team about capacity; finish what is nearly done, and refuse new tasks until the load makes sense.",
      "The workload has either been lightened or is crushing you. You may be handing off responsibilities at last, restructuring your role, or approaching a point where quality and health are both slipping. If relief is coming, use it to rebuild boundaries rather than refilling the space; if it is not, speak up now. Overwork rarely goes unnoticed forever, and an honest request is better than a silent collapse.",
    ],
    health: [
      "Your body and mind are registering the weight of too many obligations. Fatigue, tight shoulders and a short fuse can be signs that your load exceeds your capacity. The remedy is subtraction, not a better routine; remove one commitment, decline one request and give yourself one unscheduled afternoon. Rest does not have to be earned by finishing everything first, and it is the only way the rest of the list gets done.",
      "You are at the edge of what you can carry, and something has to give; you may feel numb, resentful or unable to enjoy anything, even rest. This is a clear signal to step away from some responsibilities before they take more from you. Lean on others, even if they do it imperfectly, and let go of a few standards. Recovery from overload takes longer than the overload itself, so start now.",
    ],
  },
  "wands-page": {
    general: [
      "Curiosity and a willingness to try bring something fresh into your life. A new interest, a message or an invitation may arrive, and your task is to follow it with an open mind. You do not have to know the outcome; this energy is playful and exploratory, so test it with small experiments. Notice what makes you feel alive and give that a regular place in your week, however modest.",
      "Enthusiasm is present but lacks direction, depth or follow-through. You may start projects on impulse and drop them when they become difficult, or put off a first step with endless preparation. A disappointing message may also dampen your excitement; choose one interest and commit to a small, visible output, such as a first draft or a first lesson. Finishing something modest teaches more than beginning five things.",
    ],
    love: [
      "Playfulness and curiosity are lighting up your connections. A flirtatious message, an eager new acquaintance or a fresh sense of fun with a long-term partner may arrive. Respond with warmth and interest, and try something new together; ask questions and listen to the answers. This is a time for discovering one another without too much weight, so let it be enjoyable before deciding what it means.",
      "Affection is shallow, mixed or unreliable at the moment. A crush may stay in the realm of messages, someone may flirt without meaning it, or you may be the one who loses interest as soon as things become real. Ask yourself what you actually want. Be direct about intentions and give relationships a chance to grow beyond novelty, or release them without leading anyone on.",
    ],
    career: [
      "A new idea, an eager apprentice or an exciting opening is bringing energy into your work. You may be learning something fresh, taking on a creative assignment or receiving news that sparks hope. Say yes to opportunities to experiment and ask plenty of questions; show your enthusiasm and your willingness to learn. The best use of this energy is to build a small prototype and get real feedback quickly.",
      "Good ideas are not becoming results; plans may be half-baked, deadlines may slip, or a promising lead may come to nothing. You might be doing what is fun rather than what is needed. Write down the single outcome you are working toward and the next three steps. If news has been disappointing, hold back from reacting rashly, and use the time to improve the idea rather than abandon it.",
    ],
    health: [
      "A fresh burst of interest makes movement and self-care feel like play rather than duty. Try a new activity, class or outdoor routine and see what you enjoy; do not set rigid targets. Let curiosity guide you and keep the sessions short enough that you look forward to the next one. A light heart is a real source of energy, so protect time for activities that make you laugh.",
      "Your energy is jumpy and lacks anchors. You might start routines enthusiastically and drop them after a week, or feel restless without knowing what you want. Choose one simple practice, such as a ten-minute walk, and repeat it at the same time daily. Consistency gives scattered enthusiasm a place to land, and keeps your wellbeing from depending on the next novelty.",
    ],
  },
  "wands-knight": {
    general: [
      "Bold, fast energy is pushing you toward action, and this is a season for going after what you want. You may feel restless with waiting and eager to travel, change course or take a risk. That drive is valuable if you aim it; decide on a destination before you gallop, and tell someone your plan. Courage works best when it has a target and a rough idea of what the journey will cost.",
      "Haste and heat are running ahead of judgment. You may leap without looking, start a dozen things, lose your temper when blocked or burn out halfway through a project. The pattern can also describe someone around you who promises more than they deliver. Slow down long enough to check the facts and finish what you began; passion needs a pace you can sustain if it is to arrive anywhere.",
    ],
    love: [
      "Romance arrives with intensity and momentum. You might be swept up by a bold, charming pursuit, or you might be the one pursuing with energy and flair. Enjoy the excitement and notice how the person behaves once the novelty fades; ask for clarity about intentions before investing deeply. Real passion also shows in patience and follow-through, so let actions over weeks tell you what words alone cannot.",
      "Passion burns hot and then cools, leaving confusion behind. A partner may be inconsistent, quick to anger or on the move, and you may feel like the one chasing. Or you may be the restless one, drawn to the thrill of beginnings and uneasy with the quiet that follows. Be honest about what you can offer; slow the pace, and look for steadiness before giving your trust.",
    ],
    career: [
      "Ambition is moving at full speed, and opportunity rewards those who act. You may be changing roles, traveling, pitching boldly or taking on a challenge nobody else wants. Make the most of the momentum while setting clear goals and checkpoints; share your plan with a trusted colleague who can notice what you miss. Daring is an asset at work when it is paired with enough preparation to avoid costly mistakes.",
      "Rushed decisions and divided attention are costing you progress. You may have started too many projects, quit a job in anger or promised more than the schedule allows. A hot temper at work can also close doors that talent opened; pause before sending anything written in frustration. Choose one priority and finish it, and treat colleagues with patience even when you feel the clock running.",
    ],
    health: [
      "You have a surplus of drive and a body that wants to move. Direct it into energetic activity such as running, sport or an outdoor adventure, and enjoy the strength you have. Warm up, hydrate and respect rest days, since the same enthusiasm that carries you can lead to overdoing it. Schedule your recovery with the same care as your training, so your fire keeps burning through the season.",
      "Overdrive has begun to backfire. You may be pushing through tiredness, snapping at people, or alternating between frantic bursts and flat collapse. This pattern is the early shape of burnout, with fast starts that cannot be sustained; take a real break before you are forced to. Replace the sprint with a steadier rhythm, and notice what your irritability is asking you to change.",
    ],
  },
  "wands-queen": {
    general: [
      "Warmth, confidence and independence are your strongest assets right now. You are able to draw people toward you and make things happen without losing your sense of self. This appears as a generous, determined presence that others find encouraging; use it deliberately. Take on something that matters to you, invite others into it and let your enthusiasm be seen; it is a good time to be yourself fully and without apology.",
      "Confidence has become fragile or has hardened into control. You may feel insecure and hide it with demands, compare yourself with others, or react with jealousy when attention shifts. This can also describe a person who is charming but needy; return to what you actually value about yourself, apart from admiration. Ask for what you need directly, and give others room to shine without feeling that it takes something from you.",
    ],
    love: [
      "Love flourishes when you are open-hearted and secure in yourself. You may be the warm center of a social circle, or you may meet someone who shows that kind of magnetic, loyal energy. Be generous with affection and honest about your needs; independence and devotion can coexist. The most attractive thing you can offer is the ease of someone who enjoys life and wants to share it.",
      "Insecurity is souring affection. Jealousy, possessiveness or sulking may crowd out the warmth you usually offer, and demands for reassurance can wear a partner down. It may also be someone close to you who behaves this way; look at what you fear losing and say so plainly instead of testing others. Rebuild trust in yourself first, then ask for the reassurance you need in a calm, specific way.",
    ],
    career: [
      "You can lead with charisma, determination and practical heart; people respond to your energy, and you handle setbacks with grace. This is a strong moment to run a project, mentor others, start a business or step into a public role. Be clear about your vision and generous with credit. Combine your enthusiasm with solid planning, and your team will follow because they trust your commitment as well as your charm.",
      "Self-doubt or a controlling streak is undermining your authority. You may be demanding too much of others, taking criticism badly or bristling at the success of others. A colleague with this energy may be difficult to work under; address the insecurity behind it by recalling real achievements, and invite honest feedback. Authority that is shared and steady holds up far better than authority that needs constant confirmation.",
    ],
    health: [
      "Vitality comes from doing things you love and being around people who bring you joy. You have a natural warmth that can be fed by dancing, time outdoors, creative projects or a favorite hobby. Look after your own fire as carefully as you tend to everyone else. Say no to what does not serve you, and keep pleasure in your weekly plan as a necessity rather than a reward.",
      "Giving too much and receiving too little is draining your fire. You may be putting on a cheerful front while resentment or jealousy builds underneath, or you may be too tired to enjoy the things that once energized you. Reclaim time for yourself without apology. Let others handle part of what you usually manage, and rest before your warmth runs thin and begins to feel like duty.",
    ],
  },
  "wands-king": {
    general: [
      "Vision and mature drive are available to you, along with the discipline to carry them out. You see where things should go and can inspire others to go there. This may appear as stepping into leadership, taking ownership of a long-term goal, or recognizing a person who embodies these qualities. Define your purpose clearly, delegate with trust and lead by example; power works best when it serves more than your own ambition.",
      "Strength has turned into dominance or reckless ambition. You may push others aside, insist on your own plan, or chase a big vision without regard for the cost. A person around you may behave this way; ask who is being overlooked and what you may be refusing to hear. Leadership lasts when it listens, so invite challenge and let your ideals be tested before you commit others to them.",
    ],
    love: [
      "Loyalty, generosity and bold devotion define your closest bonds. You may be the steady protector for those you love, or meet a partner who offers that kind of confident warmth. Lead with honesty and honor your commitments; let affection be visible in actions, not just plans. A strong presence is most loving when it makes room for the other person to be equally strong and equally heard.",
      "Control and pride crowd out tenderness. A partner or family member may insist on getting their way, dismiss feelings that do not suit their plans, or treat the relationship as something to manage. If this is you, notice where you give orders instead of asking; practice listening without fixing or deciding. Closeness grows when the people you love are treated as equals rather than followers.",
    ],
    career: [
      "You are well placed to lead a venture, a team or a major project. Your clear vision and decisiveness give others confidence, and your experience guides the way. Set a strategy, assign responsibilities and hold yourself to the standards you set for others; be generous with recognition. The most effective leaders turn their ideas into shared goals, so make sure your people understand the purpose and can act on it without you.",
      "Ambition has outrun judgment, or leadership has turned heavy-handed. You might be pushing a plan nobody believes in, punishing dissent or treating colleagues as tools for your goals. Impatient decisions made alone can cost money and loyalty; seek counsel from people who will disagree with you, and check the plan against reality. Rebuild trust by following through on promises and giving others real responsibility.",
    ],
    health: [
      "You have a steady reserve of strength when your goals are clear. Use it to build a lasting routine rather than a short burst, with regular exercise, sensible limits and time to recover. Leaders are often the last to rest, so set an example by taking breaks that are scheduled and respected. Treat your own stamina as a resource you manage over years, not something to spend freely on every demand.",
      "Driving yourself like a ruthless commander is burning you out. Long hours, an inability to delegate and a refusal to admit tiredness can leave you hard, tense and quick to anger. Strength includes knowing when to stand down; share some of the load, soften your standards where they serve no one and take real time away. The goals will still be there, and you will be better able to reach them.",
    ],
  },
};

Object.assign(DEEP_READINGS, DEEP_WANDS);
Object.entries(DEEP_WANDS).forEach(([id, deep]) => {
  if (EXTRA[id]) EXTRA[id].deep = deep;
});
