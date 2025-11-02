'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
  description?: string;
  resonance_score: number;
  created_at: string;
}

const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from<GalleryItem>('gallery_items')
          .select('*')
          .order('resonance_score', { ascending: false })
          .limit(200);

        if (error) throw error;

        setGalleryItems(data || []);
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) return <p>Loading gallery...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!galleryItems.length) return <p>No gallery items found.</p>;

  return (
    <div className="gallery-grid">
      {galleryItems.map(item => (
        <div key={item.id} className="gallery-item">
          <img src={item.image_url} alt={item.title} />
          <h3>{item.title}</h3>
          {item.description && <p>{item.description}</p>}
          <p>Resonance Score: {item.resonance_score}</p>
        </div>
      ))}
      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
          padding: 1rem;
        }
        .gallery-item {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 0.5rem;
          text-align: center;
          transition: transform 0.2s;
        }
        .gallery-item:hover {
          transform: scale(1.02);
        }
        img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
