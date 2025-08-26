/*========================Loading State========================*/
document.addEventListener('DOMContentLoaded', function() {
  // Add loading class to body
  document.body.classList.add('loading');
  
  // Remove loading class after page loads
  window.addEventListener('load', function() {
    setTimeout(() => {
      document.body.classList.remove('loading');
      document.body.classList.add('loaded');
    }, 500);
  });
});

/*========================Typing Animation========================*/
var typed = new Typed(".typing", {
  strings: ["", "Data Engineer / Kỹ sư dữ liệu", "Data Scientist / Nhà khoa học dữ liệu", "" ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1000,
  startDelay: 1000,
  loop: true,
});

/*========================Mobile Menu========================*/
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  
  // Add animation class
  toggleBtn.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(0deg)';
};

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  if (!toggleBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
    toggleBtn.style.transform = 'rotate(0deg)';
  }
});

/*========================Smooth Scrolling========================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu if open
      dropdownMenu.classList.remove('open');
      toggleBtnIcon.classList = 'fa-solid fa-bars';
      toggleBtn.style.transform = 'rotate(0deg)';
    }
  });
});

/*========================Scroll Animations========================*/
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

/*========================Parallax Effect========================*/
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.home-img img');
  
  parallaxElements.forEach(element => {
    const speed = 0.1;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});