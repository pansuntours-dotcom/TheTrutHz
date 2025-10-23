// app/gallery/layout.tsx
import React from 'react';

export const metadata = {
  title: 'The TrutHz Resonance Gallery',
  description: 'Experience the resonance of truth through visual, sound, and motion.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      {children}
    </section>
  );
}
