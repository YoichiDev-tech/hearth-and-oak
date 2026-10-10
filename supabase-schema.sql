-- Hearth & Oak contact enquiry storage.
-- Apply with a trusted Supabase database/admin connection.
create extension if not exists "pgcrypto";

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  source text not null default 'website',
  constraint enquiries_name_length_check check (char_length(btrim(name)) between 2 and 120),
  constraint enquiries_email_check check (char_length(btrim(email)) between 3 and 254 and email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  constraint enquiries_phone_length_check check (phone is null or char_length(btrim(phone)) between 7 and 40),
  constraint enquiries_subject_check check (subject in ('table', 'catering', 'events', 'feedback', 'other')),
  constraint enquiries_message_length_check check (char_length(btrim(message)) between 10 and 5000),
  constraint enquiries_source_length_check check (char_length(btrim(source)) between 1 and 60)
);

-- Add constraints to an existing table without blocking rollout on legacy rows.
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'enquiries_name_length_check' and conrelid = 'public.enquiries'::regclass) then
    alter table public.enquiries add constraint enquiries_name_length_check check (char_length(btrim(name)) between 2 and 120) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'enquiries_email_check' and conrelid = 'public.enquiries'::regclass) then
    alter table public.enquiries add constraint enquiries_email_check check (char_length(btrim(email)) between 3 and 254 and email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$') not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'enquiries_phone_length_check' and conrelid = 'public.enquiries'::regclass) then
    alter table public.enquiries add constraint enquiries_phone_length_check check (phone is null or char_length(btrim(phone)) between 7 and 40) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'enquiries_subject_check' and conrelid = 'public.enquiries'::regclass) then
    alter table public.enquiries add constraint enquiries_subject_check check (subject in ('table', 'catering', 'events', 'feedback', 'other')) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'enquiries_message_length_check' and conrelid = 'public.enquiries'::regclass) then
    alter table public.enquiries add constraint enquiries_message_length_check check (char_length(btrim(message)) between 10 and 5000) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'enquiries_source_length_check' and conrelid = 'public.enquiries'::regclass) then
    alter table public.enquiries add constraint enquiries_source_length_check check (char_length(btrim(source)) between 1 and 60) not valid;
  end if;
end
$$;

alter table public.enquiries enable row level security;
drop policy if exists "Allow public inserts on enquiries" on public.enquiries;
revoke all on table public.enquiries from anon, authenticated;
grant usage on schema public to service_role;
grant select, insert, update, delete on table public.enquiries to service_role;
