// Theme Toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });
  }
});

// Chat Input + Backend Fetch
const form = document.querySelector("form");
const userInput = document.querySelector("input");
const output = document.querySelector("#response");
const chatLog = document.getElementById("chatLog");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const msg = Input.value.trim();
  if (!msg) return;

  // Show user message in chat log
  const bubble = document.createElement("div");
  userbubble.className = "bubble user";
  userbubble.textContent = msg;
  chatLog.appendChild(userbubble);
  chatLog.scrollTop = chatLog.scrollHeight;

  userInput.value = "";
  output.textContent = "Zerolink Brain Is Thinking...";

  try {
    const usermessage=msg. trim();
    const res = await fetch("https://zerolink-brain-backend-h9nk.onrender.com/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: msg })
    });

    const data = await res.json();
    const reply = data.response || "No response from Zerolink Brain.";

    // Show Zerolink Brain reply in chat log
    const botBubble = document.createElement("div");
    botBubble.className = "bubble bot";
    botBubble.textContent = reply;
    chatLog.appendChild(botBubble);
    chatLog.scrollTop = chatLog.scrollHeight;

    output.textContent = "";
  } catch (error) {
    console.error("Error:", error);
    output.textContent = "Error talking to Zerolink Brain.";
  }
});
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.post("/ask", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  // Simulated AI reply
  const reply = `You said: ${message}`;
  return res.json({ response: reply });
});

// Start server
app.listen(port, () => {
  console.log(`Zerolink Brain backend is running on port ${port}`);
});
