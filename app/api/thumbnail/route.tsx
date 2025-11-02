// app/api/thumbnail/route.tsx

import { NextRequest, NextResponse } from "next/server";

// Optional: you can still return a placeholder image or JSON response
export async function GET(req: NextRequest) {
  try {
    // Example placeholder data
    const placeholder = {
      message: "Thumbnail generation disabled. @vercel/og removed.",
    };

    return NextResponse.json(placeholder);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate thumbnail." },
      { status: 500 }
    );
  }
}
