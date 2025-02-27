import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import UpButton from './components/UpButton';
import Chatbot from './components/Chatbot';

function App() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Space Moving Particles with Glow
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 10000;
    const posArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.07, // Slightly bigger for better visibility
      color: 0x00ffff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;

    // Mouse Move Event
    const animateParticles = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', animateParticles);

    const clock = new THREE.Clock();

    // Animation Loop with Glow Effect
    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Particles rotate and move with cursor for dynamic feel
      particlesMesh.rotation.y = elapsedTime * 0.2 + mouseX * 0.5;
      particlesMesh.rotation.x = elapsedTime * 0.1 + mouseY * 0.5;

      // Depth movement for hyperspace effect
      particlesMesh.position.z += Math.sin(elapsedTime * 0.5) * 0.05;
      particlesMesh.position.x += Math.cos(elapsedTime * 0.3) * 0.05;
      particlesMesh.position.y += Math.sin(elapsedTime * 0.4) * 0.05;

      // Pulsating Glow Effect
      particlesMaterial.opacity = 0.5 + Math.sin(elapsedTime * 2) * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', animateParticles);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <WhatsAppButton />
        <Chatbot className="fixed bottom-4 right-4 z-20" />
        <UpButton />
      </div>
    </div>
  );
}

export default App;