// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// Make sure you have these environment variables set in Netlify:
// SUPABASE_URL and SUPABASE_ANON_KEY
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Please set SUPABASE_URL and SUPABASE_ANON_KEY in Netlify."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
