# Plumbee Website Template

A modern, responsive website template for plumbing and home service businesses. This template replicates the design and functionality of the Plumbee Webflow template using pure HTML, CSS, and JavaScript.

## Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **All Essential Sections**:
  - Sticky navigation with mobile menu
  - Hero section with trust indicators
  - Services showcase
  - About/Why Choose Us section
  - Process/How It Works
  - Customer testimonials
  - FAQ accordion
  - Contact form with validation
  - Comprehensive footer
- **Performance Optimized** - Lightweight, fast-loading code
- **Accessibility** - Semantic HTML and keyboard navigation support
- **No Dependencies** - Pure vanilla JavaScript, no frameworks required

## Project Structure

```
electrician-template/
├── index.html              # Main homepage
├── css/
│   ├── reset.css          # CSS reset/normalize
│   ├── animations.css     # Animation keyframes and transitions
│   └── style.css          # Main stylesheet
├── js/
│   ├── main.js            # Navigation and core functionality
│   ├── animations.js      # Scroll animations and interactions
│   ├── forms.js           # Form validation and handling
│   └── faq.js             # FAQ accordion functionality
├── images/                # Image assets directory
└── README.md              # This file
```

## Getting Started

1. **Clone or download** this template to your local machine
2. **Open `index.html`** in a web browser to view the template
3. **Customize** the content, colors, and styling to match your brand

## Customization Guide

### Colors

Edit the CSS variables in `css/style.css` to change the color scheme:

```css
:root {
  --primary-color: #0066cc;      /* Main brand color */
  --primary-dark: #0052a3;       /* Darker shade for hover states */
  --primary-light: #3385d6;      /* Lighter shade */
  --secondary-color: #ff6600;    /* Accent color */
  --text-color: #333333;         /* Main text color */
  --bg-color: #ffffff;           /* Background color */
  /* ... more variables */
}
```

### Content

1. **Company Information**: Update the company name, phone number, email, and address in `index.html`
2. **Services**: Modify the services section to match your offerings
3. **Testimonials**: Replace with real customer reviews
4. **FAQ**: Update questions and answers to reflect your business
5. **Footer Links**: Customize service areas and social media links

### Images

1. Add your logo and images to the `images/` directory
2. Update image paths in the HTML where needed
3. For the hero section, you can add a background image by modifying the `.hero` class in `css/style.css`

### Form Submission

The contact form currently uses a simulated submission. To connect it to a real backend:

1. Open `js/forms.js`
2. Find the `handleFormSubmit` function
3. Replace the setTimeout simulation with an actual API call:

```javascript
fetch('/api/contact', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  showFormMessage('Thank you! Your message has been sent successfully.', 'success');
  form.reset();
})
.catch(error => {
  showFormMessage('Sorry, there was an error. Please try again.', 'error');
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

## Key Sections Explained

### Navigation
- Sticky header that changes appearance on scroll
- Mobile hamburger menu
- Smooth scroll navigation to sections

### Hero Section
- Large, attention-grabbing section
- Trust indicators (years, customers, ratings)
- Primary call-to-action buttons

### Services
- Grid layout showcasing services
- Hover effects on service cards
- Links to contact form

### About Section
- Company value proposition
- Key differentiators with icons
- Statistics/metrics display

### Process
- Step-by-step visualization
- Numbered steps with descriptions

### Testimonials
- Customer review cards
- Star ratings
- Customer information

### FAQ
- Accordion-style questions
- Smooth expand/collapse animations
- Keyboard accessible

### Contact Form
- Real-time validation
- Service selection dropdown
- Success/error messaging

## Performance Tips

1. **Optimize Images**: Compress images before adding them to the `images/` folder
2. **Lazy Loading**: Consider adding lazy loading for images below the fold
3. **Minify CSS/JS**: Minify files for production deployment
4. **CDN**: Consider hosting static assets on a CDN

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states for interactive elements
- Alt text structure for images (add alt attributes to your images)

## License

This template is provided as-is for use in your projects. Feel free to modify and customize as needed.

## Support

For questions or issues, please refer to the code comments or customize as needed for your specific requirements.

## Credits

Template inspired by the Plumbee Webflow template, recreated with pure HTML, CSS, and JavaScript.
