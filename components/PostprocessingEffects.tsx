// components/PostprocessingEffects.tsx
import React from 'react';
import { EffectComposer, Bloom, DepthOfField, Noise, Vignette } from '@react-three/postprocessing';

export default function PostprocessingEffects() {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={0.9} kernelSize={3} />
      <DepthOfField focusDistance={0.02} focalLength={0.6} bokehScale={5} />
      <Noise opacity={0.02} />
      <Vignette eskil={false} offset={0.2} darkness={0.6} />
    </EffectComposer>
  );
}
