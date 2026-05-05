# Supabase Setup

Create the following table in your Supabase project (SQL Editor):

```sql
CREATE TABLE contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  company text NOT NULL,
  role text,
  email text NOT NULL,
  phone text,
  project_type text,
  budget text,
  message text,
  nda_required boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Allow anyone to insert (the anon key is safe with this policy)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Only service-role can read (so you can view submissions in the Supabase dashboard)
CREATE POLICY "Only service role can read" ON contact_submissions
  FOR SELECT USING (auth.role() = 'service_role');
```

Then copy `.env.local.example` to `.env.local` and fill in your project URL and anon key:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Without these env vars the contact form still works — it shows the success state but does not store data.
