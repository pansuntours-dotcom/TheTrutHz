// components/Gallery.tsx
'use client';

import { useState } from 'react';
import MediaPortal from './MediaPortal';
import LivePlayer from './LivePlayer';
import ARViewer from './ARViewer';

type Item = {
  id: string;
  title: string;
  type: 'image' | 'video' | 'live' | 'ar';
  src: string;
  thumb?: string;
  model?: string;
};

const SAMPLE: Item[] = [
  { id:'1', title:'Sunset image', type:'image', src:'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=60', thumb: '' },
  { id:'2', title:'Recorded video', type:'video', src:'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4', thumb: '' },
  { id:'3', title:'Live stream (HLS)', type:'live', src:'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', thumb: '' },
  { id:'4', title:'AR model', type:'ar', src:'', model:'https://modelviewer.dev/shared-assets/models/Astronaut.glb', thumb: '' }
];

export default function Gallery(){
  const [active, setActive] = useState<Item | null>(null);

  return (
    <>
      <div className="gallery" aria-live="polite">
        {SAMPLE.map(i => (
          <div key={i.id} className="card" onClick={() => setActive(i)}>
            <div style={{height:140, width:'100%', borderRadius:8, background:'#03131b', display:'flex', alignItems:'center', justifyContent:'center', color:'#7aa'} }>
              <div style={{padding:10, textAlign:'center'}}>
                <div style={{fontWeight:700}}>{i.title}</div>
                <div className="muted" style={{fontSize:13}}>{i.type.toUpperCase()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div className="portal" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <div className="modal" onClick={(e)=>e.stopPropagation()}>
            <h2 style={{marginTop:0}}>{active.title}</h2>

            {active.type === 'image' && <img src={active.src} style={{width:'100%', borderRadius:8}} alt={active.title} />}

            {active.type === 'video' && (
              <video controls style={{ width:'100%', borderRadius:8 }}>
                <source src={active.src} />
              </video>
            )}

            {active.type === 'live' && <LivePlayer url={active.src} />}

            {active.type === 'ar' && active.model && <ARViewer src={active.model} />}

            <div style={{marginTop:12, textAlign:'right'}}>
              <button className="btn" onClick={()=>setActive(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
