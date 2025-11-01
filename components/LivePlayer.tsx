'use client';

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface LivePlayerProps {
  url: string;
}

const LivePlayer: React.FC<LivePlayerProps> = ({ url }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }
  }, [url]);

  return (
    <video
      ref={videoRef}
      controls
      className="w-full mt-2 rounded-lg"
      playsInline
      preload="metadata"
    />
  );
};

export default LivePlayer;
