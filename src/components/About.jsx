import { motion } from "framer-motion"

const About = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Git", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Next.js", level: 80 },
    { name: "GraphQL", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "AWS", level: 65 },
    { name: "Docker", level: 60 },
  ]

  return (
    <section id="about" className="py-20 text-white">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg mb-8 mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        I'm a passionate full-stack web developer with 5+ years of experience in creating robust and scalable web
        applications. My expertise lies in JavaScript ecosystems, particularly React and Node.js. I have a keen eye
        for design and a love for creating seamless user experiences.
      </motion.p>
      <motion.h3
        className="text-3xl font-semibold mb-8 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        Skills & Expertise
      </motion.h3>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg">{skill.name}</span>
              <span className="text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-green-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About
