"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ThreeBackground from "./components/ThreeBackground"
import { FaWhatsapp } from "react-icons/fa"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <ThreeBackground />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/03128538773"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  )
}

export default App

