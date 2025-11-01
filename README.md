# Mahdieh Fakhar - AI-Powered Digital Portfolio

[![Live Demo](https://img.shields.io/badge/GitHub%20Pages-Live-blue?logo=github)](https://mahdieh-fakhar.github.io/) [![Stars](https://img.shields.io/github/stars/mahdieh-fakhar/mahdieh-fakhar.github.io?style=flat-square)](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/stargazers) [![Forks](https://img.shields.io/github/forks/mahdieh-fakhar/mahdieh-fakhar.github.io?style=flat-square)](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/network/members) [![License](https://img.shields.io/badge/license-MIT-success?style=flat-square)](LICENSE)

An academic-grade personal website highlighting Mahdieh Fakhar's research, publications, and AI-driven portfolio. The UI blends modern front-end craft with intelligent document analysis so visitors can explore achievements, download materials, and initiate collaborations in seconds.

> **Live Demo:** https://mahdieh-fakhar.github.io/

---

## Table of Contents

1. [Highlights](#highlights)
2. [Experience Journey](#experience-journey)
3. [Technology Stack](#technology-stack)
4. [Getting Started](#getting-started)
5. [Customization Guide](#customization-guide)
6. [Project Structure](#project-structure)
7. [Performance and SEO](#performance-and-seo)
8. [Roadmap](#roadmap)
9. [Contributing](#contributing)
10. [License](#license)

---

## Highlights

- Eleven content-rich routes: Home, About, Education, Articles, Conferences, Memberships, Career, Skills, Projects, Resume, and Contact.
- Certificate analysis powered by OpenAI Vision for automatic text extraction and insight tagging.
- Motion-crafted UI using Framer Motion, scroll-triggered animations, and persistent light/dark themes.
- Accessible and responsive build (WCAG-minded, semantic HTML, keyboard support).
- GitHub Pages ready deployment with `/` base path handling.
- Zero-backend contact delivery using FormSubmit.

---

## Experience Journey

| Chapter | What visitors can do |
| --- | --- |
| **Home** | Explore the portfolio atlas, signature campaign cards, and innovation pipeline. |
| **About** | Review research focus, teaching philosophy, languages, and personal narrative. |
| **Education** | Browse degrees, certifications, and academic highlights. |
| **Articles and Conferences** | Dive into peer-reviewed work, keynote appearances, and AI-curated certificates. |
| **Memberships and Career** | Understand governance roles, teaching leadership, and collaborative networks. |
| **Skills and Projects** | Assess technical fluency, methodologies, and live innovation labs. |
| **Resume** | Download the CV plus recruiter-ready highlights. |
| **Contact** | Message directly via FormSubmit or connect on LinkedIn and GitHub. |

---

## Technology Stack

**Frontend**

- React 18 (TypeScript)
- Vite 6
- Tailwind CSS + Shadcn UI
- Wouter for lightweight routing
- Framer Motion animations
- TanStack Query, React Hook Form, Zod

**Backend and Automation**

- Express.js scaffold (optional hosting)
- Multer for file uploads
- OpenAI Vision endpoints (document intelligence)

**Tooling and Deployment**

- GitHub Actions + GitHub Pages
- TypeScript project references
- FormSubmit for contact delivery

---

## Getting Started

1. **Clone or template**

   ```bash
   git clone https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io.git
   cd mahdieh-fakhar.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment variables**

   ```env
   OPENAI_API_KEY=your_openai_api_key
   SESSION_SECRET=your_session_secret
   ```

4. **Development**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:5173` for the client and `http://localhost:5000` if you boot the Express server.

5. **Production build**

   ```bash
   npm run build
   npm run preview
   ```

---

## Customization Guide

| What | Where to edit |
| --- | --- |
| Meta tags, JSON-LD, favicon | `client/index.html` |
| Home hero and campaigns | `client/src/pages/Home.tsx` |
| About narrative | `client/src/pages/About.tsx` |
| Education timeline | `client/src/pages/Education.tsx` |
| Publications catalogue | `client/src/pages/Events.tsx` and related data files |
| Conferences and certificates | `client/src/pages/Events.tsx` |
| Memberships, Career, Skills, Projects | Corresponding page components in `client/src/pages/` |
| Contact information and social links | `client/src/pages/Contact.tsx`, `client/src/components/Footer.tsx` |
| Theme tokens | `client/src/index.css`, `tailwind.config.ts` |
| Badge data and placements | `handbook/badge-governance.md` |
| Imagery | Replace files under `client/public/images/` |

---

## Project Structure

```
.
├─ client/               # React + Vite SPA
│  ├─ public/            # Static assets (robots.txt, sitemap.xml, favicon, manifest)
│  └─ src/
│     ├─ components/     # UI building blocks
│     ├─ pages/          # Route-driven screens
│     ├─ hooks/          # Custom hooks
│     ├─ lib/            # Utilities and helpers
│     └─ index.css       # Tailwind layers and design tokens
├─ server/               # Optional Express API (OpenAI integration)
├─ shared/               # Shared schemas and types
├─ docs/                 # Production build (published by GitHub Pages)
└─ .github/              # Workflows, issue templates, community health files
```

---

## Performance and SEO

- Static pre-render in `docs/` optimized for GitHub Pages.
- Comprehensive metadata: Open Graph, Twitter cards, canonical URLs.
- JSON-LD structured data describing Mahdieh as a `Person` and `Researcher`.
- `robots.txt` and `sitemap.xml` ready for search engines.
- Optional analytics integration (for example Plausible or Google Analytics) by adding your script tag to `client/index.html`.

---

## Roadmap

- [ ] Publish additional research spotlights and datasets.
- [ ] Add MDX-powered blog or insights section.
- [ ] Localize core pages (Spanish and Persian).
- [ ] Integrate newsletter or updates subscription workflow.

Track progress through [issues](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/issues) and [GitHub Projects](https://github.com/users/mahdieh-fakhar/projects).

---

## Contributing

We welcome forks, stars, and pull requests! Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) and follow the [Code of Conduct](CODE_OF_CONDUCT.md) before submitting changes.

Ways to help:

- Star the repository to support the project.
- Fork and adapt for your own academic portfolio.
- Report bugs via issue templates.
- Share enhancement ideas or new modules.

---

## License

Released under the [MIT License](LICENSE). You are free to use, adapt, and share with attribution.

---

Crafted with React, TypeScript, and a passion for data-driven storytelling. If you build something inspired by this project, let us know so we can feature community work!
