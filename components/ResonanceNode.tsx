'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { VideoTexture } from 'three';
import Hls from 'hls.js';

type Props = {
  data: {
    id: string;
    type: 'video' | 'live' | 'image' | string;
    asset_url: string;
  };
  position?: [number, number, number];
  scale?: [number, number, number];
  onClick?: (data: any) => void;
};

export default function ResonanceNode({
  data,
  position = [0, 0, 0],
  scale = [1, 1, 1],
  onClick,
}: Props) {
  const ref = useRef<THREE.Mesh>(null);
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const textureRef = useRef<VideoTexture | null>(null);

  const isLive =
    data.type === 'live' ||
    (data.type === 'video' && /m3u8/.test(data.asset_url));

  // create video element for HLS if needed
  useEffect(() => {
    if (isLive && typeof window !== 'undefined') {
      const video = document.createElement('video');
      video.crossOrigin = 'anonymous';
      video.muted = true;
      video.loop = true;
      video.playsInline = true;

      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(data.asset_url);
        hls.attachMedia(video);
      } else {
        video.src = data.asset_url;
      }

      video.play().catch((err) => console.warn('Video play failed:', err));
      vidRef.current = video;

      const tex = new VideoTexture(video);
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.format = THREE.RGBFormat;
      textureRef.current = tex;
    }

    return () => {
      if (vidRef.current) {
        vidRef.current.pause();
        vidRef.current.src = '';
      }
    };
  }, [data.asset_url, isLive]);

  const material = useMemo(() => {
    if (isLive && textureRef.current) {
      return new THREE.MeshBasicMaterial({ map: textureRef.current });
    }
    return new THREE.MeshStandardMaterial({ color: 0x00ffff });
  }, [isLive]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh
      ref={ref}
      position={position}
      scale={scale}
      material={material}
      onClick={() => onClick?.(data)}
    >
      <sphereGeometry args={[1, 32, 32]} />
    </mesh>
  );
}
