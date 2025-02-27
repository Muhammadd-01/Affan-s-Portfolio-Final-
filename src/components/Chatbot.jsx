import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro-1.0", apiVersion: "v1" });

      const chat = model.startChat();
      const result = await chat.sendMessage(input);
      const text = result.response.text();

      setMessages((prev) => [...prev, { text: text, sender: "bot" }]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, something went wrong. Please try again!", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-20 right-4 p-4 rounded-full bg-[#0ff] text-black shadow-lg z-30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-28 right-4 w-80 h-96 bg-black text-white rounded-lg shadow-xl overflow-hidden border border-[#0ff] z-20"
          >
            <div className="flex flex-col h-full">
              <div className="p-4 bg-[#0ff] text-black flex justify-between items-center">
                <h3 className="text-lg font-semibold">DeepSeek Chatbot</h3>
                <X size={20} className="cursor-pointer" onClick={() => setIsOpen(false)} />
              </div>
              <div className="flex-grow overflow-y-auto p-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                    <span
                      className={`inline-block p-2 rounded-lg ${
                        msg.sender === "user" ? "bg-[#0ff] text-black" : "bg-gray-700 text-white"
                      }`}
                    >
                      {msg.text}
                    </span>
                  </div>
                ))}
                {isLoading && <p className="text-gray-500">Thinking...</p>}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
                <div className="flex">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-grow px-3 py-2 bg-gray-900 text-white rounded-l-md focus:outline-none"
                  />
                  <button type="submit" className="px-4 py-2 bg-[#0ff] text-black rounded-r-md" disabled={isLoading}>
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Chatbot;
