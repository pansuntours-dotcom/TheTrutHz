'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/db'; // adjust path if needed
import type { Database } from '../types/supabase';

type GalleryItem = Database['public']['Tables']['gallery_items']['Row'];

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchGallery = async () => {
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('gallery_items') // no generics needed
        .select('*')
        .order('resonance_score', { ascending: false })
        .limit(200);

      if (error) {
        console.error('Error fetching gallery:', error);
        setGallery([]);
      } else {
        setGallery(data as GalleryItem[]);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setGallery([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  if (loading) return <p>Loading gallery...</p>;
  if (!gallery.length) return <p>No items found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {gallery.map((item) => (
        <div key={item.id} className="border rounded p-2">
          {item.image_url && (
            <img
              src={item.image_url}
              alt={item.title ?? 'Gallery item'}
              className="w-full h-auto rounded"
            />
          )}
          <h3 className="mt-2 font-semibold">{item.title}</h3>
          {item.description && <p className="text-sm">{item.description}</p>}
        </div>
      ))}
    </div>
  );
}
