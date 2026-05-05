// Skill Bars Animation
document.addEventListener('DOMContentLoaded', () => {
  const skillBarsGrids = document.querySelectorAll('.skill-bars-grid');
  
  if (skillBarsGrids.length > 0) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const fills = e.target.querySelectorAll('.skill-bar-fill');
          fills.forEach(bar => {
            const width = bar.dataset.width;
            if (width) bar.style.width = width + '%';
          });
          barObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    
    skillBarsGrids.forEach(el => barObserver.observe(el));
  }
});