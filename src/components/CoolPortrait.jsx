import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import fractalShader from '../../public/shaders/fractalShader.glsl';

export const CoolPortrait = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Create a WebGL renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // Create a camera
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;

        // Create a scene
        const scene = new THREE.Scene();

        // Vertex shader
        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        // Fragment shader
        
        const fragmentShader = fractalShader;

        // Uniforms
        const uniforms = {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(width, height) },
        };

        // Create a ShaderMaterial with the custom shaders
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
        });

        // Create a geometry and a mesh
        const planeGeometry = new THREE.PlaneGeometry(2, 2);
        const plane = new THREE.Mesh(planeGeometry, material);
        scene.add(plane);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            uniforms.iTime.value += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        });

        // Cleanup on unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
            <svg
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                viewBox="0 0 100 100"
            >
                <defs>
                    <mask id="circleMask">
                        <rect width="100" height="100" fill="white" />
                        <circle cx="50" cy="50" r="30" fill="black" />
                    </mask>
                </defs>
                <rect width="100" height="100" fill="black" mask="url(#circleMask)" />
            </svg>
        </div>
    );
};

export default CoolPortrait;