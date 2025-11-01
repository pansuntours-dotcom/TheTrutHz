// app/api/gallery/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

// Force Node.js runtime for server-side API (optional, remove if using Edge)
export const runtime = 'nodejs';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('gallery_items')
      .select('*')
      .order('resonance_score', { ascending: false })
      .limit(200);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ items: data || [] });
  } catch (err: any) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}
