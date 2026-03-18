// FAQ Accordion Functionality

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const header = item.querySelector('.faq-item__header');
  
  if (header) {
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  }
});

// Keyboard accessibility
faqItems.forEach(item => {
  const header = item.querySelector('.faq-item__header');
  
  if (header) {
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');
    
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
    
    // Update aria-expanded when toggled
    const observer = new MutationObserver(() => {
      const isActive = item.classList.contains('active');
      header.setAttribute('aria-expanded', isActive.toString());
    });
    
    observer.observe(item, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
});
