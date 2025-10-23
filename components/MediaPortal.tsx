// components/MediaPortal.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import * as Tone from 'tone';

export default function MediaPortal({ item, onClose }: { item: any, onClose: ()=>void }) {
  const videoRef = useRef<HTMLVideoElement|null>(null);
  const audioRef = useRef<HTMLAudioElement|null>(null);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    // Route audio through Tone when needed
    if (item.type === 'audio') {
      (async () => {
        await Tone.start();
        const player = new Tone.Player(item.asset_url).toDestination();
        player.autostart = true;
        (window as any)._trthz_tone_player = player;
        setPlaying(true);
        return () => {
          player.stop();
          player.dispose();
        };
      })();
    } else if (item.type === 'video') {
      const video = videoRef.current!;
      if (!video) return;
      if (Hls.isSupported() && /\.m3u8/.test(item.asset_url)) {
        const hls = new Hls();
        hls.loadSource(item.asset_url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(()=>{}));
      } else {
        video.src = item.asset_url;
        video.play().catch(()=>{});
      }
    }
  }, [item]);

  return (
    <div style={{ position:'fixed', inset:0, zIndex:900, background:'linear-gradient(180deg, rgba(1,2,10,0.96), rgba(0,0,0,0.98))', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff' }}>
      <button style={{position:'absolute',right:20,top:20}} onClick={() => { onClose(); (window as any)._trthz_tone_player?.stop?.(); }}>Close</button>
      <div style={{ maxWidth:'94%', maxHeight:'86%', width:1200 }}>
        {item.type === 'audio' && (
          <div style={{display:'flex',gap:24,alignItems:'center'}}>
            <img src={item.thumbnail_url} alt={item.title} style={{width:420,height:420,objectFit:'cover',borderRadius:12}} />
            <div style={{flex:1}}>
              <h2>{item.title}</h2>
              <p style={{opacity:0.85}}>{item.description}</p>
              <audio ref={audioRef} controls style={{width:'100%'}} src={item.asset_url} />
            </div>
          </div>
        )}
        {item.type === 'video' && (
          <video ref={videoRef} controls style={{width:'100%', borderRadius:10}} playsInline />
        )}
        {item.type === 'image' && (
          <img src={item.asset_url} alt={item.title} style={{width:'100%', borderRadius:10}} />
        )}
      </div>
    </div>
  );
}
