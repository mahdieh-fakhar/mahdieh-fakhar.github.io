import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { CareerEvidenceCard, type Slide } from "@/components/career/CareerEvidenceCard";
import { StatsSection } from "@/components/StatsSection";
import {
  publications,
  researchFocusAreas,
  conferenceProceedings,
  type Publication,
} from "@/data/researchOutputs";
import {
  handbookEntries,
  thesisRecords,
  type HandbookEntry,
  type ThesisRecord,
} from "@/data/investigationCollections";

type InvestigationsParams = {
  category?: string;
};

type InvestigationsProps = {
  params?: InvestigationsParams;
};

type NavItem = {
  label: string;
  slug: string;
  description: string;
};

const navItems: NavItem[] = [
  { label: "Overview", slug: "overview", description: "" },
  { label: "Articles", slug: "articles", description: "Published manuscripts & reviews" },
  { label: "Theses", slug: "theses", description: "Graduate research portfolio" },
  { label: "Books", slug: "books", description: "Authored & edited volumes" },
  { label: "Handbooks", slug: "handbooks", description: "Practical guides & toolkits" },
];

const investigationStats = [
  { value: publications.length, label: "Publications Tracked" },
  { value: thesisRecords.length, label: "Graduate Theses" },
  { value: handbookEntries.length, label: "Handbooks & Toolkits" },
  { value: conferenceProceedings.length, label: "Conference Series" },
];

const articleStats = [
  { value: publications.length, label: "Publications Tracked" },
  { value: conferenceProceedings.length, label: "Conference Series" },
];

const thesisStats = [{ value: thesisRecords.length, label: "Graduate Theses" }];

const bookStats = [
  { value: publications.filter((pub) => pub.type === "book").length, label: "Books & Monographs" },
];

const handbookStats = [{ value: handbookEntries.length, label: "Handbooks & Toolkits" }];

const overviewGlance = [
  { emoji: "🧪", label: "Research investigations", detail: "AI, data, and language-centric studies." },
  { emoji: "📄", label: "Peer-reviewed outputs", detail: "Articles, proceedings, and scholarly reviews." },
  { emoji: "📘", label: "Academic theses", detail: "In-depth explorations of focused research questions." },
  { emoji: "📚", label: "Books & handbooks", detail: "Long-form works bridging theory and practice." },
];

const overviewCards = [
  {
    title: "Articles",
    body:
      "Journal articles, conference papers, and peer-reviewed manuscripts covering AI, digital transformation, and applied linguistics.",
    href: "/investigations/articles",
    cta: "View All Articles →",
  },
  {
    title: "Theses",
    body:
      "Graduate theses demonstrating research depth, methodological rigor, and domain-specific inquiry across data and language topics.",
    href: "/investigations/theses",
    cta: "Explore Theses →",
  },
  {
    title: "Books",
    body:
      "Authored and edited volumes that expand on research themes, synthesize findings, and provide comprehensive narratives.",
    href: "/investigations/books",
    cta: "Browse Books →",
  },
  {
    title: "Handbooks",
    body:
      "Practical guides and manuals translating research into actionable frameworks, tools, and classroom-ready resources.",
    href: "/investigations/handbooks",
    cta: "See Handbooks →",
  },
];

const researchThemes = [
  { title: "AI-assisted research communication", detail: "Integrating AI to improve translation, summarization, and storytelling in scientific outputs." },
  { title: "Bibliometrics & scientometrics", detail: "Evidence-based insights on research impact, collaboration networks, and publication trends." },
  { title: "Digital transformation in education", detail: "Practical frameworks for adopting data-driven methods in teaching, assessment, and curriculum design." },
];

const publicationFallbackSlides: Slide[] = [];
const publicationTypeLabels: Record<Publication["type"], string> = {
  journal: "Journal Article",
  book: "Book / Monograph",
  review: "Peer Review",
};
const publicationIconLocation: Record<Publication["type"], string> = {
  journal: "Indexed venue",
  book: "Publisher",
  review: "Publication outlet",
};
const thesisFallbackSlides: Slide[] = [{ src: "/images/profile.jpg", alt: "Thesis evidence placeholder" }];
const handbookFallbackSlides: Slide[] = [{ src: "/images/profile.jpg", alt: "Handbook evidence placeholder" }];

function getPublicationSlides(): Slide[] {
  return [];
}

function getPublicationTimestamp(pub: Publication): number {
  if (pub.date) {
    const explicit = Date.parse(pub.date);
    if (!Number.isNaN(explicit)) {
      return explicit;
    }
  }

  const fallback = Date.parse(pub.year);
  if (!Number.isNaN(fallback)) {
    return fallback;
  }

  return 0;
}

function sortPublicationsByDate(items: Publication[]): Publication[] {
  return [...items].sort((a, b) => getPublicationTimestamp(b) - getPublicationTimestamp(a));
}

function getPublicationHighlights(pub: Publication): string[] {
  if (pub.highlightsOverride && pub.highlightsOverride.length > 0) {
    return pub.highlightsOverride;
  }

  const highlights: string[] = [];
  highlights.push(`Authors: ${pub.authors}`);
  highlights.push(`Venue: ${pub.venue}`);
  highlights.push(`Publication Year: ${pub.year}`);

  if (pub.status) {
    highlights.push(`Status: ${pub.status}`);
  }

  if (pub.description) {
    highlights.push(pub.description);
  }

  return highlights;
}

function getPublicationCategories(pub: Publication): string[] {
  const categories: string[] = [];

  if (pub.type === "review") {
    categories.push("Book Review");
  } else if (pub.type === "journal" && pub.status === "Conference Paper") {
    categories.push("Conference Paper");
  } else if (pub.type === "journal") {
    categories.push("Journal Article");
  } else if (pub.type === "book") {
    categories.push("Book / Monograph");
  }

  if (pub.status && pub.status !== "Conference Paper") {
    categories.push(pub.status);
  }

  return Array.from(new Set(categories));
}

function getThesisHighlights(record: ThesisRecord): string[] {
  const highlights: string[] = [
    `Degree: ${record.degree}`,
    `Institution: ${record.institution}`,
    `Research Focus: ${record.focus}`,
    record.summary,
  ];

  return highlights;
}

function getThesisSlides(): Slide[] {
  return thesisFallbackSlides;
}

function getHandbookHighlights(entry: HandbookEntry): string[] {
  return [
    `Domain: ${entry.domain}`,
    `Format: ${entry.format}`,
    entry.summary,
  ];
}

function getHandbookSlides(): Slide[] {
  return handbookFallbackSlides;
}

const PublicationCards = ({ items }: { items: Publication[] }) => {
  const sortedItems = sortPublicationsByDate(items);

  return (
    <div className="stack-gap-md">
      {sortedItems.map((pub, index) => (
        <motion.div
          key={pub.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <CareerEvidenceCard
            title={pub.title}
            roleLabel={pub.status ?? publicationTypeLabels[pub.type]}
            organization={pub.venue}
            location={publicationIconLocation[pub.type]}
            period={pub.year}
            highlights={getPublicationHighlights(pub)}
            slides={getPublicationSlides()}
            abstract={pub.abstract}
            referenceUrl={pub.url}
            referenceLabel={pub.urlLabel}
            downloadUrl={pub.downloadUrl}
            downloadLabel={pub.downloadLabel}
            categoryTags={getPublicationCategories(pub)}
          />
        </motion.div>
      ))}
    </div>
  );
};

const ArticlesSection = ({ includeFocus = true }: { includeFocus?: boolean }) => {
  const articleItems = useMemo(
    () => publications.filter((pub) => pub.type === "journal" || pub.type === "review"),
    [publications]
  );
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryOptions = useMemo(() => {
    const labels = new Set<string>();
    articleItems.forEach((pub) => {
      getPublicationCategories(pub).forEach((label) => labels.add(label));
    });
    const priority = ["Journal Article", "Conference Paper", "Book Review"];
    return Array.from(labels).sort((a, b) => {
      const aIndex = priority.indexOf(a);
      const bIndex = priority.indexOf(b);
      if (aIndex === -1 && bIndex === -1) {
        return a.localeCompare(b);
      }
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
  }, [articleItems]);

  const filteredArticles = useMemo(
    () =>
      articleItems.filter((pub) => {
        if (activeCategory === "all") {
          return true;
        }
        return getPublicationCategories(pub).includes(activeCategory);
      }),
    [articleItems, activeCategory]
  );

  return (
    <section className="space-y-6" aria-labelledby="investigations-articles-heading">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-foreground">Browse by Category</h3>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === "all"
                    ? "border-primary bg-primary text-primary-foreground shadow"
                    : "border-border bg-background hover:border-primary hover:text-primary"
                }`}
              >
                All Articles
              </button>
              {categoryOptions.map((label) => (
                <button
                  type="button"
                  key={label}
                  onClick={() => setActiveCategory(label)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === label
                      ? "border-primary bg-primary text-primary-foreground shadow"
                      : "border-border bg-background hover:border-primary hover:text-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <PublicationCards items={filteredArticles} />
        </div>
      </div>
    </section>
  );
};

const ThesesSection = ({ records }: { records: ThesisRecord[] }) => (
  <section className="space-y-6" aria-labelledby="investigations-theses-heading">
    <div className="space-y-2">
      <h2 id="investigations-theses-heading" className="text-2xl font-semibold text-foreground">
        Theses & Dissertations
      </h2>
      <p className="max-w-3xl text-sm text-muted-foreground">
        Graduate research programmes highlighting methodological innovation and policy impact.
      </p>
    </div>

    <div className="rounded-2xl border border-dashed border-primary/30 bg-muted/40 p-6 text-sm text-muted-foreground">
      Thesis entries are not available right now.
    </div>
  </section>
);

const BooksSection = ({ items }: { items: Publication[] }) => (
  <section className="space-y-6" aria-labelledby="investigations-books-heading">
    <div className="space-y-2">
      <h2 id="investigations-books-heading" className="text-2xl font-semibold text-foreground">
        Books & Monographs
      </h2>
      <p className="max-w-3xl text-sm text-muted-foreground">
        Long-form scholarship advancing digital competence, language learning, and educational technology.
      </p>
    </div>
    <div className="rounded-2xl border border-dashed border-primary/30 bg-muted/40 p-6 text-sm text-muted-foreground">
      Book entries are not available right now.
    </div>
  </section>
);

const HandbooksSection = ({ items }: { items: HandbookEntry[] }) => (
  <section className="space-y-6" aria-labelledby="investigations-handbooks-heading">
    <div className="space-y-2">
      <h2 id="investigations-handbooks-heading" className="text-2xl font-semibold text-foreground">
        Handbooks & Toolkits
      </h2>
      <p className="max-w-3xl text-sm text-muted-foreground">
        Practitioner-ready assets supporting analytics pipelines, AI adoption, and educator upskilling.
      </p>
    </div>

    <div className="rounded-2xl border border-dashed border-primary/30 bg-muted/40 p-6 text-sm text-muted-foreground">
      Handbook entries are not available right now.
    </div>
  </section>
);

const renderContent = (slug: string) => {
  const bookPublications = publications.filter((pub) => pub.type === "book");

  switch (slug) {
    case "overview":
      return (
        <div className="stack-gap-xl">
          <section className="grid gap-4 rounded-2xl border border-primary/15 bg-muted/40 p-6 sm:grid-cols-2 lg:grid-cols-4">
            {overviewGlance.map((item) => (
              <div key={item.label} className="space-y-2 rounded-xl border border-transparent p-3">
                <div className="text-2xl">{item.emoji}</div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </section>

          <section className="stack-gap-md">
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold text-foreground">Choose your path</h3>
              <p className="text-sm text-muted-foreground">
                Jump directly to the research output type that matches your needs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {overviewCards.map((card) => (
                <Card key={card.title} className="h-full border border-primary/20 bg-background/90 shadow-sm">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-foreground">{card.title}</h4>
                      <p className="text-sm text-muted-foreground">{card.body}</p>
                    </div>
                    <Link
                      href={card.href}
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                    >
                      {card.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="grid gap-4 rounded-2xl border border-primary/20 bg-card/90 p-6 sm:grid-cols-[1.1fr_1fr]">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Research Themes</h3>
              <p className="text-sm text-muted-foreground">
                Core themes guiding investigations, methodologies, and applied outputs.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {researchThemes.map((theme) => (
                  <li key={theme.title} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{theme.title}</p>
                      <p>{theme.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">Navigation</h3>
              <pre className="overflow-x-auto rounded-lg bg-background/80 p-4 text-xs text-muted-foreground">
{`Investigations
├── Overview (this page)
├── Articles
├── Theses
├── Books
└── Handbooks`}
              </pre>
              <div className="flex flex-wrap gap-2 text-sm font-semibold text-primary">
                <Link href="/investigations/articles" className="rounded-full border border-primary/30 px-3 py-1 hover:bg-primary/10">
                  Articles
                </Link>
                <Link href="/investigations/theses" className="rounded-full border border-primary/30 px-3 py-1 hover:bg-primary/10">
                  Theses
                </Link>
                <Link href="/investigations/books" className="rounded-full border border-primary/30 px-3 py-1 hover:bg-primary/10">
                  Books
                </Link>
                <Link href="/investigations/handbooks" className="rounded-full border border-primary/30 px-3 py-1 hover:bg-primary/10">
                  Handbooks
                </Link>
              </div>
            </div>
          </section>
        </div>
      );
    case "articles":
      return (
        <>
          <ArticlesSection />
          <StatsSection className="mt-10" stats={articleStats} />
        </>
      );
    case "theses":
      return (
        <>
          <ThesesSection records={thesisRecords} />
          <StatsSection className="mt-10" stats={thesisStats} />
        </>
      );
    case "books":
      return (
        <>
          <BooksSection items={bookPublications} />
          <StatsSection className="mt-10" stats={bookStats} />
        </>
      );
    case "handbooks":
      return (
        <>
          <HandbooksSection items={handbookEntries} />
          <StatsSection className="mt-10" stats={handbookStats} />
        </>
      );
    default:
      return (
        <div className="stack-gap-lg">
          <ArticlesSection includeFocus />
          <ThesesSection records={thesisRecords} />
          <BooksSection items={bookPublications} />
          <HandbooksSection items={handbookEntries} />
          <StatsSection className="mt-10" stats={investigationStats} />
        </div>
      );
  }
};

export default function Investigations({ params }: InvestigationsProps = {}) {
  const [location, setLocation] = useLocation();
  const slug = params?.category ?? "overview";
  const isValidSlug = navItems.some((item) => item.slug === slug);
  const activeSlug = isValidSlug ? slug : "overview";
  const activeItem = navItems.find((item) => item.slug === activeSlug) ?? navItems[0];

  useEffect(() => {
    if (!params?.category && location !== "/investigations") {
      setLocation("/investigations", { replace: true });
    }
  }, [location, params?.category, setLocation]);

  useEffect(() => {
    if (params?.category === "all" || params?.category === "overview") {
      setLocation("/investigations", { replace: true });
      return;
    }
    if (!isValidSlug) {
      setLocation("/investigations", { replace: true });
    }
  }, [isValidSlug, params?.category, setLocation]);

  return (
    <div className="page-template-career">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-md"
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Research Portfolio
            </p>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              {activeItem.slug === "articles"
                ? "Articles"
                : activeItem.slug === "theses"
                  ? "Theses"
                  : activeItem.slug === "books"
                    ? "Books"
                    : activeItem.slug === "handbooks"
                      ? "Handbooks"
                      : "Investigations Overview"}
            </h1>
            {activeItem.slug === "overview" ? (
              <p className="max-w-3xl text-base text-muted-foreground">
                Explore research articles, theses, and investigations by Mahdieh Fakhar in scientometrics, bibliometrics, data science, and AI. Each study is presented with context, methodology, and key findings so that other researchers and students can reuse ideas, datasets, and workflows in their own academic projects.
              </p>
            ) : (
              <p className="max-w-2xl text-sm text-muted-foreground">
                {activeItem.slug === "articles"
                  ? "Peer-reviewed publications, reviews, and journal outputs curated for impact and rigor."
                  : activeItem.slug === "theses"
                    ? "Graduate theses highlighting research depth, methodologies, and scholarly contributions."
                    : activeItem.slug === "books"
                      ? "Authored and edited volumes, monographs, and book-length contributions."
                    : "Practical guides and toolkits designed for applied learning and field use."}
              </p>
            )}
            {activeItem.slug === "overview" && (
              <p className="text-sm font-semibold text-primary/80">
                Scientometrics and bibliometrics research with data-driven, AI-aware workflows.
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-sm mobile:justify-start">
            <nav
              className="flex flex-wrap justify-center gap-2 mobile:flex-nowrap mobile:justify-start mobile:overflow-x-auto mobile:pr-2"
              aria-label="Investigations categories"
            role="tablist"
          >
            {navItems.map((item) => (
              <Link
                key={item.slug}
                href={item.slug === "overview" ? "/investigations" : `/investigations/${item.slug}`}
                className={`inline-flex items-center rounded-full border-2 px-4 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                  item.slug === activeSlug
                    ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/40"
                    : "border-primary/30 text-primary/80 hover:border-primary hover:text-primary"
                }`}
                  role="tab"
                  aria-selected={item.slug === activeSlug}
                  tabIndex={item.slug === activeSlug ? 0 : -1}
                >
                  {item.label}
                </Link>
            ))}
          </nav>
        </div>
        </div>

        {renderContent(activeSlug)}
        {activeItem.slug === "overview" && <StatsSection className="mt-10" stats={investigationStats} />}
      </motion.div>
    </div>
  );
}
