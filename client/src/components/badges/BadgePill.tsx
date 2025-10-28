import type { BadgeRecord } from "@/types/badge";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/basePath";
import { formatBadgeLabel } from "@/lib/badgeUtils";

type BadgePillProps = {
  badge: BadgeRecord;
  className?: string;
  size?: "sm" | "md";
};

const DEFAULT_MOBILE_SIZE = 160;

export function BadgePill({ badge, className, size = "md" }: BadgePillProps) {
  const isSmall = size === "sm";
  const hasCustomSize = typeof size === "number" && size !== undefined;
  const mobileSize = hasCustomSize ? (size as number) : isSmall ? 120 : DEFAULT_MOBILE_SIZE;

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
      style={hasCustomSize ? { width: size, height: size } : undefined}
    >
      <img
        src={assetPath(badge.image)}
        alt={badge.imageAlt}
        width={mobileSize}
        height={mobileSize}
        loading="lazy"
        className={cn(
          "object-contain drop-shadow-sm",
          hasCustomSize
            ? ""
            : isSmall
              ? "h-[120px] w-[120px] md:h-[100px] md:w-[100px]"
              : "h-[160px] w-[160px] md:h-[140px] md:w-[140px]",
        )}
      />
    </a>
  );
}
