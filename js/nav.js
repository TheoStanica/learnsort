const navigationToggle = (e) => {
  if (!e.target.classList.contains('active')) {
    e.target.classList.add('active');
    gsap.to('.line1', 0.3, { rotate: '-135', y: 12 });
    gsap.to('.line2', 0.2, { x: '50%', opacity: 0 });
    gsap.to('.line3', 0.3, { rotate: '135', y: -12 });
    gsap.to('.nav-links', 1, { x: 0, ease: Bounce.easeOut });
  } else {
    e.target.classList.remove('active');
    gsap.to('.line1', 0.3, { rotate: '0', y: 0 });
    gsap.to('.line2', 0.3, { x: '0', opacity: 1 });
    gsap.to('.line3', 0.3, { rotate: '0', y: 0 });
    gsap.to('.nav-links', 0.5, { x: '-100%', clearProps: 'all' });
  }
};

let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', navigationToggle);
