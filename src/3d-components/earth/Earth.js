import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Earth = forwardRef((props, ref) => {
  const { scene } = useGLTF('/vr1.glb', true); // Adjusted path
  return <primitive ref={ref} object={scene} {...props} />;
});

useGLTF.preload('/vr1.glb'); // Preload adjusted path

export default Earth;
