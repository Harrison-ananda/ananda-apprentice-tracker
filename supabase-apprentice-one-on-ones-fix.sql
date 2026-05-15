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

grant execute on function public.get_one_on_ones_by_token(text) to anon, authenticated;

notify pgrst, 'reload schema';
