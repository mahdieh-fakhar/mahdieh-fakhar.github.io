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

  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
      className={cn(
        "flex items-center justify-center rounded-3xl border border-primary/20 bg-background/95 p-4 shadow-sm transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        isList ? "w-full" : "max-w-fit",
        className,
      )}
    >
      <img
        src={assetPath(badge.image)}
        alt={badge.imageAlt}
        width={hasCustomSize ? size : DEFAULT_MOBILE_SIZE}
        height={hasCustomSize ? size : DEFAULT_MOBILE_SIZE}
        loading="lazy"
        decoding="async"
        className={cn(
          "object-contain drop-shadow-md",
          hasCustomSize
            ? ""
            : "h-[160px] w-[160px] md:h-[140px] md:w-[140px]",
        )}
        style={hasCustomSize ? { width: size, height: size } : undefined}
      />
    </a>
  );
}
