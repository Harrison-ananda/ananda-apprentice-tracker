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

alter table public.apprentice_files enable row level security;

drop policy if exists "staff can manage apprentice files" on public.apprentice_files;

create policy "staff can manage apprentice files"
on public.apprentice_files for all
using (public.is_staff())
with check (public.is_staff());

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

grant execute on function public.get_staff_files() to authenticated;
grant execute on function public.save_file_staff(uuid, text, text, integer, text) to authenticated;
grant execute on function public.delete_file_staff(uuid) to authenticated;
grant execute on function public.get_files_by_token(text) to anon, authenticated;

notify pgrst, 'reload schema';
