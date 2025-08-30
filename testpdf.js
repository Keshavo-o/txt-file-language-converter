const path = require("path");
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();
const fs = require("fs");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function merge(unique_id, my_path) {
  try {
    const fullPath = path.join(__dirname, "uploads", my_path);

    // ✅ Now we read the file from uploads folder
    const prompt = fs.readFileSync(fullPath, "utf8");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Change the text into the specific language please just translate the text no extra information, 
      text : ${prompt},
      language : Hindi`
    });

    const outFile = path.join(__dirname, "resultFiles", `${unique_id}.txt`);
    fs.writeFileSync(outFile, response.text);

    return "File created successfully!";
  } catch (err) {
    console.error("❌ Error in merge:", err);
    throw err;
  }
  
};

module.exports = merge;
