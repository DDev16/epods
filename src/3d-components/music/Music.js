import React from 'react';
import { useGLTF } from '@react-three/drei';

const Music = (props) => {
  const { scene } = useGLTF('/music.glb', true); // Adjusted path
  return <primitive object={scene} {...props} />;
};

useGLTF.preload('/music.glb'); // Preload adjusted path

export default Music;
