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

grant execute on function public.get_staff_apprentices() to authenticated;

notify pgrst, 'reload schema';
