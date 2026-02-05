"use client";

import { motion, useInView } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { useRef, useState, useEffect } from "react";
import { Heart, ArrowUp, Code, Coffee } from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });
  const [currentYear] = useState(new Date().getFullYear());

  const socialLinks = [
    { href: "https://github.com/Muhammadd-01", icon: <FaGithub size={20} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/muhammad-affan-8ab604280", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
    { href: "https://www.instagram.com/affann_.12/", icon: <FaInstagram size={20} />, label: "Instagram" },
    { href: "https://www.facebook.com/profile.php?id=61572493182768", icon: <FaFacebook size={20} />, label: "Facebook" },
    { href: "https://x.com/affann_23", icon: <SiX size={18} />, label: "X" },
  ];

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z"
            fill="url(#gradient)"
            fillOpacity="0.1"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#00f6ff" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#00f6ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="pt-24 pb-8 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient-cyan">Muhammad Affan</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Full-stack web developer building modern applications with clean UI/UX, based in Karachi, Pakistan.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300"
                    aria-label={link.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors" />
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center md:text-right"
            >
              <h4 className="text-lg font-bold text-white mb-6">Get in Touch</h4>
              <div className="space-y-3 text-gray-400">
                <p>Karachi, Pakistan</p>
                <a
                  href="mailto:affan.work05@gmail.com"
                  className="block hover:text-cyan-400 transition-colors"
                >
                  affan.work05@gmail.com
                </a>
                <a
                  href="tel:+923128538773"
                  className="block hover:text-cyan-400 transition-colors"
                >
                  +92 312 8538773
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-gray-500 text-sm flex items-center gap-2">
                © {currentYear} Muhammad Affan. Built with
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                and
                <Coffee className="w-4 h-4 text-amber-400" />
              </p>

              {/* Tech stack */}
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <Code className="w-4 h-4" />
                React • Vite • TailwindCSS • Three.js
              </p>

              {/* Back to top */}
              <motion.button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors text-sm"
                whileHover={{ y: -2 }}
              >
                <ArrowUp className="w-4 h-4" />
                Back to top
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
