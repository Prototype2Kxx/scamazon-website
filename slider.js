let currentIndex = 0;

function slide(direction) {
  const sliderTrack = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".product-card");
  const slideWidth = slides[0].offsetWidth;
  const totalSlides = slides.length;

  // Calculate new index
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Loop to last slide
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // Loop to first slide
  }

  // Move the track
  sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}



function slideCategory(category, direction) {
    const sliderTrack = document.getElementById(`${category}-slider`);
    const slides = sliderTrack.querySelectorAll(".category-card");
    const slideWidth = slides[0].offsetWidth + 16; // Include gap between cards
    const visibleSlides = Math.floor(sliderTrack.parentElement.offsetWidth / slideWidth);
  
    // Current translate value
    let currentTransform = getComputedStyle(sliderTrack).transform;
    let currentTranslateX = currentTransform !== "none" ? parseFloat(currentTransform.split(",")[4]) : 0;
  
    // Calculate new translate value
    let newTranslateX = currentTranslateX + direction * slideWidth * visibleSlides;
  
    // Limit sliding to prevent showing empty space
    const maxTranslateX = 0;
    const minTranslateX = -(slideWidth * (slides.length - visibleSlides));
  
    if (newTranslateX > maxTranslateX) newTranslateX = maxTranslateX;
    if (newTranslateX < minTranslateX) newTranslateX = minTranslateX;
  
    // Apply new transform
    sliderTrack.style.transform = `translateX(${newTranslateX}px)`;
  }
  