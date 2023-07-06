import React, { Suspense, useMemo, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { isMobile } from 'react-device-detect';
import {
  ScrollControls,
  DeviceOrientationControls,
  OrbitControls,
  Scroll,
  Float,
  Text,
  Cloud
} from '@react-three/drei';

import Bloom from '~/src/3d-components/Bloom';
import useStore from '../context/mainStore';
import MainCamera from './Camera';
import { Cube, Track, StarsField as Stars, Logo } from '../3d-components';
import ScrollReminderPage from '../components/scrollReminderPage';
import Hologram from '../3d-components/hologram';
import Rocket from '../3d-components/rocket/Rocket.js'; // Import the Rocket component
import Moon from '../3d-components/moon/Moon.js'
import Earth from '../3d-components/earth/Earth.js'
import Sun from '../3d-components/sun/Sun.js'
import Gaming from '../3d-components/gaming/Gaming.js';
import Flag from '../3d-components/moon/Flag';
import SkyBox from '../3d-components/cube/components/skybox/Skybox';
import Sky from '../assets/esports1.jpg'
import Lightning from '../3d-components/lightning/Lightning.js';
import NFT from '../3d-components/nft/NFT';
import Music from '../3d-components/music/Music';
import ETH from '../3d-components/eth/ETH';

function MainScene () {

  const earthRef = useRef(); // Create a ref to access the Earth component

  const floatingCamera = useStore((state) => state.floatingCamera);
  const currentScale = useMemo(
    () => (isMobile ? [0.6, 0.6, 0.6] : [1, 1, 1]),
    []
  );

  useEffect(() => {
    let animationFrameId = null;

    const animate = () => {
      // Update the rotation of the Earth
      if (earthRef.current && earthRef.current.rotation) {
        earthRef.current.rotation.y += .01; // Adjust the rotation speed as desired
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Canvas
      style={{
        height: '100%',
        position: 'absolute',
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }}
      gl={{ antialias: true }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = gl.PCFSoftShadowMap; // default THREE.PCFShadowMap
      }}
    >
      <ScrollControls damping={8} distance={1} pages={8}>
      <SkyBox textureUrl={Sky} /> 
        <Scroll html>
          <ScrollReminderPage />
        </Scroll>
        <Bloom>
          <Stars />
          <Lightning position={[220, -5, -20]} scale={[.01, .01, .01]} /> 

          <Cloud position={[150, 80, 180]} scale={[20, 20, 20]} />
          {/* <Cloud position={[300, -150, 70]} scale={[4, 4, 4]} /> */}
          {/* <Cloud position={[750, -100, 70]} scale={[3, 3, 3]} /> */}
          <ambientLight intensity={0.3} />
          <pointLight position={[100, 100, 10]} intensity={1.8} />

          {floatingCamera &&
            (isMobile ? <DeviceOrientationControls /> : <OrbitControls />)}
          <Track />
          <MainCamera />
          {/* <Rocket position={[85, 25, 130]} scale={[.5, .5, .5]} rotation={[Math.PI / 51, 550, .3]} /> */}
          {/* <Flag position={[-125, 170, 120]} scale={[10, 10, 10]} rotation={[Math.PI / 80, 0, 0]} /> */}
          <NFT position={[-270, 105, 50]} scale={[25, 25, 25]} rotation={[Math.PI / 51, 250, -1]} />

          <Moon position={[-125, 100, 220]} scale={[150, 150, 150]} rotation={[Math.PI / 80, 520, .3]} />
          <Sun  position={[355, -100, -200]} scale={[85, 85, 85]} rotation={[Math.PI / 51, 250, 0]} />
          <Earth ref={earthRef} position={[878, 60, -69]} scale={[555, 555, 555]}  />

          <Suspense
            fallback={
              <Text
                fontSize={24}
                rotation={[Math.PI / 0.8, Math.PI / 0.57, Math.PI / 0.845]}
              >
                Loading...
              </Text>
            }
          >
            <Float scale={currentScale}>
              <Logo />
              {/* <NFT position={[125, 25, 150]} scale={[15, 15, 15]} rotation={[Math.PI / 51, 550, .3]} /> */}

              <Rocket position={[125, 25, 150]} scale={[15, 15, 15]} rotation={[Math.PI / 51, 550, .3]} />
              
              <Gaming position={[-125, 25, -80]} scale={[5, 5, 5]} rotation={[Math.PI / 51, 50, -.3]} />
              <Music position={[25, 25, -100]} scale={[25, 25, 25]} rotation={[Math.PI / 51, 10, -.3]} />
              <Cloud position={[245 , 35, 220]} scale={[5, 5, 5]} />

              <Hologram />
              <Cube position={[0, 0, 0]} />
              {/* <ETH position={[0, -50, -100]} scale={[.05, .05, .05]} rotation={[Math.PI / 100, 50, 2]} /> */}
            </Float>
          </Suspense>
        </Bloom>
      </ScrollControls>
    </Canvas>
  );
}

export default MainScene;
