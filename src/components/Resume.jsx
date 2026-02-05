"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Globe, Download, Calendar, MapPin } from "lucide-react";
import MagneticButton from "./MagneticButton";

const education = [
  {
    year: "2023 - Present",
    degree: "ADSE Diploma",
    school: "Aptech",
    description: "Advanced Diploma in Software Engineering - Full-stack development, databases, and software architecture",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    year: "2021 - 2023",
    degree: "HSC (Intermediate)",
    school: "Superior Government College",
    description: "Pre-Engineering with focus on Mathematics, Physics, and Computer Science",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    year: "2020 - 2021",
    degree: "SSC (Matric)",
    school: "MJM School",
    description: "Completed matriculation with distinction in Science subjects",
    icon: <GraduationCap className="w-5 h-5" />
  },
];

const languages = [
  { name: "Urdu", level: "Native", percentage: 100 },
  { name: "English", level: "Fluent", percentage: 90 },
];

const Resume = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="resume" className="py-24 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-widest mb-4 block">
            My Journey
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Education & <span className="text-gradient-cyan">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              Education
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-cyan-400" />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative pl-16 pb-10 last:pb-0"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-4 top-2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-black"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  />

                  {/* Card */}
                  <motion.div
                    className="glass-card p-6 rounded-2xl group hover:border-cyan-500/30 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-2 text-cyan-400 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      {edu.school}
                    </div>
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages & Download */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-8 flex items-center gap-3"
            >
              <Globe className="w-6 h-6 text-cyan-400" />
              Languages
            </motion.h3>

            <div className="space-y-6 mb-12">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-bold text-white">{lang.name}</h4>
                    <span className="text-cyan-400 font-medium">{lang.level}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Resume CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card p-8 rounded-2xl text-center border-2 border-dashed border-cyan-500/30 hover:border-cyan-500/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">View My Resume</h4>
              <p className="text-gray-400 text-sm mb-6">
                Get a detailed PDF version of my professional resume
              </p>
              <MagneticButton intensity={0.3}>
                <motion.button
                  onClick={() => window.open("/AffanResume.pdf", "_blank")}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full font-bold text-black flex items-center gap-3 overflow-hidden shadow-lg shadow-cyan-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    View Resume
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
