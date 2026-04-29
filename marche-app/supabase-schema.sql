create extension if not exists pgcrypto;

create table if not exists public.marche_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  event_type text not null check (event_type in ('view', 'click', 'conversion')),
  mode text,
  total numeric(12, 2),
  metadata jsonb not null default '{}'::jsonb
);

alter table public.marche_events enable row level security;

drop policy if exists "allow anon insert marche events" on public.marche_events;

create policy "allow anon insert marche events"
on public.marche_events
for insert
to anon
with check (true);

drop policy if exists "allow anon select marche events" on public.marche_events;

create policy "allow anon select marche events"
on public.marche_events
for select
to anon
using (true);

create index if not exists marche_events_created_at_idx on public.marche_events (created_at desc);
create index if not exists marche_events_type_idx on public.marche_events (event_type);
create index if not exists marche_events_mode_idx on public.marche_events (mode);
