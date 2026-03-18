// Scroll Animations

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      // Optional: Unobserve after animation to improve performance
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.animate-on-scroll, .fade-in');
  
  animateElements.forEach(el => {
    observer.observe(el);
  });
});

// Add stagger animation delay to service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// Add stagger animation delay to process steps
const processSteps = document.querySelectorAll('.process-step');
processSteps.forEach((step, index) => {
  step.style.animationDelay = `${index * 0.15}s`;
});

// Add stagger animation delay to testimonial cards
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// Parallax effect for hero section (optional)
let heroParallax = false;
const hero = document.querySelector('.hero');

if (hero && window.innerWidth > 768) {
  heroParallax = true;
  
  window.addEventListener('scroll', () => {
    if (heroParallax) {
      const scrolled = window.pageYOffset;
      const heroContent = hero.querySelector('.hero__content');
      
      if (heroContent && scrolled < hero.offsetHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / hero.offsetHeight) * 0.5;
      }
    }
  });
}

// Disable parallax on mobile
window.addEventListener('resize', () => {
  heroParallax = window.innerWidth > 768;
});
