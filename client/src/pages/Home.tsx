import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CalendarRange,
  GraduationCap,
  Layers,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";
import { assetPath } from "@/lib/basePath";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const nowItems = [
  "Momentum master student advancing data science and big data foundations.",
  "Building automated data pipelines and intelligent document analysis workflows.",
  "Hands-on with Python, R, and AI for research-grade analytics.",
  "Seeking courses on data visualization, AI in data analysis, and database digitalization.",
];

const siteSections = [
  {
    title: "About & Resume",
    description: "Who I am, my academic path, and a full curriculum vitae for quick download.",
    links: [
      { label: "About", href: "/about" },
      { label: "Resume", href: "/resume" },
    ],
    icon: UserRound,
  },
  {
    title: "Education",
    description: "Formal education, programs, and targeted courses or workshops.",
    links: [
      { label: "Overview", href: "/education" },
      { label: "Academic", href: "/education/academic" },
      { label: "Courses", href: "/education/courses" },
      { label: "Workshops", href: "/education/workshops" },
    ],
    icon: GraduationCap,
  },
  {
    title: "Investigations",
    description: "Research outputs including journal articles, theses, books, and handbooks.",
    links: [{ label: "Investigations", href: "/investigations" }],
    icon: Layers,
  },
  {
    title: "Works",
    description: "Professional activity hub: career, memberships, projects, skills, and certifications.",
    links: [
      { label: "Works Overview", href: "/works" },
      { label: "Career", href: "/works/career" },
      { label: "Memberships", href: "/works/memberships" },
      { label: "Projects", href: "/works/projects" },
      { label: "Skills", href: "/works/skills" },
      { label: "Certifications", href: "/works/certifications" },
    ],
    icon: Briefcase,
  },
  {
    title: "Events",
    description: "Academic and professional events with roles across conferences, seminars, webinars, congresses, and symposia.",
    links: [{ label: "Events", href: "/events" }],
    icon: CalendarRange,
  },
  {
    title: "Contact",
    description: "Collaborations, invitations, and questions about data analysis tools or workflows.",
    links: [{ label: "Contact", href: "/contact" }],
    icon: Mail,
  },
];

const dataSkills = [
  "Data analysis with R, Python, and Artificial Intelligence",
  "Data visualization and dashboarding",
  "Database automatization and digitalization",
  "Bibliometric and scientometric analysis",
  "Web design for academic and research contexts",
];

const interests = [
  "Analyzing data for insight and decision-making",
  "Scientometric and bibliometric analysis",
  "Learning new software and research tooling",
];

const highlights = [
  "Journal publications in applied linguistics, technology-mediated learning, and language education",
  "Special issue: Approaches to Machine Translation (Translation and Translanguaging in Multilingual Contexts)",
  "Sample designed web pages, including the site for the Instituto de Investigación en Humanidades y Patrimonio UNED-Alcañiz (IHUPA)",
  "Scientific Committee member for several conferences",
  "II Jornadas ATLAS–ÁGORA de Formación de Profesorado de Lenguas en Entornos Rurales",
];

export default function Home() {
  return (
    <div className="stack-gap-lg">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-ai-accent/5">
        <div className="container relative mx-auto grid min-h-[80vh] items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-4 w-4" />
              AI-powered Academic Portfolio
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Mahdieh Fakhar – AI-powered data science & AI portfolio
              </h1>
              <p className="text-lg font-semibold text-primary">
                Momentum master student in Data Science & Big Data | Researcher in scientometrics,
                bibliometrics, and data analysis
              </p>
              <p className="text-base text-muted-foreground md:text-lg">
                AI-powered digital portfolio for data science and research. I focus on data analysis,
                scientometrics, bibliometrics, and intelligent document workflows. Explore my
                investigations, academic roles, projects, and ways to collaborate.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Contact
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="gap-2">
                  About & Resume
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-3xl border border-primary/20 shadow-xl shadow-primary/20">
              <img
                src={assetPath("/images/profile.jpg")}
                alt="Mahdieh Fakhar data science and AI academic portfolio portrait"
                className="h-full w-full object-cover object-[50%_28%]"
              />
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-primary/15 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* What I'm Doing Now */}
      <section className="container mx-auto px-6 py-16 lg:px-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-3"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Currently</p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">What I'm working on</h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Momentum master studies, active data analysis, and hands-on learning across R, Python,
            and AI.
          </p>
        </motion.div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {nowItems.map((item) => (
            <motion.div
              key={item}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-background/70 p-4 shadow-sm"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <p className="text-sm text-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-sm font-semibold text-primary">
          Ask me about the software and applications employed in data analysis.
        </p>
      </section>

      {/* Site Overview */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/15 to-background py-16">
        <div className="container relative mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-3"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Site Overview
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Navigate the site</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Quick entry points to every major section: About, Education, Investigations, Works,
              Events, Resume, and Contact.
            </p>
          </motion.div>

          <div className="mt-10 auto-grid xl:auto-grid-lg">
            {siteSections.map((section) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card className="h-full border border-primary/20 bg-background/80 shadow-sm shadow-primary/10">
                    <CardContent className="space-y-4 p-6">
                      <div className="flex items-center gap-3">
                        <span className="rounded-xl bg-primary/10 p-3 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                          <p className="text-sm text-muted-foreground">{section.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {section.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
                          >
                            {link.label}
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills & Interests */}
      <section className="container mx-auto px-6 py-16 lg:px-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-3"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Skills & Interests
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Data & Research Focus</h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Core capabilities in data science, visualization, and research analytics, plus the topics
            I enjoy exploring.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card className="h-full border border-primary/20 bg-background/80 shadow-sm shadow-primary/10">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Layers className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-foreground">Data & Research Skills</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {dataSkills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full border border-primary/20 bg-background/80 shadow-sm shadow-primary/10">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-primary/10 p-3 text-primary">
                  <BookOpen className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-foreground">Interests</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {interests.map((interest) => (
                  <li key={interest} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container relative mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-3"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Highlights
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Featured work</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              A snapshot of published work, designed sites, and event leadership. Dive deeper via
              Investigations, Works, and Events.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-2xl border border-primary/25 bg-background/80 p-5 shadow-sm shadow-primary/10"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-6 py-16 lg:px-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-primary/20 bg-background/80 p-8 shadow-sm shadow-primary/10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Contact
              </p>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Let's collaborate or talk data
              </h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Reach out about data analysis projects, events, or questions on the software and
                applications used in data analysis.
              </p>
              <a
                href="mailto:mfsh.intl@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
              >
                <Mail className="h-4 w-4" />
                mfsh.intl@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Contact
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/investigations">
                <Button size="lg" variant="outline" className="gap-2">
                  View research
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
