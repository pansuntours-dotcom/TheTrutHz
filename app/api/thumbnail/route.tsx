// app/api/thumbnail/route.tsx
export const runtime = "edge"; // Edge runtime for @vercel/og
export const dynamic = "force-dynamic";

import { ImageResponse } from "@vercel/og";

export async function GET() {
  try {
    // Your existing thumbnail generation logic here
  } catch (error) {
    return new Response("Error generating thumbnail", { status: 500 });
  }
}
