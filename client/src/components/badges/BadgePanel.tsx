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
    layout === "list" ? { width: "100%" } : { width: dimension + 40 };

  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
      className={cn(
        "flex items-center justify-center rounded-3xl border border-primary/20 bg-background/95 p-4 shadow-sm transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
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
      />
    </a>
  );
}
