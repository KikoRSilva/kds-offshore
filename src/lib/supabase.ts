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
    console.warn(
      'Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.',
    );
    return { error: null };
  }

  const { error } = await supabase.rpc('submit_contact', {
    p_name: data.name,
    p_company: data.company,
    p_email: data.email,
    p_role: data.role || null,
    p_phone: data.phone || null,
    p_project_type: data.project_type || null,
    p_budget: data.budget || null,
    p_message: data.message || null,
    p_nda_required: data.nda_required,
  });

  if (error) {
    return { error: error.message };
  }

  return { error: null };
}
