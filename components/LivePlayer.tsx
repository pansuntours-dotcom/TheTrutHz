'use client';

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface LivePlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

const LivePlayer: React.FC<LivePlayerProps> = ({
  src,
  poster,
  autoPlay = false,
  controls = true,
  loop = false,
  muted = false,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset any previous error state
    setIsError(false);

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari, iOS)
      video.src = src;
    } else if (Hls.isSupported()) {
      // Use hls.js for other browsers
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.error('HLS.js fatal error:', data);
          setIsError(true);
          hls.destroy();
        }
      });

      return () => {
        hls.destroy();
      };
    } else {
      // Browser not supported
      console.error('HLS not supported in this browser');
      setIsError(true);
    }
  }, [src]);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {isError ? (
        <div className="text-center text-red-500 font-semibold p-4">
          ⚠️ Video playback error. Please try again later.
        </div>
      ) : (
        <video
          ref={videoRef}
          className="w-full max-w-3xl rounded-lg shadow-md bg-black"
          poster={poster}
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
        />
      )}
    </div>
  );
};

export default LivePlayer;
