import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  investigationsRoot,
  findInvestigationNode,
  nodeHref,
  InvestigationNode,
} from "@/data/investigationsHierarchy";

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

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-md"
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

        {topLevelNodes.length > 0 && (
          <div className="flex flex-wrap gap-3">
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
                >
                  {node.label}
                </Link>
              );
            })}
          </div>
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

          {childCategories.length > 0 ? (
            renderCategoryGrid(childCategories, activeNode)
          ) : (
            <div className="rounded-2xl border border-dashed border-primary/40 bg-muted/40 p-10 text-center text-sm text-muted-foreground">
              Curated entries for{" "}
              <span className="font-semibold text-foreground">{activeNode.label}</span> will appear
              here. Use the navigation above to explore adjacent categories.
            </div>
          )}
        </section>
      </motion.div>
    </div>
  );
}
