'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface GalleryItem {
  id: number;
  title: string;
  description?: string;
  image_url: string;
  video_url?: string;
  resonance_score?: number;
  created_at?: string;
}

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      const { data, error } = await supabase
        .from<'gallery_items', GalleryItem>('gallery_items')
        .select('*')
        .order('resonance_score', { ascending: false })
        .limit(200);

      if (error) {
        console.error('Error fetching gallery:', error);
      } else {
        setItems(data || []);
      }
      setLoading(false);
    };

    fetchGallery();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading gallery...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {items.map((item) => (
        <div key={item.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
          {item.video_url ? (
            <video src={item.video_url} controls className="w-full h-64 object-cover" />
          ) : (
            <img src={item.image_url} alt={item.title} className="w-full h-64 object-cover" />
          )}
          <div className="p-4">
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            {item.description && <p className="text-gray-400 text-sm mt-2">{item.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
