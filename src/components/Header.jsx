"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaMoon, FaSun } from "react-icons/fa"

const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme, $scrolled }) => ($scrolled ? theme.headerBg : "transparent")};
  transition: background 0.3s ease;
  z-index: 1000;
`

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
`

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.3s ease;
  
  &:hover, &.active {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
  }
`

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.5rem;
`

const Header = ({ toggleTheme, theme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["hero", "about", "skills", "projects", "testimonials", "contact"]
      let current = ""

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section
            break
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, target) => {
    e.preventDefault()
    const element = document.getElementById(target)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <HeaderWrapper
      $scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <Logo href="#hero" onClick={(e) => handleNavClick(e, "hero")}>
        YourName
      </Logo>
      <Nav>
        <NavLink
          href="#about"
          onClick={(e) => handleNavClick(e, "about")}
          className={activeSection === "about" ? "active" : ""}
          whileHover={{ scale: 1.1 }}
        >
          About
        </NavLink>
        <NavLink
          href="#skills"
          onClick={(e) => handleNavClick(e, "skills")}
          className={activeSection === "skills" ? "active" : ""}
          whileHover={{ scale: 1.1 }}
        >
          Skills
        </NavLink>
        <NavLink
          href="#projects"
          onClick={(e) => handleNavClick(e, "projects")}
          className={activeSection === "projects" ? "active" : ""}
          whileHover={{ scale: 1.1 }}
        >
          Projects
        </NavLink>
        <NavLink
          href="#testimonials"
          onClick={(e) => handleNavClick(e, "testimonials")}
          className={activeSection === "testimonials" ? "active" : ""}
          whileHover={{ scale: 1.1 }}
        >
          Testimonials
        </NavLink>
        <NavLink
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className={activeSection === "contact" ? "active" : ""}
          whileHover={{ scale: 1.1 }}
        >
          Contact
        </NavLink>
      </Nav>
      <ThemeToggle onClick={toggleTheme}>{theme === "light" ? <FaMoon /> : <FaSun />}</ThemeToggle>
    </HeaderWrapper>
  )
}

export default Header

