import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Server, Globe2, CheckCircle2, Wrench, ClipboardList } from "lucide-react";
import { Link } from "wouter";

export default function GuideGithubPagesTemplate() {
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
            <Globe2 className="h-4 w-4" />
            Guides
          </div>
          <h1 className="text-4xl font-bold text-foreground">GitHub Pages academic template for data science students</h1>
          <p className="max-w-4xl text-base text-muted-foreground">
            Build a professional academic portfolio for data science and AI without heavy DevOps. This guide walks you through forking, customizing, and deploying the React + TypeScript + Vite + Tailwind template on GitHub Pages with SEO, JSON-LD, and AI-ready features.
          </p>
        </header>

        <Card className="border border-primary/20 bg-background/90 shadow-sm">
          <CardContent className="space-y-8 p-6 md:p-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Why GitHub Pages is great for academic portfolios</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                GitHub Pages offers a free, stable, and CDN-backed way to publish academic portfolios. It integrates tightly with Git and CI, making continuous deployment simple. For data science students, it removes DevOps friction—just push to main, and the site updates. Combined with this AI-powered academic portfolio template, you get a production-grade React/TypeScript build with SEO, JSON-LD, and evidence-driven sections that highlight projects, skills, and certifications.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Template structure at a glance</h2>
              <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
                <li><strong>client/</strong>: React + TypeScript app with pages (Home, About, Education, Investigations, Events, Works, Resume, Contact, Search, Guides) and components.</li>
                <li><strong>docs/</strong>: Production build output for GitHub Pages (served as the site).</li>
                <li><strong>seoConfig.ts</strong> + <strong>Seo.tsx</strong>: Centralized title/meta/OG/Twitter/canonical/keywords per route.</li>
                <li><strong>BadgeStructuredData</strong>: JSON-LD graph with Person, WebSite, WebPage, EducationalOccupationalCredential, FAQPage (on Works).</li>
                <li><strong>Promotion & growth</strong>: README acts as a sales page; `docs/SEO-Growth-Guide.md` and `docs/Promotion-Kit.md` provide SEO and social copy.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Step-by-step: fork → clone → install → run → build → deploy</h2>
              <ol className="list-decimal space-y-2 pl-5 text-base text-muted-foreground">
                <li>Fork the repository on GitHub.</li>
                <li>Clone locally and install dependencies: <code>npm install</code>.</li>
                <li>Run locally: <code>npm run dev</code> (http://localhost:5173).</li>
                <li>Edit content in <code>client/src/pages</code> and data files in <code>client/src/data</code>.</li>
                <li>Update SEO in <code>client/src/seoConfig.ts</code>; keep JSON-LD aligned with visible content.</li>
                <li>Build: <code>npm run build</code> (outputs to <code>docs/</code> for GitHub Pages).</li>
                <li>Push to <code>main</code>; ensure GitHub Pages is set to deploy from GitHub Actions (or `/docs` if using built-in Pages mode).</li>
                <li>Set GitHub Topics, pin the repo, and share the live link on LinkedIn/ORCID/Google Scholar/university profile.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Customizing content</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">Pages</p>
                  <p className="text-sm text-muted-foreground">
                    Home, About, Education, Investigations, Events, Works (Career, Memberships, Projects, Skills, Certifications), Resume, Contact, Search, Guides. Edit the JSX and supporting data. Keep H1/H2 aligned with Tier A/B/C keywords: Mahdieh Fakhar, data science student, AI-powered academic portfolio, GitHub Pages, AI certificate analysis.
                  </p>
                </div>
                <div className="space-y-2 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">SEO/Schema</p>
                  <p className="text-sm text-muted-foreground">
                    `seoConfig.ts` drives title/description/keywords; `BadgeStructuredData` publishes JSON-LD (Person/WebSite/WebPage/Credential/FAQPage on Works). Update sitemap when adding routes (now including /guides).
                  </p>
                </div>
                <div className="space-y-2 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">Styling & motion</p>
                  <p className="text-sm text-muted-foreground">
                    Tailwind for styling, Framer Motion for interactions, Shadcn UI components for forms/cards. Keep layouts light and consistent with the existing aesthetic.
                  </p>
                </div>
                <div className="space-y-2 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">Guides section</p>
                  <p className="text-sm text-muted-foreground">
                    Use the Guides listing and detail pages to publish long-form content for long-tail queries like “AI-powered academic portfolio template” and “GitHub Pages academic portfolio for data science students.”
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Maintaining SEO over time</h2>
              <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
                <li>Keep `seoConfig` updated for new routes (including future guides or FAQs).</li>
                <li>Align JSON-LD with visible content; add FAQPage only where FAQ text appears.</li>
                <li>Refresh sitemap when adding/removing routes; ensure canonical stays on `https://mahdieh-fakhar.github.io/`.</li>
                <li>Use the SEO & Growth Guide in `docs/SEO-Growth-Guide.md` and social copy in `docs/Promotion-Kit.md` to drive Stars/Forks/Views.</li>
                <li>Maintain CTAs like “Fork this AI-powered academic portfolio template” to convert visitors to GitHub engagement.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Call to action</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                GitHub Pages plus this AI-powered academic portfolio template is the fastest path to a credible, SEO-friendly site for data science and AI students. Fork it, customize your academic profile, and deploy in minutes—no heavy DevOps required.
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
