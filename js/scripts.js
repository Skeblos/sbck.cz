// Example micro-animation: button pulse on hover
const btn = document.querySelector('.btn');
btn.addEventListener('mouseenter', () => {
  btn.style.transform = 'scale(1.1)';
  btn.style.transition = 'transform 0.3s ease';
});
btn.addEventListener('mouseleave', () => {
  btn.style.transform = 'scale(1)';
});
