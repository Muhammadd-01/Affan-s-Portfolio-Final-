"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const projects = [

  {
    "id": 1,
    "title": "Recipe Explorer",
    "category": "Website",
    "image": "https://via.placeholder.com/400x300/FF6347/FFFFFF?text=Recipe+Explorer",
    "description": "A deliciously responsive recipe site built using HTML, CSS, JavaScript, and Bootstrap, featuring step-by-step cooking instructions, ingredient filters, and user-submitted dishes.",
    "technologies": ["HTML", "CSS", "JavaScript", "Bootstrap"],
    "github": "https://github.com/Muhammadd-01/Recipe_App.git",
    "live": "https://recipe-app-two-weld.vercel.app"
  }
,  

  {
    id: 2,
    title: "To-Do List App",
    category: "Website",
    image: "todo.png",
    description: "A simple yet powerful to-do list app with task management, filtering, and a sleek UI.",
    technologies: ["React", "Local Storage", "Tailwind CSS"],
    github: "https://github.com/Muhammadd-01/To-Do_App.git",
    live: "https://to-do-app-silk-nu.vercel.app",
  },
  {
    id: 3,
    title: "Elegance Barber Salon",
    category: "Web Application",
    image: "https://via.placeholder.com/400x300/FF5733/FFFFFF?text=Elegance+Salon",
    description: "A modern barber salon booking system with appointment scheduling, customer management, and payment integration.",
    technologies: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/Muhammadd-01/ElaganceSalon.git",
    live: "#",
  },
  {
    id: 4,
    title: "Auction Bidding Site",
    category: "Web Application",
    image: "https://via.placeholder.com/400x300/1E90FF/FFFFFF?text=Auction+Bidding",
    description: "A real-time auction bidding platform built using C# and ASP.NET Core, with user authentication and admin controls.",
    technologies: ["C#", "ASP.NET Core", "SQL Server"],
    github: "https://github.com/Muhammadd-01/Auction_Project.git",
    live: "#",
  },
  {
    "id": 5,
    "title": "Medicare Website",
    "category": "Web Application",
    "image": "medicare.png",
    "description": "A professional and responsive medical website built with React and Vite that suggests medicines based on user symptoms. Includes dosage levels, health articles, and secure feedback features.",
    "technologies": ["React", "Vite", "TailwindCSS"],
    "github": "https://github.com/Muhammadd-01/Official-Medicare.git",
    "live": "https://official-medicare.vercel.app"
  },
  {
    "id": 6,
    "title": "Archive Site",
    "category": "Web Application",
    "image": "archieve.png",
    "description": "A digital archive platform built using React and Vite for storing, categorizing, and exploring historical records, research documents, and case studies with smooth UI and filtering options.",
    "technologies": ["React", "Vite", "JavaScript"],
    "github": "https://github.com/Muhammadd-01/archieveSite.git",
    "live": "https://archieve-site.vercel.app"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 className="text-4xl font-bold mb-12 text-center text-white" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          My Projects
        </motion.h2>
        <motion.div className="flex justify-center mb-8" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          {["All", "Website", "Web Application"].map((category) => (
            <motion.button key={category} onClick={() => setFilter(category)} className={`mx-2 px-4 py-2 rounded-full transition duration-300 ${filter === category ? "bg-white text-black" : "bg-gray-800 text-white hover:bg-white hover:text-black"}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              className="bg-secondary rounded-[2rem] overflow-hidden shadow-lg transition duration-300 transform w-[400px] h-[500px] relative border-4 border-transparent hover:border-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                rotateX: -5, // Tilt effect on X-axis
                rotateY: 5,  // Tilt effect on Y-axis
                transition: { duration: 0.3 },
              }}
            >
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover mb-4 rounded-[1.5rem]" />
              <div className="p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.category}</p>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition transform hover:rotate-6">
                    <FaGithub size={28} className="hover:text-primary" />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition transform hover:-rotate-6">
                    <HiExternalLink size={28} className="hover:text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
