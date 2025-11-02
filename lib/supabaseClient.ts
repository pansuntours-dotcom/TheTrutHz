import { createClient } from '@supabase/supabase-js';

// Supabase URL and Anon Key
const SUPABASE_URL = 'https://xiojphoyqjvcmsocgozu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpb2pwaG95cWp2Y21zb2Nnb3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NDc0NjgsImV4cCI6MjA3NzUyMzQ2OH0.6nNuLUqa9EBcVS1EeD-glISFhFqBEHTS3gxcrLuQUkc';

// Create and export Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
