import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Presentation } from "lucide-react";

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
};

const certificates: ConferenceCertificate[] = [
  {
    id: "tellsi-2015-critical-pedagogy",
    conferenceName: "13th International TELLSI Conference",
    certificateTitle: "Certificate of Attendance",
    certificateSubject: "Revisiting and Implementing Critical Pedagogy in Second Language Learning",
    certificateType: "Workshop Attendance",
    holderName: "Mahdieh Fakhar Shahreza",
    holderRole: "Attendee",
    roleDescription:
      "Participated in the TELLSI 13 workshop facilitated by Dr. Goudarz Alibakhshi and Dr. Mola Miri from Allameh Tabataba’i University.",
    eventDate: "2015-11-19",
    location: "Lorestan University, Khorramabad, Iran",
    sponsors: ["TELLSI", "Lorestan University"],
    imageUrl: "/images/conferences/Conference/2015.11.17-19.01.jpg",
    aiInsights:
      "AI extraction confirms workshop completion focused on embedding critical pedagogy techniques into second-language curricula.",
  },
  {
    id: "tellsi-2015-instructional-pragmatics",
    conferenceName: "13th International TELLSI Conference",
    certificateTitle: "Certificate of Attendance",
    certificateSubject: "Instructional Pragmatics: Teaching Students to Use Language Appropriately",
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
  },
  {
    id: "ntelt-2018-self-leadership",
    conferenceName:
      "3rd Conference on New Trends in English Language Teaching and Testing",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "Investigating the Effect of EFL Teachers’ Self-Leadership on Their Processional Development and Change",
    certificateType: "Conference Presentation",
    holderName: "Reza Khany & Mahdieh Fakhar Shahreza",
    holderRole: "Presenter",
    roleDescription:
      "Co-presented research on self-leadership’s impact on professional growth among Iranian EFL teachers.",
    eventDate: "2018-09-05",
    location: "Tehran, Iran",
    sponsors: ["CIVILICA", "Victoria University of Wellington", "NTELT"],
    imageUrl: "/images/conferences/Conference/2018.09.04-05.jpg",
    aiInsights:
      "AI summary emphasizes collaborative authorship and empirical evaluation of leadership-driven teacher development.",
  },
  {
    id: "tellsi-2018-futurology",
    conferenceName: "16th International TELLSI Conference",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "An Ecological Exploration of Iranian EFL Students’ Self-Change, Self-Construal, and Change Management",
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
      "AI confirms thematic alignment with TELLSI’s futurology track and validates co-author credentials.",
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
  },
  {
    id: "tellsi-2019-new-horizons",
    conferenceName: "17th International TELLSI Conference",
    certificateTitle: "Certificate of Presentation",
    certificateSubject:
      "An Exploration of Iranian EFL Stakeholders’ Attitudes and Knowledge of Different Educational Management Systems",
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
  },
];

const formatDate = (value: string) => {
  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(parsed);
};

const roles = Array.from(new Set(certificates.map((item) => item.holderRole))).sort(
  (a, b) => a.localeCompare(b),
);

const tabs = ["All", ...roles];

const filterByRole = (role: string) =>
  role === "All"
    ? certificates
    : certificates.filter((item) => item.holderRole === role);

export default function Conferences() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
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
            Browse AI-enriched certificates with equal-focus previews and catalogued insights for every role.
          </p>
        </div>

        <Tabs defaultValue="All" className="space-y-6">
          <TabsList>
            {tabs.map((role) => (
              <TabsTrigger key={role} value={role}>
                {role}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((role) => {
            const items = filterByRole(role);

            return (
              <TabsContent
                key={role}
                value={role}
                className="space-y-6"
                data-testid={`tab-content-${role.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {items.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.04 }}
                      >
                        <Card
                          className="flex h-full flex-col overflow-hidden border border-border/70 shadow-sm"
                          data-testid={`card-certificate-${item.id}`}
                        >
                          <div className="relative flex-1 min-h-0 bg-muted">
                            <img
                              src={item.imageUrl}
                              alt={`${item.certificateTitle} - ${item.conferenceName}`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <CardContent className="flex flex-1 flex-col gap-4 p-5">
                            <div className="space-y-3">
                              <div className="flex flex-col gap-2">
                                <p className="text-xs font-semibold uppercase tracking-wide text-ai-accent">
                                  AI Extracted Catalog
                                </p>
                                <h2 className="text-lg font-semibold leading-tight text-foreground">
                                  {item.certificateTitle}
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                  {item.conferenceName}
                                </p>
                              </div>
                              <div className="flex flex-wrap items-center gap-2">
                                <Badge variant="secondary">{item.certificateType}</Badge>
                                <Badge variant="outline">{item.holderRole}</Badge>
                              </div>
                            </div>

                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {item.aiInsights}
                            </p>

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
                                <dd className="text-muted-foreground">
                                  {item.roleDescription ?? item.holderRole}
                                </dd>
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
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed border-border/70 bg-muted/40 p-10 text-center text-sm text-muted-foreground">
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
