"use strict";

/* ------------------------------------------------------------------ *
 * Health readings.
 * Symbolic wellbeing themes in the Rider-Waite-Smith tradition, not
 * medical advice. Kept separate from the love/career content so the
 * health voice can be edited on its own.
 * ------------------------------------------------------------------ */

const HEALTH_READINGS = {
  // ---- Major Arcana ----
  "fool": [
    "A fresh burst of energy invites movement, play and curiosity; gentle exercise and new experiences lift your spirits.",
    "Restlessness or recklessness may lead to strains and spills; slow down, ground yourself and check your footing before leaping.",
  ],
  "magician": [
    "Focused intention and steady breath help you direct your energy; you have the resources to support your wellbeing now.",
    "Scattered attention and nervous strain drain you; simplify your routine and stop trying to fix everything at once.",
  ],
  "high-priestess": [
    "Quiet rest, dreams and intuition are your medicine; make space for silence and listen to what your body is telling you.",
    "Ignoring fatigue or inner warning signs creates tension; honour your need for rest instead of pushing through.",
  ],
  "empress": [
    "Nourishment, comfort and sensual pleasure restore you; good food, nature and gentle self-care are especially supportive.",
    "Overindulgence or neglecting your own needs leaves you depleted; return to simple, steady care of body and home.",
  ],
  "emperor": [
    "Structure and routine support your health; consistent sleep, meals and movement give you a stable base.",
    "Rigidity or overwork tightens body and mind; loosen the schedule and allow yourself recovery time.",
  ],
  "hierophant": [
    "Established practices, guidance and community support your wellbeing; follow trusted routines and seek sound advice.",
    "Rigid rules or outdated habits no longer serve you; question the routine and find a gentler approach that fits you.",
  ],
  "lovers": [
    "Connection, affection and inner alignment support healing; spend time with people who make you feel whole.",
    "Conflict or misalignment drains your energy; be honest about what you need and restore balance in your relationships.",
  ],
  "chariot": [
    "Steady drive and disciplined movement build strength; channel your energy into a clear, achievable goal.",
    "Burnout or scattered effort leaves you exhausted; ease off the accelerator and regain control of your pace.",
  ],
  "strength": [
    "Patience and gentle courage steady you; kindness toward yourself is more restorative than force.",
    "Self-doubt or suppressed tension weakens your reserves; acknowledge your limits and ask for support.",
  ],
  "hermit": [
    "Solitude and quiet reflection restore you; time alone in nature or with a trusted guide helps you recharge.",
    "Isolation or withdrawal deepens low energy; reach out, even gently, and let someone check in on you.",
  ],
  "wheel-of-fortune": [
    "A change in circumstances brings renewed energy; move with the turning cycle rather than resisting it.",
    "Repeating patterns or bad timing wear you down; notice the cycle and make one small change to break it.",
  ],
  "justice": [
    "Balance, honesty and clear boundaries support wellbeing; attend to what is fair to your body and mind.",
    "Imbalance or self-judgement strains you; release harsh comparisons and restore fairness in your routine.",
  ],
  "hanged-man": [
    "A pause is healing; surrender the need to push and let your body rest in a new perspective.",
    "Stagnation or martyrdom keeps you stuck; stop waiting and take one gentle step toward movement.",
  ],
  "death": [
    "A cycle of depletion ends; release habits and attachments that no longer sustain your vitality.",
    "Resisting necessary change drains your energy; grief or fatigue may linger until you allow the old pattern to close.",
  ],
  "temperance": [
    "Moderation and steady balance restore you; small, consistent adjustments are your best medicine.",
    "Excess or imbalance throws you off; return to gentle routines and avoid all-or-nothing swings.",
  ],
  "devil": [
    "Cravings, habits or dependencies may be draining your vitality; examine what binds you without shame.",
    "You are beginning to break free from an unhealthy habit; withdrawal and shame need patience and support.",
  ],
  "tower": [
    "Sudden stress or upheaval shakes your routine; prioritise safety, sleep and recovery while things settle.",
    "Chronic tension or a shock has unsettled you; rebuild gently rather than pushing through the rubble.",
  ],
  "star": [
    "Hope, rest and gentle healing restore you; spend time under the sky and let yourself recover slowly.",
    "Discouragement or lost faith dims your energy; reconnect with one small source of hope and care.",
  ],
  "moon": [
    "Sleep, dreams and emotional tides need attention; avoid decisions made from fear and give yourself quiet time.",
    "Confusion is lifting, but lingering anxiety may still disturb rest; keep grounding routines close.",
  ],
  "sun": [
    "Vitality, warmth and recovery are strong; enjoy daylight, movement and what genuinely makes you feel alive.",
    "Energy is returning after a low period; do not rush, but let yourself enjoy the light as it grows.",
  ],
  "judgement": [
    "An honest reckoning brings relief; forgive yourself and answer the call to a healthier way of living.",
    "Harsh self-judgement or avoidance keeps you stuck; forgive what is past and take one concrete step forward.",
  ],
  "world": [
    "A cycle of healing completes; celebrate your progress and let yourself feel whole before the next chapter.",
    "Loose ends or unfinished recovery keep you from closing the cycle; attend to the last small steps.",
  ],

  // ---- Wands ----
  "wands-ace": [
    "A surge of vitality and motivation lifts you; channel it into movement, creativity or a project you care about.",
    "Energy flares and fizzles, or motivation stalls; rest before forcing a spark that is not ready.",
  ],
  "wands-2": [
    "You are ready to plan a healthier direction; choose one goal and give it steady, realistic energy.",
    "Indecision or fear of change keeps you stuck; start with a small, low-risk step.",
  ],
  "wands-3": [
    "Early efforts begin to show results; keep your routines consistent and look beyond your immediate horizon.",
    "Delays or lack of foresight frustrate you; adjust the plan rather than abandoning it.",
  ],
  "wands-4": [
    "Stability and celebration support recovery; enjoy the home, people and routines that make you feel safe.",
    "Instability at home or a postponed celebration unsettles you; rebuild a sense of safety in small ways.",
  ],
  "wands-5": [
    "Friction and competition raise your temperature; use the energy for exercise or honest conversation, not conflict.",
    "Avoided conflict or simmering resentment wears you down; address the tension before it turns inward.",
  ],
  "wands-6": [
    "Confidence and recognition lift your spirits; accept praise and let success motivate healthy habits.",
    "Hurt pride or seeking validation drains you; measure yourself by how you feel, not by applause.",
  ],
  "wands-7": [
    "You are defending your boundaries; stand firm without tensing every muscle, and rest between battles.",
    "Constant defensiveness exhausts you; choose which fights are worth your energy.",
  ],
  "wands-8": [
    "Swift movement and momentum carry you; act while energy is high, but keep your pace sustainable.",
    "Rushed decisions or scattered messages create stress; slow down and finish one thing at a time.",
  ],
  "wands-9": [
    "You are close to the end of a demanding stretch; protect your reserves and do not abandon your boundaries now.",
    "Exhaustion and suspicion wear you down; ask for help and lower your guard where it is safe.",
  ],
  "wands-10": [
    "You are carrying a heavy load; delegate, rest and set down what is not yours to bear.",
    "Overload is becoming unsustainable; release one obligation before your body forces the issue.",
  ],
  "wands-page": [
    "Curiosity and fresh energy invite playful movement; try something new without demanding perfection.",
    "Restlessness or scattered enthusiasm scatters your energy; ground yourself in one simple practice.",
  ],
  "wands-knight": [
    "Bold, fast energy propels you; use it for action, but watch for haste and strain.",
    "Impulsiveness or burnout makes you erratic; slow the pace and recover before the next charge.",
  ],
  "wands-queen": [
    "Warm confidence and vitality radiate from you; nurture your own spark as generously as you nurture others.",
    "Overgiving or jealousy drains your fire; reclaim time for your own needs and pleasures.",
  ],
  "wands-king": [
    "Leadership and steady vision give you purpose; direct your energy toward what you can realistically sustain.",
    "Domineering drive or overwork burns you out; share the load and soften your grip.",
  ],

  // ---- Cups ----
  "cups-ace": [
    "Emotional renewal and tenderness open your heart; let yourself feel and receive care.",
    "Blocked feelings or emotional exhaustion need gentle release; do not force yourself to feel differently.",
  ],
  "cups-2": [
    "Connection and mutual care restore you; spend time with someone who makes you feel seen.",
    "Imbalance or disconnection in a relationship drains you; restore your own emotional centre first.",
  ],
  "cups-3": [
    "Friendship and shared joy lift your spirits; community and celebration are good medicine.",
    "Social overload or strained friendships tire you; choose quality connection over obligation.",
  ],
  "cups-4": [
    "Apathy or boredom signals unmet emotional needs; notice what you are ignoring and allow yourself to receive.",
    "You are ready to re-engage with life; accept the small offer of connection in front of you.",
  ],
  "cups-5": [
    "Grief and disappointment need time; let yourself mourn without turning away from what remains.",
    "You are beginning to heal and turn toward what is left; take one small step out of isolation.",
  ],
  "cups-6": [
    "Nostalgia and gentle memories soothe you; reconnect with what felt safe and joyful in the past.",
    "Living in the past or idealising it keeps you stuck; honour the memory and return to the present.",
  ],
  "cups-7": [
    "Too many options and fantasies scatter your energy; ground yourself in what is real and choose one path.",
    "Confusion begins to clear; let go of illusions and act on what you actually need.",
  ],
  "cups-8": [
    "Leaving what no longer fulfils you is a healthy act; give yourself permission to walk toward something truer.",
    "Fear of leaving or returning to an old situation keeps you stuck; examine what you are really staying for.",
  ],
  "cups-9": [
    "Contentment and pleasure are available; enjoy them without guilt, and notice what genuinely satisfies you.",
    "Overindulgence or chasing pleasure leaves you empty; look for satisfaction beneath the surface.",
  ],
  "cups-10": [
    "Emotional security and family warmth support healing; lean on the people who feel like home.",
    "Family tension or an idealised picture of harmony strains you; accept the real, imperfect support available.",
  ],
  "cups-page": [
    "Tender feelings and intuition ask for expression; creative or emotional play helps you process what you feel.",
    "Emotional immaturity or moodiness unsettles you; give feelings room without letting them drive every choice.",
  ],
  "cups-knight": [
    "Romantic, imaginative energy lifts you; follow what moves your heart, but keep one foot on the ground.",
    "Moodiness or escapism pulls you away from reality; return to simple routines and honest feelings.",
  ],
  "cups-queen": [
    "Compassion and emotional wisdom steady you; trust your intuition and care for yourself as deeply as others.",
    "Overwhelm or absorbing others' emotions drains you; set boundaries and return to your own centre.",
  ],
  "cups-king": [
    "Emotional maturity and calm authority support you; respond rather than react, and keep your heart open.",
    "Suppressed feelings or emotional manipulation creates tension; name what you feel and seek honest support.",
  ],

  // ---- Swords ----
  "swords-ace": [
    "Clarity cuts through confusion; name the problem honestly and make a clean, informed decision.",
    "Mental fog or harsh self-talk clouds your judgement; rest your mind before forcing an answer.",
  ],
  "swords-2": [
    "Indecision and tension keep you stuck; step away from the choice long enough to breathe and see clearly.",
    "The stalemate is breaking; make the decision you have been avoiding, even if it is imperfect.",
  ],
  "swords-3": [
    "Heartache or mental pain needs acknowledgement; let yourself grieve and avoid replaying the wound.",
    "Healing is beginning, though the ache lingers; be patient with the recovery process.",
  ],
  "swords-4": [
    "Rest is essential; withdraw, sleep and give your nervous system a genuine break.",
    "Restlessness or burnout signals that you have not rested enough; return to stillness before pushing on.",
  ],
  "swords-5": [
    "Conflict and winning at all costs drain you; choose peace over being right where you can.",
    "The aftermath of a fight weighs on you; make amends or walk away and release the tension.",
  ],
  "swords-6": [
    "Moving away from turbulence brings relief; choose calmer waters and give yourself time to transition.",
    "You are carrying old stress into a new situation; leave the mental baggage behind where you can.",
  ],
  "swords-7": [
    "Avoidance or self-deception costs energy; face what you are hiding from and tell yourself the truth.",
    "A secret or evasion is coming to light; honesty, even when uncomfortable, restores your energy.",
  ],
  "swords-8": [
    "Feeling trapped is often a mental cage; challenge the story that says you have no options.",
    "The bind is loosening; take one small action that proves you are not powerless.",
  ],
  "swords-9": [
    "Anxiety and sleepless worry need care; talk to someone and ground yourself in the present.",
    "The worst of the anxiety is passing; keep using the supports that help you feel safe.",
  ],
  "swords-10": [
    "A painful ending or mental exhaustion asks you to stop fighting; rest and let the cycle close.",
    "Recovery is beginning after a low point; do not rush, but let yourself rise slowly.",
  ],
  "swords-page": [
    "Curiosity and clear communication help you learn; ask questions and stay mentally flexible.",
    "Gossip, scattered thoughts or harsh words create stress; pause before speaking or believing.",
  ],
  "swords-knight": [
    "Fast, decisive energy moves you forward; act with purpose, but watch for mental overdrive.",
    "Recklessness or aggression burns you out; slow down and choose your battles carefully.",
  ],
  "swords-queen": [
    "Clear boundaries and honest speech protect your energy; say what you mean with compassion.",
    "Coldness or biting criticism strains you; soften the inner voice and allow warmth back in.",
  ],
  "swords-king": [
    "Mental discipline and fair judgement support you; make decisions from principle, not fear.",
    "Rigid thinking or harsh authority creates tension; question the rule and make room for nuance.",
  ],

  // ---- Pentacles ----
  "pentacles-ace": [
    "A seed of physical wellbeing and stability is available; start a simple, practical health habit.",
    "Missed opportunities or neglect of the body need attention; begin with one small, tangible step.",
  ],
  "pentacles-2": [
    "Balance and adaptability keep you steady; juggle your commitments without dropping your own needs.",
    "Overcommitment or disorganisation strains you; simplify and drop what is not essential.",
  ],
  "pentacles-3": [
    "Skill, collaboration and steady work build strength; value the craft of caring for yourself.",
    "Lack of support or poor planning undermines you; ask for help and improve the routine.",
  ],
  "pentacles-4": [
    "Security and boundaries protect you; hold on to what sustains you without becoming rigid.",
    "Hoarding or fear of loss tightens you; loosen your grip and let support circulate.",
  ],
  "pentacles-5": [
    "Hardship or isolation weighs on you; accept help and remember you are not alone.",
    "The worst of the scarcity is passing; keep reaching for support and rebuild slowly.",
  ],
  "pentacles-6": [
    "Generosity and fair exchange restore balance; give and receive support without keeping score.",
    "Imbalance in giving or receiving drains you; set limits and ask for what you need.",
  ],
  "pentacles-7": [
    "Patience and steady effort are paying off; tend your routines and trust the slow growth.",
    "Impatience or scattered effort stalls progress; return to one sustainable practice.",
  ],
  "pentacles-8": [
    "Focused, repetitive practice builds mastery and calm; dedicate time to a craft or skill that grounds you.",
    "Perfectionism or boredom with routine creates strain; vary the practice and release the need to be flawless.",
  ],
  "pentacles-9": [
    "Self-sufficiency and comfort support wellbeing; enjoy the fruits of your care and independence.",
    "Overwork or dependence on status leaves you unfulfilled; reconnect with simple pleasures.",
  ],
  "pentacles-10": [
    "Long-term stability and family support nourish you; invest in the home and relationships that sustain you.",
    "Family or financial strain unsettles you; focus on the foundations you can realistically repair.",
  ],
  "pentacles-page": [
    "A practical new beginning is available; learn one small skill or habit that supports your body.",
    "Lack of focus or follow-through stalls progress; choose one simple practice and keep it.",
  ],
  "pentacles-knight": [
    "Steady, methodical effort gets results; keep your routines consistent and unglamorous.",
    "Stubbornness or drudgery wears you down; vary the routine and remember why you started.",
  ],
  "pentacles-queen": [
    "Nurturing, grounded care restores you; tend to your body, home and the people who depend on you.",
    "Overgiving or neglect of self-care depletes you; put your own needs back on the list.",
  ],
  "pentacles-king": [
    "Stability, discipline and material security support you; build a sustainable foundation for long-term health.",
    "Greed, rigidity or overwork undermines wellbeing; loosen your grip and invest in rest.",
  ],
};

Object.entries(HEALTH_READINGS).forEach(([id, reading]) => {
  if (EXTRA[id]) EXTRA[id].health = reading;
});
