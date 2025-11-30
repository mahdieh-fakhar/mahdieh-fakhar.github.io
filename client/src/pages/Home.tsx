import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles,
  Home as HomeIcon,
  UserRound,
  Microscope,
  BadgeCheck,
  Puzzle,
  ScrollText,
  Send,
  Layers,
} from "lucide-react";
import { assetPath } from "@/lib/basePath";
import { getBadges, getPrimaryBadgeForPage } from "@/lib/badgeUtils";
import { BadgePanel } from "@/components/badges/BadgePanel";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  const signatureSignals = [
    {
      title: "Academic Identity & Leadership",
      description:
        "Discover global teaching experience, advanced degrees, and strategic roles across About, Education, and Resume chapters.",
      icon: GraduationCap,
    },
    {
      title: "Research & Publication Engines",
      description:
        "Navigate the Investigations and Events hubs to review peer-reviewed papers, data stories, and keynote contributions.",
      icon: Microscope,
    },
    {
      title: "Innovation & Project Delivery",
      description:
        "The Works hub orchestrates Career highlights, Membership networks, Projects, Skills, and Certifications to evidence the technical fluency behind each engagement.",
      icon: Briefcase,
    },
    {
      title: "Networks & Opportunities",
      description:
        "Works > Memberships, Works > Career, and Contact routes open collaboration channels, governance roles, and partnership pathways.",
      icon: BadgeCheck,
    },
  ];

  const knowledgeClusters = [
    {
      title: "Scholarship & Identity",
      strapline: "Craft an executive snapshot of Mahdieh's academic brand.",
      accent: "from-primary/40 via-primary/10 to-transparent",
      items: [
        {
          name: "Home",
          summary:
            "Immersive hero narrative, media assets, and instant calls-to-action for stakeholders.",
          href: "/",
          icon: HomeIcon,
        },
        {
          name: "About",
          summary:
            "Human-centered biography combining research passions, personal ethos, and signature stories.",
          href: "/about",
          icon: UserRound,
        },
        {
          name: "Education",
          summary:
            "Three master's programmes plus specialised training powering data science and teaching excellence.",
          href: "/education",
          icon: GraduationCap,
        },
        {
          name: "Resume",
          summary:
            "Downloadable CV, recruiter highlights, and a board-ready qualifications digest.",
          href: "/resume",
          icon: ScrollText,
        },
      ],
    },
    {
      title: "Research & Innovation",
      strapline: "Track publications, keynotes, and applied experimentation.",
      accent: "from-ai-accent/30 via-primary/10 to-background",
      items: [
        {
          name: "Investigations",
          summary:
            "Unified research hub spanning articles, theses, monographs, and applied handbooks.",
          href: "/investigations",
          icon: Layers,
        },
        {
          name: "Events",
          summary:
            "Global workshop leadership, keynote storytelling, and certificate vault.",
          href: "/events/all",
          icon: Microscope,
        },
        {
          name: "Works",
          summary:
            "Gateway to projects, skill matrices, and verified credentials powering applied innovation.",
          href: "/works/all",
          icon: Briefcase,
        },
        {
          name: "Projects",
          summary:
            "Spotlight on innovation labs, cross-institution pilots, and impact narratives.",
          href: "/works/projects",
          icon: BookOpen,
        },
      ],
    },
    {
      title: "Engagement & Experience",
      strapline: "Showcase networks, competencies, and collaboration routes.",
      accent: "from-secondary/40 via-secondary/10 to-transparent",
      items: [
        {
          name: "Memberships",
          summary:
            "Professional bodies and communities amplifying research reach and advocacy.",
          href: "/works/memberships",
          icon: BadgeCheck,
        },
        {
          name: "Career",
          summary:
            "Experience timeline with leadership metrics, teaching missions, and innovation outputs.",
          href: "/works/career",
          icon: Briefcase,
        },
        {
          name: "Skills",
          summary:
            "Competency matrix covering data science, pedagogy, and strategic soft skills.",
          href: "/works/skills",
          icon: Puzzle,
        },
        {
          name: "Contact",
          summary:
            "Direct line for collaborations, consultations, and speaking engagements.",
          href: "/contact",
          icon: Send,
        },
      ],
    },
  ];

  const pageBadges = getBadges({ page: "home" });
  const heroBadge = getPrimaryBadgeForPage("home");
  const supportingBadges = pageBadges.filter(
    (badge) => badge.id !== heroBadge?.id && !badge.placements.includes("header"),
  );
  const totalBadgeCount = (heroBadge ? 1 : 0) + supportingBadges.length;

  const campaignSpotlights = [
    {
      title: "Investigations Research Hub",
      description:
        "Survey journal publications, graduate theses, and professional handbooks with bibliometric context and AI-enabled storytelling.",
      icon: Layers,
    href: "/investigations",
    cta: "Browse investigations",
    accent: "from-primary/20 via-primary/5 to-ai-accent/10",
  },
    {
      title: "Global Engagement Studio",
      description:
        "Map institutional partnerships, memberships, and collaboration frameworks ready for universities, NGOs, and private sector alliances.",
      icon: Send,
      href: "/works/memberships",
      cta: "Explore partnerships",
      accent: "from-secondary/20 via-background to-primary/10",
    },
    {
      title: "Capability & Talent Index",
      description:
        "Assess the skills architecture, teaching innovations, and project leadership powering data-driven transformation.",
      icon: Puzzle,
      href: "/works/skills",
      cta: "See competencies",
      accent: "from-ai-accent/20 via-secondary/10 to-primary/5",
    },
  ];

  const innovationTracks = [
    {
      title: "Learning Sprints",
      icon: BookOpen,
      emphasis: "Ongoing mastery & certification",
      bullets: [
        "Advanced analytics with Python, R, and AI-assisted pipelines.",
        "Machine learning methodologies tailored to academic research.",
        "Immersive visual analytics to communicate insight with clarity.",
      ],
    },
    {
      title: "Impact Missions",
      icon: Briefcase,
      emphasis: "Live engagements & delivery",
      bullets: [
        "Digitising institutional databases for evidence-based policy.",
        "Bibliometric and scientometric intelligence for research strategy.",
        "Innovation studies in language acquisition and edtech ecosystems.",
      ],
    },
  ];

  return (
    <div className="stack-gap-lg">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-ai-accent/5" />
        <div className="container relative w-full py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm"
                data-testid="badge-ai-powered"
              >
                <Sparkles className="h-4 w-4 text-ai-accent" />
                <span className="text-muted-foreground">AI-Powered Portfolio</span>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1
                  className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                  data-testid="heading-name"
                >
                  MAHDIEH FAKHAR
                </h1>
              </div>

              <p className="text-xl font-medium text-muted-foreground" data-testid="text-title">
                Data Scientist | Researcher | Academic Strategist
              </p>

              <p className="text-base text-muted-foreground/90 md:text-lg" data-testid="text-bio">
                Strategic data scientist and researcher shaping multilingual learning and digital
                transformation agendas through AI-driven analytics, bibliometrics, and evidence-based
                storytelling. Currently completing a Data Science & Big Data master's at UNIR (Spain)
                while leading cross-border collaborations across Europe and the Middle East.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/resume">
                  <Button size="lg" data-testid="button-view-resume" className="gap-2">
                    View Resume
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" data-testid="button-contact">
                    Contact Me
                  </Button>
                </Link>
              </div>

              {heroBadge && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <BadgePanel badge={heroBadge} layout="hero" />
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-3xl border border-primary/20 shadow-xl shadow-primary/20">
                <img
                  src={assetPath("/images/profile.jpg")}
                  alt="Mahdieh Fakhar"
                  className="h-full w-full object-cover object-[50%_28%]"
                />
              </div>
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-primary/20 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {supportingBadges.length > 0 && (
        <section id="certifications" className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl space-y-2"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" />
                Certifications Spotlight
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Credentials reinforcing trust for strategic collaborations
              </h2>
              <p className="text-base text-muted-foreground md:text-lg">
                Each badge is curated from the data layer, so future credentials only require updating
                <code className="mx-2 rounded bg-primary/10 px-2 py-0.5 text-sm">badges.json</code>
                to appear across the site.
              </p>
            </motion.div>

            <div className="auto-grid mt-10">
              {supportingBadges.map((badge) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                >
                  <BadgePanel badge={badge} layout="grid" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Atlas */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background py-24">
        <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-24 bottom-16 h-64 w-64 rounded-full bg-ai-accent/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-left md:max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Portfolio Atlas
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl md:whitespace-nowrap">
              Navigate the full academic and innovation spectrum at a glance
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Every page is architected as a campaign touchpoint, blending narrative, data, and design.
              Use this dynamic map to drop into the stories, dashboards, and assets most relevant to
              your collaboration goals.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr,1.25fr]">
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-6 rounded-3xl border border-primary/20 bg-background/80 p-8 shadow-lg shadow-primary/10 backdrop-blur"
            >
              {signatureSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <motion.div
                    key={signal.title}
                    variants={fadeInUp}
                    className="group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition hover:border-primary/30 hover:bg-primary/5"
                  >
                    <span className="rounded-xl bg-primary/10 p-3 text-primary transition group-hover:bg-primary/15 group-hover:text-primary/90">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold text-foreground">{signal.title}</h3>
                      <p className="text-sm text-muted-foreground">{signal.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="space-y-8">
              {knowledgeClusters.map((cluster, clusterIndex) => (
                <motion.div
                  key={cluster.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: clusterIndex * 0.08 }}
                  className="relative overflow-hidden rounded-3xl border border-primary/20 bg-background/70 p-6 shadow-xl shadow-primary/10 backdrop-blur"
                >
                  <div
                    className={`absolute -right-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-gradient-to-br ${cluster.accent} opacity-60 blur-3xl`}
                  />
                  <div className="relative space-y-6">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground">{cluster.title}</h3>
                        <p className="text-sm text-muted-foreground">{cluster.strapline}</p>
                      </div>
                      <span className="inline-flex h-10 items-center justify-center rounded-full border border-primary/30 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                        Core Chapters
                      </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {cluster.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group block rounded-2xl border border-transparent bg-background/60 p-4 shadow-sm shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
                            data-testid={`link-cluster-${item.name.toLowerCase()}`}
                          >
                            <div className="flex items-start gap-3">
                              <span className="rounded-lg bg-primary/10 p-2 text-primary transition group-hover:bg-primary/15 group-hover:text-primary/90">
                                <Icon className="h-5 w-5" />
                              </span>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <p className="text-base font-semibold text-foreground">
                                    {item.name}
                                  </p>
                                  <ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" />
                                </div>
                                <p className="text-sm text-muted-foreground">{item.summary}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Spotlights */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-left md:max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-ai-accent/20 px-4 py-1 text-sm font-semibold text-ai-accent">
            Signature Campaigns
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Elevate the stories that matter to your audience
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Each spotlight is built for investors, universities, and innovation partners seeking
            rapid insight into Mahdieh's portfolio. Activate the module that aligns with your goals
            and dive in.
          </p>
        </motion.div>

        <div className="auto-grid mt-12 xl:auto-grid-lg">
          {campaignSpotlights.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
              >
                <Link href={card.href}>
                  <Card className="group relative h-full overflow-hidden border border-primary/25 bg-background/80 shadow-lg shadow-primary/15 transition hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl">
                    <div
                      className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${card.accent} opacity-70 blur-3xl transition group-hover:scale-110`}
                    />
                    <CardContent className="relative flex h-full flex-col gap-4 p-6">
                      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                        <Icon className="h-4 w-4" />
                        Spotlight
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                        {card.cta}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Innovation Pipeline */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-left md:max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1 text-sm font-semibold text-primary">
              Innovation Pipeline
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl md:whitespace-nowrap">
              Where the next chapter of research and impact is being built
            </h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              Continuous upskilling meets live delivery. These parallel tracks keep the portfolio
              future-ready for strategic partners, policymakers, and learners worldwide.
            </p>
          </motion.div>

          <div className="auto-grid mt-12">
            {innovationTracks.map((track, index) => {
              const Icon = track.icon;
              return (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <Card className="h-full border border-primary/25 bg-background/80 shadow-lg shadow-primary/15 transition hover:-translate-y-1.5 hover:shadow-xl">
                    <CardContent className="flex h-full flex-col gap-5 p-6">
                      <div className="flex items-center gap-3">
                        <span className="rounded-xl bg-primary/10 p-3 text-primary">
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{track.title}</h3>
                          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/70">
                            {track.emphasis}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {track.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-semibold text-muted-foreground">
            <span className="rounded-full border border-primary/30 px-4 py-1 text-primary">
              Key Resources
            </span>
            <Link
              href="/education"
              className="rounded-full border border-transparent bg-primary/10 px-3 py-1 text-primary transition hover:border-primary/40 hover:bg-primary/15"
            >
              Education dossier
            </Link>
            <Link
              href="/works/all"
              className="rounded-full border border-transparent bg-primary/10 px-3 py-1 text-primary transition hover:border-primary/40 hover:bg-primary/15"
            >
              Works hub
            </Link>
            <Link
              href="/investigations"
              className="rounded-full border border-transparent bg-primary/10 px-3 py-1 text-primary transition hover:border-primary/40 hover:bg-primary/15"
            >
              Investigations archive
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
