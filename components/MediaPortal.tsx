'use client';

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface MediaPortalProps {
  src: string;
  poster?: string;
  title?: string;
}

export default function MediaPortal({ src, poster, title }: MediaPortalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsReady(true);
      });

      return () => {
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = src;
      videoRef.current.addEventListener('loadedmetadata', () => {
        setIsReady(true);
      });
    }
  }, [src]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {!isReady && <p className="text-gray-400 mb-2">Loading stream...</p>}
      <video
        ref={videoRef}
        poster={poster}
        controls
        playsInline
        autoPlay
        muted
        className="w-full max-w-3xl rounded-lg shadow-lg"
        title={title || 'Live Stream'}
      />
      {title && <p className="mt-2 text-gray-300">{title}</p>}
    </div>
  );
}
