import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("your_api_key_here");

async function testModels() {
  try {
    const models = await genAI.listModels();
    console.log("Available models:", models);
  } catch (error) {
    console.error("Error fetching models:", error);
  }
}

testModels();
