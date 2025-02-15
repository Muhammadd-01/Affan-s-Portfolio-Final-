import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { gsap } from "gsap";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Full-Stack Developer", "UI/UX Enthusiast", "Tech Innovator"];
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, [currentWord]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const gradientText = {
    background: "linear-gradient(90deg, #00C9FF, #92FE9D)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "gradient-move 3s infinite alternate",
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-20 md:gap-24">
        {/* Introduction Text */}
        <div className="text-center md:text-left md:w-1/2 order-2 md:order-1">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={gradientText}
          >
            Hi, I'm Affan
          </h1>

          <div ref={textRef}>
            <motion.div
              key={currentWord}
              className="text-xl md:text-2xl mb-8 font-semibold"
              style={gradientText}
            >
              {words[currentWord]}
            </motion.div>
          </div>

          <motion.p
            className="text-lg mb-8 max-w-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
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
        <div className="order-1 md:order-2 w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-lg flex-shrink-0 mb-8 md:mb-0 md:ml-60 transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-6 hover:shadow-neon">
          <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.img
              key={isHovered ? "hovered" : "default"}
              src={
                isHovered
                  ? "/src/assets/image2.jpg" // Hovered image
                  : "/src/assets/image1.jpg" // Default image
              }
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
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
