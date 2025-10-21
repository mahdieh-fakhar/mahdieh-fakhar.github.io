import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type CategoryBlueprint = {
  label: string;
  slug: string;
  description?: string;
  children?: CategoryBlueprint[];
};

type InvestigationNode = {
  label: string;
  slug: string;
  description?: string;
  path: string[];
  parent: InvestigationNode | null;
  depth: number;
  children: InvestigationNode[];
};

type InvestigationsRouteParams = {
  path?: string;
};

type InvestigationsProps = {
  params?: InvestigationsRouteParams;
};

const investigationsBlueprint: CategoryBlueprint = {
  label: "Investigations",
  slug: "",
  description: "Complete directory of publications, theses, books, and reference handbooks.",
  children: [
    {
      label: "All",
      slug: "all",
      description: "Panoramic view across every investigation category.",
    },
    {
      label: "Articles",
      slug: "articles",
      description: "Published manuscripts spanning journals, conferences, and preprint archives.",
      children: [
        { label: "All", slug: "all", description: "All article formats and venues." },
        {
          label: "Journal Articles",
          slug: "journal-articles",
          description: "Peer-reviewed journal outputs across disciplines.",
          children: [
            { label: "All", slug: "all", description: "All journal article formats." },
            { label: "Original Research", slug: "original-research" },
            {
              label: "Review Articles",
              slug: "review-articles",
              description: "Syntheses of existing literature and evidence bases.",
              children: [
                { label: "All", slug: "all", description: "All review article types." },
                { label: "Systematic Reviews", slug: "systematic-reviews" },
                { label: "Meta-analyses", slug: "meta-analyses" },
                { label: "Scoping Reviews", slug: "scoping-reviews" },
                { label: "Narrative Reviews", slug: "narrative-reviews" },
              ],
            },
            { label: "Short/Brief Reports", slug: "short-brief-reports" },
            { label: "Case Reports & Case Series", slug: "case-reports-case-series" },
            { label: "Methods & Protocols", slug: "methods-protocols" },
            { label: "Data Articles", slug: "data-articles" },
            { label: "Replication & Negative Results", slug: "replication-negative-results" },
            { label: "Registered Reports", slug: "registered-reports" },
            { label: "Letters & Correspondence", slug: "letters-correspondence" },
            { label: "Editorials & Commentaries", slug: "editorials-commentaries" },
          ],
        },
        {
          label: "Conference Publications",
          slug: "conference-publications",
          description: "Outputs presented at scholarly conferences and symposia.",
          children: [
            { label: "All", slug: "all", description: "All conference publication formats." },
            { label: "Full Papers", slug: "full-papers" },
            { label: "Short Papers", slug: "short-papers" },
            { label: "Posters", slug: "posters" },
            { label: "Abstracts", slug: "abstracts" },
            { label: "Workshop Papers", slug: "workshop-papers" },
            { label: "Demo Papers", slug: "demo-papers" },
            { label: "Doctoral Consortium", slug: "doctoral-consortium" },
          ],
        },
        {
          label: "Preprints & Working Papers",
          slug: "preprints-working-papers",
          description: "Early-distribution manuscripts and exploratory findings.",
          children: [
            { label: "All", slug: "all", description: "All early-release manuscripts." },
            { label: "Preprints", slug: "preprints" },
            { label: "Working Papers", slug: "working-papers" },
          ],
        },
      ],
    },
    {
      label: "Theses & Dissertations",
      slug: "theses-dissertations",
      description: "Graduate and doctoral research outputs organized by level and format.",
      children: [
        { label: "All", slug: "all", description: "All thesis and dissertation formats." },
        {
          label: "Bachelor's Theses",
          slug: "bachelors-theses",
          children: [
            { label: "All", slug: "all" },
            { label: "Honors Theses", slug: "honors-theses" },
            { label: "Capstone Projects", slug: "capstone-projects" },
          ],
        },
        {
          label: "Master's Theses",
          slug: "masters-theses",
          children: [
            { label: "All", slug: "all" },
            { label: "Research Thesis (Monograph)", slug: "research-thesis-monograph" },
            { label: "Project / Practicum", slug: "project-practicum" },
            { label: "Article-based Thesis", slug: "article-based-thesis" },
          ],
        },
        {
          label: "Doctoral Dissertations (PhD)",
          slug: "doctoral-dissertations",
          children: [
            { label: "All", slug: "all" },
            { label: "Monograph Dissertation", slug: "monograph-dissertation" },
            { label: "Cumulative / Article-based Dissertation", slug: "cumulative-article-based-dissertation" },
            { label: "PhD by Publication", slug: "phd-by-publication" },
          ],
        },
        {
          label: "Professional Doctorates",
          slug: "professional-doctorates",
          children: [
            { label: "All", slug: "all" },
            { label: "EdD Dissertations", slug: "edd-dissertations" },
            { label: "DBA Dissertations", slug: "dba-dissertations" },
            { label: "DNP Projects", slug: "dnp-projects" },
            { label: "EngD Theses", slug: "engd-theses" },
          ],
        },
        {
          label: "MPhil & Research Masters",
          slug: "mphil-research-masters",
          children: [
            { label: "All", slug: "all" },
            { label: "MPhil Theses", slug: "mphil-theses" },
            { label: "MRes Dissertations", slug: "mres-dissertations" },
          ],
        },
        {
          label: "By Methodology",
          slug: "by-methodology",
          children: [
            { label: "All", slug: "all" },
            { label: "Quantitative", slug: "quantitative" },
            { label: "Qualitative", slug: "qualitative" },
            { label: "Mixed Methods", slug: "mixed-methods" },
          ],
        },
        {
          label: "By Access & Status",
          slug: "by-access-status",
          children: [
            { label: "All", slug: "all" },
            { label: "Open Access", slug: "open-access" },
            { label: "Embargoed / Restricted", slug: "embargoed-restricted" },
            { label: "Published as Book", slug: "published-as-book" },
          ],
        },
        {
          label: "By Language",
          slug: "by-language",
          children: [
            { label: "All", slug: "all" },
            { label: "English", slug: "english" },
            { label: "Multilingual", slug: "multilingual" },
          ],
        },
        {
          label: "By Format",
          slug: "by-format",
          children: [
            { label: "All", slug: "all" },
            { label: "Traditional / Print", slug: "traditional-print" },
            { label: "Digital / Multimedia", slug: "digital-multimedia" },
            { label: "With Dataset / Software Companion", slug: "with-dataset-software-companion" },
          ],
        },
      ],
    },
    {
      label: "Books",
      slug: "books",
      description: "Long-form scholarly publications and curated volumes.",
      children: [
        { label: "All", slug: "all", description: "All book formats and series." },
        {
          label: "Monographs",
          slug: "monographs",
          children: [
            { label: "All", slug: "all" },
            { label: "Research Monographs", slug: "research-monographs" },
            { label: "Short Monographs", slug: "short-monographs" },
          ],
        },
        {
          label: "Edited Volumes",
          slug: "edited-volumes",
          children: [
            { label: "All", slug: "all" },
            { label: "Thematic Collections", slug: "thematic-collections" },
            { label: "Festschrifts", slug: "festschrifts" },
          ],
        },
        {
          label: "Textbooks",
          slug: "textbooks",
          children: [
            { label: "All", slug: "all" },
            { label: "Undergraduate", slug: "undergraduate" },
            { label: "Graduate", slug: "graduate" },
            { label: "Advanced / Professional", slug: "advanced-professional" },
          ],
        },
        {
          label: "Reference Works",
          slug: "reference-works",
          children: [
            { label: "All", slug: "all" },
            { label: "Encyclopedias", slug: "encyclopedias" },
            { label: "Dictionaries & Glossaries", slug: "dictionaries-glossaries" },
            { label: "Atlases", slug: "atlases" },
            { label: "Handbooks (see Handbooks branch)", slug: "handbooks-reference" },
          ],
        },
        {
          label: "Conference Proceedings (Books)",
          slug: "conference-proceedings-books",
          children: [
            { label: "All", slug: "all" },
            { label: "Full Proceedings", slug: "full-proceedings" },
            { label: "Lecture Notes / Proceedings Series", slug: "lecture-notes-proceedings-series" },
          ],
        },
        {
          label: "Book Series",
          slug: "book-series",
          children: [
            { label: "All", slug: "all" },
            { label: "Ongoing Series", slug: "ongoing-series" },
            { label: "Lecture Notes Series", slug: "lecture-notes-series" },
          ],
        },
        {
          label: "Reports & White Papers (Book-length)",
          slug: "reports-white-papers",
          children: [
            { label: "All", slug: "all" },
            { label: "Technical Reports", slug: "technical-reports" },
            { label: "Policy Reports", slug: "policy-reports" },
          ],
        },
        {
          label: "Catalogs & Compendia",
          slug: "catalogs-compendia",
          children: [
            { label: "All", slug: "all" },
            { label: "Data Compendia", slug: "data-compendia" },
            { label: "Bibliographies", slug: "bibliographies" },
          ],
        },
      ],
    },
    {
      label: "Handbooks",
      slug: "handbooks",
      description: "Applied reference guides for methods, practice, and discipline-specific workflows.",
      children: [
        { label: "All", slug: "all", description: "All handbook categories." },
        {
          label: "General & Comprehensive",
          slug: "general-comprehensive",
          children: [
            { label: "All", slug: "all" },
            { label: "Multi-volume Compendia", slug: "multi-volume-compendia" },
            { label: "Single-volume Overviews", slug: "single-volume-overviews" },
          ],
        },
        {
          label: "Methods & Protocols",
          slug: "methods-protocols",
          children: [
            { label: "All", slug: "all" },
            { label: "Experimental Methods", slug: "experimental-methods" },
            { label: "Protocols & SOPs", slug: "protocols-sops" },
            { label: "Measurement & Instrumentation", slug: "measurement-instrumentation" },
          ],
        },
        {
          label: "Statistical & Data Analysis",
          slug: "statistical-data-analysis",
          children: [
            { label: "All", slug: "all" },
            { label: "Statistics", slug: "statistics" },
            { label: "Data Science & Machine Learning", slug: "data-science-machine-learning" },
            { label: "Study Design & Meta-analysis", slug: "study-design-meta-analysis" },
          ],
        },
        {
          label: "Computational & Software",
          slug: "computational-software",
          children: [
            { label: "All", slug: "all" },
            { label: "Algorithms & Modeling", slug: "algorithms-modeling" },
            { label: "Scientific Computing", slug: "scientific-computing" },
            { label: "Software Tools & Workflows", slug: "software-tools-workflows" },
          ],
        },
        {
          label: "Clinical & Practice",
          slug: "clinical-practice",
          children: [
            { label: "All", slug: "all" },
            { label: "Diagnostics & Treatment", slug: "diagnostics-treatment" },
            { label: "Guidelines & Best Practices", slug: "guidelines-best-practices" },
            { label: "Pharmacy & Therapeutics", slug: "pharmacy-therapeutics" },
          ],
        },
        {
          label: "Field & Laboratory",
          slug: "field-laboratory",
          children: [
            { label: "All", slug: "all" },
            { label: "Field Guides", slug: "field-guides" },
            { label: "Laboratory Techniques", slug: "laboratory-techniques" },
            { label: "Safety & Compliance", slug: "safety-compliance" },
          ],
        },
        {
          label: "Industry & Engineering",
          slug: "industry-engineering",
          children: [
            { label: "All", slug: "all" },
            { label: "Materials & Manufacturing", slug: "materials-manufacturing" },
            { label: "Energy & Environment", slug: "energy-environment" },
            { label: "Standards & Codes", slug: "standards-codes" },
          ],
        },
        {
          label: "Policy & Guidelines",
          slug: "policy-guidelines",
          children: [
            { label: "All", slug: "all" },
            { label: "Regulatory & Compliance", slug: "regulatory-compliance" },
            { label: "Ethics & Responsible Research", slug: "ethics-responsible-research" },
            { label: "Funding & Project Management", slug: "funding-project-management" },
          ],
        },
        {
          label: "Teaching & Pedagogy",
          slug: "teaching-pedagogy",
          children: [
            { label: "All", slug: "all" },
            { label: "Curriculum & Instruction", slug: "curriculum-instruction" },
            { label: "Assessment & Evaluation", slug: "assessment-evaluation" },
            { label: "Communication & Outreach", slug: "communication-outreach" },
          ],
        },
        {
          label: "Discipline-specific",
          slug: "discipline-specific",
          children: [
            { label: "All", slug: "all" },
            { label: "Life Sciences", slug: "life-sciences" },
            { label: "Physical Sciences", slug: "physical-sciences" },
            { label: "Computer & Information Sciences", slug: "computer-information-sciences" },
            { label: "Engineering", slug: "engineering" },
            { label: "Medicine & Health", slug: "medicine-health" },
            { label: "Social Sciences", slug: "social-sciences" },
            { label: "Interdisciplinary", slug: "interdisciplinary" },
          ],
        },
      ],
    },
  ],
};

const investigationsRoot = buildTree(investigationsBlueprint);
const topLevelNodes = investigationsRoot.children;

function buildTree(
  blueprint: CategoryBlueprint,
  parent: InvestigationNode | null = null,
  parentPath: string[] = [],
): InvestigationNode {
  const path = blueprint.slug ? [...parentPath, blueprint.slug] : parentPath;
  const node: InvestigationNode = {
    label: blueprint.label,
    slug: blueprint.slug,
    description: blueprint.description,
    path,
    parent,
    depth: parentPath.length,
    children: [],
  };

  node.children =
    blueprint.children?.map((child) => buildTree(child, node, path)) ?? [];

  return node;
}

function resolvePath(segments: string[]): {
  node: InvestigationNode;
  breadcrumbs: InvestigationNode[];
  exact: boolean;
} {
  let current = investigationsRoot;
  const breadcrumbs: InvestigationNode[] = [investigationsRoot];
  const sanitized = segments.filter(Boolean);
  const matched: string[] = [];

  for (const segment of sanitized) {
    const next = current.children.find((child) => child.slug === segment);
    if (!next) {
      break;
    }
    matched.push(segment);
    breadcrumbs.push(next);
    current = next;
  }

  return {
    node: current,
    breadcrumbs,
    exact: matched.length === sanitized.length,
  };
}

function toHref(path: string[]): string {
  const sanitized = path.filter(Boolean);
  if (sanitized.length === 0) {
    return "/investigations/all";
  }
  return `/investigations/${sanitized.join("/")}`;
}

function isAncestor(candidate: InvestigationNode, target: InvestigationNode): boolean {
  if (candidate.path.length === 0) {
    return true;
  }
  if (candidate.path.length > target.path.length) {
    return false;
  }
  return candidate.path.every((segment, index) => segment === target.path[index]);
}

function defaultDescription(node: InvestigationNode): string {
  if (node.description) {
    return node.description;
  }
  return `Browse curated materials for ${node.label.toLowerCase()}.`;
}

export default function Investigations({ params }: InvestigationsProps = {}) {
  const [location, setLocation] = useLocation();
  const normalizedLocation = location.replace(/\/+$/, "") || "/";
  const rawPath = params?.path ?? "";
  const pathSegments = rawPath ? rawPath.split("/").filter(Boolean) : ["all"];

  useEffect(() => {
    if (!rawPath && normalizedLocation === "/investigations") {
      setLocation("/investigations/all", { replace: true });
    }
  }, [normalizedLocation, rawPath, setLocation]);

  const resolved = useMemo(() => resolvePath(pathSegments), [pathSegments]);

  useEffect(() => {
    if (!resolved.exact) {
      setLocation("/investigations/all", { replace: true });
    }
  }, [resolved.exact, setLocation]);

  const activeNode = resolved.node;
  const breadcrumbs = resolved.breadcrumbs;
  const activePathKey = activeNode.path.join("/");
  const primaryActiveSlug = activeNode.path[0] ?? "all";
  const childCategories = activeNode.children;
  const siblingCategories = activeNode.parent?.children ?? [];

  const renderCategoryGrid = (categories: InvestigationNode[]) => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const href = toHref(category.path);
        const isActive = category.path.join("/") === activePathKey;
        const isAncestorOfActive =
          !isActive && isAncestor(category, activeNode) && category.path.length > 0;
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
                isAncestorOfActive && "border-primary/40",
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

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
              <span className="text-lg font-semibold">In</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground">Investigations</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Navigate a hierarchical catalogue of research outputs: peer-reviewed articles, graduate
            theses, scholarly books, and specialist handbooks.
          </p>
        </div>

        {/* Root navigation */}
        {topLevelNodes.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {topLevelNodes.map((node) => {
              const href = toHref(node.path);
              const slug = node.path[0] ?? "all";
              const isActiveTop = slug === primaryActiveSlug;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "inline-flex items-center rounded-full border-2 px-4 py-2 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    isActiveTop
                      ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/40"
                      : "border-primary/30 text-primary/80 hover:border-primary hover:text-primary",
                  )}
                  data-testid={`link-investigations-nav-${slug}`}
                >
                  {node.label}
                </Link>
              );
            })}
          </div>
        )}

        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
        >
          {breadcrumbs.map((node, index) => {
            const href = toHref(node.path);
            const isLast = index === breadcrumbs.length - 1;
            return (
              <div key={`${node.label}-${index}`} className="flex items-center gap-2">
                {index > 0 && <span className="text-muted-foreground">/</span>}
                {isLast ? (
                  <span className="font-medium text-foreground">{node.label}</span>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-primary transition-colors"
                  >
                    {node.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Sibling quick links */}
        {siblingCategories.length > 0 && activeNode.parent && (
          <div className="flex flex-wrap gap-2">
            {siblingCategories.map((sibling) => {
              const isCurrent =
                sibling.path.length === activeNode.path.length &&
                sibling.path.every((segment, index) => segment === activeNode.path[index]);
              const href = toHref(sibling.path);
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition",
                    isCurrent
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-primary/30 text-muted-foreground hover:border-primary hover:text-primary",
                  )}
                  data-testid={`link-investigations-sibling-${sibling.path.join("-")}`}
                >
                  {sibling.label}
                </Link>
              );
            })}
          </div>
        )}

        <section className="space-y-6" data-testid={`section-investigations-${activePathKey || "root"}`}>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">{activeNode.label}</h2>
            <p className="max-w-3xl text-sm text-muted-foreground">
              {defaultDescription(activeNode)}
            </p>
          </div>

          {childCategories.length > 0 ? (
            renderCategoryGrid(childCategories)
          ) : (
            <div className="rounded-2xl border border-dashed border-primary/40 bg-muted/40 p-10 text-center text-sm text-muted-foreground">
              Curated entries for <span className="font-semibold text-foreground">{activeNode.label}</span>{" "}
              will appear here. Use the navigation above to explore adjacent categories.
            </div>
          )}
        </section>
      </motion.div>
    </div>
  );
}
