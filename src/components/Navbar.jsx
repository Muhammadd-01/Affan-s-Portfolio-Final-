"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X, Sparkles } from "lucide-react";
import VoiceAssistant from "./VoiceAssistant";
import MagneticButton from "./MagneticButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["hero", "about", "skills", "projects", "resume", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled
        ? "bg-black/90 shadow-lg border-b border-white/5"
        : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Animated top border on scroll */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <MagneticButton intensity={0.2}>
            <div
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative group cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <motion.span
                className="text-white font-extrabold text-2xl md:text-3xl relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative">
                  Muhammad
                  <span className="text-gradient-cyan ml-2">Affan</span>

                  {/* Sparkle icon */}
                  <motion.span
                    className="absolute -top-2 -right-6 text-cyan-400"
                    animate={{
                      rotate: [0, 15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.span>
                </span>
              </motion.span>

              {/* Underline animation on hover */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </MagneticButton>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item === "Home" ? "hero" : item.toLowerCase();
              const isActive = activeSection === sectionId;

              const handleClick = () => {
                const element = document.getElementById(sectionId);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              };

              return (
                <MagneticButton key={item} intensity={0.15}>
                  <div
                    onClick={handleClick}
                    className="relative group cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick()}
                  >
                    <span
                      className={`text-lg font-medium transition-all duration-300 ${isActive ? "text-cyan-400" : "text-white"
                        } group-hover:text-cyan-400`}
                    >
                      {item}
                    </span>

                    {/* Active indicator */}
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Glow effect on active */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-4 bg-cyan-400/20 blur-md"
                        layoutId="nav-glow"
                      />
                    )}
                  </div>
                </MagneticButton>
              );
            })}

            {/* Voice Assistant */}
            <div className="ml-4 pl-4 border-l border-white/10">
              <VoiceAssistant />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <VoiceAssistant />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/98 flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Close button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={28} />
            </motion.button>

            {/* Nav items */}
            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    onClick={() => {
                      const sectionId = item === "Home" ? "hero" : item.toLowerCase();
                      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                      setIsOpen(false);
                    }}
                    className="text-4xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                    role="button"
                    tabIndex={0}
                  >
                    <span className="text-gradient-cyan text-lg mr-2">{String(index + 1).padStart(2, '0')}</span>
                    {item}
                  </div>
                </motion.div>
              ))}
            </nav>

            {/* Decorative elements */}
            <motion.div
              className="absolute bottom-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-gray-500 text-sm tracking-widest uppercase">Muhammad Affan - Portfolio</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
