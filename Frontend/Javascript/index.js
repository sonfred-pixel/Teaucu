/*The js for the humber in small screens */
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('show');
}


/*The js for the image and dots changes */
const slides = document.querySelector('.slides');
const dotsContainer = document.querySelector('.dots');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;
let autoSlideInterval;

  function createDots() {
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        goToSlide(i);
        resetAutoSlide();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots(index) {
    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots(index);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    goToSlide(currentIndex);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 2000); 
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  document.querySelector('.arrow.left').addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  document.querySelector('.arrow.right').addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  createDots();
  startAutoSlide();

  /*The end of the js for images and dots */

      // Function to animate the number counter
    function animateCounter(id, endValue, speed) {
      let count = 0;
      const counter = document.getElementById(id);
      const interval = setInterval(() => {
        if(count < endValue) {
          count++;
          counter.innerHTML = count + " +";
        } else {
          clearInterval(interval);
        }
      }, speed);
    }

    // Observer to detect when the counters are in the viewport
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the counter is visible
    };

    // Callback function for the observer
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          // Start the counters when they become visible
          if (entry.target.id === 'membersCount') {
            animateCounter("membersCount", 70, 100);  // Slower count for MEMBERS
          } else if (entry.target.id === 'alumniCount') {
            animateCounter("alumniCount", 1000, 30);  // Faster count for ALUMNI
          }
        }
});
    };

    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(callback, observerOptions);

    // Observe the counter elements
    observer.observe(document.getElementById('membersCount'));
    observer.observe(document.getElementById('alumniCount'));


    // the time at the last part of the year copyright
    document.getElementById("year").textContent = new Date().getFullYear();