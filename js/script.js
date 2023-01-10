const btnRight = document.querySelector('.btnRight');
const slides = document.querySelectorAll('.slides__item');
let i = 0;

btnRight.addEventListener('click', function () {
  ++i;
  if (i >= slides.length) {
    slides[i - 1].classList.remove('slides__item-image');
    i = 0;
    slides[i].classList.add('slides__item-image');
  } else {
    slides[i - 1].classList.remove('slides__item-image');
    slides[i].classList.add('slides__item-image');
  }
});
