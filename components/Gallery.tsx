'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
  description?: string;
  resonance_score?: number;
  created_at?: string;
}

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      const { data, error } = await supabase
        .from<GalleryItem, GalleryItem>('gallery_items')
        .select('*')
        .order('resonance_score', { ascending: false })
        .limit(200);

      if (error) {
        console.error('Error fetching gallery:', error);
      } else {
        setGallery(data || []);
      }

      setLoading(false);
    };

    fetchGallery();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-400">Loading gallery...</div>;
  }

  if (gallery.length === 0) {
    return <div className="text-center py-10 text-gray-400">No items found.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
      {gallery.map((item) => (
        <div
          key={item.id}
          className="bg-white/5 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={item.image_url}
            alt={item.title}
            className="rounded-md object-cover w-full h-48 mb-3"
          />
          <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
          {item.description && (
            <p className="text-sm text-gray-300 line-clamp-2">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
