# Supabase Setup

The Supabase project for this site is already provisioned (project ref `rlnychlpsjixgjsaklyu`, region `eu-west-3`). The migrations below have been applied. This file documents them so the schema can be re-created in another environment if needed.

## Schema

```sql
-- 1) Table
create table public.contact_submissions (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  company       text not null,
  role          text,
  email         text not null,
  phone         text,
  project_type  text,
  budget        text,
  message       text,
  nda_required  boolean not null default false,
  created_at    timestamptz not null default now()
);

create index contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

-- 2) Lock the table down. RLS is enabled and there is NO policy on
-- SELECT/UPDATE/DELETE — only service_role (used in the Supabase
-- dashboard) can read submissions. INSERT happens through the RPC
-- below, not directly.
alter table public.contact_submissions enable row level security;

-- 3) Length / format CHECK constraints to mitigate spam abuse
alter table public.contact_submissions
  add constraint contact_submissions_name_len
    check (char_length(name) between 1 and 200),
  add constraint contact_submissions_company_len
    check (char_length(company) between 1 and 200),
  add constraint contact_submissions_email_format
    check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
           and char_length(email) <= 200),
  add constraint contact_submissions_phone_len
    check (phone is null or char_length(phone) <= 60),
  add constraint contact_submissions_role_len
    check (role is null or char_length(role) <= 120),
  add constraint contact_submissions_project_type_len
    check (project_type is null or char_length(project_type) <= 120),
  add constraint contact_submissions_budget_len
    check (budget is null or char_length(budget) <= 60),
  add constraint contact_submissions_message_len
    check (message is null or char_length(message) <= 5000);

-- 4) Public RPC — the website calls this instead of inserting directly.
-- SECURITY DEFINER means the call runs with the function owner's privileges
-- so it can bypass the table's RLS, while the function itself validates
-- inputs and only ever inserts (never reads). This pattern is the
-- Supabase-recommended way to expose write-only forms safely.
create or replace function public.submit_contact(
  p_name         text,
  p_company      text,
  p_email        text,
  p_role         text default null,
  p_phone        text default null,
  p_project_type text default null,
  p_budget       text default null,
  p_message      text default null,
  p_nda_required boolean default false
) returns uuid
  language plpgsql
  security definer
  set search_path = public, pg_temp
as $$
declare new_id uuid;
begin
  if length(coalesce(trim(p_name), '')) = 0 then
    raise exception 'name is required' using errcode = '22023';
  end if;
  if length(coalesce(trim(p_company), '')) = 0 then
    raise exception 'company is required' using errcode = '22023';
  end if;
  if p_email is null
     or p_email !~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' then
    raise exception 'a valid email is required' using errcode = '22023';
  end if;

  insert into public.contact_submissions
    (name, company, role, email, phone, project_type, budget, message, nda_required)
  values
    (trim(p_name), trim(p_company), nullif(trim(coalesce(p_role,'')),''),
     trim(p_email), nullif(trim(coalesce(p_phone,'')),''),
     nullif(p_project_type,''), nullif(p_budget,''),
     nullif(trim(coalesce(p_message,'')),''), coalesce(p_nda_required, false))
  returning id into new_id;

  return new_id;
end $$;

revoke all on function public.submit_contact(text, text, text, text, text, text, text, text, boolean) from public;
grant execute on function public.submit_contact(text, text, text, text, text, text, text, text, boolean) to anon, authenticated;
```

## Environment

Already configured in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://rlnychlpsjixgjsaklyu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_zZ34eVw1UxsVWh8XdN7_aQ_iSe18-NU
```

Without these env vars the contact form still validates and shows the success state — it just doesn't store anything.

## Viewing submissions

Open the Supabase dashboard for project `kds-offshore` → **Table Editor** → `contact_submissions`. The dashboard uses the service role, which bypasses RLS, so you can see every row.

You can also export them to CSV from the dashboard, or query via SQL:

```sql
select created_at, name, company, email, project_type, budget, message
from public.contact_submissions
order by created_at desc
limit 50;
```
