/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/Alien_Skills/Alien_Skills.gltf -o app/components/sub/Alien_Skills.jsx 
Author: Kyyy_24 (https://sketchfab.com/luckyardrianto27)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/baby-cute-alien-1f7cbacd72334158bebba227396442d6
Title: Baby cute alien
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Alien_Skills.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="76204b749c104642981ab3237070744cfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Cube" position={[21.816, 97.813, 0]} />
                <group name="Armature" position={[21.816, 97.813, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_8" position={[21.816, 97.813, 0]} />
                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.material} skeleton={nodes.Object_9.skeleton} />
                    <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Outline} skeleton={nodes.Object_10.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Alien_Skills.gltf')