import { motion } from "framer-motion";
import {
  FaReact, FaAngular, FaPhp, FaJs, FaNode, FaLaravel,
  FaGitAlt, FaGithub, FaHtml5
} from "react-icons/fa";
import {
  SiTypescript, SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss,
  SiVite, SiVercel, SiNetlify
} from "react-icons/si";
import { MdStorage } from "react-icons/md";
import { useState } from "react";

const skills = {
  Frontend: [
    { name: "React.js", level: "Expert", icon: <FaReact /> },
    { name: "Angular", level: "Intermediate", icon: <FaAngular /> },
    { name: "JavaScript", level: "Expert", icon: <FaJs /> },
    { name: "TypeScript", level: "Advanced", icon: <SiTypescript /> },
    { name: "HTML/CSS", level: "Expert", icon: <FaHtml5 /> },
    { name: "Tailwind CSS", level: "Expert", icon: <SiTailwindcss /> },
  ],
  Backend: [
    { name: "PHP", level: "Intermediate", icon: <FaPhp /> },
    { name: "Node.js", level: "Advanced", icon: <FaNode /> },
    { name: "Laravel", level: "Advanced", icon: <FaLaravel /> },
  ],
  Database: [
    { name: "SQL Server", level: "Intermediate", icon: <MdStorage /> },
    { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
    { name: "MongoDB", level: "Intermediate", icon: <SiMongodb /> },
  ],
  Tools: [
    { name: "Git", level: "Advanced", icon: <FaGitAlt /> },
    { name: "GitHub", level: "Advanced", icon: <FaGithub /> },
    { name: "Vercel", level: "Advanced", icon: <SiVercel /> },
    { name: "Netlify", level: "Advanced", icon: <SiNetlify /> },
    { name: "Vite", level: "Advanced", icon: <SiVite /> },
  ],
  "Full-Stack": [
    { name: "Next.js", level: "Advanced", icon: <SiNextdotjs /> },
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
