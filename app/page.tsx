import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import StreamPlayer from "../components/StreamPlayer";

export default function Page() {
  // Example: leave hlsUrl undefined for placeholder.
  // Later: replace with real HLS URL (e.g. from Mux / Cloudflare Stream)
  const hlsUrl: string | undefined = undefined;

  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto px-6">
        <Gallery />
        <div className="mt-12">
          <StreamPlayer hlsUrl={hlsUrl} />
        </div>
      </div>
    </>
  );
}
