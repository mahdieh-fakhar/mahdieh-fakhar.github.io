import React, { useState } from "react";
import {
  ExternalLink,
  X,
  Download,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type ShowcaseImage = {
  src: string;
  alt?: string;
};

type ShowcaseCardProps = {
  title: string;
  subtitle?: string;
  category?: string;
  period?: string;
  location?: string;
  description?: string;
  tags?: string[];
  linkUrl?: string;
  linkLabel?: string;
  images: ShowcaseImage[];
};

export const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  subtitle,
  category,
  period,
  location,
  description,
  tags = [],
  linkUrl,
  linkLabel = "Open reference page",
  images,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const hasImages = images && images.length > 0;
  const currentImage = hasImages ? images[activeIndex] : null;

  const goTo = (index: number) => {
    if (!hasImages) return;
    const normalized = (index + images.length) % images.length;
    setActiveIndex(normalized);
    setIsZoomed(false);
  };

  const handleDownload = () => {
    if (!currentImage) return;
    const link = document.createElement("a");
    link.href = currentImage.src;
    link.download = currentImage.alt || "preview";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <article
        dir="ltr"
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border/80 bg-card/95 shadow-xl transition-all md:flex-row-reverse md:rounded-3xl hover:-translate-y-1 hover:border-ai-accent-border/90 hover:shadow-2xl backdrop-blur-sm"
      >
        <div className="pointer-events-none absolute inset-x-8 top-0 h-0.5 bg-gradient-to-r from-primary via-ai-accent to-secondary opacity-80" />
        <div className="relative flex items-stretch border-l border-card-border/70 bg-gradient-to-b from-background/40 via-card/40 to-background/60 md:w-1/3 md:border-l-0 md:border-r">
          <div className="relative m-3 flex-1 overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-md md:m-4">
            {currentImage ? (
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="group/image relative inline-flex h-full w-full items-center justify-center overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ai-accent"
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt || title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-70 transition-opacity duration-300 group-hover/image:opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-[0.7rem] text-card-foreground md:text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-white/95">
                    View gallery
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-ai-accent/95 px-2 py-1 text-ai-accent-foreground shadow-sm">
                    {images.length} photo{images.length > 1 ? "s" : ""}
                  </span>
                </div>
              </button>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-muted-foreground">
                <span className="font-semibold text-ai-accent">Visual evidence</span>
                <span>No image attached yet.</span>
              </div>
            )}
            {hasImages && images.length > 1 && (
              <div className="absolute top-2 right-2 flex items-center gap-1.5 rounded-full bg-black/55 px-2 py-1 text-[0.55rem] text-white/90 backdrop-blur">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(i);
                    }}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      i === activeIndex ? "scale-110 bg-ai-accent" : "bg-white/40 hover:bg-ai-accent/80"
                    }`}
                    aria-label={`Show image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full flex-col gap-3 px-4 py-4 md:w-2/3 md:px-6 md:py-5">
          <div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-muted-foreground md:text-xs">
            {category && (
              <span className="rounded-full border border-ai-accent-border/80 bg-ai-accent/5 px-2 py-0.5 text-ai-accent">
                {category}
              </span>
            )}
            {period && <span className="rounded-full bg-muted/60 px-2 py-0.5">{period}</span>}
            {location && <span className="rounded-full bg-muted/40 px-2 py-0.5">{location}</span>}
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-semibold tracking-tight text-card-foreground md:text-lg">{title}</h3>
            {subtitle && <p className="text-[0.78rem] text-muted-foreground md:text-sm">{subtitle}</p>}
          </div>
          {description && (
            <p className="text-[0.8rem] leading-relaxed text-foreground/90 md:text-sm">{description}</p>
          )}
          {tags.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/40 bg-elevate-1 px-2 py-1 text-[0.6rem] text-muted-foreground md:text-[0.65rem]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {linkUrl && (
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[0.72rem] font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai-accent md:text-[0.78rem]"
                >
                  <span>{linkLabel}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {hasImages && (
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center gap-1 rounded-full border border-ai-accent-border/80 bg-ai-accent/5 px-2.5 py-1.5 text-[0.65rem] text-ai-accent transition-all hover:border-ai-accent hover:bg-ai-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai-accent md:text-[0.7rem]"
                >
                  Open gallery
                </button>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-[0.6rem] text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ai-accent" />
              <span>Curated academic highlight</span>
            </div>
          </div>
        </div>
      </article>
      {isLightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3 text-xs text-white/80">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-ai-accent px-2 py-1 text-[0.6rem] text-ai-accent-foreground">
                {category || "Evidence"}
              </span>
              <span className="max-w-[40vw] truncate text-[0.7rem] font-medium">{title}</span>
              <span className="text-[0.6rem] text-white/60">
                {activeIndex + 1} / {images.length}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsZoomed((z) => !z)}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-2 py-1 hover:bg-white/10"
              >
                {isZoomed ? <ZoomOut className="h-3 w-3 text-white" /> : <ZoomIn className="h-3 w-3 text-white" />}
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-2 py-1 hover:bg-white/10"
              >
                <Download className="h-3 w-3 text-white" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsLightboxOpen(false);
                  setIsZoomed(false);
                }}
                className="inline-flex items-center justify-center rounded-full bg-destructive px-2 py-1 hover:bg-destructive/90"
              >
                <X className="h-3 w-3 text-destructive-foreground" />
              </button>
            </div>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-4 pb-6">
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                className="absolute left-4 inline-flex items-center justify-center rounded-full bg-white/10 p-2 hover:bg-ai-accent/90 hover:text-ai-accent-foreground md:left-10"
              >
                <ChevronLeft className="h-4 w-4 text-white" />
              </button>
            )}
            <div
              className={`max-h-full max-w-full overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-2xl transition-transform duration-300 ${
                isZoomed ? "scale-[1.6] cursor-grab" : "scale-100"
              }`}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt || title}
                className="h-full w-full object-contain transition-transform duration-300"
              />
            </div>
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                className="absolute right-4 inline-flex items-center justify-center rounded-full bg-white/10 p-2 hover:bg-ai-accent/90 hover:text-ai-accent-foreground md:right-10"
              >
                <ChevronRight className="h-4 w-4 text-white" />
              </button>
            )}
          </div>
          {images.length > 1 && (
            <div className="pb-4 flex justify-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === activeIndex ? "bg-ai-accent" : "bg-white/35 hover:bg-ai-accent/80"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
