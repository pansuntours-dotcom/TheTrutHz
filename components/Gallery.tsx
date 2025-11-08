"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

type FileObject = {
  name: string;
  id?: string;
  last_modified?: string | null;
};

export default function Gallery() {
  const [files, setFiles] = useState<FileObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        // List files from bucket 'gallery'
        const { data, error } = await supabase.storage
          .from("gallery")
          .list("", { limit: 100, offset: 0, sortBy: { column: "name", order: "desc" } });

        if (error) throw error;
        if (!data) {
          setFiles([]);
          return;
        }

        // Public URL or signed URL for each file
        const signedPromises = data.map(async (f) => {
          // If your bucket is public, use getPublicUrl:
          const publicRes = supabase.storage.from("gallery").getPublicUrl(f.name);
          // If bucket is private, you'd call createSignedUrl; leave commented:
          // const { data: signed } = await supabase.storage.from("gallery").createSignedUrl(f.name, 60);
          return { ...f, publicURL: publicRes.data.publicUrl };
        });

        const resolved = await Promise.all(signedPromises);
        if (mounted) {
          setFiles(resolved as any);
        }
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Failed to load gallery");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="p-8 text-center">Loading gallery…</div>;
  if (error) return <div className="p-8 text-center text-rose-400">Error: {error}</div>;

  if (!files.length) {
    return (
      <div id="gallery" className="p-8 text-center">
        <p className="mb-4">Your gallery is empty. Upload files to the `gallery` bucket in Supabase storage.</p>
        <img src="/placeholder.jpg" alt="placeholder" className="mx-auto w-64 rounded-md" />
      </div>
    );
  }

  return (
    <section id="gallery" className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {files.map((f) => (
          <div key={f.name} className="rounded-md overflow-hidden bg-black/10">
            <a href={(f as any).publicURL} target="_blank" rel="noreferrer">
              <img
                loading="lazy"
                src={(f as any).publicURL}
                alt={f.name}
                className="w-full h-48 object-cover block"
              />
            </a>
            <div className="p-2 text-sm text-slate-300">
              <div className="truncate">{f.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
