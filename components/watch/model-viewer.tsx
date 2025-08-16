"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Center } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Hook to check if screen is mobile/tablet
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024); // <1024px = mobile/tablet
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isMobile;
}

function WatchModel() {
  const pathname = usePathname();
  const silver = pathname === "/watches/aereus-tg-379";
  const isMobile = useIsMobile();
  const { scene } = useGLTF(silver ? "/model/silver.glb" : "/model/gold.glb");

  return (
    <Center position={isMobile ? [0, 0.6, 0] : [0, 0, 0]}>
      <primitive object={scene} scale={isMobile ? 1 : 1.7} />
    </Center>
  );
}

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
      <div>
        <Image
          src="/images/loader.png"
          alt="Loading model..."
          width={800}
          height={800}
          className="animate-pulse"
        />
        <div className="inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
        <p className="text-sm text-center text-gray-900 mt-2">
          Loading Model...
        </p>
      </div>
    </div>
  );
}

export default function WatchViewer() {
  const controlsRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [startTime] = useState(() => Date.now());

  const handleCanvasCreated = () => {
    const elapsed = Date.now() - startTime;
    const remaining = 1000 - elapsed; // 1 second minimum
    if (remaining > 0) {
      setTimeout(() => setIsLoaded(true), remaining);
    } else {
      setIsLoaded(true);
    }
  };

  return (
    <div className="relative h-svh w-svw border-2">
      {!isLoaded && <Loader />}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        onCreated={handleCanvasCreated}
      >
        <ambientLight intensity={0} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <WatchModel />
          <Environment preset="studio" />
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
