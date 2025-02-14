import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Hero = () => {
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

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  }

  const AnimatedText = ({ text, className }) => (
    <motion.span className={className} variants={textVariants} initial="hidden" animate="visible">
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  )

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 text-white" variants={itemVariants}>
            <AnimatedText text="Hi, I'm Affan" />
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-8 text-gray-300" variants={itemVariants}>
            <AnimatedText text="Full-Stack Developer | UI/UX Enthusiast | Tech Innovator" />
          </motion.p>
          <motion.p className="text-lg mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            I craft elegant, efficient, and user-centric digital solutions. With a passion for clean code and
            cutting-edge technologies, I transform complex problems into seamless experiences.
          </motion.p>
          <motion.div className="space-x-4" variants={itemVariants}>
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
          </motion.div>
          <motion.div className="mt-8 flex justify-center space-x-4" variants={itemVariants}>
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
    className="text-white hover:text-gray-300 transition-colors duration-300"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
)

export default Hero

