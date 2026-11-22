const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const revealItems = document.querySelectorAll('.reveal');
const filterButtons = document.querySelectorAll('.filter-btn');
const eventCards = document.querySelectorAll('.event-card');
const messageForm = document.querySelector('#messageForm');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

function setHeaderState() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 10);
}

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });
}

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    eventCards.forEach((card) => {
      const types = (card.dataset.type || '').split(' ');
      const shouldShow = filter === 'all' || types.includes(filter);
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

if (messageForm) {
  messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(messageForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const subject = encodeURIComponent(`AIMMS website inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:AIMMS301@gmail.com?subject=${subject}&body=${body}`;
  });
}
