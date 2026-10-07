import { createClient } from "@supabase/supabase-js";

// I create a browser-safe client using the public anon key only.
// Server-side routes can use the service role key when needed.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type for the contact / enquiry table I expect in Supabase
export type ContactEnquiry = {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  source?: string;
};
