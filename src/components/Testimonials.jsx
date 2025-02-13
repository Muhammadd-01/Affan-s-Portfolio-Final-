"use client"
import styled from "styled-components"
import { motion } from "framer-motion"

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.bgSecondary};
`

const TestimonialsContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
`

const TestimonialsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
`

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`

const TestimonialAuthor = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`

const Testimonials = () => {
  const testimonials = [
    {
      text: "Working with [Your Name] was an absolute pleasure. Their expertise in web development truly shines through in the final product.",
      author: "John Doe, CEO of TechCorp",
    },
    {
      text: "[Your Name] delivered our project on time and exceeded our expectations. I highly recommend their services.",
      author: "Jane Smith, Founder of StartupX",
    },
    {
      text: "The attention to detail and creative solutions provided by [Your Name] made our website stand out from the competition.",
      author: "Mike Johnson, Marketing Director at InnovateNow",
    },
  ]

  return (
    <TestimonialsSection>
      <TestimonialsContent>
        <TestimonialsTitle>What Clients Say</TestimonialsTitle>
        <TestimonialGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </TestimonialsContent>
    </TestimonialsSection>
  )
}

export default Testimonials

