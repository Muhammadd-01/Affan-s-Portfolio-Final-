import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const aboutText =
    "We are passionate about crafting elegant and user-centric digital solutions. Based in Karachi, we blend creativity with technology to bring ideas to life.";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setTypedText((prev) => prev + aboutText[index]);
      index++;
      if (index === aboutText.length) {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 50);
  }, []);

  const scrollToSection = (id) => {
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-white bg-transparent py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* About Section */}
          <motion.div
            className="w-full md:w-1/3 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              {aboutText.substring(0, typedText.length)}
              <span
                className={`border-r-4 border-teal-400 animate-typing`}
              ></span>
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="w-full md:w-1/3 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("#hero")}
                  className="hover:text-teal-400 transition duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="hover:text-teal-400 transition duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#projects")}
                  className="hover:text-teal-400 transition duration-300"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="hover:text-teal-400 transition duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="w-full md:w-1/3 text-center md:text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              Karachi, Pakistan
              <br />
              Email:{" "}
              <a
                href="mailto:affan.work05@gmail.com"
                className="hover:text-teal-400 transition duration-300"
              >
                affan.work05@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+923128538773"
                className="hover:text-teal-400 transition duration-300"
              >
                +92 312 8538773
              </a>
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61572493182768"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-teal-400 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/almuharib._.7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-teal-400 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="text-center mt-10 border-t border-gray-700 pt-4 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          &copy; 2025 Affan. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
