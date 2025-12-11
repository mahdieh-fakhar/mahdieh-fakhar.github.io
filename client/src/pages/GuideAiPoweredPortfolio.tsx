import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Globe2, Github, Brain, Settings, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function GuideAiPoweredPortfolio() {
  return (
    <div className="page-template-career">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-lg"
      >
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-4 w-4" />
            Guide
          </div>
          <h1 className="text-4xl font-bold text-foreground">How to build an AI-powered academic portfolio</h1>
          <p className="max-w-4xl text-base text-muted-foreground">
            Learn what an AI-powered academic portfolio is, why it matters for data science and AI students, and how this React + TypeScript + Vite + Tailwind template on GitHub Pages helps you ship a discoverable profile with SEO, JSON-LD, and AI certificate analysis using OpenAI Vision.
          </p>
        </header>

        <Card className="border border-primary/20 bg-background/90 shadow-sm">
          <CardContent className="space-y-8 p-6 md:p-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">What is an AI-powered academic portfolio?</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                An AI-powered academic portfolio is a personal research and career site that goes beyond static resumes. It blends structured data, search-friendly content, and AI-enhanced evidence (like certificate analysis) to tell a credible, verifiable story. For Mahdieh Fakhar, a data science student and scientometrics/bibliometrics researcher, this portfolio captures education, investigations, events, memberships, career milestones, skills, and AI certificate analysis in one place. The goal: a recruiter-friendly, research-credible, and SEO-optimized presence that ranks for Tier A (Mahdieh Fakhar, data science student), Tier B (AI-powered academic portfolio template, academic portfolio website), and Tier C (OpenAI Vision integration, AI certificate analysis).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Why data science and AI students need a strong academic portfolio</h2>
              <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
                <li>Signal credibility: Show real projects, research outputs, and credentials with structured evidence, not just bullet points.</li>
                <li>Improve discoverability: SEO-ready pages and JSON-LD help search engines understand your profile across data science and AI keywords.</li>
                <li>Stand out with AI: Demonstrate intelligent document analysis (certificates) and applied AI skills that recruiters and committees notice.</li>
                <li>Own your narrative: A GitHub Pages site gives you control over branding, content, and performance without heavy DevOps.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Template overview: React, TypeScript, Vite, Tailwind, GitHub Pages</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                This template is built with React 18, TypeScript, Vite, and Tailwind CSS, deployed to GitHub Pages with a production-ready `docs/` output. It includes wouter routing, per-route metadata via `seoConfig.ts` and `Seo.tsx`, JSON-LD via `BadgeStructuredData`, Framer Motion for motion, and a ready-made structure for Home, About, Education, Investigations, Events, Works (Career, Memberships, Projects, Skills, Certifications), Resume, Contact, Search, and Guides. It is optimized for GitHub Pages: canonical URLs, sitemap, robots.txt, and SPA-safe base-path handling are already in place.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">How AI certificate analysis with OpenAI Vision works</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Certificates are often static images that recruiters cannot search or verify easily. With OpenAI Vision, this template can ingest certificate images, extract text, detect issuers, and suggest tags—transforming static artifacts into searchable, structured credentials. The JSON-LD layer exposes EducationalOccupationalCredential nodes, reinforcing trust and discoverability. For Mahdieh Fakhar’s portfolio, this highlights AI certificate analysis, OpenAI Vision integration, and intelligent document analysis—core Tier C signals that support the primary (Tier A) and secondary (Tier B) branding.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">How to fork, customize, and deploy your own portfolio</h2>
              <ol className="list-decimal space-y-2 pl-5 text-base text-muted-foreground">
                <li>Fork the repository on GitHub to create your own copy.</li>
                <li>Clone locally, install dependencies (`npm install`), and run `npm run dev`.</li>
                <li>Edit content in `client/src/pages` (Home/About/Education/Works/Guides/Resume) and data files under `client/src/data/`.</li>
                <li>Adjust SEO in `client/src/seoConfig.ts` and keep JSON-LD aligned with visible content.</li>
                <li>Run `npm run build` to generate the `docs/` output for GitHub Pages, then push to `main`.</li>
                <li>Add Topics, pin the repo, and link from LinkedIn/ORCID/Google Scholar/university pages for growth.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Best practices for SEO and discoverability</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">Keywords (Tier A/B/C)</p>
                  <p className="text-sm text-muted-foreground">
                    Use Tier A (Mahdieh Fakhar, data science student), Tier B (AI-powered academic portfolio, GitHub Pages academic template), and Tier C (OpenAI Vision integration, AI certificate analysis) naturally in H1/H2 and body copy.
                  </p>
                </div>
                <div className="space-y-2 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">Structured data</p>
                  <p className="text-sm text-muted-foreground">
                    Keep JSON-LD (Person, WebSite, WebPage, EducationalOccupationalCredential, FAQPage on Works) in sync with visible content. Only publish FAQPage where the FAQ is rendered.
                  </p>
                </div>
                <div className="space-y-2 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">Metadata hygiene</p>
                  <p className="text-sm text-muted-foreground">
                    Every route should have a `seoConfig` entry with title, description, keywords, and canonical; avoid keyword stuffing, prefer natural anchors and concise descriptions.
                  </p>
                </div>
                <div className="space-y-2 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">Performance & UX</p>
                  <p className="text-sm text-muted-foreground">
                    Lean bundle via Vite, Tailwind, and Framer Motion micro-interactions. Keep CTAs clear—“Fork this AI-powered academic portfolio template”—to drive GitHub Stars/Forks.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Next steps</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Build your own AI-powered academic portfolio by forking this GitHub Pages template. Showcase your data science and AI projects, scientometrics and bibliometrics research, and verified credentials with AI certificate analysis. Keep SEO current using `seoConfig.ts` and the long-form guides to win long-tail queries like “AI-powered academic portfolio template” and “GitHub Pages academic portfolio for data science students.”
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
                >
                  View the GitHub repository
                </a>
                <a
                  href="https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
                >
                  Fork this academic portfolio template
                </a>
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
                >
                  Back to Guides
                </Link>
              </div>
            </section>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
