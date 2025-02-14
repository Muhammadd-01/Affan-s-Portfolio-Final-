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
    for (let i = 0; i < 15000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = -Math.random() * 2000
      starsVertices.push(x, y, z)
    }

    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starsVertices, 3))
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Create nebula
    const nebulaTexture = new THREE.TextureLoader().load("/nebula.jpg")
    const nebulaGeometry = new THREE.PlaneGeometry(2000, 2000)
    const nebulaMaterial = new THREE.MeshBasicMaterial({ map: nebulaTexture, transparent: true, opacity: 0.3 })
    const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial)
    nebula.position.z = -1000
    scene.add(nebula)

    camera.position.z = 5

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const windowHalfX = window.innerWidth / 2
    const windowHalfY = window.innerHeight / 2

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      targetX = mouseX * 0.001
      targetY = mouseY * 0.001

      stars.rotation.y += (targetX - stars.rotation.y) * 0.05
      stars.rotation.x += (targetY - stars.rotation.x) * 0.05

      nebula.rotation.y += (targetX - nebula.rotation.y) * 0.02
      nebula.rotation.x += (targetY - nebula.rotation.x) * 0.02

      renderer.render(scene, camera)
    }

    animate()

    // Mouse move effect
    const onMouseMove = (event) => {
      mouseX = event.clientX - windowHalfX
      mouseY = event.clientY - windowHalfY
    }

    window.addEventListener("mousemove", onMouseMove)

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", onWindowResize)

    // Clean up
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("resize", onWindowResize)
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

