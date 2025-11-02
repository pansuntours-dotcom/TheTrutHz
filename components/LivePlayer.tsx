'use client';

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface LivePlayerProps {
  src: string; // HLS stream URL
  poster?: string; // Optional poster image
}

const LivePlayer: React.FC<LivePlayerProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS error:', data);
        setError('Error loading video stream.');
      });

      return () => {
        hls.destroy();
      };
    } else {
      setError('Your browser does not support HLS playback.');
    }
  }, [src]);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <video
      ref={videoRef}
      poster={poster}
      controls
      autoPlay
      muted
      className="w-full max-w-full rounded shadow-lg"
    />
  );
};

export default LivePlayer;
