"use strict";

/* ------------------------------------------------------------------ *
 * Deep-dive readings: Major Arcana, The Fool to Justice.
 * Long-form interpretations for readers who want more than the short
 * meaning. One pair per reading context; [upright, reversed].
 * ------------------------------------------------------------------ */

const DEEP_MAJOR_1 = {
  "fool": {
    general: [
      "Something in your life is ready to begin, and the beginning matters more than the plan. This tends to show up as an impulse you keep returning to, a door that opens before you feel qualified, or a sudden lightness about leaving something behind. Take the first small, real step rather than waiting for certainty. Ask yourself what you would try if looking foolish for a while cost you nothing.",
      "The leap is happening without the look, or it is not happening at all. You may be betting on a whim you have not thought through, or standing at the edge rehearsing the same step for months while calling it preparation. Notice which version is yours, because the remedy differs: one needs a sober look at the cost, the other needs a deadline. Both are ways of refusing to be a beginner honestly.",
    ],
    love: [
      "Connection opens when you stop auditioning and simply arrive as you are. A new romance, a renewed friendship or an easier honesty with family can start now, often from an ordinary moment rather than a grand gesture. Say the light, true thing early instead of waiting for the perfect framing. Watch for the habit of editing yourself into someone more impressive and less lovable.",
      "Infatuation outruns knowledge, or caution outruns feeling. You might be building a whole future around a person you have known three weeks, or keeping a good one at arms length because commitment looks like a cage. Family and friends may be getting the charming version of you rather than the real one. Slow the story down and get curious about who this person actually is, yourself included.",
    ],
    career: [
      "Work wants a beginning you have not authorized yet: a new role, a side venture, a first modest investment, a question asked out loud in a meeting. Start before the plan is complete, because the plan improves once something real is moving. Keep the first stake small enough that failure teaches rather than wounds. Consider what you are treating as a prerequisite that is really just nerves.",
      "Either money and ambition are moving faster than your judgment, or they are not moving at all. Impulsive spending, an unresearched venture or a resignation decided in one bad afternoon belongs here, and so does an opportunity you have let expire twice. Check the numbers before your next commitment and name the worst realistic outcome. If hesitation is the pattern, pick the smallest version of the risk and do that.",
    ],
    health: [
      "Energy returns as appetite for movement rather than discipline. Walking somewhere new, trying a class you would once have dismissed, or spending a whole day outdoors does more for you now than any strict regimen. Let curiosity set the pace and keep it light enough that you look forward to it. Notice how much better you feel when rest and play stop being treated as rewards.",
      "Restlessness is masquerading as vitality. You may push into something your body has not been prepared for, cut sleep short because the day feels exciting, or ignore small twinges until they get loud. The quieter version is a stalled body, endless intentions and no first step. Ground yourself before you move: feet, breath, a sensible pace, and one modest commitment you can keep this week.",
    ],
  },
  "magician": {
    general: [
      "You already hold the tools, and this period rewards using them deliberately rather than gathering more. It shows up as the moment a vague idea becomes a sentence you can say, a plan you can schedule, a thing you can make. Pick one intention and put your whole attention behind it for a defined stretch. Ask which skill, contact or resource you keep overlooking because it feels too familiar to count.",
      "The power is present but misdirected. That looks like talent spread across six projects so none of them ever ships, a convincing story told to cover a thin reality, or persuasion used where plain honesty was needed. Someone nearby may be performing competence rather than practicing it, and it could be you. Cut the list to one item and check that what you claim matches what you can actually do.",
    ],
    love: [
      "You can speak plainly about what you want, and that clarity is the attraction. Expect conversations where intent finally gets stated, an invitation extended, or a family matter eased because someone named it directly. Use your charm in the service of honesty rather than instead of it. Decide what you actually want from this connection before you go asking, since a clear request is far easier to answer.",
      "Charm becomes technique and connection thins out. Mixed signals, flattering words with no follow-through, or a carefully managed image can all appear here, and the person managing it may be you, protecting yourself. Promises outnumber plans, and friends or family hear only what they hoped for. Compare what has been said with what has been done over the last month, then speak without performing.",
    ],
    career: [
      "Your skills, contacts and timing line up, so this is a season for launching rather than preparing. Pitch the idea, send the proposal, ask for the budget, put a price on the thing you make. Work with what is already in your hands instead of waiting for better equipment or a bigger title. Ask what single concrete action would make this project real to somebody other than you.",
      "Capability sits idle or gets spent on spin. You may be the most skilled person in a role that uses none of it, or scattered across tasks that each need your full focus. Watch for a deal, pitch or colleague whose claims outpace the substance, and read the detail yourself. Choose one project, finish it, and let demonstrated work replace all the explaining.",
    ],
    health: [
      "Your attention is the lever here, and directing it steadies everything else. Breath practice, a simple repeatable routine or one clear goal gives your energy somewhere useful to go. You have what you need already, so refine rather than add anything new. Notice how much calmer the body becomes when the mind holds a single task instead of twelve half-finished ones.",
      "Mental overdrive drains the body quietly. Racing thought, too many self-improvement projects open at once, and a nervous buzz that never resolves into rest are the clear signs. Trying to fix everything at the same time is itself the strain. Strip your routine back to two things you will genuinely do, and let the rest of the list wait without guilt.",
    ],
  },
  "high-priestess": {
    general: [
      "Knowledge is arriving sideways rather than through analysis, and silence is where you will hear it. Expect a persistent hunch, a dream that stays with you, or the sense that a situation holds more than has been said aloud. Make room for quiet before deciding anything, and write down what comes without grading it. Consider what you already know but have not yet said out loud to anyone.",
      "The inner signal is being talked over. You may be reasoning your way past a feeling that keeps returning, taking appearances at face value, or holding a secret that costs more to keep than to tell. Information is incomplete, and the gaps are exactly where the trouble sits. Before your next decision, name the thing you have avoided noticing, then go find the facts you skipped.",
    ],
    love: [
      "Feeling runs deeper than either of you has put into words, and patience reveals more than questioning will. You may sense a shift in someone before they mention it, or understand a family member better by listening to tone rather than content. Let the silences happen instead of filling them. Pay attention to what your body tells you in the company of certain people, because it usually knows first.",
      "Things are being withheld here, including by you. Unspoken resentment, a private worry, or a gut feeling you dismissed as paranoia creates a distance neither person can quite explain. Surface politeness continues while the conversation that matters never gets started. Ask one honest question and be willing to answer it yourself, because reading only the surface here will keep you guessing indefinitely.",
    ],
    career: [
      "Watch and gather before you move, since this situation has undercurrents that are not on the agenda. You may notice who truly holds influence, sense a change before it is announced, or realize a proposal is not quite what it appears. Keep your own counsel for now and let the picture complete itself. Trust the discomfort that arrives when numbers or explanations do not fit together.",
      "Key information is hidden, buried or ignored, and decisions are being made on top of it. Fine print you skimmed, a colleague with an unstated agenda, or your own warning instinct overruled by urgency all belong here. Money matters especially reward reading the whole document. Slow the process, ask the uncomfortable question, and refuse to sign anything you cannot explain to yourself.",
    ],
    health: [
      "Rest, dreams and quiet are doing the real work right now. Early nights, unhurried mornings and time without input let the body say what noise has been covering. Your appetite, your sleep and your mood all carry accurate information if you sit still long enough to receive it. Protect one stretch of silence each day and notice what surfaces inside it.",
      "Signals are being overridden rather than heard. Pushing through tiredness, treating a persistent feeling as an inconvenience, or filling every quiet moment with distraction keeps the tension in place and the message unread. The body then starts repeating itself more loudly until you listen. Give yourself one evening with no screen and no plan, and respond to what you notice instead of negotiating with it.",
    ],
  },
  "empress": {
    general: [
      "Growth is happening in the parts of life you have tended, and this season is for enjoying and continuing that care. Creative work bears fruit, a home starts feeling like one, and bodies, gardens and projects all respond to attention. Keep the pace generous rather than urgent, since nothing here benefits from force. Ask what in your life would flourish if you simply kept watering it.",
      "Care becomes smothering or disappears entirely. You may be pouring yourself into other people until nothing remains, holding something so tightly that it cannot grow, or letting your own basic needs slide while everything else gets attended to. Creative energy stalls and comfort shades into inertia. Take back one thing that is yours, and let what you have been managing manage itself for a week.",
    ],
    love: [
      "Warmth, touch and generosity are the language here, and they are being spoken well. A romance deepens into ease, a home becomes somewhere people want to be, a family grows in size or closeness, or you feel cherished without having to earn it. Make time for pleasure that serves no purpose. Notice who you nourish, and whether you let yourself be nourished in return.",
      "Love turns into management. Hovering, advice nobody asked for, or needing to be needed can crowd a partner or a grown child, while a long bond settles into comfortable numbness with no desire left in it. Sometimes the imbalance runs the other way and you are the one being carried. Step back, ask instead of assuming, and tend to your own appetites for a change.",
    ],
    career: [
      "Work you have nurtured patiently begins producing. Creative projects find an audience, income grows steadily rather than dramatically, a team you supported becomes capable, or a long effort finally yields. Keep investing in quality and comfort instead of chasing speed. Consider which part of your working life deserves more care than pressure, because that is where the return is waiting.",
      "Creative flow dries up and the accounts show the strain. Overspending on comfort, a project starved of attention, or months of labor with no rest leaves you producing without satisfaction. You may also be holding a role so protectively that nobody else can contribute. Rest first, then prune: one project set down, one expense stopped, one task genuinely handed over.",
    ],
    health: [
      "Your body responds to kindness now rather than correction. Real food, sleep, time outdoors, warmth and touch restore you faster than any program of discipline. Pleasure is part of the medicine here, not a distraction from it. Give yourself an unhurried meal and an afternoon with no agenda, and notice how much steadier you feel once the hurry is gone.",
      "Comfort tips into excess, or self-care becomes the thing you get to last. Eating for soothing, days without movement, or giving everyone else what you deny yourself leaves you heavy and depleted. The remedy is modest and unglamorous rather than a dramatic reset. Return to the plain basics of food, sleep and fresh air, and put your own name on the list.",
    ],
  },
  "emperor": {
    general: [
      "Structure is what this situation needs, and you are capable of providing it. The theme appears as rules worth keeping, a plan with dates on it, responsibility accepted rather than deflected, or someone steady stepping in to protect what matters. Decide, write it down, and hold the line calmly. Ask where your life is missing a frame, and build that part before anything else.",
      "Authority goes wrong in one of two directions. Either control hardens into rigidity, with rules defended long past their usefulness and obedience mistaken for respect, or nobody takes charge and the whole arrangement drifts. Force applied to a problem that needed listening also belongs here. Loosen your grip where you have been gripping, and take charge where you keep waiting for someone else to.",
    ],
    love: [
      "Reliability is the romance here. Commitment grows out of kept promises, clear boundaries and a partner who turns up when it is inconvenient, and family relationships steady when someone takes responsibility without resentment. Say what you can and cannot offer, then do exactly that. Watch the difference between protecting someone and deciding for them, because only one of those builds trust.",
      "Power stops being shared. One person sets the terms, controls the money, corrects the other in public, or retreats into cold competence instead of saying what they feel. The opposite also appears: a relationship nobody will take responsibility for, with every decision deferred. Name the imbalance plainly, and notice whether control has started standing in for affection you find harder to express.",
    ],
    career: [
      "This is a season for building rather than improvising. Clear processes, firm decisions, a disciplined schedule and a long view bring authority, advancement and real financial stability. Take the responsibility you have been circling, including the unpopular parts of it. Consider what structure your work would need in order to survive your absence for a month, then put that piece in place first.",
      "Rigid systems and misused power choke off progress here. Micromanagement, an overbearing figure above you, policies defended for their own sake, or your own refusal to delegate turns capable people into passengers. The mirror image is a career with no discipline in it, full of good intentions and no schedule. Choose one rule to relax and one new commitment you will actually keep.",
    ],
    health: [
      "Routine is your foundation now, and it works better than willpower. Consistent sleeping and waking times, meals at regular hours, and movement you have scheduled rather than negotiated give your system something dependable to stand on. Boundaries around your time belong to this too. Build the frame first and let motivation be optional, because the structure carries you when energy dips.",
      "Discipline turns into pressure and the body tightens around it. Overwork defended as duty, a regimen so strict that one missed day feels like failure, or a jaw and shoulders that never fully release are all signs of it. The opposite shows as no structure whatsoever. Loosen the rules by a visible amount, put recovery in the schedule, and treat rest as part of the work.",
    ],
  },
  "hierophant": {
    general: [
      "Established wisdom has something for you, and this is a time to learn from it rather than reinvent. It arrives as a teacher, a tradition, a qualification, an institution, or a commitment made publicly inside a recognized structure. Follow the method as given before you start adapting it. Ask which inherited beliefs still genuinely serve you, since the ones worth keeping survive being examined.",
      "The received rules no longer fit, and following them is costing you. Doctrine repeated without meaning, a group whose approval you have been buying with conformity, or a tradition you inherited and never chose can all show up. Rebellion for its own sake is the other trap. Keep the part that is true, set down the part that is only habit, and stand slightly outside.",
    ],
    love: [
      "Relationships deepen through shared values and visible commitment. Engagement, marriage, meeting families, cultural or religious observance, or simply agreeing out loud on how you will treat each other gives a bond weight and public recognition. Honor the small rituals you keep together. Consider what the two of you actually believe in common, because that lasts better than chemistry over a long stretch.",
      "Convention starts to chafe. The expected timeline, the family script, or a partner whose core values have quietly drifted from yours leaves you performing a relationship instead of living one. You may want an arrangement that nobody around you recognizes, and that deserves to be taken seriously. Say what you believe now rather than what you agreed to years ago.",
    ],
    career: [
      "Formal paths pay off here. A mentor worth listening to, a qualification, an established procedure, or the backing of an institution advances you more surely than going it alone. Learn the standard before innovating on it, and let experienced people correct you. Ask who in your field knows what you need to know, then make it easy for them to teach you.",
      "Bureaucracy and outdated methods stand between you and the work. Approval chains with no purpose, a culture rewarding conformity over results, or training that no longer matches reality drains the energy out of good people. You may be the one who has to question it. Document the problem, propose a specific change, and consider whether your real path lies outside this structure.",
    ],
    health: [
      "Tried and tested practice serves you better than novelty. A routine with a long track record, guidance from someone properly qualified, or a practice held in company gives your wellbeing reliable scaffolding. Turning up regularly matters more here than intensity does. Pick one established approach, commit to it for a season, and let the accumulated repetitions do the work for you.",
      "Habits inherited rather than chosen are working against you. Rules about food, rest, exertion or stoicism absorbed from family or culture may not suit your actual body, and following them dutifully leaves you worse off. Advice delivered with authority is not automatically right for you. Question one inherited rule this week and replace it with something gentler and more honest.",
    ],
  },
  "lovers": {
    general: [
      "Alignment is the theme: what you value, what you say and what you do are lining up. This shows as a meaningful choice that clarifies everything behind it, a partnership that feels like recognition, or the relief of ending a quiet double life. Choose fully rather than hedging. Ask which option would let you act in complete agreement with what you care about most.",
      "Something is out of alignment and the strain is spreading. A choice avoided, two commitments that quietly contradict each other, or values you profess but do not practice leaves you divided against yourself. Temptation takes hold in exactly that gap. Name the decision you have been postponing, then notice which part of your life you would have to stop pretending about.",
    ],
    love: [
      "A connection built on shared values asks to be chosen out loud. That can mean a relationship moving from maybe to yes, an honest conversation that clears the ambiguity, or the simple intimacy of being fully known by a partner, friend or relative. Show up as yourself rather than the agreeable version. Consider what you are waiting for before committing, and whether it is ever coming.",
      "Two people want different things and neither will say so. Attraction pulling you away from a commitment, a partner whose priorities no longer meet yours, or an unmade decision left hanging keeps everyone unsure where they stand. Avoidance feels kinder than it actually is. Tell the truth about what you want, even if the honest version ends something that was already over.",
    ],
    career: [
      "A decision at work can be made with a clear conscience, and that is the real opportunity. A partnership, collaboration or offer appears whose terms match your values, or you finally choose work you would not have to defend to yourself. Pick the option you could explain proudly. Ask whether the money on offer is worth what you would have to agree with.",
      "Your work and your values have come apart. That shows as a job requiring compromises you keep rationalizing, a business partner you knew was wrong from the start, or an offer that looks good and feels wrong. Delay only compounds the cost. Write down the specific conflict, decide what you will not trade, and act before the choice gets made for you.",
    ],
    health: [
      "Feeling connected and internally consistent lifts your whole system. Time with people who leave you feeling like yourself, affection, and the relief of no longer being divided inside gives back energy that conflict had been consuming. Your wellbeing and your relationships are not separate matters here. Choose the company that leaves you lighter, and notice how quickly the body follows your peace of mind.",
      "Unresolved tension in close relationships shows up in the body. Arguments carried unspoken, a bond that asks you to be someone else, or living against your own standards drains energy in a way that sleep will not repair. The fatigue is relational rather than physical. Be honest about one need you have been hiding, and let the resulting conversation restore your balance.",
    ],
  },
  "chariot": {
    general: [
      "Momentum is yours as long as you hold the reins. Competing drives, distractions and opposing pressures can be harnessed into one direction, and focused effort moves you past obstacles that looked immovable. Choose the destination clearly and commit for a set period. Ask which pulls inside you need aligning rather than arguing with, since both can pull if they face the same way.",
      "Drive without any clear direction burns straight through you. Pushing harder on a path you never checked, aggression where persuasion was needed, or effort scattered across three fronts at once produces exhaustion and no distance. You may also have stalled completely after a long and costly sprint. Stop, pick a single destination, and set a pace you could hold for months rather than days.",
    ],
    love: [
      "A relationship moves forward because somebody decides it will. Definition arrives, plans get made, a long-distance situation closes, or a family finally pulls together toward a shared goal. Make sure the two of you are steering together rather than racing each other. Consider whether your partner knows the direction you are driving toward, because momentum without agreement eventually becomes a collision.",
      "Two wills push against each other and the relationship goes nowhere. Power struggles, a pace one person never agreed to, or arguments that are really about who decides leave both people braced and tired. Sometimes the direction was lost long ago and only the speed remains. Ease off, admit what you are competing about, and let someone else choose for once.",
    ],
    career: [
      "Concentrated effort produces a win here. A project launches, an obstacle gives way, a promotion arrives, or months of sustained discipline finally show up in the results. Protect your focus firmly and decline whatever does not serve the main goal. Ask what you could achieve within six weeks if this one objective came first every single morning, ahead of everything that is easier.",
      "Effort is running high and progress is low. Working longer instead of smarter, forcing a deal that keeps resisting you, or chasing several openings so none gets your full weight wastes genuine capability you have. Frustration may be leaking out as impatience with the people around you. Stop, check the map, cut two commitments, and rebuild momentum from something small that actually moves forward.",
    ],
    health: [
      "Disciplined movement builds you up now. A clear, achievable physical goal, a regular training rhythm, or a routine you keep whether or not you feel like it channels restless energy into real strength. Progress becomes visible quickly if you stay consistent with it. Set the target slightly below what you think you can manage, then meet it reliably and let confidence accumulate from there.",
      "Pushing past your limits has stopped producing gains. Training through fatigue, a schedule with no recovery built into it, or a nervous drive that cannot sit still leaves you depleted and more prone to strain. The opposite also appears, as a complete stop after burning too hot. Ease off the pace deliberately, restore sleep first, and rebuild in smaller increments.",
    ],
  },
  "strength": {
    general: [
      "Quiet power is accomplishing more than force could. Patience held through provocation, fear met without being obeyed, and gentleness that turns out to be the stronger position all show up across your situation. Stay steady and let your composure set the tone for everyone else. Ask where kindness and persistence might achieve what pressure and insistence have repeatedly failed to.",
      "Courage either falters or hardens. Self-doubt can leave you backing down from something you are perfectly able to handle, while suppressed anger leaks out as sharpness, or raw force gets used where care was wanted. Either way the gentle middle has gone missing from your approach. Admit the fear out loud to one trusted person, then take the smallest brave action available to you today.",
    ],
    love: [
      "Patience deepens intimacy here. Staying calm in a difficult conversation, forgiving without keeping score, or holding steady while someone works through their own fear builds trust that argument never could. Your steady confidence lets other people relax around you, and that safety is a gift. Consider where you could soften your position without giving up your ground, since those two things are not the same.",
      "Insecurity is running the relationship from underneath. Jealousy, a temper that arrives faster than it used to, or endless accommodation to avoid conflict all come from the same unsteady place. You may be hiding vulnerability behind either control or compliance. Say what you actually fear rather than acting it out through behavior, and let the other person meet you there with some patience of their own.",
    ],
    career: [
      "Composure is your professional advantage now. A difficult colleague, a demanding manager or a high-pressure project yields to steady patience and self-control rather than confrontation, and people start trusting you with more. Keep your voice level and your standards firm, and let results make the argument for you. Ask yourself what you could handle calmly today that would have rattled you a year ago, and build on that.",
      "Pressure is wearing through your composure. Snapping at people, dreading work you used to manage easily, or doubting abilities you demonstrably have all signal reserves that have run too low. Force applied to tired people, yourself included, produces less rather than more. Reduce what you carry, ask for specific help, and stop treating endurance as the measure of your worth.",
    ],
    health: [
      "Gentle courage restores you better than discipline does. Treating your body kindly, continuing a modest practice with patience, and meeting difficulty without panic lets your strength return at its own pace. Self-compassion here is practical rather than indulgent. Notice how much more you can sustain once you stop fighting yourself about what you think you should already manage, and let the pace be slower than your pride wants it to be.",
      "Tension held down takes its toll. Suppressed frustration, a harsh inner voice, or pushing through depletion because stopping feels like weakness drains reserves you genuinely need. Shame makes recovery slower, never faster, and it keeps the whole cycle running. Acknowledge the limit honestly, tell someone you trust how you are really doing, and let support count as part of your strength rather than evidence against it.",
    ],
  },
  "hermit": {
    general: [
      "A step back is what clarifies things now. Solitude, fewer inputs and honest reflection reveal what the noise had been covering, and a wise voice, whether a mentor or your own, becomes audible again. Give yourself real time alone rather than scraps of it. Ask what answer you might hear by sitting quietly with the question instead of asking everyone around you.",
      "Withdrawal has gone past the point of use. Days without genuine contact, advice refused on principle, or a retreat from life dressed up as self-sufficiency leaves you lonely and no wiser. Isolation stops producing insight at some point and starts producing fog, then worry. Let one person in this week, answer the message you keep ignoring, and accept the help offered.",
    ],
    love: [
      "Distance serves you here. Time alone helps you understand what you truly want from a partner, a slower courtship lets sincerity show itself, and stepping back from family drama restores your perspective. Depth matters more than frequency of contact now, and a few honest exchanges outweigh a crowded calendar. Consider whether you choose company because you actually want it, or because being alone has started to feel unbearable.",
      "Solitude becomes a hiding place. Shutting a partner out while calling it needing space, declining invitations until nobody sends them, or carrying loneliness silently rather than admitting it holds intimacy at a safe and costly distance. The longer it continues, the harder reaching out feels. Say one true thing to one person, even if it is only that you have been struggling.",
    ],
    career: [
      "Independent work and quiet study move you forward. Research, a solo project, a sabbatical, or simply time away from office noise lets you find the direction that meetings had obscured. An experienced mentor may offer guidance worth more than any course you could buy. Protect uninterrupted hours deliberately, and ask what you would build if nobody were watching your progress or judging the pace.",
      "Isolation is costing you professionally. Working alone until you lose touch with what others need, refusing feedback, or becoming invisible to the people who make decisions stalls a career your ability should be advancing. Money handled entirely in private can drift as well. Ask one knowledgeable person for a frank opinion of your work, and let yourself be visible again to the people who decide.",
    ],
    health: [
      "Quiet restores you more than company does right now. Time alone, slow walks, fewer screens and unstructured hours let your system settle and your own signals become clear. Solitude outdoors is particularly steadying. Schedule the silence as deliberately as you would any appointment, and then simply notice what your energy does when nothing at all is being asked of it.",
      "Too much time alone deepens the dip. Skipped meals nobody notices, a reversed sleep pattern, and low mood that feeds on its own privacy build slowly when there is no one to interrupt them. Reaching out feels like effort at precisely the moment you need it most. Let someone check in on you, keep one standing appointment with another person, and begin there.",
    ],
  },
  "wheel-of-fortune": {
    general: [
      "Circumstances are turning, mostly in your favor and largely outside your control. An unexpected opportunity, a chance meeting, or a shift in timing changes the picture, and what felt stuck begins moving on its own. Move with it rather than clinging to your plan. Ask what cycle in your life is coming around again, and what you would do differently this time.",
      "The turn is going the other way, or you are bracing against it. Setbacks, poor timing and a familiar pattern repeating leave you feeling at the mercy of events, and resistance makes the ride rougher than it needs to be. Look for your own part in the loop, since that is the only piece you can change. The wheel keeps turning either way.",
    ],
    love: [
      "Timing favors connection. A chance meeting, a reunion, or a relationship moving into a warmer phase arrives with a sense of rightness, and family patterns may ease without anyone forcing them. Say yes to the invitation you would normally decline, and stay open to who shows up. Consider what is ready to change in the way you relate, because this opening will not stay open indefinitely.",
      "The same relationship pattern comes around again. Bad timing, a familiar argument wearing a new face, or an unwelcome change you did not choose leaves you feeling powerless among the people closest to you. Blaming circumstance is comfortable and keeps the loop intact for another round. Identify the recurring moment precisely, then do one thing differently the next time it arrives, however small that change feels.",
    ],
    career: [
      "Fortune shifts at work. A lucky break, an unexpected offer, a market turning your way, or a sudden opening after months of nothing rewards readiness more than planning. Keep your materials current and your answer prepared well ahead of time. Ask what would need to be in place for you to accept a good opportunity next week rather than next quarter.",
      "Momentum reverses. A deal collapses, a contract ends, income dips, or the same career frustration returns in a new workplace, and none of it feels deserved. Resisting the change costs more than adapting to it, and the cycle will come round again. Protect your reserves, stop fighting what has already happened, and look for the lesson the pattern keeps offering.",
    ],
    health: [
      "A change of circumstance lifts your energy. A new season, a different routine, or the simple passing of a hard phase brings vitality back, often without your having done anything dramatic. Energy moves in cycles, and yours is on the rise. Use the upswing to establish something you can keep, so the next dip has some structure to land on.",
      "An old pattern is wearing you down again. The same slide in sleep, the same depleted month, or a run of bad timing that leaves no room for recovery repeats because the conditions around it have not changed. Fighting the cycle from the middle of it rarely works. Notice where it reliably begins, then change one small thing at that point.",
    ],
  },
  "justice": {
    general: [
      "Accounts are being settled honestly, and the truth is on your side if you stay with it. Decisions reveal their consequences, a long-pending matter resolves, and fairness arrives through clarity rather than luck. Look at the facts without softening them. Ask whether you are being completely straight with yourself here, because every other part of this depends on that answer.",
      "Fairness has gone missing. Bias dressed as objectivity, accountability dodged, a convenient half-truth, or a situation where the burden is plainly uneven creates a tilt that eventually corrects itself, usually at the expense of someone. Judgment is clouded, and possibly yours. Gather the actual facts, own your portion precisely, and stop arguing a case you privately know is weak, even when winning the point would feel good.",
    ],
    love: [
      "Balance is the measure of this relationship. Honest conversation about what each person gives, a fair resolution to a long disagreement, or a decision about the future made with a clear head rather than a racing heart strengthens the bond. Keep your agreements and expect the same in return. Consider whether the effort, attention and compromise here are genuinely shared.",
      "The scales are uneven and someone is pretending otherwise. One person carries the planning, the apologizing and the emotional work while the other receives it, or a dishonesty sits unaddressed beneath polite conversation. Keeping score in silence is its own kind of unfairness. Say the imbalance out loud and specifically, then hear where you have taken more than your share.",
    ],
    career: [
      "Integrity pays here. A contract, review, dispute or negotiation resolves in your favor because the facts support you and your conduct holds up to inspection. Keep records, read what you sign, and let the documentation speak for itself when questions arise. Ask what you would want examined before agreeing to anything, then go and examine exactly that yourself, line by line.",
      "An unfair outcome lands on you, or a shortcut catches up. Credit taken by somebody else, a biased decision, a dispute dragging on, or an arrangement you knew was questionable when you accepted it all belong here. Consequences arrive on their own schedule. Document what happened, raise it through the proper channel, and correct whatever part of it is yours.",
    ],
    health: [
      "Balance and honesty steady you. An even distribution between work and rest, boundaries you actually enforce, and a truthful look at what your habits produce restore equilibrium without any drama. Be as fair to your body as you would be to someone in your care, and equally patient. Ask which part of your current routine you would never recommend to a friend.",
      "Harsh self-assessment is doing damage. Measuring your energy against that of other people, blaming yourself for limits you did not choose, or swinging between neglect and punishment keeps you unsettled. Imbalance across your week shows up as imbalance in your mood. Drop the verdict, look at the week honestly as a neutral observer would, and redistribute the load more evenly across your days and your attention.",
    ],
  },
};

Object.assign(DEEP_READINGS, DEEP_MAJOR_1);
Object.entries(DEEP_MAJOR_1).forEach(([id, deep]) => {
  if (EXTRA[id]) EXTRA[id].deep = deep;
});
