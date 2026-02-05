"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaReact, FaAngular, FaPhp, FaJs, FaNode, FaLaravel,
  FaGitAlt, FaGithub, FaHtml5, FaMicrosoft, FaLayerGroup
} from "react-icons/fa";
import {
  SiTypescript, SiMongodb, SiMysql, SiTailwindcss, SiBootstrap,
  SiVite, SiVercel, SiNetlify, SiNextdotjs, SiFlutter
} from "react-icons/si";
import { MdStorage } from "react-icons/md";

// Custom ASP.NET Core Icon
const AspNetCoreIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297l11.938 6.89v9.618L12 23.703 0 16.805V7.187L12 .297zm0 2.063L2.938 7.968v8.064L12 21.64l9.062-5.608V7.968L12 2.36zm4.187 7.152h1.781v1.078h-1.78v1.078h1.78v1.078h-1.78v1.077h-1.078v-1.077h-1.077v1.077H13.05v-1.077h-1.078v-1.078h1.078v-1.078h-1.078v-1.078h1.078v-1.078h1.078v1.078h1.077V9.512h1.078v1.078h-1.078v1.078h1.078v1.078zm-8.375-1.78c-.846 0-1.538.26-2.086.778-.548.519-.866 1.155-.956 1.91h1.44c.134-.452.368-.807.702-1.067.335-.26.719-.39 1.153-.39.582 0 1.028.182 1.337.546.31.364.465.86.465 1.488 0 .627-.156 1.124-.465 1.488-.309.364-.755.546-1.337.546-.434 0-.818-.13-1.153-.39a1.762 1.762 0 01-.702-1.067H5.77c.09.755.408 1.391.956 1.91.548.519 1.24.778 2.086.778.796 0 1.458-.26 1.988-.778.53-.519.796-1.155.796-1.91s-.266-1.39-.796-1.91c-.53-.519-1.192-.778-1.988-.778z" />
  </svg>
);

const skills = {
  Frontend: [
    { name: "React.js", level: 95, icon: <FaReact />, color: "#61DAFB" },
    { name: "JavaScript", level: 90, icon: <FaJs />, color: "#F7DF1E" },
    { name: "HTML/CSS", level: 95, icon: <FaHtml5 />, color: "#E34F26" },
    { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Bootstrap", level: 85, icon: <SiBootstrap />, color: "#7952B3" },
  ],
  Backend: [
    { name: "C#", level: 80, icon: <FaMicrosoft />, color: "#512BD4" },
    { name: "ASP.NET Core", level: 75, icon: <AspNetCoreIcon />, color: "#512BD4" },
    { name: "PHP", level: 70, icon: <FaPhp />, color: "#777BB4" },
    { name: "Laravel", level: 80, icon: <FaLaravel />, color: "#FF2D20" },
  ],
  "Full-Stack": [
    { name: "Next.js", level: 85, icon: <SiNextdotjs />, color: "#000000" },
    { name: "MERN Stack", level: 85, icon: <FaLayerGroup />, color: "#00D8FF" },
    { name: "MEAN Stack", level: 75, icon: <FaAngular />, color: "#DD0031" },
  ],
  Tools: [
    { name: "Git", level: 85, icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", level: 90, icon: <FaGithub />, color: "#181717" },
    { name: "Vercel", level: 85, icon: <SiVercel />, color: "#000000" },
    { name: "Vite", level: 90, icon: <SiVite />, color: "#646CFF" },
  ],
  Database: [
    { name: "SQL Server", level: 70, icon: <MdStorage />, color: "#CC2927" },
    { name: "MySQL", level: 75, icon: <SiMysql />, color: "#4479A1" },
  ],
  "Mobile": [
    { name: "Flutter", level: 70, icon: <SiFlutter />, color: "#02569B" },
  ],
};

const SkillCard = ({ name, level, icon, color, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden cursor-pointer"
        whileHover={{
          scale: 1.05,
          borderColor: color,
          boxShadow: `0 0 30px ${color}33`,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <motion.div
          className="text-5xl mb-4 relative z-10"
          style={{ color }}
          animate={isHovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>

        {/* Name */}
        <h4 className="text-lg font-bold text-white mb-3 relative z-10">{name}</h4>

        {/* Progress bar */}
        <div className="relative z-10">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Proficiency</span>
            <motion.span
              className="font-medium"
              style={{ color }}
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0.7 }}
            >
              {level}%
            </motion.span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Decorative corner */}
        <div
          className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, transparent 60%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// Infinite scrolling marquee
const SkillMarquee = () => {
  const allSkills = Object.values(skills).flat();

  return (
    <div className="overflow-hidden py-8 mb-12">
      <motion.div
        className="flex gap-8"
        animate={{ x: [0, -2000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...allSkills, ...allSkills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap"
          >
            <span className="text-2xl" style={{ color: skill.color }}>{skill.icon}</span>
            <span className="text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = Object.keys(skills);

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-widest mb-4 block">
            What I Work With
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-gradient-cyan">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        {/* Skill marquee */}
        <SkillMarquee />

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black"
                  : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {skills[activeCategory].map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
              color={skill.color}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
