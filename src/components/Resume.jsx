"use client"

import { motion } from "framer-motion";

const education = [
  { year: "2023 - Present", degree: "ADSE Diploma", school: "Aptech" },
  { year: "2021 - 2023", degree: "HSC", school: "Superior Government College" },
  { year: "2020 - 2021", degree: "SSC", school: "MJM School" },
];

const languages = [
  { name: "Urdu", level: "Native" },
  { name: "English", level: "Fluent" },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 255, 0.5)" },
};

const Resume = () => {
  return (
    <section id="resume" className="py-20 text-white">
      <div className="mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-5xl font-bold mb-12 text-center text-cyan-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h2>

        {/* Education Section */}
        <div className="relative mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-cyan-300 border-b-2 border-cyan-400 pb-2">
            Education
          </h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-8 p-6 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 cursor-pointer transition duration-300"
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-2xl font-medium text-cyan-200">{edu.degree}</h4>
                <span className="text-gray-400">{edu.year}</span>
              </div>
              <p className="text-gray-400">{edu.school}</p>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="relative mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-cyan-300 border-b-2 border-cyan-400 pb-2">
            Languages
          </h3>
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              className="mb-4 p-6 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 cursor-pointer transition duration-300"
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-medium text-cyan-200">{lang.name}</h4>
                <span className="text-gray-400">{lang.level}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="/myResume.pdf"
            download="My_Resume.pdf"
            className="bg-cyan-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-cyan-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Download Full Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
