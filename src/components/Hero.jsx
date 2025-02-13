"use client"

import { useEffect, useRef } from "react"
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    const titleElement = titleRef.current
    if (titleElement) {
      const text = titleElement.textContent
      titleElement.innerHTML = ""
      text.split("").forEach((char, index) => {
        const span = document.createElement("span")
        span.textContent = char
        span.style.animationDelay = `${index * 0.1}s`
        span.className = "inline-block opacity-0"
        titleElement.appendChild(span)
      })
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="text-center z-10">
        <img
          src="/placeholder.svg?height=128&width=128"
          alt="Affan"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        />
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-4 animate-title">
          Hi, I'm Affan
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in">Full Stack Developer | UI/UX Enthusiast</p>
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <GitHub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:affan.work05@gmail.com" className="text-white hover:text-gray-300 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

