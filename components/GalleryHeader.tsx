// components/GalleryHeader.tsx
import React from 'react';

export default function GalleryHeader() {
  return (
    <header style={{ position: 'absolute', zIndex: 60, inset: '18px 24px auto 24px', display: 'flex', justifyContent:'space-between', width:'calc(100% - 48px)', pointerEvents:'auto'}}>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div style={{width:44,height:44,borderRadius:8,background:'#0ff6e6',boxShadow:'0 6px 20px rgba(0,255,240,0.06)'}} />
        <div>
          <div style={{fontWeight:800,fontSize:16}}>The TrutHz</div>
          <div style={{fontSize:12,opacity:.7}}>Resonance Space</div>
        </div>
      </div>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <button style={{padding:'8px 12px',borderRadius:10,background:'transparent',border:'1px solid rgba(255,255,255,0.06)'}}>Orbit</button>
        <button style={{padding:'8px 12px',borderRadius:10,background:'transparent',border:'1px solid rgba(255,255,255,0.06)'}}>Stream Mode</button>
      </div>
    </header>
  );
}
