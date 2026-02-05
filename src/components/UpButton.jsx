"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    toggleVisibility()

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed right-6 bg-cyan-500 hover:bg-cyan-600 text-black w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-colors"
          style={{
            zIndex: 9997,
            bottom: 24, // Fixed at bottom, WhatsApp moves up above it
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)"
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default UpButton
