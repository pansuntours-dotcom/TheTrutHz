'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as Tone from 'tone';

export default function MediaPortal({ item, onClose }: { item: any, onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [Hls, setHls] = useState<any>(null);

  // Dynamically import hls.js on client only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('hls.js').then((module) => {
        setHls(module.default);
      });
    }
  }, []);

  useEffect(() => {
    if (!Hls || !videoRef.current) return;

    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(item.src); // your video URL
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });

      return () => {
        hls.destroy();
      };
    } else {
      // Fallback for native HLS support (Safari)
      video.src = item.src;
      video.addEventListener('loadedmetadata', () => video.play());
    }
  }, [Hls, item.src]);

  return (
    <div className="media-portal">
      <button onClick={onClose}>Close</button>
      <video ref={videoRef} controls style={{ width: '100%' }} />
    </div>
  );
}
