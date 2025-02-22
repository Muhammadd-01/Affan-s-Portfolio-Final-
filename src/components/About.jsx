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
        A digital artisan, passionate about crafting seamless web experiences that captivate and engage. My journey started with curiosity and evolved into a deep-rooted love for problem-solving and innovation in the digital realm.
      </motion.p>
      <motion.p
        className="text-xl mb-8 mx-auto max-w-3xl text-center relative z-10 leading-relaxed"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        whileHover={{ x: -10 }}
      >
        I specialize in transforming ideas into digital reality, leveraging modern technologies to build applications that are not only functional but also visually stunning. My philosophy? Design with purpose, develop with precision, and always stay ahead of the curve.
      </motion.p>
      <motion.p
        className="text-xl mb-8 mx-auto max-w-3xl text-center relative z-10 leading-relaxed"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        Beyond coding, I’m an advocate for open-source collaboration, continuous learning, and embracing the ever-evolving tech landscape. Let’s create something extraordinary together!
      </motion.p>
    </section>
  );
};

export default About;
