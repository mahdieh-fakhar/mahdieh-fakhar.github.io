import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Rocket, Code2, Award, Briefcase, CalendarRange, ArrowRight, Users } from "lucide-react";
import { BadgePanel } from "@/components/badges/BadgePanel";
import { getBadges } from "@/lib/badgeUtils";

const workStreams = [
  {
    name: "Career",
    description:
      "Teaching, leadership, and consulting journey with evidence packs that underline operational scale and outcomes.",
    href: "/works/career",
    icon: Briefcase,
    meta: ["12+ documented roles", "Multi-country delivery", "Evidence-driven storytelling"],
  },
  {
    name: "Memberships",
    description:
      "Professional networks, editorial roles, and advocacy circles that unlock research collaborations and speaking invites.",
    href: "/works/memberships",
    icon: Users,
    meta: ["Global academic boards", "Reviewer appointments", "Active partnerships"],
  },
  {
    name: "Projects",
    description:
      "Flagship engagements across research institutes, ministry-funded programs, and AI-first web platforms.",
    href: "/works/projects",
    icon: Rocket,
    meta: ["5 documented initiatives", "Interdisciplinary delivery teams", "Hybrid research and development"],
  },
  {
    name: "Skills",
    description:
      "Technical proficiencies spanning statistics, visualization, AI, and multilingual communication, all mapped with proficiency scoring.",
    href: "/works/skills",
    icon: Code2,
    meta: ["Data analysis suite", "Visualization and dashboarding", "Research automation tooling"],
  },
  {
    name: "Certifications",
    description:
      "Verified digital badges curated via Credly and project partners to evidence continuous professional development.",
    href: "/works/certifications",
    icon: Award,
    meta: ["12+ live credentials", "AI, data, and pedagogy coverage", "Auto-synced catalogue"],
  },
];

const deliveryHighlights = [
  {
    label: "Engagement cadence",
    value: "Multi-year",
    detail: "Program delivery spans 2019 through 2025, combining academic calendars with consulting sprints.",
  },
  {
    label: "Delivery formats",
    value: "Hybrid",
    detail: "On-site research residencies blended with remote collaboration and asynchronous knowledge transfer.",
  },
  {
    label: "Impact focus",
    value: "Data-infused",
    detail: "Every engagement ships dashboards, reproducible scripts, or policy-facing documentation.",
  },
];

const glanceItems = [
  { emoji: "💼", title: "Professional experience", detail: "Career history across education, data, and applied research." },
  { emoji: "🤝", title: "Active memberships", detail: "Engagement with professional and academic communities." },
  { emoji: "🧩", title: "Projects", detail: "Applied initiatives and collaborations delivered across domains." },
  { emoji: "🧠", title: "Skills & certifications", detail: "Core competencies supported by verified credentials and training." },
];

const focusAreas = [
  { title: "Data-informed education", detail: "Applying analytics and AI to improve teaching, learning, and assessment." },
  { title: "Digital transformation", detail: "Operationalizing technology for research teams, institutions, and stakeholders." },
  { title: "Collaborative delivery", detail: "Working across memberships and projects to align outcomes with impact goals." },
];

const overviewSections = [
  {
    title: "Career",
    body:
      "Roles, institutions, and responsibilities presented as a timeline to highlight growth, leadership, and delivery milestones.",
    href: "/works/career",
    cta: "View Career Timeline →",
  },
  {
    title: "Memberships",
    body:
      "Professional and academic memberships, committee work, and community engagement that reinforce collaboration and governance.",
    href: "/works/memberships",
    cta: "See Professional Memberships →",
  },
  {
    title: "Projects",
    body:
      "Selected projects showcasing applied research, innovation pilots, and cross-functional delivery in education and data-driven contexts.",
    href: "/works/projects",
    cta: "Browse Projects →",
  },
  {
    title: "Skills",
    body:
      "Structured view of technical, research, and communication skills mapped to real-world outputs across projects and roles.",
    href: "/works/skills",
    cta: "Explore Skills →",
  },
  {
    title: "Certifications",
    body:
      "Verified credentials, formal training, and licenses that underpin practice across analytics, education, and technology.",
    href: "/works/certifications",
    cta: "View Certifications →",
  },
];

export default function Works() {
  const rawBadges = [
    ...getBadges({ page: "projects", limit: 2 }),
    ...getBadges({ page: "skills", limit: 2 }),
    ...getBadges({ page: "career", limit: 2 }),
    ...getBadges({ page: "memberships", limit: 2 }),
  ];
  const spotlightBadges = rawBadges.filter(
    (badge, index, self) => index === self.findIndex((candidate) => candidate.id === badge.id),
  );

  return (
    <div className="page-template-career">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-lg"
      >
        <header className="space-y-4">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Works Overview</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A structured overview of my professional activities, including career history, professional memberships, key
            projects, core skills, and certifications. Use this page to get a quick sense of my professional profile and
            navigate to detailed sections.
          </p>
          <Badge variant="outline" className="text-xs uppercase tracking-widest">
            Overview
          </Badge>
        </header>

        <section className="grid gap-4 rounded-2xl border border-primary/15 bg-muted/40 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {glanceItems.map((item) => (
            <div key={item.title} className="space-y-2 rounded-xl border border-transparent p-3">
              <div className="text-2xl">{item.emoji}</div>
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </section>

        <section className="stack-gap-md">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-foreground">Choose your path</h2>
            <p className="text-sm text-muted-foreground">
              Navigate directly to the section that matches what you are looking for.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {overviewSections.map((section) => (
              <Card key={section.title} className="h-full border border-primary/20 bg-background/90 shadow-sm">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                    <p className="text-sm text-muted-foreground">{section.body}</p>
                  </div>
                  <Link
                    href={section.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                  >
                    {section.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4" aria-label="Delivery highlights">
          <div className="flex items-center gap-2">
            <CalendarRange className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Delivery DNA</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {deliveryHighlights.map((highlight) => (
              <Card key={highlight.label} className="border-primary/15 bg-muted/40">
                <CardHeader className="space-y-3">
                  <Badge variant="secondary" className="w-fit text-xs uppercase tracking-widest">
                    {highlight.label}
                  </Badge>
                  <CardTitle className="text-xl text-primary">{highlight.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{highlight.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4" aria-label="Spotlight credentials">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Spotlight Credentials</h2>
          </div>
          {spotlightBadges.length > 0 ? (
            <div className="auto-grid md:auto-grid-lg">
              {spotlightBadges.map((badge) => (
                <BadgePanel key={`${badge.id}-works`} badge={badge} layout="grid" />
              ))}
            </div>
          ) : (
            <Card className="border-dashed border-primary/30 bg-background/80">
              <CardContent className="p-6 text-sm text-muted-foreground">
                Populate <code>client/src/data/badges.json</code> to surface certifications relevant to current work
                streams.
              </CardContent>
            </Card>
          )}
        </section>

        <section className="grid gap-4 rounded-2xl border border-primary/20 bg-card/90 p-6 sm:grid-cols-[1.1fr_1fr]">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">Professional Profile</h3>
            <p className="text-sm text-muted-foreground">
              Applied strategist working across education, data, and technology to connect outcomes with impact, backed
              by collaborations, memberships, and delivered projects.
            </p>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Focus Areas</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {focusAreas.map((area) => (
                  <li key={area.title} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{area.title}</p>
                      <p>{area.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-3 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">Navigation</h4>
            <pre className="overflow-x-auto rounded-lg bg-background/80 p-4 text-xs text-muted-foreground">
{`Works
├── Overview (this page)
├── Career
├── Memberships
├── Projects
├── Skills
└── Certifications`}
            </pre>
            <div className="flex flex-wrap gap-2 text-sm font-semibold text-primary">
              <Link href="/works/career" className="rounded-full border border-primary/30 px-3 py-1 hover:bg-primary/10">
                Career
              </Link>
              <Link href="/works/memberships" className="rounded-full border border-primary/30 px-3 py-1 hover:bg-primary/10">
                Memberships
              </Link>
              <Link href="/works/projects" className="rounded-full border border-primary/30 px-3 py-1 hover:bg-primary/10">
                Projects
              </Link>
              <Link href="/works/skills" className="rounded-full border border-primary/30 px-3 py-1 hover:bg-primary/10">
                Skills
              </Link>
              <Link href="/works/certifications" className="rounded-full border border-primary/30 px-3 py-1 hover:bg-primary/10">
                Certifications
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
