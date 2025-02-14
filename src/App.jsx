"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import UpButton from "./components/UpButton"

function App() {
  const mountRef = useRef(null)

  useEffect(() => {
    // Three.js scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Create stars
    const starsGeometry = new THREE.BufferGeometry()
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 })

    const starsVertices = []
    for (let i = 0; i < 15000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = -Math.random() * 2000
      starsVertices.push(x, y, z)
    }

    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starsVertices, 3))
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Create moving particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCnt = 5000
    const posArray = new Float32Array(particlesCnt * 3)

    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x49c5b6,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    camera.position.z = 5

    let mouseX = 0
    let mouseY = 0

    const animateParticles = (event) => {
      mouseY = event.clientY
      mouseX = event.clientX
    }

    document.addEventListener("mousemove", animateParticles)

    const clock = new THREE.Clock()

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Animate stars
      stars.rotation.y += 0.00005

      // Animate particles
      particlesMesh.rotation.y = -0.1 * elapsedTime
      if (mouseX > 0) {
        particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008)
        particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00008)
      }

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", onWindowResize)

    // Clean up
    return () => {
      window.removeEventListener("resize", onWindowResize)
      document.removeEventListener("mousemove", animateParticles)
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="min-h-screen bg-primary text-white">
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

