import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-teal-300">About Me</h3>
            <p className="text-gray-400 hover:text-teal-300 transition duration-300">
              I'm Affan, a passionate web developer creating futuristic digital experiences.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-teal-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-teal-300 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-300 transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-300 transition duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-300 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-teal-300">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center hover:text-teal-300 transition duration-300">
                <Mail className="mr-2" /> affan.work05@gmail.com
              </li>
              <li className="flex items-center hover:text-teal-300 transition duration-300">
                <Phone className="mr-2" /> +92 312 8538773
              </li>
              <li className="flex items-center hover:text-teal-300 transition duration-300">
                <MapPin className="mr-2" /> Lahore, Pakistan
              </li>
            </ul>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-teal-300">Follow Me</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-teal-300 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <GitHub />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-teal-300 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-teal-300 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Affan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
