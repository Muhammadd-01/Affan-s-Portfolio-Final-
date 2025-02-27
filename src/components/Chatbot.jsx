import { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const API_KEY = "your_openai_api_key"; // Replace with your OpenAI API Key

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = { sender: "bot", text: response.data.choices[0].message.content };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: "Error! Try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-16 right-5 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        <FaRobot size={24} className="text-neon-blue" />
      </button>

      {open && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-lg flex flex-col border border-gray-300">
          <div className="p-4 bg-gray-800 text-white font-bold text-center rounded-t-lg">
            Chat with AI
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
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
              className="flex-1 border p-2 rounded-md outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white p-2 rounded-md ml-2 hover:bg-blue-700 transition"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
