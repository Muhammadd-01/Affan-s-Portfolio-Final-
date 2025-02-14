"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

// Dummy projects with real images
const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    category: "Web",
    image: "https://source.unsplash.com/600x400/?ai,technology",
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
    image: "https://source.unsplash.com/600x400/?blockchain,crypto",
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
    image: "https://source.unsplash.com/600x400/?ar,shopping",
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
    image: "https://source.unsplash.com/600x400/?collaboration,work",
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
    image: "https://source.unsplash.com/600x400/?iot,smarthome",
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
    image: "https://source.unsplash.com/600x400/?ai,image",
    description:
      "An AI-powered tool that generates stunning images based on user input, powered by deep learning models.",
    technologies: ["Python", "TensorFlow", "React"],
    github: "#",
    live: "#",
  },
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-secondary rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover mb-4 rounded-[1.5rem]"
              />
              <div className="p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {project.category}
                </p>
                <p className="text-sm mb-4">
                  {project.description.substring(0, 100)}...
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-800 text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-secondary text-white rounded-[2rem] p-8 max-w-2xl w-full"
              initial={{ scale: 0.5, y: -100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: -100 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover mb-4 rounded-[1.5rem]"
              />
              <p className="mb-4">{selectedProject.description}</p>
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
