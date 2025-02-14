import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        yoyo: Infinity, // Continuous fade in/out
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-between px-10 bg-black text-white">
      {/* Intro Section */}
      <div className="flex-1 flex flex-col justify-center space-y-4">
        <motion.h1
          className="text-5xl font-bold"
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          Hi, I'm Affan
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400"
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          Full-Stack Developer | UI/UX Enthusiast | Tech Innovator
        </motion.p>
        <motion.p
          className="text-lg max-w-xl"
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          I craft elegant, efficient, and user-centric digital solutions. With a passion for clean code and
          cutting-edge technologies, I transform complex problems into seamless experiences.
        </motion.p>
        <div className="flex space-x-4">
          <motion.a
            href="#contact"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
          <motion.a
            href="#projects"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
        </div>
        <div className="flex space-x-4 mt-6">
          <SocialIcon href="https://github.com/affan-portfolio" icon={<FaGithub />} />
          <SocialIcon href="https://linkedin.com/in/affan-dev" icon={<FaLinkedin />} />
          <SocialIcon href="https://twitter.com/affan_codes" icon={<FaTwitter />} />
        </div>
      </div>

      {/* Profile Picture Section */}
      <div className="flex-1 flex justify-center">
        <motion.div
          className="relative w-80 h-96 transform hover:scale-105 transition-transform duration-500"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.img
            src={isHovered ? "https://via.placeholder.com/300x400?text=Other+Pose" : "https://via.placeholder.com/300x400?text=Person"}
            alt="Profile"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="absolute inset-0 border-4 border-indigo-500 rounded-lg opacity-75 animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition-colors duration-300"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default Hero;
