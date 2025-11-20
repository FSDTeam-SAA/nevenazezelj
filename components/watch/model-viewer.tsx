"use client";

import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  useProgress,
  ContactShadows,
} from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Box3, Vector3 } from "three";

function WatchModel({ onModelLoaded }: { onModelLoaded: () => void }) {
  const pathname = usePathname();
  const monarch = pathname === "/watches/monarch-s-379";
  const aureus = pathname === "/watches/aureus-sg-379";
  const glbPath = monarch
    ? "/model/Monarch3.glb"
    : aureus
    ? "/model/Aureus3.glb"
    : "/model/Empress.glb";

  const { scene } = useGLTF(glbPath);
  const sceneRef = useRef(scene);

  useEffect(() => {
    sceneRef.current = scene;
  }, [scene]);

  useEffect(() => {
    const currentScene = sceneRef.current;
    if (!currentScene) return;

    console.log("[v0] WatchModel useEffect triggered for path:", glbPath);

    // 1) Ensure geometries have bounding info (safe)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currentScene.traverse((obj: any) => {
      if (obj.isMesh && obj.geometry) {
        obj.geometry.computeBoundingBox?.();
        obj.geometry.computeBoundingSphere?.();
      }
    });

    // 2) Compute combined bounding box of the whole visible scene
    const box = new Box3().setFromObject(currentScene);

    if (!box.isEmpty()) {
      const size = new Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);

      // Quick heuristic: remove any child whose own box is > 10x maxDim
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      currentScene.children = currentScene.children.filter((child: any) => {
        if (!child) return false;
        const childBox = new Box3().setFromObject(child);
        if (childBox.isEmpty()) return true;
        const childSize = new Vector3();
        childBox.getSize(childSize);
        const childMax = Math.max(childSize.x, childSize.y, childSize.z);
        if (childMax > maxDim * 10) {
          return false;
        }
        return true;
      });

      // Recompute bounding box after pruning
      const prunedBox = new Box3().setFromObject(currentScene);
      prunedBox.getSize(size);
      const prunedMax = Math.max(size.x, size.y, size.z);

      // 4) Center the model (move so world origin is at the model center)
      const center = new Vector3();
      prunedBox.getCenter(center);
      currentScene.position.sub(center);

      // 5) Uniformly scale model to a desired visible size
      const desiredSize = 1.6;
      if (prunedMax > 0) {
        const scale = desiredSize / prunedMax;
        currentScene.scale.setScalar(scale);
      }

      console.log(
        "[v0] Model processed - size:",
        prunedMax,
        "scale:",
        prunedMax > 0 ? desiredSize / prunedMax : 1
      );
    } else {
      console.log("[v0] Empty bounding box detected for model");
    }

    onModelLoaded();
  }, [glbPath, onModelLoaded]);

  return <primitive object={scene} />;
}

function CameraController({ isLoaded }: { isLoaded: boolean }) {
  const { camera } = useThree();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    if (!isLoaded) return;

    console.log("[v0] CameraController: Fitting camera to model");

    // Position camera at a distance that frames the model
    const distance = 5;
    camera.position.set(0, 1, distance);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    // Update controls to sync with camera
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.object = camera;
      controlsRef.current.update();
    }
  }, [isLoaded, camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      minDistance={2}
      maxDistance={7}
    />
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
  const [isLoaded, setIsLoaded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      // Clear any pending timeout when component unmounts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleModelLoaded = () => {
    console.log("[v0] Model load complete, scheduling isLoaded state update");

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Enforce a minimum loader display time for UX
    timeoutRef.current = setTimeout(() => {
      setIsLoaded(true);
      timeoutRef.current = null;
    }, 1000);
  };

  return (
    <div className="relative h-[100vh] w-vw border-2">
      {!isLoaded && <Loader />}
      <Canvas shadows camera={{ position: [0, 1, 5], fov: 40 }}>
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
            position={[0, -1, 0]}
            opacity={0.5}
            scale={7}
            blur={3}
            far={4}
          />
        </Suspense>
        <CameraController isLoaded={isLoaded} />
      </Canvas>
    </div>
  );
}
