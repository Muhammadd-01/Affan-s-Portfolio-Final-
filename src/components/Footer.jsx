import styled from "styled-components"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.footerBg};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  text-align: center;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const SocialIcon = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const Copyright = styled.p`
  font-size: 0.9rem;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialLinks>
        <SocialIcon
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </SocialIcon>
        <SocialIcon
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon
          href="https://wa.me/03128538773"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp />
        </SocialIcon>
      </SocialLinks>
      <Copyright>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</Copyright>
    </FooterWrapper>
  )
}

export default Footer

