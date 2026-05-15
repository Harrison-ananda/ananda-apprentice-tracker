# go-live plan

The prototype is ready to become a live app, but the live version needs shared online storage so staff and apprentices are looking at the same records from different browsers.

## Recommended setup

- **Hosted website:** Vercel or Netlify
- **Database + file storage:** Supabase project `https://plxvpthbyyobrfxvhylu.supabase.co`
- **Staff access:** only you and Britt log in
- **Apprentice access:** each apprentice gets a private link with a long random token

## How apprentice links work

Staff adds an apprentice. The database creates a private token for that apprentice. The app copies a link like:

```text
https://your-site.com/?view=apprentice&token=PRIVATE_TOKEN
```

That link opens only that apprentice's read-only progress page. The apprentice can:

- View their progress
- Open Resources
- Add questions or things they want to work on

They cannot:

- Edit checkoffs
- See staff notes
- See other apprentices
- Manage Resources

## Staff permissions

Staff accounts can:

- Add/edit/delete apprentices
- Check off level requirements
- Add checkoff details
- Upload files
- Add private notes
- Edit global Resources
- Copy apprentice links

## What is needed next

1. Create a Supabase project.
2. Run `supabase-schema.sql` in Supabase SQL Editor.
3. In Supabase Authentication, create staff users for you and Britt.
4. Copy each staff user's UUID from Authentication > Users.
5. Add your staff user IDs to the `staff_users` table:

```sql
insert into public.staff_users (user_id, display_name)
values
  ('YOUR-USER-UUID', 'Your name'),
  ('BRITT-USER-UUID', 'Britt')
on conflict (user_id) do update
set display_name = excluded.display_name;
```

6. Deploy the website to Vercel or Netlify.
7. Add the Supabase project URL and public anon key to the app config.

## Current app config

The local project now includes `app-config.js` with the Supabase URL and publishable key you provided.

## Important privacy note

Private apprentice links should be treated like private documents. Anyone with the link can view that apprentice page. The links will be long and hard to guess, but they should not be posted publicly.
