// components/Gallery.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import type { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
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

        if (error) {
          setError(error.message);
          return;
        }
        setItems(data || []);
      } catch (err: any) {
        setError(err.message || 'Unexpected error fetching gallery');
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) return <p>Loading gallery...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
      {items.map(item => (
        <div key={item.id} className="gallery-item">
          <img src={item.image_url} alt={item.title} style={{ width: '100%', borderRadius: '8px' }} />
          <h3>{item.title}</h3>
          <p>Score: {item.resonance_score}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
