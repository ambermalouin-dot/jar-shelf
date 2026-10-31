# The Jar Shelf — Project Brief for Claude Code

Read this whole file before every session. It is the source of truth. If a request conflicts with this file, stop and ask Amber before building.

## What this is
A cozy, illustrated website where people leave anonymous notes and find notes from others going through the same things, so they feel less alone.
Pitch: "A cozy shelf where you leave a note and find one you needed."
Small, slow, kind. Adults 18+, all genders, US-only at launch.

## About the builder
Amber is building this solo and is new to coding. So:
- Explain every manual step she must do (Supabase dashboard, GitHub settings) in plain, numbered steps.
- Keep code simple and well commented. Prefer boring, readable code over clever code.
- Work on ONE phase of `docs/BUILD_PLAN.md` at a time. Finish it, test it, tell her exactly how to check it on her phone, then stop.
- Never add features that aren't in this file or the build plan. Suggest them instead.

## Hard rules (never break these)
- No likes, flower counts, follower counts, profiles, feeds, trending, streaks, or any number shown about engagement.
- No user accounts, no names, emails, passwords, or phone numbers collected from visitors. (Only Amber and her backup moderator log in, to the admin page.)
- No direct messages and no reply threads.
- No ads, analytics, tracking scripts, or non-essential cookies.
- Wording: "your shelf grows," never "unlock."
- Everything must stay free: GitHub Pages + Supabase free tier only. No paid APIs, no paid fonts, no paid services.
- Never put the Supabase secret / `service_role` key or any secret in the code. Only the public key (called "publishable" on newer Supabase projects, "anon" on older ones) goes in `js/config.js`. The visitor role is still `anon` in SQL either way.
- Every safety check (contact-info filter, crisis screening, rate limits, length limits) must run inside Supabase (SQL functions), not only in the browser. Browser checks are for friendly messages only.

## Tech stack
- **Frontend:** plain HTML, CSS, and JavaScript (ES modules). No framework, no build step, no npm required. Must run as static files on GitHub Pages.
- **Database:** Supabase (Postgres). Load `supabase-js` v2 from the jsDelivr CDN as an ES module.
- **Hosting:** GitHub Pages, served from the `main` branch root. Address will be like `https://<username>.github.io/<repo>/` — so use RELATIVE paths everywhere (`./css/main.css`, not `/css/main.css`).
- **SQL:** write numbered files in `supabase/` (`001_tables.sql`, `002_functions.sql`, …). Amber runs them by pasting into the Supabase SQL Editor. Do not require the Supabase CLI. Make each file safe to re-run where possible (`create or replace`, `if not exists`).

## Folder layout
```
index.html          the shelf (main page)
text.html           text-only version of the shelf for screen readers
admin.html          private review page (noindex)
css/                main.css, shelf.css, notes.css, admin.css
js/                 config.js, supabase.js, device.js, shelf.js, jars.js,
                    notes.js, write.js, reply.js, journal.js, letters.js,
                    lantern.js, drawer.js, sound.js, opening.js, lighting.js,
                    admin.js, content.js
assets/             svg/ (shelf, jars, stamps, icons), textures/
supabase/           numbered .sql files
docs/               BUILD_PLAN.md, CONTENT.md
```
All visitor-facing words come from `docs/CONTENT.md`. Copy them into `js/content.js` exactly; don't rewrite them.

## How anonymity works (device key)
- On first visit, create a random secret with `crypto.randomUUID()` and save it in `localStorage` as `jarshelf_device`. This is the visitor's only identity.
- Treat it like a password: send it ONLY as an argument to Supabase RPC functions. Never put it in a URL, never log it, never display it.
- The database never stores the raw key. Functions store and compare `encode(digest(p_device, 'sha256'), 'hex')` (pgcrypto).
- Public note data NEVER includes any writer key or hash, so no one can tell which notes came from the same person.
- Journal saves (list of saved note IDs) and seen-letter markers live in `localStorage` only.
- If `localStorage` is unavailable (private browsing), reading still works; show a gentle notice that posting and saving won't be remembered.

## Database design
Enable Row Level Security on EVERY table. Give the `anon` role NO direct table access. Visitors only touch data through `security definer` RPC functions with `set search_path = public`. Admin access goes through RLS policies that check an `admins` table against `auth.uid()`.

Tables:
- `prompts` — id, text, sort_order, active (bool).
- `notes` — id (uuid), jar (text: `tonight`, `love`, `family`, `work_school`, `worries`, `small_wins`), prompt_id (nullable, only for `tonight`), body (text, 1–1000 chars), writer_hash, status (`pending`, `approved`, `rejected`, `held`), lifespan (`keep` or `fade`), stamp (`moon`, `teacup`, `fern`, `star`, `crane`, picked randomly on insert), is_keeper (bool, starter notes "from the shelf keeper"), flagged_crisis (bool), created_at, approved_at, fade_at (approved_at + 90 days when lifespan = fade), last_checkin_at.
- `replies` — id, note_id (cascade delete), body (1–300 chars), signoff (picked from the sign-off list), sender_hash, status (`pending`, `approved`, `rejected`), created_at. One reply per sender per note.
- `flowers` — note_id (cascade), sender_hash, created_at. Unique (note_id, sender_hash).
- `reports` — id, note_id or reply_id, reason, created_at, resolved (bool).
- `removal_requests` — id, description (text up to 1000), created_at, resolved (bool). No contact info collected.
- `crisis_terms` — term (text). Seeded from CONTENT.md.
- `starter_phrases` — id, text. Seeded from CONTENT.md.
- `settings` — single row: `replies_starter_only` (bool, default false), `prompt_start_date` (date).
- `admins` — user_id (uuid, references auth.users).
- `rate_log` — hash, action, created_at (for limits).

Visitor RPC functions (all take `p_device text` where needed):
- `get_tonight()` → today's prompt (id, text, date). The day changes at **5:00 AM America/New_York** so late-night visitors keep the same prompt all night. Pick the prompt by `(days since prompt_start_date) mod (number of active prompts)` ordered by sort_order.
- `get_notes(p_jar, p_before timestamptz, p_limit int)` → approved, not-faded notes, newest first, paged. For `tonight`, only notes tied to today's prompt_id. Returns id, jar, body, stamp, is_keeper, approved_at. Nothing else.
- `get_notes_by_ids(p_ids uuid[])` → for the Journal. Missing IDs mean the note was deleted or faded; the Journal quietly removes them.
- `submit_note(p_device, p_jar, p_body, p_lifespan)` → runs checks in this order: length; rate limit (5 notes per device per day); contact-info filter (reject with code `contact_info`); crisis terms (insert with status `held`, flagged_crisis true, return `held`); otherwise insert `pending` and return `pending`.
- `get_my_notes(p_device)` → the writer's notes with status so the Journal can show "waiting to be placed on the shelf."
- `delete_my_note(p_device, p_note_id)` → deletes it for real (replies and flowers cascade).
- `submit_reply(p_device, p_note_id, p_body)` → length, rate limit (20/day), contact filter, crisis terms (hold for review, do not deliver), one per note, starter-only mode check. Writers can't reply to their own notes.
- `give_flower(p_device, p_note_id)` → one per device per note; rate limit 50/day. Returns nothing countable.
- `get_my_letters(p_device)` → for the writer's notes: approved replies (body + signoff + note excerpt), a single "flowers were left" item per note that has any (never a number), a Care Envelope for any note with flagged_crisis, and a yearly check-in item for `keep` notes approved 365+ days ago with no check-in in the last 365 days.
- `answer_checkin(p_device, p_note_id, p_keep bool)` → keep updates last_checkin_at; let go sets fade_at to now.
- `report(p_note_id or p_reply_id, p_reason)` → rate limited per device.
- `request_removal(p_device, p_description)` → rate limited.
- `get_starter_phrases()`, `get_settings()`.

Contact-info filter (SQL regex, case-insensitive) must catch: URLs and `www.`, bare domains like `name.com`, emails, US phone numbers in common formats (including spaced digits), and social handles (`@name`, "insta", "snap", "tiktok", "discord" followed by a name). Write test cases for it.

Crisis screening is a simple, case-insensitive phrase match against `crisis_terms` after lowercasing and collapsing spaces. It will miss things and flag false positives; that's expected. It only holds the note and sends the Care Envelope. Amber decides the rest.

Note: the Care Envelope must appear right away for flagged notes. `submit_note` returns `held`, and the frontend shows the Care Envelope immediately (and it also appears in Letters).

## Admin page (`admin.html`)
- Login with Supabase Auth email + password (Amber and backup moderator only; Amber creates their users in the Supabase dashboard and adds their IDs to `admins`). Turn OFF public sign-ups in Supabase.
- Tabs: Notes waiting (oldest first, held/flagged ones on top with a clear marker), Replies waiting, Reports, Removal requests, Prompts (add/edit/reorder/deactivate), Settings (starter-only replies toggle), Starter notes (write a note marked `is_keeper`, auto-approved).
- Approve/reject buttons big enough to tap on a phone. Show a count of what's waiting (admin only; counts are fine here).
- `<meta name="robots" content="noindex">`. Not linked from the public site.

## The shelf (index.html)
Vertical scrolling bookshelf on phones; centered with cozy margins on desktop.
- **Header (sticky):** site name, Lantern icon, Drawer icon. Always visible.
- **Everyone's shelf:** Tonight's Jar (shows today's prompt and date), Jar Cluster (tap to reveal the 5 topic jars), Record Player.
- **Your shelf grows:** Journal appears once the visitor saves or posts a note. Letters appears once they've posted a note. Show a gentle one-time line: "Your shelf grew."
- **Opening jar view:** notes appear as folded papers; tapping unfolds one (gentle animation). Each note shows its stamp, the text, "from the shelf keeper" if is_keeper, and buttons: Save, Reply, Leave a flower, Report.
- **Writing:** text box with live character count, lifespan choice ("Keep it on the shelf until I remove it" / "Let it fade after 90 days"), the device-storage warning, the screenshot notice, and the not-watched-live notice from CONTENT.md, then Submit. On `contact_info`, show the friendly message. On `held`, show the Care Envelope.
- **Replying:** starter phrases as tappable chips that fill the box (editable), 300 char limit, optional flower checkbox.
- **Lantern:** full-screen overlay with resources from CONTENT.md. Phone numbers as `tel:` links and text lines as `sms:` links. Reachable from every screen.
- **Drawer:** settings (sound on/off, reduce motion, replay opening), house rules, privacy policy, your notes (with delete), delete everything on this device, removal request form, text version link.
- **Record Player:** rain, vinyl crackle, fireplace — generated with the Web Audio API (no audio files, no licensing). Off by default. Gentle volume. Remember on/off in localStorage.
- **Opening (first visit only):** a "dust off a jar" moment (tap or swipe to clear dust), with a Skip button. Then the 18+ confirmation and house-rules summary. Return visits go straight to the shelf.
- **Lighting:** day (6 AM–7 PM local) and night (7 PM–6 AM) via a color overlay, not separate art.

## Look and feel
Warm, hand-made, cozy. Paper textures (CSS/SVG noise, no image files needed), soft wood shelf, glass jars with paper inside, muted warm palette (cream, honey, sage, dusty rose, deep wood brown; at night, deep blue and lamplight gold). Rounded friendly serif for headings and a readable sans for body, from Google Fonts (free). Art is simple inline SVG so Amber can swap in her own illustrations later — keep each object in its own SVG file in `assets/svg/` with a clear name.

## Accessibility (required, not optional)
- Every shelf object is a real `<button>` with an `aria-label`.
- Visible focus states; full keyboard use.
- `prefers-reduced-motion`: skip the dust-off and unfolding animations, plus a manual "reduce motion" setting in the Drawer.
- Text contrast meets WCAG AA in both day and night.
- `text.html` presents the same content as plain lists and forms.
- Tap targets at least 44×44 px.

## Testing each phase
- Give Amber a short checklist to test on her phone after each phase.
- For SQL, include a commented test block she can run in the SQL Editor that proves the rules work (e.g., a note with a phone number is rejected, a second flower from the same device is ignored, the public notes function never returns writer_hash).
- Before finishing a phase, re-read the Hard rules above and confirm none were broken.
