'use client';

import { Dispatch, SetStateAction } from 'react';

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
}

interface ResonanceCanvasProps {
  items: GalleryItem[];
  onActivate: Dispatch<SetStateAction<GalleryItem | null>>;
}

export default function ResonanceCanvas({ items, onActivate }: ResonanceCanvasProps) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} onClick={() => onActivate(item)}>
          <img src={item.imageUrl} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
