// components/ResonanceCanvas.tsx
import React, { Suspense, useMemo, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import ResonanceNode from './ResonanceNode';
import { AnalyzerEngine } from './tone/AnalyzerEngine';
import PostprocessingEffects from './PostprocessingEffects';

type Item = {
  id: string;
  title: string;
  type: 'audio'|'video'|'image'|'live';
  asset_url: string;
  thumbnail_url?: string;
  bpm?: number|null;
  resonance_score?: number;
};

export default function ResonanceCanvas({ items = [], onActivate }: { items: Item[], onActivate: (i:any)=>void }) {
  const analyzerRef = useRef<AnalyzerEngine | null>(null);

  useEffect(() => {
    analyzerRef.current = new AnalyzerEngine();
    return () => analyzerRef.current?.dispose();
  }, []);

  // limit nodes for perf (LRU-ish)
  const nodes = useMemo(() => {
    const limit = Math.min(items.length, 60);
    return items.slice(0, limit).map((it, i) => {
      const theta = (i / Math.max(1, limit)) * Math.PI * 2;
      return {
        ...it,
        position: [Math.cos(theta) * (6 + (i % 8)), (Math.sin(theta * 2) * 1.2) + (i % 3), Math.sin(theta) * (6 + (i % 8))],
        scale: 1 + (it.resonance_score ? Math.min(2, Number(it.resonance_score)/60) : 0),
      };
    });
  }, [items]);

  return (
    <Canvas camera={{ position: [0, 2, 12], fov: 55 }}>
      <color attach="background" args={['#020316']} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 8, 2]} intensity={0.6} />
      <Suspense fallback={null}>
        <group position={[0, -1.2, 0]}>
          {nodes.map((n, idx) => (
            <ResonanceNode
              key={n.id}
              data={n}
              index={idx}
              analyzer={() => analyzerRef.current}
              onActivate={() => onActivate(n)}
            />
          ))}
        </group>
        <PostprocessingEffects />
      </Suspense>
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI * 0.6} />
      <Stats />
    </Canvas>
  );
}
