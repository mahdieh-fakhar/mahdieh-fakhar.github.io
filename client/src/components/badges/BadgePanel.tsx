import { assetPath } from "@/lib/basePath";
import { formatBadgeLabel } from "@/lib/badgeUtils";
import { cn } from "@/lib/utils";
import type { BadgeRecord } from "@/types/badge";

type BadgePanelProps = {
  badge: BadgeRecord;
  layout?: "grid" | "list" | "hero";
  className?: string;
  size?: number;
};

const layoutDimensions: Record<NonNullable<BadgePanelProps["layout"]>, number> = {
  hero: 240,
  grid: 200,
  list: 200,
};

export function BadgePanel({
  badge,
  layout = "grid",
  className,
  size,
}: BadgePanelProps) {
  const dimension = size ?? layoutDimensions[layout];
  const containerStyle =
    layout === "list" ? { width: "100%" } : { width: dimension + 80 };

  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
      className={cn(
        "group flex flex-col items-center gap-3 rounded-3xl border border-primary/20 bg-background/95 px-6 py-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        className,
      )}
      style={containerStyle}
    >
      <img
        src={assetPath(badge.image)}
        alt={badge.imageAlt}
        width={dimension}
        height={dimension}
        loading="lazy"
        decoding="async"
        className="h-full w-full max-w-full object-contain drop-shadow-md"
        style={{ minHeight: dimension }}
      />

      <div className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary/75">
          {badge.provider}
        </p>
        <h3 className="text-base font-semibold text-foreground">{badge.title}</h3>
        <p className="text-xs text-muted-foreground">{badge.issuer}</p>
      </div>
    </a>
  );
}
