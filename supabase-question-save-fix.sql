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

create or replace function public.save_question_staff(
  input_apprentice_id uuid,
  input_question_id uuid,
  input_question_date date,
  input_body text,
  input_status text
)
returns table (
  id uuid,
  question_date date,
  body text,
  status text,
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

  if input_question_id is null then
    return query
    insert into public.apprentice_questions (apprentice_id, question_date, body, status)
    values (input_apprentice_id, input_question_date, input_body, coalesce(nullif(input_status, ''), 'Open'))
    returning apprentice_questions.id, apprentice_questions.question_date, apprentice_questions.body, apprentice_questions.status, apprentice_questions.created_at;
  end if;

  return query
  update public.apprentice_questions
  set
    question_date = input_question_date,
    body = input_body,
    status = coalesce(nullif(input_status, ''), 'Open'),
    updated_at = now()
  where apprentice_questions.id = input_question_id
    and apprentice_questions.apprentice_id = input_apprentice_id
  returning apprentice_questions.id, apprentice_questions.question_date, apprentice_questions.body, apprentice_questions.status, apprentice_questions.created_at;
end;
$$;

grant execute on function public.save_question_staff(uuid, uuid, date, text, text) to authenticated;
grant execute on function public.add_question_by_token(text, text) to anon, authenticated;

notify pgrst, 'reload schema';
