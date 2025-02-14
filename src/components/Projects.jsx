"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    category: "Web",
    image: "https://source.unsplash.com/random/800x600?task",
    description:
      "An intelligent task management application that uses machine learning to prioritize and categorize tasks, enhancing productivity.",
    technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
    github: "https://github.com/affan-portfolio/ai-task-manager",
    live: "https://ai-task-manager.demo.com",
  },
  {
    id: 2,
    title: "Blockchain Voting System",
    category: "Web",
    image: "https://source.unsplash.com/random/800x600?blockchain",
    description:
      "A secure and transparent voting system built on blockchain technology, ensuring tamper-proof elections.",
    technologies: ["Ethereum", "Solidity", "Web3.js", "React"],
    github: "https://github.com/affan-portfolio/blockchain-voting",
    live: "https://blockchain-voting.demo.com",
  },
  {
    id: 3,
    title: "AR Shopping Experience",
    category: "Mobile",
    image: "https://source.unsplash.com/random/800x600?augmented-reality",
    description:
      "An augmented reality mobile app that allows users to visualize products in their own space before purchasing.",
    technologies: ["React Native", "ARKit", "ARCore", "Node.js"],
    github: "https://github.com/affan-portfolio/ar-shopping",
    live: "https://ar-shopping.demo.com",
  },
  {
    id: 4,
    title: "Real-time Collaboration Platform",
    category: "Web",
    image: "https://source.unsplash.com/random/800x600?collaboration",
    description:
      "A real-time collaboration tool for remote teams, featuring video conferencing, shared whiteboards, and project management tools.",
    technologies: ["WebRTC", "Socket.io", "React", "Express"],
    github: "https://github.com/affan-portfolio/collab-platform",
    live: "https://collab-platform.demo.com",
  },
  {
    id: 5,
    title: "IoT Smart Home Hub",
    category: "IoT",
    image: "https://source.unsplash.com/random/800x600?smarthome",
    description:
      "A centralized smart home system that integrates various IoT devices and provides a user-friendly interface for home automation.",
    technologies: ["Raspberry Pi", "Python", "MQTT", "React"],
    github: "https://github.com/affan-portfolio/smart-home-hub",
    live: "https://smart-home-hub.demo.com",
  },
]

const Projects = () => {
  const [filter, setFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-text"
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
                filter === category ? "bg-text text-primary" : "bg-accent text-white hover:bg-text hover:text-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-text">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.category}</p>
                <p className="text-sm mb-4">{project.description.substring(0, 100)}...</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-accent text-white px-2 py-1 rounded-full">
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
              className="bg-secondary text-white rounded-lg p-8 max-w-2xl w-full"
              initial={{ scale: 0.5, y: -100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: -100 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-text">{selectedProject.title}</h3>
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <p className="mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-accent text-white px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text hover:text-white transition-colors duration-300"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text hover:text-white transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 bg-text text-primary px-4 py-2 rounded hover:bg-accent transition duration-300"
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

