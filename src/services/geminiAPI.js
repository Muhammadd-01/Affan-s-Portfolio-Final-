import axios from "axios";

const API_KEY = "AIzaSyDKpuS8WPr8FmboQC8qhO_142Ispb82Jeo";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${API_KEY}`;

export const getGeminiResponse = async (message) => {
  try {
    const response = await axios.post(API_URL, {
      prompt: { text: message },
    });
    return response.data.candidates[0]?.output || "No response";
  } catch (error) {
    console.error("Error fetching response:", error);
    return "Error fetching response";
  }
};
