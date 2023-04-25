document.addEventListener('DOMContentLoaded', () =>{
    const carouselSlide = document.querySelector('.carouselSlide');
    const carouselImages = document.querySelectorAll('.carouselSlide img');
    const slideWidth = carouselImages[0].clientWidth;
  
  let counter = 1;
  setInterval(() =>{
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  counter++;
  if (counter === carouselImages.length){
      counter = 0;
    }
  }, 3000);
});
  