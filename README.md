# Portfolio Website

A modern, responsive portfolio built with **React**, **Vite**, and **Tailwind CSS**. This project showcases your skills, experience, and projects with a clean UI and smooth animations.

## Features
- ⚡ Fast development with Vite
- 🎨 Styled with Tailwind CSS
- 💼 Modular React components (About, Skills, Experience, Work, Education, Contact, etc.)
- ✨ Modern UI animations (Framer Motion)
- 📱 Responsive design

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is in use).

## Adding Modern UI Animations

This project supports modern UI animations using [Framer Motion](https://www.framer.com/motion/), a popular React animation library.

### Install Framer Motion
```bash
npm install framer-motion
```

### Example: Fade-In Section Animation
In any React component (e.g., `About.jsx`):
```jsx
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="your-tailwind-classes"
    >
      {/* Section content */}
    </motion.section>
  );
}
```
You can use Framer Motion for page transitions, hover effects, and more. See the [Framer Motion docs](https://www.framer.com/motion/) for advanced usage.

## Customization
- Update content in the `src/components/` directory.
- Change styles using Tailwind utility classes in your JSX or in `src/index.css`.
- Add or modify images in `src/assets/`.

## License
This project is open source and free to use for personal portfolios.
