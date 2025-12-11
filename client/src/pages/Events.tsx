import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Presentation } from "lucide-react";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/basePath";
import { Link } from "wouter";
import { CareerEvidenceCard, type Slide } from "@/components/career/CareerEvidenceCard";
import { StatsSection } from "@/components/StatsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  additionalImages?: string[];
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

const certificateData: ConferenceCertificate[] = [
  {
    id: "conf-2024-uned-eye-tracking",
    conferenceName: "UNED Faculty of Philology Seminar Series",
    certificateTitle: "Certificate of Attendance",
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
    id: "symp-2025-encuentro-momentum",
    conferenceName: "Momentum Encounter: From Theory to Practice",
    certificateTitle: "Certificate of Participation",
    certificateSubject: "Reflections on AI, social media, and professional portfolios",
    certificateType: "Participation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Participant",
    roleDescription:
      "Participated in Momentum CSIC's in-person program on AI, social platforms, and digital professional portfolios.",
    eventDate: "2025-02-26",
    location: "Madrid, Spain",
    sponsors: [
      "CSIC",
      "Ministry of Science, Innovation and Universities",
      "NextGenerationEU",
    ],
    imageUrl: "/images/symposia/Mahdieh Fakhar Shahreza_Certificado_Encuentro_Momentum_Page_1.jpg",
    additionalImages: [
      "/images/symposia/Mahdieh Fakhar Shahreza_Certificado_Encuentro_Momentum_Page_2.jpg",
    ],
    aiInsights:
      "Expands interdisciplinary proficiency at the intersection of AI, scientific communication, and professional development.",
    orientation: "portrait",
    categoryOverride: "Symposia",
  },
  {
    id: "symp-2025-atlas-agora-attendance",
    conferenceName: "II ATLAS-AGORA Symposium on Rural Language Education",
    certificateTitle: "Certificate of Attendance",
    certificateSubject:
      "Attendance at ATLAS-AGORA rural language teacher education symposium (identity, opportunity, inclusion)",
    certificateType: "Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Participant",
    roleDescription:
      "Attended UNED Zamora's ATLAS-AGORA sessions on rural language education and inclusion.",
    eventDate: "2025-05-10",
    location: "UNED Zamora, Spain",
    sponsors: ["UNED Zamora"],
    imageUrl: "/images/symposia/Asistencia Mahdieh Fakhar_ f.jpg",
    aiInsights:
      "Advances rural education advocacy through collaborative symposium dialogues on inclusive language policy.",
    orientation: "portrait",
    categoryOverride: "Symposia",
  },
  {
    id: "symp-2025-atlas-agora-panel",
    conferenceName: "II ATLAS-AGORA Symposium on Rural Language Education",
    certificateTitle: "Certificate of Participation",
    certificateSubject: "Language teachers take action - part II (roundtable)",
    certificateType: "Panel Participation",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Panelist",
    roleDescription:
      "Joined the ATLAS-AGORA roundtable discussing teacher agency and action in rural contexts.",
    eventDate: "2025-05-10",
    location: "UNED Zamora, Spain",
    sponsors: ["UNED Zamora", "Ministry of Science, Innovation and Universities"],
    imageUrl: "/images/symposia/Mahdieh Fakhar_f.jpg",
    aiInsights:
      "Showcases leadership in rural language teacher development through collaborative symposium panels.",
    orientation: "landscape",
    categoryOverride: "Symposia",
  },
  {
    id: "congress-2025-earma-inorms",
    conferenceName: "INORMS Congress 2025",
    certificateTitle: "Certificate of Attendance",
    certificateSubject: "INORMS Congress 2025 (Madrid, Spain)",
    certificateType: "Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Participant",
    roleDescription: "Attended the INORMS Congress hosted by EARMA in Madrid.",
    eventDate: "2025-05-08",
    location: "Madrid, Spain",
    sponsors: ["EARMA"],
    imageUrl: "/images/congresses/Certificate of Attendance in EARMA conference.jpg",
    aiInsights:
      "Strengthens research management literacy through international congress participation.",
    orientation: "landscape",
    categoryOverride: "Congresses",
  },
  {
    id: "sem-2024-xxvi-seminario",
    conferenceName: "XXVI Permanent Research Seminar TIC-ETL",
    certificateTitle: "Certificate of Attendance",
    certificateSubject: "Generative AI in Language Teaching and Processing",
    certificateType: "Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Participant",
    roleDescription:
      "Joined UNED's permanent seminar exploring generative AI for language education contexts.",
    eventDate: "2024-05-08",
    location: "UNED, Madrid, Spain",
    sponsors: ["UNED Faculty of Philology"],
    imageUrl: "/images/seminars/XXVI-Permanent-Research-Seminar-66_signed-1.jpg",
    aiInsights:
      "Extends research into responsible generative AI adoption for blended language instruction.",
    orientation: "landscape",
    categoryOverride: "Seminars",
  },
  {
    id: "sem-2022-eccoe-multiplier",
    conferenceName: "II ECCOE Multiplier Event / XXIII Seminar TIC ETL",
    certificateTitle: "Certificate of Attendance",
    certificateSubject:
      "Digital micro-credentials: a solution with a vision for tomorrow's educational needs",
    certificateType: "Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Participant",
    roleDescription:
      "Worked with ECCOE partners on micro-credential frameworks for flexible learning pathways.",
    eventDate: "2022-05-13",
    location: "UNED, Madrid, Spain",
    sponsors: ["UNED Faculty of Philology", "ECCOE"],
    imageUrl: "/images/seminars/Certificate_ECCOE-Mahdie.jpg",
    aiInsights:
      "Strengthens strategic literacy in European micro-credential standards and recognition.",
    orientation: "landscape",
    categoryOverride: "Seminars",
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

const parseEventDateValue = (value: string) => {
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? 0 : timestamp;
};

const certificates: CategorizedCertificate[] = certificateData
  .map((certificate) => ({
    ...certificate,
    imageUrl: assetPath(certificate.imageUrl),
    additionalImages: certificate.additionalImages?.map((src) => assetPath(src)),
    category: certificate.categoryOverride ?? determineCategory(certificate),
  }))
  .sort((a, b) => parseEventDateValue(b.eventDate) - parseEventDateValue(a.eventDate));

const formatDate = (value: string) => {
  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(parsed);
};

const certificateHighlights = (certificate: CategorizedCertificate): string[] => {
  const highlights: string[] = [
    certificate.aiInsights,
    `Certificate Subject: ${certificate.certificateSubject}`,
    `Role: ${certificate.holderRole}`,
    certificate.roleDescription ? `Role Details: ${certificate.roleDescription}` : null,
    `Event Date: ${formatDate(certificate.eventDate)}`,
    `Location: ${certificate.location}`,
  ].filter(Boolean) as string[];

  if (certificate.sponsors.length) {
    highlights.push(`Sponsors: ${certificate.sponsors.join(", ")}`);
  }

  return highlights;
};

const certificateSlides = (certificate: CategorizedCertificate): Slide[] => [
  certificate.imageUrl,
  ...(certificate.additionalImages ?? []),
].map((src, index) => ({
  src,
  alt: `${certificate.certificateTitle} - ${certificate.conferenceName}${
    index > 0 ? ` (page ${index + 1})` : ""
  }`,
  caption: certificate.certificateSubject,
  downloadName: `${certificate.id}${index > 0 ? `-page-${index + 1}` : ""}.jpg`,
}));

const navItems: EventNavItem[] = [
  {
    label: "Overview",
    slug: "all",
    filter: null,
    description: "",
  },
  {
    label: "Conferences",
    slug: "conferences",
    filter: "Conferences",
    description: "",
  },
  {
    label: "Seminars",
    slug: "seminars",
    filter: "Seminars",
    description: "",
  },
  {
    label: "Webinars",
    slug: "webinars",
    filter: "Webinars",
    description: "",
  },
  {
    label: "Congresses",
    slug: "congresses",
    filter: "Congresses",
    description: "",
  },
  {
    label: "Symposia",
    slug: "symposia",
    filter: "Symposia",
    description: "",
  },
];

const glanceHighlights = [
  {
    icon: "🎤",
    title: "Conferences",
    detail: "Participation in national and international conferences as presenter, panelist, and attendee.",
  },
  {
    icon: "🧑‍🏫",
    title: "Seminars",
    detail: "Academic and professional seminars, invited talks, and department-focused sessions.",
  },
  {
    icon: "💻",
    title: "Webinars",
    detail: "Online webinars delivered or attended with wide, remote audiences.",
  },
  {
    icon: "🏛",
    title: "Congresses",
    detail: "Broader congresses with multi-track or multi-day programs and committee work.",
  },
  {
    icon: "🧠",
    title: "Symposia",
    detail: "Theme-driven symposia and roundtables with targeted research discussions.",
  },
];

const eventTypeSections = [
  {
    title: "Conferences",
    summary:
      "Conferences where I have presented, spoken, moderated, or participated, covering both national and international audiences.",
    href: "/events/conferences",
    cta: "View Conferences →",
  },
  {
    title: "Seminars",
    summary:
      "Seminars and focused talks with smaller groups, including departmental presentations, guest lectures, and expert sessions.",
    href: "/events/seminars",
    cta: "Explore Seminars →",
  },
  {
    title: "Webinars",
    summary:
      "Online webinars delivered or attended, emphasizing accessible, remote formats for sharing knowledge and practice.",
    href: "/events/webinars",
    cta: "Browse Webinars →",
  },
  {
    title: "Congresses",
    summary:
      "Large-scale congresses with multi-track agendas where I have presented, joined committees, or contributed as a participant.",
    href: "/events/congresses",
    cta: "See Congresses →",
  },
  {
    title: "Symposia",
    summary:
      "Specialist symposia focused on defined themes, highlighting my contributions as presenter, panelist, or engaged attendee.",
    href: "/events/symposia",
    cta: "Discover Symposia →",
  },
];

const roleHighlights = [
  "Presenting research and invited talks",
  "Moderating or chairing sessions",
  "Serving on organizing or scientific committees",
  "Participating as an engaged attendee",
];

const navigationTree = `Events
├── Overview (this page)
├── Conferences
├── Seminars
├── Webinars
├── Congresses
└── Symposia`;

const navigationLinks = [
  { label: "Conferences", href: "/events/conferences" },
  { label: "Seminars", href: "/events/seminars" },
  { label: "Webinars", href: "/events/webinars" },
  { label: "Congresses", href: "/events/congresses" },
  { label: "Symposia", href: "/events/symposia" },
];

type EventsRouteParams = {
  category?: string;
};

type EventsProps = {
  params?: EventsRouteParams;
};

export default function Events({ params }: EventsProps = {}) {
  const activeSlug = params?.category ? params.category.toLowerCase() : "all";
  const activeItem = navItems.find((item) => item.slug === activeSlug) ?? navItems[0];
  const filteredCertificates =
    activeItem.filter === null
      ? certificates
      : certificates.filter((item) => item.category === activeItem.filter);
  const eventStats = useMemo(() => {
    if (!filteredCertificates.length) {
      return [];
    }
    const categories = new Set(filteredCertificates.map((certificate) => certificate.category)).size;
    const locations = new Set(filteredCertificates.map((certificate) => certificate.location)).size;
    const sponsors = new Set(filteredCertificates.flatMap((certificate) => certificate.sponsors)).size;
    return [
      { value: filteredCertificates.length, label: `${activeItem.label} Certificates` },
      { value: categories, label: "Event Categories" },
      { value: locations, label: "Locations" },
      { value: sponsors, label: "Sponsors" },
    ];
  }, [filteredCertificates, activeItem.label]);

  const isOverview = activeItem.slug === "all";
  const heroTitle = isOverview ? "Events Overview" : `${activeItem.label} Events`;
  const heroLead = isOverview
    ? "This page gathers academic conferences, seminars, and events where Mahdieh Fakhar has presented or contributed. From data science and AI talks to scientometrics and bibliometrics panels, it highlights roles, topics, and links to materials so collaborators can follow the research journey and discover new opportunities for partnership."
    : `Focused view of ${activeItem.label.toLowerCase()} with roles, certificates, and supporting details.`;
  const heroHelper = isOverview
    ? "Academic conferences, invited talks, and research events in data science and AI."
    : "Switch categories via the tabs to jump across conferences, seminars, webinars, congresses, and symposia.";

  return (
    <div className="page-template-career">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-lg"
      >
        <section className="space-y-4 rounded-3xl border border-primary/20 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Presentation className="h-6 w-6 text-accent" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Events</p>
                <h1 className="text-4xl font-bold leading-tight">{heroTitle}</h1>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">{heroLead}</p>
          <p className="text-sm text-muted-foreground">{heroHelper}</p>
        </section>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-sm mobile:justify-start">
          <nav
            className="flex flex-wrap justify-center gap-2 mobile:flex-nowrap mobile:justify-start mobile:overflow-x-auto mobile:pr-2"
            role="tablist"
            aria-label="Event categories"
          >
            {navItems.map((item) => {
              const href = item.slug === "all" ? "/events" : `/events/${item.slug}`;
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
          {activeItem.description && (
            <span className="text-muted-foreground normal-case tracking-normal">
              {activeItem.description}
            </span>
          )}
        </div>

        {isOverview && (
          <>
            <section className="space-y-4 rounded-2xl border border-dashed border-primary/30 bg-muted/40 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold">Events at a Glance</h2>
                <span className="text-sm text-muted-foreground">
                  Quick snapshot of the breadth of event activity.
                </span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {glanceHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-xl border border-primary/20 bg-background/70 px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
                  >
                    <span className="text-2xl" aria-hidden>
                      {item.icon}
                    </span>
                    <div className="space-y-1">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold">Event Types</h2>
                <span className="text-sm text-muted-foreground">
                  Jump directly to detailed pages for each category.
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {eventTypeSections.map((section) => (
                  <Card key={section.title} className="h-full border border-primary/20 bg-background/80">
                    <CardHeader>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">{section.summary}</p>
                      <Link
                        href={section.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                      >
                        {section.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="space-y-4 rounded-2xl border border-primary/25 bg-muted/30 p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold">Roles & Contributions</h2>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  Professional Presence
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Across these events, my roles have included presenting research, moderating sessions, serving
                on scientific or organizing committees, and contributing as an engaged attendee.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {roleHighlights.map((role) => (
                  <li key={role} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Navigation</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-primary/20 bg-background/80 p-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap leading-relaxed">{navigationTree}</pre>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-muted/40 p-4">
                  <p className="mb-3 text-sm text-muted-foreground">Quick links</p>
                  <div className="flex flex-wrap gap-2">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary/80"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {!isOverview && (
          <>
            <section className="space-y-6" data-testid={`section-category-${activeItem.slug}`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold">{activeItem.label} Certificates</h2>
                  <p className="text-sm text-muted-foreground">
                    Detailed certificates and roles across {activeItem.label.toLowerCase()} events.
                  </p>
                </div>
              </div>
              {filteredCertificates.length > 0 ? (
                <div className="space-y-6">
                  {filteredCertificates.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                    >
                      <CareerEvidenceCard
                        title={item.certificateTitle}
                        organization={item.conferenceName}
                        location={item.location}
                        period={formatDate(item.eventDate)}
                        roleLabel={item.holderRole ?? item.certificateType}
                        highlights={certificateHighlights(item)}
                        slides={certificateSlides(item)}
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-primary/40 bg-muted/40 p-10 text-center text-sm text-muted-foreground">
                  No certificates found for {activeItem.label.toLowerCase()} yet.
                </div>
              )}
            </section>
            <StatsSection className="mt-10" stats={eventStats} />
          </>
        )}
      </motion.div>
    </div>
  );
}


