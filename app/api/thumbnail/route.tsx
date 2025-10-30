// Force Node.js runtime and prevent build-time pre-rendering
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
            color: "white",
            fontWeight: "bold",
          }}
        >
          The TrutHz
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error("❌ Thumbnail generation failed:", error);
    return new Response("Error generating thumbnail", { status: 500 });
  }
}
