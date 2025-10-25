'use client';

import React, { useEffect, useRef } from 'react';
// Import fiber to register JSX types for <mesh>, etc.
import { Canvas, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import Hls from 'hls.js';

// 👇 Extend Three.js elements so JSX recognizes them
extend(THREE);

type Props = {
  data: {
    id: string;
    url: string;
    position: [number, number, number];
  };
};

export default function ResonanceNode({ data }: Props) {
  const meshRef = useRef<any>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textureRef = useRef<any>(null);

  useEffect(() => {
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    const hls = new Hls();

    if (Hls.isSupported()) {
      hls.loadSource(data.url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = data.url;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    const texture: any = new (THREE as any).VideoTexture(video);
    const LinearFilter = (THREE as any).LinearFilter || 1006;
    const RGBFormat = (THREE as any).RGBFormat || 1022;

    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBFormat;

    textureRef.current = texture;
    videoRef.current = video;

    return () => {
      hls.destroy();
      video.pause();
      video.src = '';
      texture.dispose();
    };
  }, [data.url]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  // ✅ JSX types now registered
  return (
    <mesh ref={meshRef} position={data.position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial map={textureRef.current || undefined} />
    </mesh>
  );
}
