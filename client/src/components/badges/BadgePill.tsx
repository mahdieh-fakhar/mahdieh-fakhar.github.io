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
  const isSmall = size === "sm";
  const defaultMobile = isSmall ? 120 : 160;
  const defaultDesktop = isSmall ? 100 : 140;

  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
      className={cn(
        "flex items-center justify-center rounded-3xl border border-primary/20 bg-background/95 p-3 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        className,
      )}
    >
      <img
        src={assetPath(badge.image)}
        alt={badge.imageAlt}
        width={defaultMobile}
        height={defaultMobile}
        loading="lazy"
        className={cn(
          "object-contain drop-shadow-sm",
          isSmall
            ? "h-[120px] w-[120px] md:h-[100px] md:w-[100px]"
            : "h-[160px] w-[160px] md:h-[140px] md:w-[140px]",
        )}
      />
    </a>
  );
}
