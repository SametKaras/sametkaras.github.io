# Samet Karaş - Portfolio Website

A modern, story-driven personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- **Smooth Scrolling** - Lenis-powered smooth scroll with reduced-motion support
- **Story-driven Design** - Bold typography, generous whitespace, dark theme with cyan accent
- **Animated Sections** - Framer Motion scroll-triggered animations
- **Project Case Studies** - Full case study template with all 6 projects
- **Category Filters** - Filter projects by AI/CV, Unity, Robotics, APIs
- **Responsive Design** - Mobile-first with collapsible navigation
- **SEO Optimized** - Metadata, OpenGraph tags, semantic HTML
- **Accessible** - Keyboard navigation, focus states, prefers-reduced-motion

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects grid & detail pages
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/
│   ├── layout/            # Header, Footer, SmoothScroll
│   ├── ui/                # Button, Badge, Section, ScrollProgress
│   └── home/              # Hero, TrackSplit, FeaturedProjects, etc.
├── data/
│   ├── projects.ts        # Project data & case studies
│   └── personal.ts        # Personal info, skills, experience
└── lib/
    ├── animations.ts      # Framer Motion variants
    └── utils.ts           # Utility functions
```

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0a0a` | Page background |
| Surface | `#141414` | Card backgrounds |
| Border | `#262626` | Subtle borders |
| Foreground | `#fafafa` | Primary text |
| Text Muted | `#a1a1aa` | Secondary text |
| Accent | `#22d3ee` | Interactive elements |

### Typography
- **Font**: Inter (Google Fonts)
- **Display**: 80-120px (hero)
- **Headings**: 48-64px
- **Body**: 16-18px

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub repository
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Deploy automatically on push to main

### Manual

```bash
npm run build
npm start
```

## 📝 Content Updates

### Adding a New Project

Edit `src/data/projects.ts`:

```typescript
{
  slug: "project-slug",
  title: "Project Title",
  year: 2024,
  category: "backend" | "ai" | "unity" | "robotics",
  summary: "One-line summary",
  impact: "Impact sentence for detail page",
  stack: ["Tech1", "Tech2"],
  github: "https://github.com/...",
  featured: true,
  caseStudy: {
    overview: "...",
    problem: "...",
    approach: "...",
    features: ["Feature 1", "Feature 2"],
    challenges: "...",
    outcome: "..."
  }
}
```

### Updating Personal Info

Edit `src/data/personal.ts` for:
- Name, tagline, bio
- Education
- Experience
- Skills
- Social links

## 🔧 Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Smooth Scroll**: @studio-freight/lenis
- **Fonts**: Inter (Google Fonts)

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

---

Built with ❤️ by Samet Karaş
