"use client"

import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Hero = ({ theme }) => {
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
        span.className = "inline-block opacity-0 animate-title"
        titleElement.appendChild(span)
      })
    }
  }, [])

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ color: theme.text }}
    >
      <div className="text-center z-10">
        <img
          src="/placeholder.svg?height=128&width=128"
          alt="Affan"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 shadow-lg"
          style={{ borderColor: theme.accent }}
        />
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-4" style={{ color: theme.accent }}>
          Hi, I'm Affan
        </h1>
        <p className="text-xl md:text-2xl mb-4 animate-fade-in">Full Stack Developer | UI/UX Enthusiast</p>
        <p className="text-lg mb-8 animate-fade-in max-w-2xl mx-auto">
          Passionate about creating seamless web experiences and solving complex problems through innovative solutions.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:affan.work05@gmail.com" className="text-white hover:text-gray-300 transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="px-6 py-2 rounded-full font-semibold transition-colors duration-300"
            style={{ backgroundColor: theme.accent, color: theme.secondary }}
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-2 rounded-full font-semibold transition-colors duration-300"
            style={{ borderColor: theme.accent, color: theme.text, border: "2px solid" }}
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

