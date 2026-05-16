-- ananda apprentice tracker question refresh
-- Run this in Supabase SQL Editor so staff and apprentice questions share the same live data.

create or replace function public.get_staff_questions()
returns table (
  id uuid,
  apprentice_id uuid,
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
  select q.id, q.apprentice_id, q.question_date, q.body, q.status, q.created_at
  from public.apprentice_questions q
  where public.is_staff()
  order by q.created_at desc;
$$;

create or replace function public.save_question_staff(
  input_question_id uuid,
  input_apprentice_id uuid,
  input_question_date date,
  input_body text,
  input_status text
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  saved_id uuid;
begin
  if not public.is_staff() then
    raise exception 'Staff access required';
  end if;

  insert into public.apprentice_questions (id, apprentice_id, question_date, body, status, updated_at)
  values (
    coalesce(input_question_id, gen_random_uuid()),
    input_apprentice_id,
    coalesce(input_question_date, current_date),
    coalesce(input_body, ''),
    coalesce(nullif(input_status, ''), 'Open'),
    now()
  )
  on conflict (id) do update set
    question_date = excluded.question_date,
    body = excluded.body,
    status = excluded.status,
    updated_at = now()
  returning id into saved_id;

  return saved_id;
end;
$$;

create or replace function public.delete_question_staff(input_question_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_staff() then
    raise exception 'Staff access required';
  end if;

  delete from public.apprentice_questions
  where id = input_question_id;
end;
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
  values (apprentice, coalesce(question_body, ''))
  returning id into new_question;

  return new_question;
end;
$$;

grant execute on function public.get_staff_questions() to authenticated;
grant execute on function public.save_question_staff(uuid, uuid, date, text, text) to authenticated;
grant execute on function public.delete_question_staff(uuid) to authenticated;
grant execute on function public.add_question_by_token(text, text) to anon, authenticated;

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

  return query
  insert into public.one_on_ones (id, apprentice_id, meeting_date, subject, body, updated_at)
  values (
    coalesce(input_meeting_id, gen_random_uuid()),
    input_apprentice_id,
    coalesce(input_meeting_date, current_date),
    coalesce(input_subject, ''),
    coalesce(input_body, ''),
    now()
  )
  on conflict (id) do update set
    meeting_date = excluded.meeting_date,
    subject = excluded.subject,
    body = excluded.body,
    updated_at = now()
  returning one_on_ones.id, one_on_ones.meeting_date, one_on_ones.subject, one_on_ones.body, one_on_ones.created_at;
end;
$$;

grant execute on function public.save_one_on_one_staff(uuid, uuid, date, text, text) to authenticated;

notify pgrst, 'reload schema';
