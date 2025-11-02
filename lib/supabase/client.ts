// lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js'

// ✅ Read your environment variables
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://YOUR-PROJECT-REF.supabase.co'
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'YOUR-ANON-KEY'

// ✅ Create the client once and reuse it
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
