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
  const imageSize = compact ? 40 : 52;

  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full border border-primary/30 bg-gradient-to-r from-background via-background to-primary/5 px-3 py-1.5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        compact ? "pr-3" : "pr-4",
        className,
      )}
    >
      <div
        className="flex items-center justify-center rounded-full border border-primary/30 bg-background/95 p-2 shadow-inner"
        style={{ width: imageSize, height: imageSize }}
      >
        <img
          src={assetPath(badge.image)}
          alt={badge.imageAlt}
          width={imageSize - 8}
          height={imageSize - 8}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "truncate font-semibold text-primary",
            compact ? "text-xs" : "text-sm",
          )}
        >
          {badge.title}
        </span>
        <span
          className={cn(
            "truncate text-muted-foreground",
            compact ? "text-[11px]" : "text-xs",
          )}
        >
          {badge.issuer}
        </span>
      </div>
    </a>
  );
}
