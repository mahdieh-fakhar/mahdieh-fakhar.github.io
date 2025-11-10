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
  categoryOverride?: EventCategory;
};

type EventCategory = "Conferences" | "Seminars" | "Webinars" | "Congresses" | "Symposia";
type CategorizedCertificate = ConferenceCertificate & { category: EventCategory };
type EventNavItem = {
  label: string;
  slug: string;
  filter: EventCategory | null;
  description: string;
};

type CSSVarProperties = CSSProperties & Record<`--${string}`, string | number>;

const certificateData: ConferenceCertificate[] = [
  {
    id: "conf-2024-uned-eye-tracking",
    conferenceName: "UNED Faculty of Philology Seminar Series",
    certificateTitle: "Certificado de Asistencia",
    certificateSubject:
      "An introduction to Eye Tracking in Audiovisual Translation (AVT): Methods and Applications",
    certificateType: "Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Participant",
    roleDescription:
      "Attended Dr. Valentina Ragni's Madrid seminar exploring AVT eye-tracking techniques.",
    eventDate: "2024-09-27",
    location: "UNED, Madrid, Spain",
    sponsors: ["UNED Faculty of Philology"],
    imageUrl: "/images/conferences/Conference/Certificado de eye-tracking.jpg",
    aiInsights:
      "Highlights adoption of evidence-based translation analytics with contemporary instrumentation.",
    orientation: "portrait",
    categoryOverride: "Conferences",
  },
  {
    id: "sem-2024-xxvi-seminario",
    conferenceName: "XXVI Seminario Permanente de Investigación TIC-ETL",
    certificateTitle: "Certificado de Asistencia",
    certificateSubject: "La IA Generativa en la Enseñanza y Tratamiento de Lenguas",
    certificateType: "Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Participant",
    roleDescription:
      "Participated in UNED's permanent seminar examining generative AI for language education contexts.",
    eventDate: "2024-05-08",
    location: "UNED, Madrid, Spain",
    sponsors: ["UNED Facultad de Filología"],
    imageUrl: "/images/seminars/2024-05-08-xxvi-seminario.jpg",
    aiInsights:
      "Extends research into generative AI adoption for blended language instruction and curriculum design.",
    orientation: "landscape",
  },
  {
    id: "sem-2022-eccoe-multiplier",
    conferenceName: "II ECCOE Multiplier Event / XXIII Seminar TIC ETL",
    certificateTitle: "Attendance Certificate",
    certificateSubject:
      "Digital micro-credentials. A solution with a vision for tomorrow's educational needs",
    certificateType: "Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Participant",
    roleDescription:
      "Engaged with Erasmus+ ECCOE experts to explore digital micro-credentials for future-ready education.",
    eventDate: "2022-05-13",
    location: "UNED, Madrid, Spain",
    sponsors: ["UNED Facultad de Filología", "ECCOE"],
    imageUrl: "/images/seminars/2022-05-13-eccoe-multiplier.jpg",
    aiInsights:
      "Strengthens strategic literacy in European micro-credential frameworks and lifelong learning pathways.",
    orientation: "landscape",
  },
  {
    id: "conf-2021-utm-covid19",
    conferenceName:
      "Current Trends in the Middle East: Virtual International Joint Conference on COVID-19 Global Impacts",
    certificateTitle: "Certificate of Participation",
    certificateSubject:
      "Presenter contribution on pandemic-driven social and educational transformations across the Middle East.",
    certificateType: "Participation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Delivered interdisciplinary insights on regional COVID-19 impacts in collaboration with UTM and partners.",
    eventDate: "2021-03-10",
    location: "Virtual (UTM Johor, Malaysia)",
    sponsors: ["Universiti Teknologi Malaysia", "Ilam University", "Pokhara University"],
    imageUrl: "/images/conferences/Conference/2021-01.jpg",
    aiInsights:
      "Documents agile academic exchange on pandemic-era educational resilience across the Middle East.",
    orientation: "portrait",
  },
  {
    id: "conf-2019-tellsi-educational-management",
    conferenceName: "17th International TELLSI Conference: New Horizons in Language Studies",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "An Exploration of Iranian EFL Stakeholders' Attitudes and Knowledge of Different Educational Management Systems",
    certificateType: "Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Presented stakeholder perspectives on educational management frameworks at Islamic Azad University of Tabriz.",
    eventDate: "2019-11-21",
    location: "Tabriz, Iran",
    sponsors: ["TELLSI", "Islamic Azad University of Tabriz"],
    imageUrl: "/images/conferences/Conference/2019-11.jpg",
    aiInsights:
      "Aligns applied linguistics leadership with institutional governance modernization.",
    orientation: "landscape",
  },
  {
    id: "conf-2019-ldp-discourse-analysis",
    conferenceName: "5th International Conference on Language, Discourse and Pragmatics",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "Subjectivity and Objectivity in Discussion Sections of Iranian M.A. Thesis and Ph.D. Dissertations; the Case of Hard and Soft Science Fields of Studies",
    certificateType: "Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Shared comparative discourse analysis of graduate research writing across disciplinary traditions.",
    eventDate: "2019-02-01",
    location: "Ahvaz, Iran",
    sponsors: ["KELTA", "Shahid Chamran University of Ahvaz", "LDP Conference"],
    imageUrl: "/images/conferences/Conference/2019-01-.jpg",
    aiInsights:
      "Bridges genre-based pedagogy with disciplinary writing expectations for Iranian scholars.",
    orientation: "landscape",
  },
  {
    id: "conf-2018-tellsi-ecological-change",
    conferenceName: "16th International TELLSI Conference: Futurology of English Language Teaching & Literature",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "An Ecological Exploration of Iranian EFL Students' Self-Change, Self-Construal, and Change Management through Classroom Communication Tasks",
    certificateType: "Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Examined ecological dimensions of learner agency during TELLSI's futurology program in Shiraz.",
    eventDate: "2018-11-16",
    location: "Shiraz, Iran",
    sponsors: ["TELLSI", "Shiraz University"],
    imageUrl: "/images/conferences/Conference/2018-11.jpg",
    aiInsights:
      "Links ecological linguistics with transformative classroom change management.",
    orientation: "landscape",
  },
  {
    id: "conf-2018-ntelt-self-leadership",
    conferenceName: "3rd Conference on New Trends in English Language Teaching and Testing",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "Investigating the Effect of EFL Teachers' Self-leadership on their Processional Development and Change",
    certificateType: "Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Discussed empirical findings on self-leadership strategies for sustained professional growth.",
    eventDate: "2018-09-05",
    location: "Tehran, Iran",
    sponsors: ["Victoria University of Wellington", "CIVILICA", "NTELT"],
    imageUrl: "/images/conferences/Conference/2018-09.jpg",
    aiInsights:
      "Showcases reflective leadership practices that drive teacher-led innovation.",
    orientation: "landscape",
  },
  {
    id: "conf-2018-ntelt-self-leadership-signed",
    conferenceName: "3rd Conference on New Trends in English Language Teaching and Testing",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "Investigating the Effect of EFL Teachers' Self-leadership on their Processional Development and Change",
    certificateType: "Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Signed copy acknowledging presentation within the NTELT professional development stream.",
    eventDate: "2018-09-05",
    location: "Tehran, Iran",
    sponsors: ["Victoria University of Wellington", "CIVILICA", "NTELT"],
    imageUrl: "/images/conferences/Conference/2018-09-.jpg",
    aiInsights:
      "Provides verified documentation of NTELT presentation credentials.",
    orientation: "landscape",
  },
  {
    id: "conf-2018-dust-executive",
    conferenceName: "The 2nd International Conference on Dust",
    certificateTitle: "Executive Committee Appointment",
    certificateSubject: "Executive committee service for The 2nd International Conference on Dust",
    certificateType: "Executive Committee",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Executive Committee Member",
    roleDescription:
      "Recognised for academic coordination duties supporting Ilam University's environmental conference.",
    eventDate: "2018-04-27",
    location: "Ilam, Iran",
    sponsors: ["Ilam University", "2DUST Conference"],
    imageUrl: "/images/conferences/Conference/2018-04.jpg",
    aiInsights:
      "Highlights leadership trusted with multidisciplinary environmental programming.",
    orientation: "landscape",
  },
  {
    id: "conf-2017-ldp-compensation-strategies",
    conferenceName: "Fourth International Conference on Language, Discourse and Pragmatics",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "Paralogism, Ambiguity and Circumlocution: Do Compensation Strategies Help?",
    certificateType: "Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Delivered findings on pragmatic compensation strategies at Shahid Chamran University of Ahvaz.",
    eventDate: "2017-01-27",
    location: "Ahvaz, Iran",
    sponsors: ["Shahid Chamran University of Ahvaz", "KELTA"],
    imageUrl: "/images/conferences/Conference/2017-01.jpg",
    aiInsights:
      "Advances communicative strategy design within discourse and pragmatics research.",
    orientation: "landscape",
  },
  {
    id: "conf-2016-tellsi-presentation",
    conferenceName: "14th International TELLSI Conference",
    certificateTitle: "Certificate of Presentation",
    certificateSubject: "Research presentation at the 14th International TELLSI Conference",
    certificateType: "Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Contributed TELLSI community scholarship during the Kerman-hosted conference.",
    eventDate: "2016-11-18",
    location: "Kerman, Iran",
    sponsors: ["TELLSI", "Islamic Azad University of Kerman"],
    imageUrl: "/images/conferences/Conference/2016-11.jpg",
    aiInsights:
      "Sustains national knowledge exchange on forward-looking ELT methodologies.",
    orientation: "landscape",
  },
  {
    id: "conf-2016-english-french-poster",
    conferenceName: "First English-French Conference on Applied Linguistics and Literature",
    certificateTitle: "Certificate of Poster Presentation",
    certificateSubject:
      "Language Learning through WhatsApp or Telegram, Which Court is the Ball in?",
    certificateType: "Poster Presentation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Presented collaborative messaging-app research at the University of Kurdistan.",
    eventDate: "2016-05-13",
    location: "Sanandaj, Iran",
    sponsors: ["AILLF", "Kurdistan English Teachers Association"],
    imageUrl: "/images/conferences/Conference/2016-05.jpg",
    aiInsights:
      "Explores technology-mediated collaboration in applied linguistics classrooms.",
    orientation: "landscape",
  },
  {
    id: "conf-2015-tellsi-presentation",
    conferenceName: "13th International TELLSI Conference",
    certificateTitle: "Certificate of Attendance",
    certificateSubject:
      "Professional Change, Professional Development, and Professional Identity of Iranian EFL Beginner vs. Experienced Teachers",
    certificateType: "Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Presented research on professional identity trajectories within TELLSI's Lorestan gathering.",
    eventDate: "2015-11-19",
    location: "Khorramabad, Iran",
    sponsors: ["TELLSI", "Lorestan University"],
    imageUrl: "/images/conferences/Conference/2015-11.jpg",
    aiInsights:
      "Supports reflective development pathways for Iranian EFL educators.",
    orientation: "portrait",
  },
  {
    id: "conf-2015-tellsi-workshop-ict",
    conferenceName: "13th International TELLSI Conference",
    certificateTitle: "Certificate of Attendance",
    certificateSubject:
      "Innovative Practices in English Language Learning and Research: Use of ICT Tools for the Preparation of Pre-Service English Teachers at the National Institute of Education in Singapore",
    certificateType: "Workshop",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Participant",
    roleDescription:
      "Participated in TELLSI's ICT integration workshop facilitated by Dr. Mary Ellis.",
    eventDate: "2015-11-17",
    location: "Khorramabad, Iran",
    sponsors: ["TELLSI", "Lorestan University"],
    imageUrl: "/images/conferences/Conference/2015-11--.jpg",
    aiInsights:
      "Advances pre-service teacher training through strategic technology adoption.",
    orientation: "portrait",
  },
  {
    id: "congress-2025-inorms-earma",
    conferenceName: "INORMS Congress 2025",
    certificateTitle: "Certificate of Attendance",
    certificateSubject: "Participation in the INORMS Congress hosted by EARMA",
    certificateType: "Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Participant",
    roleDescription:
      "Attended the INORMS global congress to explore research management innovation across European institutions.",
    eventDate: "2025-05-08",
    location: "Madrid, Spain",
    sponsors: ["European Association of Research Managers and Administrators (EARMA)"],
    imageUrl: "/images/congresses/2025-05-08-inorms-earma.jpg",
    aiInsights:
      "Strengthens research management literacy through European professional association exchanges.",
    orientation: "landscape",
    categoryOverride: "Congresses",
  },
  {
    id: "symp-2025-atlas-agora-attendance",
    conferenceName: "II Jornadas ATLAS-ÁGORA de Formación de Profesorado",
    certificateTitle: "Certificado de Asistencia",
    certificateSubject:
      "Formación de Profesorado de Lenguas en Entornos Rurales: Identidad, oportunidad, inclusión",
    certificateType: "Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Participant",
    roleDescription:
      "Participated in UNED Zamora's ATLAS-ÁGORA symposium focusing on rural language education challenges.",
    eventDate: "2025-05-10",
    location: "UNED Zamora, Spain",
    sponsors: ["UNED Zamora"],
    imageUrl: "/images/symposia/2025-05-10-atlas-agora-attendance.jpg",
    aiInsights:
      "Expands rural education advocacy through collaborative symposium dialogues on inclusive language policy.",
    orientation: "portrait",
    categoryOverride: "Symposia",
  },
  {
    id: "symp-2025-atlas-agora-panel",
    conferenceName: "II Jornadas ATLAS-ÁGORA de Formación de Profesorado",
    certificateTitle: "Certificado de Participación",
    certificateSubject: "Los profesores de las lenguas actúan – parte II",
    certificateType: "Panel Participation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Panelist",
    roleDescription:
      "Contributed to the ATLAS-ÁGORA panel discussing teacher agency within rural language classrooms.",
    eventDate: "2025-05-10",
    location: "UNED Zamora, Spain",
    sponsors: ["UNED Zamora"],
    imageUrl: "/images/symposia/2025-05-10-atlas-agora-panel.jpg",
    aiInsights:
      "Showcases leadership in rural language teacher development through collaborative symposium panels.",
    orientation: "landscape",
    categoryOverride: "Symposia",
  },
  {
    id: "symp-2025-encuentro-momentum",
    conferenceName: "Encuentro Momentum: De la teoría a la práctica",
    certificateTitle: "Certificado de Participación",
    certificateSubject:
      "Reflexiones sobre la IA, las RRSS y el portfolio profesional en el encuentro Momentum CSIC",
    certificateType: "Participation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Participant",
    roleDescription:
      "Joined CSIC's Momentum Encuentro to examine AI, social networks, and professional portfolios.",
    eventDate: "2025-02-26",
    location: "Madrid, Spain",
    sponsors: ["CSIC", "Ministerio de Ciencia, Innovación y Universidades"],
    imageUrl: "/images/symposia/2025-02-26-encuentro-momentum.jpg",
    aiInsights:
      "Enhances interdisciplinary proficiency at the intersection of AI and professional development strategies.",
    orientation: "portrait",
    categoryOverride: "Symposia",
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
  category: certificate.categoryOverride ?? determineCategory(certificate),
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
    <div className="page-template-career">
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

                  const gridStyles: CSSVarProperties =
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



