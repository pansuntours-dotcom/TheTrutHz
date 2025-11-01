// app/api/gallery/route.ts
import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Use edge runtime for instant API responses

export async function GET() {
  try {
    // Fetch up to 200 items from the gallery_items table, ordered by resonance_score descending
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
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
