// app/gallery/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import dynamic from 'next/dynamic';
import GalleryHeader from '../../components/GalleryHeader';
import MediaPortal from '../../components/MediaPortal';
import MobileGridFallback from '../../components/MobileGridFallback';

const ResonanceCanvas = dynamic(() => import('../../components/ResonanceCanvas'), { ssr: false });

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function GalleryPage() {
  const { data } = useSWR('/api/gallery', fetcher, { refreshInterval: 5000 });
  const items = data?.items || [];
  const [active, setActive] = useState<any | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="w-full h-screen bg-[#020316] text-white">
      <GalleryHeader />
      {isMobile ? (
        <MobileGridFallback items={items} onActivate={setActive} />
      ) : (
        <ResonanceCanvas items={items} onActivate={setActive} />
      )}
      {active && <MediaPortal item={active} onClose={() => setActive(null)} />}
    </div>
  );
}
