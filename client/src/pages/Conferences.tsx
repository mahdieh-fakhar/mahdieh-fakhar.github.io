import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Presentation, Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { DocumentUpload } from "@/components/DocumentUpload";
import { Separator } from "@/components/ui/separator";

const conferences = [
  {
    id: 1,
    name: "INORMS Congress",
    location: "Madrid, Spain",
    date: "May 2025",
    role: "Attendee",
    type: "attendance",
  },
  {
    id: 2,
    name: "II ATLAS–AGORA Conference on Language Teaching in Rural Schools",
    location: "Zamora, Spain",
    date: "May 2025",
    role: "Presenter",
    type: "presentation",
  },
  {
    id: 3,
    name: "Research Seminar Series, Faculty of Philology",
    location: "UNED, Spain",
    date: "2023–2024",
    role: "Participant",
    type: "attendance",
  },
  {
    id: 4,
    name: "Summer School: Rural Education",
    location: "UNED–Teruel, Spain",
    date: "July 2022",
    role: "Participant",
    type: "attendance",
  },
  {
    id: 5,
    name: "International Seminars on Applied Linguistics",
    location: "Iran & Europe",
    date: "2015–2022",
    role: "Presenter",
    type: "presentation",
  },
  {
    id: 6,
    name: "EUROKD Conference",
    location: "Istanbul, Turkey",
    date: "2019",
    role: "Workshop Participant",
    type: "attendance",
    description: "Learning Analytics in Higher Education",
  },
];

const organizedEvents = [
  {
    id: 1,
    name: "TRADIT23 International Conference",
    location: "UNED, Madrid",
    date: "March 2024",
    role: "Organizer",
  },
  {
    id: 2,
    name: "ECCOE Multiplier Event",
    location: "UNED, Madrid",
    date: "May 2022",
    role: "Organizer",
  },
];

const committeeRoles = [
  {
    id: 1,
    name: "II Jornadas ATLAS-ÁGORA de Formación de Profesorado de Lenguas en Entornos Rurales",
    role: "Scientific Committee Member",
  },
];

export default function Conferences() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Presentation className="h-6 w-6 text-accent" />
            <h1 className="text-4xl font-bold">Conferences</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Academic conferences, presentations, and event organization
          </p>
        </div>

        {/* AI Document Upload Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-ai-accent" />
            <h2 className="text-2xl font-semibold">Upload Conference Certificate</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Upload your conference certificates and let AI extract the information automatically
          </p>
          <DocumentUpload category="conference" />
        </section>

        <Separator />

        {/* Conference Attendance */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Conference Attendance & Presentations</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {conferences.map((conf, index) => (
              <motion.div
                key={conf.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="hover-elevate transition-shadow h-full" data-testid={`card-conference-${index}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base">{conf.name}</CardTitle>
                      <Badge variant={conf.type === "presentation" ? "default" : "secondary"}>
                        {conf.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{conf.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{conf.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{conf.role}</span>
                    </div>
                    {conf.description && (
                      <p className="text-sm text-muted-foreground pt-2">{conf.description}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Event Organization */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Research Event Organization</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {organizedEvents.map((event, index) => (
              <Card key={event.id} className="hover-elevate transition-shadow" data-testid={`card-organized-${index}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base">{event.name}</CardTitle>
                    <Badge variant="default">{event.role}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Committee Membership */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Scientific Committee Roles</h2>
          <div className="space-y-4">
            {committeeRoles.map((role, index) => (
              <Card key={role.id} className="hover-elevate transition-shadow" data-testid={`card-committee-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">{role.name}</h3>
                      <Badge variant="outline">{role.role}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
