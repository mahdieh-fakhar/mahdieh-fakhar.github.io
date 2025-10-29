import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Presentation, ChevronDown, ChevronUp, Download, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { assetPath } from "@/lib/basePath";
import { Link, useLocation } from "wouter";

type CertificateOrientation = "portrait" | "landscape";

type ConferenceCertificate = {
  id: string;
  conferenceName: string;
  certificateTitle: string;
  certificateSubject: string;
  certificateType: string;
  holderName: string;
  holderRole: string;
  roleDescription?: string;
  eventDate: string;
  location: string;
  sponsors: string[];
  imageUrl: string;
  aiInsights: string;
  orientation: CertificateOrientation;
};

type EventCategory = "Conferences" | "Seminars" | "Webinars" | "Congresses" | "Symposia";
type CategorizedCertificate = ConferenceCertificate & { category: EventCategory };
type EventNavItem = {
  label: string;
  slug: string;
  filter: EventCategory | null;
  description: string;
};

const certificateData: ConferenceCertificate[] = [];

const determineCategory = (certificate: ConferenceCertificate): EventCategory => {
  const text = `${certificate.conferenceName} ${certificate.certificateTitle} ${certificate.certificateType}`.toLowerCase();

  if (text.includes("webinar")) {
    return "Webinars";
  }

  if (text.includes("seminar")) {
    return "Seminars";
  }

  if (text.includes("congress")) {
    return "Congresses";
  }

  if (text.includes("symposium") || text.includes("symposia")) {
    return "Symposia";
  }

  return "Conferences";
};

const certificates: CategorizedCertificate[] = certificateData.map((certificate) => ({
  ...certificate,
  imageUrl: assetPath(certificate.imageUrl),
  category: determineCategory(certificate),
}));

const formatDate = (value: string) => {
  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(parsed);
};

const navItems: EventNavItem[] = [
  {
    label: "All",
    slug: "all",
    filter: null,
    description: "All certificates across orientations",
  },
  {
    label: "Conferences",
    slug: "conferences",
    filter: "Conferences",
    description: "Flagship international conference appearances",
  },
  {
    label: "Seminars",
    slug: "seminars",
    filter: "Seminars",
    description: "Academic seminars and invited talks",
  },
  {
    label: "Webinars",
    slug: "webinars",
    filter: "Webinars",
    description: "Virtual engagements and remote workshops",
  },
  {
    label: "Congresses",
    slug: "congresses",
    filter: "Congresses",
    description: "Large-scale congress participation",
  },
  {
    label: "Symposia",
    slug: "symposia",
    filter: "Symposia",
    description: "Specialist symposia and panels",
  },
];

type CertificateCardProps = {
  item: CategorizedCertificate;
  index: number;
  onImageClick: (item: CategorizedCertificate, index: number) => void;
};

function CertificateCard({ item, index, onImageClick }: CertificateCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const downloadName = useMemo(
    () => `Mahdieh Fakhar-Events-${String(index + 1).padStart(3, "0")}.jpg`,
    [index],
  );

  return (
    <Card
      className={cn(
        "group relative flex w-full flex-col overflow-hidden rounded-2xl border-2 border-primary/40 bg-card/95 shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25",
      )}
      data-testid={`card-certificate-${item.id}`}
    >
      <button
        type="button"
        onClick={() => onImageClick(item, index)}
        className="relative flex flex-1 cursor-zoom-in items-center justify-center bg-gradient-to-br from-background via-muted to-background px-4 py-6 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <img
          src={item.imageUrl}
          alt={`${item.certificateTitle} - ${item.conferenceName}`}
          decoding="async" loading="lazy"
          className="max-h-[330px] w-full object-contain transition duration-300 group-hover:scale-[1.02]"
        />
      </button>

      <CardContent className="flex min-h-[220px] flex-col gap-4 border-t-2 border-primary/20 bg-gradient-to-b from-card to-card/70 p-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ai-accent">
              AI Extracted Catalog
            </p>
            <h2 className="text-lg font-semibold leading-tight text-foreground">
              {item.certificateTitle}
            </h2>
            <p className="text-sm text-muted-foreground">{item.conferenceName}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold">
              {item.certificateType}
            </Badge>
            <Badge variant="outline" className="rounded-full px-3 py-1 text-xs font-semibold">
              {item.holderRole}
            </Badge>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Details
          </span>
          <Button
            onClick={() => setShowDetails((prev) => !prev)}
            variant={showDetails ? "default" : "outline"}
            size="sm"
            className={cn(
              "inline-flex items-center gap-2 rounded-full border-primary/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition",
              showDetails
                ? "bg-primary text-primary-foreground"
                : "text-primary hover:bg-primary/10",
            )}
            data-testid={`button-details-${item.id}`}
          >
            {showDetails ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Hide
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Detail
              </>
            )}
          </Button>
        </div>

        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 pt-2"
          >
            <p className="text-sm leading-relaxed text-muted-foreground">{item.aiInsights}</p>
            <dl className="grid gap-3 text-sm">
              <div>
                <dt className="font-medium text-foreground">Certificate Subject</dt>
                <dd className="text-muted-foreground">{item.certificateSubject}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Certificate Holder</dt>
                <dd className="text-muted-foreground">{item.holderName}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Role Details</dt>
                <dd className="text-muted-foreground">{item.roleDescription ?? item.holderRole}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Event Date</dt>
                <dd className="text-muted-foreground">{formatDate(item.eventDate)}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Venue</dt>
                <dd className="text-muted-foreground">{item.location}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Sponsors</dt>
                <dd className="text-muted-foreground">
                  {item.sponsors.length > 0 ? item.sponsors.join(", ") : "Independent"}
                </dd>
              </div>
            </dl>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}

type EventsRouteParams = {
  category?: string;
};

type EventsProps = {
  params?: EventsRouteParams;
};

export default function Events({ params }: EventsProps = {}) {
  const [location, setLocation] = useLocation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<CategorizedCertificate | null>(null);

  useEffect(() => {
    const normalizedLocation = location.replace(/\/+$/, "");
    if (!params?.category && normalizedLocation === "/events") {
      setLocation("/events/all", { replace: true });
    }
  }, [location, params?.category, setLocation]);

  const indexLookup = useMemo(() => {
    const map = new Map<string, number>();
    certificates.forEach((item, idx) => map.set(item.id, idx));
    return map;
  }, []);

  const activeSlug = params?.category ? params.category.toLowerCase() : "all";
  const activeItem = navItems.find((item) => item.slug === activeSlug) ?? navItems[0];
  const filteredCertificates =
    activeItem.filter === null
      ? certificates
      : certificates.filter((item) => item.category === activeItem.filter);

  const handleImageClick = (item: CategorizedCertificate, index: number) => {
    setActiveCertificate(item);
    setDialogOpen(true);
  };

  const handleDialogChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setActiveCertificate(null);
    }
  };

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-lg"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Presentation className="h-6 w-6 text-accent" />
            <h1 className="text-4xl font-bold">Events</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Examine AI-curated certificates with immersive previews, smart role filters, and
            on-demand catalog insights.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-sm mobile:justify-start">
          <nav
            className="flex flex-wrap justify-center gap-2 mobile:flex-nowrap mobile:justify-start mobile:overflow-x-auto mobile:pr-2"
            role="tablist"
            aria-label="Event categories"
          >
            {navItems.map((item) => {
              const href = item.slug === "all" ? "/events/all" : `/events/${item.slug}`;
              const isActive = item.slug === activeItem.slug;

              return (
                <Link
                  key={item.slug}
                  href={href}
                  className={cn(
                    "inline-flex items-center rounded-full border-2 px-4 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/40"
                      : "border-primary/30 text-primary/80 hover:border-primary hover:text-primary",
                  )}
                  data-testid={`link-category-${item.slug}`}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <span className="text-muted-foreground normal-case tracking-normal">
            {activeItem.description}
          </span>
        </div>

        <section
            className="space-y-6"
            data-testid={`section-category-${activeItem.slug}`}
          >
            {filteredCertificates.length > 0 ? (
              <div className="space-y-12">
                {(["portrait", "landscape"] as CertificateOrientation[]).map((orientation) => {
                  const orientationItems = filteredCertificates.filter(
                    (certificate) => certificate.orientation === orientation,
                  );

                  if (orientationItems.length === 0) {
                    return null;
                  }

                  const gridStyles: CSSProperties =
                    orientation === "portrait"
                      ? {
                          "--auto-grid-item": "min(12rem, 100%)",
                          gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                        }
                      : {
                          "--auto-grid-item": "min(16rem, 100%)",
                        };

                  return (
                    <div key={orientation} className="space-y-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                        {orientation === "portrait" ? "Portrait Format" : "Landscape Format"}
                      </div>
                      <div className="auto-grid" style={gridStyles}>
                        {orientationItems.map((item) => {
                          const originalIndex = indexLookup.get(item.id) ?? 0;
                          return (
                            <motion.div
                              key={item.id}
                              initial={{ opacity: 0, y: 32 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: originalIndex * 0.02 }}
                            >
                              <CertificateCard
                                item={item}
                                index={originalIndex}
                                onImageClick={handleImageClick}
                              />
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-primary/40 bg-muted/40 p-10 text-center text-sm text-muted-foreground">
                No certificates found for {activeItem.label.toLowerCase()} yet.
              </div>
            )}
          </section>
        </motion.div>

      <Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="w-[92vw] max-w-4xl border border-primary/30 bg-background/95 p-6 shadow-2xl">
          {activeCertificate && (
            <div className="space-y-6">
              <DialogTitle className="text-xl font-semibold text-foreground">
                {activeCertificate.certificateTitle}
              </DialogTitle>
              <div className="flex flex-col items-center gap-4">
                <img
                  src={activeCertificate.imageUrl}
                  alt={activeCertificate.certificateTitle}
                  className="max-h-[70vh] w-full max-w-3xl rounded-xl border border-primary/30 bg-muted object-contain p-4 shadow-inner"
                />
              </div>
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button variant="outline" className="inline-flex items-center gap-2" asChild>
                  <a
                    href={activeCertificate.imageUrl}
                    download={`Mahdieh Fakhar-Events-${String(
                      (indexLookup.get(activeCertificate.id) ?? 0) + 1,
                    ).padStart(3, "0")}.jpg`}
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </Button>
                <DialogClose asChild>
                  <Button variant="default" className="inline-flex items-center gap-2">
                    <X className="h-4 w-4" />
                    Close
                  </Button>
                </DialogClose>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

