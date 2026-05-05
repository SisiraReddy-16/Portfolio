// Custom Cursor
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

// Only initialize cursor if elements exist
if (cursorDot && cursorRing) {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Interactive elements hover effect
  const interactiveElements = document.querySelectorAll('a, button, .skill-tag, .project-card, .profile-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.style.transform = 'translate(-50%,-50%) scale(1.8)';
      cursorRing.style.borderColor = 'rgba(0,245,255,0.8)';
      cursorDot.style.transform = 'translate(-50%,-50%) scale(0.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.style.transform = 'translate(-50%,-50%) scale(1)';
      cursorRing.style.borderColor = 'rgba(0,245,255,0.5)';
      cursorDot.style.transform = 'translate(-50%,-50%) scale(1)';
    });
  });
}