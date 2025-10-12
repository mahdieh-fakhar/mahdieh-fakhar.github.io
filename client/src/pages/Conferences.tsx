import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Presentation } from "lucide-react";

type ConferenceCatalogItem = {
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
  summary: string;
  conferenceTheme: string;
};

const conferenceCatalog: ConferenceCatalogItem[] = [
  {
    id: "inorms-2025",
    conferenceName: "INORMS Global Congress 2025",
    certificateTitle: "Certificate of Attendance",
    certificateSubject: "Global Research Management and Institutional Collaboration",
    certificateType: "Attendance",
    holderName: "Mahdieh Fakhar",
    holderRole: "Attendee",
    roleDescription:
      "Participated in plenary sessions on international research governance and strategic partnerships.",
    eventDate: "2025-05-15",
    location: "Madrid, Spain",
    sponsors: ["INORMS", "UNED"],
    imageUrl: "https://placehold.co/640x360/1d4ed8/ffffff?text=INORMS+2025",
    summary:
      "AI-extracted insights confirm full participation across networking forums that focused on aligning institutional policies with global research priorities.",
    conferenceTheme: "Global Networking & Research Strategy",
  },
  {
    id: "atlas-agora-2025",
    conferenceName:
      "II ATLAS-ÁGORA Conference on Language Teaching in Rural Schools",
    certificateTitle: "Presenter Recognition",
    certificateSubject: "Innovative Language Pedagogies for Rural Classrooms",
    certificateType: "Presentation",
    holderName: "Mahdieh Fakhar",
    holderRole: "Presenter",
    roleDescription:
      "Delivered a peer-reviewed presentation on AI-assisted curriculum design for multilingual learners.",
    eventDate: "2025-05-28",
    location: "Zamora, Spain",
    sponsors: ["ATLAS-ÁGORA", "Consejería de Educación de Castilla y León"],
    imageUrl:
      "https://placehold.co/640x360/9333ea/ffffff?text=ATLAS-%C3%81GORA+2025",
    summary:
      "AI detected highlighted sections demonstrating expertise in language technology adoption and community-based pedagogy for rural education systems.",
    conferenceTheme: "Language Education & Rural Innovation",
  },
  {
    id: "uned-seminar-2024",
    conferenceName: "UNED Faculty of Philology Research Seminar Series",
    certificateTitle: "Certificate of Participation",
    certificateSubject: "Applied Linguistics and Digital Humanities",
    certificateType: "Participation",
    holderName: "Mahdieh Fakhar",
    holderRole: "Participant",
    roleDescription:
      "Contributed to roundtable discussions on corpus linguistics and multilingual content analysis.",
    eventDate: "2024-02-10",
    location: "Madrid, Spain",
    sponsors: ["UNED Faculty of Philology"],
    imageUrl: "https://placehold.co/640x360/0f172a/ffffff?text=UNED+Seminar+2024",
    summary:
      "AI confirmed attendance across the full seminar series and extracted keynote highlights related to bibliometric tracking and narrative inquiry.",
    conferenceTheme: "Applied Linguistics & Digital Research",
  },
  {
    id: "rural-education-2022",
    conferenceName: "UNED Teruel Summer School on Rural Education",
    certificateTitle: "Certificate of Completion",
    certificateSubject: "Rural Education Policy and Learning Design",
    certificateType: "Completion",
    holderName: "Mahdieh Fakhar",
    holderRole: "Participant",
    roleDescription:
      "Completed an intensive summer program focused on inclusive rural pedagogy and policy evaluation.",
    eventDate: "2022-07-20",
    location: "Teruel, Spain",
    sponsors: ["UNED", "Diputación de Teruel"],
    imageUrl:
      "https://placehold.co/640x360/15803d/ffffff?text=Rural+Education+2022",
    summary:
      "AI-derived notes emphasize collaborative workshops on community engagement models and the deployment of digital learning ecosystems.",
    conferenceTheme: "Rural Education & Community Engagement",
  },
  {
    id: "international-seminars-2021",
    conferenceName: "International Seminars on Applied Linguistics",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "Cross-Border Language Technology and Cognitive Assessment",
    certificateType: "Presentation",
    holderName: "Mahdieh Fakhar",
    holderRole: "Presenter",
    roleDescription:
      "Presented research findings on AI-driven language proficiency analytics across European and Middle Eastern cohorts.",
    eventDate: "2021-09-18",
    location: "Hybrid — Tehran, Iran & Madrid, Spain",
    sponsors: ["Applied Linguistics Society", "UNED Language Lab"],
    imageUrl:
      "https://placehold.co/640x360/f97316/ffffff?text=Applied+Linguistics",
    summary:
      "AI summary highlights the focus on multimodal assessment metrics and their influence on long-term learner profiling.",
    conferenceTheme: "Language Technology & Assessment",
  },
  {
    id: "eurokd-2019",
    conferenceName: "EUROKD Learning Analytics Conference 2019",
    certificateTitle: "Workshop Participation Certificate",
    certificateSubject: "Learning Analytics for Higher Education",
    certificateType: "Workshop",
    holderName: "Mahdieh Fakhar",
    holderRole: "Workshop Participant",
    roleDescription:
      "Engaged in hands-on analytics labs targeting student success modeling and retention forecasting.",
    eventDate: "2019-09-05",
    location: "Istanbul, Turkey",
    sponsors: ["EUROKD", "Istanbul Technical University"],
    imageUrl: "https://placehold.co/640x360/047857/ffffff?text=EUROKD+2019",
    summary:
      "AI interpretation underscores applied skills in dashboard prototyping and real-time predictive analytics pipelines.",
    conferenceTheme: "Learning Analytics & Data Science",
  },
  {
    id: "tradit23-2024",
    conferenceName: "TRADIT23 International Conference",
    certificateTitle: "Organizer Acknowledgement",
    certificateSubject: "Digital Transformation in Translation Studies",
    certificateType: "Organization",
    holderName: "Mahdieh Fakhar",
    holderRole: "Organizer",
    roleDescription:
      "Coordinated program logistics, speaker curation, and digital engagement for international delegates.",
    eventDate: "2024-03-22",
    location: "Madrid, Spain",
    sponsors: ["TRADIT Network", "UNED"],
    imageUrl: "https://placehold.co/640x360/d946ef/ffffff?text=TRADIT23",
    summary:
      "AI extracted organizer credentials verifying leadership of hybrid conference operations and stakeholder communication flows.",
    conferenceTheme: "Translation & Digital Transformation",
  },
  {
    id: "eccoe-2022",
    conferenceName: "ECCOE Multiplier Event 2022",
    certificateTitle: "Organizer Certification",
    certificateSubject: "Open Online Education Ecosystems",
    certificateType: "Organization",
    holderName: "Mahdieh Fakhar",
    holderRole: "Organizer",
    roleDescription:
      "Led partner outreach and managed collaborative workshops on credential transparency across Europe.",
    eventDate: "2022-05-12",
    location: "Madrid, Spain",
    sponsors: ["ECCOE Consortium", "Erasmus+"],
    imageUrl: "https://placehold.co/640x360/0ea5e9/ffffff?text=ECCOE+2022",
    summary:
      "AI-derived highlights verify responsibilities in orchestrating open badge pilots and stakeholder training labs.",
    conferenceTheme: "Open Education & Credentialing",
  },
  {
    id: "atlas-agora-committee",
    conferenceName:
      "II Jornadas ATLAS-ÁGORA de Formación de Profesorado de Lenguas",
    certificateTitle: "Scientific Committee Appointment",
    certificateSubject:
      "Quality Assurance and Academic Review for Language Education",
    certificateType: "Committee Service",
    holderName: "Mahdieh Fakhar",
    holderRole: "Committee Member",
    roleDescription:
      "Served on the scientific committee evaluating submissions and guiding academic integrity standards.",
    eventDate: "2024-11-04",
    location: "Madrid, Spain",
    sponsors: ["ATLAS-ÁGORA", "UNED"],
    imageUrl:
      "https://placehold.co/640x360/7c3aed/ffffff?text=ATLAS-%C3%81GORA+Committee",
    summary:
      "AI-detected evidence shows rigorous peer-review activity and coordination of multidisciplinary evaluation criteria.",
    conferenceTheme: "Academic Quality Assurance",
  },
];

const formatDate = (value: string) => {
  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(parsed);
};

const holderRoles = Array.from(
  new Set(conferenceCatalog.map((item) => item.holderRole)),
).sort((a, b) => a.localeCompare(b));

const tabValues = ["All", ...holderRoles];

const getFilteredItems = (role: string) =>
  role === "All"
    ? conferenceCatalog
    : conferenceCatalog.filter((item) => item.holderRole === role);

export default function Conferences() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Presentation className="h-6 w-6 text-accent" />
            <h1 className="text-4xl font-bold">Conferences</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Explore AI-curated certificates organised by role and enriched with
            detailed insights extracted from each document.
          </p>
        </div>

        <Tabs defaultValue="All" className="space-y-6">
          <TabsList>
            {tabValues.map((role) => (
              <TabsTrigger key={role} value={role}>
                {role}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabValues.map((role) => {
            const filteredItems = getFilteredItems(role);

            return (
              <TabsContent
                key={role}
                value={role}
                className="space-y-6"
                data-testid={`tab-content-${role.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {filteredItems.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {filteredItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <Card
                          className="flex h-full flex-col overflow-hidden border-border/80 shadow-sm"
                          data-testid={`card-certificate-${item.id}`}
                        >
                          <div className="aspect-video w-full overflow-hidden bg-muted">
                            <img
                              src={item.imageUrl}
                              alt={`${item.certificateTitle} certificate preview`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          <CardContent className="flex h-full flex-col gap-6 p-6">
                            <div className="space-y-3">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <div className="space-y-1">
                                  <p className="text-xs font-medium uppercase tracking-wide text-ai-accent">
                                    AI-Extracted Certificate
                                  </p>
                                  <h2 className="text-lg font-semibold leading-tight">
                                    {item.certificateTitle}
                                  </h2>
                                  <p className="text-sm text-muted-foreground">
                                    {item.conferenceName}
                                  </p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                  <Badge variant="secondary">
                                    {item.certificateType}
                                  </Badge>
                                  <Badge variant="outline">
                                    {item.holderRole}
                                  </Badge>
                                </div>
                              </div>
                              <Badge variant="outline" className="w-fit">
                                {item.conferenceTheme}
                              </Badge>
                            </div>

                            <div className="space-y-4">
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {item.summary}
                              </p>

                              <dl className="grid gap-4 text-sm">
                                <div className="grid gap-1">
                                  <dt className="font-medium text-foreground">
                                    Certificate Subject
                                  </dt>
                                  <dd className="text-muted-foreground">
                                    {item.certificateSubject}
                                  </dd>
                                </div>

                                <div className="grid gap-1">
                                  <dt className="font-medium text-foreground">
                                    Certificate Holder
                                  </dt>
                                  <dd className="text-muted-foreground">
                                    {item.holderName}
                                  </dd>
                                </div>

                                <div className="grid gap-1">
                                  <dt className="font-medium text-foreground">
                                    Role &amp; Contribution
                                  </dt>
                                  <dd className="text-muted-foreground">
                                    {item.roleDescription ?? item.holderRole}
                                  </dd>
                                </div>

                                <div className="grid gap-1">
                                  <dt className="font-medium text-foreground">
                                    Event Date
                                  </dt>
                                  <dd className="text-muted-foreground">
                                    {formatDate(item.eventDate)}
                                  </dd>
                                </div>

                                <div className="grid gap-1">
                                  <dt className="font-medium text-foreground">
                                    Venue
                                  </dt>
                                  <dd className="text-muted-foreground">
                                    {item.location}
                                  </dd>
                                </div>

                                <div className="grid gap-1">
                                  <dt className="font-medium text-foreground">
                                    Sponsors
                                  </dt>
                                  <dd className="text-muted-foreground">
                                    {item.sponsors.length > 0
                                      ? item.sponsors.join(", ")
                                      : "Independent"}
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed border-border/70 bg-muted/30 p-10 text-center text-sm text-muted-foreground">
                    No certificates found for this role yet.
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </motion.div>
    </div>
  );
}
