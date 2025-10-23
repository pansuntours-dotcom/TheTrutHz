// app/api/webhook/resonance/route.ts
import { supabase } from '../../../../lib/supabaseClient';
import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Body should contain: postId, title, asset_url, type ('audio'|'video'|'image'|'live'), thumbnail_url?, resonance_score
    const { postId, title, asset_url, type = 'image', thumbnail_url, resonance_score = 0, prompt } = body;

    if (!postId || !asset_url || !title) {
      return NextResponse.json({ error: 'missing fields' }, { status: 400 });
    }

    // Optionally, generate thumbnail by calling internal thumbnail API
    let thumb = thumbnail_url;
    if (!thumb && (type === 'video' || type === 'live')) {
      // Call internal thumbnail generator
      try {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_SITE_ORIGIN || ''}/api/thumbnail`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: asset_url, idHint: postId }),
        });
        const j = await resp.json();
        thumb = j.thumbnail_url || thumb;
      } catch (e) {
        // fallback
      }
    }

    // Insert into Supabase
    const { data, error } = await supabase.from('gallery_items').insert([
      {
        title,
        description: prompt ?? '',
        type,
        asset_url,
        thumbnail_url: thumb,
        resonance_score,
        metadata: { sourcePost: postId, createdBy: 'webhook' },
      },
    ]).select().single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ item: data }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
