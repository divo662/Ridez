# RIDEZ - Modern Cycling Landing & E-Commerce

Welcome to **RIDEZ** — a modern, animated, and fully responsive landing page and e-commerce site for cycling brands, shops, and enthusiasts.

---

## 🚴 Project Overview

RIDEZ is a feature-rich React + Vite web app for showcasing bikes, parts, accessories, services, and blog content. It includes:
- Animated hero section with video carousel and interactive controls
- Product catalog with categories, details, and add-to-cart/favorites
- Shopping cart and favorites with localStorage persistence
- Authentication (login/register) with localStorage session
- Blog with article navigation and animated transitions
- Fully responsive, dark-themed, and visually engaging UI
- Smooth page and section animations throughout

---

## ✨ Features

- **Hero Section:**
  - Video carousel with play/pause, animated transitions, and multiple cycling videos
  - Animated entrance and exit transitions
  - Interactive navigation arrows and indicators
  - Smooth scroll to product sections
- **Navigation:**
  - Sticky header with logo, nav links, and functional icon buttons (search, favorites, account, cart)
  - Mobile-friendly menu
- **Product Catalog:**
  - Bikes and parts with categories, filtering, and animated grid
  - Product details with animated specs, features, and related products
  - Add to cart and add to favorites (with localStorage persistence)
- **Cart & Favorites:**
  - Full cart page with quantity, remove, and checkout (protected by login)
  - Favorites page for saved products (protected by login)
- **Authentication:**
  - Simple login/register with localStorage session
  - Account page with session management
- **Blog:**
  - Blog list with search, filter, and animated grid
  - Blog post page with animated content and navigation
- **Animations:**
  - Fade, slide, and scale transitions on all major sections and actions
  - Animated buttons, cards, and page transitions
- **Branding:**
  - Custom logo and favicon
  - Modern dark theme with orange accents
  - SEO and social meta tags

---

## 🛠️ Tech Stack

- **React** (with TypeScript)
- **Vite** (fast dev/build)
- **Tailwind CSS** (utility-first styling)
- **shadcn-ui** (UI primitives)
- **Radix UI** (accessible components)
- **Lucide React** (icons)
- **React Router** (routing)
- **LocalStorage** (cart, favorites, session)
- **Custom Animations** (CSS keyframes + Tailwind)

---

## 🚀 Getting Started

1. **Clone the repo:**
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the dev server:**
   ```sh
   npm run dev
   ```
4. **Open in your browser:**
   - Visit [http://localhost:8080](http://localhost:8080)

---

## 🖼️ Customization & Branding

- **Logo:** Update `src/assets/ridez logo.png` for your brand
- **Colors:** Edit `src/index.css` for theme colors
- **Hero Videos:** Update video URLs in `HeroSection.tsx`
- **Meta tags:** Edit `index.html` for SEO/social

---

## 🌟 Animations & UX

- All major sections and actions feature smooth fade, slide, and scale animations
- Hero section transitions out when navigating to products
- Animated grid and card entrances for products and blog
- Buttons and icons scale and glow on hover/active

---

## 🔒 Authentication & Persistence

- Login/register with localStorage session
- Cart and favorites persist across sessions
- Protected pages (cart, favorites, search) require login

---

## 📝 Blog & Content

- Blog list with search, filter, and animated navigation
- Blog post page with animated content and back navigation

---

## 📦 Deployment

- Build for production:
  ```sh
  npm run build
  ```
- Deploy the `dist/` folder to your favorite static host (Vercel, Netlify, etc.)

---

## 📄 License

This project is for educational and demo purposes. Customize and use for your own cycling brand or shop!

---

## 🙏 Credits

- Video by viresh studio from [Pexels](https://www.pexels.com/video/close-up-shot-of-a-bicycle-s-pedal-4147906/)
- Video by Tima Miroshnichenko from [Pexels](https://www.pexels.com/video/man-riding-a-bicycle-in-a-road-4957761/)
- Icons by [Lucide](https://lucide.dev/)
- UI by [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/)

---

For questions or help, open an issue or reach out to the project maintainer.
