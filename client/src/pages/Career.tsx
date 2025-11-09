import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Globe, Building2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Senior English Facilitator",
    organization: "Madrid Language Institute",
    location: "Madrid, Spain",
    period: "2022-Present",
    type: "teaching",
    responsibilities: [
      "Deliver business, legal, and general English programmes for adult learners and corporate teams",
      "Design bespoke micro-curricula for multilingual professionals relocating across Europe",
      "Mentor instructors on exam-preparation strategies and AI-assisted classroom tooling",
    ],
  },
  {
    id: 2,
    title: "Adjunct Lecturer, English Language & Literature",
    organization: "University of Ilam",
    location: "Ilam, Iran",
    period: "2017-2019",
    type: "teaching",
    responsibilities: [
      "Invited lecturer for bachelor cohorts across humanities and engineering faculties (per Ilam University teaching forms)",
      "Delivered general English and ESP modules such as Legal English and English for Mechanical Engineering",
      "Coordinated assessment rubrics and supervised undergraduate research projects for departmental boards",
    ],
  },
  {
    id: 3,
    title: "Lead IELTS & TOEFL Instructor",
    organization: "Iran Language Institute (ILI) â€“ Ilam Centers",
    location: "Ilam, Iran",
    period: "2014-2019",
    type: "teaching",
    responsibilities: [
      "Ran upper-intermediate, advanced, TOEFL, and IELTS courses verified by Iranian Language Institute attestations",
      "Balanced multi-branch timetables (Ilam Sister and Baradar centres) with up to five concurrent classes per semester",
      "Implemented exam-readiness diagnostics and personalised progress reviews for adult and youth cohorts",
    ],
  },
  {
    id: 4,
    title: "Upper-Intermediate & Exam Prep Instructor",
    organization: "Iranian Language Institute (ILI)",
    location: "Ilam, Iran",
    period: "Jul 2014 - Dec 2018",
    type: "teaching",
    responsibilities: [
      "Letter 217 signed by Dr. Reza Khani confirms delivery of upper-intermediate, advanced, TOEFL, and IELTS cohorts",
      "Balanced PhD research in English Language Teaching with intensive high-stakes exam preparation classes",
      "Supported learners continuously from 2014/07/07 through 2018/12/23 under ILI academic management",
    ],
  },
  {
    id: 5,
    title: "Academic Director & Branch Coordinator",
    organization: "Ilam Language Academy & Safir Danesh Language Institute",
    location: "Ilam, Iran",
    period: "2018-2021",
    type: "management",
    responsibilities: [
      "Led academic scheduling, teacher onboarding, and quality assurance across two private institutes",
      "Piloted curriculum refresh projects emphasising communicative methodology and digital literacy",
      "Facilitated continuous professional development and peer observations for more than 15 instructors",
    ],
  },
  {
    id: 6,
    title: "Head Teacher & Course Designer",
    organization: "Shokoh Pouyan (Longman) Language Academy",
    location: "Shahreza, Iran",
    period: "2012-2014",
    type: "teaching",
    responsibilities: [
      "Delivered elementary to upper-intermediate programmes documented in Shokoh Pouyan certification letters",
      "Produced placement pathways aligned with Longman curricular updates and learner feedback",
      "Maintained academic performance dossiers for submission to partner higher-education centres",
    ],
  },
  {
    id: 7,
    title: "Part-time Instructor",
    organization: "Marefat Novin Language Academy",
    location: "Shahreza, Iran",
    period: "2010-2012",
    type: "teaching",
    responsibilities: [
      "Taught communicative English classes since October 2010 with consistently positive quality reports",
      "Collaborated with the Isfahan Provincial Education Organisation on compliance and reporting",
      "Launched personalised learning plans for adolescents preparing for high-stakes examinations",
    ],
  },
  {
    id: 8,
    title: "Conference Simultaneous Interpreter",
    organization: "2nd International Conference on Desertification",
    location: "University of Ilam",
    period: "April 2018",
    type: "professional",
    responsibilities: [
      "Provided Persian-English simultaneous interpreting for scientific panels and visiting delegations",
      "Curated terminology briefs for keynote researchers across environmental science disciplines",
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
            <Briefcase className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Career History</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Professional experience anchored in classroom excellence, academic leadership, and conference engagement
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 hidden w-0.5 bg-border md:block" />

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
                  <div className="absolute -left-12 top-6 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary md:flex">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </div>

                  <CardHeader>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-xl" data-testid={`text-title-${index}`}>
                          {exp.title}
                        </CardTitle>
                        <p
                          className="text-base font-medium text-primary"
                          data-testid={`text-organization-${index}`}
                        >
                          {exp.organization}
                        </p>
                      </div>
                      <Badge
                        variant={typeColors[exp.type as keyof typeof typeColors]}
                        className="w-fit"
                        data-testid={`badge-type-${index}`}
                      >
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span data-testid={`text-location-${index}`}>{exp.location}</span>
                      <span aria-hidden="true" className="text-muted-foreground">|</span>
                      <span data-testid={`text-period-${index}`}>{exp.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} data-testid={`text-responsibility-${index}-${idx}`}>
                          {resp}
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
        <div className="auto-grid md:auto-grid-lg">
          <Card data-testid="card-stat-years">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-primary" data-testid="text-stat-years">
                15+
              </p>
              <p className="text-sm text-muted-foreground">Years Teaching</p>
            </CardContent>
          </Card>
          <Card data-testid="card-stat-institutions">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-accent" data-testid="text-stat-institutions">
                8+
              </p>
              <p className="text-sm text-muted-foreground">Institutions</p>
            </CardContent>
          </Card>
          <Card data-testid="card-stat-leadership">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-ai-accent" data-testid="text-stat-leadership">
                2
              </p>
              <p className="text-sm text-muted-foreground">Leadership Roles</p>
            </CardContent>
          </Card>
          <Card data-testid="card-stat-countries">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-primary" data-testid="text-stat-countries">
                2
              </p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
