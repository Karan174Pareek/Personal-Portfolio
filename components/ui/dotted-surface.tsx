'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { cn } from '@/lib/utils';

interface DottedSurfaceProps {
  className?: string;
  count?: number;
}

function GridDots({ count = 80 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    const step = 0.6;
    const offset = (count * step) / 2;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = (i * count + j) * 3;
        positions[index] = i * step - offset;
        positions[index + 1] = 0;
        positions[index + 2] = j * step - offset;
      }
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = (i * count + j) * 3;
        // Subtle wave effect
        positions[index + 1] = Math.sin(time + i * 0.15 + j * 0.15) * 0.15;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Parallax effect based on mouse
    pointsRef.current.rotation.x = Math.PI / 8 + state.mouse.y * 0.04;
    pointsRef.current.rotation.y = state.mouse.x * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#00F0FF"
        transparent
        opacity={0.4}
        sizeAttenuation={true}
      />
    </points>
  );
}

export function DottedSurface({ className }: DottedSurfaceProps) {
  return (
    <div className={cn("fixed inset-0 -z-10 bg-black pointer-events-none", className)}>
      <Canvas
        camera={{ position: [0, 6, 12], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <GridDots />
      </Canvas>
    </div>
  );
}
