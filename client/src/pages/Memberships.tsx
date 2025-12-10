import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { CareerEvidenceCard, type Slide } from "@/components/career/CareerEvidenceCard";
import { assetPath } from "@/lib/basePath";

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

const fallbackSlides: Slide[] = [];

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
    evidence: {
      slides: [
        {
          src: "/images/memberships/EPOS.png",
          alt: "EPOS reviewer frame",
          caption: "EPOS Philology journal framing badge",
          downloadName: "membership-epos-frame.png",
        },
        {
          src: "/images/memberships/EPOS-UNED.jpg",
          alt: "EPOS-UNED peer review certificate",
          caption: "EPOS Journal double-blind reviewer recognition",
          downloadName: "membership-epos-review.jpg",
        },
        {
          src: "/images/memberships/UNED-logo.jpg",
          alt: "UNED crest",
          caption: "UNED editorial network emblem",
          downloadName: "membership-uned-editorial.jpg",
        },
      ],
    },
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
    evidence: {
      slides: [
        {
          src: "/images/memberships/SAGE.png",
          alt: "SAGE Open reviewer badge",
          caption: "SAGE Open international review appointment",
          downloadName: "membership-sage-reviewer.png",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Research Collaborator",
    organization: "IHUPA Research Institute",
    location: "UNED-Alcaniz, Spain",
    period: "2021-2023",
    category: "research",
    highlights: [
      "Mapped qualitative data from heritage preservation projects into bilingual dissemination formats.",
      "Introduced lightweight AI tooling to accelerate public scholarship workflows.",
      "Connected humanities researchers with instructional design resources for outreach.",
    ],
    focus: "Bridging humanities research and instructional design.",
    evidence: {
      slides: [
        {
          src: "/images/memberships/IHUPA.png",
          alt: "IHUPA Research Institute badge",
          caption: "IHUPA-UNED research collaboration",
          downloadName: "membership-ihupa.png",
        },
        {
          src: "/images/memberships/UNED.webp",
          alt: "UNED institutional branding",
          caption: "UNED collaboration footprint",
          downloadName: "membership-uned.png",
        },
      ],
    },
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
    evidence: {
      slides: [
        {
          src: "/images/memberships/AGORA.png",
          alt: "AGORA project identity",
          caption: "AGORA consortium collaboration",
          downloadName: "membership-agora.png",
        },
      ],
    },
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
    evidence: {
      slides: [
        {
          src: "/images/memberships/ATLAS.jpg",
          alt: "ATLAS research badge",
          caption: "ATLAS Research Group fellowship",
          downloadName: "membership-atlas.jpg",
        },
        {
          src: "/images/memberships/ATLAS-UNED.jpg",
          alt: "ATLAS-UNED collaboration graphic",
          caption: "Joint ATLAS x UNED initiatives",
          downloadName: "membership-atlas-uned.jpg",
        },
        {
          src: "/images/memberships/UNED-Madrid.jpg",
          alt: "UNED Madrid campus imagery",
          caption: "Madrid-based ATLAS deployments",
          downloadName: "membership-uned-madrid.jpg",
        },
      ],
    },
  },
];

const membershipHighlights = (membership: Membership): string[] => {
  if (membership.focus) {
    return [...membership.highlights, `Focus: ${membership.focus}`];
  }

  return membership.highlights;
};

const membershipSlides = (membership: Membership): Slide[] => {
  const slides = membership.evidence?.slides?.map((slide) => ({
    ...slide,
    src: assetPath(slide.src),
  })) ?? [];

  if (slides.length === 0) {
    return fallbackSlides;
  }

  return slides;
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
            <h1 className="text-4xl font-bold">Academic Memberships & Governance Timeline</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Academic memberships, peer-review appointments, and governance roles across data science, AI, scientometrics, and bibliometrics — aligned with the broader career history.
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
      </motion.div>
    </div>
  );
}
