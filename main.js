// Simple parallax + smooth reveal on scroll (exact same feel)
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll('.project');
  parallax.forEach(p => {
    const speed = 0.5;
    p.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Optional: add subtle mouse parallax if you want (original site has it)
document.addEventListener('mousemove', (e) => {
  const layers = document.querySelectorAll('.project');
  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed') || 0.05;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});
