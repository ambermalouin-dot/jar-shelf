# The Jar Shelf — Build Plan

Put this file at `docs/BUILD_PLAN.md` in your project. `CLAUDE.md` goes in the main folder, and `CONTENT.md` goes in `docs/`.

**How to use this plan:** do the setup once, then paste ONE phase prompt into Claude Code at a time. When it finishes, do the "Check it" list on your phone. Only move on when everything passes. If something's wrong, tell Claude Code exactly what you saw (screenshots help).

---

## Part A — One-time setup (you do these, about 30–45 minutes)

1. **Claude Code:** make sure you can open Claude Code (it needs a paid Claude plan).
2. **GitHub:** create a new **public** repository named `jar-shelf`. Check "Add a README."
3. **Supabase:** create a new project named `jar-shelf`. Save the database password somewhere safe (a notes app is fine). Pick the US East region.
4. **Supabase keys:** in Project Settings, find the API keys page. Copy the **Project URL** and the public key, called the **publishable** key on newer projects or the **anon public** key on older ones. You'll give these to Claude Code in Phase 1. Never share the **secret** / **service_role** key with anyone or put it in code. (Menu names in Supabase change sometimes; if you can't find something, ask Claude Code where it is now.)
5. **Turn off public sign-ups:** Authentication → Sign In / Providers → turn off "Allow new users to sign up." (Visitors never log in; only you and your backup moderator do, and you'll add yourselves by hand.)
6. **Put the plan files in the project:** open your repository in Claude Code and paste this first message:

> Create `CLAUDE.md` in the project root and `docs/BUILD_PLAN.md` and `docs/CONTENT.md` with the contents I'm about to paste. Don't build anything yet.

Then paste each file's contents when it asks. (Or upload them on GitHub with "Add file → Upload files.")

---

## Part B — Build phases (paste one prompt at a time)

### Phase 1 — The empty shelf
> Read CLAUDE.md and docs/CONTENT.md. Build Phase 1 only: the static site structure and folder layout, `js/config.js` with my Supabase URL and anon key (I'll paste them), `js/content.js` from CONTENT.md, the sticky header with Lantern and Drawer icons, the vertical bookshelf with Tonight's Jar, the Jar Cluster (tap to reveal the 5 topic jars), and the Record Player as a placeholder button. Opening a jar should show 3 sample hard-coded notes so I can see the unfolding animation. Include day/night lighting and the paper texture. Make the Lantern fully working with the real resources from CONTENT.md. No database yet. Then give me step-by-step instructions to turn on GitHub Pages so I can see it on my phone.

**Check it:** site loads at your github.io address on your phone · shelf scrolls · jars open and notes unfold · Lantern opens from anywhere and the 988 link starts a call · it looks different after 7 PM.

### Phase 2 — The database
> Build Phase 2: the Supabase SQL files from CLAUDE.md (tables, RLS, all visitor RPC functions, contact-info filter, crisis screening, rate limits) and seed data (the 30 prompts, starter phrases, crisis terms, sign-offs from CONTENT.md, and 5 starter notes "from the shelf keeper", one per topic jar). Include a test block that proves the rules work. Walk me through running each file in the SQL Editor in order. Don't change the website yet.

**Check it:** every SQL file runs with no red errors · the test block shows the phone-number note rejected, the crisis note held, and no writer info in public results · you can see your tables in the Table Editor.

### Phase 3 — Reading real notes
> Build Phase 3: connect the shelf to Supabase. Tonight's Jar shows today's real prompt and date. Topic jars load approved notes newest first, with "load more." Notes show their stamp and "from the shelf keeper" when it applies. Add Save (Journal in localStorage) and make the Journal appear on the shelf after the first save. Remove the sample notes.

**Check it:** starter notes show in their jars · saving a note makes the Journal appear · Journal still shows it after closing and reopening the site.

### Phase 4 — Writing notes and the admin page
> Build Phase 4: the device key, the writing flow with all notices and the lifespan choice, the friendly contact-info message, the Care Envelope for held notes, and "waiting to be placed on the shelf" in the Journal. Then build admin.html with login, Notes waiting, and approve/reject. Walk me through creating my admin login in Supabase and adding my user ID to the admins table.

**Check it:** post a normal note → it shows as waiting in your Journal · approve it on the admin page → it appears in the jar · a note with a phone number gets the friendly message · a note with a crisis phrase shows the Care Envelope and appears at the top of the admin queue marked as held.

### Phase 5 — Replies, flowers, and Letters
> Build Phase 5: replies with starter phrase chips and the 300-character limit, random sign-offs, flowers (one per person per note, no counts anywhere), Letters on the shelf (appears after your first post), the Replies waiting tab in admin, and the starter-only replies toggle in admin Settings.

**Check it:** reply to a starter note from your phone and approve it · use a second browser or device to reply to YOUR note → after you approve it, it lands in your Letters · tapping the flower twice only counts once · no number appears anywhere.

### Phase 6 — Drawer, deleting, reports, and removal requests
> Build Phase 6: the full Drawer (settings, house rules, privacy policy, your notes with delete, delete everything on this device, removal request form, text version link), the Report button on notes, the Reports and Removal requests tabs in admin, the Prompts tab, the Starter notes tab, lifespan fading, and yearly check-ins.

**Check it:** deleting your note removes it from the jar and from Journals · reporting a note shows up in admin · you can add a prompt from admin · a removal request shows up in admin.

### Phase 7 — Atmosphere
> Build Phase 7: the first-visit "dust off a jar" opening with Skip, the 18+ confirmation and house-rules summary, the Record Player sounds (rain, vinyl crackle, fireplace via Web Audio, off by default), "Your shelf grew" moments, and polish the animations and art.

**Check it:** first visit shows the opening; second visit skips it · Skip works · sound is off until you turn it on.

### Phase 8 — Accessibility and launch check
> Build Phase 8: text.html, reduce-motion support, keyboard and screen reader labels, and a contrast check for day and night. Then review the WHOLE site against every Hard rule in CLAUDE.md and every item in docs/CONTENT.md, list anything missing or broken, and fix it. Finally, give me a launch checklist.

**Check it:** turn on VoiceOver (iPhone) or TalkBack (Android) and make sure you can open a jar and read a note · turn on Reduce Motion in your phone's settings and the animations calm down.

---

## Part C — Before the closed test (your jobs, not Claude Code's)
- [ ] Call or text-check every Lantern resource to confirm it's current
- [ ] Read the privacy policy draft and compare it with a free template generator's version
- [ ] Line up your backup moderator and add them as an admin
- [ ] Finish your serious-case plan (draft in CONTENT.md)
- [ ] Set your review times and break rules
- [ ] Write a few more starter notes so jars aren't empty
- [ ] Invite 20–50 trusted people and ask them to write real notes

## Things to know
- **Supabase free projects pause after about a week with no activity.** Visits count as activity, but during quiet stretches, check the dashboard; if it's paused, click "Restore."
- **Your code is public** on GitHub. That's fine, but never paste the service_role key or your database password into any file.
- **Replacing the art:** each object is its own file in `assets/svg/`. You can draw your own and ask Claude Code to swap them in.
- **If Claude Code gets something wrong,** say what you expected, what happened, and on which screen. Ask it to fix only that, not rewrite everything.
