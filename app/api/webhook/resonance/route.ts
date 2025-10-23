import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function POST(request: Request) {
  let thumb = '';

  try {
    const body = await request.json();
    const payload = body.payload || {};

    // Replace with your actual API URL
    const apiUrl = 'https://example.com/api/generate-thumbnail';

    const resp = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Type assertion for unknown JSON
    const j = (await resp.json()) as { thumbnail_url?: string };
    thumb = j.thumbnail_url || thumb;
  } catch (e) {
    console.error('Webhook thumbnail fetch failed', e);
    // fallback thumbnail remains empty string
  }

  return NextResponse.json({ thumbnail: thumb });
}
