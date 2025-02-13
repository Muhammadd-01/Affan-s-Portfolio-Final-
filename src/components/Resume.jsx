import { motion } from "framer-motion"

const Resume = () => {
  const experiences = [
    {
      title: "Senior Web Developer",
      company: "Tech Innovators Inc.",
      period: "2020 - Present",
      description: "Led development of multiple high-traffic web applications using React and Node.js.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description: "Developed and maintained various web applications using MERN stack.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2016 - 2018",
      description: "Assisted in the development of mobile apps using React Native.",
    },
  ]

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Tech University",
      period: "2014 - 2016",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "State University",
      period: "2010 - 2014",
    },
  ]

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Resume
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Work Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h4>
                <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
                <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
              </div>
            ))}
            <div className="mt-8">
              <a
                href="/path-to-your-resume.pdf"
                download
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Resume

