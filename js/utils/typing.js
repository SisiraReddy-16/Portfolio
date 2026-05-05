// Typing Animation
const phrases = [
  'Building scalable web apps...',
  'Solving complex DSA problems...',
  'Exploring AI & machine learning...',
  'Contributing to open source...',
  'Optimizing algorithms...'
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typingEl = document.getElementById('typingText');

function type() {
  if (!typingEl) return; // Exit if element doesn't exist
  
  const current = phrases[phraseIdx];
  if (!deleting) {
    typingEl.textContent = current.slice(0, charIdx++);
    if (charIdx > current.length) { 
      deleting = true; 
      setTimeout(type, 1800); 
      return; 
    }
    setTimeout(type, 55);
  } else {
    typingEl.textContent = current.slice(0, charIdx--);
    if (charIdx < 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 28);
  }
}

// Start typing only if element exists
if (typingEl) {
  setTimeout(type, 800);
}