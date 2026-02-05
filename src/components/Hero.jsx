"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { gsap } from "gsap";
import { ChevronDown, Download, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Full-Stack Developer", "UI/UX Enthusiast", "Tech Innovator", "Problem Solver"];
  const textRef = useRef(null);
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  // GSAP text animation
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0, rotateX: -90 },
      { y: 0, opacity: 1, rotateX: 0, duration: 0.8, ease: "power3.out" }
    );
  }, [currentWord]);

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / 50,
        y: (e.clientY - rect.top - rect.height / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const name = "Muhammad Affan";

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px]"
        animate={{
          x: mousePosition.x * 3,
          y: mousePosition.y * 3,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]"
        animate={{
          x: mousePosition.x * -2,
          y: mousePosition.y * -2,
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * -3,
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 ">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available for work
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </span>
        </motion.div>

        {/* Animated name with letter-by-letter animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative">
          <span className="block text-white mb-2">
            {/* Hi, I'm */}
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-normal text-gray-400 block mb-2"
            >
              Hi, I'm
            </motion.span>
          </span>

          {/* Name with gradient and glow */}
          <motion.span
            className="relative inline-block"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            }}
          >
            {name.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-gradient-cyan"
                style={{
                  textShadow: "0 0 40px rgba(0, 255, 255, 0.5)",
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}

            {/* Glitch overlay */}
            <motion.span
              className="absolute top-0 left-0 w-full h-full text-[#ff007f] opacity-0"
              animate={{
                opacity: [0, 0.5, 0],
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              aria-hidden="true"
            >
              {name}
            </motion.span>
          </motion.span>
        </h1>

        {/* Rotating role text */}
        <div className="h-12 mb-8 overflow-hidden">
          <div ref={textRef} key={currentWord} className="perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWord}
                initial={{ opacity: 0, y: 20, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 45 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold"
              >
                <span className="text-gradient-cyan">{words[currentWord]}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl mb-10 max-w-2xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I craft <span className="text-cyan-400 font-medium">elegant</span>,
          <span className="text-emerald-400 font-medium"> efficient</span>, and
          <span className="text-purple-400 font-medium"> user-centric</span> digital solutions.
          With a passion for clean code and cutting-edge technologies, I transform complex problems into seamless experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <MagneticButton intensity={0.3}>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </MagneticButton>

          <MagneticButton intensity={0.3}>
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 rounded-full border-2 border-cyan-500 text-cyan-400 font-bold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background fill on hover */}
              <motion.div
                className="absolute inset-0 bg-cyan-500/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Explore My Work</span>
            </motion.button>
          </MagneticButton>

          <MagneticButton intensity={0.3}>
            <motion.a
              href="/AffanResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold  flex items-center gap-2"
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              View Resume
            </motion.a>
          </MagneticButton>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <SocialIcon href="https://github.com/Muhammadd-01" icon={<FaGithub size={24} />} label="GitHub" />
          <SocialIcon href="https://www.linkedin.com/in/muhammad-affan-8ab604280" icon={<FaLinkedin size={24} />} label="LinkedIn" />
          <SocialIcon href="https://www.instagram.com/affann_.12/" icon={<FaInstagram size={24} />} label="Instagram" />
          <SocialIcon href="https://www.facebook.com/muhammad.affan.641514/" icon={<FaFacebook size={24} />} label="Facebook" />
          <SocialIcon href="https://x.com/affann_23" icon={<SiX size={20} />} label="X" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Social Icon Component
const SocialIcon = ({ href, icon, label }) => (
  <MagneticButton intensity={0.4}>
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300"
      whileHover={{
        scale: 1.2,
        borderColor: "rgba(0, 255, 255, 0.5)",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
      }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-cyan-400/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10 group-hover:text-cyan-400 transition-colors">
        {icon}
      </span>
    </motion.a>
  </MagneticButton>
);

export default Hero;
