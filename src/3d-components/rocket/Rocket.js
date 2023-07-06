import React from 'react';
import { useGLTF } from '@react-three/drei';

const Rocket = (props) => {
  const { scene } = useGLTF('/plane.glb', true); // Adjusted path
  return <primitive object={scene} {...props} />;
};

useGLTF.preload('/plane.glb'); // Preload adjusted path

export default Rocket;
