// app/api/thumbnail/route.tsx
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // Placeholder: returns a simple JSON thumbnail info
  // You can replace with a proper image generation method later
  const placeholderThumbnail = {
    url: 'https://via.placeholder.com/800x400.png?text=TrutHz+Thumbnail',
    width: 800,
    height: 400,
  };

  return new Response(JSON.stringify(placeholderThumbnail), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
