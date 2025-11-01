import { supabase } from '../../../lib/supabaseClient';
import { NextResponse } from 'next/server';

// Make sure runtime is set for Netlify compatibility
export const runtime = 'nodejs';

export async function GET() {
  const { data, error } = await supabase
    .from('gallery_items')
    .select('*')
    .order('resonance_score', { ascending: false })
    .limit(200);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ items: data || [] });
}
