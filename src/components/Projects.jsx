"use client";

import { useState, useRef, forwardRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink, HiX } from "react-icons/hi";
import { Star, ArrowRight, Code, Smartphone, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Recipe Explorer",
    category: "Website",
    image: "/recipe.png",
    description: "A deliciously responsive recipe site built using HTML, CSS, JavaScript, and Bootstrap, featuring step-by-step cooking instructions, ingredient filters, and user-submitted dishes.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/Muhammadd-01/Recipe_App.git",
    live: "https://recipe-app-two-weld.vercel.app",
    featured: false,
  },
  {
    id: 2,
    title: "To-Do List App",
    category: "Website",
    image: "/todo.png",
    description: "A simple yet powerful to-do list app with task management, filtering, and a sleek UI.",
    technologies: ["React", "Local Storage", "Tailwind CSS"],
    github: "https://github.com/Muhammadd-01/To-Do_App.git",
    live: "https://to-do-app-silk-nu.vercel.app",
    featured: false,
  },
  {
    id: 9,
    title: "Dar ul Ruqyah",
    category: "Website",
    image: "/darulruqyah.png",
    description: "Islamic Paranormal Investigation website providing guidance and Ruqyah services online.",
    technologies: ["React", "TailwindCSS", "Vite"],
    github: "https://github.com/Muhammadd-01/Paranormal_investigating_website.git",
    live: "https://dar-ul-ruqyah.vercel.app/",
    featured: true,
  },
  {
    id: 10,
    title: "Al Ghani Quran Institute",
    category: "Website",
    image: "/alghani.png",
    description: "Official website for Al Ghani Quran Institute offering online courses and Quran learning resources.",
    technologies: ["React", "TailwindCSS", "Vite"],
    github: "https://github.com/Muhammadd-01/AL_Ghani_Quran_Academy.git",
    live: "https://al-ghani-quran-academy.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Elegance Barber Salon",
    category: "Web Application",
    image: "/salon.png",
    description: "A modern barber salon booking system with appointment scheduling, customer management, and payment integration.",
    technologies: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/Muhammadd-01/ElaganceSalon.git",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Auction Bidding Site",
    category: "Web Application",
    image: "/auction.png",
    description: "A real-time auction bidding platform built using C# and ASP.NET Core, with user authentication and admin controls.",
    technologies: ["C#", "ASP.NET Core", "SQL Server"],
    github: "https://github.com/Muhammadd-01/Auction_Project.git",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Medicare Website",
    category: "Web Application",
    image: "/medicare.png",
    description: "A professional medical website built with React and Vite that suggests medicines based on user symptoms. Includes dosage levels, health articles, and secure feedback features.",
    technologies: ["React", "Vite", "TailwindCSS"],
    github: "https://github.com/Muhammadd-01/Official-Medicare.git",
    live: "https://official-medicare.vercel.app",
    featured: true,
  },
  {
    id: 6,
    title: "Archive Site",
    category: "Web Application",
    image: "/archive.png",
    description: "A digital archive platform for storing, categorizing, and exploring historical records with smooth UI and filtering options.",
    technologies: ["React", "Vite", "JavaScript"],
    github: "https://github.com/Muhammadd-01/archieveSite.git",
    live: "https://archieve-site.vercel.app",
    featured: false,
  },
  {
    id: 7,
    title: "Fitness Tracker App",
    category: "Mobile App",
    image: "/fitness.png",
    description: "A mobile app for tracking workouts, diet, and progress with analytics and notifications.",
    technologies: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/Muhammadd-01/FitnessTrackerApp.git",
    live: "#",
    featured: false,
  },
  {
    id: 11,
    title: "WatchHub",
    category: "Mobile App",
    image: "/watchhub.png",
    description: "A mobile app to watch trending videos and entertainment content easily.",
    technologies: ["Flutter", "Firebase"],
    github: "https://github.com/Muhammadd-01/WatchHub_Project.git",
    live: "#",
    featured: false,
  },
  {
    id: 13,
    title: "Currency Converter App",
    category: "Mobile App",
    image: "/currency.png",
    description: "A mobile app for converting currencies with live exchange rates and historical data.",
    technologies: ["Flutter", "API", "Dart"],
    github: "#",
    live: "#",
    featured: false,
  },
];

// Placeholder component for missing images
const ProjectPlaceholder = ({ title, category }) => {
  const getIcon = () => {
    switch (category) {
      case "Mobile App":
        return <Smartphone className="w-12 h-12" />;
      case "Web Application":
        return <Code className="w-12 h-12" />;
      default:
        return <Globe className="w-12 h-12" />;
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 flex flex-col items-center justify-center">
      <div className="text-cyan-400 mb-3">{getIcon()}</div>
      <span className="text-white/60 text-sm font-medium text-center px-4">{title}</span>
    </div>
  );
};

// ProjectCard with forwardRef for AnimatePresence compatibility
const ProjectCard = forwardRef(({ project, index, onClick, ...props }, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <motion.div
      ref={ref || cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      onClick={() => onClick(project)}
      className="relative group cursor-pointer"
      style={{ perspective: "1000px" }}
      layout
      {...props}
    >
      <motion.div
        className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
        animate={{
          rotateX: -mousePosition.y * 0.5,
          rotateY: mousePosition.x * 0.5,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.1 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-bold">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        )}

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          {imageError ? (
            <ProjectPlaceholder title={project.title} category={project.category} />
          ) : (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
              onError={() => setImageError(true)}
            />
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-cyan-500/20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="px-4 py-2 rounded-full bg-white/30 text-white text-sm font-medium flex items-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              View Details <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <span className="text-cyan-400 text-xs uppercase tracking-wider font-medium">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md text-xs font-medium bg-white/5 text-gray-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={18} />
            </motion.a>
            {project.live !== "#" && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>

        {/* 3D effect border glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(0, 255, 255, 0.15), transparent 50%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

// Featured Project (larger card)
const FeaturedProject = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
      className="lg:col-span-1 relative group cursor-pointer"
    >
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10 border border-cyan-500/20">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image */}
          <div className="relative h-64 md:h-full rounded-2xl overflow-hidden">
            {imageError ? (
              <ProjectPlaceholder title={project.title} category={project.category} />
            ) : (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.4 }}
                onError={() => setImageError(true)}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">Featured Project</span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <FaGithub size={18} /> GitHub
              </motion.a>
              {project.live !== "#" && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-medium hover:opacity-90 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <HiExternalLink size={18} /> Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Project Detail Modal
const ProjectModal = ({ project, onClose }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <HiX size={24} />
        </button>

        {/* Image */}
        <div className="relative h-64 md:h-80">
          {imageError ? (
            <ProjectPlaceholder title={project.title} category={project.category} />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="text-cyan-400 text-sm uppercase tracking-wider font-medium">
            {project.category}
          </span>

          <h2 className="text-3xl font-bold text-white mt-2 mb-4">{project.title}</h2>

          <p className="text-gray-300 mb-6">{project.description}</p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FaGithub size={20} /> View on GitHub
            </motion.a>
            {project.live !== "#" && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-medium hover:opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <HiExternalLink size={20} /> Visit Live Site
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = ["All", "Website", "Web Application", "Mobile App"];
  const featuredProjects = projects.filter((p) => p.featured);
  const filteredProjects = filter === "All"
    ? projects.filter((p) => !p.featured)
    : projects.filter((p) => p.category === filter && !p.featured);

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-widest mb-4 block">
            My Work
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        {/* Featured projects */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {featuredProjects.slice(0, 2).map((project) => (
            <FeaturedProject
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black"
                  : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid - without AnimatePresence mode="popLayout" to avoid ref issues */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
