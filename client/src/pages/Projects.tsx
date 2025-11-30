import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { CareerEvidenceCard, type Slide } from "@/components/career/CareerEvidenceCard";

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
    description: "Institute for Research in Humanities and Heritage, UNED Alcaniz",
    role: "Research Collaborator",
    period: "2021-2023",
    technologies: ["Research Methodology", "Heritage Studies", "Digital Humanities"],
    imageUrl: "/images/memberships/IHUPA.png",
  },
  {
    id: 2,
    title: "AGORA Project",
    description: "Technological and methodological innovations in language teaching in rural areas. Spanish Ministry of Science and Innovation funded project (Ref. PID2021-128182OB-100)",
    role: "Research Team Member",
    period: "2022-2025",
    technologies: ["Educational Technology", "Language Teaching", "Rural Education", "Innovation"],
    directors: "Prof. Elena Barcena & Prof. Timothy Read",
  },
  {
    id: 3,
    title: "Web Design for IHUPA",
    description: "Designed and developed the official website for the Institute for Research in Humanities and Heritage (IHUPA) at UNED Alcaniz",
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
    period: "2024-2025",
    technologies: ["React", "TypeScript", "AI Integration", "OpenAI Vision", "Tailwind CSS"],
    url: "https://mahdieh-fakhar.github.io/",
  },
  {
    id: 5,
    title: "6-Month Research Fellowship",
    description: "Ministry of Science, Research, and Technology of Iran research fellowship hosted by UNED (ATLAS Research Group), Madrid. Focus on language teaching and digital competence research.",
    role: "Research Fellow",
    period: "March-November 2022",
    technologies: ["Research", "Data Analysis", "Academic Writing"],
    funding: "EUR 4,000",
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
      </motion.div>
    </div>
  );
}
