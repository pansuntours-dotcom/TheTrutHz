// components/ResonanceNode.tsx
import React, { useRef, useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Hls from 'hls.js';

type Props = {
  data: any;
  index: number;
  analyzer: ()=>any;
  onActivate: ()=>void;
};

export default function ResonanceNode({ data, index, analyzer, onActivate }: Props) {
  const ref = useRef<any>();
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const textureRef = useRef<THREE.VideoTexture | null>(null);
  const isLive = data.type === 'live' || data.type === 'video' && /m3u8/.test(data.asset_url);

  // create video element for HLS if needed
  useEffect(() => {
    if ((data.type === 'video' || data.type === 'live') && /m3u8/.test(data.asset_url)) {
      const v = document.createElement('video');
      v.muted = true;
      v.playsInline = true;
      v.crossOrigin = 'anonymous';
      v.loop = true;
      vidRef.current = v;
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(data.asset_url);
        hls.attachMedia(v);
        hls.on(Hls.Events.MANIFEST_PARSED, () => v.play().catch(()=>{}));
      } else {
        v.src = data.asset_url;
        v.addEventListener('loadedmetadata', () => v.play().catch(()=>{}));
      }
      textureRef.current = new THREE.VideoTexture(v);
      textureRef.current.minFilter = THREE.LinearFilter;
      textureRef.current.magFilter = THREE.LinearFilter;
      textureRef.current.format = THREE.RGBFormat;
      return () => {
        textureRef.current?.dispose();
        v.pause();
        v.src = '';
      };
    }
    return;
  }, [data.asset_url, data.type]);

  useFrame((state) => {
    const a = analyzer()?.getFftArray?.() ?? new Float32Array(64).fill(0);
    const band = Math.abs(a[(index*2)%a.length] ?? 0);
    const pulse = 1 + band * 2;
    if (ref.current) {
      ref.current.scale.lerp(new THREE.Vector3(pulse * (data.scale ?? 1), pulse * (data.scale ?? 1), pulse * (data.scale ?? 1)), 0.08);
      ref.current.rotation.y += 0.003 + (index % 5) * 0.001;
      ref.current.position.y = (Math.sin(state.clock.elapsedTime * (0.2 + (index%4)*0.05)) * 0.6) + (index % 3);
    }
  });

  const panelMaterial = useMemo(() => {
    if (textureRef.current) {
      return new THREE.MeshStandardMaterial({ map: textureRef.current, emissive: new THREE.Color('#ffffff'), emissiveIntensity: 0.2, metalness: 0.1, roughness: 0.4, transparent: true });
    }
    return new THREE.MeshStandardMaterial({ emissive: new THREE.Color('#ffffff'), emissiveIntensity: 0.2, metalness: 0.1, roughness: 0.4, transparent: true });
  }, [textureRef.current]);

  return (
    <group ref={ref} position={data.position}>
      <mesh>
        <sphereGeometry args={[0.9, 24, 24]} />
        <meshBasicMaterial color={'#0ff6e6'} opacity={0.06} transparent />
      </mesh>

      <mesh onClick={onActivate} position={[0, 0, 0.2]}>
        <planeGeometry args={[1.8, 1.05, 8, 8]} />
        {textureRef.current ? <meshBasicMaterial map={textureRef.current} toneMapped={false} /> : <meshStandardMaterial color={'#0b1120'} emissive={'#7af6ff'} emissiveIntensity={0.12} />}
      </mesh>

      <mesh position={[0, -0.9, 0]}>
        <planeGeometry args={[1.6, 0.28]} />
        <meshBasicMaterial color={'#000000'} transparent opacity={0.35}/>
      </mesh>
    </group>
  );
}
