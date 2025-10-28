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
  const imageSize = compact ? 56 : 68;
  const height = compact ? 72 : 82;

  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full border border-primary/25 bg-gradient-to-r from-background via-background to-primary/8 px-3 py-2 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        className,
      )}
      style={{ minHeight: height }}
    >
      <div
        className="relative flex items-center justify-center rounded-full border border-primary/25 bg-background/95 p-2.5 shadow-[0_10px_22px_-16px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:scale-105"
        style={{ width: imageSize + 18, height: imageSize + 18 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/14 via-transparent to-ai-accent/20 opacity-70" />
        <img
          src={assetPath(badge.image)}
          alt={badge.imageAlt}
          width={imageSize}
          height={imageSize}
          loading="lazy"
          className="relative h-full w-full object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.18)]"
        />
      </div>

      <div className="flex min-w-0 flex-col leading-tight">
        <span className="truncate text-sm font-semibold text-primary">{badge.title}</span>
        <span className="truncate text-xs text-muted-foreground">{badge.issuer}</span>
      </div>
    </a>
  );
}
