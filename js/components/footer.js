// Footer component functionality
document.addEventListener('DOMContentLoaded', () => {
  const footerLinks = document.querySelectorAll('.footer-col a');
  
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});