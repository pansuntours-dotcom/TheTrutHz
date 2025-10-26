// app/api/thumbnail/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // ensure this runs only in Node.js (not edge)
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    // Dynamic import — avoids including ffmpeg in the client build
    const ffmpeg = await import("fluent-ffmpeg");

    // Parse body (example structure)
    const { videoUrl } = await req.json();

    // You can run ffmpeg operations here
    const command = ffmpeg.default(videoUrl)
      .on("start", (cmd) => console.log("FFmpeg started:", cmd))
      .on("error", (err) => console.error("FFmpeg error:", err.message));

    // Simulated response (replace with actual file processing)
    return NextResponse.json({ success: true, message: "Thumbnail generated" });
  } catch (error: any) {
    console.error("Thumbnail API Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
