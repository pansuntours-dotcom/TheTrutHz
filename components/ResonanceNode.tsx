'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import THREE from 'three'; // ✅ Default import for your version

// Fix TypeScript JSX recognition for Three.js elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
    }
  }
}

interface ResonanceNodeProps {
  data: {
    position: [number, number, number];
    color?: string;
    scale?: number;
    rotationSpeed?: number;
  };
}

/**
 * ResonanceNode — a dynamic, glowing 3D node that rotates in space.
 */
export default function ResonanceNode({ data }: ResonanceNodeProps) {
  // ✅ Access Mesh through default THREE instance
  const meshRef = useRef<InstanceType<typeof THREE.Mesh>>(null);

  // Rotate the node continuously for resonance animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += data.rotationSpeed ?? 0.01;
      meshRef.current.rotation.x += (data.rotationSpeed ?? 0.01) / 2;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={data.position}
      scale={data.scale ?? 1}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={data.color ?? '#00ffff'}
        emissive={data.color ?? '#00ffff'}
        emissiveIntensity={0.5}
        roughness={0.4}
        metalness={0.6}
      />
    </mesh>
  );
}
