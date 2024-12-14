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
            <directionalLight 
                castShadow
                position={[5,5,5]} 
                intensity={0.8} 
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight 
                castShadow
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