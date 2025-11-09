import { motion } from "framer-motion";
import {
  FaReact, FaAngular, FaPhp, FaJs, FaNode, FaLaravel,
  FaGitAlt, FaGithub, FaHtml5, FaMicrosoft, FaLayerGroup
} from "react-icons/fa";
import {
  SiTypescript, SiMongodb, SiMysql, SiTailwindcss, SiBootstrap,
  SiVite, SiVercel, SiNetlify, SiNextdotjs, SiFlutter
} from "react-icons/si";
import { MdStorage } from "react-icons/md";
import { useState } from "react";

// Custom ASP.NET Core Icon
const AspNetCoreIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297l11.938 6.89v9.618L12 23.703 0 16.805V7.187L12 .297zm0 2.063L2.938 7.968v8.064L12 21.64l9.062-5.608V7.968L12 2.36zm4.187 7.152h1.781v1.078h-1.78v1.078h1.78v1.078h-1.78v1.077h-1.078v-1.077h-1.077v1.077H13.05v-1.077h-1.078v-1.078h1.078v-1.078h-1.078v-1.078h1.078v-1.078h1.078v1.078h1.077V9.512h1.078v1.078h-1.078v1.078h1.078v1.078zm-8.375-1.78c-.846 0-1.538.26-2.086.778-.548.519-.866 1.155-.956 1.91h1.44c.134-.452.368-.807.702-1.067.335-.26.719-.39 1.153-.39.582 0 1.028.182 1.337.546.31.364.465.86.465 1.488 0 .627-.156 1.124-.465 1.488-.309.364-.755.546-1.337.546-.434 0-.818-.13-1.153-.39a1.762 1.762 0 01-.702-1.067H5.77c.09.755.408 1.391.956 1.91.548.519 1.24.778 2.086.778.796 0 1.458-.26 1.988-.778.53-.519.796-1.155.796-1.91s-.266-1.39-.796-1.91c-.53-.519-1.192-.778-1.988-.778z"/>
  </svg>
);

const skills = {
  Frontend: [
    { name: "React.js", level: "Expert", icon: <FaReact /> },
    { name: "JavaScript", level: "Expert", icon: <FaJs /> },
    { name: "HTML/CSS", level: "Expert", icon: <FaHtml5 /> },
    { name: "Tailwind CSS", level: "Expert", icon: <SiTailwindcss /> },
    { name: "Bootstrap", level: "Expert", icon: <SiBootstrap /> },
  ],
  Backend: [
    { name: "C#", level: "Advanced", icon: <FaMicrosoft /> },
    { name: "ASP.NET Core", level: "Advanced", icon: <AspNetCoreIcon /> },
    { name: "PHP", level: "Intermediate", icon: <FaPhp /> },
    { name: "Laravel", level: "Advanced", icon: <FaLaravel /> },
  ],
 
  Tools: [
    { name: "Git", level: "Advanced", icon: <FaGitAlt /> },
    { name: "GitHub", level: "Advanced", icon: <FaGithub /> },
    { name: "Vercel", level: "Advanced", icon: <SiVercel /> },
    { name: "Vite", level: "Advanced", icon: <SiVite /> },
  ],
  "Full-Stack": [
    { name: "Next.js", level: "Advanced", icon: <SiNextdotjs /> },
    { name: "MERN Stack", level: "Advanced", icon: <FaLayerGroup /> },
    { name: "MEAN Stack", level: "Advanced", icon: <FaAngular /> },
  ],
   Database: [
    { name: "SQL Server", level: "Intermediate", icon: <MdStorage /> },
    { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
  ],
  "Mobile Application": [
    { name: "Flutter", level: "Intermediate", icon: <SiFlutter /> },
  ],
};

const SkillCard = ({ name, level, category, icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-64 h-40 text-white border border-gray-600 rounded-2xl p-5 flex flex-col justify-center items-center gap-2 m-3 transition-all duration-300"
    >
      <div className="text-4xl">{icon}</div>
      <div className={`text-lg font-bold transition-colors duration-300 ${hovered ? "text-blue-400" : "text-white"}`}>
        {name}
      </div>
      <div className={`text-sm transition-colors duration-300 ${hovered ? "text-gray-300" : "text-gray-400"}`}>
        {level} • {category}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center justify-center py-10 px-4">
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">{category}</h2>
          <div className="flex flex-wrap justify-center">
            {skillList.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                level={skill.level}
                category={category}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
