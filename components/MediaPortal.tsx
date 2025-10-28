'use client';

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface MediaPortalProps {
  src: string;               // Video or audio source URL
  type?: 'video' | 'audio';  // Default: 'video'
  poster?: string;           // Optional preview image
  autoPlay?: boolean;        // Optional autoplay
  muted?: boolean;           // Default true for autoplay
}

const MediaPortal: React.FC<MediaPortalProps> = ({
  src,
  type = 'video',
  poster,
  autoPlay = false,
  muted = true,
}) => {
  const videoRef = useRef<HTMLVideoElement | HTMLAudioElement>(null);
  const [showControls, setShowControls] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  // HLS setup for video streams
  useEffect(() => {
    if (type === 'video' && videoRef.current && Hls.isSupported() && src.endsWith('.m3u8')) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current as HTMLVideoElement);
      return () => {
        hls.destroy();
      };
    } else if (videoRef.current && src.endsWith('.m3u8')) {
      // Safari native support
      (videoRef.current as HTMLVideoElement).src = src;
    }
  }, [src, type]);

  // Autoplay on load
  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [autoPlay]);

  // Auto-hide controls
  const showTemporarily = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setShowControls(true);
    hideTimeout.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const commonProps = {
    ref: videoRef,
    controls: false,
    muted,
    onClick: togglePlay,
    onMouseMove: showTemporarily,
    onTouchStart: showTemporarily,
    className: 'w-full h-full object-contain bg-black',
    poster,
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {type === 'video' ? (
        <video {...commonProps} />
      ) : (
        <audio {...commonProps as any} />
      )}

      {/* Overlay controls */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        } bg-gradient-to-t from-black/60 via-transparent to-black/60`}
        onClick={togglePlay}
      >
        <button
          className="text-white text-5xl bg-black/50 rounded-full px-6 py-4"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
      </div>
    </div>
  );
};

export default MediaPortal;
