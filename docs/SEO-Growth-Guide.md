# SEO & Growth Guide

## Introduction
This repository is an AI-powered academic portfolio template built with React, TypeScript, Vite, and Tailwind CSS. It ships opinionated SEO, structured data, and GitHub-friendly onboarding so your academic profile, research outputs, and credentials are discoverable and easy to fork.

## Keyword Strategy (Tier A/B/C)
- Tier A (Primary): Mahdieh Fakhar, Mahdieh Fakhar portfolio, Mahdieh Fakhar academic CV, data science student, big data student, scientometrics researcher, bibliometrics researcher.
- Tier B (Secondary): AI-powered digital portfolio, academic portfolio website, GitHub Pages academic template, React TypeScript portfolio, data science and AI, academic portfolio template.
- Tier C (Support): OpenAI Vision integration, AI certificate analysis, intelligent document analysis, Vite Tailwind CSS portfolio, Framer Motion animations, GitHub Pages portfolio.

Where to use:
- Home/About/Works/Resume/Contact: Tier A + Tier B; sprinkle Tier C in feature mentions.
- Education/Certifications: Tier A + Tier B with Tier C on AI certificate analysis/OpenAI Vision.
- Investigations/Events: Tier A + Tier B, emphasize scientometrics/bibliometrics.
- Skills/Projects: Tier A + Tier B; Tier C for tech stack and AI features.

Example (natural, no stuffing):
“An AI-powered academic portfolio for Mahdieh Fakhar, a data science and big data student and scientometrics researcher. Explore projects, skills, and AI certificate analysis built with React, TypeScript, and Vite.”

## On-page SEO Practices in This Template
- Seo.tsx + seoConfig.ts: `seoConfig` maps routes to title/description/keywords/robots. `Seo` applies `<title>`, meta description, OG/Twitter, canonical based on the current path.
- Adding a new route: create a `seoConfig` entry with Tier A+B, plus one supportive Tier C term. Set `robots` if you need `noindex`.
- Headings: one H1 per page with Tier A+B; H2/H3 can carry Tier B/C descriptors. Keep language human and concise.
- Alt text: 8–12 words, descriptive, include one relevant keyword if natural.

## Structured Data & FAQPage
- BadgeStructuredData emits an @graph with WebSite, WebPage, Person, EducationalOccupationalCredential, FAQPage (only on `/works`), plus SearchAction, sameAs, keywords, and breadcrumb.
- Adding new FAQ: ensure the FAQ block is visible on the page. If FAQ belongs to a different page, add a new FAQPage node with matching text and @id/url for that route. Google requires JSON-LD content to match on-page text.

## GitHub Growth Tips (Stars / Forks / Views)
- README is template-style: live demo, Why/Who, Features, SEO/Performance, How to Fork/Customize/Deploy.
- Use GitHub Topics: ai-portfolio, academic-portfolio, react-typescript, vite, tailwindcss, framer-motion, openai, vision, scientometrics, bibliometrics, resume-template, github-pages-template.
- Pin the repo and link it from LinkedIn, ORCID, Google Scholar, university profile, and GitHub bio. Mention the live demo and “forkable academic portfolio” in your summaries.
- Use clear on-site CTAs (e.g., “Fork this AI-powered academic portfolio template”) to convert visitors into GitHub Stars/Forks.

## Promotion Kit
For ready-to-use LinkedIn and X/Twitter posts, as well as GitHub descriptions, see:

[Promotion Kit](./Promotion-Kit.md)

## How to Add New Content Without Breaking SEO
- Update `seoConfig` with title/description/keywords/robots for the new route/section.
- Update `BadgeStructuredData` if you add FAQs or new schema-worthy content (only if visible on page).
- Update `sitemap.xml` (and rebuild `docs/`).
- Review H1/H2/H3 and alt text to include Tier A/B and one Tier C mention naturally.
- Run `npm run build`; scan for errors/warnings.

## Final Checklist (pre-publish)
- [ ] `seoConfig` entry exists for the new/changed route.
- [ ] H1/H2/H3 and intro text include Tier A/B; supportive Tier C appears naturally.
- [ ] Alt text updated for new images.
- [ ] JSON-LD aligned with visible content (FAQ, credentials, etc.).
- [ ] `sitemap.xml` updated; canonical still points to `https://mahdieh-fakhar.github.io/`.
- [ ] `npm run build` passes; `docs/` refreshed.
- [ ] README updated if the change is feature-level (SEO, AI, template behavior).
