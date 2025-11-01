'use client';

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface LivePlayerProps {
  streamUrl: string;
  poster?: string;
}

export default function LivePlayer({ streamUrl, poster }: LivePlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setReady(true);
        video.play().catch(() => {});
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = streamUrl;
      video.addEventListener('loadedmetadata', () => {
        setReady(true);
        video.play().catch(() => {});
      });
    }
  }, [streamUrl]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {!ready && <p className="text-gray-400">Initializing stream...</p>}
      <video
        ref={videoRef}
        controls
        autoPlay
        muted
        playsInline
        poster={poster}
        className="w-full max-w-4xl rounded-lg shadow-lg"
      />
    </div>
  );
}
