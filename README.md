# INIKOLA Website

A modern, parallax-scrolling website for INIKOLA's intelligent home automation system built with React, GSAP, and Tailwind CSS.

## 🚀 Features

- Smooth parallax scrolling with Lenis
- Animated robot guide using Spline 3D
- Dynamic background transitions
- GSAP scroll-triggered animations
- Fully responsive design
- Modern, minimalist UI inspired by josh.ai

## 📁 Project Structure

```
inikola-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation header (disappears on scroll)
│   │   ├── Robot.jsx               # 3D Robot component (Spline embed)
│   │   ├── BackgroundManager.jsx   # Manages parallax backgrounds
│   │   ├── HeroSection.jsx         # Landing section
│   │   ├── Section2.jsx            # The Invisible Intelligence
│   │   ├── Section3.jsx            # Smart Lighting
│   │   ├── Section4.jsx            # Climate Control
│   │   ├── Section5.jsx            # Security
│   │   ├── Section6.jsx            # Connected Ecosystem
│   │   ├── Section7.jsx            # Privacy
│   │   ├── Section8.jsx            # Experience INIKOLA (CTA)
│   │   └── Footer.jsx              # Footer section
│   ├── hooks/
│   │   ├── useScrollAnimations.js  # GSAP scroll animations
│   │   └── useSmoothScroll.js      # Lenis smooth scrolling
│   ├── styles/
│   │   └── index.css               # Global styles + Tailwind
│   ├── App.jsx                     # Main app component
│   └── main.jsx                    # Entry point
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Installation & Setup

### 1. Create Project Directory

```bash
mkdir inikola-website
cd inikola-website
```

### 2. Copy All Files

Copy all the provided files into your project directory following the structure above.

### 3. Install Dependencies

```bash
npm install
```

This will install:
- React & React DOM
- GSAP (for animations)
- Lenis (for smooth scrolling)
- Vite (build tool)
- Tailwind CSS (styling)
- And all dev dependencies

### 4. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 6. Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Change Robot

Edit `src/components/Robot.jsx` and replace the Spline URL:

```jsx
<iframe
  src="YOUR_SPLINE_URL_HERE"
  // ... rest of props
/>
```

### Update Backgrounds

Edit `src/components/BackgroundManager.jsx` to change background images:

```javascript
const backgrounds = [
  {
    id: 1,
    type: 'gradient',
    style: { backgroundImage: 'YOUR_GRADIENT' }
  },
  {
    id: 2,
    type: 'image',
    url: 'YOUR_IMAGE_URL'
  },
  // ...
];
```

### Modify Content

Each section has its own component in `src/components/`. Edit the relevant section file to update content.

### Adjust Animations

Edit `src/hooks/useScrollAnimations.js` to modify:
- Robot movement timing
- Scroll trigger points
- Animation durations
- Easing functions

### Change Colors

Update `tailwind.config.js`:

```javascript
colors: {
  inikola: {
    purple: '#8B7FD5',  // Your purple
    cyan: '#00D9FF',    // Your cyan
  }
}
```

## 📦 Key Dependencies

- **React 18.2.0** - UI library
- **GSAP 3.12.5** - Animation library
- **Lenis 1.0.42** - Smooth scrolling
- **Tailwind CSS 3.4.0** - Utility-first CSS
- **Vite 5.0.8** - Fast build tool

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Load**: Robot and backgrounds load progressively
3. **GPU Acceleration**: All animations use `transform3d`
4. **Code Splitting**: Vite automatically splits code
5. **Preload Fonts**: Fonts are preloaded in index.html

## 🐛 Troubleshooting

### Header not disappearing on scroll
Check that the scroll event listener in `Header.jsx` is working. Open DevTools and check for console errors.

### Robot not moving
Verify GSAP ScrollTrigger is imported and registered in `useScrollAnimations.js`.

### Spline watermark showing
The free Spline plan shows watermarks. Upgrade to Pro or use the React Three Fiber alternative (see prompt document).

### Animations are janky
- Reduce scroll scrub value in animations (lower = smoother)
- Check GPU usage in DevTools Performance tab
- Simplify background images (use smaller sizes)

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+
- Chrome Android 90+

## 📄 License

© 2025 INIKOLA. All rights reserved.

## 🤝 Contributing

This is a private project for INIKOLA. For questions or contributions, contact the development team.

## 📞 Support

For technical support or questions:
- Email: dev@inikola.com
- Documentation: [Internal Wiki]

---

Built with ❤️ by the INIKOLA Team
