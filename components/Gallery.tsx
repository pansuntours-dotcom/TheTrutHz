'use client';

import React, { useEffect, useState } from 'react';
import LivePlayer from './LivePlayer';
import { supabase } from '../lib/supabaseClient';

interface GalleryItem {
  id: string;
  title: string;
  video_url?: string;
  image_url?: string;
  resonance_score: number;
}

const Gallery: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      const { data, error } = await supabase
        .from<GalleryItem>('gallery_items')
        .select('*')
        .order('resonance_score', { ascending: false })
        .limit(200);

      if (error) {
        console.error('Supabase fetch error:', error.message);
      } else if (data) {
        setItems(data);
      }
      setLoading(false);
    };

    fetchGallery();
  }, []);

  if (loading) return <div>Loading gallery...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded shadow p-2">
          {item.video_url ? (
            <LivePlayer src={item.video_url} className="w-full rounded" />
          ) : (
            <img
              src={item.image_url || '/placeholder.png'}
              alt={item.title}
              className="w-full rounded"
            />
          )}
          <h3 className="mt-2 text-center font-semibold">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
