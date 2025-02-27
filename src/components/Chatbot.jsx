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
    setMessages([...messages, newMessage]);
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

      setMessages([
        ...messages,
        newMessage,
        { sender: "bot", text: response.data.choices[0].message.content },
      ]);
    } catch (error) {
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
