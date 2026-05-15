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

grant execute on function public.update_apprentice_staff(uuid, text, date, text, text) to authenticated;

notify pgrst, 'reload schema';
