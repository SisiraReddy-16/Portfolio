// Main initialization script
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio initialized');
  
  // Resume download handler
  const downloadBtn = document.getElementById('downloadResume');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const originalText = downloadBtn.innerHTML;
      downloadBtn.innerHTML = '✓ Downloading...';
      setTimeout(() => { 
        downloadBtn.innerHTML = originalText;
      }, 2000);
    });
  }
  
  // Initialize scroll reveal for any dynamically added elements
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0 && !window.revealObserver) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
    window.revealObserver = observer;
  }
});