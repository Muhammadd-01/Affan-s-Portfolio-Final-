import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { gsap } from "gsap";
import SplitType from "split-type";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);

  const roles = ["Full-Stack Developer", "UI/UX Enthusiast", "Tech Innovator"];

  useEffect(() => {
    // GSAP Text Split Animation
    const splitText = new SplitType(textRef.current, { types: "chars" });

    gsap.fromTo(
      splitText.chars,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 1, ease: "power4.out" }
    );

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const glowingText = {
    background: "linear-gradient(90deg, #12c2e9, #c471ed, #f64f59)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.8))",
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
        
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={glowingText}>
            Hi, I'm Affan
          </h1>
          <h2 ref={textRef} className="text-2xl md:text-3xl font-semibold mb-6">
            {roles[currentIndex]}
          </h2>

          <motion.p
            className="text-lg mb-8 max-w-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I craft elegant, efficient, and user-centric digital solutions. Passionate about cutting-edge technologies, I turn complex problems into seamless experiences.
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
        <motion.div
          className="order-1 md:order-2 w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0 mb-8 md:mb-0 md:ml-60"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, -10, 0], transition: { duration: 2, repeat: Infinity } }}
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
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
