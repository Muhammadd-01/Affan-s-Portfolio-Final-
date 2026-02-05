"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import LoadingScreen from "./components/LoadingScreen"
import CustomCursor from "./components/CustomCursor"


function App() {
  const mountRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!mountRef.current) return

    // Three.js scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Make sure mountRef exists before appending
    const currentMount = mountRef.current
    currentMount.appendChild(renderer.domElement)

    // Enhanced Space Moving Particles with Multiple Colors
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCnt = 15000 // Increased particle count
    const posArray = new Float32Array(particlesCnt * 3)
    const colorArray = new Float32Array(particlesCnt * 3)

    for (let i = 0; i < particlesCnt * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 100
      posArray[i + 1] = (Math.random() - 0.5) * 100
      posArray[i + 2] = (Math.random() - 0.5) * 100

      // Multi-color particles (cyan, blue, purple, green)
      const colors = [
        [0, 1, 1],      // Cyan
        [0, 0.5, 1],    // Blue
        [0.5, 0, 1],    // Purple
        [0, 1, 0.5],    // Green
      ]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      colorArray[i] = randomColor[0]
      colorArray[i + 1] = randomColor[1]
      colorArray[i + 2] = randomColor[2]
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Add floating geometric shapes
    const geometries = [
      new THREE.OctahedronGeometry(0.5, 0),
      new THREE.TetrahedronGeometry(0.4, 0),
      new THREE.IcosahedronGeometry(0.3, 0),
    ]

    const shapes = []
    for (let i = 0; i < 10; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)]
      const mat = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      )
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      shapes.push(mesh)
      scene.add(mesh)
    }

    camera.position.z = 5

    let mouseX = 0
    let mouseY = 0

    // Mouse Move Event
    const animateParticles = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2
    }
    document.addEventListener("mousemove", animateParticles)

    const clock = new THREE.Clock()

    // Enhanced Animation Loop
    const animate = () => {
      requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      particlesMesh.rotation.y = elapsedTime * 0.15 + mouseX * 0.5
      particlesMesh.rotation.x = elapsedTime * 0.08 + mouseY * 0.5

      particlesMesh.position.z += Math.sin(elapsedTime * 0.5) * 0.03
      particlesMesh.position.x += Math.cos(elapsedTime * 0.3) * 0.03
      particlesMesh.position.y += Math.sin(elapsedTime * 0.4) * 0.03

      particlesMaterial.opacity = 0.5 + Math.sin(elapsedTime * 2) * 0.2

      // Animate geometric shapes
      shapes.forEach((shape, i) => {
        shape.rotation.x += 0.005 + i * 0.001
        shape.rotation.y += 0.008 + i * 0.001
        shape.position.y += Math.sin(elapsedTime + i) * 0.01
      })

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
      if (currentMount && renderer.domElement && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen text-white overflow-x-hidden bg-black">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {/* Three.js Background - Layer 0 */}
      <div
        ref={mountRef}
        className="fixed top-0 left-0 w-full h-full"
        style={{ zIndex: 0, pointerEvents: "none" }}
      />

      {/* Main content - Layer 10 */}
      <div style={{ position: "relative", zIndex: 10, background: "transparent" }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>

      {/* Custom Cursor - Layer 1000 */}
      {!isLoading && <CustomCursor />}
    </div>
  )
}

export default App
