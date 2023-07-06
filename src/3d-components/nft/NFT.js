import React from 'react';
import { useGLTF } from '@react-three/drei';

const NFT = (props) => {
  const { scene } = useGLTF('/nft.glb', true); // Adjusted path
  return <primitive object={scene} {...props} />;
};

useGLTF.preload('/nft.glb'); // Preload adjusted path

export default NFT;
