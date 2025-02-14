import { motion } from "framer-motion"

const skillsData = [
  { name: "React", icon: "⚛️", level: "Expert" },
  { name: "JavaScript", icon: "🟨", level: "Expert" },
  { name: "Node.js", icon: "🟩", level: "Advanced" },
  { name: "TypeScript", icon: "🔵", level: "Advanced" },
  { name: "GraphQL", icon: "🟣", level: "Intermediate" },
  { name: "Python", icon: "🐍", level: "Intermediate" },
  { name: "Docker", icon: "🐳", level: "Intermediate" },
  { name: "AWS", icon: "☁️", level: "Intermediate" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-primary rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-text">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

