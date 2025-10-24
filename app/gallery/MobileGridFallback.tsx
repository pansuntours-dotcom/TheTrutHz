'use client';

import { Dispatch, SetStateAction } from 'react';

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
}

interface MobileGridFallbackProps {
  items: GalleryItem[];
  onActivate: Dispatch<SetStateAction<GalleryItem | null>>;
}

export default function MobileGridFallback({ items, onActivate }: MobileGridFallbackProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
      {items.map((item) => (
        <div key={item.id} onClick={() => onActivate(item)}>
          <img src={item.imageUrl} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
