import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const loopVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-20 md:gap-24">
        {/* Introduction Text */}
        <div className="text-center md:text-left md:w-1/2 order-2 md:order-1">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Hi, I'm Affan
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Full-Stack Developer | UI/UX Enthusiast | Tech Innovator
          </motion.p>
          <motion.p
            className="text-lg mb-8 max-w-2xl"
            variants={loopVariants}
            initial="animate"
            animate="animate"
          >
            I craft elegant, efficient, and user-centric digital solutions. With a passion for clean code and cutting-edge technologies, I transform complex problems into seamless experiences.
          </motion.p>
          <div className="space-x-4">
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
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <SocialIcon href="https://github.com/affan-portfolio" icon={<FaGithub />} />
            <SocialIcon href="https://linkedin.com/in/affan-dev" icon={<FaLinkedin />} />
            <SocialIcon href="https://twitter.com/affan_codes" icon={<FaTwitter />} />
          </div>
        </div>

        {/* Profile Picture */}
        <div className="order-1 md:order-2 w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0 mb-8 md:mb-0 md:ml-60">
          <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              key={isHovered ? "hovered" : "default"}
              src={
                isHovered
                  ? "https://via.placeholder.com/150/0000FF/808080?text=New+Pose" // Hovered image
                  : "https://via.placeholder.com/150" // Default image
              }
              alt="Profile"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
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
