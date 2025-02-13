"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

const SpaceBackground = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    let scene, camera, renderer, stars, starGeo
    //let mouseX = 0,
    //  mouseY = 0
    //let windowHalfX = window.innerWidth / 2
    //let windowHalfY = window.innerHeight / 2
    let mouseX = 0
    let mouseY = 0
    let speed = 1

    const init = () => {
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
      camera.position.z = 1
      camera.rotation.x = Math.PI / 2

      renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      mountRef.current.appendChild(renderer.domElement)

      starGeo = new THREE.BufferGeometry()
      const positions = new Float32Array(6000 * 3)
      const velocities = new Float32Array(6000)

      for (let i = 0; i < 6000 * 3; i += 3) {
        positions[i] = Math.random() * 600 - 300
        positions[i + 1] = Math.random() * 600 - 300
        positions[i + 2] = Math.random() * 600 - 300
        velocities[i / 3] = Math.random() * 0.5 + 0.5
      }

      starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      starGeo.setAttribute("velocity", new THREE.BufferAttribute(velocities, 1))

      const starMaterial = new THREE.PointsMaterial({
        color: 0x4169e1, // Royal Blue
        size: 0.7,
        transparent: true,
      })

      stars = new THREE.Points(starGeo, starMaterial)
      scene.add(stars)
    }

    const animate = () => {
      requestAnimationFrame(animate)

      const positions = starGeo.attributes.position.array
      const velocities = starGeo.attributes.velocity.array

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= velocities[i / 3] * speed

        if (positions[i + 1] < -200) {
          positions[i + 1] = 200
        }

        // Add subtle horizontal movement based on mouse position
        positions[i] += mouseX * 0.0001
      }

      starGeo.attributes.position.needsUpdate = true
      stars.rotation.y += 0.002

      renderer.render(scene, camera)
    }

    const handleMouseMove = (event) => {
      mouseX = event.clientX - window.innerWidth / 2
      mouseY = event.clientY - window.innerHeight / 2

      // Adjust speed based on mouse movement
      speed = 1 + Math.abs(mouseX) * 0.001 + Math.abs(mouseY) * 0.001
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    init()
    animate()

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      mountRef.current.removeChild(renderer.domElement)
      scene.remove(stars)
      starGeo.dispose()
      stars.material.dispose()
    }
  }, [])

  return (
    <div ref={mountRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />
  )
}

export default SpaceBackground

