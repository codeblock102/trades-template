// Form Validation and Handling

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', handleFormSubmit);
  
  // Real-time validation
  const formInputs = contactForm.querySelectorAll('input, textarea, select');
  formInputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearError);
  });
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();
  const fieldName = field.name;
  const errorElement = field.parentElement.querySelector('.error-message');
  
  let isValid = true;
  let errorMessage = '';
  
  // Remove previous error styling
  field.classList.remove('error');
  
  // Required field validation
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required';
  }
  
  // Email validation
  if (fieldName === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    }
  }
  
  // Phone validation
  if (fieldName === 'phone' && value) {
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
      isValid = false;
      errorMessage = 'Please enter a valid phone number';
    }
  }
  
  // Display error
  if (!isValid) {
    field.classList.add('error');
    if (errorElement) {
      errorElement.textContent = errorMessage;
    }
  } else {
    if (errorElement) {
      errorElement.textContent = '';
    }
  }
  
  return isValid;
}

function clearError(e) {
  const field = e.target;
  field.classList.remove('error');
  const errorElement = field.parentElement.querySelector('.error-message');
  if (errorElement) {
    errorElement.textContent = '';
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const formMessage = document.getElementById('form-message');
  
  // Validate all fields
  let isFormValid = true;
  const requiredFields = form.querySelectorAll('[required]');
  
  requiredFields.forEach(field => {
    if (!validateField({ target: field })) {
      isFormValid = false;
    }
  });
  
  if (!isFormValid) {
    showFormMessage('Please fill in all required fields correctly.', 'error');
    return;
  }
  
  // Show loading state
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;
  
  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    // In a real application, you would send the data to a server:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //   showFormMessage('Thank you! Your message has been sent successfully.', 'success');
    //   form.reset();
    // })
    // .catch(error => {
    //   showFormMessage('Sorry, there was an error sending your message. Please try again.', 'error');
    // })
    // .finally(() => {
    //   submitButton.textContent = originalButtonText;
    //   submitButton.disabled = false;
    // });
    
    // For demo purposes, simulate success
    showFormMessage('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
    form.reset();
    submitButton.textContent = originalButtonText;
    submitButton.disabled = false;
  }, 1500);
}

function showFormMessage(message, type) {
  const formMessage = document.getElementById('form-message');
  if (formMessage) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      formMessage.className = 'form-message';
      formMessage.textContent = '';
    }, 5000);
  }
}

// Add error styling to CSS via JavaScript (if not already in CSS)
const style = document.createElement('style');
style.textContent = `
  .form-group input.error,
  .form-group select.error,
  .form-group textarea.error {
    border-color: #dc3545;
  }
`;
document.head.appendChild(style);
