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
  FileText,
  Microscope,
  BadgeCheck,
  Puzzle,
  ScrollText,
  Send,
} from "lucide-react";

export default function Home() {
  const pageHighlights = [
    {
      title: "Home",
      href: "/",
      summary:
        "An AI-orchestrated landing experience that introduces Mahdieh’s brand voice, portfolio pillars, and calls-to-action.",
      icon: HomeIcon,
      accent: "from-primary/25 via-primary/5 to-transparent",
    },
    {
      title: "About",
      href: "/about",
      summary:
        "Get a human and data-driven snapshot of Mahdieh’s academic journey, passions, and current initiatives.",
      icon: UserRound,
      accent: "from-secondary/30 via-background to-transparent",
    },
    {
      title: "Education",
      href: "/education",
      summary:
        "Explore a curated catalogue of degrees and certifications with insights on how each fuels data and pedagogy expertise.",
      icon: GraduationCap,
      accent: "from-primary/20 via-background to-secondary/20",
    },
    {
      title: "Articles",
      href: "/articles",
      summary:
        "Survey peer-reviewed publications and AI-assisted summaries that spotlight Mahdieh’s scholarly contributions.",
      icon: FileText,
      accent: "from-primary/15 via-background to-primary/5",
    },
    {
      title: "Conferences",
      href: "/conferences",
      summary:
        "Follow keynote sessions and workshops delivered across the globe, enhanced with intelligent tagging and takeaways.",
      icon: Microscope,
      accent: "from-secondary/25 via-background to-transparent",
    },
    {
      title: "Memberships",
      href: "/memberships",
      summary:
        "Review professional communities and networks that amplify Mahdieh’s voice in education, AI, and research.",
      icon: BadgeCheck,
      accent: "from-primary/15 via-transparent to-secondary/15",
    },
    {
      title: "Career",
      href: "/career",
      summary:
        "Trace a data-informed career timeline featuring roles, impact metrics, and AI-powered reflections on leadership.",
      icon: Briefcase,
      accent: "from-primary/25 via-background to-transparent",
    },
    {
      title: "Skills",
      href: "/skills",
      summary:
        "Digest a competency matrix that balances technical stacks, teaching methodologies, and strategic soft skills.",
      icon: Puzzle,
      accent: "from-secondary/25 via-primary/5 to-transparent",
    },
    {
      title: "Projects",
      href: "/projects",
      summary:
        "Dive into living case studies with visuals, datasets, and AI narrative summaries detailing innovation outcomes.",
      icon: BookOpen,
      accent: "from-primary/20 via-background to-secondary/20",
    },
    {
      title: "Resume",
      href: "/resume",
      summary:
        "Access an executive-ready dossier featuring downloadable CV assets and recruiter-friendly highlights.",
      icon: ScrollText,
      accent: "from-secondary/20 via-transparent to-primary/20",
    },
    {
      title: "Contact",
      href: "/contact",
      summary:
        "Connect directly for collaborations, consultations, or speaking engagements with context-aware routing.",
      icon: Send,
      accent: "from-primary/20 via-background to-transparent",
    },
  ];

  const summaryContainer = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const summaryItem = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 18,
      },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-ai-accent/5"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 w-full">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm" data-testid="badge-ai-powered">
                <Sparkles className="h-4 w-4 text-ai-accent" />
                <span className="text-muted-foreground">AI-Powered Portfolio</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" data-testid="heading-name">
                MAHDIEH FAKHAR
              </h1>
              
              <p className="text-xl text-muted-foreground font-medium" data-testid="text-title">
                Data Scientist | Researcher | AI Enthusiast
              </p>
              
              <p className="text-base text-muted-foreground max-w-2xl" data-testid="text-bio">
                I'm currently a Momentum master student studying data science and big data at UNIR, Spain. 
                I am passionate about analyzing data, doing scientometric and bibliometric analysis, and learning 
                new software and applications employed in data analysis.
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden border shadow-lg">
                <img
                  src="/images/profile.jpg"
                  alt="Mahdieh Fakhar"
                  className="h-full w-full object-cover object-[50%_28%]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Navigation Summary */}
      <section className="bg-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Intelligent Overview
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Preview every section at a glance
            </h2>
            <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
              از طریق این معرفی کوتاه، مسیر موردنظر خود را انتخاب کنید؛ هر بخش خلاصه‌ای حرفه‌ای با طراحی الهام‌گرفته از برند اسپانیا دارد.
            </p>
          </div>
          <motion.div
            className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={summaryContainer}
          >
            {pageHighlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <motion.section
                  key={highlight.title}
                  variants={summaryItem}
                  className="rounded-3xl border border-primary/30 bg-background p-8 shadow-lg shadow-primary/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-2xl font-bold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground md:text-base">
                    {highlight.summary}
                  </p>
                  <Link
                    href={highlight.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                  >
                    See more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.section>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/education">
              <Card className="hover-elevate active-elevate-2 transition-shadow cursor-pointer h-full" data-testid="card-education">
                <CardContent className="p-6">
                  <GraduationCap className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    3 Master's degrees including ongoing Big Data & Data Science at UNIR, Spain
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/articles">
              <Card className="hover-elevate active-elevate-2 transition-shadow cursor-pointer h-full" data-testid="card-publications">
                <CardContent className="p-6">
                  <BookOpen className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Publications</h3>
                  <p className="text-muted-foreground text-sm">
                    Published research on machine translation, digital competence, and language learning
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/projects">
              <Card className="hover-elevate active-elevate-2 transition-shadow cursor-pointer h-full" data-testid="card-projects">
                <CardContent className="p-6">
                  <Briefcase className="h-10 w-10 text-ai-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Projects</h3>
                  <p className="text-muted-foreground text-sm">
                    Research projects at IHUPA and AGORA focusing on language teaching innovation
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6" data-testid="heading-current-work">Currently Working On</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg" data-testid="heading-current-learning">🎓 Learning</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li data-testid="text-learning-0">• Data analysis with R, Python and AI</li>
                    <li data-testid="text-learning-1">• Machine learning for scientific research</li>
                    <li data-testid="text-learning-2">• Advanced data visualization techniques</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg" data-testid="heading-current-working">💼 Working</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li data-testid="text-working-0">• Data analysis and digitalization of databases</li>
                    <li data-testid="text-working-1">• Bibliometric and scientometric analysis</li>
                    <li data-testid="text-working-2">• Research on language teaching innovations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
