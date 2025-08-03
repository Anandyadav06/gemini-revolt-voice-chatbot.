# Gemini Voice Chatbot – Revolt Motors Clone

This project replicates the Revolt Motors voice chatbot using the Gemini Live API and a Node.js backend.

## 🧠 Features
- Real-time voice chat powered by Gemini API
- Supports user interruptions while AI is speaking
- Simple and clean UI
- Low response latency

## 🔧 Tech Stack
- Node.js + Express (Backend)
- WebSocket (Audio streaming)
- HTML + JS (Frontend)
- Gemini Live API (LLM)

## 🚀 Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/gemini-revolt-voice-chatbot.git
cd gemini-revolt-voice-chatbot
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup your environment
Create a `.env` file with:
```env
GEMINI_API_KEY=your_actual_api_key
```

### 4. Start the server
```bash
node server.js
```

### 5. Open in browser
Go to `http://localhost:3000`

## 📽️ Demo Video
[Google Drive Link](https://drive.google.com/...)

## 📎 Notes
- Uses model: `gemini-2.5-flash-preview-native-audio-dialog`
- During development, switch to `gemini-2.0-flash-live-001` for fewer rate limits.
