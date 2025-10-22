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
};

const certificateData: ConferenceCertificate[] = [
  {
    id: "tellsi-2015-critical-pedagogy",
    conferenceName: "13th International TELLSI Conference",
    certificateTitle: "Certificate of Attendance",
    certificateSubject:
      "Revisiting and Implementing Critical Pedagogy in Second Language Learning",
    certificateType: "Workshop Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Attendee",
    roleDescription:
      "Participated in the TELLSI 13 workshop facilitated by Dr. Goudarz Alibakhshi and Dr. Mola Miri from Allameh Tabatabaâ€™i University.",
    eventDate: "2015-11-19",
    location: "Lorestan University, Khorramabad, Iran",
    sponsors: ["TELLSI", "Lorestan University"],
    imageUrl: "/images/conferences/Conference/2015.11.17-19.01.jpg",
    aiInsights:
      "AI extraction confirms workshop completion focused on embedding critical pedagogy techniques into second-language curricula.",
    orientation: "portrait",
  },
  {
    id: "tellsi-2015-instructional-pragmatics",
    conferenceName: "13th International TELLSI Conference",
    certificateTitle: "Certificate of Attendance",
    certificateSubject:
      "Instructional Pragmatics: Teaching Students to Use Language Appropriately",
    certificateType: "Workshop Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Attendee",
    roleDescription:
      "Attended a TELLSI 13 workshop led by Dr. Zohreh Eslami Rasekh and Dr. Noriko Ishihara on pragmatic competence.",
    eventDate: "2015-11-19",
    location: "Lorestan University, Khorramabad, Iran",
    sponsors: ["TELLSI", "Lorestan University"],
    imageUrl: "/images/conferences/Conference/2015.11.17-19.02.jpg",
    aiInsights:
      "AI detected emphasis on authentic discourse strategies and classroom pragmatics for EFL learners.",
    orientation: "portrait",
  },
  {
    id: "tellsi-2015-innovation-ict",
    conferenceName: "13th International TELLSI Conference",
    certificateTitle: "Certificate of Attendance",
    certificateSubject:
      "Innovative Practices in English Language Learning and Research: Use of ICT Tools for the Preparation of Pre-Service English Teachers",
    certificateType: "Workshop Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Attendee",
    roleDescription:
      "Completed a TELLSI 13 workshop guided by Dr. Mary Ellis from the National Institute of Education in Singapore.",
    eventDate: "2015-11-19",
    location: "Lorestan University, Khorramabad, Iran",
    sponsors: ["TELLSI", "Lorestan University"],
    imageUrl: "/images/conferences/Conference/2015.11.17-19.03.jpg",
    aiInsights:
      "AI highlights focus on ICT integration for pre-service teacher preparation and blended learning ecosystems.",
    orientation: "portrait",
  },
  {
    id: "tellsi-2015-professional-change",
    conferenceName: "13th International TELLSI Conference",
    certificateTitle: "Certificate of Attendance",
    certificateSubject:
      "Professional Change, Professional Development, and Professional Identity of Iranian EFL Beginner vs. Experienced Teachers",
    certificateType: "Conference Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Presented comparative research on Iranian EFL teacher identity development during TELLSI 13.",
    eventDate: "2015-11-19",
    location: "Lorestan University, Khorramabad, Iran",
    sponsors: ["TELLSI", "Lorestan University"],
    imageUrl: "/images/conferences/Conference/2015.11.17-19.04.jpg",
    aiInsights:
      "AI summary captures key findings on professional identity trajectories between novice and experienced educators.",
    orientation: "portrait",
  },
  {
    id: "kurdistan-2016-poster",
    conferenceName:
      "First English-French Conference on Applied Linguistics and Literature",
    certificateTitle: "Certificate",
    certificateSubject:
      "Language Learning through WhatsApp or Telegram: Which Court Is the Ball In?",
    certificateType: "Poster Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Delivered a joint poster presentation with Mohammad Aliakbari exploring messaging platforms in language learning.",
    eventDate: "2016-05-13",
    location: "University of Kurdistan, Sanandaj, Iran",
    sponsors: ["TELLSI Kurdistan", "AILF"],
    imageUrl: "/images/conferences/Conference/2016.05.12-13.jpg",
    aiInsights:
      "AI extracted focus on comparative analysis of WhatsApp and Telegram in supporting collaborative EFL tasks.",
    orientation: "landscape",
  },
  {
    id: "tellsi-2016-kerman",
    conferenceName: "14th International TELLSI Conference",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "Paper presentation at the 14th International TELLSI Conference",
    certificateType: "Conference Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Presented peer-reviewed research during the TELLSI 14 conference in Kerman, Iran.",
    eventDate: "2016-11-18",
    location: "Islamic Azad University, Kerman, Iran",
    sponsors: ["TELLSI", "Islamic Azad University"],
    imageUrl: "/images/conferences/Conference/2016.11.16-18.jpg",
    aiInsights:
      "AI notes document validation of presentation credits and conference stewardship signatures.",
    orientation: "landscape",
  },
  {
    id: "ldp-2017-pragmatics",
    conferenceName:
      "4th International Conference on Language, Discourse and Pragmatics",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "Paralogism, Ambiguity and Circumlocution: Do Compensation Strategies Help?",
    certificateType: "Conference Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Showcased empirical findings on discourse-level compensation strategies at Shahid Chamran University of Ahvaz.",
    eventDate: "2017-01-27",
    location: "Ahvaz, Iran",
    sponsors: ["Shahid Chamran University of Ahvaz", "KELTA"],
    imageUrl: "/images/conferences/Conference/2017.01.25-27.jpg",
    aiInsights:
      "AI transcription highlights exploration of pragmatic ambiguity and strategy repertoires in multilingual contexts.",
    orientation: "landscape",
  },
  {
    id: "dust-2018-committee",
    conferenceName: "2nd International Conference on Dust",
    certificateTitle: "Executive Committee Appointment",
    certificateSubject:
      "Executive Committee service for the 2nd International Conference on Dust",
    certificateType: "Organizing Committee Service",
    holderName: "Mahdiyeh Fakhar",
    holderRole: "Executive Committee Member",
    roleDescription:
      "Appointed to the executive committee overseeing conference logistics at Ilam University.",
    eventDate: "2018-04-27",
    location: "Ilam University, Ilam, Iran",
    sponsors: ["Ilam University"],
    imageUrl: "/images/conferences/Conference/2018.04.25-27.jpg",
    aiInsights:
      "AI detection confirms official executive mandate and coordination responsibilities for the Dust conference.",
    orientation: "landscape",
  },
  {
    id: "ntelt-2018-self-leadership",
    conferenceName:
      "3rd Conference on New Trends in English Language Teaching and Testing",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "Investigating the Effect of EFL Teachersâ€™ Self-Leadership on Their Processional Development and Change",
    certificateType: "Conference Presentation",
    holderName: "Reza Khany & Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Co-presented research on self-leadershipâ€™s impact on professional growth among Iranian EFL teachers.",
    eventDate: "2018-09-05",
    location: "Tehran, Iran",
    sponsors: ["CIVILICA", "Victoria University of Wellington", "NTELT"],
    imageUrl: "/images/conferences/Conference/2018.09.04-05.jpg",
    aiInsights:
      "AI summary emphasizes collaborative authorship and empirical evaluation of leadership-driven teacher development.",
    orientation: "landscape",
  },
  {
    id: "tellsi-2018-futurology",
    conferenceName: "16th International TELLSI Conference",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "An Ecological Exploration of Iranian EFL Studentsâ€™ Self-Change, Self-Construal, and Change Management",
    certificateType: "Conference Presentation",
    holderName: "Mahdieh Fakher Shareza & Reza Khany",
    holderRole: "Presenter",
    roleDescription:
      "Presented findings on classroom communication tasks and change management at Shiraz University.",
    eventDate: "2018-11-16",
    location: "Shiraz University, Shiraz, Iran",
    sponsors: ["TELLSI", "Shiraz University"],
    imageUrl: "/images/conferences/Conference/2018.11.14-16.jpg",
    aiInsights:
      "AI confirms thematic alignment with TELLSIâ€™s futurology track and validates co-author credentials.",
    orientation: "landscape",
  },
  {
    id: "ldp-2019-planning-research",
    conferenceName:
      "5th International Conference on Language, Discourse and Pragmatics",
    certificateTitle: "Certificate of Workshop Presentation",
    certificateSubject: "Planning Research in Applied Linguistics",
    certificateType: "Workshop Participation",
    holderName: "Mahdie Fakhar Shahreza",
    holderRole: "Workshop Participant",
    roleDescription:
      "Joined applied linguistics workshop activities during LDP 2019 in Ahvaz, Iran.",
    eventDate: "2019-02-01",
    location: "Ahvaz, Iran",
    sponsors: ["Shahid Chamran University of Ahvaz", "KELTA"],
    imageUrl: "/images/conferences/Conference/2019.01-02.30-01.01.jpg",
    aiInsights:
      "AI extraction highlights methodological planning guidance for applied linguistics research pipelines.",
    orientation: "landscape",
  },
  {
    id: "ldp-2019-pragmatics-research",
    conferenceName:
      "5th International Conference on Language, Discourse and Pragmatics",
    certificateTitle: "Certificate of Workshop Presentation",
    certificateSubject:
      "How to Do a Valid Pragmatics Research: Dealing with Theory and Data",
    certificateType: "Workshop Participation",
    holderName: "Mahdie Fakhar Shahreza",
    holderRole: "Workshop Participant",
    roleDescription:
      "Engaged in pragmatic research methodology sessions during the 2019 LDP conference.",
    eventDate: "2019-02-01",
    location: "Ahvaz, Iran",
    sponsors: ["Shahid Chamran University of Ahvaz", "KELTA"],
    imageUrl: "/images/conferences/Conference/2019.01-02.30-01.02.jpg",
    aiInsights:
      "AI summary notes advanced guidance on aligning theoretical frameworks with empirical pragmatic datasets.",
    orientation: "landscape",
  },
  {
    id: "ldp-2019-subjectivity",
    conferenceName:
      "5th International Conference on Language, Discourse and Pragmatics",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "Subjectivity and Objectivity in Discussion Sections of Iranian M.A. Theses and Ph.D. Dissertations",
    certificateType: "Conference Presentation",
    holderName: "Mahdie Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Shared comparative findings across soft and hard science discourse during LDP 2019.",
    eventDate: "2019-02-01",
    location: "Ahvaz, Iran",
    sponsors: ["Shahid Chamran University of Ahvaz", "KELTA"],
    imageUrl: "/images/conferences/Conference/2019.01-02.30-01.03.jpg",
    aiInsights:
      "AI highlights contrastive discourse analysis that informs academic writing guidelines across disciplines.",
    orientation: "landscape",
  },
  {
    id: "eurokd-2019-psychology",
    conferenceName:
      "International Conference on Education, Psychology, and Behavioral Science",
    certificateTitle: "Certificate of Attendance",
    certificateSubject:
      "Developmental Psychology without Positivistic Pretentions",
    certificateType: "Workshop Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Workshop Participant",
    roleDescription:
      "Attended EUROKD workshop led by Professor Willem Koops focusing on developmental psychology perspectives.",
    eventDate: "2019-10-25",
    location: "Istanbul, Turkey",
    sponsors: ["EUROKD", "University of Leeds"],
    imageUrl: "/images/conferences/Conference/2019.10.25.01.jpg",
    aiInsights:
      "AI verifies workshop participation and highlights key insights on non-positivist developmental frameworks.",
    orientation: "landscape",
  },
  {
    id: "eurokd-2019-learning-analytics",
    conferenceName:
      "International Conference on Education, Psychology, and Behavioral Science",
    certificateTitle: "Certificate of Attendance",
    certificateSubject:
      "Implementing Learning Analytics in a Higher Education Institution: Issues and Considerations",
    certificateType: "Workshop Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Workshop Participant",
    roleDescription:
      "Joined EUROKD workshop delivered by Dr. Bronwen Swinnerton on institutional learning analytics deployments.",
    eventDate: "2019-10-25",
    location: "Istanbul, Turkey",
    sponsors: ["EUROKD", "University of Leeds"],
    imageUrl: "/images/conferences/Conference/2019.10.25.02.jpg",
    aiInsights:
      "AI summary records strategic considerations for analytics adoption, including data governance and stakeholder training.",
    orientation: "landscape",
  },
  {
    id: "tellsi-2019-new-horizons",
    conferenceName: "17th International TELLSI Conference",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "An Exploration of Iranian EFL Stakeholdersâ€™ Attitudes and Knowledge of Different Educational Management Systems",
    certificateType: "Conference Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Presented research on educational management system adoption at Islamic Azad University of Tabriz.",
    eventDate: "2019-11-21",
    location: "Tabriz, Iran",
    sponsors: ["TELLSI", "Islamic Azad University of Tabriz"],
    imageUrl: "/images/conferences/Conference/2019.11.20-21.jpg",
    aiInsights:
      "AI verifies emphasis on stakeholder perception analytics within blended learning management environments.",
    orientation: "landscape",
  },
  {
    id: "icctme-2021-covid-impacts",
    conferenceName:
      "Current Trends in the Middle East: Virtual International Joint Conference on COVID-19 Global Impacts",
    certificateTitle: "Certificate of Participation",
    certificateSubject:
      "Presenter contribution on COVID-19 global impacts across the Middle East",
    certificateType: "Conference Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Served as presenter discussing pandemic-driven educational and socio-economic insights.",
    eventDate: "2021-03-10",
    location: "Universiti Teknologi Malaysia (Virtual)",
    sponsors: ["UTM", "Ilam University"],
    imageUrl: "/images/conferences/Conference/2021.03.09-10.jpg",
    aiInsights:
      "AI extraction underscores cross-institution collaboration on pandemic response and regional resilience planning.",
    orientation: "portrait",
  },
];

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
  { label: "All", slug: "all", filter: null },
  { label: "Conferences", slug: "conferences", filter: "Conferences" },
  { label: "Seminars", slug: "seminars", filter: "Seminars" },
  { label: "Webinars", slug: "webinars", filter: "Webinars" },
  { label: "Congresses", slug: "congresses", filter: "Congresses" },
  { label: "Symposia", slug: "symposia", filter: "Symposia" },
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
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Presentation className="h-6 w-6 text-accent" />
            <h1 className="text-4xl font-bold">Events</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Examine AI-curated certificates with immersive previews, smart role filters, and
            on-demand catalog insights.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-3 mobile:flex-nowrap mobile:overflow-x-auto mobile:pr-2">
            {navItems.map((item) => {
              const href = item.slug === "all" ? "/events/all" : `/events/${item.slug}`;
              const isActive = item.slug === activeItem.slug;

              return (
                <Link
                  key={item.slug}
                  href={href}
                  className={cn(
                    "inline-flex items-center rounded-full border-2 px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/40"
                      : "border-primary/30 text-primary/80 hover:border-primary hover:text-primary",
                  )}
                  data-testid={`link-category-${item.slug}`}
                >
                  {item.label}
                </Link>
              );
            })}
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

                  const gridStyles: CSSProperties = {
                    "--auto-grid-item":
                      orientation === "portrait" ? "min(12rem, 100%)" : "min(16rem, 100%)",
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
        </div>
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
