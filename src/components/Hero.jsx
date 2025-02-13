import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 to-black text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-red-300">Your Name</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8"
            >
              A passionate web developer creating amazing digital experiences.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}>
              <a
                href="#contact"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <img
              src="/path-to-your-image.jpg"
              alt="Your Name"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

