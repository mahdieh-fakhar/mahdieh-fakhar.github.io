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

const layoutDimensions: Record<NonNullable<BadgePanelProps["layout"]>, {
  width: number;
  imageSize: number;
}> = {
  hero: { width: 400, imageSize: 170 },
  grid: { width: 320, imageSize: 140 },
  list: { width: 420, imageSize: 130 },
};

export function BadgePanel({
  badge,
  layout = "grid",
  className,
  size,
}: BadgePanelProps) {
  const dimensions = layoutDimensions[layout];
  const width = typeof size === "number" ? size : dimensions.width;
  const imageSize = dimensions.imageSize;

  const issueDateLabel = (() => {
    if (!badge.issueDate) return null;
    const parsed = new Date(badge.issueDate);
    if (Number.isNaN(parsed.getTime())) return badge.issueDate;
    return parsed.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  })();

  return (
    <a
      href={badge.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatBadgeLabel(badge)}
      data-analytics-event={`badge_click:${badge.provider}:${badge.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-[26px] border border-primary/25 bg-gradient-to-r from-background via-background to-primary/8 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        className,
      )}
      style={{ width: layout === "list" ? "100%" : width }}
    >
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary/15 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
      <div className="flex items-center gap-6 px-6 py-5">
        <div
          className="flex items-center justify-center rounded-2xl border border-primary/25 bg-background/95 p-4 shadow-[0_14px_28px_-18px_rgba(0,0,0,0.25)] transition-transform group-hover:scale-105"
          style={{ width: imageSize + 36, height: imageSize + 36 }}
        >
          <img
            src={assetPath(badge.image)}
            alt={badge.imageAlt}
            width={imageSize}
            height={imageSize}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain drop-shadow-[0_10px_12px_rgba(0,0,0,0.18)]"
          />
        </div>

        <div className="flex-1 space-y-3">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-foreground">{badge.title}</h3>
            <p className="text-sm font-medium text-primary/85">{badge.issuer}</p>
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-3 py-1">{badge.provider}</span>
              {issueDateLabel && (
                <span className="rounded-full bg-primary/10 px-3 py-1">Issued {issueDateLabel}</span>
              )}
            </div>
          </div>

          {badge.summary && (
            <p className="text-sm leading-relaxed text-muted-foreground/85">
              {badge.summary}
            </p>
          )}

          {badge.skills && badge.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {badge.skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

