-- ananda apprentice tracker checklist add/delete/move refresh
-- Run this in Supabase SQL Editor after pushing the app update.

create table if not exists public.task_customizations (
  task_key text primary key,
  title text not null default '',
  description text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.task_customizations
  add column if not exists level_id text,
  add column if not exists section_name text,
  add column if not exists sort_order integer not null default 0,
  add column if not exists is_custom boolean not null default false,
  add column if not exists is_deleted boolean not null default false;

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

drop function if exists public.get_task_customizations();
drop function if exists public.save_task_customization_staff(text, text, text);
drop function if exists public.save_task_customization_staff(text, text, text, text, text, integer, boolean, boolean);

create or replace function public.get_task_customizations()
returns table (
  task_key text,
  title text,
  description text,
  level_id text,
  section_name text,
  sort_order integer,
  is_custom boolean,
  is_deleted boolean,
  updated_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select
    c.task_key,
    c.title,
    c.description,
    c.level_id,
    c.section_name,
    c.sort_order,
    c.is_custom,
    c.is_deleted,
    c.updated_at
  from public.task_customizations c
  order by c.level_id nulls last, c.sort_order, c.task_key;
$$;

create or replace function public.save_task_customization_staff(
  input_task_key text,
  input_title text,
  input_description text,
  input_level_id text,
  input_section_name text,
  input_sort_order integer,
  input_is_custom boolean,
  input_is_deleted boolean
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

  if coalesce(input_task_key, '') = '' then
    raise exception 'Checklist item key is required';
  end if;

  insert into public.task_customizations (
    task_key,
    title,
    description,
    level_id,
    section_name,
    sort_order,
    is_custom,
    is_deleted,
    updated_at
  )
  values (
    input_task_key,
    coalesce(input_title, ''),
    coalesce(input_description, ''),
    nullif(input_level_id, ''),
    nullif(input_section_name, ''),
    coalesce(input_sort_order, 0),
    coalesce(input_is_custom, false),
    coalesce(input_is_deleted, false),
    now()
  )
  on conflict (task_key) do update set
    title = excluded.title,
    description = excluded.description,
    level_id = coalesce(excluded.level_id, public.task_customizations.level_id),
    section_name = coalesce(excluded.section_name, public.task_customizations.section_name),
    sort_order = excluded.sort_order,
    is_custom = public.task_customizations.is_custom or excluded.is_custom,
    is_deleted = excluded.is_deleted,
    updated_at = now();
end;
$$;

grant execute on function public.get_task_customizations() to anon, authenticated;
grant execute on function public.save_task_customization_staff(text, text, text, text, text, integer, boolean, boolean) to authenticated;

notify pgrst, 'reload schema';
