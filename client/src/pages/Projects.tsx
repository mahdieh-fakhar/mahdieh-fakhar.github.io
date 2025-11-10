import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket } from "lucide-react";
import { BadgePanel } from "@/components/badges/BadgePanel";
import { getBadges } from "@/lib/badgeUtils";
import { CareerEvidenceCard, type Slide } from "@/components/career/CareerEvidenceCard";
import { StatsSection } from "@/components/StatsSection";

type Project = {
  id: number;
  title: string;
  description: string;
  role?: string;
  period?: string;
  technologies?: string[];
  imageUrl?: string | null;
  url?: string;
  directors?: string;
  funding?: string;
};

const projects: Project[] = [
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

const projectFallbackSlides: Slide[] = [{ src: "/images/profile.jpg", alt: "Project evidence placeholder" }];

function getProjectHighlights(project: Project): string[] {
  const highlights: string[] = [project.description];

  if (project.role) {
    highlights.push(`Role: ${project.role}`);
  }

  if (project.period) {
    highlights.push(`Timeline: ${project.period}`);
  }

  if (project.directors) {
    highlights.push(`Directors: ${project.directors}`);
  }

  if (project.technologies?.length) {
    highlights.push(`Technologies & Methods: ${project.technologies.join(", ")}`);
  }

  if (project.funding) {
    highlights.push(`Funding: ${project.funding}`);
  }

  return highlights;
}

function getProjectSlides(project: Project): Slide[] {
  if (project.imageUrl) {
    return [
      {
        src: project.imageUrl,
        alt: `${project.title} preview`,
        caption: project.title,
      },
    ];
  }

  return projectFallbackSlides;
}

export default function Projects() {
  const projectBadges = getBadges({ page: "projects" }).filter((badge) =>
    badge.placements.includes("projects") || badge.placements.includes("project-card"),
  );
  const projectStats = (() => {
    const total = projects.length;
    const research = projects.filter((project) =>
      `${project.role ?? ""} ${project.description}`.toLowerCase().includes("research"),
    ).length;
    const digitalBuilds = projects.filter((project) =>
      (project.technologies ?? []).some((tech) => /react|ui|web|design|tailwind/i.test(tech)),
    ).length;
    const funded = projects.filter((project) => Boolean(project.funding)).length;
    return [
      { value: total, label: "Documented Projects" },
      { value: research, label: "Research Collaborations" },
      { value: digitalBuilds, label: "Digital Builds" },
      { value: funded, label: "Funded Engagements" },
    ];
  })();
  return (
    <div className="page-template-career">
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
              data-testid={`card-project-${index}`}
            >
              <CareerEvidenceCard
                title={project.title}
                organization={project.description}
                location={project.technologies?.[0] ?? "Interdisciplinary"}
                period={project.period ?? "Ongoing"}
                roleLabel={project.role ?? "Project"}
                highlights={getProjectHighlights(project)}
                slides={getProjectSlides(project)}
                referenceUrl={project.url}
                referenceLabel={project.url ? "View project" : undefined}
              />
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
        <StatsSection className="mt-10" stats={projectStats} />
      </motion.div>
    </div>
  );
}
