// Hero component specific functionality
document.addEventListener('DOMContentLoaded', () => {
  const resumeBtn = document.getElementById('resumeBtn');
  const downloadResume = document.getElementById('downloadResume');
  
  if (resumeBtn && downloadResume) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      downloadResume.click();
    });
  }
});