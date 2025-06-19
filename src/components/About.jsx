import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 text-white relative overflow-hidden">
      <motion.h2
        className="text-5xl font-extrabold mb-8 text-center relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
      >
        Who Am I?
      </motion.h2>

      <motion.p
        className="text-xl mb-8 mx-auto max-w-3xl text-center relative z-10 leading-relaxed"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        whileHover={{ x: 10 }}
      >
        I'm Muhammad Affan — a full-stack web developer, content creator, and lifelong learner. I specialize in building modern, real-world web applications using React, Laravel, Node.js, .NET, and TailwindCSS, with a strong focus on clean UI/UX, performance, and scalability.
      </motion.p>

      <motion.p
        className="text-xl mb-8 mx-auto max-w-3xl text-center relative z-10 leading-relaxed"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        whileHover={{ x: -10 }}
      >
        Whether it’s frontend magic or backend logic, I’m passionate about turning ideas into fully functional digital products. I believe in building with purpose — using clean code, thoughtful design, and scalable architecture.
      </motion.p>

      <motion.p
        className="text-xl mb-8 mx-auto max-w-3xl text-center relative z-10 leading-relaxed"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        Outside tech, I study Islamic knowledge, psychology, and history — blending traditional wisdom with modern tools. I’m committed to growth, discipline, and creating solutions that matter. Let's build something impactful together.
      </motion.p>
    </section>
  );
};

export default About;
