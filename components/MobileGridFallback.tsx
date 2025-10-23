// components/MobileGridFallback.tsx
import React from 'react';
export default function MobileGridFallback({ items = [], onActivate }: { items: any[], onActivate: (i:any)=>void }) {
  return (
    <div style={{paddingTop:80, paddingBottom:40, display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
      {items.map((it) => (
        <div key={it.id} style={{padding:8, borderRadius:8, overflow:'hidden'}} onClick={() => onActivate(it)}>
          <div style={{width:'100%',paddingTop:'56%', position:'relative', background:'#081026', borderRadius:8, overflow:'hidden'}}>
            <img src={it.thumbnail_url || it.asset_url} style={{position:'absolute', inset:0, width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
          <div style={{paddingTop:8,fontWeight:700}}>{it.title}</div>
          <div style={{fontSize:12, opacity:0.7}}>{it.type}</div>
        </div>
      ))}
    </div>
  );
}
