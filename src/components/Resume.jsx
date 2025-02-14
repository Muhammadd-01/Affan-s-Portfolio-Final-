const Resume = () => {
  const experiences = [
    { year: "2021 - Present", title: "Senior Web Developer", company: "Tech Co." },
    { year: "2018 - 2021", title: "Web Developer", company: "Digital Agency" },
    { year: "2016 - 2018", title: "Junior Developer", company: "Startup Inc." },
  ]

  const education = [
    { year: "2012 - 2016", degree: "Bachelor of Science in Computer Science", school: "University of Technology" },
    { year: "2010 - 2012", degree: "Associate Degree in Web Development", school: "Community College" },
  ]

  return (
    <section id="resume" className="py-20 bg-black bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-6 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-medium">{exp.title}</h4>
                  <span className="text-gray-400">{exp.year}</span>
                </div>
                <p className="text-gray-300">{exp.company}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-6 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-medium">{edu.degree}</h4>
                  <span className="text-gray-400">{edu.year}</span>
                </div>
                <p className="text-gray-300">{edu.school}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="/path-to-your-resume.pdf"
              download
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
            >
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

