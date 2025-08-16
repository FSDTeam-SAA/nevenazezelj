"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Center,
  useProgress,
  ContactShadows,
} from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Hook to check if screen is mobile/tablet
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
  return isMobile;
}

function WatchModel({ onModelLoaded }: { onModelLoaded: () => void }) {
  const pathname = usePathname();
  const silver = pathname === "/watches/aereus-tg-379";
  const isMobile = useIsMobile();
  const { scene } = useGLTF(silver ? "/model/silver.glb" : "/model/gold.glb");

  useEffect(() => {
    onModelLoaded();
  }, [onModelLoaded]);

  return (
    <Center position={isMobile ? [0.03, 1 / 2, 0] : [0.1, 0, 0]}>
      <primitive object={scene} scale={isMobile ? 1.3 : 1.7} />
    </Center>
  );
}

function Loader() {
  const { progress } = useProgress();
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
      <Image
        src="/images/loader.png"
        alt="Loading model..."
        width={600}
        height={600}
        className="animate-pulse"
      />
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mt-4"></div>
      <p className="text-sm text-center text-gray-900 mt-2">
        Loading Model... {Math.floor(progress)}%
      </p>
    </div>
  );
}

export default function WatchViewer() {
  const controlsRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [startTime] = useState(() => Date.now());

  const handleModelLoaded = () => {
    const elapsed = Date.now() - startTime;
    const remaining = 1000 - elapsed; // 1s minimum
    if (remaining > 0) {
      setTimeout(() => setIsLoaded(true), remaining);
    } else {
      setIsLoaded(true);
    }
  };

  return (
    <div className="relative h-svh w-svw border-2">
      {!isLoaded && <Loader />}
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Suspense fallback={null}>
          <WatchModel onModelLoaded={handleModelLoaded} />
          <Environment preset="studio" />
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.5}
            scale={7}
            blur={3}
            far={5}
          />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          minDistance={3}
          maxDistance={9}
        />
      </Canvas>
    </div>
  );
}
