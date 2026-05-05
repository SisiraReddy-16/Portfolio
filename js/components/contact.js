// Contact Form
window.submitForm = function() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const success = document.getElementById('formSuccess');
  
  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }
  
  if (!name.value || !email.value || !message.value) {
    alert('Please fill in all required fields.');
    return;
  }
  
  if (success) {
    success.classList.add('show');
    name.value = '';
    email.value = '';
    const subject = document.getElementById('subject');
    if (subject) subject.value = '';
    message.value = '';
    
    setTimeout(() => success.classList.remove('show'), 4000);
  }
};