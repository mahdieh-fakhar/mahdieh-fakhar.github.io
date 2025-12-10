# Mahdieh Fakhar - Data Science & Research Portfolio

[![Live Demo](https://img.shields.io/badge/GitHub%20Pages-Live-222?logo=github)](https://mahdieh-fakhar.github.io/) [![Pages Status](https://img.shields.io/github/deployments/mahdieh-fakhar/mahdieh-fakhar.github.io/github-pages?label=pages)](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/deployments) [![Last Commit](https://img.shields.io/github/last-commit/mahdieh-fakhar/mahdieh-fakhar.github.io)](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/commits/main) [![Stars](https://img.shields.io/github/stars/mahdieh-fakhar/mahdieh-fakhar.github.io?style=flat)](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/stargazers) [![Forks](https://img.shields.io/github/forks/mahdieh-fakhar/mahdieh-fakhar.github.io?style=flat)](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/network/members) [![Issues](https://img.shields.io/github/issues/mahdieh-fakhar/mahdieh-fakhar.github.io?style=flat)](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/issues) [![License](https://img.shields.io/github/license/mahdieh-fakhar/mahdieh-fakhar.github.io?color=brightgreen)](LICENSE)

Responsive academic and data science portfolio built with React, TypeScript, Tailwind CSS, and Shadcn UI. The site highlights research publications, events, credentials, resume downloads, and contact options, and it doubles as a GitHub Pages template for anyone building a personal portfolio website, responsive resume site, or front-end developer/data science profile.

## Live Demo

- https://mahdieh-fakhar.github.io/

## Overview

A multi-section single-page application that surfaces Mahdieh Fakhar's research track, career milestones, publications, academic events, and verified credentials. It ships with SPA routing, site search, SEO metadata, JSON-LD structured data, FormSubmit contact handling, and GitHub Pages ready builds so you can fork and ship your own personal portfolio website with minimal setup.

## Features

- Comprehensive routes: Home, About, Education, Investigations, Events, Works (career, memberships, projects, skills, certifications), Resume (EN/ES downloads), and Contact.
- Data-driven navigation and search powered by `client/src/data/navigation.ts` and `client/src/data/searchIndex.ts`, with breadcrumbing and quick links.
- Credential system with `client/src/data/badges.json`, reusable badge components, and JSON-LD structured data via `BadgeStructuredData`.
- Responsive UI with light/dark themes, Radix primitives, Framer Motion animation, accessible forms, and sticky navigation with search.
- SEO-ready: meta tags, canonical link, sitemap, robots.txt, PWA manifest, Open Graph/Twitter cards, and schema.org Person/Credential data.
- Contact flow using FormSubmit (AJAX), toast feedback, and social links; resume downloads served from `/resume`.
- Optional AI-assisted document analysis component (`DocumentUpload`) backed by an Express + OpenAI Vision endpoint under `/api/documents`.
- GitHub Pages friendly: SPA redirect handler, base-path-aware asset helper, and Vite build output placed in `docs/`.

## Tech Stack

- **Core:** React 18, TypeScript, Vite 6, Wouter router.
- **UI/UX:** Tailwind CSS 3, Shadcn UI, Radix UI primitives, Framer Motion, Lucide icons, Embla carousel.
- **Forms & Data:** React Hook Form, Zod + resolvers, TanStack Query.
- **Tooling:** PostCSS/Autoprefixer, TypeScript `npm run check`, GitHub Actions deploy to GitHub Pages.
- **Optional backend:** Express + Multer + OpenAI Vision for document analysis.

## Project Structure

```
.
|- client/              # React + Vite app (index.html, src/)
|  |- public/           # Static assets, favicons, manifest, sitemap, resume PDFs
|  `- src/              # Pages, components, data, hooks, lib, styles
|- docs/                # Production build output served on GitHub Pages
|- server/              # Optional Express API for AI document analysis
|- shared/              # Shared schemas and types (contact, education, docs)
|- attached_assets/     # Source assets for certificates/logos
|- Contents/            # Supporting content assets referenced by pages
|- handbook/            # Badge governance documentation
`- .github/workflows/   # GitHub Pages deploy pipeline
```

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Git
- (Optional) `OPENAI_API_KEY` if you intend to run the document-analysis API

### Installation

```bash
git clone https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io.git
cd mahdieh-fakhar.github.io
npm install
```

### Local Development

```bash
npm run dev
```

- Frontend: http://localhost:5173  
- Optional API (for `/api/documents`): `node --loader tsx server/index.ts` with `OPENAI_API_KEY` set.

## Build & Deployment

- Build for production (outputs to `docs/`):

  ```bash
  npm run build
  ```

- Preview the production build locally:

  ```bash
  npm run preview
  ```

- GitHub Pages is already wired via `.github/workflows/deploy.yml` (triggered on `main`). Set Pages source to "GitHub Actions" in repository settings.
- For repository pages (non-`username.github.io`), build with a base path so assets resolve correctly:

  ```bash
  npm run build -- --base=/your-repo-name/
  ```

- Manual publishing alternative: enable Pages from `main` -> `/docs` if you prefer the built-in Pages source instead of Actions.

## Using This Template (Customization Guide)

### Use this template / Fork

1. Click **Use this template** or **Fork** on GitHub.  
2. Name the repo as needed (see naming guidance below).  
3. Clone locally and install dependencies.  
4. Open in VS Code and run `npm run dev` to iterate.

### Repository naming for GitHub Pages

- **Personal/organization site:** use `username.github.io` to keep the base path `/`.
- **Project site:** any name is fine; build with `--base=/repo-name/` and point Pages to `/docs`.

### Personalization checklist

- **Branding & SEO:** `client/index.html` (titles, descriptions, keywords, canonical), `client/public/site.webmanifest`, favicons under `client/public/images/`.
- **Navigation & search:** `client/src/data/navigation.ts`, `client/src/data/searchIndex.ts`.
- **Content sections:** edit page files in `client/src/pages/` (Home, About, Education, Investigations, Events, Works subsections, Resume, Contact).
- **Badges/credentials:** update `client/src/data/badges.json`; see `handbook/badge-governance.md` for fields and placement rules.
- **Contact & social links:** `client/src/pages/Contact.tsx` (FormSubmit endpoint, email, social URLs) and `client/src/components/Footer.tsx`.
- **Resume files:** replace PDFs in `client/public/resume/`.
- **Images & evidence:** replace assets in `client/public/images/` and `client/public/Contents/`.
- **Design tokens:** adjust `client/src/index.css` and `tailwind.config.ts` for colors/typography.
- **Base path:** keep `vite.config.ts` at `/` for `username.github.io`; use the `--base` flag for project pages.

### Deploying your version

1. Run `npm run build` (or `npm run build -- --base=/repo-name/` for project pages).  
2. Push to `main`; the GitHub Actions workflow builds and deploys to Pages automatically.  
3. If not using Actions, set Settings -> Pages -> Branch `main` and folder `/docs`.  
4. Verify the live site at `https://<your-username>.github.io/` (or `https://<your-username>.github.io/<repo-name>/`).

## Screenshots

![Profile portrait used across the portfolio](docs/images/profile.jpg)

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md), then:

1. Fork the repo.  
2. Create a feature branch: `git checkout -b feature/your-change`.  
3. Commit with clear messages.  
4. Open a pull request describing your change and testing.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Contact / Author

- **Mahdieh Fakhar** - Data Scientist & Researcher (Madrid, Spain)  
- **Website:** https://mahdieh-fakhar.github.io/  
- **Email:** mfsh.intl@gmail.com  
- **LinkedIn:** https://www.linkedin.com/in/mahdieh-fakhar-b7319a1a5  
- **GitHub:** https://github.com/mahdieh-fakhar  

If you adapt this GitHub Pages template for your own portfolio or responsive resume site, consider leaving a star and sharing your fork!
