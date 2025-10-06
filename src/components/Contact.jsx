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
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mvgzjelp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setMessageSent(true);
      setError(false);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setMessageSent(false), 3000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
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
      {/* Success Message */}

{messageSent && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    className="glass-notification success"
  >
    ✨ Message Sent Successfully!
  </motion.div>
)}

{/* Error Message */}
{error && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    className="glass-notification error"
  >
    ❌ Failed to send message. Try again later!
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
{/* Liquid Glass Notification Styles */}
<style jsx>{`
 .glass-notification {
  position: absolute;
  top: -20px; /* floats above the component */
  right: -20px; /* more to the right */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 1.05rem;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  min-width: 220px;
  cursor: default;
  overflow: hidden;
  animation: fadeInOut 3s forwards;
}

/* shimmer / hover effect like Labs */
.glass-notification::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.35) 50%,
    rgba(255, 255, 255, 0.15) 100%
  );
  transform: rotate(25deg);
  transition: all 0.5s ease-in-out;
  pointer-events: none;
}
.glass-notification:hover::before {
  transform: rotate(25deg) translateX(20%);
}

.glass-notification.success {
  border-color: #00ffea;
  color: #00ffea;
}

.glass-notification.error {
  border-color: #ff3860;
  color: #ff3860;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(-10px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-10px); }
}

`}</style>

    </section>
  );
};

export default Contact;
