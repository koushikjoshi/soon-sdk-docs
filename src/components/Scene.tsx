"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, OrbitControls } from "@react-three/drei";

function Logo3D() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const textRef = useRef<any>();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (textRef.current) {
      textRef.current.position.y = Math.sin(elapsed) * 0.2;
      textRef.current.rotation.x = Math.sin(elapsed * 0.5) * 0.1;
    }
  });

  useEffect(() => {
    fetch("/fonts/helvetiker_regular.typeface.json")
      .then((response) => {
        if (response.ok) {
          setFontLoaded(true);
        }
      })
      .catch((error) => console.error("Font loading error:", error));
  }, []);

  if (!fontLoaded) return null;

  return (
    <Center ref={textRef}>
      {/* Glow layer for S */}
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={3.2}
        height={0.2}
        curveSegments={32}
      >
        S
        <meshStandardMaterial
          color="white"
          emissive="white"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </Text3D>

      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={3}
        height={0.2}
        curveSegments={32}
      >
        S
        <meshStandardMaterial
          color="white"
          emissive="white"
          emissiveIntensity={1}
          toneMapped={false}
        />
      </Text3D>

      {/* Glow layer for first O */}
      <group position={[4.5, 1.6, -0.1]} rotation={[0, 0, 0.5]}>
        <mesh>
          <torusGeometry args={[1.4, 0.3, 32, 100, Math.PI * 1]} />
          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
      <group position={[4.5, 1.6, 0]} rotation={[0, 0, 0.5]}>
        <mesh>
          <torusGeometry args={[1.3, 0.2, 32, 100, Math.PI * 1]} />
          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={1}
            toneMapped={false}
          />
        </mesh>
      </group>
      <group position={[4.7, 1.2, -0.1]} rotation={[0, 0, 0.5]}>
        <mesh>
          <torusGeometry args={[-1.4, 0.3, 32, 100, Math.PI * 1]} />
          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
      <group position={[4.7, 1.2, 0]} rotation={[0, 0, 0.5]}>
        <mesh>
          <torusGeometry args={[-1.3, 0.2, 32, 100, Math.PI * 1]} />
          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={0.3}
            toneMapped={false}
            opacity={0.3}
          />
        </mesh>
      </group>

      {/* Glow layer for second O */}
      <group position={[8.3, 1.6, -0.1]} rotation={[0, 0, 0.5]}>
        <mesh>
          <torusGeometry args={[1.4, 0.3, 32, 100, Math.PI * 1]} />
          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
      <group position={[8.3, 1.6, 0]} rotation={[0, 0, 0.5]}>
        <mesh>
          <torusGeometry args={[1.3, 0.2, 32, 100, Math.PI * 1]} />
          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={1}
            toneMapped={false}
          />
        </mesh>
      </group>
      <group position={[8.5, 1.2, -0.1]} rotation={[0, 0, 0.5]}>
        <mesh>
          <torusGeometry args={[-1.4, 0.3, 32, 100, Math.PI * 1]} />
          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
      <group position={[8.5, 1.2, 0]} rotation={[0, 0, 0.5]}>
        <mesh>
          <torusGeometry args={[-1.3, 0.2, 32, 100, Math.PI * 1]} />
          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={1}
            toneMapped={false}
          />
        </mesh>
      </group>

      {/* Glow layer for N */}
      <group position={[10.8, 0, -0.1]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={3.2}
          height={0.2}
          curveSegments={32}
        >
          N
          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </Text3D>
      </group>
      <group position={[10.8, 0, 0]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={3}
          height={0.2}
          curveSegments={32}
        >
          N
          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={1}
            toneMapped={false}
          />
        </Text3D>
      </group>
    </Center>
  );
}

export default function Scene() {
  const [cameraPosition, setCameraPosition] = useState<number[]>([0, 0, 10]);

  useEffect(() => {
    const updateCameraPosition = () => {
      const width = window.innerWidth;
      const newCameraPosition = width < 768 ? [0, 0, 20] : [0, 0, 10]; // Adjust based on screen size
      setCameraPosition(newCameraPosition);
    };

    updateCameraPosition(); // Set initial position
    window.addEventListener("resize", updateCameraPosition); // Update on resize

    return () => {
      window.removeEventListener("resize", updateCameraPosition); // Cleanup
    };
  }, []);

  return (
    <div className="absolute inset-0 z-10 w-screen h-screen">
      <Canvas
        camera={{ position: cameraPosition as [number, number, number] }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Logo3D />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
