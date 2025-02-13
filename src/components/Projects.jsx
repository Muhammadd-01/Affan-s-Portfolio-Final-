"use client"

import { useState } from "react"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/path-to-project1-image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://project1.com",
    githubLink: "https://github.com/yourusername/project1",
    category: "Web App",
  },
  // Add more projects here
]

const ProjectCard = ({ project }) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-400 hover:text-blue-300"
        >
          <ExternalLink size={16} className="mr-1" /> Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-gray-300"
        >
          <GitHub size={16} className="mr-1" /> Source Code
        </a>
      </div>
    </div>
  </div>
)

const Projects = () => {
  const [filter, setFilter] = useState("All")
  const categories = ["All", ...new Set(projects.map((project) => project.category))]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="flex justify-center mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category ? "bg-white text-black" : "bg-gray-700 text-white"
              } hover:bg-opacity-80 transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

