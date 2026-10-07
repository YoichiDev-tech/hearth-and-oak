-- I include this so you can spin up the enquiries table in one paste
-- inside the Supabase SQL editor.

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  source text default 'website'
);

-- Optional: allow inserts from the anon key for the contact form
alter table public.enquiries enable row level security;

create policy "Allow public inserts on enquiries"
  on public.enquiries
  for insert
  to anon, authenticated
  with check (true);

-- Owners can read everything via the service role or a later admin policy
