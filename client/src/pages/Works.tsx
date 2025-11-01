import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Rocket, Code2, Award, Briefcase, CalendarRange, ArrowRight } from "lucide-react";
import { BadgePanel } from "@/components/badges/BadgePanel";
import { getBadges } from "@/lib/badgeUtils";

const workStreams = [
  {
    name: "Projects",
    description:
      "Flagship engagements across research institutes, ministry-funded programs, and AI-first web platforms.",
    href: "/projects",
    icon: Rocket,
    meta: ["5 documented initiatives", "Interdisciplinary delivery teams", "Hybrid research and development"],
  },
  {
    name: "Skills",
    description:
      "Technical proficiencies spanning statistics, visualization, AI, and multilingual communication, all mapped with proficiency scoring.",
    href: "/skills",
    icon: Code2,
    meta: ["Data analysis suite", "Visualization and dashboarding", "Research automation tooling"],
  },
  {
    name: "Certifications",
    description:
      "Verified digital badges curated via Credly and project partners to evidence continuous professional development.",
    href: "/certifications",
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

export default function Works() {
  const rawBadges = [...getBadges({ page: "projects", limit: 2 }), ...getBadges({ page: "skills", limit: 2 })];
  const spotlightBadges = rawBadges.filter(
    (badge, index, self) => index === self.findIndex((candidate) => candidate.id === badge.id),
  );

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
            <Briefcase className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Works</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore the applied side of Mahdieh Fakhar&apos;s portfolio. This hub surfaces active projects, technical
            competencies, and third-party validated credentials that underpin every delivery.
          </p>
          <Badge variant="outline" className="text-xs uppercase tracking-widest">
            All works
          </Badge>
        </header>

        <section className="grid gap-6 md:grid-cols-3" aria-label="Work streams">
          {workStreams.map((stream) => {
            const Icon = stream.icon;
            return (
              <Card key={stream.name} className="border-primary/20 bg-background/80 shadow-sm hover-elevate">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <CardTitle className="text-xl">{stream.name}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{stream.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {stream.meta.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={stream.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                  >
                    Visit {stream.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
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
      </motion.div>
    </div>
  );
}
