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
  const isHero = layout === "hero";
  const isList = layout === "list";

  const cardWidth =
    typeof size === "number"
      ? size
      : isHero
        ? 420
        : isList
          ? 360
          : 320;

  const minHeight = isHero ? 260 : 240;

  const badgeImageSize = isHero ? 220 : isList ? 160 : 180;
  const badgeImageContainer = badgeImageSize + (isHero ? 48 : 32);

  const wrapperClasses = cn(
    "group relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-background via-background to-primary/10 p-6 shadow-md transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
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
        width: isList ? "100%" : cardWidth,
        minHeight,
      }}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="h-full w-full bg-gradient-to-br from-primary/10 via-ai-accent/10 to-transparent" />
      </div>

      <div
        className={cn(
          "relative gap-6",
          isList ? "flex items-center" : "flex flex-col items-center text-center",
        )}
      >
        <div
          className="relative flex items-center justify-center rounded-[32px] border border-primary/30 bg-background/95 shadow-lg ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-105"
          style={{ width: badgeImageContainer, height: badgeImageContainer }}
        >
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 opacity-60" />
          <div className="relative flex items-center justify-center">
          <img
            src={assetPath(badge.image)}
            alt={badge.imageAlt}
              width={badgeImageSize}
              height={badgeImageSize}
            loading="lazy"
            decoding="async"
              className="h-full w-full object-contain drop-shadow-md"
          />
        </div>
        </div>

        <div
          className={cn(
            "flex-1 space-y-4",
            isList ? "text-left" : "text-center",
          )}
        >
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
              {badge.provider}
            </p>
            <h3 className="text-xl font-semibold text-foreground line-clamp-2">{badge.title}</h3>
            <p className="text-sm text-muted-foreground">{badge.issuer}</p>
            {issueDateLabel && (
              <p className="text-xs font-medium text-muted-foreground/80">
                Issued {issueDateLabel}
              </p>
            )}
          </div>

          {badge.summary && (
            <p className="text-sm text-muted-foreground/90 line-clamp-3">{badge.summary}</p>
          )}

          {badge.skills && badge.skills.length > 0 && (
            <div
              className={cn(
                "flex flex-wrap gap-1.5 pt-1",
                isList ? "" : "justify-center",
              )}
            >
              {badge.skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"
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
