import type { BadgeRecord } from "@/types/badge";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/basePath";
import { formatBadgeLabel } from "@/lib/badgeUtils";

type BadgePillProps = {
  badge: BadgeRecord;
  className?: string;
  compact?: boolean;
};

export function BadgePill({ badge, className, compact }: BadgePillProps) {
  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center gap-3 rounded-full border border-primary/40 bg-background/90 px-3 py-2 text-xs font-medium text-foreground shadow-sm transition hover:border-primary hover:bg-background hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "min-w-[200px] max-w-full snap-center",
        compact && "px-2 py-1 text-[11px]",
        className,
      )}
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
    >
      <img
        src={assetPath(badge.image)}
        alt={badge.imageAlt}
        loading="lazy"
        className={cn(
          "h-10 w-10 flex-shrink-0 rounded-full object-contain",
          compact && "h-8 w-8",
        )}
      />
      <div className="flex min-w-0 flex-col">
        <span className="truncate font-semibold">{badge.title}</span>
        <span className="truncate text-muted-foreground">
          {badge.issuer}
        </span>
      </div>
    </a>
  );
}
