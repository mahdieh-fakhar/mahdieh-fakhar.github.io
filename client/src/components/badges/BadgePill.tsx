import type { BadgeRecord } from "@/types/badge";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/basePath";
import { formatBadgeLabel } from "@/lib/badgeUtils";

type BadgePillProps = {
  badge: BadgeRecord;
  className?: string;
  size?: "sm" | "md";
};

export function BadgePill({ badge, className, size = "md" }: BadgePillProps) {
  const compact = size === "sm";
  const dimension = compact ? 56 : 68;

  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
      className={cn(
        "group flex flex-col items-center gap-2 rounded-3xl border border-primary/20 bg-background/95 px-4 py-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        className,
      )}
    >
      <img
        src={assetPath(badge.image)}
        alt={badge.imageAlt}
        width={dimension}
        height={dimension}
        loading="lazy"
        className="h-full w-full max-w-full object-contain drop-shadow-sm"
      />

    </a>
  );
}
