"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

const ThreeBackground = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    let scene, camera, renderer, stars, starGeometry

    const init = () => {
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.z = 1

      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      mountRef.current.appendChild(renderer.domElement)

      starGeometry = new THREE.BufferGeometry()
      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
        transparent: true,
        opacity: 0.8,
      })

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
      if (stars) {
        stars.rotation.x += 0.0002
        stars.rotation.y += 0.0002
      }
      renderer.render(scene, camera)
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

      if (stars) {
        stars.rotation.x += mouseY * 0.0005
        stars.rotation.y += mouseX * 0.0005
      }
    }

    init()
    animate()

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />
}

export default ThreeBackground
