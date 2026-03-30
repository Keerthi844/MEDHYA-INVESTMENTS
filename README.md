# PlanVest - Financial Investment Platform

A modern React-based financial investment platform built with Vite and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **React 18**: Modern React with hooks and functional components
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About company section
│   ├── Services.tsx        # Services offerings
│   ├── Stats.tsx           # Statistics section
│   ├── Team.tsx            # Team members
│   ├── Pricing.tsx         # Pricing plans
│   ├── Testimonials.tsx    # Client testimonials
│   ├── FAQ.tsx             # Frequently asked questions
│   ├── Blog.tsx            # Blog articles
│   ├── Newsletter.tsx      # Newsletter signup
│   └── Footer.tsx          # Footer section
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
└── index.css               # Global styles with Tailwind
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#1F2937',
    }
  },
}
```

### Content

Each component can be easily modified in the `src/components/` directory.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome for Android)

## License

Copyright © 2024 PlanVest. All Rights Reserved.
"# MEDHYA-INVESTMENTS" 
