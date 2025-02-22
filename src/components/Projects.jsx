"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    category: "Web",
    image: "https://via.placeholder.com/400x300/0000FF/FFFFFF?text=AI+Task+Manager",
    description:
      "An intelligent task management application that uses machine learning to prioritize and categorize tasks, enhancing productivity.",
    technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Blockchain Voting System",
    category: "Web",
    image: "https://via.placeholder.com/400x300/008000/FFFFFF?text=Blockchain+Voting",
    description:
      "A secure and transparent voting system built on blockchain technology, ensuring tamper-proof elections.",
    technologies: ["Ethereum", "Solidity", "Web3.js", "React"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "AR Shopping Experience",
    category: "Mobile",
    image: "https://via.placeholder.com/400x300/FF0000/FFFFFF?text=AR+Shopping",
    description:
      "An augmented reality mobile app that allows users to visualize products in their own space before purchasing.",
    technologies: ["React Native", "ARKit", "ARCore", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Real-time Collaboration Platform",
    category: "Web",
    image: "https://via.placeholder.com/400x300/800080/FFFFFF?text=Collaboration+Platform",
    description:
      "A real-time collaboration tool for remote teams, featuring video conferencing, shared whiteboards, and project management tools.",
    technologies: ["WebRTC", "Socket.io", "React", "Express"],
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "IoT Smart Home Hub",
    category: "IoT",
    image: "https://via.placeholder.com/400x300/FFA500/FFFFFF?text=IoT+Smart+Home",
    description:
      "A centralized smart home system that integrates various IoT devices and provides a user-friendly interface for home automation.",
    technologies: ["Raspberry Pi", "Python", "MQTT", "React"],
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "AI Image Generator",
    category: "Web",
    image: "https://via.placeholder.com/400x300/000000/FFFFFF?text=AI+Image+Generator",
    description:
      "An AI-powered tool that generates stunning images based on user input, powered by deep learning models.",
    technologies: ["Python", "TensorFlow", "React"],
    github: "#",
    live: "#",
  }
]

const Projects = () => {
  const [filter, setFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["All", "Web", "Mobile", "IoT"].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full transition duration-300 ${
                filter === category
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white hover:bg-white hover:text-black"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              className="bg-secondary rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 w-[400px] h-[450px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover mb-4 rounded-[1.5rem]" />
              <div className="p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
