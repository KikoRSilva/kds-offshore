import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export type ContactSubmission = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  project_type: string;
  budget: string;
  message: string;
  nda_required: boolean;
};

export async function submitContact(data: ContactSubmission): Promise<{ error: string | null }> {
  if (!supabase) {
    console.warn('Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
    return { error: null };
  }

  const { error } = await supabase.from('contact_submissions').insert([data]);

  if (error) {
    return { error: error.message };
  }

  return { error: null };
}
