import React from 'react';
import { useGLTF } from '@react-three/drei';

const Sun= (props) => {
  const { scene } = useGLTF('/xbox1.glb', true); // Adjusted path
  return <primitive object={scene} {...props} />;
};

useGLTF.preload('/xbox1.glb'); // Preload adjusted path

export default Sun;
