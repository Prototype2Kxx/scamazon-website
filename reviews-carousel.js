const reviews = document.querySelectorAll(".review-carousel .review");
let current = 0;

function showNextReview() {
  reviews[current].classList.remove("active");
  current = (current + 1) % reviews.length;
  reviews[current].classList.add("active");
}

// Initialize
reviews[current].classList.add("active");

// Change every 4 seconds
setInterval(showNextReview, 4000);
