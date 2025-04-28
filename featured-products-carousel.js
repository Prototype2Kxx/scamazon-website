const sliderTrack = document.querySelector('.featured-products-carousel .slider-track');
const productCards = document.querySelectorAll('.featured-products-carousel .product-card');
const prevBtn = document.querySelector('.featured-products-carousel .prev-btn');
const nextBtn = document.querySelector('.featured-products-carousel .next-btn');

let currentSlide = 0;
const totalSlides = productCards.length;

function updateSliderPosition() {
  const slideWidth = productCards[0].offsetWidth;
  sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function goToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSliderPosition();
}

function goToPrevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
}

nextBtn.addEventListener('click', goToNextSlide);
prevBtn.addEventListener('click', goToPrevSlide);

// Auto-slide every 4 seconds
setInterval(goToNextSlide, 4000);

// Optional: Make it responsive on resize
window.addEventListener('resize', updateSliderPosition);
