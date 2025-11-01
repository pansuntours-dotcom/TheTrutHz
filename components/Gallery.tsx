'use client';

import React, { useEffect, useState } from 'react';
import LivePlayer from './LivePlayer';

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  thumbnail_url?: string;
  video_url?: string;
  resonance_score?: number;
}

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch('/api/gallery');
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setItems(data.items || []);
      } catch (err: any) {
        console.error('Error loading gallery:', err);
        setError('Failed to load gallery.');
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <p>Loading gallery...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🎵 The Resonance Gallery</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="cursor-pointer group relative rounded-lg overflow-hidden border border-gray-800 hover:border-indigo-500 transition"
          >
            <img
              src={item.thumbnail_url || '/placeholder.jpg'}
              alt={item.title}
              className="w-full h-48 object-cover group-hover:opacity-80 transition"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent p-2">
              <p className="text-sm font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for LivePlayer */}
      {selected && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center z-50 p-4">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-xl font-bold hover:text-indigo-400"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>
          <LivePlayer
            src={selected.video_url || ''}
            poster={selected.thumbnail_url}
            controls
            autoPlay
            className="w-full max-w-3xl"
          />
          {selected.description && (
            <p className="text-gray-400 mt-4 max-w-2xl text-center">{selected.description}</p>
          )}
        </div>
      )}
    </div>
  );
}
