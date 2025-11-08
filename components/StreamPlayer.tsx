"use client";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

type Props = {
  hlsUrl?: string; // HLS playlist URL (m3u8). If omitted, shows placeholder.
};

export default function StreamPlayer({ hlsUrl }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!hlsUrl) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.ERROR, function (event, data) {
        // handle or log errors
        console.error("hls error", event, data);
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // native support (Safari)
      video.src = hlsUrl;
    }

    return () => {
      if (hls) {
        hls.destroy();
        hls = null;
      }
    };
  }, [hlsUrl]);

  if (!hlsUrl) {
    return (
      <div id="live" className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Live Stream (Placeholder)</h2>
        <div className="bg-black/60 rounded-lg p-6 text-center text-slate-300">
          <p className="mb-3">No live stream configured yet.</p>
          <p className="text-sm">When you have an HLS stream URL (m3u8), paste it into the component props.</p>
          <video
            ref={videoRef}
            controls
            className="w-full rounded-md mt-4 bg-black"
            playsInline
            poster="/placeholder.jpg"
          />
        </div>
      </div>
    );
  }

  return (
    <div id="live" className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Live Stream</h2>
      <div className="bg-black/80 rounded-lg p-4">
        <video
          ref={videoRef}
          controls
          className="w-full aspect-video rounded-md bg-black"
          playsInline
          controlsList="nodownload"
        />
      </div>
    </div>
  );
}
