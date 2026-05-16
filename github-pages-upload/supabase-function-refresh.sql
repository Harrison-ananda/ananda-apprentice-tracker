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

create table if not exists public.one_on_ones (
  id uuid primary key default gen_random_uuid(),
  apprentice_id uuid not null references public.apprentices(id) on delete cascade,
  meeting_date date not null default current_date,
  subject text not null default '',
  body text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.one_on_ones enable row level security;

drop policy if exists "staff can manage one on ones" on public.one_on_ones;

create policy "staff can manage one on ones"
on public.one_on_ones for all
using (public.is_staff())
with check (public.is_staff());

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

grant execute on function public.create_apprentice_staff(text) to authenticated;
grant execute on function public.save_task_progress(uuid, text, boolean, date, text, text, text) to authenticated;
grant execute on function public.get_staff_apprentices() to authenticated;
grant execute on function public.get_staff_task_progress() to authenticated;
grant execute on function public.get_staff_one_on_ones() to authenticated;
grant execute on function public.save_one_on_one_staff(uuid, uuid, date, text, text) to authenticated;
grant execute on function public.delete_one_on_one_staff(uuid) to authenticated;
grant execute on function public.get_apprentice_by_token(text) to anon, authenticated;
grant execute on function public.get_progress_by_token(text) to anon, authenticated;
grant execute on function public.get_questions_by_token(text) to anon, authenticated;

notify pgrst, 'reload schema';
