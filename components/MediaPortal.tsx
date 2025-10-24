'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function MediaPortal({ item, onClose }: { item: any, onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [Hls, setHls] = useState<any>(null);
  const [Tone, setTone] = useState<any>(null);

  // Load hls.js dynamically
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('hls.js').then((module) => setHls(module.default));
      import('tone').then((module) => setTone(module.default));
    }
  }, []);

  // HLS setup
  useEffect(() => {
    if (!Hls || !videoRef.current) return;

    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(item.src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
      return () => hls.destroy();
    } else {
      video.src = item.src;
      video.addEventListener('loadedmetadata', () => video.play());
    }
  }, [Hls, item.src]);

  // Example Tone.js usage
  useEffect(() => {
    if (!Tone) return;

    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease('C4', '8n');
  }, [Tone]);

  return (
    <div className="media-portal">
      <button onClick={onClose}>Close</button>
      <video ref={videoRef} controls style={{ width: '100%' }} />
    </div>
  );
}
