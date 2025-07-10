document.addEventListener('DOMContentLoaded', () => {

  // --- LÓGICA DE LA BARRA DE NAVEGACIÓN ---
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // --- ANIMACIÓN DE APARICIÓN EN SCROLL ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Ejecutar al cargar para elementos ya visibles

  // --- VALIDACIÓN DEL FORMULARIO DE CONTACTO ---
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      // Resetear errores
      const errorSpans = form.querySelectorAll('.form-error');
      errorSpans.forEach(span => span.textContent = '');
      document.getElementById('form-success').textContent = '';

      // Validar nombre
      const nameInput = document.getElementById('name');
      if (nameInput.value.trim() === '') {
        document.getElementById('error-name').textContent = 'Por favor, ingresa tu nombre.';
        isValid = false;
      }

      // Validar email
      const emailInput = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === '') {
        document.getElementById('error-email').textContent = 'Por favor, ingresa tu email.';
        isValid = false;
      } else if (!emailRegex.test(emailInput.value)) {
        document.getElementById('error-email').textContent = 'Por favor, ingresa un email válido.';
        isValid = false;
      }

      // Validar mensaje
      const messageInput = document.getElementById('message');
      if (messageInput.value.trim() === '') {
        document.getElementById('error-message').textContent = 'Por favor, escribe tu mensaje.';
        isValid = false;
      }

      // Si es válido, mostrar éxito (en un entorno real, aquí se enviaría el form)
      if (isValid) {
        document.getElementById('form-success').textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
        form.reset();
      }
    });
  }

  // --- INICIALIZACIÓN DE PARTICLES.JS ---
  if (window.tsParticles && document.getElementById('particles-js')) {
    tsParticles.load('particles-js', {
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          repulse: { distance: 80, duration: 0.4 },
        },
      },
      particles: {
        color: { value: '#ffffff' },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: { default: 'bounce' },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80,
        },
        opacity: { value: 0.2 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    });
  }

});
