"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

const ThreeBackground = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    let scene, camera, renderer, stars

    const init = () => {
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.z = 5

      renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      mountRef.current.appendChild(renderer.domElement)

      const starGeometry = new THREE.BufferGeometry()
      const starMaterial = new THREE.PointsMaterial({ color: 0xffffff })

      const starVertices = []
      for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000
        const y = (Math.random() - 0.5) * 2000
        const z = -Math.random() * 2000
        starVertices.push(x, y, z)
      }

      starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3))
      stars = new THREE.Points(starGeometry, starMaterial)
      scene.add(stars)
    }

    const animate = () => {
      requestAnimationFrame(animate)
      stars.rotation.x += 0.0002
      stars.rotation.y += 0.0002
      renderer.render(scene, camera)
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    init()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div ref={mountRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />
  )
}

export default ThreeBackground

