"use client";
import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import {
  Environment,
  MeshPortalMaterial,
  RoundedBox,
  useTexture,
  Text,
  CameraControls,
  useCursor,
} from "@react-three/drei";
import { useFrame, useThree, RootState } from "@react-three/fiber";

import Alien from "./Alien";
import Shuttle from "./Shuttle";
import Alien_Skills from "./Alien_Skills";
import Alien_Projects from "./Alien_Projects";
import Spanner from "./Spanner";
import Astronaut from "./Astronaut";
import Explosion2 from "./Explosion";

import { easing } from "maath";

type ActiveType = string | null;

interface PortalStageProps {
  children: React.ReactNode;
  texture: string;
  title: string;
  color?: string;
  active: string | null;
  setActive: (value: string | null) => void;
  hovered: boolean;
  setHovered: (value: boolean) => void;
  onDoubleClick?: () => void;
}

export default function Experience() {
  const [active, setActive] = useState<ActiveType>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const controlsRef = useRef<CameraControls | null>(null);
  const scene = useThree((state: RootState) => state.scene);
  useCursor(hovered);
  useEffect(() => {
    if (active && controlsRef.current) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active)!.getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        0,
        0,
        5,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else {
      controlsRef.current?.setLookAt(0, 0, 10, 0, 0, 0, true);
    }
  }, [active]);
  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="apartment" />
      <CameraControls
        ref={controlsRef}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <PortalStage
        texture={"textures/earth.webp"}
        position-x={-2.5}
        rotation-y={Math.PI / 8}
        title={"About Me"}
        color={"#fff"}
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
        onDoubleClick={() => {
          setTimeout(() => {
            window.location.href = "/aboutme";
          }, 1000);
        }}
      >
        <Alien scale={0.51} position-y={3} position-z={-1.5} />
        <Explosion2 scale={0.13} position-y={-0.7} position-z={-5} />
      </PortalStage>

      <PortalStage
        texture={"textures/stars.webp"}
        title={"Skills"}
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
        onDoubleClick={() => {
          setTimeout(() => {
            window.location.href = "/skills";
          }, 1000);
        }}
      >
        <Alien_Skills
          scale={0.25}
          position-x={-0.5}
          position-y={-0.3}
          position-z={-1.5}
        />
        <Astronaut
          scale={0.35}
          position-x={0.5}
          position-y={-0.5}
          position-z={-1}
        />
        <Spanner
          scale={0.03}
          position-x={-0.45}
          position-y={0.75}
          position-z={-1.3}
        />
      </PortalStage>
      <PortalStage
        texture={"textures/nebula.webp"}
        position-x={2.5}
        rotation-y={Math.PI / -8}
        title={"Projects"}
        color={"#fff"}
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
        onDoubleClick={() => {
          setTimeout(() => {
            window.location.href = "/projects";
          }, 1000);
        }}
      >
        <Shuttle scale={0.005} position-y={-0.5} />
        <Alien_Projects
          scale={0.25}
          position-x={0}
          position-y={0.42}
          position-z={0}
        />
      </PortalStage>
    </>
  );
}

export function PortalStage({
  children,
  texture,
  title,
  color,
  active,
  setActive,
  hovered,
  setHovered,

  ...props
}: PortalStageProps) {
  const map = useTexture(texture);
  const portalRef = useRef<THREE.Mesh | null | any>(null);

  useFrame((_state, delta) => {
    const worldOpen = active === title;
    if (portalRef.current) {
      easing.damp(portalRef.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
    }
  });

  return (
    <group {...props}>
      <Text
        font="fonts/StarJedi-DGRW.ttf"
        fontSize={0.32}
        position={[0, -1.4, 0.026]}
        anchorY={"bottom"}
      >
        {title}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>

      <RoundedBox
        args={[2, 3, 0.05]}
        name={title}
        onDoubleClick={() => {
          setActive(active === title ? null : title);
        }}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <MeshPortalMaterial ref={portalRef}>
          <ambientLight intensity={0.6} />
          <Environment preset="apartment" />
          {children}
          <mesh>
            <sphereGeometry args={[7, 48, 48]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
}
