"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const images = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/33.jpg",
    "https://randomuser.me/api/portraits/men/34.jpg",
  ]

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 mx-auto cursor-pointer" onClick={nextImage}>
            <AnimatePresence>
              <motion.img
                key={imageIndex}
                src={images[imageIndex]}
                alt="Affan"
                className="w-full h-full rounded-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 text-text" variants={itemVariants}>
            Hi, I'm Affan
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-8 text-accent" variants={itemVariants}>
            Full-Stack Developer | UI/UX Enthusiast | Tech Innovator
          </motion.p>
          <motion.p className="text-lg mb-8" variants={itemVariants}>
            I craft elegant, efficient, and user-centric digital solutions. With a passion for clean code and
            cutting-edge technologies, I transform complex problems into seamless experiences.
          </motion.p>
          <motion.div className="space-x-4" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-text transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
            <motion.a
              href="#projects"
              className="bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>
          </motion.div>
          <motion.div className="mt-8 flex justify-center md:justify-start space-x-4" variants={itemVariants}>
            <SocialIcon href="https://github.com/affan-portfolio" icon={<FaGithub />} />
            <SocialIcon href="https://linkedin.com/in/affan-dev" icon={<FaLinkedin />} />
            <SocialIcon href="https://twitter.com/affan_codes" icon={<FaTwitter />} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-text transition-colors duration-300"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
)

export default Hero

