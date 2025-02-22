import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 text-white">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg mb-8 mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        I'm a passionate and dedicated full-stack web developer with a strong background in designing and developing modern, user-friendly, and high-performance web applications. I thrive on solving complex problems and bringing creative ideas to life through code. My journey into the world of development started with curiosity and has turned into a lifelong passion.
      </motion.p>
      <motion.p
        className="text-lg mb-8 mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        Over the years, I have honed my ability to create seamless user experiences by combining my technical expertise with an eye for design. I constantly explore new technologies to stay ahead in the ever-evolving tech industry. My goal is to build innovative solutions that make a positive impact on people's lives.
      </motion.p>
      <motion.p
        className="text-lg mb-8 mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        When I'm not coding, I enjoy exploring new tech trends, contributing to open-source projects, and sharing knowledge with the developer community. I believe that continuous learning and collaboration are key to growing as a developer.
      </motion.p>
    </section>
  );
};

export default About;
