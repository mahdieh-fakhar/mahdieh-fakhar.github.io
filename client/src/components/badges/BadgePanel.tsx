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
  const dimension = size ?? (layout === "hero" ? 180 : layout === "list" ? 140 : 160);

  const wrapperClasses = cn(
    "flex items-center justify-center",
    layout === "hero" ? "py-4" : "py-3",
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
    >
      <img
        src={assetPath(badge.image)}
        alt={badge.imageAlt}
        width={dimension}
        height={dimension}
        loading="lazy"
        decoding="async"
        className="rounded-xl object-contain shadow-sm ring-1 ring-primary/30"
      />
    </a>
  );
}
