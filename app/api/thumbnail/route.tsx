// app/api/thumbnail/route.tsx

// You can safely delete this if you don't generate Open Graph images.
// If you do plan to generate them, use a cross-platform library like 'satori' or 'canvas' instead.

export async function GET() {
  return new Response('Thumbnail route active (no OG image generator installed).', {
    status: 200,
  });
}
