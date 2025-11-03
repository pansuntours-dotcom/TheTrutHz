// components/Gallery.tsx
import { supabase } from '../lib/db'; // adjust path as needed
import type { Database } from '../types/supabase';

type GalleryItem = Database['public']['Tables']['gallery_items']['Row'];

const fetchGallery = async () => {
  const { data, error } = await supabase
    .from('gallery_items') // <-- no generics here
    .select('*')
    .order('resonance_score', { ascending: false })
    .limit(200);

  if (error) {
    console.error(error);
    return [];
  }

  return data as GalleryItem[];
};
