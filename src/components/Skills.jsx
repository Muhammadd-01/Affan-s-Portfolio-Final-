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
  { name: "HTML/CSS", level: "Expert", category: "Frontend" },
  { name: "Next.js", level: "Advanced", category: "Full-Stack" },
  { name: "Three.js", level: "Intermediate", category: "Frontend" },
  { name: "SEO", level: "Advanced", category: "Digital Marketing" },
  { name: "LinkedIn Optimization", level: "Advanced", category: "Branding" }
];

const tiltVariants = {
  hover: {
    rotateX: -5,
    rotateY: 5,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  },
  initial: {
    rotateX: 0,
    rotateY: 0,
    scale: 1
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="rounded-2xl p-6 shadow-md bg-white/5 backdrop-blur-lg border border-white/10 cursor-pointer hover:border-cyan-500"
            initial="initial"
            animate="initial"
            whileHover="hover"
            variants={tiltVariants}
            transition={{ delay: index * 0.05 }}
          >
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-cyan-400">{skill.name}</h3>
              <p className="text-sm text-gray-300">{skill.level} • {skill.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
