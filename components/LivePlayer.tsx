'use client';

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface LivePlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

const LivePlayer: React.FC<LivePlayerProps> = ({ src, poster = '', className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // HLS support
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS (Safari)
      video.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      muted
      className={className}
      poster={poster}
      playsInline
    />
  );
};

export default LivePlayer;
