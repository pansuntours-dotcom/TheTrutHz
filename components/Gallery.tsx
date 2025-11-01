// components/Gallery.tsx
"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
  resonance_score: number;
}

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data, error } = await supabase
          .from<GalleryItem>("gallery_items") // only one generic argument
          .select("*")
          .order("resonance_score", { ascending: false })
          .limit(200);

        if (error) throw error;
        setGallery(data || []);
      } catch (err: any) {
        console.error("Error fetching gallery:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) return <p>Loading gallery...</p>;
  if (error) return <p>Error loading gallery: {error}</p>;

  return (
    <div className="gallery-grid">
      {gallery.map((item) => (
        <div key={item.id} className="gallery-item">
          <img src={item.image_url} alt={item.title} />
          <p>{item.title}</p>
          <p>Resonance: {item.resonance_score}</p>
        </div>
      ))}
    </div>
  );
}
