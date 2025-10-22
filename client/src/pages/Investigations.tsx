import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ExternalLink, BookOpen, Layers, Library, ScrollText, FlaskConical } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  investigationsRoot,
  findInvestigationNode,
  nodeHref,
  InvestigationNode,
} from "@/data/investigationsHierarchy";
import {
  publications,
  conferenceProceedings,
  researchFocusAreas,
  type Publication,
} from "@/data/researchOutputs";
import type { ReactNode } from "react";

type InvestigationsRouteParams = {
  path?: string;
};

type InvestigationsProps = {
  params?: InvestigationsRouteParams;
};

const topLevelNodes = investigationsRoot.children;

const sanitizeSegments = (rawPath?: string): string[] => {
  if (!rawPath) {
    return ["all"];
  }
  const segments = rawPath.split("/").map((segment) => segment.trim()).filter(Boolean);
  return segments.length === 0 ? ["all"] : segments;
};

const defaultDescription = (node: InvestigationNode): string =>
  node.description ?? `Browse curated materials for ${node.label.toLowerCase()}.`;

const renderCategoryGrid = (categories: InvestigationNode[], activeNode: InvestigationNode) => {
  const activePathKey = activeNode.path.join("/");

  return (
    <div className="auto-grid md:auto-grid-lg">
      {categories.map((category) => {
        const href = nodeHref(category);
        const isActive = category.path.join("/") === activePathKey;
        const isAncestor =
          !isActive &&
          category.path.length > 0 &&
          activePathKey.startsWith(category.path.join("/"));
        const badgeLabel =
          category.children.length > 0
            ? `${category.children.length} subcategories`
            : "Leaf category";

        return (
          <Link
            key={href}
            href={href}
            className="group block"
            data-testid={`link-investigations-${category.path.join("-") || "root"}`}
          >
            <Card
              className={cn(
                "h-full border-2 border-primary/25 bg-card/95 shadow-md shadow-primary/10 transition hover:-translate-y-1 hover:shadow-lg",
                isActive && "border-primary shadow-primary/30",
                isAncestor && "border-primary/40",
              )}
            >
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-lg font-semibold text-foreground">{category.label}</p>
                  <Badge
                    variant={category.children.length > 0 ? "outline" : "secondary"}
                    className="uppercase tracking-wide"
                  >
                    {badgeLabel}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {defaultDescription(category)}
                </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

const publicationTypeVariant: Record<Publication["type"], "default" | "secondary" | "outline"> = {
  journal: "default",
  book: "secondary",
  review: "outline",
};

const PublicationCards = ({ items }: { items: Publication[] }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="stack-gap-md">
      {items.map((pub) => (
        <Card key={pub.id} className="hover-elevate transition-shadow">
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
      ))}
    </div>
  );
};

const renderPublicationSection = (heading: string, items: Publication[]): ReactNode => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground">{heading}</h3>
      <PublicationCards items={items} />
    </div>
  );
};

const renderConferenceSection = (): ReactNode => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-foreground">Conference Proceedings</h3>
    <Card>
      <CardHeader>
        <CardTitle>Notable Conferences (13+ papers)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <p>Full conference paper list available in the digital portfolio.</p>
        <div className="auto-grid">
          {conferenceProceedings.map((conf) => (
            <span key={conf} className="flex items-center gap-2 text-foreground">
              <ExternalLink className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              {conf}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const renderFocusAreas = (): ReactNode => (
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
);

const journalPublications = publications.filter((pub) => pub.type === "journal");
const reviewPublications = publications.filter((pub) => pub.type === "review");
const bookPublications = publications.filter((pub) => pub.type === "book");

const nodeContentRenderers: Record<string, () => ReactNode> = {
  "articles": () => (
    <div className="stack-gap-md">
      {renderPublicationSection("Indexed Journal Publications", journalPublications)}
      {renderConferenceSection()}
      {renderPublicationSection("Book Reviews & Commentaries", reviewPublications)}
      {renderFocusAreas()}
    </div>
  ),
  "articles/all": () => (
    <div className="stack-gap-md">
      {renderPublicationSection("Indexed Journal Publications", journalPublications)}
      {renderConferenceSection()}
      {renderPublicationSection("Book Reviews & Commentaries", reviewPublications)}
      {renderFocusAreas()}
    </div>
  ),
  "articles/journal-articles": () =>
    renderPublicationSection("Indexed Journal Publications", journalPublications),
  "articles/journal-articles/all": () =>
    renderPublicationSection("Indexed Journal Publications", journalPublications),
  "articles/journal-articles/review-articles": () =>
    renderPublicationSection("Review Articles & Commentaries", reviewPublications),
  "articles/journal-articles/review-articles/all": () =>
    renderPublicationSection("Review Articles & Commentaries", reviewPublications),
  "articles/conference-publications": () => renderConferenceSection(),
  "articles/conference-publications/all": () => renderConferenceSection(),
  "books": () => renderPublicationSection("Scholarly Monographs & Volumes", bookPublications),
  "books/all": () => renderPublicationSection("Scholarly Monographs & Volumes", bookPublications),
};

const renderNodeContent = (node: InvestigationNode): ReactNode => {
  const pathKey = node.path.join("/");
  if (nodeContentRenderers[pathKey]) {
    return nodeContentRenderers[pathKey]();
  }

  if (pathKey.endsWith("/all")) {
    const parentKey = node.path.slice(0, -1).join("/");
    if (nodeContentRenderers[parentKey]) {
      return nodeContentRenderers[parentKey]();
    }
  }

  return null;
};

const sectionMeta: Record<
  string,
  { title: string; subtitle: string; icon: LucideIcon }
> = {
  default: {
    title: "Research Investigations",
    subtitle:
      "Navigate a hierarchical catalogue of research outputs across publications, theses, books, and handbooks.",
    icon: Layers,
  },
  all: {
    title: "Research Investigations",
    subtitle:
      "Navigate a hierarchical catalogue of research outputs across publications, theses, books, and handbooks.",
    icon: Layers,
  },
  articles: {
    title: "Publications & Articles",
    subtitle: "Research contributions to academic literature and scholarly communications.",
    icon: BookOpen,
  },
  "theses-dissertations": {
    title: "Theses & Dissertations",
    subtitle: "Graduate and doctoral research organised by level, methodology, and format.",
    icon: ScrollText,
  },
  books: {
    title: "Scholarly Books & Monographs",
    subtitle: "Curated academic volumes advancing research and professional practice.",
    icon: Library,
  },
  handbooks: {
    title: "Handbooks & Reference Works",
    subtitle: "Applied guides, protocols, and best practices supporting research execution.",
    icon: FlaskConical,
  },
};

export default function Investigations({ params }: InvestigationsProps = {}) {
  const [location, setLocation] = useLocation();
  const normalizedLocation = location.replace(/\/+$/, "") || "/";
  const pathSegments = useMemo(() => sanitizeSegments(params?.path), [params?.path]);
  const resolved = useMemo(
    () => findInvestigationNode(pathSegments),
    [pathSegments],
  );

  useEffect(() => {
    if (!params?.path && normalizedLocation === "/investigations") {
      setLocation("/investigations/all", { replace: true });
    }
  }, [normalizedLocation, params?.path, setLocation]);

  useEffect(() => {
    if (!resolved.exact) {
      setLocation("/investigations/all", { replace: true });
    }
  }, [resolved.exact, setLocation]);

  const activeNode = resolved.node;
  const breadcrumbs = resolved.breadcrumbs;
  const topLevelActiveSlug = breadcrumbs[1]?.slug ?? "all";
  const childCategories = activeNode.children;
  const parentNode = breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 2] : null;
  const siblingCategories = parentNode ? parentNode.children : [];
  const nodeContent = renderNodeContent(activeNode);
  const showPlaceholder = childCategories.length === 0 && nodeContent === null;
  const heroMeta =
    sectionMeta[topLevelActiveSlug as keyof typeof sectionMeta] ?? sectionMeta.default;
  const HeroIcon = heroMeta.icon;

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-md"
      >
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-14 sm:w-14">
              <HeroIcon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
            </span>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{heroMeta.title}</h1>
          </div>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:mx-0 sm:text-lg">
            {heroMeta.subtitle}
          </p>
        </div>

        {topLevelNodes.length > 0 && (
          <nav
            className="flex flex-wrap justify-center gap-3 mobile:flex-nowrap mobile:justify-start mobile:overflow-x-auto mobile:pr-2"
            role="tablist"
            aria-label="Investigation sections"
          >
            {topLevelNodes.map((node) => {
              const href = nodeHref(node);
              const slug = node.path[0] ?? "all";
              const isActive = slug === topLevelActiveSlug;

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "inline-flex items-center rounded-full border-2 px-4 py-2 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/40"
                      : "border-primary/30 text-primary/80 hover:border-primary hover:text-primary",
                  )}
                  data-testid={`link-investigations-nav-${slug}`}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                >
                  {node.label}
                </Link>
              );
            })}
          </nav>
        )}

        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
        >
          {breadcrumbs.map((node, index) => {
            const href = nodeHref(node);
            const isLast = index === breadcrumbs.length - 1;

            return (
              <div key={`${node.label}-${index}`} className="flex items-center gap-2">
                {index > 0 && <span className="text-muted-foreground">/</span>}
                {isLast ? (
                  <span className="font-medium text-foreground">{node.label}</span>
                ) : (
                  <Link href={href} className="transition-colors hover:text-primary">
                    {node.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {siblingCategories.length > 0 && parentNode && (
          <div className="flex flex-wrap gap-2">
            {siblingCategories.map((sibling) => {
              const key = sibling.path.join("-");
              const isCurrent =
                sibling.path.length === activeNode.path.length &&
                sibling.path.every((segment, index) => segment === activeNode.path[index]);

              return (
                <Link
                  key={key}
                  href={nodeHref(sibling)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition",
                    isCurrent
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-primary/30 text-muted-foreground hover:border-primary hover:text-primary",
                  )}
                  data-testid={`link-investigations-sibling-${key || "root"}`}
                >
                  {sibling.label}
                </Link>
              );
            })}
          </div>
        )}

        <section
          className="space-y-6"
          data-testid={`section-investigations-${activeNode.path.join("-") || "root"}`}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">{activeNode.label}</h2>
            <p className="max-w-3xl text-sm text-muted-foreground">
              {defaultDescription(activeNode)}
            </p>
          </div>

          <div className="stack-gap-md">
            {childCategories.length > 0 ? renderCategoryGrid(childCategories, activeNode) : null}

            {nodeContent}

            {showPlaceholder && (
              <div className="rounded-2xl border border-dashed border-primary/40 bg-muted/40 p-10 text-center text-sm text-muted-foreground">
                Curated entries for{" "}
                <span className="font-semibold text-foreground">{activeNode.label}</span> will appear
                here. Use the navigation above to explore adjacent categories.
              </div>
            )}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
