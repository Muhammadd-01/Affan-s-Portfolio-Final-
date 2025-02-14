import { motion } from "framer-motion"

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "Tailwind CSS",
    "Git",
    "Responsive Design",
    "TypeScript",
    "Next.js",
    "GraphQL",
    "MongoDB",
    "AWS",
    "Docker",
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-accent rounded-lg p-3 text-center hover:bg-text hover:text-primary transition duration-300 transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

