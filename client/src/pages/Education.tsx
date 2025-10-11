import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Master's in Big Data and Data Science",
    institution: "Universidad Internacional de La Rioja (UNIR)",
    location: "Spain",
    period: "2025–2026",
    status: "In Progress",
    gpa: null,
    distinction: null,
    thesis: null,
  },
  {
    id: 2,
    degree: "Official Master's in ICT for Language Teaching and Processing",
    institution: "Universidad Nacional de Educación a Distancia (UNED)",
    location: "Spain",
    period: "2022–2024",
    status: "Completed",
    gpa: "9.29/10",
    distinction: "Distinction",
    thesis: "Improving Digital Competence Scales for 21st-Century English Teachers",
    thesisGrade: "9/10 (Distinction)",
    highlights: [
      "Selected as one of Spain's top 100 online Master's degrees in 2023 by El Mundo",
      "Ranked 3rd in Education category",
    ],
    url: "https://www.elmundo.es/especiales/mejores-masters/",
  },
  {
    id: 3,
    degree: "Official Master's in Teaching English as a Foreign Language (TEFL)",
    institution: "University of Ilam",
    location: "Iran",
    period: "2014–2016",
    status: "Completed",
    gpa: "9.09/10",
    distinction: "Distinction",
    thesis: "Relationship Between Identity, Change, and Professional Development of English Teachers in Iran",
    thesisGrade: "19.80/20",
  },
  {
    id: 4,
    degree: "BA in English Translation Studies",
    institution: "Payame Noor University of Shahreza, Isfahan",
    location: "Iran",
    period: "2009–2013",
    status: "Completed",
    gpa: "7.91/10",
    distinction: "Merit",
    thesis: "Translation of a Short Story Collection and Two Motivational Videos by Anthony Robbins",
    thesisGrade: "19.88/20",
  },
];

export default function Education() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Education</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Academic Journey & Achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="md:ml-20" data-testid={`card-education-${index}`}>
                {/* Timeline dot */}
                <div className="absolute -left-12 top-6 h-8 w-8 rounded-full bg-primary border-4 border-background hidden md:flex items-center justify-center">
                  {edu.status === "In Progress" ? (
                    <div className="h-3 w-3 rounded-full bg-primary-foreground animate-pulse" />
                  ) : (
                    <Award className="h-4 w-4 text-primary-foreground" />
                  )}
                </div>

                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <CardTitle className="text-xl" data-testid={`text-degree-${index}`}>{edu.degree}</CardTitle>
                    {edu.status === "In Progress" && (
                      <Badge className="w-fit" data-testid={`badge-status-${index}`}>In Progress</Badge>
                    )}
                    {edu.distinction && edu.status === "Completed" && (
                      <Badge variant="secondary" className="w-fit" data-testid={`badge-distinction-${index}`}>{edu.distinction}</Badge>
                    )}
                  </div>
                  <div className="space-y-1 text-muted-foreground">
                    <p className="font-medium" data-testid={`text-institution-${index}`}>{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span data-testid={`text-location-${index}`}>{edu.location}</span>
                      <span>•</span>
                      <span data-testid={`text-period-${index}`}>{edu.period}</span>
                      {edu.gpa && (
                        <>
                          <span>•</span>
                          <span data-testid={`text-gpa-${index}`}>GPA: {edu.gpa}</span>
                        </>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {edu.thesis && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Thesis</h4>
                      <p className="text-sm text-muted-foreground italic" data-testid={`text-thesis-${index}`}>"{edu.thesis}"</p>
                      {edu.thesisGrade && (
                        <p className="text-sm text-muted-foreground" data-testid={`text-thesis-grade-${index}`}>Grade: {edu.thesisGrade}</p>
                      )}
                    </div>
                  )}

                  {edu.highlights && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Highlights</h4>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2" data-testid={`text-highlight-${index}-${idx}`}>
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.url && (
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      data-testid={`link-ranking-${index}`}
                    >
                      View El Mundo Ranking
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
