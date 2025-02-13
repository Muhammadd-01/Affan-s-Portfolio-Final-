"use client"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase, FaMedal } from "react-icons/fa"

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.bgSecondary};
`

const AboutContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
`

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 2rem;
`

const TimelineContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: ${({ theme }) => theme.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
`

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  &:nth-child(odd) {
    left: 0;
  }
  &:nth-child(even) {
    left: 50%;
  }
`

const TimelineContent = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.bg};
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`

const TimelineIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.bg};
  font-size: 1.2rem;
  ${({ position }) => (position === "left" ? "right: -20px;" : "left: -20px;")}
`

const TimelineTitle = styled.h3`
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.text};
`

const TimelineDate = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  font-style: italic;
`

const About = () => {
  const timelineItems = [
    { icon: <FaGraduationCap />, title: "Bachelor in Computer Science", date: "2015 - 2019", position: "left" },
    { icon: <FaBriefcase />, title: "Junior Web Developer", date: "2019 - 2021", position: "right" },
    { icon: <FaBriefcase />, title: "Senior Web Developer", date: "2021 - Present", position: "left" },
    { icon: <FaMedal />, title: "Best Developer Award", date: "2022", position: "right" },
  ]

  return (
    <AboutSection id="about">
      <AboutContent initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          I'm a passionate web developer with over 5 years of experience in creating responsive and user-friendly
          websites. My journey in tech started with a degree in Computer Science, and since then, I've been constantly
          learning and adapting to new technologies. I specialize in React and Node.js, and I'm always excited to take
          on new challenges.
        </AboutText>
        <TimelineContainer>
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: item.position === "left" ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineContent>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineDate>{item.date}</TimelineDate>
              </TimelineContent>
              <TimelineIcon position={item.position}>{item.icon}</TimelineIcon>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </AboutContent>
    </AboutSection>
  )
}

export default About

