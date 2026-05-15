create or replace function public.delete_apprentice_staff(input_apprentice_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_staff() then
    raise exception 'Staff access required';
  end if;

  delete from public.apprentices
  where id = input_apprentice_id;
end;
$$;

grant execute on function public.delete_apprentice_staff(uuid) to authenticated;

notify pgrst, 'reload schema';
