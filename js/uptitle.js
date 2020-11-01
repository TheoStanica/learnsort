export const updateSectionTitle = () => {
  const sectionTitle = document.querySelector('.section-title');
  const slides = getSlides();
  slides.forEach((slide) => {
    if (slide.style.display == 'block') {
      sectionTitle.innerText = slide.classList;
    }
  });
};
