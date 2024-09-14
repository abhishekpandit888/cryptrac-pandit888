import {
  GoogleGenerativeAI,
  // eslint-disable-next-line no-unused-vars
  HarmCategory,
  // eslint-disable-next-line no-unused-vars
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyAD8T3cPFdsMjKHJkt1AjsQTkkgId32wF4"; // Ensure you replace this with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Changed to reflect your new model
});

const generationConfig = {
  temperature: 0.7, // Adjusted to provide more reliable answers
  topP: 0.9,
  topK: 50,
  maxOutputTokens: 4096, // Adjusted based on expected output size
  responseMimeType: "text/plain",
};

async function run(query) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(query);
  const response = result.response;
  console.log(result.response.text());
  return response.text();
}

export default run;
