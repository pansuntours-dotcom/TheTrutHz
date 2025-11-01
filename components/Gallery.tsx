'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import LivePlayer from './LivePlayer';

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  video_url: string;
  image_url: string;
  resonance_score: number;
}

const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data, error } = await supabase
          .from<GalleryItem>('gallery_items')
          .select('*')
          .order('resonance_score', { ascending: false })
          .limit(200);

        if (error) {
          console.error('Supabase fetch error:', error);
        } else {
          setGalleryItems(data || []);
        }
      } catch (err) {
        console.error('Unexpected fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) {
    return <p>Loading gallery...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {galleryItems.map((item) => (
        <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
          <img src={item.image_url} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
            {item.video_url && <LivePlayer url={item.video_url} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
