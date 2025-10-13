import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, Sparkles } from "lucide-react";

export default function Home() {
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
