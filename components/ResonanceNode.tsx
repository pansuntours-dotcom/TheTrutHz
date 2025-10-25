'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Allow JSX elements like <mesh>, <sphereGeometry>, etc. to compile safely
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
 * ResonanceNode — a simple animated 3D sphere node for The TrutHz visual layer.
 * React Three Fiber handles the scene, camera, and animation loop.
 */
export default function ResonanceNode({ data }: ResonanceNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Continuous animation frame handler
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
