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

    // Calculate the aspect ratio
    const aspect = width / height;

    // Create an Orthographic camera
    const camera = new THREE.OrthographicCamera(
      -1, // left
      1,  // right
      1,       // top
      -1,      // bottom
      0.1,     // near
      2000     // far
    );
    camera.position.z = 1;

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

    // Create uniforms
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

    const handleResize = () => {
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      const newAspect = newWidth / newHeight;

      renderer.setSize(newWidth, newHeight);
      camera.left = -newAspect;
      camera.right = newAspect;
      camera.top = 1;
      camera.bottom = -1;
      camera.updateProjectionMatrix();
      uniforms.iResolution.value.set(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '240px', height: '340px', position: 'relative' }}>
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <image href="../../public/Just me smaller.png" x="0" y="0" width="100%" height="100%" preserveAspectRatio='none'/>
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" fill="black" />
      </svg>
    </div>
  );
};

export default CoolPortrait;