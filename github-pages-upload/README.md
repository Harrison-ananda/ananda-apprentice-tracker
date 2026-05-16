# Apprentice Growth Tracker

A small browser-based tracker for apprentice growth through the four apprentice program levels.

The visual styling is ananda-branded with the ananda logo, orange/blue accents from the apprentice level sheets, and the “developing your eye, hand, and heart” education language.

## What it does

- Adds a separate page for each apprentice.
- Tracks progress through Level 1, Level 2, Level 3, and Level 4.
- Stores checkoff details for each requirement: date, who taught it, how it was done, and notes.
- Creates an apprentice-facing view link where progress is read-only.
- Lets apprentices add questions or things they want to work on.
- Includes a Resources tab with the apprentice program guidelines PDF.
- Starts a staff-editable FAQ/how-to library for expectations, shift types, break rules, cleaning/resetting, and other program topics.
- Keeps apprentice coaching notes.
- Uploads files/photos/forms to each apprentice profile.
- Exports and imports a JSON backup.

## How data is saved

The app saves in the browser on the computer where it is used. Use **Export backup** regularly if the tracker will hold important records.

For a shared online version, this can be connected later to a hosted database and login system.

## Recommended online version

To email Britt a link and let apprentices view their own pages from any browser, the app needs:

- A hosted website URL.
- A shared database for apprentice records.
- Login accounts and roles:
  - Education director/admin: can add apprentices, edit progress, upload files, and write private notes.
- Private apprentice links:
  - Apprentice: can view their own progress and add questions/focus areas only.
- Private file storage for photos, forms, and examples.

Good next build path: keep this front end, connect it to Supabase for staff login, database records, file storage, and private apprentice links.

See [GO_LIVE.md](GO_LIVE.md) and [supabase-schema.sql](supabase-schema.sql).
