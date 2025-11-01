import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Layers,
  GraduationCap,
  Microscope,
  Briefcase,
  Sparkles,
  Send,
  ArrowRight,
} from "lucide-react";

const overviewSections = [
  {
    name: "Scholarship",
    description:
      "Three concurrent master's programs and a research fellowship fuel evidence-based decision making.",
    links: [
      { label: "All Education", href: "/education/all" },
      { label: "Academic Highlights", href: "/education/academic" },
    ],
    icon: GraduationCap,
    accent: "from-primary/40 via-primary/10 to-transparent",
  },
  {
    name: "Research Outputs",
    description:
      "Peer-reviewed articles, theses, monographs, and handbooks mapped across the Investigations chapter.",
    links: [
      { label: "All Investigations", href: "/investigations/all" },
      { label: "Articles", href: "/investigations/articles" },
    ],
    icon: Microscope,
    accent: "from-ai-accent/40 via-background to-transparent",
  },
  {
    name: "Works in Practice",
    description:
      "Projects, skills, and certifications that convert academic expertise into applied solutions.",
    links: [
      { label: "All Works", href: "/works/all" },
      { label: "Projects", href: "/projects" },
      { label: "Skills", href: "/skills" },
    ],
    icon: Briefcase,
    accent: "from-amber-300/40 via-primary/10 to-transparent",
  },
  {
    name: "Connection & Impact",
    description:
      "Memberships, career history, and direct contact routes maintain collaboration pipelines.",
    links: [
      { label: "Career", href: "/about/career" },
      { label: "Memberships", href: "/about/memberships" },
      { label: "Contact", href: "/contact" },
    ],
    icon: Send,
    accent: "from-emerald-300/40 via-background to-transparent",
  },
];

const quickSignals = [
  {
    label: "Research families",
    metric: "4",
    description: "Articles, theses, books, and field handbooks ready for review.",
  },
  {
    label: "Active programmes",
    metric: "3",
    description: "Graduate-level degrees running in parallel to consulting delivery.",
  },
  {
    label: "Showcased projects",
    metric: "5",
    description: "Cross-disciplinary engagements documented inside the Works hub.",
  },
  {
    label: "Digital badges",
    metric: "12+",
    description: "Credential library curated through the certifications data layer.",
  },
];

export default function Overview() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-lg"
      >
        <header className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Portfolio Overview</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Use this hub to orient across the entire site structure. Each card links to deep-dive chapters so decision
            makers can audit education, research, works, and collaboration touchpoints in minutes.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4" aria-label="Quick signals">
          {quickSignals.map((signal) => (
            <Card key={signal.label} className="border-primary/25 bg-background/90 shadow-sm hover-elevate">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                  {signal.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <span className="text-4xl font-bold text-primary">{signal.metric}</span>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="space-y-6" aria-label="Section directory">
          {overviewSections.map((section) => {
            const Icon = section.icon;
            return (
              <Card
                key={section.name}
                className={`relative overflow-hidden border-primary/25 bg-background/90 shadow-lg shadow-primary/10`}
              >
                <div
                  className={`pointer-events-none absolute inset-y-0 right-[-18%] w-1/2 rounded-full bg-gradient-to-br ${section.accent} blur-3xl opacity-60`}
                  aria-hidden="true"
                />
                <CardHeader className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 p-2 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <CardTitle className="text-2xl">{section.name}</CardTitle>
                  </div>
                  <Sparkles className="h-5 w-5 text-ai-accent" />
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <p className="text-sm text-muted-foreground max-w-3xl">{section.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>
      </motion.div>
    </div>
  );
}
