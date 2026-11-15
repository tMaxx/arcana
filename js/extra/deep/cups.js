"use strict";

/* ------------------------------------------------------------------ *
 * Deep-dive readings: Cups.
 * Long-form interpretations for readers who want more than the short
 * meaning. One pair per reading context; [upright, reversed].
 * ------------------------------------------------------------------ */

const DEEP_CUPS = {
  "cups-ace": {
    general: [
      "A new wellspring of feeling opens, and it asks to be received rather than managed. It shows up as unexpected tenderness, a surge of creative appetite, or a sudden sense that something matters again. Let yourself be moved without rushing to explain it. Give the feeling a channel, such as a letter, a conversation, a sketch or a quiet walk, so it has somewhere to go besides your thoughts.",
      "Feeling is present but it cannot find a way out. You may notice a flat patch where joy used to be, a habit of changing the subject when emotions rise, or a sense of being full and empty at once. Guarding yourself has become automatic. Start small by naming one honest feeling each day, in writing or aloud, and let it be as unfinished as it is.",
    ],
    love: [
      "Affection is ready to begin or to deepen, and your heart is more open than usual. It may look like a new attraction that feels easy, a partner who suddenly softens, or a friend or relative who says the thing you needed to hear. Receive it plainly. Offer warmth in return without bargaining over what it means, and let the connection show you its own pace.",
      "Love is available but you cannot quite take it in. A kind gesture may go unnoticed, or you keep your feelings tucked away to avoid being exposed. Past hurts can leave you protective in ways that look like indifference to others. Try saying one true, vulnerable sentence to someone safe, and notice how much more room there is once it is spoken.",
    ],
    career: [
      "Work that feels personally meaningful is within reach. It may be a role where you care about the people you serve, a creative project that finally clicks, or a generous offer from someone who believes in you. Pay attention to what energizes you rather than what only impresses. Say yes to the opening that feels alive, and protect time for the creative part of it.",
      "The sense of purpose you once brought to your work has run dry. Tasks get done but nothing lands, ideas feel stale, and an encouraging offer or kind word may slip past because you are too numb to register it. Burnout is a common cause. Step back from output for a short stretch, feed your curiosity somewhere unrelated, and see what stirs.",
    ],
    health: [
      "Your emotional reserves are filling, and the body tends to relax when that happens. You may feel softer, more tearful in a good way, or newly interested in rest, music or time near water. Treat this as a signal to nourish yourself rather than push on. Drink water, eat something that comforts you, and spend a few minutes each day doing nothing in particular.",
      "Emotional fatigue has built up, and holding it in is costing you energy. You may feel dull, detached or oddly tired no matter how much you sleep. Do not demand a particular mood from yourself. Give feelings gentle outlets such as journaling, a walk, a good cry or talking with someone patient, and rest without judging how long it takes to refill.",
    ],
  },
  "cups-2": {
    general: [
      "Two sides meet in genuine mutual regard, and something balanced becomes possible. This can be a friendship, a collaboration or a relationship with yourself that finally gets even footing, and it shows up as easy listening, fair exchange and a sense of being met halfway. Notice where this already exists in your life and give it attention. Where it is missing, ask for reciprocity in simple, direct terms.",
      "Give and take has slipped out of balance, and the strain shows in small ways. One person does more of the reaching, conversations turn guarded or go quiet, and resentment builds under polite surfaces. Often the issue is unspoken expectations rather than bad intent. Pick one relationship that feels lopsided and name your need clearly, then listen to the reply without defending yourself.",
    ],
    love: [
      "A real meeting of two people is underway, with attraction supported by respect. It might be a new romance that feels mutual from the start, a long partnership that renews itself, or a close friendship where each of you is seen. Say what you appreciate aloud. Keep showing up in ordinary ways, because this kind of bond grows through steady attention more than grand gestures.",
      "The balance between you has tilted. One of you may be giving more, hiding more or listening less, and conversations turn into misunderstandings or silence. A distance that was once small is now noticeable, so resist blaming anyone as a first move. Ask a specific question about how the other person is doing, then share your own honest answer, even if it is uncomfortable.",
    ],
    career: [
      "A working partnership takes shape on fair terms. It could be a co-founder, a trusted colleague, a client who values your work or a mentor who respects your judgment, where both sides contribute and both benefit. Put the terms in writing and talk plainly about roles, money and expectations. Trust built early and kept transparent becomes the most reliable asset in the arrangement.",
      "A professional relationship has lost its footing. Responsibilities blur, credit is uneven, or a client and a collaborator stop saying what they mean. Left alone, mistrust hardens into formal distance, so revisit the original agreement and check what each person expected. If the arrangement can be repaired, propose concrete changes, and if it cannot, end it cleanly, with civility and without drama.",
    ],
    health: [
      "Supportive connection is doing quiet work on your wellbeing. Time with someone who listens without hurrying you can settle your whole system, and mutual care feels restoring rather than draining. Schedule that time rather than waiting for it to happen. Also extend the same warmth toward yourself, with the kind of patience and fairness you would offer a friend in your position.",
      "Strain between you and another person is wearing on your energy, and the unsettled feeling follows you into sleep and appetite. You may also be at odds with yourself, wanting rest while demanding more. Rebuild your own center first with a simple routine and a few quiet minutes. From there, decide which conversation would ease the load, and have it when you feel steady.",
    ],
  },
  "cups-3": {
    general: [
      "Shared joy is the theme, and it works best when you let yourself join in. It shows up as a gathering, a reunion, good news worth toasting or a circle of people who lift each other. Say yes to the invitation and bring something small. Community is not a reward for finishing your tasks, and it is part of what keeps you resilient when harder seasons come.",
      "Social energy has turned a little sour. You may be spreading yourself across too many events, caught up in gossip, or sitting on the edge of a group that seems to have its own rhythm. Pleasure can turn into excess when it is used to avoid quieter feelings. Choose two or three people who feel genuine and give them your best attention.",
    ],
    love: [
      "Love is surrounded by friends and family, and that circle is part of what makes it strong. You may be celebrating an engagement, a milestone or simply a good evening with people who care about you both. Let others see the relationship, and make room for friendships beyond it. If you are single, the warmth you build in your community is where connection often begins.",
      "Outside voices are muddying something that should be simple. Gossip, rivalry or a third person may stir doubt, or you may feel left out while others celebrate. Another version is too much socializing, leaving little time alone together. Step away from the chatter and protect the bond directly, by talking to the person involved rather than about them, and say what you need to feel included.",
    ],
    career: [
      "Team morale is high, and a shared win deserves marking. Collaboration comes easily, people credit each other, and good ideas travel across the group. Use the momentum to build rituals that last, such as a regular check-in, a thank-you round or an informal meal together. Strong working friendships often hold a project together through its harder stretches, so invest in them on purpose.",
      "The team atmosphere has slipped. Cliques, backchannel talk and uneven recognition may be pulling people apart, or office socializing may be crowding out real work. You might feel like the one left off the guest list, so avoid feeding the rumor mill, even when it is tempting. Praise colleagues in public, address conflicts directly with the person involved, and suggest a gathering that includes everyone.",
    ],
    health: [
      "Laughter, company and shared meals are good for you right now. Time with people who lighten your mood relaxes your body and reminds you that you are not carrying everything alone. Move with others when you can, whether on a walk, a dance floor or a casual game. Enjoy the celebration fully, and give yourself ordinary rest afterward so the high settles gently.",
      "Too much activity or too little real connection is draining you. Late nights, heavy socializing and surface chatter may leave you more tired than refreshed, or an awkward group dynamic may leave you feeling excluded. Pay attention to how you feel after each gathering. Keep the ones that restore you, decline some that do not, and make space for one friend who really listens.",
    ],
  },
  "cups-4": {
    general: [
      "You are turned inward, half-aware of what is on offer and not quite interested. It shows up as boredom with things that once pleased you, a long stare at the same question, or a quiet feeling that nothing available is the thing you want. This pause has value. Use it to ask what you actually miss, and stay open to a small invitation that might surprise you.",
      "The fog is starting to move, though it may take a little while to clear. You may catch yourself noticing something you had passed over, or feel a first flicker of curiosity. The shadow side is staying shut after the moment to re-engage has come, and letting resentment about what was missing outlast the reason for it. Accept one small offer this week.",
    ],
    love: [
      "Feelings have gone muted, and you may be overlooking affection that is right in front of you. A partner may be reaching out while you drift in your own thoughts, or you may wonder whether anyone could really satisfy you. Be honest that you are in a flat patch rather than leaving others to guess. Then take one small step toward them, such as a shared meal or a direct question.",
      "You begin to see what you missed and feel pulled back toward the people around you. A kind gesture lands this time, or you realize someone has been patient with you for a long while. The risk is staying withdrawn out of habit while good people lose heart. Say thank you, apologize for your distance if you owe one, and show up.",
    ],
    career: [
      "Restlessness has set in. Familiar work feels dull, proposals feel uninspiring, and you may be waving off options without looking closely. Boredom here is information about your values and what you want from your craft. Take time to list what you would change if you could, then test one idea, such as a new responsibility or a conversation with someone in a role you envy.",
      "Your motivation comes back, and with it the ability to see what is available. A project or a colleague you dismissed may now look worth your effort. The shadow is lingering disengagement, which quietly closes doors, especially when people stop offering. Show up to the next meeting prepared, ask for the assignment that interests you, and treat your renewed attention as something to protect.",
    ],
    health: [
      "A heavy, uninterested mood may signal that some emotional need has gone unmet. Everything can feel like too much effort and nothing feels appealing, including things that usually help. Do not scold yourself for it, and look gently at what you have been ignoring, whether rest, company or time alone. Offer yourself one nourishing thing, such as fresh air or a warm meal, without expecting it to fix the mood.",
      "Interest in life returns slowly, like color coming back into a room. You may feel ready for a short outing, a phone call or a task that had been sitting untouched. Honor this with small steps rather than a full reinvention. If the flatness lingers or feels deeper than usual, tell someone you trust so you are not left alone with it.",
    ],
  },
  "cups-5": {
    general: [
      "Loss is real and deserves its time, and it shows up as a heavy mood, replaying what went wrong and a narrow view that keeps your eyes on what has spilled. Allow the sadness without trying to hurry through it. When you are ready, turn your head, even slightly, toward what remains: people, skills, memories and possibilities that survived. Both things are true, and you can hold them together.",
      "The worst has passed and the turning has begun. You may notice you can speak about the loss without being flattened by it, or that something stable is beginning to look useful again. The shadow is staying in regret, going over the same scene hoping it will end differently. Forgive yourself for what you could not have known, and take one step toward what is left.",
    ],
    love: [
      "A breakup, betrayal or distance has left you grieving, and the ache is natural. Focus tends to fall on what you lost, which makes it hard to see the friends or family still standing with you. Let yourself cry and talk about it, and do not make big decisions from the lowest point. Allow someone close to sit with you, and be willing to be cared for.",
      "You are moving through the loss and starting to forgive, perhaps including yourself. Contact with others feels possible again, and the story you tell about what happened is gentler and less absolute. The shadow is looping through blame and what-ifs. Write down what you learned about your needs, then do one ordinary thing with someone who makes you feel safe.",
    ],
    career: [
      "A setback has landed, such as a lost position, a failed project or a client leaving. Disappointment is understandable, and so is embarrassment. Spend a little time on the lessons, then take inventory of what still stands: your skills, your reputation, your network and the work that did succeed. Having a clear list makes the next step visible and reduces the urge to retreat from your field.",
      "You are starting to put the setback in perspective. You can talk about it without flinching, and some of the lessons are clear enough to apply. The shadow is rumination, where old regret makes you hesitant to apply, pitch or try again. Debrief the failure honestly with a mentor, extract three practical changes, and then submit one application or proposal this week.",
    ],
    health: [
      "Grief is sitting in your body, and it may show as heaviness, tears or a low appetite for things you used to like. This is a natural response to loss, and it needs patience instead of efficiency. Keep routines simple and gentle, with regular meals, sleep and a little daylight. Let a trusted person stay near, and let the sadness come and go without being judged.",
      "Some of the weight is lifting, and your energy slowly returns. You may find yourself hungry again, willing to step outside or able to laugh for a moment without guilt. Honor that without rushing, and if sorrow keeps replaying or feels too heavy to carry, reach out to someone who can support you. Healing is not linear, and setbacks within it are ordinary.",
    ],
  },
  "cups-6": {
    general: [
      "Something from the past returns with warmth. It could be a place, a person, a song or a memory that makes you feel safe and simple again, which is a gift when it is used well. Take the kindness, the playfulness and the generosity it brings, and carry them into the present. A small act of giving, with no strings attached, fits the mood perfectly.",
      "The past has too firm a grip. You may be measuring today against a golden version of how things used to be, avoiding change because it feels like loss, or dwelling in a memory that was less perfect than you recall. Honor what was good about it. Then ask what you actually need now, and take one step into something that belongs to the present.",
    ],
    love: [
      "Tenderness and familiarity bring comfort. You might reconnect with someone from your past, return to shared rituals with a partner, or feel a sweet softness toward family you grew up with. Share memories and let them deepen your bond, and express affection in simple, playful ways, like a handwritten note or a favorite meal. The innocence of early affection is a resource, not a regression.",
      "Nostalgia is crowding out what is in front of you. You may hold up an old relationship as the standard, compare a partner to a former version of them, or keep returning to someone who belongs to another chapter. Memories are real, but they are edited. Name what you are truly missing, and look for it in the present, with the people actually here.",
    ],
    career: [
      "Familiarity helps your work, since an old colleague, a former client or a return to a field you know well opens a door and eases the way. Generosity, mentoring and teaching what you know bring particular satisfaction. Bring a childlike curiosity back into your tasks, since play often unlocks fresh ideas. Do not overlook the value of relationships built over many years and many projects.",
      "Loyalty to how things were is holding you back. You may resist new tools, cling to a role that has changed or measure every team by a better time that never quite was. Respect what worked, then decide which parts are worth carrying forward. Learn one new skill or method this month, and let your experience be an advantage rather than a reason to avoid change.",
    ],
    health: [
      "Gentle memories and familiar comforts restore you. Favorite foods, old music, time with long-standing friends or a visit somewhere you felt safe can ease tension and soften your mood, so use these comforts on purpose and pair them with light movement or time outdoors so that the good feeling reaches your body. A little play, with no goal attached, is a legitimate form of care.",
      "Looking backward has become a place to hide. You may lean on old habits, comforts or stories to avoid feelings in the present, and the soothing wears thin. Honor the memory, and notice what feeling it is covering. Then build one new, small routine that belongs only to this stage of your life, such as a different walk or a new evening ritual.",
    ],
  },
  "cups-7": {
    general: [
      "Too many possibilities glitter at once, and not all of them are solid. It shows up as daydreaming, a head full of plans, and a pull toward whatever looks most dazzling. Imagination is a gift, but it needs a filter. Write the options down, mark what each would truly require, and strike those that rest on wishes, then pick one and make a first concrete move.",
      "The mist starts to clear, or it thickens into overwhelm. If it clears, you see which options have substance and make a decision you can stand behind. If it thickens, you flit between ideas without finishing any of them and feel vaguely stuck. Reduce your list to two choices, give yourself a deadline, and let a trusted friend ask the practical questions.",
    ],
    love: [
      "Romantic possibilities tempt you, and some are partly fantasy. You may be drawn to an idealized picture of someone, torn between several people, or imagining a future that has little to do with who they are. Pay attention to how someone behaves over time rather than how they feel in your imagination. Ask direct questions and let their actions answer.",
      "You are seeing someone or something more clearly, and the daydream loses its grip. This can lead to a grounded decision to commit, to leave or to wait. The shadow is a head so full of options that no one gets a real chance. Pick one person or path to give honest attention, and judge it by what actually happens.",
    ],
    career: [
      "Opportunities, ideas and ambitions are competing for your attention, and not all of them are viable. A shiny venture, a vague promise or an inflated pitch may appeal more than steady, real work. Check each option against evidence such as numbers, references and timelines. Choose the one that matches your strengths and values, then commit enough time to see whether it holds up.",
      "Clarity arrives, and you can finally weigh your options honestly. A pitch loses its sparkle, or one path proves worth pursuing, and a firm decision follows. If clarity does not arrive, scattered effort means nothing gets finished and your reputation suffers quietly. Narrow your focus to one main project and finish it before you revisit the others from a position of strength rather than distraction.",
    ],
    health: [
      "A busy mind full of images, worries and wishes can scatter your energy. You may feel tired from thinking in circles, drawn to escapism or tempted by quick fixes that promise much. Ground yourself in the body with a short walk, a stretch or a plain meal. Choose one wellbeing habit to practice, instead of trying five, and see how it feels after two weeks.",
      "Some of the fog lifts, and you can tell what actually helps from what only distracts. That understanding lets you drop habits built on wishful thinking and keep ones that support you. If overwhelm persists, simplify. Reduce choices in your daily routine, limit screen time late at night and write down what you are truly feeling so it takes up less room in your head.",
    ],
  },
  "cups-8": {
    general: [
      "You are leaving something that looks fine but no longer feeds you. It shows up as a quiet inner no, a growing sense that you have outgrown a place, a role or a pattern, and a pull toward something deeper even though you cannot name it. This is a deliberate act and not a failure. Take what you need, say your goodbyes honestly, and walk toward what feels truer.",
      "You hesitate on the threshold. Fear, habit or guilt may keep you in a situation you know is hollow, or you may wander without direction, leaving and returning, never quite arriving. The cost is a slow loss of energy and meaning. Name what you are afraid to lose, then take one real step, such as a conversation, a deadline or a first small change.",
    ],
    love: [
      "A relationship that cannot meet your deeper needs is coming to an end, or you are stepping away from a pattern of settling. There may be sadness and affection mixed in with your decision, and that is normal. Be honest and kind when you speak, and do not wait for a dramatic reason. Allow yourself to grieve what was good as you move toward something more genuine.",
      "You remain in a connection that no longer fits, or you drift between people without choosing. Comfort, fear of being alone and hope that things will change on their own can all keep you in place. Ask what you are really staying for. If the answer is only fear, begin preparing for change, and if it is love, say what needs to shift.",
    ],
    career: [
      "A position that looks successful on paper feels empty, and you are ready to move on. This may mean leaving a job, a field or a title that no longer matches your values. Plan the exit with care, including finances and references. Be clear on what you want to find, such as meaningful work, humane culture or creative freedom, rather than only what you want to escape.",
      "You are staying in work that drains you, or you keep trying new directions without settling into any of them. Security, status and loyalty can all hold you in place. Take stock of what you would miss and what you would gain. Set a date for a decision, talk to someone who has made a similar move, and begin one small step toward it.",
    ],
    health: [
      "Walking away from what depletes you is a healthy act. This may mean easing out of a draining commitment, a toxic environment or a habit that keeps you tired. Expect a mix of relief and sadness, and give yourself quiet time to adjust and honor the loss without regret. Choose routines that support the person you are becoming, and let go of those that served the old situation.",
      "Staying in a draining situation or restlessly changing course is wearing you down. You may feel low-grade tired, uneasy or stuck, with a sense that something has to shift. Be curious about what you are really staying for. Make one small change to your daily life this week, such as a boundary or a rest period, and watch how your energy responds.",
    ],
  },
  "cups-9": {
    general: [
      "A wish comes true, or you see that you already have more than you thought. Contentment shows up as ease, appreciation and a willingness to simply enjoy what you built. Take time to savor it without guilt or apology, and say thank you to the people who helped you. Satisfaction is not complacency, and letting yourself feel it makes you generous and more settled when new challenges arrive.",
      "Having what you wanted does not deliver the satisfaction you expected, or you chase pleasure to avoid noticing the gap. It can look like smugness, constant treats, or a restless sense that something is still missing. The issue is often what the goal stood for. Ask what you hoped it would give you, and look for ways to find that feeling directly.",
    ],
    love: [
      "Emotional satisfaction is available, either in a relationship that feels good or in your own company. You may be enjoying affection that is easy, a partner who knows how to make you feel cared for, or a simple contentment with your life as it is. Express gratitude out loud. Let enjoyment be uncomplicated, and resist searching for flaws that spoil a good thing.",
      "Everything looks right and still feels hollow. You may take a partner for granted, seek excitement elsewhere or get what you thought you wanted and find it unfulfilling. Comfort can turn into complacency if no one is paying attention. Ask honestly what is missing, whether it is depth, honesty or shared meaning, and have the conversation instead of filling the gap with distraction.",
    ],
    career: [
      "Your effort has paid off with recognition, security or a goal reached. This is a good time to take pride in what you built and acknowledge the colleagues who helped. Savor it long enough to feel it. Then decide what contentment at work looks like for you going forward, such as steady pace, meaningful tasks or stability, and protect it from the next urgent demand.",
      "Achievement has not brought the satisfaction you imagined, or comfort has made you coast. You may chase the next title to quiet a restless feeling, or let standards slip because the pressure is off. Check whether the goal matched your values. Set a new target that stretches you in a way you care about, and share credit generously so success stays grounded.",
    ],
    health: [
      "Comfort, appetite and enjoyment are part of wellbeing, and you can allow them now. A good meal, a warm bath, a satisfying evening or a sense of ease in your body all count as care. Pay attention to what genuinely nourishes you. Enjoy it without calculating a penalty afterward, and let gratitude do some of the work of keeping you balanced.",
      "Pleasure has started to stand in for something deeper. You may reach for treats, screens or comforts to fill a gap, then feel oddly flat afterward. This is not a moral failing, just a signal that a different need is unmet. Notice what you are looking for, whether rest, closeness or purpose, and offer yourself that more directly alongside simple enjoyment.",
    ],
  },
  "cups-10": {
    general: [
      "Emotional fulfillment settles into daily life, showing up as a sense of belonging, shared values and a home, whether of family or chosen people, where you feel secure. This is built from ordinary care repeated over time. Notice it, say it out loud, and protect it with small rituals such as meals together or a regular call. Contentment grows when it is acknowledged.",
      "The picture looks harmonious but something underneath is out of tune. Values may differ, family tension may be unspoken, or you may be holding an idealized image of happiness that real life cannot match. The pretense wears everyone down. Choose one honest conversation about what each person actually needs, and accept that a good home is a work in progress rather than a finished portrait.",
    ],
    love: [
      "Deep, lasting love is taking root, and it shows in steady safety, shared plans and family warmth. You may be building a home, strengthening ties with relatives or realizing that your closest people have become a true support system. Celebrate this with attention rather than spectacle. Do small things regularly, such as sharing meals, honoring traditions and speaking openly about what makes you feel secure.",
      "There is a gap between the image and the reality at home. Family discord, differences in values, or pressure to look happy may be causing quiet distance. Perfection is not the goal and trying for it can create more strain. Speak honestly about what is not working, and look for common ground on the values that matter most to each of you.",
    ],
    career: [
      "Your work and values line up, and the result is lasting satisfaction. The team feels like a community, the mission feels worthwhile, and your job leaves room for a good home life. If you lead, cultivate this deliberately through fair treatment, transparent decisions and care for people beyond productivity. If you are choosing a path, favor the one where you can be fully yourself.",
      "Something about your work conflicts with what you hold dear. A company culture may say one thing and do another, or your job may crowd out the people you love. The strain builds slowly and often shows up first as dread on Sunday evenings. Identify the value that is being violated most, and decide whether it can be addressed through a conversation, a boundary or a change of workplace.",
    ],
    health: [
      "Emotional security supports your whole system. Being around people who feel like home eases tension, improves rest and gives you a baseline of calm. Lean on that support without apology, and offer the same in return. Regular family meals, shared routines and time in a place that feels safe all contribute to quiet, lasting wellbeing, even on days when nothing else is going smoothly.",
      "Tension at home or the pressure to appear happy is taking a toll. You may feel tired from keeping the peace, or unsettled by the gap between how things look and how they feel. Carve out a small space that belongs to you, with rest and honest reflection. Accept the real, imperfect support available, and ask for help where it is missing.",
    ],
  },
  "cups-page": {
    general: [
      "A gentle, curious energy arrives with a message or an impulse. It might be an unexpected invitation, a creative idea, a flicker of intuition or news that touches you. Treat it as worth a look and respond with openness and a little playfulness, and keep a notebook handy for whatever follows. Small, tender moments often point toward something larger than they first appear to.",
      "Feelings run high and are hard to manage. You may be oversensitive, easily hurt by small things, or swept by moods that make it difficult to think clearly. A creative idea may stall, or a message may disappoint. Give yourself time before replying or deciding, and name what you feel, ask what it needs and keep one small creative habit going, even when motivation is low.",
    ],
    love: [
      "A tender overture arrives, whether a shy admirer, a sweet message or a heartfelt gesture from someone close. Your own feelings may be soft and slightly nervous. Respond with sincerity and let things unfold at a gentle pace, because small acts, such as a note, a shared playlist or a thoughtful question, say more than grand statements. Stay curious about the other person.",
      "Emotional immaturity gets in the way. You or someone near you may sulk, avoid hard conversations, read too much into a short text or imagine a romance that has not been built. A message may disappoint, so slow down and check what is actually being said and done. Talk plainly about feelings, and give the connection time to grow into something real.",
    ],
    career: [
      "A creative or intuitive approach opens a door at work. You may be offered a project that calls for imagination, receive encouraging feedback, or find that curiosity helps you solve a problem others missed. Begin as a learner and experiment freely, and share early drafts with someone supportive. Work that lets you express something personal tends to improve when you stay open to feedback.",
      "A creative block or oversensitivity to feedback is slowing you down. Criticism may feel personal, a promising idea may stall, or news about a project may be discouraging. Dreaming without a plan keeps you from finishing, so separate the work from your sense of worth. Break the project into small, practical tasks, ask for specific feedback and complete one thing, however modest.",
    ],
    health: [
      "Your feelings are close to the surface, and giving them an outlet helps. Drawing, music, journaling, dance or time near water can let emotions move through you. Treat this as ordinary self-care rather than indulgence, a way of keeping small feelings from piling up into large ones. Pay attention to what your body says as you express yourself, and let yourself be a beginner at something that brings quiet pleasure.",
      "Mood swings or heightened sensitivity are unsettling your days. Small things may bring tears or irritation, and it can be hard to tell what you actually need. Give your feelings room without letting them make every decision. Keep regular sleep and meals, step away before replying to anything upsetting, and talk to someone patient when emotions feel too big to sort out alone.",
    ],
  },
  "cups-knight": {
    general: [
      "An idealistic, heartfelt energy is in motion, and it may arrive as an invitation, an offer or your own desire to follow something beautiful and meaningful. Move with it, because romance and imagination help you see what is possible. Stay aware of how things look in daylight, though. Ask what is being promised and what is being done, and let your feelings guide you without fully taking the wheel.",
      "Charm and imagination run ahead of substance. Someone, perhaps you, may promise more than can be delivered, drift on moods, or choose escape over honesty. Things look better in the telling than in practice, so test what you are hearing against what you can observe in daily behavior. Ground the dream in a modest, realistic step, and ask for plain answers before you commit.",
    ],
    love: [
      "A romantic gesture is on its way, whether a proposal, an invitation or a thoughtful surprise. A partner or admirer may be attentive, poetic and keen to please. Receive it with warmth and show your own feelings freely, enjoy the courtship, and pay attention to consistency over time. Real romance includes follow-through on small, everyday things, like showing up on time and answering messages.",
      "Charm may be hiding something. A partner or suitor may say all the right words and then disappear, or you may be the one chasing a fantasy instead of a person. Jealousy and mood swings can complicate things. Slow down, look at behavior across weeks rather than moments, and ask clearly where things are going before investing your heart further.",
    ],
    career: [
      "An appealing offer arrives with grace, perhaps a creative commission, a role in a mission you believe in or an invitation to collaborate. You succeed by bringing sincerity and imagination to your work, and clients respond to your care. Follow what you love, and still read the details. Confirm the terms, scope and payment before you say yes with your heart alone.",
      "An attractive opportunity may not hold up, or your own mood is steering decisions that need facts. Big promises, a beautiful pitch or a charming client can hide thin planning. You may also be coasting on daydreams, so ask for specifics in writing, check references, and keep deadlines and budgets in view. Let enthusiasm serve the work instead of replacing it.",
    ],
    health: [
      "Imaginative, romantic energy lifts your mood. You may be drawn to music, art, travel, nature or anything that stirs your heart, and these are valid forms of restoration rather than distractions from real life. Follow the pull, and keep one foot on the ground with regular meals, sleep and simple movement. Let yourself enjoy beauty, and use it to nourish your days and soften the harder ones.",
      "Moods are pulling you off course. Escapism, daydreaming or emotional ups and downs may disrupt your routines, and the pleasure of fantasy starts to cost you energy. Return to the basics, such as a steady schedule, fresh air and honest check-ins with yourself. Name what you are avoiding, and give it a small, practical response today, even if that is only a short walk or one honest message to a friend.",
    ],
  },
  "cups-queen": {
    general: [
      "Deep empathy and steady intuition guide you, and this energy listens before it speaks, senses what is beneath the surface and offers comfort without losing itself. It shows up as calm presence, wise attention and the ability to hold space for difficult feelings. Trust what you pick up, then check it gently against facts. Care for yourself with the same patience you offer others.",
      "Sensitivity turns into overwhelm. You may absorb the moods of those around you, take on responsibilities that are not yours, or give until nothing is left and then feel resentful. Boundaries feel like unkindness, though they make care sustainable. Practice saying no to one request this week, and spend a few minutes alone each day to find out which feelings are actually yours.",
    ],
    love: [
      "A deeply caring presence offers emotional security, whether it is a partner, a friend, a parent or you. Listening, patience and tenderness are the signs, and you love with real attention while keeping a clear sense of yourself. Let others be cared for by you, and let yourself be cared for in return. Honest, calm conversation is the foundation of this kind of closeness.",
      "Love turns into self-sacrifice. You or someone close may be anxious, overly accommodating or reliant on the other for emotional stability. Needs go unspoken, and moods become the language of the relationship, which leaves both of you guessing. Practice stating one need plainly each day, support each other without rescuing, and take responsibility for your own steadiness rather than expecting a partner to supply it.",
    ],
    career: [
      "Empathy is a professional strength, and you read a room well, build client trust through attentive listening and help colleagues feel heard. Roles in care, counseling, teaching, design or service suit this energy. Protect it with structure, such as set hours, time to decompress and clear limits on what you take home. Care that is sustainable keeps your work credible and your people loyal.",
      "Emotional labor is draining you. You may be the one everyone confides in, the person who smooths every conflict, or a caretaker running on empty. Resentment, moodiness and blurred lines follow, so decide which responsibilities are truly yours, and say no to the rest. Ask for support or recognition, and build recovery time into your schedule before burnout makes the choice for you.",
    ],
    health: [
      "Your intuition about your own needs is reliable right now. Listen to what your body and emotions request, whether it is solitude, water, gentle movement or a conversation. Treat self-care as part of caring for others, not as a competing demand. Create a calm space at home where you can rest, and keep a regular habit that helps you process the day.",
      "Carrying the feelings of others has worn you thin. You may be tearful, tired or unsure where your own emotions end and theirs begin. Retreat from the role of fixer for a while, limit time with draining situations, take a quiet hour each day, and let someone else look after you. Rest first, then decide what you can offer once your own reserves have refilled.",
    ],
  },
  "cups-king": {
    general: [
      "Emotional mastery steadies the room. This energy feels deeply and still responds with composure, offers counsel without drama and keeps generosity alive under pressure. It shows up as the ability to pause before reacting and to hear opposing views without defensiveness. Practice it by taking a breath before you answer, and let your feelings inform your choices without running them.",
      "Feelings are being controlled in unhelpful ways. You may bottle things up until they burst, go cold to avoid vulnerability, or use mood as leverage over others. Calm becomes a mask rather than a strength, so admit what you are feeling, first to yourself and then to someone trustworthy. Let composure follow honesty instead of replacing it, and watch for how your moods affect others.",
    ],
    love: [
      "A mature, dependable love is on offer, from a partner, family member or friend who stays steady through hard moments. They listen, keep promises and handle disagreement with kindness, even when they are tired. Bring the same to them. Show your feelings plainly, give advice only when it is asked for, and let your care be consistent, which matters more than occasional grand gestures.",
      "Emotions are being suppressed or used as a tool. A partner may go cold, deflect with charm, or turn volatile, leaving you unsure what is safe to say. You may do the same. Say clearly what you need and notice whether the response is respectful, and if tension keeps rising or you feel controlled, seek outside support and protect your emotional safety.",
    ],
    career: [
      "Calm authority shapes your work, and you lead or advise with fairness, absorb pressure without passing it down and keep team morale steady during hard weeks. Clients and staff trust your judgment because you listen first. Use that standing to mediate conflict, mentor others and make decisions that balance people with outcomes. Keep your own stress in check so your composure stays genuine.",
      "Suppressed stress or moodiness is undermining leadership. A manager may be unpredictable, withholding or quietly manipulative, and people learn to guard their words and stop bringing problems forward. You may be the one doing it, and trust declines before anyone says so. Be transparent about decisions, acknowledge mistakes, find a healthy outlet for pressure and invite honest feedback, even when it is uncomfortable.",
    ],
    health: [
      "Emotional steadiness supports your body. Responding instead of reacting lowers the background strain you carry, and regular practices such as breathing, time by water or quiet reflection help sustain it. Keep your heart open while holding firm routines, so that calm is a habit and not a performance. Check in with trusted people, and let yourself feel difficult emotions in manageable doses instead of storing them up.",
      "Feelings held in too tightly are creating tension. You may notice irritability, numbness or a sense of strain that builds until it spills out sideways. Find safe ways to name what you feel, whether through writing, exercise or a candid talk with someone you trust. Releasing emotion in small amounts is easier on you than waiting for a flood, and it leaves more energy for the rest of your day.",
    ],
  },
};

Object.assign(DEEP_READINGS, DEEP_CUPS);
Object.entries(DEEP_CUPS).forEach(([id, deep]) => {
  if (EXTRA[id]) EXTRA[id].deep = deep;
});
