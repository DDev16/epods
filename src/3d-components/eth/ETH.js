import React from 'react';
import { useGLTF } from '@react-three/drei';

const ETH = (props) => {
  const { scene } = useGLTF('/eth.glb', true); // Adjusted path
  return <primitive object={scene} {...props} />;
};

useGLTF.preload('/eth.glb'); // Preload adjusted path

export default ETH;
