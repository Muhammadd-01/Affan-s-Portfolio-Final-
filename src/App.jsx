"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
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
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = -Math.random() * 2000
      starsVertices.push(x, y, z)
    }

    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starsVertices, 3))
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    camera.position.z = 5

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      stars.rotation.y += 0.0002
      renderer.render(scene, camera)
    }

    animate()

    // Mouse move effect
    const onMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

      stars.rotation.y += mouseX * 0.0005
      stars.rotation.x += mouseY * 0.0005
    }

    window.addEventListener("mousemove", onMouseMove)

    // Clean up
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
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

