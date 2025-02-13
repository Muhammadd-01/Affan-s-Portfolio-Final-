"use client"
import { Briefcase } from "lucide-react"

const TimelineItem = ({ year, title, description, icon }) => (
  <div className="mb-8 flex justify-between items-center w-full right-timeline">
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto font-semibold text-lg text-white">{icon}</h1>
    </div>
    <div className="order-1 bg-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
      <h3 className="mb-3 font-bold text-white text-xl">{year}</h3>
      <h4 className="mb-3 font-bold text-white text-lg">{title}</h4>
      <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">{description}</p>
    </div>
  </div>
)

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
              style={{ left: "50%" }}
            ></div>
            <TimelineItem
              year="2021 - Present"
              title="Senior Full Stack Developer"
              description="Leading development of complex web applications using React, Node.js, and MongoDB."
              icon={<Briefcase size={16} />}
            />
            <TimelineItem
              year="2018 - 2021"
              title="Full Stack Developer"
              description="Developed and maintained various web applications using modern JavaScript frameworks."
              icon={<Briefcase size={16} />}
            />
            <TimelineItem
              year="2016 - 2018"
              title="Junior Web Developer"
              description="Started my career as a junior developer, focusing on front-end technologies."
              icon={<Briefcase size={16} />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

