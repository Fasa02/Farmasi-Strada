
const links = document.querySelectorAll('.links a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('active');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('active');
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  
  // Toggle menu untuk mobile
  menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
  });
  
  // Toggle dropdown
  dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", function () {
          const dropdownMenu = this.nextElementSibling;
          dropdownMenu.classList.toggle("open");
      });
  });
});




