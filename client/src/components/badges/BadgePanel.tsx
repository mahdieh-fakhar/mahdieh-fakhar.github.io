import { assetPath } from "@/lib/basePath";
import { formatBadgeLabel } from "@/lib/badgeUtils";
import { cn } from "@/lib/utils";
import type { BadgeRecord } from "@/types/badge";
import { Card, CardContent } from "@/components/ui/card";

type BadgePanelProps = {
  badge: BadgeRecord;
  layout?: "grid" | "list" | "hero";
  className?: string;
  showSummary?: boolean;
};

export function BadgePanel({
  badge,
  layout = "grid",
  className,
  showSummary = true,
}: BadgePanelProps) {
  const body = (
    <div
      className={cn(
        "flex flex-col gap-4",
        layout === "hero" && "lg:flex-row lg:items-center",
      )}
    >
      <div className="flex items-center gap-4">
        <img
          src={assetPath(badge.image)}
          alt={badge.imageAlt}
          loading="lazy"
          decoding="async"
          width={layout === "hero" ? 120 : 80}
          height={layout === "hero" ? 120 : 80}
          className={cn(
            "flex-shrink-0 rounded-xl object-contain shadow-sm ring-1 ring-primary/30",
            layout === "hero" ? "h-28 w-28" : "h-20 w-20",
          )}
        />
        <div className="min-w-0 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
            Credential
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            {badge.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {badge.issuer}
            {badge.issueDate ? ` · Issued ${badge.issueDate}` : ""}
          </p>
        </div>
      </div>
      {showSummary && badge.summary && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {badge.summary}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        {badge.skills.slice(0, 6).map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-primary/20 bg-primary/10 px-2 py-1 font-medium text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
      <div>
        <a
          href={badge.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
          aria-label={`Open ${formatBadgeLabel(badge)}`}
          data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
        >
          Verify credential
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );

  if (layout === "hero") {
    return (
      <section
        className={cn(
          "rounded-2xl border border-primary/20 bg-background/90 p-6 shadow-sm shadow-primary/10 ring-1 ring-primary/15 lg:p-10",
          className,
        )}
        aria-label={formatBadgeLabel(badge)}
      >
        {body}
      </section>
    );
  }

  return (
    <Card className={cn("h-full border border-primary/25", className)}>
      <CardContent className="flex h-full flex-col gap-4 p-5">{body}</CardContent>
    </Card>
  );
}
