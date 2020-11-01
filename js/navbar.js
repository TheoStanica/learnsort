const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const mainBody = document.querySelector('body');
const nav = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('rotate');
  navlinks.classList.toggle('mobile');
  mainBody.classList.toggle('no-overflow');
  nav.classList.toggle('mobile');
});
