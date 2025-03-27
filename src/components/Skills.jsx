import { motion } from "framer-motion";

const skillsData = [
  { name: "React.js", level: "Expert", category: "Frontend" },
  { name: "Angular", level: "Intermediate", category: "Frontend" },
  { name: "PHP", level: "Intermediate", category: "Backend" },
  { name: "JavaScript", level: "Expert", category: "Frontend" },
  { name: "Node.js", level: "Advanced", category: "Backend" },
  { name: "Laravel", level: "Advanced", category: "Backend" },
  { name: "TypeScript", level: "Advanced", category: "Frontend" },
  { name: "SQL Server", level: "Intermediate", category: "Database" },
  { name: "MySQL", level: "Intermediate", category: "Database" },
  { name: "MongoDB", level: "Intermediate", category: "Database" },
  { name: "Git", level: "Advanced", category: "Tools" },
  { name: "GitHub", level: "Advanced", category: "Tools" },
  { name: "Vercel", level: "Advanced", category: "Tools" },
  { name: "Netlify", level: "Advanced", category: "Tools" },
  { name: "HTML/CSS", level: "Expert", category: "Frontend" },
  { name: "Next.js", level: "Advanced", category: "Full-Stack" },
  { name: "Three.js", level: "Intermediate", category: "Frontend" },
  { name: "SEO", level: "Advanced", category: "Digital Marketing" },
  { name: "LinkedIn Optimization", level: "Advanced", category: "Branding" },
  { name: "Tailwind CSS", level: "Expert", category: "Frontend" },
  { name: "Vite", level: "Advanced", category: "Tools" }
];

const tiltVariants = {
  initial: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: {
    rotateX: -5,
    rotateY: 5,
    scale: 1.08,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-white overflow-hidden">
      <motion.h2
        className="text-5xl font-extrabold mb-12 text-center tracking-widest uppercase"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="rounded-xl p-6 shadow-lg bg-opacity-10 backdrop-blur-xl transform transition-all duration-500 hover:shadow-2xl group border border-gray-700 overflow-hidden"
            variants={tiltVariants}
            initial="initial"
            whileHover="hover"
            animate="initial"
          >
            <div className="text-center">
              <motion.h3
                className="text-2xl font-semibold mb-1 text-white group-hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {skill.name}
              </motion.h3>
              <p className="text-sm text-gray-400 mt-1">
                <span className="font-medium text-white">{skill.level}</span>
                <span className="mx-1 text-cyan-500">•</span>
                <span className="uppercase tracking-wide text-cyan-300">{skill.category}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
