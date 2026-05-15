drop function if exists public.delete_apprentice_staff(uuid);

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

grant execute on function public.delete_apprentice_staff(uuid) to authenticated;

notify pgrst, 'reload schema';
