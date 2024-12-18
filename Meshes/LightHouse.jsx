/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 LightHouse.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/LightHouse.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[2.121, 3.214, -1.589]} scale={0.538}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials.white} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.red} />
        <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['grey base']} />
        <mesh geometry={nodes.Cylinder001_3.geometry} material={materials.Emission} />
      </group>
      <mesh geometry={nodes.Water.geometry} material={materials.Water} position={[-1.54, 1.139, -0.992]} rotation={[0, 0.194, 0]} scale={32.984} />
      <mesh geometry={nodes.Base_Rocks.geometry} material={materials.Rock} position={[-1.541, 0.725, -1]} />
      <group position={[-4.294, 3.094, 0.332]} rotation={[0, 0.624, 0]} scale={0.274}>
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['house yellow']} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials['roof red']} />
      </group>
      <group position={[-2.921, 3.071, -0.225]} rotation={[Math.PI, -0.005, Math.PI]} scale={0.329}>
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['house yellow']} />
        <mesh geometry={nodes.Cube002_2.geometry} material={materials['roof red']} />
      </group>
      <group position={[-2.333, 2.952, 2.216]} rotation={[Math.PI, -0.806, Math.PI]} scale={0.205}>
        <mesh geometry={nodes.Cube003_1.geometry} material={materials['house yellow']} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials['roof red']} />
      </group>
      <group position={[-4.261, 2.878, 3.548]} rotation={[-Math.PI, 0.024, -Math.PI]} scale={0.212}>
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['house yellow']} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials['roof red']} />
      </group>
      <group position={[-5.091, 2.998, 1.323]} rotation={[0, 0.743, 0]} scale={0.237}>
        <mesh geometry={nodes.Cube006_1.geometry} material={materials['house yellow']} />
        <mesh geometry={nodes.Cube006_2.geometry} material={materials['roof red']} />
      </group>
      <group position={[-5.025, 2.914, 2.61]} rotation={[0, 0.713, 0]} scale={0.191}>
        <mesh geometry={nodes.Cube005_1.geometry} material={materials['house yellow']} />
        <mesh geometry={nodes.Cube005_2.geometry} material={materials['roof red']} />
      </group>
      <group position={[-1.861, 3.042, 0.695]} rotation={[Math.PI, -0.305, Math.PI]} scale={0.191}>
        <mesh geometry={nodes.Cube005_1.geometry} material={materials['house yellow']} />
        <mesh geometry={nodes.Cube005_2.geometry} material={materials['roof red']} />
      </group>
      <group position={[-3.889, 2.958, 2.054]} rotation={[Math.PI, -0.806, Math.PI]} scale={0.205}>
        <mesh geometry={nodes.Cube007_1.geometry} material={materials['house yellow']} />
        <mesh geometry={nodes.Cube007_2.geometry} material={materials['roof red']} />
      </group>
      <group position={[-3.143, 2.906, 3.142]} rotation={[0, -1.174, 0]} scale={0.205}>
        <mesh geometry={nodes.Cube007_1.geometry} material={materials['house yellow']} />
        <mesh geometry={nodes.Cube007_2.geometry} material={materials['roof red']} />
      </group>
      <group position={[-3.073, 3.028, 0.961]} rotation={[0, 0.757, 0]} scale={0.205}>
        <mesh geometry={nodes.Cube007_1.geometry} material={materials['house yellow']} />
        <mesh geometry={nodes.Cube007_2.geometry} material={materials['roof red']} />
      </group>
    </group>
  )
}

useGLTF.preload('/LightHouse.glb')