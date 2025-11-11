import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { StatsSection } from "@/components/StatsSection";
import { CareerEvidenceCard, type Slide } from "@/components/career/CareerEvidenceCard";
import { Sparkles, Target, GraduationCap, Users, FileText, Compass } from "lucide-react";

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
    description: "Chronological view of teaching, leadership, and consulting milestones (now housed inside Works > Career).",
    href: "/works/career",
    icon: Compass,
  },
  {
    name: "Memberships",
    description:
      "Professional networks, editorial boards, and research collectives that extend ongoing collaborations via Works > Memberships.",
    href: "/works/memberships",
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

const fallbackSlide: Slide = { src: "/images/profile.jpg", alt: "Portfolio highlight" };

type OverviewCard = {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  roleLabel: string;
  highlights: string[];
  slides: Slide[];
  referenceUrl?: string;
  referenceLabel?: string;
};

const overviewCards: OverviewCard[] = [
  ...identitySignals.map((signal) => ({
    id: `identity-${signal.title}`,
    title: signal.title,
    organization: "Identity Signal",
    location: "Cross-disciplinary",
    period: "Ongoing",
    roleLabel: "Identity",
    highlights: [signal.description],
    slides: [fallbackSlide],
  })),
  ...timeline.map((item) => ({
    id: `timeline-${item.year}`,
    title: item.title,
    organization: "Signature Milestone",
    location: item.year,
    period: item.year,
    roleLabel: "Milestone",
    highlights: [item.description],
    slides: [fallbackSlide],
  })),
  ...alliedChapters.map((chapter) => ({
    id: `chapter-${chapter.name}`,
    title: chapter.name,
    organization: "Chapter Entry",
    location: "Portfolio Navigation",
    period: "Live",
    roleLabel: "Explore",
    highlights: [chapter.description],
    slides: [fallbackSlide],
    referenceUrl: chapter.href,
    referenceLabel: `Open ${chapter.name}`,
  })),
];

const aboutStats = (() => {
  const timelineYears = timeline
    .map((entry) => Number(entry.year))
    .filter((year) => Number.isFinite(year));
  const spanValue =
    timelineYears.length > 1 ? `${Math.max(...timelineYears) - Math.min(...timelineYears) + 1} yrs` : "Multi-year";

  return [
    { value: identitySignals.length, label: "Identity Signals" },
    { value: timeline.length, label: "Timeline Milestones" },
    { value: alliedChapters.length, label: "Allied Chapters" },
    { value: spanValue, label: "Journey Span" },
  ];
})();

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

        <section className="space-y-6" aria-label="All about cards">
          {overviewCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <CareerEvidenceCard
                title={card.title}
                organization={card.organization}
                location={card.location}
                period={card.period}
                roleLabel={card.roleLabel}
                highlights={card.highlights}
                slides={card.slides}
                referenceUrl={card.referenceUrl}
                referenceLabel={card.referenceLabel}
              />
            </motion.div>
          ))}
        </section>
        <StatsSection className="mt-10" stats={aboutStats} />
      </motion.div>
    </div>
  );
}
