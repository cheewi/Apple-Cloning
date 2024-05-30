
// carousel 

const largeImages = [
    'images/carousel/argylle/argylle-1250x703.jpg',
    'images/carousel/franklin/1250x703.jpg',
    'images/carousel/friday-night-baseball/1250x703.jpg',
    'images/carousel/masters-of-the-air/1250x703.jpg',
    'images/carousel/mls-season-pass/mls-season-pass-1250x703.jpg',
    'images/carousel/morning-show/1250x703.jpg',
    'images/carousel/palm-royale/1250x703.jpg',
    'images/carousel/sugar/1250x703.jpg',
    'images/carousel/ted-lasso/1250x703.jpg'
];

const mediumImages = [
    'images/carousel/argylle/argylle-689x387.jpg',
    'images/carousel/franklin/689x387.jpg',
    'images/carousel/friday-night-baseball/689x387.jpg',
    'images/carousel/masters-of-the-air/689x387.jpg',
    'images/carousel/mls-season-pass/mls-season-pass-689x387.jpg',
    'images/carousel/morning-show/689x387.jpg',
    'images/carousel/palm-royale/689x387.jpg',
    'images/carousel/sugar/689x387.jpg',
    'images/carousel/ted-lasso/689x387.jpg'
];

const smallImages = [
    'images/carousel/argylle/argylle-274x593.jpg',
    'images/carousel/franklin/274x593.jpg',
    'images/carousel/friday-night-baseball/baseball-274x593.jpg',
    'images/carousel/masters-of-the-air/master-274x593.jpg',
    'images/carousel/mls-season-pass/mls-season-pass-274x593.jpg',
    'images/carousel/morning-show/274x593.jpg',
    'images/carousel/palm-royale/274x593.jpg',
    'images/carousel/sugar/sugar-274x593.jpg',
    'images/carousel/ted-lasso/ted-lasso-274x593.jpg'
];

let current = 1;
let isAnimating = false;
let pill = document.querySelector('.pill');
let slide = document.querySelector('.carousel');
let cardArray = getCardArray();
const gap = 16; 
let slideWidth = 0; 

function getCardArray() {
  if (window.matchMedia('(min-width: 1920px)').matches) {
      return largeImages;
  } else if (window.matchMedia('(min-width: 834px)').matches) {
      return mediumImages;
  } else {
      return smallImages;
  }
}

window.addEventListener('resize', () => {
  const newCardArray = getCardArray();
    if (cardArray !== newCardArray) {
      cardArray = newCardArray;
      slide.innerHTML = '';
      pill.innerHTML = '';
      cloneSlides();
      addPills();
      updateSlides();
    } else {
      updateSlides();
    }
});

function addImage(imageUrl, index) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = `slide object-cover ${index === current ? 'no-blur' : 'blur'}`;
    slide.appendChild(img);
}

function addPills() {
  cardArray.forEach((_, index) => {
      const btn = document.createElement('button');
      btn.dataset.index = index + 1;
      btn.addEventListener('click', () => {
          if (!isAnimating) {
              current = index + 1;
              updateSlides();
          }
      });
      pill.appendChild(btn);
  });
}

function cloneSlides() {
  const firstSlide = cardArray[0];
  const lastSlide = cardArray[cardArray.length - 1];

  addImage(lastSlide, -1);
  cardArray.forEach((url, index) => addImage(url, index + 1));
  addImage(firstSlide, cardArray.length);
}

function updateSlides() {
    isAnimating = true;
    const slides = document.querySelectorAll('.slide');
    slideWidth = slides[0].clientWidth;

    const totalSlideWidth = slideWidth + (2 * gap); 
    const offset = -(current * totalSlideWidth - totalSlideWidth);

    slide.style.transition = 'transform 0.3s';
    slide.style.transform = `translateX(${offset}px)`;

    slides.forEach((slide, index) => {
      slide.className = `slide object-cover duration-300 ${index === current ? 'no-blur' : 'blur'}`;
    });

    const pills = document.querySelectorAll('.pill button');
    pills.forEach((pill, index) => {
      pill.className = `${index === current - 1 ? 'color1' : 'color2'}`;
    });

    slide.addEventListener('transitionend', () => {
      isAnimating = false;
      if (current === 0) {
        slide.style.transition = 'none';
        current = cardArray.length;
        slide.style.transform = `translateX(calc(-${current} * ${totalSlideWidth}px - ${totalSlideWidth / 3}px)`;
      } else if (current === cardArray.length + 1) {
        slide.style.transition = 'none';
        current = 1;
        slide.style.transform = `translateX(calc(-${current} * ${totalSlideWidth}px - ${totalSlideWidth / 3}px)`;
      }
    }, { once: true });
}

const prevSlide = () => {
  if (!isAnimating) {
    current--;
    updateSlides();
  }
};
const nextSlide = () => {
  if (!isAnimating) {
    current++;
    updateSlides();
  }
};
slide.innerHTML = '';
cloneSlides();
addPills();
updateSlides();
