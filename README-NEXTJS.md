# Plumbee Next.js Website

A production-grade, pixel-perfect landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Inspired by the Plumbee Webflow template.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Framer Motion** for smooth animations
- **Fully Responsive** - Mobile, tablet, and desktop
- **Accessible** - ARIA labels, keyboard navigation, focus states
- **Performance Optimized** - Server Components, Image optimization, lazy loading

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with fonts
├── page.tsx            # Main page assembly
└── globals.css         # Global styles

components/
├── layout/
│   ├── Navbar.tsx      # Sticky navigation
│   └── Footer.tsx       # Footer with newsletter
├── sections/           # All page sections
└── ui/                 # Reusable UI components

lib/
├── animations.ts       # Framer Motion variants
└── utils.ts           # Utility functions

data/
└── content.ts         # Static content data
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the brand colors:

```ts
colors: {
  brand: {
    amber: '#F5A623',
    dark: '#0D0D0D',
    // ...
  }
}
```

### Content

All content is centralized in `data/content.ts`. Update:
- `NAV_LINKS` - Navigation menu items
- `FEATURES` - Feature cards
- `STATS` - Statistics
- `SERVICES` - Service offerings
- `FAQS` - Frequently asked questions
- `BLOGS` - Blog posts

### Fonts

Fonts are configured in `app/layout.tsx`:
- **Syne** - Headings
- **Manrope** - Body text

## Sections

1. **Hero** - Main hero with form and tab switcher
2. **Social Proof** - Trust badges
3. **Features** - Why choose us
4. **About** - Company information
5. **Stats** - Animated statistics
6. **Services** - Service grid
7. **CTA Banner** - Call to action
8. **FAQ** - Accordion FAQ
9. **Blog** - Blog posts grid
10. **Contact** - Contact form

## Performance

- Server Components by default
- Client Components only where needed
- Next.js Image optimization
- Font optimization with `next/font`
- Lazy loading for images

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Skip-to-content link
- Proper form labels

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is provided as-is for use in your projects.
