'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import LivePlayer from './LivePlayer';

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  media_url: string;
  thumbnail_url?: string;
  resonance_score?: number;
  created_at?: string;
}

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      const { data, error } = await supabase
        .from('gallery_items')
        .select('*')
        .order('resonance_score', { ascending: false })
        .limit(200);

      if (error) {
        console.error('Error fetching gallery:', error.message);
      } else {
        setItems(data || []);
      }
      setLoading(false);
    };

    fetchGallery();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-400">Loading gallery...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-gray-900 text-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
        >
          {item.media_url.endsWith('.m3u8') ? (
            <LivePlayer src={item.media_url} />
          ) : (
            <video
              src={item.media_url}
              controls
              className="w-full h-60 object-cover"
            />
          )}
          <div className="p-3">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item.description && (
              <p className="text-gray-400 text-sm mt-1">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
