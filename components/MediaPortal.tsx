'use client';

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface MediaPortalProps {
  src: string;
  poster?: string;
  type?: 'video' | 'audio';
  autoPlay?: boolean;
}

export default function MediaPortal({
  src,
  poster,
  type = 'video',
  autoPlay = false,
}: MediaPortalProps) {
  const mediaRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showControls, setShowControls] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  // Initialize HLS for video streaming
  useEffect(() => {
    if (type === 'video' && mediaRef.current && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(mediaRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) mediaRef.current?.play().catch(() => {});
      });

      return () => {
        hls.destroy();
      };
    } else if (mediaRef.current && mediaRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      mediaRef.current.src = src;
    }
  }, [src, type, autoPlay]);

  // Hide controls after inactivity
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteraction > 3000 && isPlaying) {
        setShowControls(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lastInteraction, isPlaying]);

  const handleInteraction = () => {
    setLastInteraction(Date.now());
    setShowControls(true);
  };

  const handlePlayPause = () => {
    if (!mediaRef.current) return;
    if (isPlaying) {
      mediaRef.current.pause();
      setIsPlaying(false);
    } else {
      mediaRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-black"
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {type === 'video' ? (
        <video
          ref={mediaRef}
          className="w-full h-auto max-h-[90vh] rounded-md"
          poster={poster}
          muted
          controls={showControls}
          onClick={handlePlayPause}
        />
      ) : (
        <audio
          ref={mediaRef as unknown as React.RefObject<HTMLAudioElement>}
          className="w-full"
          controls={showControls}
        />
      )}

      {/* Overlay Controls */}
      <button
        onClick={handlePlayPause}
        className="absolute inset-0 flex items-center justify-center text-white text-6xl"
        style={{ display: showControls ? 'flex' : 'none' }}
      >
        {isPlaying ? '⏸' : '▶️'}
      </button>
    </div>
  );
}
