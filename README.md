# Mohanlal Manna — Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

**Live Demo:** _[ deployed URL]_

---

## Tech Stack

| Category       | Technology                                          |
| -------------- | --------------------------------------------------- |
| Framework      | [React 19](https://react.dev/)                      |
| Build Tool     | [Vite 7](https://vite.dev/)                         |
| Styling        | [Tailwind CSS 4](https://tailwindcss.com/)          |
| Animations     | [Framer Motion](https://motion.dev/)                |
| Charts         | [Recharts](https://recharts.org/) (Radar Chart)     |
| Icons          | [React Icons](https://react-icons.github.io/)       |
| Type Animation | [react-type-animation](https://www.npmjs.com/package/react-type-animation) |
| Contact Form   | [Web3Forms API](https://web3forms.com/)             |
| Linting        | [ESLint](https://eslint.org/)                       |

---

## Features

- **Single-Page Application** — smooth anchor-based navigation with no page reloads
- **Responsive Design** — mobile hamburger menu, adaptive grid layouts across all breakpoints
- **Glassmorphism UI** — backdrop blur, gradient backgrounds, and glow effects
- **Framer Motion Animations** — scroll-triggered fade, slide, and scale transitions throughout
- **Interactive Skill Radar Chart** — animated spider chart with hover tooltips and glow effects
- **Project Showcase** — featured projects with alternating layouts + noteworthy project cards
- **Contact Form** — integrated with Web3Forms API with toast notifications
- **Back to Top Button** — appears on scroll for quick navigation
- **Custom Fonts** — Nativera Bold and GC EpicPro Regular
- **Type Animation** — rotating taglines on the hero section

---

## Sections

| Section    | Description                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| **Home**   | Hero with type animation, profile image, CTA buttons (Projects & Resume)    |
| **About**  | Journey story, education details, and skill area cards                      |
| **Skills** | Interactive radar chart, category sidebar, floating particle background     |
| **Projects** | Featured project cards with tech tags + additional noteworthy projects    |
| **Contact** | Contact form, email/phone/location info, social media links                |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/MohanlalManna24/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_SECRET_KEY=web3forms_access_key
```

Get your access key from [Web3Forms](https://web3forms.com/).

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173`.

---

## Project Structure

```
src/
├── assets/fonts/          # Custom fonts
├── components/
│   ├── BackToTop.jsx      # Scroll-to-top button
│   ├── Footer.jsx         # Site footer
│   ├── Navbar.jsx         # Responsive navigation bar
│   └── SocialMediaBtn.jsx # Social media icon links
├── layout/
│   └── Layout.jsx         # Layout wrapper (max-width, padding)
├── pages/
│   ├── Home.jsx           # Hero / landing section
│   ├── About.jsx          # About me & education
│   ├── Skills.jsx         # Skills section with radar chart
│   ├── SkillRadar.jsx     # Recharts radar chart component
│   ├── SkillIcon.jsx      # Skill icon with tooltip
│   ├── SkillsData.js      # Skills configuration data
│   ├── Projects.jsx       # Project showcase
│   └── Contact.jsx        # Contact form & info
├── App.jsx                # Root component
├── App.css                # Global styles
├── index.css              # Base styles
└── main.jsx               # Entry point
```

---

> Built with React + Vite + Tailwind CSS
