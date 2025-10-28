// components/LivePlayer.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function LivePlayer({ url }: { url: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hlsLoaded, setHlsLoaded] = useState(false);

  useEffect(() => {
    let hls: any = null;
    let mounted = true;

    async function init() {
      if (!videoRef.current) return;
      if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        // native HLS (Safari)
        videoRef.current.src = url;
        try { await videoRef.current.play(); } catch {}
        return;
      }

      // dynamic import of hls.js (only in browser)
      const Hls = (await import('hls.js')).default;
      if (!mounted) return;
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(videoRef.current!);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current!.play().catch(()=>{});
        });
        setHlsLoaded(true);
      } else {
        videoRef.current!.src = url;
      }
    }

    init();

    return () => {
      mounted = false;
      if (hls) try{ hls.destroy(); }catch{}
    };
  }, [url]);

  return (
    <div className="live-player">
      <video ref={videoRef} controls style={{width:'100%', height:'100%'}} />
      {!hlsLoaded && <div style={{position:'absolute', left:12, top:12}} className="muted">Loading stream…</div>}
    </div>
  );
}
