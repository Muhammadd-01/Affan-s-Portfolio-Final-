import { motion } from "framer-motion"

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
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-white">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        My Skills
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="relative rounded-xl p-6 shadow-md transition-transform transform hover:scale-105 hover:rotate-1 hover:shadow-2xl group border-2 border-transparent hover:border-white hover:border-opacity-30"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.08, rotate: 2 }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white to-transparent opacity-5 blur-md transition-all duration-700 group-hover:opacity-20 group-hover:blur-lg"></div>
            <div className="relative">
              <motion.h3
                className="text-xl font-semibold mb-2 text-center text-white group-hover:text-white transition-colors duration-300"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill.name}
              </motion.h3>
              <motion.p
                className="text-gray-400 text-center group-hover:text-gray-200 transition-colors duration-300"
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
  )
}

export default Skills
