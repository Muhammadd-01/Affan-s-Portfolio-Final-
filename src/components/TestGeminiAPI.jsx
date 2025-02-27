import { useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function TestGeminiAPI() {
  useEffect(() => {
    async function fetchModels() {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

      try {
        const models = await genAI.listModels();
        console.log("Available models:", models);
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    }

    fetchModels();
  }, []);

  return <div>Check the console for Gemini API test results</div>;
}

export default TestGeminiAPI;
