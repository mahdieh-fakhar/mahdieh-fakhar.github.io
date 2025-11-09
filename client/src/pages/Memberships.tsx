import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Building2, Globe } from "lucide-react";

type MembershipCategory = "review" | "research" | "affiliation";

type Membership = {
  id: number;
  organization: string;
  role: string;
  location: string;
  period: string;
  category: MembershipCategory;
  description: string;
  contributions: string[];
  focus: string;
};

const memberships: Membership[] = [
  {
    id: 1,
    organization: "EPOS Journal of Philology, UNED",
    role: "Reviewer",
    location: "Madrid, Spain (Remote)",
    period: "2022",
    category: "review",
    description: "Peer-review appointments for philology and language studies articles routed through UNED's editorial board.",
    contributions: [
      "Ran double-blind evaluations focused on linguistic methodology and data transparency.",
      "Recommended actionable revisions that aligned with UNED journal quality benchmarks.",
    ],
    focus: "Quality assurance for humanities peer review portfolios.",
  },
  {
    id: 2,
    organization: "SAGE Open, SAGE Publishing",
    role: "Reviewer",
    location: "Washington, D.C. (Remote)",
    period: "2022",
    category: "review",
    description: "International review service for a multidisciplinary open-access journal published by SAGE.",
    contributions: [
      "Verified cross-disciplinary research design for education and social science submissions.",
      "Balanced rapid turnaround expectations with detailed feedback for global author teams.",
    ],
    focus: "Global, multi-domain editorial collaboration.",
  },
  {
    id: 3,
    organization: "IHUPA Research Institute",
    role: "Research Collaborator",
    location: "UNED-Alcaniz, Spain",
    period: "2021-2023",
    category: "research",
    description: "Institute for Research in Humanities and Heritage partnership emphasising bilingual education studies.",
    contributions: [
      "Mapped qualitative data from heritage preservation projects into bilingual dissemination formats.",
      "Connected IHUPA researchers with language technology tooling for public scholarship.",
    ],
    focus: "Bridging humanities research and instructional design.",
  },
  {
    id: 4,
    organization: "AGORA Project",
    role: "Research Team Member",
    location: "Spain (Hybrid)",
    period: "2022-2025",
    category: "affiliation",
    description: "Spanish Ministry of Science and Innovation funded consortium targeting language teaching innovation.",
    contributions: [
      "Prototyped AI-assisted classroom frameworks for multilingual learners.",
      "Documented teacher training pilots and submitted impact notes to the programme board.",
    ],
    focus: "Innovation governance across ministry-funded pilots.",
  },
  {
    id: 5,
    organization: "ATLAS Research Group, UNED",
    role: "Research Fellow",
    location: "Madrid, Spain",
    period: "2022",
    category: "research",
    description: "Six-month fellowship coordinating technology-enhanced language teaching experiments.",
    contributions: [
      "Led insights sprints to align ATLAS datasets with national higher-education KPIs.",
      "Facilitated cross-campus collaboration between instructional technologists and faculty leads.",
    ],
    focus: "Applied research for technology-enabled pedagogy.",
  },
];

const categoryIcons: Record<MembershipCategory, typeof Award> = {
  review: Award,
  research: Globe,
  affiliation: Building2,
};

const categoryBadgeVariants: Record<MembershipCategory, "default" | "secondary" | "outline"> = {
  review: "secondary",
  research: "outline",
  affiliation: "default",
};

const categoryLabels: Record<MembershipCategory, string> = {
  review: "Peer Review",
  research: "Research Network",
  affiliation: "Institutional Membership",
};

const summaryStats = [
  { id: "venues", label: "Peer Review Venues", value: "2", accent: "text-primary" },
  { id: "projects", label: "Research Consortia", value: "3", accent: "text-accent" },
  { id: "regions", label: "Regions Engaged", value: "3", accent: "text-ai-accent" },
  { id: "years", label: "Years Collaborating", value: "5+", accent: "text-primary" },
] as const;

export default function Memberships() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-md"
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Memberships & Collaborations</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Professional affiliations, peer-review service, and ministry-funded research networks
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          <div className="absolute left-8 top-0 bottom-0 hidden w-0.5 bg-border md:block" />

          {memberships.map((membership, index) => {
            const Icon = categoryIcons[membership.category];

            return (
              <motion.div
                key={membership.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="md:ml-20" data-testid={`card-membership-${index}`}>
                  <div className="absolute -left-12 top-6 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary md:flex">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </div>

                  <CardHeader>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-xl" data-testid={`text-organization-${index}`}>
                          {membership.organization}
                        </CardTitle>
                        <p className="text-base font-medium text-primary" data-testid={`text-role-${index}`}>
                          {membership.role}
                        </p>
                      </div>
                      <Badge
                        variant={categoryBadgeVariants[membership.category]}
                        className="w-fit"
                        data-testid={`badge-category-${index}`}
                      >
                        {categoryLabels[membership.category]}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span data-testid={`text-location-${index}`}>{membership.location}</span>
                      <span aria-hidden="true">|</span>
                      <span data-testid={`text-period-${index}`}>{membership.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="space-y-3 md:col-span-2">
                        <p className="text-sm text-muted-foreground" data-testid={`text-description-${index}`}>
                          {membership.description}
                        </p>
                        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                          {membership.contributions.map((contribution, contributionIndex) => (
                            <li
                              key={`${membership.id}-${contributionIndex}`}
                              data-testid={`text-contribution-${index}-${contributionIndex}`}
                            >
                              {contribution}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 md:col-span-1 md:mt-0 md:-mt-6">
                        <div className="flex h-full flex-col rounded-lg border border-dashed border-primary/40 bg-primary/5 p-4">
                          <p className="text-sm font-semibold text-primary" data-testid={`text-focus-label-${index}`}>
                            Focus Area
                          </p>
                          <p className="mt-2 text-sm text-muted-foreground" data-testid={`text-focus-${index}`}>
                            {membership.focus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
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
      </motion.div>
    </div>
  );
}
