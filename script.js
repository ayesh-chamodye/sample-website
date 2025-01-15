document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const appointment = document.getElementById('appointment').value;
  
    const message = `
      Thank you, ${name}! Your request for ${service} on ${appointment} has been received.
      We will contact you at ${email} soon.
    `;
  
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.classList.remove('hidden');
    formMessage.style.marginTop = '20px';
    formMessage.style.color = '#0073e6';
  });
  