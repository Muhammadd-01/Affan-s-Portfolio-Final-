import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web",
    description: "A full-stack e-commerce platform built with React and Node.js.",
    image: "https://via.placeholder.com/400",
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web",
    description: "A responsive portfolio website built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/400",
    link: "#",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" ? projectsData : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="flex space-x-4 mb-8">
          <button onClick={() => setFilter("All")} className="bg-primary px-6 py-2 rounded-full">All</button>
          <button onClick={() => setFilter("Web")} className="bg-primary px-6 py-2 rounded-full">Web</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href={project.link} className="text-primary hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;