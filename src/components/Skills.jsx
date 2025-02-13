"use client"
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa"

const SkillCard = ({ icon, title, skills, theme }) => (
  <div
    className="bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 flex flex-col items-center"
    style={{ backgroundColor: theme.primary }}
  >
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2" style={{ color: theme.accent }}>
      {title}
    </h3>
    <ul className="text-center">
      {skills.map((skill, index) => (
        <li key={index} className="mb-1">
          {skill}
        </li>
      ))}
    </ul>
  </div>
)

const Skills = ({ theme }) => {
  const skillsData = [
    {
      icon: <FaReact size={40} color={theme.accent} />,
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"],
    },
    {
      icon: <FaNodeJs size={40} color={theme.accent} />,
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"],
    },
    {
      icon: <FaDatabase size={40} color={theme.accent} />,
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    },
    {
      icon: <FaTools size={40} color={theme.accent} />,
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Agile/Scrum"],
    },
  ]

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: theme.secondary }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.accent }}>
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

