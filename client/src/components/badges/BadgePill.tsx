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
  const cardWidth = compact ? 128 : 156;
  const emblemSize = compact ? 78 : 96;
  const emblemInner = emblemSize - 16;

  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
      className={cn(
        "group inline-flex flex-col items-center gap-3 rounded-[28px] border border-primary/25 bg-gradient-to-b from-background via-background to-primary/10 px-4 py-4 text-center shadow-md transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        className,
      )}
      style={{ width: cardWidth }}
    >
      <div
        className="relative flex items-center justify-center rounded-full border border-primary/30 bg-background/95 p-3 shadow-[0_12px_30px_-18px_hsla(356,78%,37%,0.6)] transition-transform duration-300 group-hover:scale-105"
        style={{ width: emblemSize, height: emblemSize }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 via-transparent to-ai-accent/25 opacity-70" />
        <img
          src={assetPath(badge.image)}
          alt={badge.imageAlt}
          width={emblemInner}
          height={emblemInner}
          loading="lazy"
          className="relative h-full w-full object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.2)]"
        />
      </div>

      <div className="space-y-1.5">
        <span className="block truncate text-sm font-semibold text-primary">{badge.title}</span>
        <span className="block truncate text-xs text-muted-foreground">{badge.issuer}</span>
      </div>
    </a>
  );
}
