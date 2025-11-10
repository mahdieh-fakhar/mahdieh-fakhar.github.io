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
  DialogDescription,
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

const MIN_ZOOM = 0.75;
const MAX_ZOOM = 2.5;
const ZOOM_STEP = 0.25;

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

  useEffect(() => {
    if (!inlineApi) {
      return;
    }

    const handleSelect = () => setInlineIndex(inlineApi.selectedScrollSnap());
    handleSelect();
    inlineApi.on("select", handleSelect);
    return () => inlineApi.off("select", handleSelect);
  }, [inlineApi]);

  useEffect(() => {
    if (!modalApi) {
      return;
    }

    const handleSelect = () => setModalIndex(modalApi.selectedScrollSnap());
    handleSelect();
    modalApi.on("select", handleSelect);
    return () => modalApi.off("select", handleSelect);
  }, [modalApi]);

  useEffect(() => {
    setZoom(1);
  }, [modalIndex, modalOpen]);

  const handleZoom = (direction: "in" | "out") => {
    setZoom((prev) => {
      const next = direction === "in" ? prev + ZOOM_STEP : prev - ZOOM_STEP;
      return Math.min(Math.max(next, MIN_ZOOM), MAX_ZOOM);
    });
  };

  const currentSlide = slides[modalIndex] ?? slides[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="group relative overflow-hidden rounded-[32px] border border-[#1e2644] bg-gradient-to-r from-[#0f172a] via-[#111c3c] to-[#0d1430] text-white shadow-[0_25px_60px_rgba(7,11,25,0.65)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(99,102,241,0.2),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <CardContent className="relative flex flex-col gap-6 p-6 md:flex-row md:gap-10 md:p-8">
          <div className="flex flex-col gap-4 md:w-[35%]">
            <div className="relative h-56 w-full overflow-hidden rounded-3xl border border-white/15 bg-slate-900/60 shadow-lg shadow-black/60 md:h-64">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/55 via-transparent to-indigo-500/15" />
              <Carousel setApi={setInlineApi} className="h-full" opts={{ loop: true }}>
                <CarouselContent className="h-full">
                  {slides.map((slide, index) => (
                    <CarouselItem key={slide.src} className="h-full">
                      <button
                        type="button"
                        onClick={() => {
                          setModalIndex(index);
                          setModalOpen(true);
                        }}
                        className="relative h-full w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                      >
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {slides.length > 1 && (
                  <>
                    <CarouselPrevious className="left-3 top-1/2 h-8 w-8 -translate-y-1/2 border-white/20 bg-black/40 text-white hover:bg-black/60" />
                    <CarouselNext className="right-3 top-1/2 h-8 w-8 -translate-y-1/2 border-white/20 bg-black/40 text-white hover:bg-black/60" />
                  </>
                )}
              </Carousel>
              {slides.length > 1 && (
                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => inlineApi?.scrollTo(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === inlineIndex ? "w-6 bg-indigo-400" : "w-2 bg-white/40 hover:bg-indigo-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="outline"
              size="lg"
              className="w-full justify-center gap-2 rounded-2xl border-white/20 bg-white/5 text-white transition hover:bg-white/15"
              onClick={() => setModalOpen(true)}
            >
              Open Evidence Gallery
            </Button>

            <div className="flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                Attachments: {slides.length} file(s)
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                Horizontal / interactive / responsive
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-left md:w-[65%]">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-200">
              <Badge className="rounded-full bg-indigo-500/90 px-3 py-1 text-[0.65rem] font-semibold text-white shadow" >
                {roleLabel}
              </Badge>
              <span>
                {location} | {period}
              </span>
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-semibold leading-tight text-white">{title}</h2>
              <p className="text-base font-medium text-indigo-200">{organization}</p>
            </div>

            <ul className="space-y-2 text-sm leading-relaxed text-slate-200">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-wrap items-center justify-end gap-3">
              {referenceUrl && (
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-indigo-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
                >
                  <a href={referenceUrl} target="_blank" rel="noreferrer" aria-label={referenceLabel}>
                    {referenceLabel}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="w-[90vw] max-w-5xl rounded-3xl border border-white/15 bg-slate-950/95 text-white">
          <DialogHeader className="flex flex-row items-center justify-between">
            <div>
              <DialogTitle className="text-base font-semibold">Evidence gallery</DialogTitle>
              <DialogDescription className="text-xs text-slate-400">
                Zoom, browse attachments, download files, or close the viewer.
              </DialogDescription>
            </div>
            <div className="flex items-center gap-1.5">
              <Button variant="outline" size="icon" disabled={zoom <= MIN_ZOOM} onClick={() => handleZoom("out")}>
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" disabled={zoom >= MAX_ZOOM} onClick={() => handleZoom("in")}>
                <ZoomIn className="h-4 w-4" />
              </Button>
              <DialogClose asChild>
                <Button variant="outline" size="icon" onClick={() => setZoom(1)}>
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </div>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="relative h-[55vh] overflow-hidden rounded-2xl border border-white/15 bg-black/40">
              <Carousel setApi={setModalApi} className="h-full" opts={{ loop: true, startIndex: inlineIndex }}>
                <CarouselContent className="h-full">
                  {slides.map((slide) => (
                    <CarouselItem key={slide.src} className="flex h-full items-center justify-center">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="max-h-full max-w-full object-contain transition-transform duration-300"
                        style={{ transform: `scale(${zoom})` }}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {slides.length > 1 && (
                  <>
                    <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
                  </>
                )}
              </Carousel>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
              <span>
                Page {modalIndex + 1} of {slides.length}
                {currentSlide?.alt ? ` · ${currentSlide.alt}` : ""}
              </span>
              {currentSlide && (
                <a
                  href={currentSlide.src}
                  download={currentSlide.downloadName ?? `evidence-${modalIndex + 1}`}
                  className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-xs text-white transition hover:bg-white/10"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
              )}
            </div>
            {slides.length > 1 && (
              <div className="flex items-center justify-center gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={`modal-dot-${idx}`}
                    onClick={() => modalApi?.scrollTo(idx)}
                    className={`h-2 w-2 rounded-full ${
                      idx === modalIndex ? "bg-indigo-400" : "bg-white/40 hover:bg-indigo-300"
                    }`}
                    aria-label={`Go to page ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
