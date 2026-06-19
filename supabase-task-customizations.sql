-- ananda apprentice tracker checklist wording
-- Run this in Supabase SQL Editor so staff can edit checklist titles/descriptions globally.

create table if not exists public.task_customizations (
  task_key text primary key,
  title text not null default '',
  description text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.task_customizations enable row level security;

drop policy if exists "staff can manage task customizations" on public.task_customizations;
drop policy if exists "anyone can read task customizations" on public.task_customizations;

create policy "staff can manage task customizations"
on public.task_customizations for all
using (public.is_staff())
with check (public.is_staff());

create policy "anyone can read task customizations"
on public.task_customizations for select
using (true);

create or replace function public.get_task_customizations()
returns table (
  task_key text,
  title text,
  description text,
  updated_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select c.task_key, c.title, c.description, c.updated_at
  from public.task_customizations c
  order by c.task_key;
$$;

create or replace function public.save_task_customization_staff(
  input_task_key text,
  input_title text,
  input_description text
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

  insert into public.task_customizations (task_key, title, description, updated_at)
  values (
    input_task_key,
    coalesce(input_title, ''),
    coalesce(input_description, ''),
    now()
  )
  on conflict (task_key) do update set
    title = excluded.title,
    description = excluded.description,
    updated_at = now();
end;
$$;

grant execute on function public.get_task_customizations() to anon, authenticated;
grant execute on function public.save_task_customization_staff(text, text, text) to authenticated;

notify pgrst, 'reload schema';
