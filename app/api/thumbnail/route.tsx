// Use Edge runtime for dynamic OG image generation
export const runtime = "edge";
export const dynamic = "force-dynamic";

import { ImageResponse } from "@vercel/og";

export async function GET() {
  try {
    // Example: customize your OG image
    const width = 1200;
    const height = 630;

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          The TrutHz
        </div>
      ),
      {
        width,
        height,
      }
    );
  } catch (err) {
    console.error("OG Image generation error:", err);
    return new Response("Failed to generate image", { status: 500 });
  }
}
