// components/LivePlayer.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface LivePlayerProps {
  src: string;
}

export default function LivePlayer({ src }: LivePlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
        return () => hls.destroy();
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = src;
      }
    }
  }, [src]);

  return <video ref={videoRef} controls className="w-full h-auto" />;
}
