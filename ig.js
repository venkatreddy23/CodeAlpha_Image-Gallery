// script.js
const images = document.querySelectorAll(".gallery img");
const thumbnails = document.querySelectorAll(".thumbnails img");
let currentIndex = 0;

function showImage(index) {
  // Hide all images
  images.forEach((img) => img.classList.remove("active"));
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));

  // Show the selected image
  images[index].classList.add("active");
  thumbnails[index].classList.add("active");

  currentIndex = index;
}

// Next button functionality
document.querySelector(".next-btn").addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % images.length;
  showImage(nextIndex);
});

// Previous button functionality
document.querySelector(".prev-btn").addEventListener("click", () => {
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(prevIndex);
});

// Initialize gallery
showImage(currentIndex);