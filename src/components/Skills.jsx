"use client"
import { motion } from "framer-motion"
import { FaReact, FaJs, FaNodeJs, FaCss3Alt, FaHtml5, FaDatabase } from "react-icons/fa"

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, level: 90 },
    { name: "JavaScript", icon: <FaJs />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs />, level: 80 },
    { name: "CSS", icon: <FaCss3Alt />, level: 90 },
    { name: "HTML", icon: <FaHtml5 />, level: 95 },
    { name: "Databases", icon: <FaDatabase />, level: 75 },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              style={{
                boxShadow: "12px 12px 24px #d1d1d1, -12px -12px 24px #ffffff",
              }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl text-red-500 mr-4">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

