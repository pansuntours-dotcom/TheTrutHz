'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

type GalleryItem = {
  id: number;
  title: string;
  image_url: string;
  description?: string;
  resonance_score?: number;
  created_at?: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from<GalleryItem, GalleryItem>('gallery_items')
        .select('*')
        .order('resonance_score', { ascending: false })
        .limit(200);

      if (error) {
        console.error('Error fetching gallery items:', error.message);
      } else {
        setItems(data || []);
      }
      setLoading(false);
    };

    fetchGalleryItems();
  }, []);

  if (loading) return <p>Loading gallery...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={item.image_url}
            alt={item.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            {item.description && <p className="text-gray-400 mt-2">{item.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
