"use client"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.bg};
`

const ContactContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
`

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`

const ContactIcon = styled.span`
  margin-right: 1rem;
  color: ${({ theme }) => theme.primary};
`

const ContactForm = styled.form`
  flex: 1;
  min-width: 300px;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  background: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  background: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  resize: vertical;
  min-height: 100px;
`

const SubmitButton = styled(motion.button)`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 2rem;
`

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <ContactSection id="contact">
      <ContactContent initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <ContactInfo>
          <ContactTitle>Get in Touch</ContactTitle>
          <ContactItem>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            123 Web Dev Street, Internet City, 12345
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            affan.work05@gmail.com
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            +92 312 8538773
          </ContactItem>
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit}>
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <TextArea placeholder="Message" required />
          <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Send Message
          </SubmitButton>
        </ContactForm>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.5862416111!2d67.0591568!3d24.8826874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x7c4b9f7b5d2a1e0a!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1652345678901!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MapContainer>
      </ContactContent>
    </ContactSection>
  )
}

export default Contact

