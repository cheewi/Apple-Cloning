
document.addEventListener('DOMContentLoaded', () => {
    const selectElement = (element) => document.querySelector(element);
    const hamburger = selectElement('.hamburger')
    console.log(hamburger)
    hamburger.addEventListener('click', () => {
    console.log(1)
    selectElement('header').classList.toggle('active')
})
});


// const autoScroll = document.querySelector('.auto-scroll-content');
// const playButton = document.getElementById('cute-button');
// let isAnimating = true; 
// const buttonPause = document.getElementById('button2')
// const buttonPlay = document.getElementById('button1')
// playButton.addEventListener('click', () => {
//   if (isAnimating) {
//     autoScroll.style.animationPlayState = 'paused'; 
//     isAnimating = false;
//     buttonPause.style.display = 'flex'
//     buttonPlay.style.display = 'none'
//   } else {
//     autoScroll.style.animationPlayState = 'running'; 
//     isAnimating = true;
//     buttonPause.style.display = 'none'
//     buttonPlay.style.display = 'flex'
//   }
// });

// })

// carousel 

// const cardArray = [
//   'images/carousel/argylle/argylle-1250x703.jpg',
//   'images/carousel/franklin/1250x703.jpg',
//   'images/carousel/friday-night-baseball/1250x703.jpg',
//   'images/carousel/masters-of-the-air/1250x703.jpg',
//   'images/carousel/mls-season-pass/mls-season-pass-1250x703.jpg',
//   'images/carousel/morning-show/1250x703.jpg',
//   'images/carousel/palm-royale/1250x703.jpg',
//   'images/carousel/sugar/1250x703.jpg',
//   'images/carousel/ted-lasso/1250x703.jpg',
//   'images/carousel/argylle/argylle-1250x703.jpg',
//   'images/carousel/franklin/1250x703.jpg',
//   'images/carousel/friday-night-baseball/1250x703.jpg',
//   'images/carousel/masters-of-the-air/1250x703.jpg',
//   'images/carousel/mls-season-pass/mls-season-pass-1250x703.jpg',
//   'images/carousel/morning-show/1250x703.jpg',
//   'images/carousel/palm-royale/1250x703.jpg',
//   'images/carousel/sugar/1250x703.jpg',
//   'images/carousel/ted-lasso/1250x703.jpg'
// ];

// let current = 0;
// let sliderContainer = document.querySelector('.slider');
// let pillContainer = document.querySelector('.pill');

// function addImage(imageUrl, index) {
//   const img = document.createElement('img');
//   img.src = imageUrl;
//   img.alt = '';
//   img.className = `slide object-cover   ${
//     index === current ? 'opacity-100' : 'opacity-50'
//   }`;
//   sliderContainer.appendChild(img);
// }

// function addPills() {
//   cardArray.forEach((_, index) => {
//     const btn = document.createElement('button');
//     btn.className = `w-2 h-2 rounded-full ${
//       index === current ? 'bg-[#ccc]' : 'bg-[#666]'
//     }`;
//     btn.dataset.index = index; 
//     btn.addEventListener('click', () => {
//       current = index;
//       updateSlides();
//       sliderContainer.style.transform = `translateX(calc(-${current} * 100% - ${current}rem))`;
//     });
//     pillContainer.appendChild(btn);
//   });
// }

// function updateSlides() {
//   const slides = document.querySelectorAll('.slide');
//   const pills = document.querySelectorAll('.pill button');

//   slides.forEach((slide, index) => {
//     slide.className = `slide object-cover   duration-300 ${
//       index === current ? 'opacity-100' : 'opacity-50'
//     }`;
//   });

//   pills.forEach((pill, index) => {
//     pill.className = `w-2 h-2 rounded-full ${
//       index === current ? 'bg-[#ccc]' : 'bg-[#666]'
//     }`;
//   });
// }

// const onPrevClick = () => {
//   if (current > 0) {
//     current--;
//     updateSlides();
//     sliderContainer.style.transform = `translateX(calc(-${current} * 100% - ${current}rem))`;
//   }
// };

// const onNextClick = () => {
//   if (current < cardArray.length - 1) {
//     current++;
//     updateSlides();
//     sliderContainer.style.transform = `translateX(calc(-${current} * 100% - ${current}rem))`;
//   }
// };

// cardArray.forEach((url, index) => addImage(url, index));
// addPills();

