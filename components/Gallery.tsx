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
  const [newItemBanner, setNewItemBanner] = useState(false);

  // Fetch gallery items
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

  useEffect(() => {
    fetchGallery();

    // ✅ Real-time updates
    const channel = supabase
      .channel('gallery-updates')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'gallery_items' },
        (payload) => {
          console.log('🔄 Gallery update detected:', payload);

          setGallery((prev) => {
            let updated = [...prev];

            switch (payload.eventType) {
              case 'INSERT':
                updated = [payload.new as GalleryItem, ...updated];
                // Trigger banner animation
                setNewItemBanner(true);
                setTimeout(() => setNewItemBanner(false), 3000);
                break;

              case 'UPDATE':
                updated = updated.map((item) =>
                  item.id === payload.new.id ? (payload.new as GalleryItem) : item
                );
                break;

              case 'DELETE':
                updated = updated.filter((item) => item.id !== payload.old.id);
                break;
            }
            return updated;
          });
        }
      )
      .subscribe();

    // ✅ Cleanup subscription
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-400">Loading gallery...</div>;
  }

  if (gallery.length === 0) {
    return <div className="text-center py-10 text-gray-400">No items found.</div>;
  }

  return (
    <div className="relative">
      {/* ✨ New item banner */}
      {newItemBanner && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-white px-5 py-2 rounded-full shadow-lg animate-fade-in-out">
          ✨ New item added!
        </div>
      )}

      {/* Gallery grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="bg-white/5 p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
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
    </div>
  );
}
