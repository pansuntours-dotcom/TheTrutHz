import { ImageResponse } from "@vercel/og";

export const runtime = "edge"; // Required for @vercel/og
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 64,
            color: "white",
            background: "linear-gradient(to right, #000000, #222222)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
            textAlign: "center",
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
    console.error("Thumbnail generation failed:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
