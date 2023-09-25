import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDModel = () => {
  const containerRef = useRef();
  const canvasRef = useRef(); // Add a new ref for the canvas

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a cube and add it to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add the renderer to the DOM
    containerRef.current.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    const canvas = renderer.domElement;

    // Variables to track mouse interaction
    let isDragging = false;
    let previousMousePosition = {
      x: 0,
      y: 0,
    };

    canvas.addEventListener('mousedown', (event) => {
      isDragging = true;
    });

    canvas.addEventListener('mouseup', (event) => {
      isDragging = false;
    });

    canvas.addEventListener('mousemove', (event) => {
      if (!isDragging) return;

      const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y,
      };

      // Adjust rotation based on mouse movement
      cube.rotation.x += deltaMove.y * 0.01;
      cube.rotation.y += deltaMove.x * 0.01;

      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    });

    // Clean up on unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeDModel;
