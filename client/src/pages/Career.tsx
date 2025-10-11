import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Globe, Building2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "English Teacher",
    organization: "Madrid Language Institute",
    location: "Madrid, Spain",
    period: "2022–Present",
    type: "teaching",
    responsibilities: [
      "Teaching Business English, Legal English, and General English",
      "Instructing students of all ages and proficiency levels",
      "Developing customized curriculum for professional development",
    ],
  },
  {
    id: 2,
    title: "University Lecturer",
    organization: "University of Ilam",
    location: "Ilam, Iran",
    period: "2017–2022",
    type: "teaching",
    responsibilities: [
      "ESP: Legal English, English for Philosophy and Engineering",
      "EGP: Mathematics, Mechanical Engineering, Law, Physical Education",
      "Curriculum development and assessment",
    ],
  },
  {
    id: 3,
    title: "Director, Language Academy",
    organization: "Ilam Language Academy",
    location: "Ilam, Iran",
    period: "2019–2021",
    type: "management",
    responsibilities: [
      "Oversight of course quality and academic standards",
      "Teacher collaboration and professional development",
      "Material development and curriculum innovation",
    ],
  },
  {
    id: 4,
    title: "Academic Director",
    organization: "Safir Danesh Language Institute",
    location: "Ilam, Iran",
    period: "2018–2019",
    type: "management",
    responsibilities: [
      "Academic scheduling and program management",
      "Teacher evaluation and mentoring",
      "Curriculum design and quality assurance",
    ],
  },
  {
    id: 5,
    title: "English Instructor",
    organization: "Iran Language Institute (ILI), Ilam Branch",
    location: "Ilam, Iran",
    period: "2019–2020",
    type: "teaching",
    responsibilities: [
      "General and specialized English instruction",
      "Student assessment and progress tracking",
    ],
  },
  {
    id: 6,
    title: "English Teacher",
    organization: "Private Language Schools",
    location: "Iran",
    period: "2009–2022",
    type: "teaching",
    responsibilities: [
      "Shokoh Pouyan, Marafet Novin, Ambassador, Iran Language Academy",
      "Teaching various levels from beginners to advanced",
      "Exam preparation (IELTS, TOEFL, etc.)",
    ],
  },
  {
    id: 7,
    title: "Simultaneous Interpreter",
    organization: "II International Conference on Desertification",
    location: "University of Ilam",
    period: "April 2018",
    type: "professional",
    responsibilities: [
      "Persian–English simultaneous interpretation",
      "Technical translation for environmental science presentations",
    ],
  },
];

const typeIcons = {
  teaching: GraduationCap,
  management: Building2,
  professional: Globe,
  research: Briefcase,
};

const typeColors = {
  teaching: "default",
  management: "secondary",
  professional: "outline",
  research: "default",
} as const;

export default function Career() {
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
            <Briefcase className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Career History</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Professional experience in teaching, management, and research
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {experiences.map((exp, index) => {
            const Icon = typeIcons[exp.type as keyof typeof typeIcons];
            
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="md:ml-20" data-testid={`card-experience-${index}`}>
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-6 h-8 w-8 rounded-full bg-primary border-4 border-background hidden md:flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </div>

                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="space-y-1">
                        <CardTitle className="text-xl" data-testid={`text-title-${index}`}>{exp.title}</CardTitle>
                        <p className="text-base font-medium text-primary" data-testid={`text-organization-${index}`}>{exp.organization}</p>
                      </div>
                      <Badge variant={typeColors[exp.type as keyof typeof typeColors]} className="w-fit" data-testid={`badge-type-${index}`}>
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span data-testid={`text-location-${index}`}>{exp.location}</span>
                      <span>•</span>
                      <span data-testid={`text-period-${index}`}>{exp.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2" data-testid={`text-responsibility-${index}-${idx}`}>
                          <span className="text-primary mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card data-testid="card-stat-years">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-primary" data-testid="text-stat-years">13+</p>
              <p className="text-sm text-muted-foreground">Years Teaching</p>
            </CardContent>
          </Card>
          <Card data-testid="card-stat-institutions">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-accent" data-testid="text-stat-institutions">5+</p>
              <p className="text-sm text-muted-foreground">Institutions</p>
            </CardContent>
          </Card>
          <Card data-testid="card-stat-leadership">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-ai-accent" data-testid="text-stat-leadership">2</p>
              <p className="text-sm text-muted-foreground">Leadership Roles</p>
            </CardContent>
          </Card>
          <Card data-testid="card-stat-countries">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-primary" data-testid="text-stat-countries">3</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
