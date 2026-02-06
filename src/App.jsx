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
import WhatsAppButton from "./components/WhatsAppButton"


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

    // ============================================
    // ENHANCED PARTICLE SYSTEM - More Dense & Colorful
    // ============================================
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCnt = 25000 // Increased for richer visual
    const posArray = new Float32Array(particlesCnt * 3)
    const colorArray = new Float32Array(particlesCnt * 3)
    const sizeArray = new Float32Array(particlesCnt)

    for (let i = 0; i < particlesCnt * 3; i += 3) {
      // Spread particles across a larger volume with depth variation
      posArray[i] = (Math.random() - 0.5) * 120     // x
      posArray[i + 1] = (Math.random() - 0.5) * 120 // y
      posArray[i + 2] = (Math.random() - 0.5) * 80  // z - more depth

      // Extended color palette for vibrant effect
      const colors = [
        [0, 1, 1],        // Cyan
        [0, 0.8, 1],      // Electric Blue
        [0.3, 0, 1],      // Electric Purple
        [0, 1, 0.5],      // Neon Green
        [1, 0, 0.5],      // Magenta/Pink
        [0.5, 0.8, 1],    // Light Blue
        [0, 1, 0.8],      // Aqua
        [0.8, 0.2, 1],    // Violet
      ]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      colorArray[i] = randomColor[0]
      colorArray[i + 1] = randomColor[1]
      colorArray[i + 2] = randomColor[2]

      // Variable particle sizes for depth perception
      sizeArray[i / 3] = Math.random() * 0.1 + 0.03
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))
    particlesGeometry.setAttribute("size", new THREE.BufferAttribute(sizeArray, 1))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      sizeAttenuation: true,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // ============================================
    // SECONDARY PARTICLE LAYER - Larger Glowing Orbs
    // ============================================
    const orbGeometry = new THREE.BufferGeometry()
    const orbCount = 500
    const orbPosArray = new Float32Array(orbCount * 3)
    const orbColorArray = new Float32Array(orbCount * 3)

    for (let i = 0; i < orbCount * 3; i += 3) {
      orbPosArray[i] = (Math.random() - 0.5) * 100
      orbPosArray[i + 1] = (Math.random() - 0.5) * 100
      orbPosArray[i + 2] = (Math.random() - 0.5) * 60

      // Bright glowing colors for orbs
      const orbColors = [
        [0, 1, 1],      // Cyan
        [1, 0, 0.6],    // Magenta
        [0.2, 1, 0.5],  // Green
        [0.4, 0.4, 1],  // Light Purple
      ]
      const randomOrbColor = orbColors[Math.floor(Math.random() * orbColors.length)]
      orbColorArray[i] = randomOrbColor[0]
      orbColorArray[i + 1] = randomOrbColor[1]
      orbColorArray[i + 2] = randomOrbColor[2]
    }

    orbGeometry.setAttribute("position", new THREE.BufferAttribute(orbPosArray, 3))
    orbGeometry.setAttribute("color", new THREE.BufferAttribute(orbColorArray, 3))

    const orbMaterial = new THREE.PointsMaterial({
      size: 0.3,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    })

    const orbMesh = new THREE.Points(orbGeometry, orbMaterial)
    scene.add(orbMesh)

    // ============================================
    // ENERGY LINES - Flowing Connections
    // ============================================
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    })

    const linesGroup = new THREE.Group()
    const lineCount = 50

    for (let i = 0; i < lineCount; i++) {
      const points = []
      const startX = (Math.random() - 0.5) * 80
      const startY = (Math.random() - 0.5) * 80
      const startZ = (Math.random() - 0.5) * 40

      for (let j = 0; j < 8; j++) {
        points.push(new THREE.Vector3(
          startX + (Math.random() - 0.5) * 20,
          startY + j * 5 + (Math.random() - 0.5) * 3,
          startZ + (Math.random() - 0.5) * 10
        ))
      }

      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(lineGeometry, linesMaterial.clone())
      line.material.opacity = Math.random() * 0.15 + 0.05
      linesGroup.add(line)
    }
    scene.add(linesGroup)

    // ============================================
    // FLOATING GEOMETRIC SHAPES - Enhanced with Glow
    // ============================================
    const geometries = [
      new THREE.OctahedronGeometry(0.6, 0),
      new THREE.TetrahedronGeometry(0.5, 0),
      new THREE.IcosahedronGeometry(0.4, 0),
      new THREE.DodecahedronGeometry(0.35, 0),
    ]

    const shapeColors = [0x00ffff, 0xff007f, 0x00ff88, 0x7c3aed]
    const shapes = []

    for (let i = 0; i < 15; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)]
      const color = shapeColors[Math.floor(Math.random() * shapeColors.length)]
      const mat = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 30
      )
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      mesh.userData = {
        rotationSpeed: { x: 0.002 + Math.random() * 0.005, y: 0.003 + Math.random() * 0.005 },
        floatSpeed: Math.random() * 0.5 + 0.5,
        floatOffset: Math.random() * Math.PI * 2,
      }
      shapes.push(mesh)
      scene.add(mesh)
    }

    camera.position.z = 8

    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    // Mouse Move Event - Enhanced tracking
    const animateParticles = (event) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2
    }
    document.addEventListener("mousemove", animateParticles)

    const clock = new THREE.Clock()

    // ============================================
    // ENHANCED ANIMATION LOOP
    // ============================================
    const animate = () => {
      requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Smooth mouse following
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      // Main particles - Enhanced movement
      particlesMesh.rotation.y = elapsedTime * 0.08 + mouseX * 0.3
      particlesMesh.rotation.x = elapsedTime * 0.05 + mouseY * 0.3
      particlesMesh.position.z = Math.sin(elapsedTime * 0.3) * 2
      particlesMesh.position.x = Math.cos(elapsedTime * 0.2) * 1.5
      particlesMesh.position.y = Math.sin(elapsedTime * 0.25) * 1

      // Orb layer - Different movement pattern
      orbMesh.rotation.y = -elapsedTime * 0.05 + mouseX * 0.2
      orbMesh.rotation.x = -elapsedTime * 0.03 + mouseY * 0.2
      orbMesh.position.z = Math.cos(elapsedTime * 0.4) * 1.5

      // Pulsing opacity effect
      particlesMaterial.opacity = 0.6 + Math.sin(elapsedTime * 1.5) * 0.15
      orbMaterial.opacity = 0.35 + Math.sin(elapsedTime * 2) * 0.1

      // Energy lines animation
      linesGroup.rotation.y = elapsedTime * 0.02
      linesGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.1
      linesGroup.children.forEach((line, i) => {
        line.material.opacity = 0.1 + Math.sin(elapsedTime * 2 + i * 0.5) * 0.08
      })

      // Geometric shapes - Enhanced animation
      shapes.forEach((shape, i) => {
        shape.rotation.x += shape.userData.rotationSpeed.x
        shape.rotation.y += shape.userData.rotationSpeed.y
        shape.position.y += Math.sin(elapsedTime * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.015
        shape.material.opacity = 0.2 + Math.sin(elapsedTime * 1.5 + i) * 0.1
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

      {/* WhatsApp Button - Bottom Right */}
      {!isLoading && <WhatsAppButton />}
    </div>
  )
}

export default App
