import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import UpButton from './components/UpButton'

function App() {
  const mountRef = useRef(null)

  useEffect(() => {
    // Three.js scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Create Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCnt = 12000
    const posArray = new Float32Array(particlesCnt * 3)

    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 30
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    camera.position.z = 5

    let mouseX = 0
    let mouseY = 0

    // Mouse Move Event
    const animateParticles = (event) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5
      mouseY = (event.clientY / window.innerHeight) - 0.5
    }
    document.addEventListener('mousemove', animateParticles)

    // Pop-Out Particles on Click
    const popOutParticles = (event) => {
      const burstGeometry = new THREE.BufferGeometry()
      const burstCnt = 100
      const burstArray = new Float32Array(burstCnt * 3)

      for (let i = 0; i < burstCnt * 3; i++) {
        burstArray[i] = (Math.random() - 0.5) * 1
      }

      burstGeometry.setAttribute('position', new THREE.BufferAttribute(burstArray, 3))

      const burstMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xff6666,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      })

      const burstMesh = new THREE.Points(burstGeometry, burstMaterial)
      burstMesh.position.set(
        (event.clientX / window.innerWidth - 0.5) * 10,
        -(event.clientY / window.innerHeight - 0.5) * 10,
        0
      )
      scene.add(burstMesh)

      // Animate burst fade and movement
      const burstAnimation = () => {
        burstMesh.material.opacity -= 0.02
        burstMesh.position.z -= 0.05
        if (burstMesh.material.opacity > 0) {
          requestAnimationFrame(burstAnimation)
        } else {
          scene.remove(burstMesh)
        }
      }
      burstAnimation()
    }
    document.addEventListener('click', popOutParticles)

    const clock = new THREE.Clock()

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Rotate Particles Faster
      particlesMesh.rotation.y = elapsedTime * 0.08
      particlesMesh.rotation.x = elapsedTime * 0.04

      // Fast Mouse-based Movement
      particlesMesh.position.x += (mouseX * 5 - particlesMesh.position.x) * 0.1
      particlesMesh.position.y += (-mouseY * 5 - particlesMesh.position.y) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', onWindowResize)

    // Clean up
    return () => {
      window.removeEventListener('resize', onWindowResize)
      document.removeEventListener('mousemove', animateParticles)
      document.removeEventListener('click', popOutParticles)
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

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
        <UpButton />
      </div>
    </div>
  )
}

export default App
