import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Download, ZoomIn, ZoomOut, X } from "lucide-react";

export type Slide = {
  src: string;
  alt: string;
  caption?: string;
  downloadName?: string;
};

export type CareerEvidenceCardProps = {
  title: string;
  roleLabel?: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
  referenceUrl?: string;
  referenceLabel?: string;
  slides: Slide[];
};

export function CareerEvidenceCard({
  title,
  roleLabel = "Verified Record",
  organization,
  location,
  period,
  highlights,
  referenceUrl,
  referenceLabel = "Visit Reference Site",
  slides,
}: CareerEvidenceCardProps) {
  const [inlineApi, setInlineApi] = useState<CarouselApi | null>(null);
  const [inlineIndex, setInlineIndex] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalApi, setModalApi] = useState<CarouselApi | null>(null);
  const [modalIndex, setModalIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const MIN_ZOOM = 0.75;
  const MAX_ZOOM = 2.5;
  const ZOOM_STEP = 0.25;

  useEffect(() => {
    if (!inlineApi) return;
    const onSelect = () => setInlineIndex(inlineApi.selectedScrollSnap());
    onSelect();
    inlineApi.on("select", onSelect);
    return () => inlineApi.off("select", onSelect);
  }, [inlineApi]);

  useEffect(() => {
    if (!modalApi) return;
    const onSelect = () => setModalIndex(modalApi.selectedScrollSnap());
    onSelect();
    modalApi.on("select", onSelect);
    return () => modalApi.off("select", onSelect);
  }, [modalApi]);

  useEffect(() => {
    setZoom(1);
  }, [modalIndex, modalOpen]);

  const handleZoom = (dir: "in" | "out" | "reset") => {
    if (dir === "reset") {
      setZoom(1);
      return;
    }
    setZoom((prev) => {
      const next = dir === "in" ? prev + ZOOM_STEP : prev - ZOOM_STEP;
      return Math.min(Math.max(next, MIN_ZOOM), MAX_ZOOM);
    });
  };

  const canZoomIn = zoom < MAX_ZOOM - 0.01;
  const canZoomOut = zoom > MIN_ZOOM + 0.01;

  const currentSlide = slides[modalIndex] ?? slides[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-l from-slate-950 via-slate-900 to-slate-950/80 shadow-2xl shadow-slate-900/70 backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,253,0.10),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <CardContent className="relative flex flex-col gap-5 p-5 md:flex-row-reverse md:gap-7 md:p-7">
          <div className="flex flex-col gap-3 md:w-1/3">
            <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 shadow-lg shadow-slate-950/80 md:h-56">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-indigo-500/10" />
              <Carousel setApi={setInlineApi} className="h-full" opts={{ loop: true }}>
                <CarouselContent className="h-full">
                  {slides.map((slide, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="relative h-full w-full">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {slide.caption && (
                          <div className="absolute bottom-1 left-1 right-1 rounded-xl bg-slate-950/65 px-2 py-1 text-[10px] text-slate-200 backdrop-blur-sm">
                            {slide.caption}
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {slides.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2 top-1/2 h-7 w-7 -translate-y-1/2 border-slate-700 bg-slate-950/80 hover:bg-slate-900" />
                    <CarouselNext className="right-2 top-1/2 h-7 w-7 -translate-y-1/2 border-slate-700 bg-slate-950/80 hover:bg-slate-900" />
                  </>
                )}
              </Carousel>
              {slides.length > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-1.5">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => inlineApi?.scrollTo(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        inlineIndex === i ? "w-5 bg-indigo-400" : "w-1.5 bg-slate-500/70 hover:bg-slate-300/80"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2 rounded-2xl border-slate-700 bg-slate-950/80 text-slate-100 transition-all hover:bg-slate-900 hover:text-indigo-300"
                onClick={() => setModalOpen(true)}
              >
                Open Evidence Gallery
              </Button>
              <DialogContent className="max-w-5xl rounded-3xl border border-slate-800 bg-slate-950/95 p-4 text-slate-50 md:p-6">
                <DialogHeader className="flex flex-row items-center justify-between gap-3">
                  <div>
                    <DialogTitle className="text-sm font-semibold text-indigo-300 md:text-base">
                      Evidence Gallery
                    </DialogTitle>
                    <p className="text-[10px] text-slate-400 md:text-xs">
                      Zoom, browse, download each image, or close the window at any time.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-300 hover:text-white"
                      onClick={() => handleZoom("out")}
                      disabled={!canZoomOut}
                    >
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-300 hover:text-white"
                      onClick={() => handleZoom("reset")}
                      disabled={zoom === 1}
                    >
                      <span className="text-[9px] font-semibold">100%</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-300 hover:text-white"
                      onClick={() => handleZoom("in")}
                      disabled={!canZoomIn}
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <DialogClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-red-400"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </DialogClose>
                  </div>
                </DialogHeader>
                <div className="mt-2 flex flex-col gap-4 md:flex-row">
                  <div className="relative flex-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/90">
                    <Carousel setApi={setModalApi} className="h-full" opts={{ loop: true, startIndex: inlineIndex }}>
                      <CarouselContent className="h-full">
                        {slides.map((slide, index) => (
                          <CarouselItem key={index} className="h-full">
                            <div className="flex items-center justify-center p-2 md:p-4">
                              <img
                                src={slide.src}
                                alt={slide.alt}
                                className="max-h-[70vh] w-auto object-contain transition-transform duration-300"
                                style={{ transform: `scale(${zoom})` }}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {slides.length > 1 && (
                        <>
                          <CarouselPrevious className="left-3 top-1/2 h-9 w-9 -translate-y-1/2 border-slate-700 bg-slate-950/90 hover:bg-slate-900" />
                          <CarouselNext className="right-3 top-1/2 h-9 w-9 -translate-y-1/2 border-slate-700 bg-slate-950/90 hover:bg-slate-900" />
                        </>
                      )}
                    </Carousel>
                  </div>
                  <div className="flex w-full flex-col gap-2 text-[10px] text-slate-400 md:w-64 md:text-xs">
                    <div className="font-semibold text-slate-100">
                      {currentSlide?.caption || "Attachment"}
                    </div>
                    <div className="leading-relaxed">Download the original asset for every slide.</div>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {slides.map((slide, i) => (
                        <a
                          key={i}
                          href={slide.src}
                          download={slide.downloadName || undefined}
                          className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 transition-all ${
                            i === modalIndex
                              ? "border-indigo-400 bg-indigo-500/10 text-indigo-300"
                              : "border-slate-700 text-slate-400 hover:border-indigo-400 hover:text-indigo-300"
                          }`}
                        >
                          <Download className="h-3 w-3" />
                          <span>{`Download ${i + 1}`}</span>
                        </a>
                      ))}
                    </div>
                    {slides.length > 1 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {slides.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => modalApi?.scrollTo(i)}
                            className={`h-1.5 rounded-full transition-all ${
                              modalIndex === i ? "w-5 bg-indigo-400" : "w-1.5 bg-slate-600 hover:bg-slate-300"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col justify-between gap-3 text-right md:w-2/3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Badge className="rounded-xl bg-indigo-600/80 px-2.5 py-1 text-xs font-semibold text-white">
                {roleLabel}
              </Badge>
              <span className="text-[10px] text-slate-400">
                {location} | {period}
              </span>
            </div>
            <div>
              <h2 className="text-lg font-semibold leading-snug text-slate-50 md:text-xl">{title}</h2>
              <p className="mt-1 text-sm font-medium text-indigo-200">{organization}</p>
            </div>
            <ul className="mt-1 space-y-1.5 text-[11px] leading-relaxed text-slate-300 md:text-xs">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className="relative pl-2.5 before:absolute before:right-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-indigo-400/80"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5 text-[9px] text-slate-500">
                <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
                  Attachments: {slides.length} file(s)
                </span>
                <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
                  Horizontal / interactive / responsive
                </span>
              </div>
              {referenceUrl && (
                <Button
                  asChild
                  size="sm"
                  className="flex items-center gap-1.5 rounded-2xl bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-indigo-500"
                >
                  <a href={referenceUrl} target="_blank" rel="noreferrer" aria-label={referenceLabel}>
                    {referenceLabel}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
