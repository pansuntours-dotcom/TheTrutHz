import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  return NextResponse.json({
    status: 'ok',
    message: 'Thumbnail API placeholder — OG generation disabled for Netlify.'
  });
}
