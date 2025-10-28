// components/Dashboard.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function Dashboard(){
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  function reveal() {
    setShow(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    // hide after 2200ms of no interaction
    timeoutRef.current = window.setTimeout(()=> setShow(false), 2200);
  }

  useEffect(()=>{
    const onPointer = () => reveal();
    window.addEventListener('pointerdown', onPointer, {passive:true});
    window.addEventListener('touchstart', onPointer, {passive:true});
    window.addEventListener('mousemove', onPointer, {passive:true});

    return ()=> {
      window.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('touchstart', onPointer);
      window.removeEventListener('mousemove', onPointer);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    }
  },[]);

  return (
    <div className={`dashboard ${show ? 'show' : ''}`} aria-hidden={!show}>
      <div className="dashboard-inner">
        <div className="row" style={{justifyContent:'space-between'}}>
          <div>
            <div style={{fontWeight:700}}>Dashboard</div>
            <div className="muted" style={{fontSize:13}}>Quick controls & live state</div>
          </div>

          <div style={{display:'flex', gap:8, alignItems:'center'}}>
            <button className="btn" onClick={()=>{ alert('Open Live Studio (placeholder)'); }}>Live Studio</button>
            <button className="btn" onClick={()=>{ alert('Open AR tools (placeholder)'); }}>AR Tools</button>
          </div>
        </div>

        {/* minimal dashboard content */}
        <div style={{marginTop:12}}>
          <div className="row" style={{justifyContent:'space-between'}}>
            <div>
              <div className="muted">Active viewers</div>
              <div style={{fontWeight:700}}>1,024</div>
            </div>
            <div>
              <div className="muted">Streams</div>
              <div style={{fontWeight:700}}>2 online</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
