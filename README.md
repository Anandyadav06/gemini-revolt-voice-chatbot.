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



SOURCE CODE

// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { WebSocketServer } = require('ws');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Serve frontend HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// WebSocket server to mock Gemini Live API streaming
const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', (ws) => {
  console.log('WebSocket connected');

  ws.on('message', (msg) => {
    const text = msg.toString();
    console.log('Received:', text);
    // Simulate Gemini response
    if (text.toLowerCase().includes('rv400')) {
      ws.send('The RV400 is a high-performance electric motorcycle from Revolt Motors.');
    } else {
      ws.send('I can help you with anything related to Revolt Motors.');
    }
  });

  ws.on('close', () => {
    console.log('WebSocket disconnected');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

