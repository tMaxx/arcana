"use strict";

/* ------------------------------------------------------------------ *
 * Deep-dive readings: Pentacles.
 * Long-form interpretations for readers who want more than the short
 * meaning. One pair per reading context; [upright, reversed].
 * ------------------------------------------------------------------ */

const DEEP_PENTACLES = {
  "pentacles-ace": {
    general: [
      "A practical seed arrives in your hands, and it is small enough to plant today. It may be an offer, a modest sum of money, a patch of space or a plan that suddenly looks workable. Opportunity of this kind rewards people who prepare the ground. Decide where it will live, set aside the first hour or the first dollar, and begin before you start polishing the idea in your head.",
      "An opening is passing by, or it was never given enough groundwork to take root. You may notice vague plans without dates, money that leaks away without a purpose, or a good chance that went unanswered because the timing felt inconvenient. Scarcity often follows poor preparation more than bad luck. Pick one concrete project, write down what it needs, and take the smallest step that makes it real.",
    ],
    love: [
      "Something solid begins between you and another person, built on action rather than promises. It might be moving in together, a family commitment, a friendship that becomes dependable or a partner who simply shows up. Pay attention to who makes room in their calendar and their home. Respond in kind with practical gestures, and let trust grow from repeated, ordinary proof.",
      "A relationship has potential but little to stand on. Plans stay vague, effort is uneven, or expectations are so large that nobody can meet them. A caring gesture may be overlooked because it is not dramatic enough. Ask what a realistic next step looks like, such as a standing dinner, a shared budget or a clear visit schedule, and agree to try it for a month.",
    ],
    career: [
      "A real chance to earn arrives, whether as a job offer, a client, an investment or the first stage of a venture of your own. It has weight and numbers attached, so treat it with care. Read the terms, estimate the costs and decide how much time it needs. Start with a modest, well-funded version, because steady early growth usually outlasts a splashy launch.",
      "An income opportunity slips away or turns out to be thinner than it looked. Common causes are rushed financial decisions, missing paperwork, a plan without a budget or a pitch that promised more than it could deliver. Before the next move, review your numbers honestly and look for the gap. Rebuild the plan in smaller pieces, and commit money only to the parts you can afford to lose.",
    ],
    health: [
      "Your body offers a fresh start, and the best use of it is simple. You may feel a bit more energy, a renewed interest in cooking, walking or setting up a better routine at home. Treat it as practical groundwork for wellbeing rather than a total overhaul. Choose one habit that is easy to repeat, such as a regular meal time or an evening wind-down, and protect it.",
      "Care for yourself has been put off, and the delay is starting to register as low energy or a general feeling of being unprepared. Good intentions keep floating above daily life without landing anywhere. Skip the grand reset. Pick one small, concrete action, like stocking food you actually enjoy or booking a regular time to rest, and let the routine settle before adding anything else.",
    ],
  },
  "pentacles-2": {
    general: [
      "Several demands are in motion at once, and you are managing them with a light, adaptable touch. Time, money and attention keep shifting, and you respond by rearranging rather than panicking. This works best when you know your real priorities and can say what gets done first. Keep a simple list, leave some slack in the week, and accept that balance is something you adjust daily.",
      "Too many things are in the air, and the effort of keeping them there is wearing you down. Small items slide, deadlines pile up, and you spend more energy tracking tasks than finishing them. The problem is usually volume rather than ability. Choose what can be postponed, delegated or dropped altogether, and give your remaining attention to the few things that truly need it.",
    ],
    love: [
      "You are fitting a relationship into a busy life, and you do it with humor and flexibility. Shared calendars, swapped chores and the occasional rushed meal together are part of how the bond works right now. Be generous about the logistics. Agree on who handles which tasks, protect a regular stretch of time as a pair, and keep the mood light when plans change.",
      "The practical side of life is crowding out the people in it. Chores, bills and schedules go unshared, and one person ends up coordinating everything while the other drifts. Resentment grows from small dropped tasks more than big arguments. Sit down together, sort out who carries what, and drop some commitments so that time with each other stops being the first thing sacrificed.",
    ],
    career: [
      "You are holding several streams of work or money together, and your skill is in keeping them moving. It could be two jobs, a side project, tight cash flow or a mix of clients with competing needs. Stay flexible and track the numbers weekly. A simple system for invoices, deadlines and bills will protect you more than extra hours will.",
      "Your workload or finances have outgrown the way you manage them. Invoices go unsent, bills overlap and commitments stack up faster than you can honor them. Taking on more rarely solves it. Write out every obligation with its due date and cost, rank them by consequence, and renegotiate or release the least essential before something important gives way and costs you more.",
    ],
    health: [
      "Your energy is being spread across many responsibilities, and you are handling it with decent rhythm. You may feel busy but able, adjusting meals, sleep and movement as the days change. The task is to keep your own needs in the rotation. Build short, flexible habits like a stretch between tasks or a real lunch break, and let them bend instead of break.",
      "Constant juggling has left you scattered and tired. Meals get skipped, rest is irregular and your mood swings with the daily load. It is hard to feel steady when everything is urgent. Trim your schedule by one commitment this week, set a fixed bedtime and a regular meal, and let that small piece of order give your nervous system something to rely on.",
    ],
  },
  "pentacles-3": {
    general: [
      "Good work is happening because several capable people are doing their parts well. Your skill is noticed, your input shapes the result and the project gains from each contribution. This is a time to build something with others rather than alone. Be clear about what you offer, listen to those who know other pieces of the craft, and accept that the finished result will be better than any one plan.",
      "Effort is not adding up because people are pulling in different directions or not at all. Standards slip, feedback goes ignored and each person guards their own corner. You may feel your skill is overlooked, or you may be the one cutting corners. Return to the shared goal, agree on who owns which task, and raise your standard on the piece that belongs to you.",
    ],
    love: [
      "You and the people close to you are building a shared life, piece by piece, with each person adding something useful. It might be renovating a home, raising children, running a household budget or working on a family project. Appreciation matters here. Notice what each person contributes, say thank you for specific tasks, and keep decisions about the shared space truly shared.",
      "The work of a shared life is falling unevenly, and the person carrying more feels unseen. Housework, planning and emotional upkeep may rest on one set of shoulders while the other treats it as background. Complaints sound like nagging because the pattern is old. Name the specific tasks, propose a fair split and check in after a few weeks to see whether it holds.",
    ],
    career: [
      "Your craft meets a team that values it, and the work reflects real quality. You may be contributing to a project where roles are clear, a mentor or client recognizes your skill, or your reputation gets a visible lift. Do the job to a standard you are proud of. Document your contributions, ask for credit where it is due and stay open to input from specialists.",
      "Collaboration at work is producing weak results. Roles are unclear, quality control is missing or your ideas are dismissed without being tried. Colleagues may deliver late, or you may be coasting on a team that does not value the effort. Clarify responsibilities in writing, ask for specific feedback and, if the environment will not improve, build your skills somewhere that treats good work seriously.",
    ],
    health: [
      "Your wellbeing benefits from skilled support and shared effort. A coach, a class, a group or a knowledgeable friend can help you build habits with more structure than you manage alone. Take pride in learning the craft of looking after yourself. Show up consistently, ask questions and let others contribute their experience, because steady, guided practice tends to produce sturdy results.",
      "You are trying to look after yourself without enough support, or the support around you is poorly matched. Advice may conflict, routines have no structure and a sense of going it alone adds strain. Quality matters more than quantity. Choose one or two trusted sources of guidance, ask a specific person for help with a specific habit, and let go of scattered half-measures.",
    ],
  },
  "pentacles-4": {
    general: [
      "You are protecting what you have, and for now that brings real stability. Savings, routines, your home and your time are held within clear limits. The risk is that caution slowly turns into rigidity, so keep what keeps you safe but ask whether the tight grip is still necessary. A small, deliberate act of sharing or spending can show you that security survives a little openness.",
      "Your hold on things is loosening, either gracefully or too fast. You may be letting go of an old fear about money and control, giving more freely, or spending without a plan and watching reserves thin. The risk runs both ways, between clinging and carelessness, so review what you truly need to protect, set a sensible limit, and release the rest without panic.",
    ],
    love: [
      "Fear of loss has you holding on tightly to a partner, a household or old arrangements. You may keep finances strictly separate, guard your time fiercely or struggle to let anyone into your private space. Some boundaries are healthy, so keep those. Where the guarding has become control, try sharing one thing openly, such as a decision, a key or a plan, and see how the bond responds.",
      "Control in a relationship is either loosening or tipping into the opposite problem. A partner may stop hoarding affection or money, and the home feels easier. Or the bond may be strained by one person spending carelessly while the other worries. Talk plainly about shared money and expectations, agree on a few clear limits, and let trust slowly replace monitoring over time.",
    ],
    career: [
      "You are guarding your income, position and savings with discipline, and it brings steady security. A frugal budget, a protected role or a well-padded emergency fund keeps you safe in uncertain times. The cost is possible missed growth. Keep your reserves, but consider investing a small portion in training, a tool or a new contact, so your security keeps pace with your career.",
      "Your relationship with money is shifting, either toward generosity or toward loose spending. You may stop grasping at every dollar and share credit or resources more freely. On the other side, bills and impulse purchases may be eating into a cushion you worked hard to build. Check your actual numbers, restore a modest savings habit and give only what you can sustain.",
    ],
    health: [
      "You conserve your energy and guard your space, which protects you from overload. Routines, limits on commitments and a quiet home all help you stay steady. The strain appears when guarding turns into tension, with a clenched jaw, a tight chest of worry or an unwillingness to accept help. Keep the boundaries, then practice one small release each day, such as slow breathing or a loosening stretch.",
      "A tight grip on worry or on routine is starting to ease, or it has swung to the opposite extreme. You may feel lighter after letting a fear go. Alternatively, you may be spending your reserves of energy and sleep too freely. Look for the middle path by keeping a few protective habits, softening the ones that feel rigid, and noticing what your body asks for.",
    ],
  },
  "pentacles-5": {
    general: [
      "A hard stretch has left you feeling cold, short of resources and cut off from others. Money, work or stability may have shaken, and shame can make you hide it. Yet help is nearer than it appears, often just a door or a phone call away. Name what is going on to one person, find the practical resource that fits, and remember that scarcity describes a season rather than your worth.",
      "The worst of the hardship is easing, or it is lingering because help is being refused. You may notice small improvements, such as a lead on work, a kind offer or a bill finally paid, or you may keep struggling alone out of pride. Either way, accept assistance and rebuild in modest steps. Recovery tends to come through steady contact with others rather than through solitary effort.",
    ],
    love: [
      "You feel alone within your closest relationships, even if people are nearby. Financial strain, illness or a quiet distance may have left you unsupported, and you hesitate to ask because it feels like a burden. Support is more available than your fear suggests. Tell a partner, relative or friend one specific thing you need, and let them show up in a practical way.",
      "Isolation is starting to lift as you reach out, or the loneliness is continuing because you stay silent. A partner or family member may be offering help that you wave off out of pride. Shared hardship can bring people closer when it is spoken about openly. Accept one offer this week and thank the person plainly, so the exchange becomes the first step back toward each other.",
    ],
    career: [
      "Money is tight and work feels unstable. It may be a layoff, reduced hours, unpaid invoices or a business running on thin margins. The stress is real and it deserves a plan rather than shame. List your obligations, contact creditors early, and look into every resource available, including benefits, community programs, former colleagues and recruiters, because asking for help is a practical tactic and it is how most people recover.",
      "Your finances are slowly recovering, or a long lean period keeps going because you will not use the resources around you. A new contract, a small raise or a helpful contact may appear. If nothing changes, look at whether pride or fear is blocking a call, an application or a conversation about debt. Take one concrete step this week and build back gradually.",
    ],
    health: [
      "Financial hardship is weighing on your wellbeing, and it shows up as worry, poor sleep and a sense of being left out in the cold. Money stress affects how you eat, rest and feel, and none of that reflects a personal failing. Look after the basics as well as you can, and reach out to community, family or local support services. Warm food and a trusted conversation count for a great deal.",
      "The pressure on your body and spirit is starting to ease, or it persists because you are carrying it alone. You may notice a little more sleep, a meal that feels like a treat or a lighter mood after one offer of help. Keep building on that. Let supporters in, protect your rest as best you can and move gently toward steadier ground.",
    ],
  },
  "pentacles-6": {
    general: [
      "Giving and receiving are flowing in fair proportion, and both feel good. You may be offered help just when you need it, or you may be in a position to share time, money or skill with others. The point is to do it without keeping a ledger. Give what you can without strain, accept gifts graciously, and notice who treats the exchange as a two-way street.",
      "Generosity has become tangled with obligation. Someone gives with a hook attached, a favor is held over you, or you give so much that you start to resent it. Power sits with whoever controls the exchange, and that makes it uneasy. Clarify what is being offered and what is expected in return, and be willing to say no to terms that leave you owing more than you agreed.",
    ],
    love: [
      "Care moves easily in both directions, and nobody is counting. One of you cooks, the other handles the car or the paperwork, and each notices what the other does. Money and chores feel shared in a fair way. Keep that going by saying thanks for specific acts, offering help before you are asked and giving freely to extended family and friends within your means.",
      "Giving in the relationship has become one-sided or conditional. One person may feel taken for granted, paying for everything or doing all the emotional labor. Another may feel judged for what they have received. The balance sheet sits quietly behind every argument, so talk about who gives what, set fair expectations and offer help freely or not at all, without waiting for a return.",
    ],
    career: [
      "Resources move fairly at work, and you benefit from it. You might receive a raise, a bonus, a grant, a loan on decent terms or credit for what you contributed. You may also be positioned to mentor or hire others. Treat the exchange as a partnership by negotiating openly, paying people what they are owed and helping colleagues who help you.",
      "Money or opportunity at work is flowing unevenly. Pay may be unequal, credit may go to someone else, or a loan or favor may come with conditions you did not expect. Study the terms before signing and ask who benefits most. If you are the one extending resources, limit the terms in writing, so generosity does not become quiet control.",
    ],
    health: [
      "Support is moving in both directions, and it helps your steadiness. You can ask for care without guilt, and you are able to give some without draining yourself. A shared meal, a lift to an appointment or a friend who checks in all count. Accept what is offered, return kindness when you have energy, and let reciprocal care feel like a normal part of staying well.",
      "Care has become lopsided, and it is draining you. You may be giving more energy to others than you have, or relying on help that comes with pressure or judgment. Resentment and exhaustion tend to follow. Set a limit on what you take on this week, ask for help in a specific way, and accept support only from people who give it without strings.",
    ],
  },
  "pentacles-7": {
    general: [
      "You have put in the work, and now you wait while it grows. This is a natural pause to check progress, pull a few weeds and let time do its part. Impatience is the main hazard, so review what is developing, adjust where the evidence points, and then resist the urge to dig up the roots. Steady attention over many months will matter more than any burst of effort.",
      "Results are not matching the effort you have invested, and frustration is building. You may be checking constantly, tinkering without a plan or wondering whether the whole project was a mistake. Some of that effort may have been aimed in the wrong place. Take a clear look at what is working, stop feeding what is not, and choose where to put your next season of energy.",
    ],
    love: [
      "A relationship is growing slowly, and that is part of its strength. A friendship deepens year by year, a partnership matures through ordinary routines, or a family bond is being repaired in small steps. Check in without demanding a verdict. Notice what has grown since last season, keep tending it with consistent time and kindness, and let trust build at its natural pace.",
      "You have given a lot to a bond and received little, and you are starting to question the investment. Waiting may be turning into resentment, or you may be pressing for faster results than the other person can offer. Ask directly where things stand and what each of you wants. If the answers are vague after a fair period, decide how much more you are willing to give.",
    ],
    career: [
      "Long-term effort is approaching its payoff, and this is a good moment to assess. Your savings, a growing client list, a degree in progress or a skill built over years is beginning to bear fruit. Review the numbers, tidy what needs tending and keep investing patiently. Avoid chasing quick wins that distract from the compounding you have already set in motion.",
      "Work and money are returning less than you hoped, and the timeline may need rethinking. An investment is underperforming, a business has not found traction or a role has reached its ceiling. Do not pour more in out of stubbornness. Look at the data, decide what is salvageable, and either revise the strategy or redirect your effort toward something more promising.",
    ],
    health: [
      "Your wellbeing is improving through slow, steady habits. You may not see dramatic changes, but regular sleep, meals and movement are adding up. This is a moment to take stock and appreciate the quiet progress. Keep the routines that work, adjust the ones that do not, and give the process the time it takes rather than demanding fast proof from your body.",
      "You are frustrated that your efforts at self-care are not showing quick results. Impatience can lead to switching methods constantly, or to giving up just before a habit would have settled. Your energy may also be going toward practices that do not suit you. Pick one sustainable routine, track how you feel over several weeks and be fair with yourself about the pace.",
    ],
  },
  "pentacles-8": {
    general: [
      "You are in a period of focused practice, improving through repetition and close attention. Progress is quiet and cumulative, and it satisfies in a way that flashy projects do not. Treat the learning as the reward by setting a regular time, working on one skill at a time, accepting that early results will be rough and returning to the bench until the movements feel natural.",
      "Practice has become either joyless or obsessive. You may be redoing the same task endlessly in search of perfection, or going through routines without any real interest. Either way, the work is no longer improving you. Step back and ask what the work is for, then finish one piece at a good standard, let it go, and vary the routine so attention can come alive again.",
    ],
    love: [
      "You are working on the relationship through small, consistent efforts. It may mean learning your partner habits, keeping up family traditions or making a daily practice of listening. Intimacy here grows like a skill. Show up regularly, pay attention to detail, such as how they take their coffee or what stresses them, and keep improving at the ordinary acts of care.",
      "Routine is crowding out closeness, or perfectionism is making affection stiff. You may be so busy managing the household that you rarely connect, or you keep criticizing small flaws in a partner or in yourself. Love needs some looseness to breathe. Set aside a regular time with no tasks, practice appreciating one imperfect thing and ease the standard you hold the bond to.",
    ],
    career: [
      "Skill-building is the heart of your work right now. Apprenticeship, training, practice and attention to detail are steadily turning you into someone others rely on. Seek out feedback, finish projects properly and keep a record of what you have learned. Mastery pays off slowly in reputation, earning power and the quiet confidence of knowing your craft well and being trusted with harder work.",
      "Your work has become repetitive, or you are stuck refining details at the expense of finishing. You may feel bored in a role that no longer stretches you, or hesitant to release anything that is not flawless. Set a firm deadline for each project, ship it and take on one task that challenges you. Growth returns when effort goes toward progress rather than polish.",
    ],
    health: [
      "A focused, repeated practice is steadying your wellbeing. It could be a daily walk, a craft, a stretching sequence or a cooking routine you enjoy. The repetition itself calms the mind and builds capacity over time. Choose something absorbing and doable that you can repeat most days, protect the time and let yourself enjoy small improvements without measuring them too harshly.",
      "The effort you put into taking care of yourself has become either strained or empty. You may be pushing for a flawless regimen, which causes tension, or doing the same routine out of habit with little benefit. Loosen your standards, introduce some variety and give your attention to how the practice actually feels. Wellbeing tends to improve when care feels sustainable rather than strict.",
    ],
  },
  "pentacles-9": {
    general: [
      "Your own effort has built a life that is comfortable and self-directed. You enjoy quiet pleasures, such as a tidy home, good food, a garden or an afternoon that belongs to you. This is a moment to appreciate what you have made. Keep your standards, spend some time simply enjoying the results and remember that independence is something you have earned.",
      "Comfort on the surface is covering something less settled. You may be working constantly to afford an image, relying on someone else for security or spending beyond what you can sustain. The pleasures have lost some of their flavor. Look honestly at what supports your lifestyle, trim the parts that exist for show and rebuild a version of independence that rests on your own resources.",
    ],
    love: [
      "You are content in your own company, and that gives you a settled way of relating to others. You bring your own income, interests and sense of taste to a relationship, and you are not looking for someone to complete you. Share what you have built generously, and invite others into your space gradually, as guests who add something rather than fill an absence.",
      "Independence has become isolation, or a relationship rests on money and appearances rather than closeness. You may be so self-sufficient that no one can get in, or you may be leaning on the financial support of a partner to avoid finding your own footing. Either pattern leaves something hollow. Let one person see the unpolished side of your life, and build intimacy on honesty rather than comfort.",
    ],
    career: [
      "Years of effort are paying off in financial independence and a degree of freedom. You may have a steady income, savings, a well-run small business or the ability to choose your projects. Enjoy it without apology, and put some of the surplus toward long-term security. Your reputation for quality now supports you, so keep your standards high and your pace sustainable.",
      "Your finances look better than they are. Overwork, spending to keep up appearances or reliance on the income of someone else may be hiding a shaky position. Credit or a high salary can mask a lack of savings. Do a real audit of income, debt and expenses, and cut costs that serve only your image, aiming for security you can maintain without exhausting yourself.",
    ],
    health: [
      "You are in a position to look after yourself well, and your body responds to the care. Good food, time outdoors, a peaceful home and unhurried rest all contribute to a sense of ease. Enjoy that without guilt. Keep up the habits that support you, spend time on simple pleasures and let your self-reliance include knowing when to slow down.",
      "Your wellbeing is being sacrificed to work or appearances. You may be too busy earning to rest, or measuring your health by how you look rather than how you feel. Satisfaction feels thin as a result. Reconnect with something simple that costs little, such as a walk, a home-cooked meal or a quiet evening, and let it count as real self-care.",
    ],
  },
  "pentacles-10": {
    general: [
      "What you have built is meant to last, and it supports more than just you. Home, family, traditions and long-term finances form a foundation that other people lean on and learn from. This is a time to think in decades rather than months. Strengthen the structures that hold everyone, write down plans and values worth passing on and enjoy the security that careful stewardship provides.",
      "The foundations feel shaky, and long-term security is in question. Family disagreements, money disputes, an unclear inheritance or a success that proved temporary can unsettle the household. It helps to be specific about what is at risk. Review documents, accounts and agreements, have honest family conversations and focus on repairing the one or two supports that carry the most weight.",
    ],
    love: [
      "A relationship is maturing into a family-sized commitment, with shared home, shared traditions and a sense of belonging across generations. It may involve marriage, children, caring for older relatives or simply a partnership that has weathered years together. Honor it with practical care. Keep rituals alive, make joint plans for the future and make sure each member of the household feels valued.",
      "Strain in the family or household is shaking the sense of security. Money disagreements, old loyalties, in-laws or inheritance questions may be pulling people apart. The relationship can feel provisional when the foundations are unclear. Talk through the practical points, such as who owns what and who is responsible for whom, and make a plan together before resentments harden into permanent distance.",
    ],
    career: [
      "Your work is building something with staying power. This could be a business that supports a family, a stable career with good benefits, an inheritance managed with care or an organization with real continuity. Think long-term. Put legal and financial structures in place, plan succession or retirement, and make decisions that keep the foundation sound for those who follow, year after year.",
      "Long-term financial security is under threat, whether from a business failing, a family disagreement over money or success that proved short-lived. The picture can feel overwhelming at first. Start with the basics by gathering your documents, consulting a qualified professional on legal or tax matters, separating emotional disputes from practical ones and restoring the most essential protections before anything else.",
    ],
    health: [
      "Belonging and long-term stability support your wellbeing. Time with family, a settled home and a reliable community give you a deep sense of ease. Invest in those anchors, because they quietly carry more of your wellbeing than you realize. Keep up family meals, regular visits and the traditions that make you feel rooted, and let that security be a source of rest as well as responsibility.",
      "Tension at home or worry about long-term security is wearing on your energy. Family conflict, money pressure or a sense that your foundation might not hold can show up as restlessness and difficulty relaxing. Focus on what you can repair this month. Have one honest conversation, create a calm corner at home and seek out steady company outside the tension, even briefly.",
    ],
  },
  "pentacles-page": {
    general: [
      "You approach a new goal as a careful student, and this suits the moment. Something practical captures your interest, such as a course, a skill, a budget or a first step toward a long-term plan. Curiosity and diligence are your assets. Break the goal into small tasks, study the basics properly and be willing to start as a beginner and ask plain questions.",
      "A promising goal is going nowhere because it never leaves the planning stage. You may daydream about results, delay starting until conditions are perfect or set targets that are far beyond your current resources. The energy goes into imagining rather than doing. Choose a realistic version of the plan, set a date for the first small action and complete it before refining anything else.",
    ],
    love: [
      "Someone approaches love sincerely and practically, and this might be you or a person near you. Intentions are honest, speed is modest and loyalty is offered in small, dependable ways. It can look like a new relationship that starts with friendship, or a younger family member who is learning to care. Meet that sincerity with patience and let affection build in step with trust.",
      "A relationship has good intentions but nothing is moving. Plans stay in conversation, promises do not turn into action, or someone is daydreaming about a future they are not preparing for. It could also be fear of getting things wrong that keeps the bond from progressing. Suggest one specific step, such as a date, a visit or a shared budget, and see whether it actually happens.",
    ],
    career: [
      "A new path invites learning, and you are ready to study it seriously. This might be a course, an internship, an entry-level role or a business idea you want to test. Take time with the research, make a realistic plan and take the first step in a sensible form. Early patience, good habits and a willingness to be taught will put you on firm ground.",
      "Progress stalls because ideas are not converted into action. You may be postponing applications, collecting courses you never finish or chasing financial dreams without a budget. Time slips by while the plan stays hazy. Reduce the goal to something specific and achievable, set a weekly work block and measure results by what you completed rather than by what you intend.",
    ],
    health: [
      "You are ready to learn something new that benefits your body and daily wellbeing. It might be cooking, a gentle movement class, a sleep routine or a better understanding of how you feel. Approach it with curiosity and without pressure to master it quickly. Start with small experiments, keep notes on what helps and enjoy the sense of building something useful.",
      "Good intentions toward your wellbeing keep dissolving before they become habits. You may start plans with enthusiasm and drop them within days, or set goals that are unrealistic for your current life. Be kind about it. Choose one simple practice, attach it to something you already do each day and keep it small enough that it is hard to skip.",
    ],
  },
  "pentacles-knight": {
    general: [
      "Slow and steady wins this round, as you or someone around you moves with deliberate, dependable effort, finishing each task before starting the next. Progress is not dramatic, but it is real and it can be trusted. Keep your routines, check the details and measure the outcome over months. Reliability may look unglamorous, yet it is exactly what builds a solid result.",
      "Steadiness has hardened into stagnation. Routine feels dull, caution has become an excuse for never trying anything new, and you may be doing the same thing out of habit while progress stops. Perfectionism or avoidance can hide behind a busy schedule. Introduce one small change this week, a new method or a different order of tasks, and see whether motion returns.",
    ],
    love: [
      "Love is expressed through dependability. A partner, relative or friend shows care by being on time, fixing what is broken, remembering the bills and staying through hard weeks. It may lack fireworks, but it carries the weight of real commitment. Recognize this as affection, tell them so and offer your own steady reliability, because a bond built this way tends to endure.",
      "Predictability has begun to feel like a rut. A partner may resist change, avoid emotional conversations or treat routine as the whole relationship. Alternatively, you may be the one clinging to what is familiar, and boredom is a sign that something needs fresh attention. Plan one new activity together, ask each other a question you have never asked and allow some spontaneity into the schedule.",
    ],
    career: [
      "Methodical effort is paying off in work that is done well and on time. You may be known as the person who delivers, and your consistency earns trust from managers, clients and teammates. Continue to work step by step, keep records and avoid cutting corners for speed. Promotions and stable income often follow a long record of quietly doing the job right.",
      "You have fallen into a rut at work. Tasks repeat, advancement seems stuck and you may be spending more time perfecting minor details than moving ahead. Reliability has become a cover for avoiding risk. Look for a stretch assignment, ask about a different role or learn a skill outside your normal duties, and take one calculated step beyond what is comfortable.",
    ],
    health: [
      "Consistent, unexciting habits are what keep you well. Regular meals, a steady sleep schedule and a daily walk provide a base your body can rely on. There is no need for dramatic changes. Keep the routines that work, check in with yourself weekly and be patient with the slow, cumulative effect of looking after yourself day after day and week after week.",
      "Routine has gone stale, and your body and mood are reflecting it. You may feel heavy, unmotivated or stuck in patterns that no longer help. Sticking rigidly to a plan can turn caution into drudgery. Change one element, such as the time of your walk, the meals you rotate or the place you rest, and remind yourself why you began these habits.",
    ],
  },
  "pentacles-queen": {
    general: [
      "You carry a warm, practical competence that makes a space comfortable for everyone in it. Home, food, resources and relationships are tended with a generous but sensible hand. This is the energy of making things work and making people feel provided for. Use it freely, share what you have with ease and remember to include yourself among the people being cared for.",
      "Care has swung off balance, and someone is paying the price. You may be giving to everyone else while your own needs go unmet, hovering over people in a way that smothers them or feeling insecure about whether you have enough. Looking after others cannot continue without a base. Put your own needs back on the list and let others carry some of the load.",
    ],
    love: [
      "Affection arrives as a home made welcoming, meals shared and practical care that people can feel. A partner, parent or friend may make everyone comfortable, or you may be that person for others. This form of love is steady and generous. Recognize the quiet work that goes into it, say thank you often and make sure care flows both ways.",
      "Caring has turned into overgiving or overprotecting. You may be so occupied with looking after a household that your own needs and the relationship itself fall behind, or you may feel unappreciated and anxious about being enough. Smothering can also push people away. Say what you need, let others handle some tasks in their own way and make space for time together that is not about caretaking.",
    ],
    career: [
      "You are managing work, money and people with resourcefulness and generosity. Budgets stay balanced, the team feels looked after and the home base stays comfortable alongside the job. This is a good time to build income in a way that supports your values. Use your practical judgment, share the credit and keep a reserve so that giving never becomes depletion.",
      "Work and home are competing, and money worries sit underneath it. You may be overextended, unpaid for caregiving or unable to say no to every request. Insecurity about finances can lead to either hoarding or overspending, so set clear working hours, price your effort fairly and delegate where you can. Protect a share of your time and income that is yours alone.",
    ],
    health: [
      "Nourishing, grounded care restores you. Good meals, a comfortable bed, time in nature and a calm home all feed your wellbeing. You know how to look after a body and a household, and now it is your turn to benefit. Spend an afternoon on something sensory and restful, and let yourself receive the care you normally give to others without apology.",
      "You are running on empty because everyone else comes first. Meals may be rushed, rest may be rare and your body shows the strain through fatigue, tension or irritability. Being needed has become a habit that is hard to set down. Put one thing on your own calendar this week that is for you alone, such as a long bath or a quiet walk, and treat it as a non-negotiable appointment.",
    ],
  },
  "pentacles-king": {
    general: [
      "You have the steadiness and judgment of someone who builds things to last. Resources are managed with discipline, decisions are made with the long term in view and others feel secure around you. Use this authority generously. Plan carefully, reward good work, keep your commitments and let your success be measured partly by how well the people depending on you are doing.",
      "Security has become the goal at the expense of everything else. You may be rigid about money, stubborn when change is needed or indulging in comfort and status without much thought. Control tightens as the stakes feel higher. Review where your caution has become inflexibility, listen to advice you would normally dismiss and allow your resources to serve something larger than your own comfort.",
    ],
    love: [
      "Love is shown through provision and loyalty. A partner or family member builds a stable home, handles the finances reliably and stands by the people they care about. You may be that person, or you may be fortunate to have one. Appreciate the security this offers and balance it with attention, spending time together that has nothing to do with responsibilities.",
      "Stability is being used as a form of control. A partner may be possessive about money, treat affection as a transaction or retreat into work while emotional needs go unmet. Home may be comfortable but feel cold, so if this describes you, share decisions and show care without a price tag. If it describes someone else, name the pattern calmly and ask for a fairer arrangement.",
    ],
    career: [
      "Disciplined stewardship is rewarding you. Careful budgeting, sound investments and a long view place you in a position of authority and prosperity, and others look to you for steady leadership. Keep accounts in order, hire and delegate wisely with trusted advisers and reinvest in the foundation of your business or career. Wealth built through patient decisions over many years is the kind that holds.",
      "Your handling of money or authority is working against you. Greed, rigid thinking or a refusal to adapt may be costing opportunities, while indulgence in spending or status may be eroding what you built. Poor oversight can also hide problems until they become expensive. Audit your finances, listen to those you manage and update your methods before stubbornness proves more expensive than change.",
    ],
    health: [
      "Discipline and stability put you on a firm footing. Regular routines, a secure home and enough resources make it easier to look after yourself well. You can afford to invest in good food, quality rest and sensible planning. Keep your habits sustainable for the long haul, and allow some enjoyment in them, so that health is built on contentment as well as discipline.",
      "Overwork, rigidity or indulgence is wearing on your wellbeing. You may be chasing security so hard that rest is neglected, or treating comfort as a replacement for real nourishment. Tension builds when control is the only coping tool. Schedule actual downtime, loosen one rule you impose on yourself and put the same care into your own wellbeing that you give to your accounts.",
    ],
  },
};

Object.assign(DEEP_READINGS, DEEP_PENTACLES);
Object.entries(DEEP_PENTACLES).forEach(([id, deep]) => {
  if (EXTRA[id]) EXTRA[id].deep = deep;
});
