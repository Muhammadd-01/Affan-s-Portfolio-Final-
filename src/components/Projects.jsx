"use client"

import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.bgSecondary};
`

const ProjectsContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
`

const ProjectsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
`

const ProjectFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const FilterButton = styled(motion.button)`
  background: ${({ theme, $active }) => ($active ? theme.primary : theme.bg)};
  color: ${({ theme, $active }) => ($active ? theme.bg : theme.text)};
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  border-radius: 20px;
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.bg};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const ProjectInfo = styled.div`
  padding: 1rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1rem;
`

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      category: "web",
      image: "/path-to-project-image-1.jpg",
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-platform-demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A mobile app for task management built with React Native",
      category: "mobile",
      image: "/path-to-project-image-2.jpg",
      github: "https://github.com/yourusername/task-management-app",
      demo: "https://task-app-demo.com",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and styled-components",
      category: "web",
      image: "/path-to-project-image-3.jpg",
      github: "https://github.com/yourusername/portfolio-website",
      demo: "https://your-portfolio-website.com",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <ProjectsSection id="projects">
      <ProjectsContent initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <ProjectsTitle>My Projects</ProjectsTitle>
        <ProjectFilter>
          <FilterButton
            $active={filter === "all"}
            onClick={() => setFilter("all")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </FilterButton>
          <FilterButton
            $active={filter === "web"}
            onClick={() => setFilter("web")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web
          </FilterButton>
          <FilterButton
            $active={filter === "mobile"}
            onClick={() => setFilter("mobile")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mobile
          </FilterButton>
        </ProjectFilter>
        <ProjectGrid>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </ProjectLink>
                  <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsContent>
    </ProjectsSection>
  )
}

export default Projects

