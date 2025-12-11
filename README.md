# Mahdieh Fakhar | AI-powered Academic Portfolio (React + TypeScript)

[![Live Demo](https://img.shields.io/badge/GitHub%20Pages-Live-222?logo=github)](https://mahdieh-fakhar.github.io/) [![Pages Status](https://img.shields.io/github/deployments/mahdieh-fakhar/mahdieh-fakhar.github.io/github-pages?label=pages)](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/deployments) [![Last Commit](https://img.shields.io/github/last-commit/mahdieh-fakhar/mahdieh-fakhar.github.io)](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/commits/main) [![Stars](https://img.shields.io/github/stars/mahdieh-fakhar/mahdieh-fakhar.github.io?style=flat)](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/stargazers) [![Forks](https://img.shields.io/github/forks/mahdieh-fakhar/mahdieh-fakhar.github.io?style=flat)](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/network/members) [![License](https://img.shields.io/github/license/mahdieh-fakhar/mahdieh-fakhar.github.io?color=brightgreen)](LICENSE) [![Tech](https://img.shields.io/badge/stack-React%2018%20%7C%20TypeScript%20%7C%20Vite%20%7C%20Tailwind-0ea5e9)](#)

AI-powered academic portfolio template for data science and AI students/researchers. Built with React, TypeScript, Vite, Tailwind, and Framer Motion, featuring SEO-ready metas, JSON-LD (Person/WebSite/WebPage/credentials + FAQPage on Works), and GitHub Pages deployment out of the box. Includes AI certificate analysis (OpenAI Vision) and is ready to fork so you can launch your own academic portfolio in minutes.

## Live Demo

- https://mahdieh-fakhar.github.io/

## Why use this template?

- GitHub Pages ready: SPA routing with base-path handling, `docs/` output, and Actions deploy.
- AI-powered evidence: optional OpenAI Vision endpoint for certificate analysis and intelligent document workflows.
- Academic-first: sections for investigations, events, memberships, governance roles, resume/CV downloads, and contact.
- Modern stack: React + TypeScript + Tailwind + Framer Motion + Shadcn UI for fast, accessible pages.
- SEO-optimized: canonical URL, sitemap/robots, Open Graph/Twitter cards, JSON-LD (Person, WebSite, WebPage, credentials).

## Who is this for?

- Data science / big data students who need an academic CV + project portfolio.
- AI researchers and research data scientists publishing articles, conferences, and memberships.
- Academics who want an AI-powered digital portfolio they can fork and ship on GitHub Pages.

## Features

- Routes: Home, About, Education, Investigations, Events, Works (career, memberships, projects, skills, certifications), Resume (EN/ES), Contact, Search.
- Evidence-driven cards fed by `client/src/data/*` with reusable badge components and JSON-LD via `BadgeStructuredData`.
- Responsive UI with light/dark themes, Framer Motion transitions, and accessible forms (React Hook Form + Zod).
- Optional Express + OpenAI Vision API (`/api/documents`) for certificate parsing and tagging.
- GitHub Pages SPA safety: redirect handler, base-aware asset helper, and production build in `docs/`.

## Quick start

```bash
git clone https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io.git
cd mahdieh-fakhar.github.io
npm install
npm run dev
```

- Frontend: http://localhost:5173  
- Optional API: `node --loader tsx server/index.ts` (requires `OPENAI_API_KEY`).

## Build & deploy

```bash
npm run build           # outputs to docs/
npm run preview         # serve the production build locally
```

- GitHub Actions workflow deploys Pages from `main`. Ensure Pages source = GitHub Actions.
- For repo sites (not `username.github.io`): `npm run build -- --base=/repo-name/` then publish `/docs`.

## How to fork and customize

1) Fork or **Use this template** on GitHub.  
2) Clone, `npm install`, and `npm run dev` to iterate.  
3) Branding & SEO: update `client/index.html`, `client/src/seoConfig.ts`, `client/public/site.webmanifest`, and favicons under `client/public/images/`.  
4) Content: edit page files in `client/src/pages/` plus data in `client/src/data/` (navigation, search index, badges).  
5) Evidence: replace assets in `client/public/images/` and `client/public/Contents/`; upload new resumes to `client/public/resume/`.  
6) Deploy: push to `main` and let Actions publish to GitHub Pages.

## SEO & performance

- Canonical URL, sitemap, robots.txt, Open Graph/Twitter cards, and per-route SEO metadata (see `client/src/seoConfig.ts`).
- JSON-LD graph for `Person`, `WebSite`, `WebPage`, and `EducationalOccupationalCredential` entities.
- Lightweight SPA with Vite code-splitting, Framer Motion micro-interactions, and Tailwind for minimal CSS bloat.
- PWA manifest, theme color, and cache-busting via hashed assets in `docs/`.

## Repository topics & badges

- Suggested GitHub topics: `ai-portfolio`, `academic-portfolio`, `react-typescript`, `vite`, `tailwindcss`, `framer-motion`, `openai`, `vision`, `scientometrics`, `bibliometrics`, `resume-template`, `github-pages-template`.
- Badges included: Live Demo, Pages status, Stars, Forks, License, Tech stack.

## Repository metadata (for GitHub description)

- Short description: `AI-powered academic portfolio template (React/TypeScript/Vite/Tailwind) with SEO, JSON-LD, FAQ rich results, and GitHub Pages deployment.`
- Pinned/bio blurb: `AI-powered academic portfolio template for data science and AI students/researchers. Built with React, TypeScript, Vite, Tailwind, and Framer Motion, featuring SEO-ready metas, JSON-LD, and FAQPage for rich results. Includes AI certificate analysis (OpenAI Vision) and GitHub Pages deployment out of the box. Explore the live site and fork to launch your own academic portfolio in minutes.`

For ready-to-use social copy (LinkedIn/X/Twitter), check the [Promotion Kit](./docs/Promotion-Kit.md).

## Project structure

```
.
|- client/              # React + Vite app (index.html, src/)
|  |- public/           # Static assets, favicons, manifest, sitemap, resumes
|  `- src/              # Pages, components, data, hooks, lib, styles
|- docs/                # Production build output for GitHub Pages
|- server/              # Optional Express API for AI document analysis
|- shared/              # Shared schemas and types
|- attached_assets/     # Source assets for certificates/logos
|- Contents/            # Supporting content assets
`- .github/workflows/   # GitHub Pages deploy pipeline
```

## SEO & Growth Guide

For SEO tuning, structured data, and GitHub growth practices specific to this template, read the companion guide:

[Read the SEO & Growth Guide](./docs/SEO-Growth-Guide.md)

## Social copy (plug-and-play)

- **LinkedIn:** “Just shipped my AI-powered academic portfolio with React + TypeScript on GitHub Pages. Data science & big data projects, scientometrics research, resume downloads, and OpenAI Vision certificate analysis. Fork it here: https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io”
- **X / Twitter:** “New AI-powered digital portfolio live! Data science + AI projects, scientometrics research, resume/CV, and OpenAI Vision credential tagging — built with React/TS + Vite. Fork the template: https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io”
- **GitHub bio / pinned repo:** “AI-powered academic portfolio template (React + TypeScript + Tailwind). Focused on data science, AI, scientometrics, and credentials with JSON-LD + GitHub Pages deploy.”

## License

MIT License. See [LICENSE](LICENSE) for details.

## Contact / Author

- **Mahdieh Fakhar** — Data science & AI researcher (Madrid, Spain)  
- **Website:** https://mahdieh-fakhar.github.io/  
- **Email:** mfsh.intl@gmail.com  
- **LinkedIn:** https://www.linkedin.com/in/mahdieh-fakhar-b7319a1a5  
- **GitHub:** https://github.com/mahdieh-fakhar  

If you adapt this GitHub Pages template for your own portfolio or responsive resume site, please leave a ⭐ and share your fork!
