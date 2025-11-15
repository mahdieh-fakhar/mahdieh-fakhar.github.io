import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  { label: "All", slug: "all", description: "Combined research view" },
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

function getPublicationHighlights(pub: Publication): string[] {
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

const PublicationCards = ({ items }: { items: Publication[] }) => (
  <div className="stack-gap-md">
    {items.map((pub, index) => (
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
        />
      </motion.div>
    ))}
  </div>
);

const ArticlesSection = ({ includeFocus = true }: { includeFocus?: boolean }) => {
  const journalPublications = publications.filter((pub) => pub.type === "journal");
  const reviewPublications = publications.filter((pub) => pub.type === "review");

  return (
    <section className="space-y-6" aria-labelledby="investigations-articles-heading">
      <div className="space-y-2">
        <h2 id="investigations-articles-heading" className="text-2xl font-semibold text-foreground">
          Articles & Publications
        </h2>
        <p className="max-w-3xl text-sm text-muted-foreground">
          Peer-reviewed outputs accompanied by bibliometric insights, conference dissemination, and
          applied commentary.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Indexed Journal Publications</h3>
          <PublicationCards items={journalPublications} />
        </div>

        {reviewPublications.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Book Reviews & Commentaries</h3>
            <PublicationCards items={reviewPublications} />
          </div>
        )}

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Conference Proceedings</h3>
          <Card>
            <CardHeader>
              <CardTitle>Notable Conferences (13+ papers)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Representative congresses and symposia where findings were showcased.
              </p>
              <div className="auto-grid">
                {conferenceProceedings.map((entry) => (
                  <span key={entry} className="text-sm text-foreground">
                    {entry}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {includeFocus && (
          <Card className="bg-gradient-to-br from-accent/5 to-primary/5">
            <CardHeader>
              <CardTitle>Research Focus Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mobile:flex-nowrap mobile:overflow-x-auto mobile:pr-2">
                {researchFocusAreas.map((area) => (
                  <Badge key={area} variant="secondary">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
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

    <div className="space-y-6">
      {records.map((record, index) => (
        <motion.div
          key={record.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <CareerEvidenceCard
            title={record.title}
            organization={record.institution}
            location={record.focus}
            period={record.year}
            roleLabel={record.degree}
            highlights={getThesisHighlights(record)}
            slides={getThesisSlides()}
          />
        </motion.div>
      ))}
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
    <PublicationCards items={items} />
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

    <div className="space-y-6">
      {items.map((entry, index) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <CareerEvidenceCard
            title={entry.title}
            organization={entry.domain}
            location={`${entry.format} reference`}
            period="Updated periodically"
            roleLabel={entry.format}
            highlights={getHandbookHighlights(entry)}
            slides={getHandbookSlides()}
          />
        </motion.div>
      ))}
    </div>
  </section>
);

const renderContent = (slug: string) => {
  const bookPublications = publications.filter((pub) => pub.type === "book");

  switch (slug) {
    case "articles":
      return (
        <ArticlesSection />
      );
    case "theses":
      return <ThesesSection records={thesisRecords} />;
    case "books":
      return <BooksSection items={bookPublications} />;
    case "handbooks":
      return <HandbooksSection items={handbookEntries} />;
    case "all":
    default:
      return (
        <div className="stack-gap-lg">
          <ArticlesSection includeFocus />
          <ThesesSection records={thesisRecords} />
          <BooksSection items={bookPublications} />
          <HandbooksSection items={handbookEntries} />
        </div>
      );
  }
};

export default function Investigations({ params }: InvestigationsProps = {}) {
  const [location, setLocation] = useLocation();
  const slug = params?.category ?? "all";
  const isValidSlug = navItems.some((item) => item.slug === slug);
  const activeSlug = isValidSlug ? slug : "all";
  const activeItem = navItems.find((item) => item.slug === activeSlug) ?? navItems[0];

  useEffect(() => {
    if (!params?.category) {
      setLocation("/investigations/all", { replace: true });
    }
  }, [params?.category, setLocation]);

  useEffect(() => {
    if (!isValidSlug) {
      setLocation("/investigations/all", { replace: true });
    }
  }, [isValidSlug, setLocation]);

  return (
    <div className="page-template-career">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-md"
      >
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Research Portfolio
              </p>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Investigations</h1>
            </div>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Evidence base spanning journal publications, graduate theses, authored monographs, and
              operational handbooks that support AI, bibliometrics, and digital transformation.
            </p>
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
                  href={`/investigations/${item.slug}`}
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
            <span className="text-muted-foreground normal-case tracking-normal">
              {activeItem.description}
            </span>
          </div>
        </div>

        {renderContent(activeSlug)}
        <StatsSection className="mt-10" stats={investigationStats} />
      </motion.div>
    </div>
  );
}
