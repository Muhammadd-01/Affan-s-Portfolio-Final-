import { Download, Briefcase, GraduationCap } from "lucide-react"

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

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
        <div className="mb-8 text-center">
          <a
            href="/path-to-your-resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </a>
        </div>
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
            <TimelineItem
              year="2012 - 2016"
              title="Bachelor's in Computer Science"
              description="Graduated with honors, specializing in web technologies and software engineering."
              icon={<GraduationCap size={16} />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

