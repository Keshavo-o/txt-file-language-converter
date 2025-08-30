# A simple Language Translator for txt files (Node.js + Gemini AI)

This project allows users to upload a text file, process its content, and translate it into a specified language (currently set to **Hindi**) using **Google Gemini AI**.  
You can change the language in code directly as -> inside test_pdf.js -> merge function -> inside prompt -> just edit "Hindi" to desired language , dont change anything else.
The translated result is returned as a downloadable `.txt` file.

## HOW TO RUN:

### 1️⃣ Install project in your pc.
### 2️⃣ Install Dependencies
npm install

### 3️⃣ Configure Environment Variables

Create a .env file in the project root:

GEMINI_API_KEY=your_google_genai_api_key_here


⚠️ Do not share or commit your .env file.

### 4️⃣ Run the Server
node server.js


Server will start at : http://localhost:3000

## NOTE : This project only works for txt files (currently doesn't support PDFs , will surely in future)
