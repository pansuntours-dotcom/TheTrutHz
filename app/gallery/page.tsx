'use client';

import { useState, useEffect } from 'react';
import ResonanceCanvas from './ResonanceCanvas';
import MobileGridFallback from './MobileGridFallback';
import MediaPortal from './MediaPortal';

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
}

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [active, setActive] = useState<GalleryItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    // Example: Replace this with your data fetch
    setItems([
      { id: '1', title: 'Sample 1', imageUrl: '/sample1.jpg' },
      { id: '2', title: 'Sample 2', imageUrl: '/sample2.jpg' },
    ]);
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileGridFallback items={items} onActivate={setActive} />
      ) : (
        <ResonanceCanvas items={items} onActivate={setActive} />
      )}
      {active && <MediaPortal item={active} onClose={() => setActive(null)} />}
    </div>
  );
}
