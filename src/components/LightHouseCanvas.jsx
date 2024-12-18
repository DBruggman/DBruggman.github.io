import { Canvas } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function LightHouseModel() {
    const { scene } = useGLTF('Meshes/Lighthouse.glb');
    const modelRef = useRef();
        
    useEffect(() => {
        scene.traverse((object) => {
            if (object.isMesh) {
                object.castShadow = true;
                object.receiveShadow = true;
            }
        })
    }, [scene]);
    
    return <primitive ref={modelRef} object={scene} />;
}

function LightHouseCanvas() {
    return (
        <Canvas shadows style={{width: '100vw', height:'100vh'}}>
            <ambientLight intensity={0.5} />
            
            <pointLight 
                castShadow={true}
                position={[20,30,10]} 
                intensity={1}
            />
            <PerspectiveCamera 
                makeDefault 
                position={[20, 10, 5]} 
                rotation={[-Math.PI / 4, 20, 100]}
            />
            <LightHouseModel />
            <OrbitControls />
        </Canvas>
    );
}

export default LightHouseCanvas;