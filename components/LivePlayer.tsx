// components/LivePlayer.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface LivePlayerProps {
  src: string; // HLS stream URL
  width?: number;
  height?: number;
}

const LivePlayer: React.FC<LivePlayerProps> = ({ src, width = 640, height = 360 }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(err => console.error('Video play error:', err));
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.play().catch(err => console.error('Video play error:', err));
    } else {
      console.error('HLS not supported in this browser');
    }
  }, [src]);

  return <video ref={videoRef} width={width} height={height} controls />;
};

export default LivePlayer;
