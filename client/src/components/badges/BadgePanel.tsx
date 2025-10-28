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

export function BadgePanel({
  badge,
  layout = "grid",
  className,
  size,
}: BadgePanelProps) {
  const dimension =
    size ??
    (layout === "hero"
      ? 220
      : layout === "grid"
        ? 190
        : 170);

  const wrapperClasses = cn(
    "inline-flex items-center justify-center rounded-xl border border-primary/25 bg-background/90 shadow-sm transition hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
    className,
  );

  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
      className={wrapperClasses}
      style={{
        width: dimension,
        height: dimension,
      }}
    >
      <img
        src={assetPath(badge.image)}
        alt={badge.imageAlt}
        width={dimension}
        height={dimension}
        loading="lazy"
        decoding="async"
        className="h-full w-full rounded-lg object-contain"
      />
    </a>
  );
}
