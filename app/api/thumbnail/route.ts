import { NextResponse } from 'next/server';
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge'; // ✅ Runs at the Edge instead of Node

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'The TrutHz';
  const subtitle = searchParams.get('subtitle') || 'Uncover. Understand. Unify.';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'black',
          color: 'white',
          fontSize: 60,
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <strong>{title}</strong>
        <p style={{ fontSize: 32, marginTop: 20 }}>{subtitle}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
