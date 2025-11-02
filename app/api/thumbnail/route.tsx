import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Try loading satori and resvg-js dynamically
    const satori = await import("satori").then(mod => mod.default || mod);
    const { Resvg } = await import("@resvg/resvg-js");

    const svg = await satori(
      <div
        style={{
          display: "flex",
          width: "800px",
          height: "400px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
          color: "#0ff",
          fontSize: "48px",
          fontWeight: "bold",
        }}
      >
        The TrutHz
      </div>,
      { width: 800, height: 400, fonts: [] }
    );

    const resvg = new Resvg(svg);
    const pngData = resvg.render().asPng();
    return new NextResponse(pngData, {
      headers: { "Content-Type": "image/png" },
    });
  } catch (error) {
    console.warn("Thumbnail generation skipped:", error);
    // Fallback: return a simple JSON response so build never fails
    return NextResponse.json({
      message: "Thumbnail generation is disabled in this build environment.",
    });
  }
}
