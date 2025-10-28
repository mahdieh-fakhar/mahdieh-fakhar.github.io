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

export function BadgePanel({
  badge,
  layout = "grid",
  className,
  size,
}: BadgePanelProps) {
  const cardWidth =
    size ??
    (layout === "hero"
      ? 360
      : layout === "grid"
        ? 300
        : 260);

  const imageSize =
    layout === "hero"
      ? 140
      : layout === "grid"
        ? 120
        : 100;

  const wrapperClasses = cn(
    "group relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-background via-background/95 to-primary/10 p-5 shadow-md transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
    className,
  );

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
      className={wrapperClasses}
      style={{
        width: cardWidth,
        minHeight: layout === "hero" ? 220 : 200,
      }}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="h-full w-full bg-gradient-to-br from-primary/10 via-ai-accent/10 to-transparent" />
      </div>

      <div className="relative flex items-center gap-5">
        <div
          className="flex items-center justify-center rounded-xl border border-primary/30 bg-background/95 p-4 shadow-sm"
          style={{ width: imageSize + 32, height: imageSize + 32 }}
        >
          <img
            src={assetPath(badge.image)}
            alt={badge.imageAlt}
            width={imageSize}
            height={imageSize}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex-1 space-y-3">
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
              {badge.provider}
            </p>
            <h3 className="text-lg font-semibold text-foreground line-clamp-2">{badge.title}</h3>
            <p className="text-sm text-muted-foreground">{badge.issuer}</p>
            {issueDateLabel && (
              <p className="text-xs font-medium text-muted-foreground/80">
                Issued {issueDateLabel}
              </p>
            )}
          </div>

          {badge.summary && (
            <p className="text-sm text-muted-foreground/90 line-clamp-2">{badge.summary}</p>
          )}

          {badge.skills && badge.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {badge.skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary"
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
