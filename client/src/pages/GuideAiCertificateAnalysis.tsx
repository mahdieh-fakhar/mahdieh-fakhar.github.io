import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Image as ImageIcon, Sparkles, BadgeInfo, Filter, Search } from "lucide-react";
import { Link } from "wouter";

export default function GuideAiCertificateAnalysis() {
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
            Guides
          </div>
          <h1 className="text-4xl font-bold text-foreground">AI certificate analysis with OpenAI Vision</h1>
          <p className="max-w-4xl text-base text-muted-foreground">
            Learn how this AI-powered academic portfolio turns static certificate images into searchable, structured credentials using OpenAI Vision. Explore why certificates matter, the limitations of static proof, and how to extend tagging, search, and filters for data science and AI careers.
          </p>
        </header>

        <Card className="border border-primary/20 bg-background/90 shadow-sm">
          <CardContent className="space-y-8 p-6 md:p-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Why certificates matter in data science and AI careers</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Certificates validate specialized training—cloud, machine learning, analytics, scientometrics, and bibliometrics. For a data science student or AI researcher, they demonstrate verified skills beyond academic transcripts. In Mahdieh Fakhar’s AI-powered academic portfolio, certificates sit alongside projects, investigations, and memberships to form a holistic academic CV that ranks for Tier A (Mahdieh Fakhar, data science student) and Tier B (AI-powered academic portfolio template) while showcasing Tier C capabilities (AI certificate analysis, OpenAI Vision integration).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Limitations of static images vs. structured credentials</h2>
              <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
                <li>Hard to search: Recruiters cannot filter static images by issuer, skills, or date.</li>
                <li>Hard to verify: Metadata is trapped in pixels, not machine-readable.</li>
                <li>No schema: Search engines and aggregators can’t understand context without structured data.</li>
              </ul>
              <p className="text-base text-muted-foreground leading-relaxed">
                By converting images to structured credentials, this template strengthens discoverability and trust: EducationalOccupationalCredential JSON-LD nodes, descriptive alt text, and evidence cards that reference issuers, skills, and dates.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">How this template uses AI (OpenAI Vision) to analyze certificates</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                The optional OpenAI Vision flow parses certificate images, extracts text (issuer, recipient, dates, credential title), and suggests tags. Those tags can populate highlights, metadata, and JSON-LD credentials. In Mahdieh Fakhar’s academic portfolio, this supports AI certificate analysis and intelligent document analysis—core Tier C signals that enrich Tier A/B branding (Mahdieh Fakhar portfolio, academic portfolio template, GitHub Pages academic template).
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">Inputs</p>
                  <p className="text-sm text-muted-foreground">Certificate images (PNG/JPG) uploaded via the evidence flow.</p>
                </div>
                <div className="space-y-2 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">Outputs</p>
                  <p className="text-sm text-muted-foreground">Structured fields: title, issuer, dates, skills/tags, and searchable highlights for cards and JSON-LD.</p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Ideas for extending the feature</h2>
              <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
                <li>Tagging & filters: Add tags for cloud/ML/analytics; allow filtering certificates by issuer, skill, or year.</li>
                <li>Search index: Include certificate tags in `searchIndex` to surface credentials alongside projects and skills.</li>
                <li>Downloadable evidence: Offer PDF/PNG downloads of analyzed certificates with structured context.</li>
                <li>Validation links: Store issuer URLs and credential IDs for quick verification.</li>
                <li>Structured data: Keep EducationalOccupationalCredential nodes synchronized with visible certificate details.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">How to keep SEO aligned</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Use the SEO & Growth Guide (`docs/SEO-Growth-Guide.md`) and promotion assets (`docs/Promotion-Kit.md`). Update `seoConfig` when adding new certificate-focused routes or guides; keep FAQPage unchanged unless an on-page FAQ is present. Refresh sitemap to index new guides like this one.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Call to action</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Turn your certificates into structured, AI-enriched credentials. Fork the AI-powered academic portfolio template on GitHub Pages, integrate OpenAI Vision, and give recruiters verifiable proof of your data science and AI skills.
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
