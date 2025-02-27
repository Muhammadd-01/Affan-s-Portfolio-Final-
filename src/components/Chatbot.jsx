import { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // Load API key from .env.local

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          contents: [{ role: "user", parts: [{ text: input }] }],
        }
      );

      const botReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "I didn't understand that.";

      setMessages([...messages, newMessage, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...messages, { sender: "bot", text: "Error! Try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        <FaRobot size={24} />
      </button>

      {open && (
        <div className="w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col">
          <div className="p-4 bg-blue-600 text-white font-bold">Chat with AI</div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-300 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-gray-500">Typing...</p>}
          </div>
          <div className="p-3 flex border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 border p-2 rounded-md"
            />
            <button onClick={sendMessage} className="bg-blue-600 text-white p-2 rounded-md ml-2">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
