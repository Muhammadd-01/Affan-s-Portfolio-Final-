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
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-md transition-transform transform hover:scale-105 hover:rotate-1 hover:shadow-2xl group"
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.08, rotate: 2 }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-20 blur-md transition-all duration-700 group-hover:opacity-30 group-hover:blur-lg"></div>
            <div className="relative">
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 transition-transform duration-300 transform group-hover:scale-x-150"></div>
              <h3 className="text-xl font-semibold mb-2 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300">
                {skill.name}
              </h3>
              <p className="text-gray-400 text-center">{skill.level}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
