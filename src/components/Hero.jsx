import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import {SiX} from "react-icons/si";
import { gsap } from "gsap";

const Hero = () => {
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

  const gradientText = {
    background: "linear-gradient(90deg, #00C9FF, #92FE9D)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "gradient-move 3s infinite alternate",
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={gradientText}>
          Hi, I'm Muhammad Affan
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
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <SocialIcon href="https://github.com/Muhammadd-01" icon={<FaGithub />} />
          <SocialIcon href="https://www.linkedin.com/in/muhammad-affan-8ab604280" icon={<FaLinkedin />} />
          <SocialIcon href="https://www.instagram.com" icon={<FaInstagram />} />
          <SocialIcon href="https://www.facebook.com" icon={<FaFacebook />} />
          <SocialIcon href="https://x.com/affann_23" icon={<SiX />} />
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
