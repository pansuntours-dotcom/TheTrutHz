// app/api/gallery/route.ts
// Force Node runtime and make route dynamic (avoid build-time collection)
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('gallery_items')
      .select('*')
      .order('resonance_score', { ascending: false })
      .limit(200);

    if (error) {
      console.error('Supabase error:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ items: data || [] });
  } catch (err: any) {
    console.error('Unexpected error in gallery route:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
