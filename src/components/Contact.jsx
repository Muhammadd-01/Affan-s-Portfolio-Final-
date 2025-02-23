"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setMessageSent(true);
      setFormData({ name: "", email: "", message: "" });

      // Hide message after 3 seconds with fade-out effect
      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl font-bold mb-12 text-center text-cyan-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {/* Neon Silver Glowing Background Message */}
          {messageSent && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 1, duration: 2 }} // Fade out over 3 seconds
              className="neon-glow p-4 rounded-md text-center mb-4 border border-gray-500 shadow-lg text-lg font-semibold tracking-wide"
            >
              ✨ Message Sent Successfully!
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-6 text-cyan-300">
                Contact Info
              </h3>
              <div className="space-y-6 text-white">
                <p className="flex items-center hover:text-cyan-300 transition duration-300 text-lg">
                  <Mail className="mr-3 text-cyan-400" /> affan.work05@gmail.com
                </p>
                <p className="flex items-center hover:text-cyan-300 transition duration-300 text-lg">
                  <Phone className="mr-3 text-cyan-400" /> +92 312 8538773
                </p>
                <p className="flex items-center hover:text-cyan-300 transition duration-300 text-lg">
                  <MapPin className="mr-3 text-cyan-400" /> Karachi, Pakistan
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-xl shadow-2xl border border-gray-700"
              >
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium mb-2 text-cyan-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-lg transition duration-300"
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-2 text-cyan-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-lg transition duration-300"
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium mb-2 text-cyan-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-lg transition duration-300"
                    required
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="bg-cyan-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition duration-300 flex items-center shadow-lg hover:shadow-xl w-full justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Neon Glowing Background CSS */}
      <style jsx>{`
        .neon-glow {
          background: rgba(192, 192, 192, 0.1); /* Light transparent silver */
          color: white;
          border: 2px solid #c0c0c0;
          box-shadow: 
            0 0 5px #c0c0c0,
            0 0 10px #ffffff,
            0 0 20px #aaaaaa,
            0 0 30px #c0c0c0;
          transition: opacity 2s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
