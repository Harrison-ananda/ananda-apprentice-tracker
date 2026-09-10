-- ananda apprentice tracker staff invite links
-- Run this once in Supabase SQL Editor after pushing the app update.

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.staff_invites (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  display_name text not null default '',
  invite_token text not null unique default encode(extensions.gen_random_bytes(32), 'hex'),
  accepted_by uuid references auth.users(id) on delete set null,
  accepted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint staff_invites_email_has_at check (position('@' in email) > 1)
);

alter table public.staff_invites enable row level security;

drop policy if exists "staff can manage staff invites" on public.staff_invites;

create policy "staff can manage staff invites"
on public.staff_invites for all
using (public.is_staff())
with check (public.is_staff());

drop function if exists public.create_staff_invite_staff(text, text);
drop function if exists public.get_pending_staff_invite(text);
drop function if exists public.accept_staff_invite(text);

create or replace function public.create_staff_invite_staff(
  input_email text,
  input_display_name text
)
returns table (
  email text,
  display_name text,
  invite_token text,
  created_at timestamptz,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
declare
  clean_email text := lower(trim(coalesce(input_email, '')));
  clean_name text := trim(coalesce(input_display_name, ''));
begin
  if not public.is_staff() then
    raise exception 'Staff access required';
  end if;

  if clean_email = '' or position('@' in clean_email) <= 1 then
    raise exception 'A valid staff email is required';
  end if;

  if clean_name = '' then
    clean_name := clean_email;
  end if;

  return query
  insert into public.staff_invites (
    email,
    display_name,
    invite_token,
    accepted_by,
    accepted_at,
    updated_at
  )
  values (
    clean_email,
    clean_name,
    encode(extensions.gen_random_bytes(32), 'hex'),
    null,
    null,
    now()
  )
  on conflict (email) do update set
    display_name = excluded.display_name,
    invite_token = encode(extensions.gen_random_bytes(32), 'hex'),
    accepted_by = null,
    accepted_at = null,
    updated_at = now()
  returning
    public.staff_invites.email,
    public.staff_invites.display_name,
    public.staff_invites.invite_token,
    public.staff_invites.created_at,
    public.staff_invites.updated_at;
end;
$$;

create or replace function public.get_pending_staff_invite(input_token text)
returns table (
  email text,
  display_name text,
  accepted_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select i.email, i.display_name, i.accepted_at
  from public.staff_invites i
  where i.invite_token = input_token
  limit 1;
$$;

create or replace function public.accept_staff_invite(input_token text)
returns table (
  ok boolean,
  display_name text
)
language plpgsql
security definer
set search_path = public
as $$
declare
  invite_row public.staff_invites%rowtype;
  current_email text := lower(coalesce(auth.jwt() ->> 'email', ''));
begin
  if auth.uid() is null then
    raise exception 'Log in or create your password first';
  end if;

  select *
  into invite_row
  from public.staff_invites
  where invite_token = input_token
  limit 1;

  if not found then
    raise exception 'This staff invite link could not be opened';
  end if;

  if current_email = '' or current_email <> lower(invite_row.email) then
    raise exception 'This invite is for %, but you are logged in as %', invite_row.email, coalesce(nullif(current_email, ''), 'a different email');
  end if;

  insert into public.staff_users (user_id, display_name)
  values (auth.uid(), coalesce(nullif(invite_row.display_name, ''), invite_row.email))
  on conflict (user_id) do update
  set display_name = excluded.display_name;

  update public.staff_invites
  set accepted_by = auth.uid(),
      accepted_at = coalesce(accepted_at, now()),
      updated_at = now()
  where id = invite_row.id;

  return query select true, coalesce(nullif(invite_row.display_name, ''), invite_row.email);
end;
$$;

grant execute on function public.create_staff_invite_staff(text, text) to authenticated;
grant execute on function public.get_pending_staff_invite(text) to anon, authenticated;
grant execute on function public.accept_staff_invite(text) to authenticated;

notify pgrst, 'reload schema';
