// components/Gallery.tsx
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import Hls from 'hls.js';

// Type for a gallery item
export interface GalleryItem {
  id: number;
  title: string;
  description?: string;
  image_url?: string;
  video_url?: string;
  resonance_score?: number;
}

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      const { data, error } = await supabase
        .from<GalleryItem>('gallery_items')
        .select('*')
        .order('resonance_score', { ascending: false })
        .limit(200);

      if (error) {
        console.error('Error fetching gallery:', error.message);
        return;
      }

      setGallery(data || []);
    };

    fetchGallery();
  }, []);

  useEffect(() => {
    // Example: auto-play first video if available
    if (gallery.length > 0 && gallery[0].video_url && videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(gallery[0].video_url);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current?.play();
        });
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = gallery[0].video_url;
        videoRef.current.play();
      }
    }
  }, [gallery]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {gallery.map((item) => (
        <div key={item.id} className="border rounded p-2 shadow">
          {item.image_url && (
            <img src={item.image_url} alt={item.title} className="w-full h-auto rounded" />
          )}
          {item.video_url && (
            <video
              ref={videoRef}
              controls
              className="w-full h-auto rounded mt-2"
              poster={item.image_url || undefined}
            />
          )}
          <h3 className="font-bold mt-2">{item.title}</h3>
          {item.description && <p className="text-sm mt-1">{item.description}</p>}
          {item.resonance_score !== undefined && (
            <p className="text-xs text-gray-500">Score: {item.resonance_score}</p>
          )}
        </div>
      ))}
    </div>
  );
}
