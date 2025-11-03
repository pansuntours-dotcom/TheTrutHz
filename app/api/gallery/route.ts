// app/api/gallery/route.ts
import type { NextRequest } from 'next/server';
import { supabase } from '../../../lib/db';
import type { Database } from '../../../types/supabase';

type GalleryItem = Database['public']['Tables']['gallery_items']['Row'];

export async function GET(req: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('gallery_items')
      .select('*')
      .order('resonance_score', { ascending: false })
      .limit(200);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify(data as GalleryItem[]), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Unexpected error' }), {
      status: 500,
    });
  }
}
