"use strict";

/* ------------------------------------------------------------------ *
 * Combined summaries: Pentacles.
 * Field-dependent: one [upright, reversed] pair per selected set of
 * love / career / health contexts.
 * ------------------------------------------------------------------ */

const COMBINED_PENTACLES = {
  "pentacles-ace": {
    "love+career": [
      "A small seed of opportunity grows best when someone you care about shares in it, and a fresh venture gives you something concrete to build together. Mention your plan aloud, then take one practical first step.",
      "Missed openings at work can make you guarded with someone close, and distance at home leaves your ambitions without support. Ask what you each need before you pass on a promising idea.",
    ],
    "love+health": [
      "Starting a new habit together gives affection a practical form, and a body that feels nourished makes closeness easier to enjoy. Share a meal you both prepare, then keep that small routine going.",
      "Neglected routines can leave you drained and short with someone dear, while strained closeness makes self-care slip further. Begin with one ordinary habit, such as regular meals, and let warmth return from there.",
    ],
    "career+health": [
      "A fresh opportunity feels sustainable when it fits a body that is rested and fed, and steady energy lets you act on the offer. Start small, and set a schedule you can actually keep.",
      "A promising offer can slip past when you are run down, and poor planning on the job in turn wears down your reserves. Pause before committing, and settle your basic routines first.",
    ],
    "love+career+health": [
      "A new seed of stability reaches all three areas: someone close gains a reliable partner, your work gains a first foothold, and your body gains a routine it can lean on. Start with one grounded habit and let each area share the benefit.",
      "Scarcity thinking spreads quickly, leaving you guarded with someone close, hesitant about new work, and tense in your body. Name what you actually have, plan one modest step, and give yourself time to rest while it takes root.",
    ],
  },
  "pentacles-2": {
    "love+career": [
      "Flexibility at work shows you how to stay light in close bonds, and a loved one who understands your schedule makes busy weeks easier. Agree on what matters most each week and adjust together as plans shift.",
      "Overcommitting at work leaves little attention for someone close, and neglected closeness adds weight to every deadline. Drop one low-value task, then give that freed hour to a person who matters.",
    ],
    "love+health": [
      "Giving time to someone dear and time to your own care can sit side by side when you plan both with intent. Keep a simple weekly rhythm, and let rest and affection each have a fixed place.",
      "Stretching yourself between others and your own needs leaves you scattered, and a tired body makes patience with loved ones thin. Say no to one request, and protect a block of time for restoring yourself.",
    ],
    "career+health": [
      "Handling several demands with a steady rhythm keeps both your output and your energy intact. Order your tasks by importance, and build short breaks into the day so you adapt without wearing down.",
      "Too many commitments blur your priorities, and mounting fatigue makes every task feel heavier than it is. Write the full list, cut what you can, and treat sleep as a real appointment.",
    ],
    "love+career+health": [
      "Balance is the shared thread here: a flexible schedule makes room for time with someone close, steady output at work, and enough rest for your body. Keep a short weekly plan and adjust it kindly when something shifts.",
      "Scattered effort pulls at everything at once, leaving little patience for someone close, mistakes in your work, and a body that runs on fumes. Choose your top priority for the week, and let the rest wait without guilt.",
    ],
  },
  "pentacles-3": {
    "love+career": [
      "Skill built in shared effort teaches you how closeness works too, since both reward clear roles and honest feedback. Invite someone you trust into a project, and say plainly what each of you contributes.",
      "Poor teamwork at work and unspoken expectations at home feed one another, leaving both feeling thankless. Define who does what in one setting, then borrow the same clarity for the other.",
    ],
    "love+health": [
      "Building something together, such as a shared routine for cooking or movement, strengthens trust and care for the body at once. Pick one practice you both can sustain, and let it grow over time.",
      "Going it alone with your habits can leave closeness feeling distant, and a worn-down body makes it harder to join in. Ask someone you trust to share one routine, and accept their support without apology.",
    ],
    "career+health": [
      "Good collaboration spreads the load, which protects your energy while your craft improves. Ask for input from capable colleagues, and let shared effort keep your pace sustainable rather than draining.",
      "Carrying a team project alone strains your stamina, and an exhausted state lowers the quality of everything you hand over. Delegate one piece clearly, and give your recovery the same attention as the deadline.",
    ],
    "love+career+health": [
      "Skilled cooperation links all three areas: trusted people share your workload, closeness gains from joint effort, and your body benefits from a lighter load. Ask for help on one specific task, offer something back, and notice how much easier the week feels.",
      "Going without support frays everything together, since unclear roles at work, a strained bond with someone close, and a tired body each deepen the others. Name one clear request, let someone share the weight, and accept that you were never meant to carry it all.",
    ],
  },
  "pentacles-4": {
    "love+career": [
      "Protecting your resources gives a solid base, and a loved one can feel that security as long as you remain open to them. Keep your finances orderly, and leave room to share time and attention.",
      "Clutching at control in your finances can leave someone close feeling shut out, and guarded closeness makes money worries louder. Loosen your grip on one small matter, and invite a calm talk about what you each need.",
    ],
    "love+health": [
      "A stable home routine gives your body steady ground, and that calm makes it easier to let someone dear in. Keep a few dependable habits, and share your space with warmth rather than rigid rules.",
      "Holding tight to your own space and habits can leave a loved one outside, and tension in the body tends to follow. Relax one rule this week, then notice how softer boundaries feel to you both.",
    ],
    "career+health": [
      "Careful saving and structure support a steady life, and a body that is not under constant strain helps you think clearly about money. Maintain your budget, and spend a little on something that restores you.",
      "Anxiety about money tightens your jaw and shoulders, and a body held in tension makes you cling to security even harder. Review your finances once, calmly, and then allow yourself a real rest.",
    ],
    "love+career+health": [
      "Security matters in each area, and so does flexibility: sound finances steady your work, a stable home eases your body, and relaxed hands leave room for closeness. Keep what you need, share what you can spare, and trust that generosity does not empty you.",
      "Gripping too hard on everything leaves a loved one at a distance, turns your finances into a source of dread, and keeps tension in your body. Release one small control, and let steadiness come from trust rather than hoarding.",
    ],
  },
  "pentacles-5": {
    "love+career": [
      "Hard times in your finances can make closeness feel precarious, yet someone near may be the very help you need. Be honest about the strain, and accept support without treating it as a verdict on your worth.",
      "Money pressure can push you to hide from someone close, and that isolation makes practical solutions harder to find. Share the real numbers with one trusted person, and let recovery begin with an honest conversation.",
    ],
    "love+health": [
      "Feeling left out in the cold strains both closeness and your sense of physical ease, yet a person nearby can offer warmth. Let someone in on how tired you are, and accept a meal or a gentle visit.",
      "Hardship leaves you withdrawn from someone dear, and isolation wears down your energy in turn. A way back is simple: one honest message, one shared meal, and some rest before you decide anything else.",
    ],
    "career+health": [
      "Financial strain wears on your energy, and a depleted state makes solutions harder to see, yet help is available. Seek a practical resource this week, and treat your rest as part of the plan, not a luxury.",
      "A long stretch of scarcity can erode your stamina and your confidence, though a turn toward recovery is possible. Ask about support programs or advice, and give yourself credit for how much you carry already.",
    ],
    "love+career+health": [
      "Hardship touches everything at once: money worries strain closeness, a tired body adds to the strain, and yet each area also holds possible help. Nothing here is a failing of yours. Reach out to one person, one resource, and one small act of care for yourself.",
      "Prolonged struggle can leave you hiding from someone close, stuck on money, and worn out in body, each feeding the others. Recovery begins with accepting a single offer of help, and you deserve that dignity. Take it slowly.",
    ],
  },
  "pentacles-6": {
    "love+career": [
      "Fair exchange at work and generosity at home reinforce each other, since both depend on giving without keeping score. Share your time or a resource freely, and accept what comes back with gratitude.",
      "Strings attached to a favor at work can sour a close bond, and one-sided giving at home makes professional dealings feel guarded. Clarify one unspoken expectation, and give only what you can offer freely.",
    ],
    "love+health": [
      "Giving and receiving care in balance lets affection feel safe, and being looked after eases the body in turn. Accept a kind gesture today, and offer one back without expecting anything specific.",
      "Care that runs only one way leaves you depleted or someone dear feeling indebted, and tiredness makes the imbalance harder to name. Say honestly what you need, and let support move in both directions.",
    ],
    "career+health": [
      "Fair pay and fair effort keep your energy sustainable, and a well-supported state makes you generous with colleagues. Ask for what you are due, and share your knowledge where it will do some good.",
      "Giving more than you receive on the job drains your reserves, and a drained state makes you resentful of unpaid favors. Set one limit on what you give, and ask for recognition that matches your effort.",
    ],
    "love+career+health": [
      "Balanced exchange runs through all three areas: fair terms at work, mutual care with someone close, and a body that is given as much as it gives. Notice where the flow runs both ways, and strengthen that pattern one small act at a time.",
      "Uneven giving shows up in each area, with debts or favors at work, resentment with someone close, and exhaustion in your body. Choose one place to restore balance first, and let the others follow at their own pace.",
    ],
  },
  "pentacles-7": {
    "love+career": [
      "Patience with a long project mirrors patience in a close bond, since both reward steady tending over quick results. Take stock of what has grown, and give someone you care about an update on your progress.",
      "Impatience with slow returns can sour your mood with someone close, and quiet frustration at home leaves your efforts feeling pointless. Reassess one goal honestly, then talk about what you really want from it.",
    ],
    "love+health": [
      "Slow, steady care builds both trust with someone dear and a body that feels well tended. Pause to see how far you have come, and keep going without demanding quick proof.",
      "Expecting fast results from yourself or from someone close breeds discouragement, and a weary body makes patience harder. Lower the pressure, and notice smaller signs of progress in both.",
    ],
    "career+health": [
      "Long-term effort pays off when you pace it, and a body that is looked after can sustain the wait. Review your progress calmly, and adjust your routine so it lasts the whole season.",
      "Feeling that your effort earns little can wear on your energy, and a depleted state makes poor returns look worse. Examine where your time is going, and shift it toward what truly yields something.",
    ],
    "love+career+health": [
      "Patient tending connects the three: a project ripens at its own speed, closeness deepens with steady attention, and your body rewards consistent care. Pause to assess honestly, then keep going at a sustainable pace, trusting that slow growth is still growth.",
      "Frustration over slow results can spill into everything, souring a bond with someone close, making your work feel futile, and leaving you restless in body. Reassess where your effort goes, set aside what yields nothing, and rest before you decide.",
    ],
  },
  "pentacles-8": {
    "love+career": [
      "Devotion to a craft shows how care is learned in a close bond too, one small, deliberate act at a time. Practice a skill you value, and bring the same attentiveness to someone who matters.",
      "Perfectionism at work leaves little attention for a loved one, and a dull routine at home makes the job feel more mechanical. Accept good enough on one task, and use that time for connection.",
    ],
    "love+health": [
      "Small, repeated acts of care, such as shared walks or a regular dinner, build closeness and strength alike. Keep your practice modest and consistent, and let improvement come without hurry.",
      "Rigid routines can crowd out spontaneity with someone dear, and pushing your body to meet a perfect standard leaves you spent. Loosen one expectation, and let a moment of ease count as progress.",
    ],
    "career+health": [
      "Steady practice sharpens your skill, and a body that gets regular rest holds focus longer. Set aside protected time for detailed work, and end each day with a clear stopping point.",
      "Repetitive effort without purpose dulls your focus, and a body pushed past its limits makes errors more likely. Step back from the details, and rest before you refine anything further.",
    ],
    "love+career+health": [
      "Steady craftsmanship applies to every area: skills improve with practice at work, closeness grows through attentive habits, and your body gains from a dependable routine. Keep the effort small, regular, and focused on quality rather than speed, and let improvement arrive quietly.",
      "Obsessing over detail narrows your life, crowding out time with someone close, turning your work into a grind, and leaving your body stiff and tired. Let one task be imperfect, and spend the saved energy on rest or company.",
    ],
  },
  "pentacles-9": {
    "love+career": [
      "Self-made comfort lets you enter a close bond as an equal rather than out of need, and independence in your work earns you a quiet confidence. Enjoy what you have built, and share it generously.",
      "Overworking to prove your independence can leave you lonely in a close bond, and surface comfort at home may hide a gap in connection. Slow your pace, and let someone see the person behind the success.",
    ],
    "love+health": [
      "Being at ease alone makes you a more settled presence with someone dear, and pleasures such as good food and a calm space nurture your body. Enjoy a small luxury, and invite someone to share it.",
      "Self-sufficiency taken too far leaves you isolated, and living on routine comforts can hide real tiredness. Admit that you could use company, and let one person into your quiet space.",
    ],
    "career+health": [
      "Financial independence earned by effort lets you work at a comfortable pace, and a body that enjoys its rewards stays resilient. Take pleasure in what you have built, and keep your standards realistic.",
      "Working to keep up appearances can drain your energy, and spending beyond your means adds a worry that follows you off the clock. Simplify one expense, and take a day that is truly off.",
    ],
    "love+career+health": [
      "Independence you built yourself reaches each area: your work earns its comfort, your body enjoys the benefits, and closeness comes from choice rather than need. Savor what you have, and share it with someone you trust, without apology.",
      "Chasing the look of success can leave you overextended in your finances, lonely beside someone close, and tired in body. Slow down, simplify one expense, and ask what comfort would feel like if no one were watching, then choose that.",
    ],
  },
  "pentacles-10": {
    "love+career": [
      "Lasting security grows from commitment at home and steady effort in your work, each protecting the other over time. Think about what you want to pass along, and make one decision that serves your long-term plans.",
      "Family tension can unsettle your finances, and money disputes in turn strain the people closest to you. Talk openly about shared obligations, and put one agreement in writing before small issues grow.",
    ],
    "love+health": [
      "A secure home and people who stand by you give your body the calm it needs, and good care for yourself strengthens what you share. Gather those close to you, and pass along healthy habits.",
      "Tension within the family can wear you down, and a tired body leaves little patience for old conflicts. Set one boundary around an ongoing disagreement, and give yourself real time to recover.",
    ],
    "career+health": [
      "Long-term stability lets you ease off constant striving, and a body that rests can keep you productive for years. Plan for the future with care, and protect the habits that sustain your energy.",
      "Instability in your finances can bring constant pressure, and the strain of that pressure leaves little energy for planning ahead. Secure one basic safeguard first, and take measured steps from there.",
    ],
    "love+career+health": [
      "Lasting foundations tie the areas together: stable finances support those you care about, a settled home eases your body, and good health lets you enjoy what you built. Consider what you want to leave behind, and take one step toward it.",
      "A shaky foundation shows in every area at once, with money tension at work, conflict among those close to you, and fatigue in your body. Secure one practical safeguard first, then speak plainly with those who share the burden.",
    ],
  },
  "pentacles-page": {
    "love+career": [
      "Curiosity and willingness to learn help you in a close bond and in your career alike, since both reward patient attention. Pick one skill to study, and share what you discover with someone you trust.",
      "Daydreaming without action can stall your plans, and uncertainty at home keeps you from committing to a path. Turn one vague hope into a small, concrete task, and tell someone close what you intend.",
    ],
    "love+health": [
      "Learning what your body needs and learning what someone dear needs call for the same patient curiosity. Try a small new habit, and ask a loved one about theirs with genuine interest.",
      "Good intentions that never become habits leave you restless, and drifting away from someone close makes the drift feel worse. Choose one simple routine, and invite a loved one to keep you company.",
    ],
    "career+health": [
      "A new course of study or training works best at a sustainable pace, and a body that gets steady care keeps your curiosity strong. Start with one modest goal, and schedule learning where you have energy.",
      "Procrastination feeds stress, and low energy makes starting even harder. Break one goal into the smallest possible step today, then do it before you start doubting whether it is worth the effort.",
    ],
    "love+career+health": [
      "Earnest learning supports all three areas: new skills advance your work, curiosity strengthens closeness, and a few caring habits ground your body. Choose one small, practical project, and let it teach you at its own pace without demanding mastery.",
      "Unfinished plans pile up and cloud everything, leaving you unfocused at work, hesitant with someone close, and sluggish in body. Pick one concrete step, complete it today, and let that small win rebuild your momentum before you plan the next one.",
    ],
  },
  "pentacles-knight": {
    "love+career": [
      "Reliability earns trust in both settings, since steady follow-through shows someone close that you mean what you say, and shows colleagues the same. Keep your commitments, and let consistency speak for you.",
      "Stubborn routine at work can leave someone close feeling unseen, and a stale pattern at home makes professional effort feel flat. Change one habit this week, and ask what would make things feel fresh.",
    ],
    "love+health": [
      "Slow, dependable care builds trust with someone dear and strength in your body alike. Keep to a simple routine you can sustain, and show up for a loved one in small, consistent ways.",
      "Getting stuck in a rut can dull closeness, and a body that never changes its pattern may feel stiff or flat. Try one new activity together, and trade strict routine for a little play.",
    ],
    "career+health": [
      "Methodical effort gets results, and a steady schedule with regular rest keeps your energy from fading midway. Pace yourself like a long walk, and review your progress at set intervals.",
      "Rigid habits can turn productive effort into boredom, and low energy makes any change feel daunting. Adjust one part of your routine, and add a break you have been skipping.",
    ],
    "love+career+health": [
      "Dependable effort supports every area: steady work builds your income, consistent presence strengthens closeness, and a regular routine sustains your body. Keep a reliable pace, and do not mistake slowness for failure or for a lack of care, since patience is its own form of effort.",
      "Stagnation spreads across the board, with dull days at work, a stale pattern with someone close, and a body that feels sluggish. Break the routine in one small way, and see which area responds first, then build on that.",
    ],
  },
  "pentacles-queen": {
    "love+career": [
      "Practical warmth lets you provide for those you care about without losing yourself in the work, and generous care becomes part of how you do your job. Create comfort for someone close, and take pride in your competence.",
      "Giving everything to your job or to others can leave you with little to share, and insecurity at home makes work an escape. Set a firm limit on your hours, and spend a protected evening with someone close.",
    ],
    "love+health": [
      "Nurturing a home with care gives both closeness and your body a place to settle, and you offer more when you are also looked after. Prepare something nourishing, and let someone dear care for you in return.",
      "Putting everyone else first leaves your own needs unmet, and a worn-down body leaves little warmth to give. Take back one hour for yourself, and let a loved one see that you need it.",
    ],
    "career+health": [
      "Practical stewardship of your finances and your energy lets abundance build without strain. Run your working day like a well-kept kitchen, with order, nourishment, and breaks that you protect.",
      "Overwork in the name of providing can leave you depleted, and neglecting your needs undermines the very security you seek. Cut one task from your day, and spend that time on basic self-care.",
    ],
    "love+career+health": [
      "Grounded generosity connects all three areas: you provide well at work, create warmth for someone close, and look after your own body as part of that care. Tend to yourself first, and let comfort spread outward from there.",
      "Self-neglect carries through each area, as overwork at the office, smothering care for someone close, and exhaustion in your body feed one another. Reclaim one evening for yourself, and allow others to carry a share of the load.",
    ],
  },
  "pentacles-king": {
    "love+career": [
      "Steady leadership in your work gives a loved one a sense of security, and loyalty at home gives you a firm base for ambition. Offer reliability and generosity in equal measure, and lead with patience.",
      "Stubborn control in your finances can make someone close feel managed rather than trusted, and a rigid home life makes your professional choices more guarded. Share a decision with them, and listen before you settle it.",
    ],
    "love+health": [
      "Providing a stable, comfortable home lets someone dear feel safe, and enjoying life in moderation keeps your body at ease. Share good meals and calm routines, and let your presence be a source of steadiness.",
      "Indulgence or rigidity can hold you back, and a loved one may feel the distance when comfort replaces attention. Set a sensible limit on one habit, and spend real time with someone instead.",
    ],
    "career+health": [
      "Disciplined stewardship of resources lets you build lasting security, and a body that is cared for keeps your judgment sound. Keep your habits regular, and treat rest as an investment, not a reward.",
      "Poor money decisions and overindulgence can feed on each other, and a stubborn refusal to adjust makes both worse. Review one expense honestly, and make one change that supports your energy.",
    ],
    "love+career+health": [
      "Steady stewardship holds it all together: reliable earnings secure your work, a warm home supports someone close, and measured habits keep your body strong. Lead with discipline and generosity, and enjoy what you have earned without hurry or guilt.",
      "Rigid control and overindulgence can shake each area, with careless money choices at work, distance from someone close, and neglect of your body. Admit one blind spot, adjust it, and invite honest feedback from a person you trust.",
    ],
  },
};

Object.assign(COMBINED_READINGS, COMBINED_PENTACLES);
Object.entries(COMBINED_PENTACLES).forEach(([id, combined]) => {
  if (EXTRA[id]) EXTRA[id].combined = combined;
});
