import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { StatsSection } from "@/components/StatsSection";
import {
  Sparkles,
  Target,
  GraduationCap,
  Users,
  FileText,
  Compass,
  ArrowRight,
} from "lucide-react";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

const identitySignals = [
  {
    title: "Evidence-led storyteller",
    description:
      "Connects qualitative narratives with quantitative analysis to translate research outcomes into executive-ready insights.",
    icon: Target,
  },
  {
    title: "Interdisciplinary collaborator",
    description:
      "Works seamlessly across linguistics, AI, and education technology to design programs that scale beyond the classroom.",
    icon: Users,
  },
  {
    title: "Full-stack academic professional",
    description:
      "Pairs advanced data science tools with curriculum design, producing deliverables that satisfy both scholars and stakeholders.",
    icon: GraduationCap,
  },
];

const timeline: TimelineItem[] = [
  {
    year: "2025",
    title: "Master's in Big Data and Data Science (UNIR)",
    description:
      "Current focus areas include predictive analytics, applied AI, and building reproducible research pipelines.",
  },
  {
    year: "2024",
    title: "Master's in ICT for Language Teaching and Processing (UNED)",
    description:
      "Graduated with a research portfolio centered on natural language technologies and educational analytics.",
  },
  {
    year: "2022",
    title: "International research fellowship (UNED, Madrid)",
    description:
      "Six-month residency delivering bibliometric dashboards and mentoring research teams on data-informed innovation.",
  },
  {
    year: "2013",
    title: "Master's in Teaching English as a Foreign Language (University of Ilam)",
    description:
      "Laid the groundwork for integrating language pedagogy with emerging computational methods.",
  },
];

const alliedChapters = [
  {
    name: "Career",
    description: "Chronological view of teaching, leadership, and consulting milestones with measurable impacts.",
    href: "/about/career",
    icon: Compass,
  },
  {
    name: "Memberships",
    description: "Professional networks, editorial boards, and research collectives that extend ongoing collaborations.",
    href: "/about/memberships",
    icon: Users,
  },
  {
    name: "Resume",
    description:
      "Download-ready curriculum vitae featuring executive highlights, recent awards, and publication metrics.",
    href: "/resume",
    icon: FileText,
  },
];

export default function AllAbout() {
  return (
    <div className="page-template-career">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-lg"
      >
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-ai-accent" />
            <h1 className="text-4xl font-bold">All About Mahdieh Fakhar</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A panoramic profile that links the biography, academic pursuits, and professional networks powering every
            project in this portfolio.
          </p>
          <Badge variant="outline" className="text-xs uppercase tracking-widest">
            Strategic identity overview
          </Badge>
        </section>

        <section className="grid gap-6 md:grid-cols-3" aria-label="Identity signals">
          {identitySignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <Card key={signal.title} className="border-primary/20 bg-background/80 shadow-sm hover-elevate">
                <CardHeader className="flex flex-row items-center gap-3">
                  <span className="rounded-full bg-primary/10 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-base">{signal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{signal.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="space-y-4" aria-label="Signature timeline">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs uppercase tracking-widest">
              Milestones
            </Badge>
            <p className="text-sm text-muted-foreground">
              Anchor points that connect research depth with applied data science delivery.
            </p>
          </div>
          <div className="space-y-4">
            {timeline.map((item) => (
              <Card key={item.year} className="border-primary/15 bg-muted/40">
                <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <Badge variant="outline">{item.year}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs uppercase tracking-widest">
              Continue exploring
            </Badge>
            <p className="text-sm text-muted-foreground">
              Dive into dedicated chapters for the full narrative, employment detail, and documented credentials.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {alliedChapters.map((chapter) => {
              const Icon = chapter.icon;
              return (
                <Card key={chapter.name} className="group border-primary/20 bg-background/90 shadow-sm hover-elevate">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 p-2 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <CardTitle className="text-lg">{chapter.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{chapter.description}</p>
                    <Link
                      href={chapter.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                    >
                      Visit {chapter.name}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
        <StatsSection className="mt-10" />
      </motion.div>
    </div>
  );
}
