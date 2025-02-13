"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/path-to-ecommerce-image.jpg",
    category: "Web Development",
  },
  {
    id: 2,
    title: "3D Portfolio Showcase",
    description: "An interactive 3D portfolio using Three.js and React",
    image: "/path-to-3d-portfolio-image.jpg",
    category: "3D Graphics",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A React Native mobile app for efficient task management",
    image: "/path-to-task-app-image.jpg",
    category: "Mobile Development",
  },
  // Add more projects as needed
]

const ProjectCard = ({ project }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <span className="inline-block bg-red-200 dark:bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-red-700 dark:text-red-200">
          {project.category}
        </span>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          My Projects
        </motion.h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setFilter("All")}
            className={`mx-2 px-4 py-2 rounded-full ${filter === "All" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Web Development")}
            className={`mx-2 px-4 py-2 rounded-full ${filter === "Web Development" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"}`}
          >
            Web Development
          </button>
          <button
            onClick={() => setFilter("3D Graphics")}
            className={`mx-2 px-4 py-2 rounded-full ${filter === "3D Graphics" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"}`}
          >
            3D Graphics
          </button>
          <button
            onClick={() => setFilter("Mobile Development")}
            className={`mx-2 px-4 py-2 rounded-full ${filter === "Mobile Development" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"}`}
          >
            Mobile Development
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

