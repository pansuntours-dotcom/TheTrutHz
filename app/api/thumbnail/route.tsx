// app/api/thumbnail/route.tsx
import { NextResponse } from 'next/server';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

export const runtime = 'nodejs'; // Works with Netlify

export async function GET() {
  try {
    // Step 1: Create an SVG using Satori
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          background: 'black',
          color: 'white',
          width: '1200px',
          height: '630px',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 64,
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
        }}
      >
        The TrutHz
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: await fetch(
              'https://rsms.me/inter/font-files/Inter-Regular.woff'
            ).then((res) => res.arrayBuffer()),
            weight: 400,
            style: 'normal',
          },
        ],
      }
    );

    // Step 2: Convert the SVG into a PNG using Resvg
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    // Step 3: Return PNG as response
    return new NextResponse(pngBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=3600, immutable',
      },
    });
  } catch (err: any) {
    console.error('Thumbnail generation failed:', err);
    return NextResponse.json({ error: 'Thumbnail generation failed' }, { status: 500 });
  }
}
