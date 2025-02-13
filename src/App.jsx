"use client"
import SpaceBackground from "./components/SpaceBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen text-white">
      <SpaceBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App

