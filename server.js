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
