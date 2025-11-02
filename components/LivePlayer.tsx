'use client';

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface LivePlayerProps {
  src: string; // HLS stream URL (m3u8)
  autoplay?: boolean;
  controls?: boolean;
  width?: number | string;
  height?: number | string;
}

const LivePlayer: React.FC<LivePlayerProps> = ({
  src,
  autoplay = false,
  controls = true,
  width = '100%',
  height = 360,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hls, setHls] = useState<Hls | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hlsInstance = new Hls();
        hlsInstance.loadSource(src);
        hlsInstance.attachMedia(videoRef.current);
        setHls(hlsInstance);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = src;
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls={controls}
      autoPlay={autoplay}
      style={{ width, height }}
    />
  );
};

export default LivePlayer;
