document.addEventListener('DOMContentLoaded', () => {
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = 1;
entry.target.style.transform = 'translateY(0)';
}
});
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

const menuToggle = document.querySelector('.menu-toggle');
const body = document.querySelector('body');

menuToggle.addEventListener('click', () => {
body.classList.toggle('menu-open');
});
});
