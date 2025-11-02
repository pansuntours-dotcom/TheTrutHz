// components/Gallery.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export interface GalleryItem {
  id: string;
  title: string;
  image_url: string;
  resonance_score: number;
  created_at: string;
}

const Gallery: React.FC = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data, error } = await supabase
          .from<GalleryItem>('gallery_items')
          .select('*')
          .order('resonance_score', { ascending: false })
          .limit(200);

        if (error) throw error;
        if (data) setGallery(data);
      } catch (err: any) {
        console.error('Error fetching gallery:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) return <p>Loading gallery...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {gallery.map((item) => (
        <div key={item.id} className="border rounded overflow-hidden shadow-md">
          <img src={item.image_url} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p>Score: {item.resonance_score}</p>
            <p className="text-sm text-gray-500">{new Date(item.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
