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
        ? 460
        : isList
          ? 380
          : 340;

  const emblemSize = isHero ? 240 : isList ? 190 : 210;
  const emblemFrame = emblemSize + (isHero ? 52 : 40);

  const wrapperClasses = cn(
    "group relative overflow-hidden rounded-[32px] border border-primary/30 bg-gradient-to-br from-background via-background to-primary/12 shadow-lg transition hover:-translate-y-1 hover:border-primary/45 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
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
      style={{ width: isList ? "100%" : cardWidth }}
    >
      <div
        className={cn(
          "flex flex-col gap-6 p-6",
          isList && "md:flex-row md:items-center md:gap-10",
        )}
      >
        <div
          className="relative mx-auto flex items-center justify-center rounded-[44px] border border-primary/30 bg-background/96 p-6 shadow-[0_28px_60px_-32px_hsla(356,78%,37%,0.6)] transition-transform duration-300 group-hover:scale-105 md:mx-0"
          style={{ width: emblemFrame, height: emblemFrame }}
        >
          <div className="absolute inset-0 rounded-[44px] bg-gradient-to-br from-primary/18 via-transparent to-ai-accent/25 opacity-70" />
          <img
            src={assetPath(badge.image)}
            alt={badge.imageAlt}
            width={emblemSize}
            height={emblemSize}
            loading="lazy"
            decoding="async"
            className="relative h-full w-full object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.22)]"
          />
        </div>

        <div
          className={cn(
            "flex-1 rounded-[28px] border border-primary/20 bg-background/92 px-6 py-5 backdrop-blur",
            isList ? "text-left" : "text-center",
          )}
        >
          <div
            className={cn(
              "flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/75",
              isList && "justify-start",
            )}
          >
            <span className="rounded-full bg-primary/10 px-3 py-1">{badge.provider}</span>
            <span className="rounded-full bg-primary/10 px-3 py-1">{badge.issuer}</span>
            {issueDateLabel && (
              <span className="rounded-full bg-primary/10 px-3 py-1">Issued {issueDateLabel}</span>
            )}
          </div>

          <h3
            className={cn(
              "mt-4 text-[22px] font-semibold leading-snug text-foreground md:text-2xl",
              isList ? "" : "mx-auto max-w-xl",
            )}
          >
            {badge.title}
          </h3>

          {badge.summary && (
            <p
              className={cn(
                "mt-3 text-sm leading-relaxed text-muted-foreground/90",
                isList ? "" : "mx-auto max-w-xl",
              )}
            >
              {badge.summary}
            </p>
          )}

          {badge.skills && badge.skills.length > 0 && (
            <div
              className={cn(
                "mt-5 flex flex-wrap gap-2",
                isList ? "" : "justify-center",
              )}
            >
              {badge.skills.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-primary/25 bg-primary/7 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary"
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

