import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

const publicationTypeVariant: Record<Publication["type"], "default" | "secondary" | "outline"> = {
  journal: "default",
  book: "secondary",
  review: "outline",
};

const PublicationCards = ({ items }: { items: Publication[] }) => (
  <div className="stack-gap-md">
    {items.map((pub, index) => (
      <motion.div
        key={pub.id}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
      >
        <Card className="hover-elevate transition-shadow">
          <CardHeader>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <CardTitle className="text-lg">{pub.title}</CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant={publicationTypeVariant[pub.type]} className="capitalize">
                  {pub.type}
                </Badge>
                {pub.status && <Badge variant="outline">{pub.status}</Badge>}
                <Badge variant="outline">{pub.year}</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{pub.authors}</p>
            <p className="text-sm font-medium text-primary">{pub.venue}</p>
          </CardHeader>
          {pub.description && (
            <CardContent>
              <p className="text-sm text-muted-foreground">{pub.description}</p>
            </CardContent>
          )}
        </Card>
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

    <div className="stack-gap-md">
      {records.map((record) => (
        <Card key={record.id} className="hover-elevate transition-shadow">
          <CardHeader>
            <div className="flex flex-col gap-1">
              <CardTitle className="text-lg text-foreground">{record.title}</CardTitle>
              <p className="text-sm font-semibold text-primary">
                {record.degree} • {record.institution} • {record.year}
              </p>
            </div>
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Focus: {record.focus}
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">{record.summary}</p>
          </CardContent>
        </Card>
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
        Long-form scholarship advancing digital competence, language learning, and educational
        technology.
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
        Practitioner-ready assets supporting analytics pipelines, AI adoption, and educator
        upskilling.
      </p>
    </div>

    <div className="stack-gap-md">
      {items.map((entry) => (
        <Card key={entry.id} className="hover-elevate transition-shadow">
          <CardHeader>
            <div className="flex flex-col gap-1">
              <CardTitle className="text-lg text-foreground">{entry.title}</CardTitle>
              <p className="text-sm font-semibold text-primary">
                {entry.domain} • {entry.format}
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">{entry.summary}</p>
          </CardContent>
        </Card>
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
      </motion.div>
    </div>
  );
}
