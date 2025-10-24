'use client';

import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Hls from 'hls.js';

type Props = {
  data: {
    id: string;
    url: string;
    position: [number, number, number];
  };
};

export default function ResonanceNode({ data }: Props) {
  const meshRef = useRef<THREE.Mesh>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textureRef = useRef<THREE.VideoTexture | null>(null);

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
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = data.url;
      video.addEventListener('loadedmetadata', () => video.play());
    }

    // ✅ Use THREE.VideoTexture (no separate import)
    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

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
    if (meshRef.current && textureRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} position={data.position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial map={textureRef.current || undefined} />
    </mesh>
  );
}
