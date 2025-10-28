// components/ARViewer.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function ARViewer({ src }: { src: string }) {
  const ref = useRef<any>();

  useEffect(() => {
    // model-viewer is loaded via script in layout.tsx (unpkg)
    // If using the npm package, import it client-side instead.
  }, []);

  return (
    <div className="ar-wrapper">
      {/* @ts-ignore */}
      <model-viewer
        src={src}
        alt="3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        style={{ width: '100%', height: '100%', borderRadius: 8 }}
      />
    </div>
  );
}
