document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});

const input = document.getElementById('chatInput');
const chatLog = document.getElementById('chatLog');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const msg = input.value.trim();
    if (msg) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.textContent = msg;
      chatLog.appendChild(bubble);
      input.value = '';
      chatLog.scrollTop = chatLog.scrollHeight;
    }
  }
});
