// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Load from environment variables
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL or ANON key is missing. Make sure environment variables are set.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
