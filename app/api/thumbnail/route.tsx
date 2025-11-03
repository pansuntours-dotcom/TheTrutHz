// app/api/thumbnail/route.tsx
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  return new Response(
    JSON.stringify({
      url: 'https://via.placeholder.com/800x400.png?text=TrutHz+Thumbnail',
      width: 800,
      height: 400,
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
