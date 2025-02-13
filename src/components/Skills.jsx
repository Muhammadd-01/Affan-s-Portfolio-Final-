"use client"
import styled from "styled-components"
import { motion } from "framer-motion"

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.bg};
`

const SkillsContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`

const SkillsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
`

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`

const SkillItem = styled.div`
  margin-bottom: 1rem;
`

const SkillName = styled.p`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`

const ProgressBarContainer = styled.div`
  background-color: ${({ theme }) => theme.bgSecondary};
  border-radius: 10px;
  height: 10px;
`

const ProgressBar = styled(motion.div)`
  background-color: ${({ theme }) => theme.primary};
  height: 100%;
  border-radius: 10px;
`

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 85 },
        { name: "Python", level: 70 },
        { name: "SQL", level: 75 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Agile/Scrum", level: 80 },
      ],
    },
  ]

  return (
    <SkillsSection id="skills">
      <SkillsContent initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <SkillsTitle>My Skills</SkillsTitle>
        {skillCategories.map((category, categoryIndex) => (
          <SkillCategory key={categoryIndex}>
            <CategoryTitle>{category.title}</CategoryTitle>
            {category.skills.map((skill, skillIndex) => (
              <SkillItem key={skillIndex}>
                <SkillName>{skill.name}</SkillName>
                <ProgressBarContainer>
                  <ProgressBar
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 * skillIndex }}
                  />
                </ProgressBarContainer>
              </SkillItem>
            ))}
          </SkillCategory>
        ))}
      </SkillsContent>
    </SkillsSection>
  )
}

export default Skills

