import { motion } from "framer-motion";

const skillsData = [
  { name: "React", level: "Expert" },
  { name: "JavaScript", level: "Expert" },
  { name: "Node.js", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "GraphQL", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
  { name: "AWS", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
  { name: "HTML/CSS", level: "Expert" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Next.js", level: "Advanced" },
  { name: "Three.js", level: "Intermediate" },
  { name: "Cybersecurity", level: "Intermediate" },
  { name: "WebGL", level: "Beginner" },
  { name: "Blockchain", level: "Beginner" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-white relative overflow-hidden">
      <motion.h2
        className="text-5xl font-extrabold mb-12 text-center relative z-10 tracking-widest uppercase"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
      >
        My Futuristic Skills
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="relative rounded-xl p-6 shadow-lg bg-opacity-10 backdrop-blur-xl transform transition-all duration-500 hover:scale-110 hover:shadow-2xl group border border-gray-700 hover:border-cyan-400 hover:border-opacity-50 hover:rotate-3"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-transparent to-purple-600 opacity-10 blur-md transition-all duration-700 group-hover:opacity-30 group-hover:blur-xl"></div>
            <div className="relative text-center">
              <motion.h3
                className="text-2xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill.name}
              </motion.h3>
              <motion.p
                className="text-gray-400 group-hover:text-purple-300 transition-colors duration-300 text-lg"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {skill.level}
              </motion.p>
            </div>
            <div className="absolute inset-0 rounded-xl border border-white border-opacity-10 group-hover:border-opacity-50 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
