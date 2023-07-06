import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { AnimationMixer } from 'three';

const Moon = (props) => {
  const { nodes, animations } = useGLTF('/drone.glb');
  const { actions } = useAnimations(animations, nodes);
  const mixer = useRef(null);

  useEffect(() => {
    mixer.current = new AnimationMixer(nodes.Sketchfab_Scene);
    const clipAction = mixer.current.clipAction(animations[0]);
    clipAction.play();

    return () => mixer.current?.stopAllAction(); // clean up on unmount
  }, [nodes, animations]);

  useEffect(() => {
    const animate = (time) => {
      if (mixer.current) {
        mixer.current.update(time);
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animate);
  }, []);

  return <primitive ref={ref => mixer.current && mixer.current.getRoot()} object={nodes.Sketchfab_Scene} {...props} />;
};

useGLTF.preload('/drone.glb');

export default Moon;
