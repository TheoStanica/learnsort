const getSlides = () => {
  return (slides = document.querySelectorAll('.learning section'));
};

const getCurrentSlide = () => {
  const data = localStorage.getItem('currentSlide');
  if (!data) {
    return 0;
  } else {
    return parseInt(data);
  }
};

const setCurrentSlide = (index) => {
  localStorage.setItem('currentSlide', index);
};

const changeSlide = (slides, slideIndexToChange) => {
  slides.forEach((slide, index) => {
    if (slideIndexToChange === index) {
      slide.style.display = 'block';
      setCurrentSlide(index);
    } else {
      slide.style.display = 'none';
    }
  });
};

const disableButton = (button) => {
  // button.style.display = 'none';
  button.style.border = '2px solid gray';
  button.style.color = 'gray';
  button.style.pointerEvents = 'none';
};
const enableButton = (button) => {
  // d4049a;
  // button.style.display = 'initial';
  button.style.border = '2px solid #d4049a';
  button.style.color = '#d4049a';
  button.style.pointerEvents = 'all';
};

const updateButtonsStatus = (currentSlide, slides) => {
  if (currentSlide === 0) {
    disableButton(backButton);
  } else {
    enableButton(backButton);
  }

  if (currentSlide === slides.length - 1) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const displayImplementation = (algosArray, algoToDisplay) => {
  algosArray.forEach((algo) => {
    if (algo !== algoToDisplay) {
      algo.style.display = 'none';
    } else {
      algo.style.display = 'block';
    }
  });
};

const activateButton = (buttonToActivate) => {
  const buttons = document.querySelectorAll('.algo-imp-nav button');
  buttons.forEach((button) => {
    if (button !== buttonToActivate) {
      button.classList.remove('active');
    } else {
      button.classList.add('active');
    }
  });
};

const updateSectionTitle = () => {
  const sectionTitle = document.querySelector('.section-title');
  const slides = getSlides();
  slides.forEach((slide) => {
    if (slide.style.display == 'block') {
      sectionTitle.innerText = slide.classList;
    }
  });
};

const animateLearningNav = () => {
  const learnNav = document.getElementById('learn-nav-hamburger');
  const list = document.querySelector('#learning-menu-extend ul');
  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
  if (learnNav.classList.contains('active')) {
    learnNav.classList.remove('active');
    gsap.to('#learn-nav-hamburger .line1', 0.3, { rotate: '0', y: 0 });
    gsap.to('#learn-nav-hamburger .line2', 0.3, { opacity: 1 });
    gsap.to('#learn-nav-hamburger .line3', 0.3, { rotate: '0', y: 0 });
    if (window.innerWidth < 500) {
      tl.fromTo('#learning-menu-extend', 1, { width: '100vw' }, { width: '0' });
    } else {
      tl.fromTo('#learning-menu-extend', 1, { width: '500px' }, { width: '0' });
    }
    tl.to('#learning-menu-extend ul', 0.5, { opacity: 0 }, '-=1');
    tl.to('#learning-menu-extend ul', 0.5, { clearProps: 'all' }, '-=0.5');
  } else {
    learnNav.classList.add('active');
    gsap.to('#learn-nav-hamburger .line1', 0.3, { rotate: '-135', y: 10 });
    gsap.to('#learn-nav-hamburger .line2', 0.3, { opacity: 0 });
    gsap.to('#learn-nav-hamburger .line3', 0.3, { rotate: '135', y: -10 });
    if (window.innerWidth < 500) {
      tl.fromTo('#learning-menu-extend', 1, { width: 0 }, { width: '100vw' });
    } else {
      tl.fromTo('#learning-menu-extend', 1, { width: 0 }, { width: '500px' });
    }
    tl.to('#learning-menu-extend ul', 0.5, { display: 'block' }, '-=0.5');
  }
};

const questionsController = () => {
  const questions = document.querySelectorAll('.question-card');

  questions.forEach((question, questionIndex) => {
    const answer = parseInt(question.children[1].getAttribute('data-ans'));
    const collection = question.children[1].children;
    const answerButtons = [...collection];
    answerButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (index === answer) {
          question.classList.remove('wrong');
          question.classList.add('correct');
          button.classList.add('correct');
        } else {
          if (!question.classList.contains('correct'))
            question.classList.add('wrong');
          button.classList.add('wrong');
        }
      });
    });
  });
};

const exerciseController = () => {
  const exercises = document.querySelectorAll('.exercise-card');

  exercises.forEach((exercise) => {
    const checkButton = exercise.children[2];
    const solutionInput = exercise.children[1];
    checkButton.addEventListener('click', () => {
      const givenSolution = solutionInput.value.replace(/\s+/g, '');
      const data = checkButton.getAttribute('data-ans');
      const correctAnswer = document
        .querySelector(`.${data}`)
        .children[0].children[0].textContent.replace(/\s+/g, '');

      if (givenSolution === correctAnswer) {
        exercise.classList.remove('wrong');
        exercise.classList.add('correct');
        checkButton.classList.remove('wrong');
        checkButton.classList.add('correct');
        solutionInput.readOnly = true;
      } else {
        if (!exercise.classList.contains('correct')) {
          exercise.classList.add('wrong');
          checkButton.classList.add('wrong');
        }
      }
    });
  });
};

const slideController = () => {
  const nextButton = document.getElementById('nextButton');
  const backButton = document.getElementById('backButton');
  const jsButton = document.getElementById('btn-js');
  const javaButton = document.getElementById('btn-java');
  const cplusButton = document.getElementById('btn-cplus');
  const pythonButton = document.getElementById('btn-python');
  const learnNav = document.getElementById('learn-nav-hamburger');
  const learnMenuLinks = document.querySelectorAll('#learning-menu-extend li');

  const algoImplementations = document.querySelectorAll('.algo-imp');

  const slides = getSlides();
  let currentSlide = getCurrentSlide();
  displayImplementation(
    algoImplementations,
    document.querySelector('.algo-js')
  );
  activateButton(jsButton);
  // gdgsdg
  updateSectionTitle();

  changeSlide(slides, currentSlide);
  updateButtonsStatus(currentSlide, slides);

  updateSectionTitle();

  nextButton.addEventListener('click', () => {
    let currentSlide = getCurrentSlide();
    changeSlide(slides, ++currentSlide);
    updateButtonsStatus(currentSlide, slides);
    updateSectionTitle();
  });

  backButton.addEventListener('click', () => {
    let currentSlide = getCurrentSlide();
    changeSlide(slides, --currentSlide);
    updateButtonsStatus(currentSlide, slides);
    updateSectionTitle();
  });

  jsButton.addEventListener('click', () => {
    displayImplementation(
      algoImplementations,
      document.querySelector('.algo-js')
    );
    jsButton.classList.toggle('active');
    activateButton(jsButton);
  });
  javaButton.addEventListener('click', () => {
    displayImplementation(
      algoImplementations,
      document.querySelector('.algo-java')
    );
    activateButton(javaButton);
  });
  cplusButton.addEventListener('click', () => {
    displayImplementation(
      algoImplementations,
      document.querySelector('.algo-cplus')
    );
    activateButton(cplusButton);
  });
  pythonButton.addEventListener('click', () => {
    displayImplementation(
      algoImplementations,
      document.querySelector('.algo-python')
    );
    activateButton(pythonButton);
  });
  learnNav.addEventListener('click', animateLearningNav);

  learnMenuLinks.forEach((link, linkIndex) => {
    link.addEventListener('click', () => {
      changeSlide(slides, linkIndex);
      updateButtonsStatus(linkIndex, slides);
      updateSectionTitle();
      animateLearningNav();
    });
  });

  questionsController();

  exerciseController();
};

slideController();
