'use client';

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface LivePlayerProps {
  src: string;
}

export default function LivePlayer({ src }: LivePlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      video.src = src;
    } else if (Hls.isSupported()) {
      // HLS.js for other browsers
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      playsInline
      className="w-full h-60 object-cover"
    />
  );
}
