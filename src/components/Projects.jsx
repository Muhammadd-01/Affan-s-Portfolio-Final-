"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web",
    image: "https://source.unsplash.com/random/800x600?ecommerce",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile",
    image: "https://source.unsplash.com/random/800x600?task",
    description: "A mobile app for task management and productivity, developed using React Native.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web",
    image: "https://source.unsplash.com/random/800x600?portfolio",
    description: "A responsive portfolio website showcasing my projects and skills.",
  },
  {
    id: 4,
    title: "Weather Forecast App",
    category: "Web",
    image: "https://source.unsplash.com/random/800x600?weather",
    description: "A weather forecast application using React and integrating with a weather API.",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    category: "Web",
    image: "https://source.unsplash.com/random/800x600?dashboard",
    description: "A comprehensive social media dashboard for analytics and content management.",
  },
]

const Projects = () => {
  const [filter, setFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-black bg-opacity-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
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
          {["All", "Web", "Mobile"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full transition duration-300 ${
                filter === category ? "bg-white text-black" : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-black rounded-lg p-8 max-w-2xl"
            initial={{ scale: 0.5, y: -100 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.5, y: -100 }}
          >
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <img
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <p className="mb-4">{selectedProject.description}</p>
            <button
              onClick={() => setSelectedProject(null)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Projects

