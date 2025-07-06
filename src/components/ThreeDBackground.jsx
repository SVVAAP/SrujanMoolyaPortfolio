import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Text } from '@react-three/drei';

const SYMBOLS = ['{}', '</>', '[]', '()', '/* */', '=>'];
const COLORS = ['#38bdf8', '#22d3ee', '#a5b4fc', '#4ade80', '#818cf8', '#f472b6'];

function FloatingSymbol({ symbol, color, position, rotationSpeed, floatSpeed }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y += rotationSpeed;
      ref.current.rotation.x += rotationSpeed / 2;
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * floatSpeed) * 0.6;
    }
  });
  return (
    <Text
      ref={ref}
      position={position}
      fontSize={1.6}
      color={color}
      anchorX="center"
      anchorY="middle"
      outlineColor={color}
      outlineWidth={0.08}
      outlineBlur={0.7}
    >
      {symbol}
    </Text>
  );
}

function FloatingSymbolsField() {
  // Randomly distribute symbols in 3D space
  const symbols = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => {
      const symbol = SYMBOLS[i % SYMBOLS.length];
      const color = COLORS[i % COLORS.length];
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 10;
      const rotationSpeed = 0.003 + Math.random() * 0.004;
      const floatSpeed = 0.7 + Math.random() * 0.7;
      return { symbol, color, position: [x, y, z], rotationSpeed, floatSpeed };
    });
  }, []);
  return (
    <>
      {symbols.map((props, i) => (
        <FloatingSymbol key={i} {...props} />
      ))}
    </>
  );
}

function CameraRig({ children }) {
  useFrame(({ camera, clock }) => {
    camera.position.x = Math.sin(clock.getElapsedTime() * 0.2) * 2;
    camera.position.y = Math.sin(clock.getElapsedTime() * 0.13) * 1.2;
    camera.lookAt(0, 0, 0);
  });
  return children;
}

export default function ThreeDBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(ellipse at center, #18181b 0%, #020617 100%)' }}>
      <Canvas camera={{ position: [0, 0, 14], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={0.7} color="#38bdf8" />
        <CameraRig>
          <FloatingSymbolsField />
        </CameraRig>
        <Environment preset="night" />
      </Canvas>
    </div>
  );
} 