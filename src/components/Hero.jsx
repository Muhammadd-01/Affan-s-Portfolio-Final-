import styled from "styled-components"
import { motion } from "framer-motion"

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.heroBg};
  position: relative;
  overflow: hidden;
`

const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 1;
`

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textSecondary};
`

const HeroImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
`

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <HeroImage src="/path-to-your-image.jpg" alt="Your Name" whileHover={{ scale: 1.1 }} />
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Your Name
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Web Developer & Designer
        </HeroSubtitle>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero

