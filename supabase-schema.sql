-- ananda apprentice growth tracker
-- Run this in Supabase SQL Editor for the live version.

create extension if not exists pgcrypto;

create table if not exists public.staff_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.apprentices (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  start_date date,
  mentor text,
  current_level text not null default 'level-1',
  share_token text not null unique default encode(gen_random_bytes(32), 'hex'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.task_progress (
  apprentice_id uuid not null references public.apprentices(id) on delete cascade,
  task_key text not null,
  complete boolean not null default false,
  completed_on date,
  taught_by text,
  method text,
  notes text,
  updated_at timestamptz not null default now(),
  primary key (apprentice_id, task_key)
);

create table if not exists public.apprentice_questions (
  id uuid primary key default gen_random_uuid(),
  apprentice_id uuid not null references public.apprentices(id) on delete cascade,
  question_date date not null default current_date,
  body text not null default '',
  status text not null default 'Open',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.staff_notes (
  id uuid primary key default gen_random_uuid(),
  apprentice_id uuid not null references public.apprentices(id) on delete cascade,
  note_date date not null default current_date,
  body text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.one_on_ones (
  id uuid primary key default gen_random_uuid(),
  apprentice_id uuid not null references public.apprentices(id) on delete cascade,
  meeting_date date not null default current_date,
  subject text not null default '',
  body text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.apprentice_files (
  id uuid primary key default gen_random_uuid(),
  apprentice_id uuid not null references public.apprentices(id) on delete cascade,
  file_name text not null,
  file_type text not null default '',
  file_size integer not null default 0,
  data_url text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'FAQ',
  body text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.staff_users
    where user_id = auth.uid()
  );
$$;

alter table public.staff_users enable row level security;
alter table public.apprentices enable row level security;
alter table public.task_progress enable row level security;
alter table public.apprentice_questions enable row level security;
alter table public.staff_notes enable row level security;
alter table public.one_on_ones enable row level security;
alter table public.apprentice_files enable row level security;
alter table public.resources enable row level security;

drop policy if exists "staff can read staff users" on public.staff_users;
drop policy if exists "staff can manage apprentices" on public.apprentices;
drop policy if exists "staff can manage task progress" on public.task_progress;
drop policy if exists "staff can manage apprentice questions" on public.apprentice_questions;
drop policy if exists "staff can manage staff notes" on public.staff_notes;
drop policy if exists "staff can manage one on ones" on public.one_on_ones;
drop policy if exists "staff can manage apprentice files" on public.apprentice_files;
drop policy if exists "staff can manage resources" on public.resources;
drop policy if exists "anyone can read resources" on public.resources;

create policy "staff can read staff users"
on public.staff_users for select
using (public.is_staff());

create policy "staff can manage apprentices"
on public.apprentices for all
using (public.is_staff())
with check (public.is_staff());

create policy "staff can manage task progress"
on public.task_progress for all
using (public.is_staff())
with check (public.is_staff());

create policy "staff can manage apprentice questions"
on public.apprentice_questions for all
using (public.is_staff())
with check (public.is_staff());

create policy "staff can manage staff notes"
on public.staff_notes for all
using (public.is_staff())
with check (public.is_staff());

create policy "staff can manage one on ones"
on public.one_on_ones for all
using (public.is_staff())
with check (public.is_staff());

create policy "staff can manage apprentice files"
on public.apprentice_files for all
using (public.is_staff())
with check (public.is_staff());

create policy "staff can manage resources"
on public.resources for all
using (public.is_staff())
with check (public.is_staff());

create policy "anyone can read resources"
on public.resources for select
using (true);

drop function if exists public.get_apprentice_by_token(text);
drop function if exists public.get_progress_by_token(text);
drop function if exists public.get_questions_by_token(text);
drop function if exists public.get_one_on_ones_by_token(text);
drop function if exists public.add_question_by_token(text, text);
drop function if exists public.get_files_by_token(text);
drop function if exists public.get_staff_files();
drop function if exists public.save_file_staff(uuid, text, text, integer, text);
drop function if exists public.delete_file_staff(uuid);
drop function if exists public.save_task_progress(uuid, text, boolean, date, text, text, text);
drop function if exists public.delete_apprentice_staff(uuid);
drop function if exists public.update_apprentice_staff(uuid, text, date, text, text);
drop function if exists public.create_apprentice_staff(text);

create or replace function public.get_apprentice_by_token(token text)
returns table (
  id uuid,
  name text,
  start_date date,
  mentor text,
  current_level text
)
language sql
stable
security definer
set search_path = public
as $$
  select a.id, a.name, a.start_date, a.mentor, a.current_level
  from public.apprentices a
  where a.share_token = token;
$$;

create or replace function public.get_progress_by_token(token text)
returns table (
  task_key text,
  complete boolean,
  completed_on date,
  taught_by text,
  method text,
  notes text
)
language sql
stable
security definer
set search_path = public
as $$
  select p.task_key, p.complete, p.completed_on, p.taught_by, p.method, p.notes
  from public.task_progress p
  join public.apprentices a on a.id = p.apprentice_id
  where a.share_token = token;
$$;

create or replace function public.get_questions_by_token(token text)
returns table (
  id uuid,
  question_date date,
  body text,
  status text,
  created_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select q.id, q.question_date, q.body, q.status, q.created_at
  from public.apprentice_questions q
  join public.apprentices a on a.id = q.apprentice_id
  where a.share_token = token
  order by q.created_at desc;
$$;

create or replace function public.create_apprentice_staff(input_name text)
returns table (
  id uuid,
  name text,
  start_date date,
  mentor text,
  current_level text,
  share_token text,
  created_at timestamptz,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_staff() then
    raise exception 'Staff access required';
  end if;

  return query
  insert into public.apprentices (name)
  values (trim(input_name))
  returning
    apprentices.id,
    apprentices.name,
    apprentices.start_date,
    apprentices.mentor,
    apprentices.current_level,
    apprentices.share_token,
    apprentices.created_at,
    apprentices.updated_at;
end;
$$;

create or replace function public.delete_apprentice_staff(input_apprentice_id uuid)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  deleted_count integer;
begin
  if not public.is_staff() then
    raise exception 'Staff access required';
  end if;

  delete from public.apprentices
  where id = input_apprentice_id
  returning 1 into deleted_count;

  return coalesce(deleted_count, 0);
end;
$$;

create or replace function public.update_apprentice_staff(
  input_apprentice_id uuid,
  input_name text,
  input_start_date date,
  input_mentor text,
  input_current_level text
)
returns table (
  id uuid,
  name text,
  start_date date,
  mentor text,
  current_level text,
  share_token text,
  created_at timestamptz,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_staff() then
    raise exception 'Staff access required';
  end if;

  return query
  update public.apprentices
  set
    name = trim(input_name),
    start_date = input_start_date,
    mentor = nullif(trim(coalesce(input_mentor, '')), ''),
    current_level = coalesce(nullif(input_current_level, ''), 'level-1'),
    updated_at = now()
  where apprentices.id = input_apprentice_id
  returning
    apprentices.id,
    apprentices.name,
    apprentices.start_date,
    apprentices.mentor,
    apprentices.current_level,
    apprentices.share_token,
    apprentices.created_at,
    apprentices.updated_at;
end;
$$;

create or replace function public.save_task_progress(
  input_apprentice_id uuid,
  input_task_key text,
  input_complete boolean,
  input_completed_on date,
  input_taught_by text,
  input_method text,
  input_notes text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_staff() then
    raise exception 'Staff access required';
  end if;

  insert into public.task_progress (
    apprentice_id,
    task_key,
    complete,
    completed_on,
    taught_by,
    method,
    notes,
    updated_at
  )
  values (
    input_apprentice_id,
    input_task_key,
    input_complete,
    input_completed_on,
    input_taught_by,
    input_method,
    input_notes,
    now()
  )
  on conflict (apprentice_id, task_key) do update
  set
    complete = excluded.complete,
    completed_on = excluded.completed_on,
    taught_by = excluded.taught_by,
    method = excluded.method,
    notes = excluded.notes,
    updated_at = now();
end;
$$;

create or replace function public.get_staff_task_progress()
returns table (
  apprentice_id uuid,
  task_key text,
  complete boolean,
  completed_on date,
  taught_by text,
  method text,
  notes text
)
language sql
stable
security definer
set search_path = public
as $$
  select p.apprentice_id, p.task_key, p.complete, p.completed_on, p.taught_by, p.method, p.notes
  from public.task_progress p
  where public.is_staff();
$$;

create or replace function public.get_staff_apprentices()
returns table (
  id uuid,
  name text,
  start_date date,
  mentor text,
  current_level text,
  share_token text,
  created_at timestamptz,
  updated_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select a.id, a.name, a.start_date, a.mentor, a.current_level, a.share_token, a.created_at, a.updated_at
  from public.apprentices a
  where public.is_staff()
  order by a.name;
$$;

create or replace function public.get_staff_one_on_ones()
returns table (
  id uuid,
  apprentice_id uuid,
  meeting_date date,
  subject text,
  body text,
  created_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select o.id, o.apprentice_id, o.meeting_date, o.subject, o.body, o.created_at
  from public.one_on_ones o
  where public.is_staff()
  order by o.meeting_date desc, o.created_at desc;
$$;

create or replace function public.get_staff_files()
returns table (
  id uuid,
  apprentice_id uuid,
  file_name text,
  file_type text,
  file_size integer,
  data_url text,
  created_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select f.id, f.apprentice_id, f.file_name, f.file_type, f.file_size, f.data_url, f.created_at
  from public.apprentice_files f
  where public.is_staff()
  order by f.created_at desc;
$$;

create or replace function public.save_one_on_one_staff(
  input_apprentice_id uuid,
  input_meeting_id uuid,
  input_meeting_date date,
  input_subject text,
  input_body text
)
returns table (
  id uuid,
  meeting_date date,
  subject text,
  body text,
  created_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_staff() then
    raise exception 'Staff access required';
  end if;

  if input_meeting_id is null then
    return query
    insert into public.one_on_ones (apprentice_id, meeting_date, subject, body)
    values (input_apprentice_id, input_meeting_date, input_subject, input_body)
    returning one_on_ones.id, one_on_ones.meeting_date, one_on_ones.subject, one_on_ones.body, one_on_ones.created_at;
  end if;

  return query
  update public.one_on_ones
  set
    meeting_date = input_meeting_date,
    subject = input_subject,
    body = input_body,
    updated_at = now()
  where one_on_ones.id = input_meeting_id
  returning one_on_ones.id, one_on_ones.meeting_date, one_on_ones.subject, one_on_ones.body, one_on_ones.created_at;
end;
$$;

create or replace function public.save_file_staff(
  input_apprentice_id uuid,
  input_file_name text,
  input_file_type text,
  input_file_size integer,
  input_data_url text
)
returns table (
  id uuid,
  file_name text,
  file_type text,
  file_size integer,
  data_url text,
  created_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_staff() then
    raise exception 'Staff access required';
  end if;

  return query
  insert into public.apprentice_files (apprentice_id, file_name, file_type, file_size, data_url)
  values (input_apprentice_id, input_file_name, coalesce(input_file_type, ''), coalesce(input_file_size, 0), input_data_url)
  returning apprentice_files.id, apprentice_files.file_name, apprentice_files.file_type, apprentice_files.file_size, apprentice_files.data_url, apprentice_files.created_at;
end;
$$;

create or replace function public.delete_one_on_one_staff(input_meeting_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_staff() then
    raise exception 'Staff access required';
  end if;

  delete from public.one_on_ones
  where id = input_meeting_id;
end;
$$;

create or replace function public.delete_file_staff(input_file_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_staff() then
    raise exception 'Staff access required';
  end if;

  delete from public.apprentice_files
  where id = input_file_id;
end;
$$;

create or replace function public.get_one_on_ones_by_token(input_token text)
returns table (
  id uuid,
  meeting_date date,
  subject text,
  body text,
  created_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select o.id, o.meeting_date, o.subject, o.body, o.created_at
  from public.one_on_ones o
  join public.apprentices a on a.id = o.apprentice_id
  where a.share_token = input_token
  order by o.meeting_date desc, o.created_at desc;
$$;

create or replace function public.get_files_by_token(input_token text)
returns table (
  id uuid,
  file_name text,
  file_type text,
  file_size integer,
  data_url text,
  created_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select f.id, f.file_name, f.file_type, f.file_size, f.data_url, f.created_at
  from public.apprentice_files f
  join public.apprentices a on a.id = f.apprentice_id
  where a.share_token = input_token
  order by f.created_at desc;
$$;

create or replace function public.add_question_by_token(input_token text, question_body text)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  apprentice uuid;
  new_question uuid;
begin
  select id into apprentice
  from public.apprentices
  where share_token = input_token;

  if apprentice is null then
    raise exception 'Invalid apprentice link';
  end if;

  insert into public.apprentice_questions (apprentice_id, body)
  values (apprentice, question_body)
  returning id into new_question;

  return new_question;
end;
$$;

grant execute on function public.create_apprentice_staff(text) to authenticated;
grant execute on function public.delete_apprentice_staff(uuid) to authenticated;
grant execute on function public.update_apprentice_staff(uuid, text, date, text, text) to authenticated;
grant execute on function public.save_task_progress(uuid, text, boolean, date, text, text, text) to authenticated;
grant execute on function public.get_staff_apprentices() to authenticated;
grant execute on function public.get_staff_task_progress() to authenticated;
grant execute on function public.get_staff_one_on_ones() to authenticated;
grant execute on function public.get_staff_files() to authenticated;
grant execute on function public.save_one_on_one_staff(uuid, uuid, date, text, text) to authenticated;
grant execute on function public.delete_one_on_one_staff(uuid) to authenticated;
grant execute on function public.save_file_staff(uuid, text, text, integer, text) to authenticated;
grant execute on function public.delete_file_staff(uuid) to authenticated;
grant execute on function public.get_apprentice_by_token(text) to anon, authenticated;
grant execute on function public.get_progress_by_token(text) to anon, authenticated;
grant execute on function public.get_questions_by_token(text) to anon, authenticated;
grant execute on function public.get_one_on_ones_by_token(text) to anon, authenticated;
grant execute on function public.get_files_by_token(text) to anon, authenticated;
grant execute on function public.add_question_by_token(text, text) to anon, authenticated;

notify pgrst, 'reload schema';

insert into public.resources (title, category, body, sort_order)
values
  ('Program overview', 'Expectations', 'Apprentices are a huge asset to ananda hair studio and are future stylists. The program is built to help apprentices grow their eye, hand, and heart through education, salon support, observing mentors, and model days.', 10),
  ('Objective', 'Expectations', 'The goal is to guide apprentices toward a professional hairstylist career through elevated education and support, while helping assess current strengths and areas for growth.', 20),
  ('Shift types', 'Shift types', 'Apprentice shifts include salon assistant shifts, shadow days, and model days. Each type has a different focus, but all require professionalism, awareness, and contribution to the salon.', 30),
  ('Break rules', 'Policies', 'Use the full PDF for the current break policy. Staff can update this resource as the policy is finalized.', 40)
on conflict do nothing;
