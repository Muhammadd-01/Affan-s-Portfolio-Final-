"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

const SpaceBackground = () => {
  const mountRef = useRef(null)
  const rendererRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    rendererRef.current = renderer

    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.BufferGeometry()
    const vertices = []

    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000
      vertices.push(x, y, z)
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 2 })
    const stars = new THREE.Points(geometry, material)
    scene.add(stars)

    camera.position.z = 1000

    const animate = () => {
      requestAnimationFrame(animate)
      stars.rotation.x += 0.0005
      stars.rotation.y += 0.0005
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement)
      }
      // Dispose of Three.js objects
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />
}

export default SpaceBackground

