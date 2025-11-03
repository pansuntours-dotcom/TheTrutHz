// app/page.tsx
import React from 'react';
import Gallery from '../components/Gallery';

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">The TrutHz Gallery</h1>
      <Gallery />
    </main>
  );
}
