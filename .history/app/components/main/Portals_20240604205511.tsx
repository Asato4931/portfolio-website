"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "../sub/Experience";

export default function Portals() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 25 }}>
      <color attach="background" args={["#fff"]} />
      <Experience />
    </Canvas>
  );
}
