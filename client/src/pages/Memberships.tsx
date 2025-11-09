import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Award,
  Bot,
  Building2,
  Cpu,
  Globe,
  Sparkles,
} from "lucide-react";

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
    description:
      "Peer-review appointments for philology and language studies articles routed through UNED's editorial board.",
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
    description:
      "International review service for a multidisciplinary open-access journal published by SAGE.",
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
    description:
      "Institute for Research in Humanities and Heritage partnership emphasising bilingual education studies.",
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
    description:
      "Spanish Ministry of Science and Innovation funded consortium targeting language teaching innovation.",
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
    description:
      "Six-month fellowship coordinating technology-enhanced language teaching experiments.",
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

const categoryBadgeVariants: Record<
  MembershipCategory,
  "default" | "secondary" | "outline"
> = {
  review: "secondary",
  research: "outline",
  affiliation: "default",
};

const categoryLabels: Record<MembershipCategory, string> = {
  review: "Peer Review",
  research: "Research Network",
  affiliation: "Institutional Membership",
};

const aiAdvisorTracks = [
  {
    id: "review",
    label: "Scholarly Review Intelligence",
    summary:
      "Deploy AI-assisted critique memos for multilingual authors and accelerate editorial loops.",
    recommendations: [
      "Offer neural critique templates to EPOS and SAGE teams.",
      "Bundle linguistic QA dashboards for upcoming submissions.",
      "Share pattern libraries for transparent decision logs.",
    ],
    signal: 96,
    anchors: ["EPOS Journal", "SAGE Open"],
  },
  {
    id: "research",
    label: "Research & Innovation Fabric",
    summary:
      "Fuse field data, humanities archives, and AI copilots to scale research velocity.",
    recommendations: [
      "Convert IHUPA repositories into bilingual vector indexes.",
      "Design sandbox experiments with ATLAS faculty technologists.",
      "Publish AI-readiness scorecards for ministry stakeholders.",
    ],
    signal: 92,
    anchors: ["IHUPA Institute", "ATLAS Group"],
  },
  {
    id: "policy",
    label: "Policy & Consortium Strategy",
    summary:
      "Surface alignment maps between AGORA deliverables and international funding agendas.",
    recommendations: [
      "Generate outcome narratives with AI storytelling aids.",
      "Automate talent-matching between ministries and labs.",
      "Forecast transferability of pilots across EU cohorts.",
    ],
    signal: 88,
    anchors: ["AGORA Project", "ATLAS"],
  },
] as const;

const heroMetrics = [
  {
    id: "trust",
    label: "AI Trust Score",
    value: "98 / 100",
    caption: "Signal-checked reliability across memberships.",
    icon: Sparkles,
  },
  {
    id: "venues",
    label: "Neural Venues",
    value: "5",
    caption: "Peer review + research alliances currently active.",
    icon: Globe,
  },
  {
    id: "insights",
    label: "Insights Logged",
    value: "10",
    caption: "AI-noted contributions fueling each network.",
    icon: Cpu,
  },
] as const;

const aiHighlights = [
  {
    id: "ai1",
    title: "Realtime Translation Bridges",
    detail:
      "Membership data is optimized for bilingual prompts so AI copilots answer in English + Spanish instantly.",
  },
  {
    id: "ai2",
    title: "Signal-Based Prioritisation",
    detail:
      "Auto-ranked partnerships show which consortium to engage first for research acceleration.",
  },
  {
    id: "ai3",
    title: "Impact Forecast Loops",
    detail:
      "AI compares historical outcomes with ministry goals to anticipate the next collaboration milestone.",
  },
] as const;

export default function Memberships() {
  const [advisorTrack, setAdvisorTrack] = useState<string>(aiAdvisorTracks[0].id);
  const activeAdvisor = useMemo(
    () => aiAdvisorTracks.find((track) => track.id === advisorTrack) ?? aiAdvisorTracks[0],
    [advisorTrack],
  );
  const categoryAnalytics = useMemo(() => {
    const totals = memberships.reduce(
      (acc, membership) => ({
        ...acc,
        [membership.category]: (acc[membership.category] ?? 0) + 1,
      }),
      { review: 0, research: 0, affiliation: 0 } as Record<MembershipCategory, number>,
    );
    const total = memberships.length;
    return (Object.entries(totals) as [MembershipCategory, number][]).map(
      ([category, count]) => ({
        category,
        count,
        share: total === 0 ? 0 : Math.round((count / total) * 100),
      }),
    );
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-md"
      >
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-[#05030d] via-[#090626] to-[#12083c] p-8 text-white shadow-[0_40px_120px_rgba(59,130,246,0.25)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/3 top-0 h-60 w-60 rounded-full bg-primary/40 blur-[140px]" />
            <div className="absolute right-10 top-24 h-48 w-48 rounded-full bg-accent/40 blur-[140px]" />
          </div>
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/10 text-white backdrop-blur">
                Neural Membership Graph
              </Badge>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Memberships orchestrated with AI-grade storytelling
              </h1>
              <p className="max-w-2xl text-lg text-white/70">
                Every alliance streams structured evidence, letting AI assistants co-author reviews,
                research briefs, and funding narratives in seconds.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {heroMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.id}
                    className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur"
                  >
                    <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-white/70">
                      <Icon className="h-4 w-4" />
                      {metric.label}
                    </div>
                    <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
                    <p className="text-sm text-white/70">{metric.caption}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* AI Intelligence Layer */}
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Card className="border-primary/20 bg-background/70 shadow-xl shadow-primary/10 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-2 text-primary">
                <Bot className="h-5 w-5" />
                <p className="font-semibold tracking-wide">AI Collaboration Pulse</p>
              </div>
              <CardTitle className="text-2xl">Category energy map</CardTitle>
              <p className="text-sm text-muted-foreground">
                Model-weighted visibility for each membership cluster, calculated from documented
                contributions and AI-ready assets.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {categoryAnalytics.map((signal) => (
                <div
                  key={signal.category}
                  className="rounded-2xl border border-primary/20 bg-primary/5 p-4"
                >
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{categoryLabels[signal.category]}</span>
                    <span>{signal.share}% focus</span>
                  </div>
                  <Progress
                    value={signal.share}
                    className="mt-3 h-2 bg-primary/10"
                  />
                  <p className="mt-2 text-sm text-muted-foreground">
                    {signal.count} alliance{signal.count > 1 ? "s" : ""} streaming structured data.
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-background/70 shadow-xl shadow-accent/20 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="h-5 w-5" />
                <p className="font-semibold tracking-wide">AI Strategy Designer</p>
              </div>
              <CardTitle>Pick a focus</CardTitle>
              <p className="text-sm text-muted-foreground">
                The assistant recommends which memberships activate that strategy.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={advisorTrack} onValueChange={setAdvisorTrack}>
                <SelectTrigger className="w-full border-accent/30 bg-background/60">
                  <SelectValue placeholder="Select strategy" />
                </SelectTrigger>
                <SelectContent>
                  {aiAdvisorTracks.map((track) => (
                    <SelectItem key={track.id} value={track.id}>
                      {track.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-4">
                <p className="text-sm font-semibold text-accent">AI Summary</p>
                <p className="mt-2 text-sm text-muted-foreground">{activeAdvisor.summary}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-accent/80">
                  Anchor memberships
                </p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {activeAdvisor.anchors.map((anchor) => (
                    <Badge key={anchor} variant="outline" className="border-accent/40 text-accent">
                      {anchor}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Readiness
                  </p>
                  <Progress value={activeAdvisor.signal} className="mt-2 h-2 bg-accent/10" />
                  <p className="mt-1 text-sm text-muted-foreground">
                    {activeAdvisor.signal}% of assets already structured for AI prompts.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {activeAdvisor.recommendations.map((tip) => (
                  <div
                    key={tip}
                    className="rounded-xl border border-dashed border-accent/30 px-3 py-2 text-sm text-muted-foreground"
                  >
                    {tip}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Highlights */}
        <div className="auto-grid md:auto-grid-lg">
          {aiHighlights.map((highlight) => (
            <Card
              key={highlight.id}
              className="border-primary/20 bg-gradient-to-br from-primary/5 to-background"
            >
              <CardContent className="space-y-2 p-6">
                <p className="text-sm font-semibold text-primary">{highlight.title}</p>
                <p className="text-sm text-muted-foreground">{highlight.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          <div className="absolute left-8 top-0 bottom-0 hidden w-0.5 bg-gradient-to-b from-primary/60 via-border to-transparent md:block" />

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
                <Card
                  className="border border-white/5 bg-background/70 shadow-lg shadow-primary/5 backdrop-blur md:ml-20"
                  data-testid={`card-membership-${index}`}
                >
                  <div className="absolute -left-12 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-primary md:flex">
                    <Icon className="h-5 w-5 text-primary-foreground" />
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
      </motion.div>
    </div>
  );
}
