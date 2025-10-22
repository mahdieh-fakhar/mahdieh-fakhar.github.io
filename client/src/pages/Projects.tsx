import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, ExternalLink, Users, Calendar } from "lucide-react";
import { BadgePanel } from "@/components/badges/BadgePanel";
import { getBadges } from "@/lib/badgeUtils";

const projects = [
  {
    id: 1,
    title: "IHUPA Research Institute",
    description: "Institute for Research in Humanities and Heritage, UNED-Alcañiz",
    role: "Research Collaborator",
    period: "2021–2023",
    technologies: ["Research Methodology", "Heritage Studies", "Digital Humanities"],
    imageUrl: null,
  },
  {
    id: 2,
    title: "AGORA Project",
    description: "Technological and methodological innovations in language teaching in rural areas. Spanish Ministry of Science and Innovation funded project (Ref. PID2021-128182OB-100)",
    role: "Research Team Member",
    period: "2022–2025",
    technologies: ["Educational Technology", "Language Teaching", "Rural Education", "Innovation"],
    directors: "Prof. Elena Bárcena & Prof. Timothy Read",
  },
  {
    id: 3,
    title: "Web Design for IHUPA",
    description: "Designed and developed the official website for El Instituto de Investigación en Humanidades y Patrimonio UNED-Alcañiz (IHUPA)",
    role: "Web Designer & Developer",
    period: "2023",
    technologies: ["Web Design", "UI/UX", "HTML/CSS", "Responsive Design"],
    url: "#",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "AI-powered digital portfolio showcasing academic achievements, research publications, and professional experience. Features document analysis with OpenAI Vision for certificate verification.",
    role: "Developer",
    period: "2024–2025",
    technologies: ["React", "TypeScript", "AI Integration", "OpenAI Vision", "Tailwind CSS"],
    url: "https://mahdieh-fakhar.github.io/",
  },
  {
    id: 5,
    title: "6-Month Research Fellowship",
    description: "Ministry of Science, Research, and Technology of Iran research fellowship hosted by UNED (ATLAS Research Group), Madrid. Focus on language teaching and digital competence research.",
    role: "Research Fellow",
    period: "March–November 2022",
    technologies: ["Research", "Data Analysis", "Academic Writing"],
    funding: "€4,000",
  },
];

export default function Projects() {
  const projectBadges = getBadges({ page: "projects" }).filter((badge) =>
    badge.placements.includes("projects") || badge.placements.includes("project-card"),
  );
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
            <Rocket className="h-6 w-6 text-ai-accent" />
            <h1 className="text-4xl font-bold">Projects</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Research projects and web development work
          </p>
        </div>

        {projectBadges.length > 0 && (
          <Card className="border-primary/25 bg-background/80 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Rocket className="h-5 w-5 text-primary" />
                Certifications informing delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="auto-grid md:auto-grid-lg">
                {projectBadges.map((badge) => (
                  <BadgePanel key={badge.id} badge={badge} layout="grid" />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Projects Grid */}
        <div className="stack-gap-md">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover-elevate transition-shadow" data-testid={`card-project-${index}`}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-xl" data-testid={`text-title-${index}`}>{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground" data-testid={`text-description-${index}`}>{project.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span data-testid={`text-role-${index}`}>{project.role}</span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span data-testid={`text-period-${index}`}>{project.period}</span>
                    </div>
                    {project.funding && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <Badge variant="outline" data-testid={`badge-funding-${index}`}>{project.funding}</Badge>
                      </>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {project.directors && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">Directors: </span>
                      <span data-testid={`text-directors-${index}`}>{project.directors}</span>
                    </div>
                  )}

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Technologies & Methods</p>
                      <div className="flex flex-wrap gap-2 mobile:flex-nowrap mobile:overflow-x-auto mobile:pr-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${index}-${tech.toLowerCase().replace(/\s+/g, '-')}`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.url && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" data-testid={`link-project-${index}`}>
                        View Project
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <Card className="bg-gradient-to-br from-ai-accent/5 to-primary/5">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">Research & Development Focus</h3>
            <p className="text-sm text-muted-foreground">
              Active involvement in cutting-edge research projects focusing on language teaching innovation, 
              educational technology, and digital humanities. Combining technical skills with academic research 
              to create impactful solutions in education and data science.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
