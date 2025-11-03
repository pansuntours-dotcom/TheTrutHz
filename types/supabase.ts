// types/supabase.ts
export type Database = {
  public: {
    Tables: {
      gallery_items: {
        Row: {
          id: string;
          title: string | null;
          description: string | null;
          image_url: string | null;
          resonance_score: number | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          title?: string | null;
          description?: string | null;
          image_url?: string | null;
          resonance_score?: number | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          title?: string | null;
          description?: string | null;
          image_url?: string | null;
          resonance_score?: number | null;
          created_at?: string | null;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
};
