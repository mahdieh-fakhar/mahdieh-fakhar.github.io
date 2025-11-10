import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { CareerEvidenceCard, type Slide } from "@/components/career/CareerEvidenceCard";
import { StatsSection } from "@/components/StatsSection";

type MembershipCategory = "review" | "research" | "affiliation";

type Membership = {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  category: MembershipCategory;
  highlights: string[];
  focus?: string;
  evidence?: EvidenceGallery;
};

type EvidenceGallery = {
  slides: Slide[];
};

const categoryLabels: Record<MembershipCategory, string> = {
  review: "Peer Review",
  research: "Research Network",
  affiliation: "Institutional Membership",
};

const summaryStats = [
  { id: "peer", label: "Peer Review Venues", value: "2", accent: "text-primary" },
  { id: "projects", label: "Research Consortia", value: "3", accent: "text-accent" },
  { id: "regions", label: "Regions Engaged", value: "3", accent: "text-ai-accent" },
  { id: "years", label: "Years Collaborating", value: "5+", accent: "text-primary" },
] as const;

const fallbackSlides: Slide[] = [{ src: "/images/profile.jpg", alt: "Evidence placeholder" }];

const memberships: Membership[] = [
  {
    id: 1,
    title: "Peer Reviewer",
    organization: "EPOS Journal of Philology, UNED",
    location: "Madrid, Spain (Remote)",
    period: "2022",
    category: "review",
    highlights: [
      "Conducted double-blind peer review for philology and language studies submissions.",
      "Strengthened reproducibility by checking linguistic methodology and data transparency.",
      "Maintained rapid decision cycles aligned with UNED editorial governance.",
    ],
    focus: "Quality assurance for humanities peer review portfolios.",
  },
  {
    id: 2,
    title: "International Reviewer",
    organization: "SAGE Open, SAGE Publishing",
    location: "Washington, D.C. (Remote)",
    period: "2022",
    category: "review",
    highlights: [
      "Evaluated multidisciplinary manuscripts spanning education, policy, and social science.",
      "Balanced turnaround expectations for global author teams while offering detailed feedback.",
      "Collaborated with editors to refine rubric-based AI-assisted review pilots.",
    ],
    focus: "Global, multi-domain editorial collaboration.",
  },
  {
    id: 3,
    title: "Research Collaborator",
    organization: "IHUPA Research Institute",
    location: "UNED-AlcaA�iz, Spain",
    period: "2021-2023",
    category: "research",
    highlights: [
      "Mapped qualitative data from heritage preservation projects into bilingual dissemination formats.",
      "Introduced lightweight AI tooling to accelerate public scholarship workflows.",
      "Connected humanities researchers with instructional design resources for outreach.",
    ],
    focus: "Bridging humanities research and instructional design.",
  },
  {
    id: 4,
    title: "Consortium Team Member",
    organization: "AGORA Project",
    location: "Spain (Hybrid)",
    period: "2022-2025",
    category: "affiliation",
    highlights: [
      "Co-authored strategy notes for the Spanish Ministry of Science and Innovation.",
      "Piloted AI-assisted classroom frameworks for multilingual learners.",
      "Documented teacher training outcomes and shared impact briefs with the board.",
    ],
    focus: "Innovation governance across ministry-funded pilots.",
  },
  {
    id: 5,
    title: "Research Fellow",
    organization: "ATLAS Research Group, UNED",
    location: "Madrid, Spain",
    period: "2022",
    category: "research",
    highlights: [
      "Coordinated technology-enhanced language teaching experiments across campuses.",
      "Aligned ATLAS datasets with national higher-education KPIs to surface insights.",
      "Facilitated collaboration between instructional technologists and faculty leads.",
    ],
    focus: "Applied research for technology-enabled pedagogy.",
  },
];

const membershipHighlights = (membership: Membership): string[] => {
  if (membership.focus) {
    return [...membership.highlights, `Focus: ${membership.focus}`];
  }

  return membership.highlights;
};

const membershipSlides = (membership: Membership): Slide[] => {
  if (membership.evidence?.slides?.length) {
    return membership.evidence.slides;
  }

  return fallbackSlides;
};

export default function Memberships() {
  return (
    <div className="page-template-career">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-md"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Membership Timeline</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Academic memberships, peer-review appointments, and consortium roles following the same cadence as the career
            history chapter.
          </p>
        </div>

        <div className="space-y-6">
          {memberships.map((membership) => (
            <CareerEvidenceCard
              key={membership.id}
              title={membership.title}
              organization={membership.organization}
              location={membership.location}
              period={membership.period}
              roleLabel={categoryLabels[membership.category]}
              highlights={membershipHighlights(membership)}
              slides={membershipSlides(membership)}
            />
          ))}
        </div>

        <div className="auto-grid md:auto-grid-lg">
          {summaryStats.map((stat) => (
            <Card key={stat.id} data-testid={`card-stat-${stat.id}`}>
              <CardContent className="p-6 text-center">
                <p className={`text-3xl font-bold ${stat.accent}`} data-testid={`text-stat-${stat.id}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <StatsSection />
      </motion.div>
    </div>
  );
}
