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

    // Space Background: Stars
    const starsGeometry = new THREE.BufferGeometry()
    const starCount = 20000
    const starArray = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount * 3; i++) {
      starArray[i] = (Math.random() - 0.5) * 100
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starArray, 3))
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.2, transparent: true })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Floating Objects: Spheres and Toruses
    const objectArray = []

    for (let i = 0; i < 10; i++) {
      const geometry = Math.random() > 0.5 
        ? new THREE.SphereGeometry(0.5, 32, 32) 
        : new THREE.TorusGeometry(0.3, 0.1, 16, 100)
      const material = new THREE.MeshStandardMaterial({
        color: Math.random() * 0xffffff,
        roughness: 0.5,
        metalness: 0.7
      })
      const object = new THREE.Mesh(geometry, material)

      object.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      )
      scene.add(object)
      objectArray.push(object)
    }

    // Lighting
    const pointLight = new THREE.PointLight(0xffffff, 2)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5)
    scene.add(ambientLight)

    // Scroll-Based Camera Movement
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY
      camera.position.z = 5 + scrollY * 0.01
      camera.position.y = -scrollY * 0.005
    })

    // Animation Loop
    const clock = new THREE.Clock()
    const animate = () => {
      requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Rotate Objects
      objectArray.forEach((obj, index) => {
        obj.rotation.x += 0.01
        obj.rotation.y += 0.01
        obj.position.y += Math.sin(elapsedTime + index) * 0.01
      })

      // Move Stars for Parallax Effect
      stars.rotation.x = elapsedTime * 0.02
      stars.rotation.y = elapsedTime * 0.04

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
