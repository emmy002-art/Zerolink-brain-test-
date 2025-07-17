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
