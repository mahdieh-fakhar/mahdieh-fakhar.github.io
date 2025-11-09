import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Award,
  Building2,
  Globe,
  Images,
  Download,
  ZoomIn,
  ZoomOut,
  RefreshCw,
} from "lucide-react";

type MembershipCategory = "review" | "research" | "affiliation";

type Membership = {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  category: MembershipCategory;
  highlights: string[];
  focus: string;
  evidence?: EvidenceGallery;
};

type EvidenceSlide = {
  src: string;
  alt: string;
  caption?: string;
  downloadName?: string;
};

type EvidenceGallery = {
  title: string;
  description?: string;
  ctaLabel?: string;
  slides: EvidenceSlide[];
};

type EvidencePreviewProps = {
  evidence: EvidenceGallery;
  triggerTestId: string;
};

const memberships: Membership[] = [
  {
    id: 1,
    title: "Peer Reviewer",
    organization: "EPOS Journal of Philology, UNED",
    location: "Madrid, Spain (Remote)",
    period: "2022",
    category: "review",
    highlights: [
      "Conducted double-blind peer review for philology and language studies submissions.",
      "Strengthened reproducibility by checking linguistic methodology and data transparency.",
      "Maintained rapid decision cycles aligned with UNED editorial governance.",
    ],
    focus: "Quality assurance for humanities peer review portfolios.",
  },
  {
    id: 2,
    title: "International Reviewer",
    organization: "SAGE Open, SAGE Publishing",
    location: "Washington, D.C. (Remote)",
    period: "2022",
    category: "review",
    highlights: [
      "Evaluated multidisciplinary manuscripts spanning education, policy, and social science.",
      "Balanced turnaround expectations for global author teams while offering detailed feedback.",
      "Collaborated with editors to refine rubric-based AI-assisted review pilots.",
    ],
    focus: "Global, multi-domain editorial collaboration.",
  },
  {
    id: 3,
    title: "Research Collaborator",
    organization: "IHUPA Research Institute",
    location: "UNED-Alcañiz, Spain",
    period: "2021-2023",
    category: "research",
    highlights: [
      "Mapped qualitative data from heritage preservation projects into bilingual dissemination formats.",
      "Introduced lightweight AI tooling to accelerate public scholarship workflows.",
      "Connected humanities researchers with instructional design resources for outreach.",
    ],
    focus: "Bridging humanities research and instructional design.",
  },
  {
    id: 4,
    title: "Consortium Team Member",
    organization: "AGORA Project",
    location: "Spain (Hybrid)",
    period: "2022-2025",
    category: "affiliation",
    highlights: [
      "Co-authored strategy notes for the Spanish Ministry of Science and Innovation.",
      "Piloted AI-assisted classroom frameworks for multilingual learners.",
      "Documented teacher training outcomes and shared impact briefs with the board.",
    ],
    focus: "Innovation governance across ministry-funded pilots.",
  },
  {
    id: 5,
    title: "Research Fellow",
    organization: "ATLAS Research Group, UNED",
    location: "Madrid, Spain",
    period: "2022",
    category: "research",
    highlights: [
      "Coordinated technology-enhanced language teaching experiments across campuses.",
      "Aligned ATLAS datasets with national higher-education KPIs to surface insights.",
      "Facilitated collaboration between instructional technologists and faculty leads.",
    ],
    focus: "Applied research for technology-enabled pedagogy.",
  },
];

const categoryIcons: Record<MembershipCategory, typeof Award> = {
  review: Award,
  research: Globe,
  affiliation: Building2,
};

const categoryBadgeVariants: Record<
  MembershipCategory,
  "default" | "secondary" | "outline"
> = {
  review: "secondary",
  research: "outline",
  affiliation: "default",
};

const categoryLabels: Record<MembershipCategory, string> = {
  review: "Peer Review",
  research: "Research Network",
  affiliation: "Institutional Membership",
};

const summaryStats = [
  { id: "peer", label: "Peer Review Venues", value: "2", accent: "text-primary" },
  { id: "projects", label: "Research Consortia", value: "3", accent: "text-accent" },
  { id: "regions", label: "Regions Engaged", value: "3", accent: "text-ai-accent" },
  { id: "years", label: "Years Collaborating", value: "5+", accent: "text-primary" },
] as const;

export default function Memberships() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-md"
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Membership Timeline</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Academic memberships, peer-review appointments, and consortium roles following the same cadence
            as the career history chapter.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          <div className="absolute left-8 top-0 bottom-0 hidden w-0.5 bg-border md:block" />

          {memberships.map((membership, index) => {
            const Icon = categoryIcons[membership.category];
            const evidence = membership.evidence;
            const hasEvidence = Boolean(evidence?.slides.length);

            return (
              <motion.div
                key={membership.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="md:ml-20" data-testid={`card-membership-${index}`}>
                  <div className="absolute -left-12 top-6 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary md:flex">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </div>

                  <CardHeader>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-xl" data-testid={`text-title-${index}`}>
                          {membership.title}
                        </CardTitle>
                        <p className="text-base font-medium text-primary" data-testid={`text-organization-${index}`}>
                          {membership.organization}
                        </p>
                      </div>
                      <Badge
                        variant={categoryBadgeVariants[membership.category]}
                        className="w-fit"
                        data-testid={`badge-category-${index}`}
                      >
                        {categoryLabels[membership.category]}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span data-testid={`text-location-${index}`}>{membership.location}</span>
                      <span aria-hidden="true" className="text-muted-foreground">
                        |
                      </span>
                      <span data-testid={`text-period-${index}`}>{membership.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-2">
                        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                          {membership.highlights.map((highlight, highlightIndex) => (
                            <li key={highlight} data-testid={`text-highlight-${index}-${highlightIndex}`}>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 md:col-span-1 md:mt-0 md:-mt-6">
                        {hasEvidence && evidence ? (
                          <EvidencePreview evidence={evidence} triggerTestId={`btn-evidence-${index}`} />
                        ) : (
                          <div className="flex h-full flex-col justify-center rounded-lg border border-dashed border-muted-foreground/40 bg-muted/10 p-4 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">No attachments yet</span>
                            <span>Focus: {membership.focus}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="auto-grid md:auto-grid-lg">
          {summaryStats.map((stat) => (
            <Card key={stat.id} data-testid={`card-stat-${stat.id}`}>
              <CardContent className="p-6 text-center">
                <p className={`text-3xl font-bold ${stat.accent}`} data-testid={`text-stat-${stat.id}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function EvidencePreview({ evidence, triggerTestId }: EvidencePreviewProps) {
  const [inlineApi, setInlineApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalApi, setModalApi] = useState<CarouselApi | null>(null);
  const [modalSlide, setModalSlide] = useState(0);
  const [modalZoom, setModalZoom] = useState(1);
  const MIN_ZOOM = 0.75;
  const MAX_ZOOM = 2;
  const ZOOM_STEP = 0.25;

  useEffect(() => {
    if (!inlineApi) {
      return;
    }

    const handleSelect = () => {
      setCurrentSlide(inlineApi.selectedScrollSnap());
    };

    handleSelect();
    inlineApi.on("select", handleSelect);
    return () => {
      inlineApi.off("select", handleSelect);
    };
  }, [inlineApi]);

  useEffect(() => {
    if (!modalApi) {
      return;
    }

    const handleSelect = () => {
      setModalSlide(modalApi.selectedScrollSnap());
    };

    handleSelect();
    modalApi.on("select", handleSelect);
    return () => {
      modalApi.off("select", handleSelect);
    };
  }, [modalApi]);

  useEffect(() => {
    setModalZoom(1);
  }, [modalSlide]);

  const handleZoomChange = (direction: "in" | "out" | "reset") => {
    if (direction === "reset") {
      setModalZoom(1);
      return;
    }

    setModalZoom((prev) => {
      const next = direction === "in" ? prev + ZOOM_STEP : prev - ZOOM_STEP;
      return Math.min(Math.max(next, MIN_ZOOM), MAX_ZOOM);
    });
  };

  const canZoomIn = modalZoom < MAX_ZOOM;
  const canZoomOut = modalZoom > MIN_ZOOM;

  return (
    <div className="flex h-full flex-col rounded-lg border border-primary/20 bg-primary/5 p-4">
      <Carousel className="mb-6" opts={{ loop: true }} setApi={setInlineApi}>
        <CarouselContent>
          {evidence.slides.map((slide, slideIdx) => (
            <CarouselItem key={slide.src}>
              <figure className="overflow-hidden rounded-md border border-primary/30 bg-background">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-48 w-full object-cover"
                  loading={slideIdx === 0 ? "eager" : "lazy"}
                />
                <figcaption className="bg-muted/20 px-3 py-1 text-xs text-muted-foreground">
                  {slide.caption ?? `Attachment ${slideIdx + 1}`}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mb-4 flex items-center justify-center gap-2">
        {evidence.slides.map((_, dotIdx) => (
          <button
            key={`dot-${dotIdx}`}
            type="button"
            className={`h-2.5 w-2.5 rounded-full transition ${
              currentSlide === dotIdx ? "bg-primary" : "bg-primary/30"
            }`}
            aria-label={`Go to attachment ${dotIdx + 1}`}
            onClick={() => inlineApi?.scrollTo(dotIdx)}
            disabled={!inlineApi}
          />
        ))}
      </div>

      <Dialog onOpenChange={(open) => !open && setModalZoom(1)}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="mt-auto w-full gap-2"
            data-testid={triggerTestId}
          >
            <Images className="h-4 w-4" />
            {evidence.ctaLabel ?? "View Attachments"}
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[82vw] max-w-xl md:max-w-2xl border border-primary/30 bg-background/95 sm:p-4">
          <DialogHeader className="space-y-2">
            <DialogTitle className="flex items-center gap-2 text-lg">
              <Images className="h-5 w-5 text-primary" />
              {evidence.title}
            </DialogTitle>
            <DialogDescription>
              {evidence.description ??
                "Use the arrows or keyboard to browse scans, then download originals for archival use."}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm">
            <span className="font-medium text-primary">Zoom: {Math.round(modalZoom * 100)}%</span>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="icon"
                variant="outline"
                aria-label="Zoom out"
                onClick={() => handleZoomChange("out")}
                disabled={!canZoomOut}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="outline"
                aria-label="Reset zoom"
                onClick={() => handleZoomChange("reset")}
                disabled={modalZoom === 1}
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="outline"
                aria-label="Zoom in"
                onClick={() => handleZoomChange("in")}
                disabled={!canZoomIn}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Carousel className="mx-auto w-full max-w-xl md:max-w-2xl" opts={{ loop: true }} setApi={setModalApi}>
            <CarouselContent>
              {evidence.slides.map((slide, slideIndex) => (
                <CarouselItem key={slide.src} className="flex justify-center">
                  <figure className="w-full space-y-3">
                    <div className="rounded-lg border bg-muted/20 p-3">
                      <div className="max-h-[40vh]">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="mx-auto max-h-[40vh] w-full rounded-md object-contain transition-transform duration-150 ease-out"
                          loading={slideIndex === 0 ? "eager" : "lazy"}
                          style={{
                            transform: `scale(${modalZoom})`,
                          }}
                        />
                      </div>
                    </div>
                    <figcaption className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                      <span>{slide.caption ?? `Page ${slideIndex + 1}`}</span>
                      <a
                        href={slide.src}
                        download={slide.downloadName}
                        className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-3 py-1 text-xs font-medium text-primary transition hover:bg-primary/10"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
          <div className="mt-4 flex items-center justify-center gap-2">
            {evidence.slides.map((_, dotIdx) => (
              <button
                key={`modal-dot-${dotIdx}`}
                type="button"
                className={`h-2.5 w-2.5 rounded-full transition ${
                  modalSlide === dotIdx ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to attachment ${dotIdx + 1}`}
                onClick={() => modalApi?.scrollTo(dotIdx)}
                disabled={!modalApi}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
