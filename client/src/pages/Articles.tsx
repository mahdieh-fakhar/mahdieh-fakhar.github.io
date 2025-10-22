import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "Approaches on Machine Translation",
    authors: "Fakhar Shahreza, M., Vilhelm, M., & Díez-Arcón, P.",
    year: "2025",
    journal: "Journal of Translation and Translanguaging in Multilingual Contexts",
    type: "journal",
    description: "Special issue on approaches to machine translation in multilingual contexts",
  },
  {
    id: 2,
    title: "Two Decades of Technology-Mediated Reading",
    authors: "Fakhar Shahreza, M.",
    year: "2025",
    journal: "Peter Lang",
    type: "book",
    status: "In Press",
    description: "Comprehensive analysis of technology-mediated reading practices over 20 years",
  },
  {
    id: 3,
    title: "Duolingo & Language Learning",
    authors: "Fakhar Shahreza, M., Bárcena Madera, E., & Khany, R.",
    year: "2023",
    journal: "Comares",
    type: "book",
    description: "Research on language learning effectiveness using Duolingo platform",
  },
  {
    id: 4,
    title: "Social Media in Higher Education: Reflections and Case Studies",
    authors: "Fakhar Shahreza, M.",
    year: "2022",
    journal: "Open Book Publishers (Review), Taylor & Francis",
    type: "review",
    description: "Book review analyzing the role of social media in higher education settings",
  },
  {
    id: 5,
    title: "Development of the EFL Teacher Change Scale",
    authors: "Khany, R. & Fakhar Shahreza, M.",
    year: "2016",
    journal: "Journal of Applied Linguistics Studies (JALS)",
    type: "journal",
    description: "Development and validation of a scale measuring teacher change in EFL contexts",
  },
];

const conferenceProceedings = [
  "TELLSI International Conferences (Iran)",
  "International Conferences on Language, Discourse, and Pragmatics (Iran)",
  "EUROKD Conference (Turkey)",
  "Online Teaching and MALL Studies",
];

export default function Articles() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-md"
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-accent" />
            <h1 className="text-4xl font-bold">Publications & Articles</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Research contributions to academic literature
          </p>
        </div>

        {/* Journal Publications */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Indexed Journal Publications</h2>
          <div className="stack-gap-md">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-elevate transition-shadow" data-testid={`card-publication-${index}`}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <CardTitle className="text-lg" data-testid={`text-title-${index}`}>{pub.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant={pub.type === "journal" ? "default" : "secondary"} data-testid={`badge-type-${index}`}>
                          {pub.type}
                        </Badge>
                        {pub.status && (
                          <Badge variant="outline" data-testid={`badge-status-${index}`}>{pub.status}</Badge>
                        )}
                        <Badge variant="outline" data-testid={`badge-year-${index}`}>{pub.year}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground" data-testid={`text-authors-${index}`}>{pub.authors}</p>
                    <p className="text-sm font-medium text-primary" data-testid={`text-journal-${index}`}>{pub.journal}</p>
                  </CardHeader>
                  {pub.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground" data-testid={`text-description-${index}`}>{pub.description}</p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conference Proceedings */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Conference Proceedings</h2>
          <Card>
            <CardHeader>
              <CardTitle>Notable Conferences (13+ papers)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Full conference paper list available in digital portfolio
              </p>
              <div className="auto-grid">
                {conferenceProceedings.map((conf, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm" data-testid={`text-conference-${index}`}>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <span>{conf}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Research Focus Areas */}
        <Card className="bg-gradient-to-br from-accent/5 to-primary/5">
          <CardHeader>
            <CardTitle>Research Focus Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mobile:flex-nowrap mobile:overflow-x-auto mobile:pr-2">
              <Badge variant="secondary" data-testid="badge-focus-machine-translation">Machine Translation</Badge>
              <Badge variant="secondary" data-testid="badge-focus-language-learning-technology">Language Learning Technology</Badge>
              <Badge variant="secondary" data-testid="badge-focus-digital-competence">Digital Competence</Badge>
              <Badge variant="secondary" data-testid="badge-focus-teacher-development">Teacher Development</Badge>
              <Badge variant="secondary" data-testid="badge-focus-bibliometric-analysis">Bibliometric Analysis</Badge>
              <Badge variant="secondary" data-testid="badge-focus-educational-technology">Educational Technology</Badge>
              <Badge variant="secondary" data-testid="badge-focus-data-driven-research">Data-Driven Research</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
