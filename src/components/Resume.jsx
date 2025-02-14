import { motion } from 'framer-motion';

const experiences = [
  { year: '2021 - Present', title: 'Senior Web Developer', company: 'Tech Co.' },
  { year: '2018 - 2021', title: 'Web Developer', company: 'Digital Agency' },
  { year: '2016 - 2018', title: 'Junior Developer', company: 'Startup Inc.' },
];

const education = [
  { year: '2012 - 2016', degree: 'Bachelor of Science in Computer Science', school: 'University of Technology' },
  { year: '2010 - 2012', degree: 'Associate Degree in Web Development', school: 'Community College' },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.5)' },
};

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-6 text-teal-300">Work Experience</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-8 p-6 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white cursor-pointer transition duration-300"
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-2xl font-medium">{exp.title}</h4>
                  <span className="text-gray-400">{exp.year}</span>
                </div>
                <p className="text-gray-400">{exp.company}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6 text-teal-300">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-8 p-6 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white cursor-pointer transition duration-300"
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-2xl font-medium">{edu.degree}</h4>
                  <span className="text-gray-400">{edu.year}</span>
                </div>
                <p className="text-gray-400">{edu.school}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.a
              href="/path-to-your-resume.pdf"
              download
              className="bg-teal-300 text-black px-8 py-3 rounded-full font-semibold hover:bg-teal-400 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Download Full Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
