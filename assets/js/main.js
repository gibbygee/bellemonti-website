// Bellemonti Website JavaScript
// Scroll effects and animations

document.addEventListener('DOMContentLoaded', function() {

  // Header scroll effect - add shadow on scroll
  const header = document.querySelector('.site-header');

  function updateHeaderOnScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeaderOnScroll);


  // Smooth scroll for anchor links with offset for fixed header
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const headerHeight = 127; // Fixed header height

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') return;

      const targetElement = document.querySelector(href);

      if (targetElement) {
        e.preventDefault();
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });


  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe elements with fade-in-visible class
  const fadeElements = document.querySelectorAll('.fade-in-visible');
  fadeElements.forEach(element => observer.observe(element));

});
