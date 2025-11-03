// lib/db.ts
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

// Use your actual Supabase credentials
const supabaseUrl = 'https://xiojphoyqjvcmsocgozu.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpb2pwaG95cWp2Y21zb2Nnb3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NDc0NjgsImV4cCI6MjA3NzUyMzQ2OH0.6nNuLUqa9EBcVS1EeD-glISFhFqBEHTS3gxcrLuQUkc';

// Create a typed Supabase client using your Database schema
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
