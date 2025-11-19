"use client";

import { Canvas } from "@react-three/fiber";
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
    ? "/model/Monarch2.glb"
    : aureus
    ? "/model/Aureus2.glb"
    : "/model/old.glb";

  const { scene } = useGLTF(glbPath);

  useEffect(() => {
    // Wait until gltf scene exists
    if (!scene) return;

    // 1) Ensure geometries have bounding info (safe)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    scene.traverse((obj: any) => {
      if (obj.isMesh && obj.geometry) {
        // make sure geometry bounding info is computed
        obj.geometry.computeBoundingBox?.();
        obj.geometry.computeBoundingSphere?.();
      }
    });

    // 2) Compute combined bounding box of the whole visible scene
    const box = new Box3().setFromObject(scene);

    // If the box is empty (no geometry), bail
    if (!box.isEmpty()) {
      // 3) Optionally detect very large empty nodes and remove them:
      //    (If some child node has enormous size compared to the rest, remove it)
      const size = new Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);

      // Quick heuristic: remove any child whose own box is > 10x maxDim
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      scene.children = scene.children.filter((child: any) => {
        if (!child) return false;
        const childBox = new Box3().setFromObject(child);
        if (childBox.isEmpty()) return true;
        const childSize = new Vector3();
        childBox.getSize(childSize);
        const childMax = Math.max(childSize.x, childSize.y, childSize.z);
        // keep child if reasonable
        if (childMax > maxDim * 10) {
          // drop it (likely an invisible huge helper or an empty root)
          return false;
        }
        return true;
      });

      // Recompute bounding box after pruning
      const prunedBox = new Box3().setFromObject(scene);
      prunedBox.getSize(size);
      const prunedMax = Math.max(size.x, size.y, size.z);

      // 4) Center the model (move so world origin is at the model center)
      const center = new Vector3();
      prunedBox.getCenter(center);
      // subtract center from scene.position so model's center -> (0,0,0)
      scene.position.sub(center);

      // 5) Uniformly scale model to a desired visible size
      const desiredSize = 1.6; // tweak this to taste (how big you want the model)
      if (prunedMax > 0) {
        const scale = desiredSize / prunedMax;
        scene.scale.setScalar(scale);
      }
    }

    // signal parent loader
    onModelLoaded();
  }, [scene, onModelLoaded]);

  // Render the cleaned scene directly. Do NOT wrap in Center.
  return <primitive object={scene} />;
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
    <div className="relative h-[100vh] w-vw border-2">
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
            position={[0, -1, 0]}
            opacity={0.5}
            scale={7}
            blur={3}
            far={4}
          />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          minDistance={2}
          maxDistance={7}
        />
      </Canvas>
    </div>
  );
}
