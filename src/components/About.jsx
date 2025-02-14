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
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a passionate full-stack web developer with 5+ years of experience in creating robust and scalable web
            applications. My expertise lies in JavaScript ecosystems, particularly React and Node.js. I have a keen eye
            for design and a love for creating seamless user experiences. When I'm not coding, you can find me exploring
            new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and
            community meetups.
          </motion.p>
          <motion.h3
            className="text-2xl font-semibold mb-4 text-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Skills & Expertise
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-text">{skill.level}%</span>
                </div>
                <div className="w-full bg-primary rounded-full h-2">
                  <motion.div
                    className="bg-text h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

