# The Jar Shelf — Site Content

Every word visitors see. Claude Code copies these into `js/content.js` and the SQL seed files exactly as written. Edit wording here first, then ask Claude Code to update the site.

Items marked **[VERIFY]** must be checked by Amber before launch.

---

## Site basics
- **Site name:** The Jar Shelf
- **Tagline:** A cozy shelf where you leave a note and find one you needed.
- **Page title:** The Jar Shelf · leave a note, find one you needed

## Jar names
- Tonight's Jar
- Love & Relationships
- Family
- Work & School
- Worries
- Small Wins
- Jar Cluster button label: "Open the jars"

## First visit (opening)
- **Dust-off instruction:** "Someone left this shelf a little dusty. Brush off a jar."
- **Skip button:** "Skip"
- **After the dust clears:** "Welcome in. Everyone here is carrying something."
- **18+ notice:** "The Jar Shelf is for adults 18 and older."
- **Confirm button:** "I'm 18 or older"
- **Leave button:** "Not yet, take me back" (goes to a gentle page: "Come back when you're 18. Until then, the Lantern up top has people you can talk to anytime." Lantern still works.)
- **House rules summary (short, before entering):**
  - Be kind. Everyone here is carrying something.
  - Encourage, don't lecture.
  - No names, contact info, or links.
  - No hate, harassment, or threats.
  - Notes are read by a real person before they go on the shelf.
- **Enter button:** "Step up to the shelf"

## The shelf
- **Tonight's Jar label:** "Tonight's Jar"
- **Tonight's Jar date line:** "Tonight · {Weekday, Month Day}"
- **Prompt changes note (small text):** "A new question every morning."
- **Empty jar:** "This jar is waiting for its first note. Maybe it's yours."
- **Load more:** "Reach a little deeper"
- **Shelf grew moment (once):** "Your shelf grew."
- **Journal label:** "Journal"
- **Letters label:** "Letters"
- **Record Player label:** "Record Player"
- **Lantern aria-label:** "Lantern: get help now"
- **Drawer aria-label:** "Drawer: settings, rules, and your notes"

## Notes
- **Keeper label:** "from the shelf keeper"
- **Buttons:** "Save" / "Saved" · "Reply" · "Leave a flower" / "Flower left" · "Report"
- **Stamps (alt text):** moon stamp, teacup stamp, fern stamp, star stamp, paper crane stamp

## Writing a note
- **Open button:** "Leave a note"
- **Jar picker:** "Which jar is this for?"
- **Tonight's Jar writing header:** "Tonight's question:" (then the prompt)
- **Text box placeholder:** "Write what you're carrying. No names, please."
- **Character count:** "{n} / 1000"
- **Lifespan question:** "How long should it stay?"
  - "Keep it on the shelf until I remove it"
  - "Let it fade after 90 days"
- **Before-you-post notices (shown above Submit):**
  - "No names, contact info, or links. Notes with these can't be posted."
  - "A real person reads every note before it goes on the shelf, usually within a day. This site isn't watched live."
  - "Your Journal and Letters live on this device only. Clearing your browser, using private browsing, or switching phones means losing them, and you won't be able to delete this note yourself after that."
  - "Once a note is on the shelf, someone could screenshot it. That can't be taken back."
  - "If you need someone right now, the Lantern at the top has people you can reach anytime."
- **Submit button:** "Place it in the jar"
- **After submitting (pending):** "Your note is waiting to be placed on the shelf. You'll find it in your Journal."
- **Contact info blocked:** "It looks like this has a link, phone number, email, or username in it. To keep everyone safe, please take that out and try again."
- **Too many notes today:** "You've left a lot of notes today. Rest a little, and come back tomorrow."
- **Generic error:** "Something went wrong placing your note. Your words are still here; try again in a moment."
- **Private browsing notice:** "It looks like this browser won't remember things. You can still read every note, but anything you write or save may be lost when you close this page."

## Journal
- **Intro:** "Notes you saved and notes you wrote. Kept on this device only."
- **Waiting status:** "Waiting to be placed on the shelf"
- **Held status (crisis-flagged):** "Waiting a little longer. Check your Letters."
- **Not placed status (rejected):** "This one couldn't go on the shelf. It may have broken a house rule. You're welcome to write again."
- **Saved note that was removed:** (quietly remove it, no message)
- **Empty:** "Nothing here yet. Tap Save on a note you want to keep close."

## Replies
- **Reply header:** "Write something kind"
- **Placeholder:** "A few gentle words. Encouragement, not advice."
- **Character count:** "{n} / 300"
- **Starter phrases label:** "Start with:"
- **Flower checkbox:** "Add a flower"
- **Send button:** "Send it softly"
- **After sending:** "Your reply is on its way. It'll be read first, then delivered."
- **Already replied:** "You've already left a reply on this note."
- **Starter-only mode notice:** "Replies are taking a little longer to read right now, so for a few days you can send one of these instead."
- **Can't reply to your own note:** "This one's yours. Others will find it."

### Starter reply phrases
1. You're not alone in this.
2. I've felt this too.
3. Thank you for writing this down.
4. I hope tonight is gentler on you.
5. This took courage to share.
6. I'm really glad you're still here.
7. You deserve the same kindness you'd give a friend.
8. One small step is still a step.
9. Proud of you for this.
10. Sending you a little light.
11. You don't have to have it all figured out.
12. It makes sense that you feel this way.

### Reply sign-offs (one picked at random)
- from someone who gets it
- from a fellow shelf visitor
- from someone across the room
- from a quiet reader
- from someone carrying something too
- from a kind stranger
- from someone rooting for you

## Flowers
- **After tapping:** "You left a flower."
- **In the writer's Letters:** "Someone left a flower on your note." (one item per note, never a number)

## Letters
- **Intro:** "Replies and flowers for your notes. Kept on this device only."
- **Reply item header:** "A reply to your note:" (then a short excerpt of the note)
- **Empty:** "No letters yet. Notes find their people slowly."

### Care Envelope
Shown immediately when a note is held, and kept in Letters.

> **A Care Envelope for you**
>
> Thank you for writing this down. It sounds like you're carrying something really heavy right now.
>
> Your note is safe with us. A real person will read it soon, but this site isn't watched live, so if you need someone right now, please reach out to someone who can be there with you:
>
> - **Call or text 988** to reach the 988 Suicide & Crisis Lifeline, any time, day or night.
> - **Text HOME to 741741** to reach the Crisis Text Line.
> - **If you're in danger right now, call 911.**
>
> You don't have to explain everything or have the right words. You reached out here, and that matters.
>
> *— the shelf keeper*

- **Button:** "Open the Lantern" (opens the full resource list)

### Yearly check-in
- "Your note has been on the shelf for a year. Keep it there?"
- **Buttons:** "Keep it on the shelf" · "Let it fade now"
- **Small text:** "If you don't answer, it stays."

## Lantern **[VERIFY all numbers before launch]**
- **Header:** "If you need someone right now"
- **Intro:** "These are free, confidential, and open 24/7 unless noted. You don't have to be in crisis to reach out."
- **Emergency:** "If you or someone else is in danger right now, call **911**."
- **988 Suicide & Crisis Lifeline:** Call or text **988**, or chat at 988lifeline.org.
- **Veterans Crisis Line:** Call **988** and press 1, or text **838255**.
- **Crisis Text Line:** Text **HOME** to **741741**.
- **The Trevor Project** (LGBTQ+ young people under 25): Call **1-866-488-7386** or text **START** to **678-678**.
- **National Domestic Violence Hotline:** Call **1-800-799-7233** or text **START** to **88788**.
- **RAINN National Sexual Assault Hotline:** Call **1-800-656-4673**.
- **SAMHSA National Helpline** (mental health and substance use support and referrals): Call **1-800-662-4357**.
- **Footer:** "The Jar Shelf isn't a crisis service and isn't watched live. These people are trained to help, and they want to hear from you."
- **Last checked line:** "Last checked: {date}" (Amber updates this)

## Drawer
- **Sections:** Settings · House rules · Privacy · Your notes · Ask us to remove a note · Text version
- **Settings:** "Sound" (on/off) · "Reduce motion" (on/off) · "See the opening again"
- **Your notes intro:** "Notes you wrote from this device."
- **Delete button:** "Remove from the shelf"
- **Delete confirm:** "Remove this note everywhere? This can't be undone." · "Remove it" · "Keep it"
- **Delete everything:** "Clear this device" → confirm: "This removes all your notes from the shelf and erases your Journal and Letters on this device. This can't be undone." · "Clear everything" · "Never mind"

### Removal request form
- **Intro:** "Lost the device you posted from? Tell us which note is yours and we'll take it down. Please don't include your name or contact info."
- **Fields:** "Which jar was it in?" (dropdown) · "About when did you post it?" · "Some words from the note so we can find it"
- **Submit:** "Send request"
- **After:** "Got it. We'll look for it within a few days. You won't hear back, since we don't collect contact info, but you can check the jar."

## House rules (full)
1. **Be kind.** Everyone here is carrying something, even if their note is about something small.
2. **Encourage, don't lecture.** Replies are for support, not advice, debates, or judgment.
3. **Stay anonymous.** No names, usernames, phone numbers, emails, links, or anything that could identify you or someone else.
4. **No hate or harassment.** No slurs, attacks, or mocking anyone for who they are.
5. **No threats.** Notes that threaten anyone won't be posted.
6. **Adults only.** The Jar Shelf is for people 18 and older.
7. **This isn't a crisis line.** The site isn't watched live. If you need help now, open the Lantern.
8. **Notes are read first.** A real person reads every note and reply before it appears. Some won't be placed, and that's okay.
9. **Report what feels wrong.** If a note breaks these rules, tap Report. It's anonymous.

## Report options
- "It's unkind or hateful"
- "It has personal or contact info"
- "Someone might be in danger"
- "It's spam"
- "Something else"
- **After:** "Thank you. We'll take a look."

## Text version
- **Intro:** "The same shelf, as plain text."

## Not found / offline
- **Offline:** "The shelf can't be reached right now. Check your connection and try again. The Lantern still works."

---

## Tonight's Jar — 30 prompts
1. What's something you're carrying today that no one knows about?
2. What made you smile this week, even a little?
3. What do you wish someone would say to you right now?
4. What's a small thing that got you through today?
5. What are you tired of pretending about?
6. What's something you forgave yourself for?
7. Who do you miss tonight?
8. What's a worry you're ready to set down for one night?
9. What's something you're proud of that you haven't told anyone?
10. What does rest look like for you right now?
11. What's a memory that still feels warm?
12. What's something you're learning about yourself lately?
13. What's a question you wish someone would ask you?
14. What's one kind thing you did for yourself today?
15. What's something hard you're getting through, slowly?
16. What would you tell a younger you tonight?
17. What's a place where you feel safe?
18. What are you hoping for, even if it feels unlikely?
19. What's something you said yes to that you wish you'd said no to?
20. What made today heavier than it needed to be?
21. What's a song, smell, or sound that feels like home?
22. What do you need more of right now?
23. What's something you're letting go of?
24. Who made you feel seen recently?
25. What's a fear you've never said out loud?
26. What's a tiny win from this week?
27. What do you wish people understood about you?
28. What's something you're grateful for that's easy to overlook?
29. What's keeping you up tonight?
30. What would make tomorrow a little easier?

---

## Starter notes "from the shelf keeper" (one per topic jar)
- **Love & Relationships:** "I used to think needing people was a weakness. Now I think it's just being human. If you're missing someone tonight, that's love that hasn't found a place to go yet."
- **Family:** "Families are complicated. You can love people and still need space from them. Both can be true."
- **Work & School:** "Some days the most productive thing you'll do is get through the day. That counts."
- **Worries:** "My brain likes to plan for every bad thing at 2 AM. I'm learning to tell it: we can worry about this in the morning."
- **Small Wins:** "I drank water, answered one email I'd been avoiding, and went to bed before midnight. Small, but mine."

---

## Crisis screening terms (seed for `crisis_terms`)
Case-insensitive phrase match. Holding a note isn't a judgment; it just gets a person's eyes on it sooner and sends the Care Envelope.

suicide · suicidal · kill myself · killing myself · end my life · ending my life · take my life · want to die · wanna die · wish i was dead · wish i were dead · better off dead · better off without me · no reason to live · don't want to be alive · dont want to be alive · don't want to be here anymore · dont want to be here anymore · can't go on · cant go on · end it all · hurt myself · hurting myself · self harm · self-harm · cut myself · cutting myself · overdose · kms · unalive · being abused · abuses me · hits me · raped · going to kill · hurt them

Amber reviews and adds terms over time based on what slips through or gets falsely held.

---

## Privacy policy (draft; compare with a free template generator before launch, not legal advice)

**The Jar Shelf Privacy Policy**
*Last updated: {date}*

The Jar Shelf is a small website where adults leave anonymous notes. We collect as little as possible.

**What we collect**
- The notes, replies, flowers, reports, and removal requests you send.
- A random code created by your browser so replies can reach you. We store a scrambled version of it, not your name or anything that identifies you.
- The dates things were sent.

**What we don't collect**
Names, emails, passwords, phone numbers, or account info. We don't use ads, analytics, or tracking cookies.

**What stays on your device**
Your Journal, your list of notes, and your settings are stored in your browser. If you clear your browser, use private browsing, or switch devices, they're gone, and we can't bring them back.

**Who sees your notes**
A moderator reads every note and reply before it appears. Once placed on the shelf, notes are public and anyone visiting can read them. No one on the site can see who wrote them.

**How long we keep things**
Notes stay until you remove them, or fade after 90 days if you choose. Removed or faded notes are deleted. Reports and removal requests are deleted after they're handled.

**Removing your notes**
Use "Your notes" in the Drawer on the device you posted from. Lost that device? Use the removal request form in the Drawer.

**Services we use**
Notes are stored with Supabase, our database provider, and the site is hosted on GitHub Pages. They may process technical data (like IP addresses) to run their services, under their own privacy policies.

**Age**
The Jar Shelf is for adults 18 and older. If we learn someone under 18 posted, we'll remove their notes.

**Safety**
If a note suggests someone may be in serious danger, we may take steps described in our safety plan, which can include contacting emergency services if we have enough information to do so.

**Changes**
If this policy changes, we'll update the date at the top.

**Questions**
{Amber adds a contact method here, such as a dedicated email address for the site — never her personal one.}

---

## Serious-case plan (draft for Amber and the backup moderator; not shown on the site)

**1. Someone seems to be in immediate danger to themselves**
- Don't post the note. The Care Envelope has already gone to their Letters.
- You can't contact them (no accounts), so the Care Envelope is your reach. Make sure the Lantern is current.
- If a note includes enough real-world detail to locate someone and says they're about to act, call 911 or your local non-emergency line and share what you know.

**2. A threat of violence against others**
- Don't post it. Screenshot it with the date and time.
- If it's specific (a real place, person, or time), report it to local police or the FBI tip line (tips.fbi.gov). **[VERIFY]**
- Write down what you did and when.

**3. Someone reveals they're being abused**
- Don't post anything with identifying details. If the note is otherwise okay, you may post it with details removed only if the writer would clearly want it shared; when in doubt, hold it.
- The Care Envelope includes the Domestic Violence and RAINN hotlines.
- If it describes a child being harmed, report it to your state's child abuse hotline. **[VERIFY North Carolina's number]**

**4. Someone seems to be under 18**
- Don't post it. Reject it so it shows as "couldn't go on the shelf."

**5. Taking care of yourself**
- Review at set times, not all day.
- If a note shakes you, stop for the day and hand off to your backup.
- Talk to someone you trust about the heavy ones (without sharing note details publicly).
