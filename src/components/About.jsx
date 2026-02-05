"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Code2, Rocket, Coffee, Award, ExternalLink } from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [counters, setCounters] = useState({ projects: 0, experience: 0, clients: 0, coffee: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Animated counters
  useEffect(() => {
    if (isInView) {
      const stats = { projects: 15, experience: 3, clients: 20, coffee: 500 };
      const duration = 2000;
      const steps = 60;

      Object.keys(stats).forEach((key) => {
        let current = 0;
        const increment = stats[key] / steps;
        const stepDuration = duration / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stats[key]) {
            current = stats[key];
            clearInterval(timer);
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, stepDuration);
      });
    }
  }, [isInView]);

  const stats = [
    { icon: <Rocket className="w-6 h-6" />, value: counters.projects, label: "Projects Completed", suffix: "+" },
    { icon: <Code2 className="w-6 h-6" />, value: counters.experience, label: "Years Experience", suffix: "+" },
    { icon: <Award className="w-6 h-6" />, value: counters.clients, label: "Happy Clients", suffix: "+" },
    { icon: <Coffee className="w-6 h-6" />, value: counters.coffee, label: "Cups of Coffee", suffix: "+" },
  ];

  const highlightWords = ["full-stack", "React", "Laravel", "Node.js", ".NET", "TailwindCSS", "NexoVate Digital"];

  const renderHighlightedText = (text) => {
    return text.split(" ").map((word, index) => {
      const isHighlighted = highlightWords.some((hw) =>
        word.toLowerCase().includes(hw.toLowerCase())
      );
      return (
        <span
          key={index}
          className={isHighlighted ? "text-cyan-400 font-medium" : ""}
        >
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 text-white relative overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-widest mb-4 block">
            Get to know me
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Who Am <span className="text-gradient-cyan">I?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.p
              className="text-lg leading-relaxed text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {renderHighlightedText(
                "I'm Muhammad Affan — a full-stack web developer, content creator, and lifelong learner. I specialize in building modern, real-world web applications using React, Laravel, Node.js, .NET, and TailwindCSS, with a strong focus on clean UI/UX, performance, and scalability."
              )}
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Whether it's frontend magic or backend logic, I'm passionate about turning ideas into fully functional digital products. I believe in building with purpose — using clean code, thoughtful design, and scalable architecture.
            </motion.p>

            {/* CEO Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, borderColor: "rgba(0, 255, 255, 0.4)" }}
            >
              <span className="text-lg">CEO at</span>
              <span className="text-cyan-400 font-bold text-lg">NexoVate Digital</span>
              <a
                href="https://nexovate-digital.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
              </a>
            </motion.div>

            <motion.p
              className="text-lg leading-relaxed text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Outside tech, I study Islamic knowledge, psychology, and history — blending traditional wisdom with modern tools. I'm committed to growth, discipline, and creating solutions that matter.
            </motion.p>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 group-hover:border-cyan-500/30">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div className="text-4xl font-bold text-white mb-1">
                    {stat.value}
                    <span className="text-cyan-400">{stat.suffix}</span>
                  </div>

                  {/* Label */}
                  <p className="text-gray-400 text-sm">{stat.label}</p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl text-gray-400 mb-6">
            Let's build something <span className="text-cyan-400">impactful</span> together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
