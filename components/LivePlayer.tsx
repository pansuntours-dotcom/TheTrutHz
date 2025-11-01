'use client';

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface LivePlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

const LivePlayer: React.FC<LivePlayerProps> = ({ src, poster, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS error:', data);
      });

      return () => {
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // Fallback for Safari
      videoRef.current.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      muted
      autoPlay
      poster={poster}
      className={className}
    />
  );
};

export default LivePlayer;
