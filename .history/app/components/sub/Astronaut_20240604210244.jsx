/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/Astronaut/Astronaut.gltf -o app/components/sub/Astronaut.jsx 
Author: IronEqual (https://sketchfab.com/ie-niels)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/astronaut-from-poly-by-google-255536005c354e81a2347418a4be413d
Title: Astronaut from Poly by Google
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Astronaut.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Astronaut_mat} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/Astronaut.gltf')
