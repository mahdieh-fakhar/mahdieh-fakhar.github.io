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

const DEFAULT_MOBILE_SIZE = 160;

export function BadgePanel({
  badge,
  layout = "grid",
  className,
  size,
}: BadgePanelProps) {
  const isList = layout === "list";
  const hasCustomSize = typeof size === "number";

  const mobileSize = hasCustomSize ? size! : DEFAULT_MOBILE_SIZE;
  const desktopSize = hasCustomSize ? size! : 140;

  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
      className={cn(
        "relative flex items-center justify-center rounded-[32px] border border-primary/25 bg-background/96 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        className,
      )}
      style={
        hasCustomSize
          ? { width: size, height: size }
          : {
              width: mobileSize,
              height: mobileSize,
            }
      }
    >
      <img
        src={assetPath(badge.image)}
        alt={badge.imageAlt}
        width={mobileSize}
        height={mobileSize}
        loading="lazy"
        decoding="async"
        className={cn(
          "object-contain drop-shadow-md",
          hasCustomSize
            ? ""
            : "h-[160px] w-[160px] md:h-[140px] md:w-[140px]",
        )}
        style={
          hasCustomSize
            ? { width: size, height: size }
            : undefined
        }
      />
    </a>
  );
}
