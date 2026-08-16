/*The js for the humber in small screens */
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('show');
}



const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
      });
    }

    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 4000); // Change every 4 seconds

// the time at the last part of the year copyright
document.getElementById("year").textContent = new Date().getFullYear();
  