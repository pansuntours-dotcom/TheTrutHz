// app/api/thumbnail/route.tsx
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge'; // ensures edge/serverless runtime

export async function GET() {
  try {
    // Example: simple OG image with a colored background and text
    const width = 1200;
    const height = 630;

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#1a1a1a',
            color: '#fff',
            fontSize: 72,
            fontWeight: 700,
            fontFamily: 'sans-serif',
          }}
        >
          The TrutHz
        </div>
      ),
      { width, height }
    );
  } catch (err) {
    console.error(err);
    return new Response('Failed to generate image', { status: 500 });
  }
}
