import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

type GuideCard = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
};

const guides: GuideCard[] = [
  {
    slug: "ai-powered-academic-portfolio",
    title: "How to build an AI-powered academic portfolio",
    summary:
      "Learn what an AI-powered academic portfolio is, why it matters for data science and AI students, and how this GitHub Pages template ships SEO, JSON-LD, and OpenAI Vision certificate analysis.",
    tags: ["AI-powered portfolio", "GitHub Pages", "OpenAI Vision"],
  },
  {
    slug: "github-pages-academic-template",
    title: "GitHub Pages academic template for data science students",
    summary:
      "Step-by-step walkthrough to fork, customize, and deploy this React + TypeScript + Vite template without heavy DevOps, tailored for data science and AI students.",
    tags: ["Data science student", "React TypeScript", "Tailwind"],
  },
  {
    slug: "ai-certificate-analysis-openai-vision",
    title: "AI certificate analysis with OpenAI Vision",
    summary:
      "Turn static certificates into structured, searchable credentials using the built-in OpenAI Vision workflow, with ideas to extend tagging, filters, and search.",
    tags: ["AI certificate analysis", "OpenAI Vision", "Credentials"],
  },
];

export default function Guides() {
  return (
    <div className="page-template-career">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-lg"
      >
        <section className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-4 w-4" />
            Guides & How-to
          </div>
          <h1 className="text-4xl font-bold text-foreground">Guides for AI-powered academic portfolios</h1>
          <p className="max-w-3xl text-base text-muted-foreground">
            Long-form, SEO-friendly articles that show how to build, deploy, and extend this AI-powered academic portfolio template
            for data science and AI students. Each guide is tailored to GitHub Pages, React/TypeScript, and OpenAI Vision credential analysis.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full border border-primary/20 bg-background/90 shadow-sm">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center gap-2 text-primary">
                    <BookOpen className="h-5 w-5" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">Guide</span>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-foreground">{guide.title}</h2>
                    <p className="text-sm text-muted-foreground">{guide.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {guide.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>
      </motion.div>
    </div>
  );
}
