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
  const dimension = size === "sm" ? 36 : 48;

  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-primary/30 bg-background/90 p-1 transition hover:border-primary hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className,
      )}
    >
      <img
        src={assetPath(badge.image)}
        alt={badge.imageAlt}
        width={dimension}
        height={dimension}
        loading="lazy"
        className="h-full w-full max-w-[64px] rounded-full object-contain"
      />
    </a>
  );
}
