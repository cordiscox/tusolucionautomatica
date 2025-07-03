// Animación fade-in al hacer scroll
function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Placeholder para lógica de chatbot flotante
// Aquí puedes integrar Tawk.to, Crisp, Chatbase, etc.

// Validación básica de formulario de contacto
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    // Limpiar errores
    document.getElementById('error-name').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-message').textContent = '';
    document.getElementById('form-success').textContent = '';

    // Validar nombre
    const name = form.name.value.trim();
    if (!name) {
      document.getElementById('error-name').textContent = 'Por favor ingresa tu nombre.';
      valid = false;
    }
    // Validar email
    const email = form.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      document.getElementById('error-email').textContent = 'Por favor ingresa tu email.';
      valid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById('error-email').textContent = 'Ingresa un email válido.';
      valid = false;
    }
    // Validar mensaje
    const message = form.message.value.trim();
    if (!message) {
      document.getElementById('error-message').textContent = 'Por favor escribe tu mensaje.';
      valid = false;
    }
    // Si todo es válido, mostrar mensaje de éxito
    if (valid) {
      document.getElementById('form-success').textContent = '¡Mensaje enviado! Nos pondremos en contacto pronto.';
      form.reset();
    }
  });
}

// Lógica acordeón FAQ
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(btn => {
  btn.addEventListener('click', function () {
    const item = btn.parentElement;
    // Cerrar otros
    document.querySelectorAll('.faq-item').forEach(i => {
      if (i !== item) i.classList.remove('open');
    });
    // Toggle actual
    item.classList.toggle('open');
  });
}); 