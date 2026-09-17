const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

// Small entrance effect for cards as they enter the viewport.
const cards = document.querySelectorAll('.game-card, .highlight');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
cards.forEach(card => { card.style.opacity = '0'; card.style.transform = 'translateY(18px)'; observer.observe(card); });
const style = document.createElement('style');
style.textContent = '.game-card,.highlight{transition:opacity .6s ease,transform .6s ease,border-color .25s}.game-card.visible,.highlight.visible{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(style);
