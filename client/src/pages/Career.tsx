import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Globe, Building2 } from "lucide-react";
import { CareerEvidenceCard, type Slide } from "@/components/career/CareerEvidenceCard";

type ExperienceType = "teaching" | "management" | "professional" | "research";

type EvidenceSlide = {
  src: string;
  alt: string;
  caption?: string;
  downloadName?: string;
};

type EvidenceGallery = {
  title: string;
  description?: string;
  ctaLabel?: string;
  slides: EvidenceSlide[];
};

type Experience = {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: ExperienceType;
  responsibilities: string[];
  evidence?: EvidenceGallery;
};

const experiences: Experience[] = [
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
    evidence: {
      title: "University of Ilam adjunct lecturer appointment",
      description: "Digitised teaching forms confirming adjunct lecturer duties across humanities and engineering faculties.",
      ctaLabel: "View Attachments",
      slides: [
        {
          src: "/images/career/adjunct-ilam-01.jpg",
          alt: "University of Ilam adjunct lecturer confirmation letter page 1",
          caption: "Page 1 â€“ Faculty appointment confirmation with department signatures.",
          downloadName: "adjunct-ilam-01.jpg",
        },
        {
          src: "/images/career/adjunct-ilam-02.jpg",
          alt: "University of Ilam adjunct lecturer confirmation letter page 2",
          caption: "Page 2 â€“ Teaching load summary and official stamp.",
          downloadName: "adjunct-ilam-02.jpg",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Lead IELTS & TOEFL Instructor",
    organization: "Iranian Language Institute (ILI) - Ilam Branch",
    location: "Ilam, Iran",
    period: "2014-2019",
    type: "teaching",
    responsibilities: [
      "Ran upper-intermediate, advanced, TOEFL, and IELTS courses verified by Iranian Language Institute attestations",
      "Balanced multi-branch timetables (Ilam Sister and Baradar centres) with up to five concurrent classes per semester",
      "Implemented exam-readiness diagnostics and personalised progress reviews for adult and youth cohorts",
    ],
    evidence: {
      title: "ILI instructor appointment & evaluation letters",
      description: "Official Ilam Branch letters confirming IELTS/TOEFL instruction quality and multi-branch assignments.",
      ctaLabel: "View Attachments",
      slides: [
        {
          src: "/images/career/ili-instructor-01.jpg",
          alt: "ILI Ilam Branch instructor appointment letter page 1",
          caption: "Page 1 - Class schedule confirmation and branch stamps.",
          downloadName: "ili-instructor-01.jpg",
        },
        {
          src: "/images/career/ili-instructor-02.jpg",
          alt: "ILI instructor letter with exam preparation plan",
          caption: "Page 2 - TOEFL/IELTS preparation duties and signature.",
          downloadName: "ili-instructor-02.jpg",
        },
        {
          src: "/images/career/ili-instructor-03.jpg",
          alt: "ILI instructor evaluation notes page 3",
          caption: "Page 3 - Performance evaluation and branch accreditation.",
          downloadName: "ili-instructor-03.jpg",
        },
        {
          src: "/images/career/ili-instructor-04.jpg",
          alt: "ILI instructor schedule letter page 4",
          caption: "Page 4 - Class timing details and seal.",
          downloadName: "ili-instructor-04.jpg",
        },
        {
          src: "/images/career/ili-instructor-05.jpg",
          alt: "ILI instructor quality letter page 5",
          caption: "Page 5 - Final sign-off for Ilam Sister & Baradar centres.",
          downloadName: "ili-instructor-05.jpg",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Upper-Intermediate & Exam Prep Instructor",
    organization: "Iran English Language Institute (IELI)",
    location: "Ilam, Iran",
    period: "Jul 2014 - Dec 2018",
    type: "teaching",
    responsibilities: [
      "Letter 217 signed by Dr. Reza Khani confirms delivery of upper-intermediate, advanced, TOEFL, and IELTS cohorts",
      "Balanced PhD research in English Language Teaching with intensive high-stakes exam preparation classes",
      "Supported learners continuously from 2014/07/07 through 2018/12/23 under IELI academic management",
    ],
    evidence: {
      title: "IELI upper-intermediate appointment letter",
      description: "CamScanner-certified letter summarising IELI duties and compliance with ILI academic management.",
      ctaLabel: "View Attachments",
      slides: [
        {
          src: "/images/career/ieli-exam-01.jpg",
          alt: "IELI upper-intermediate instructor confirmation letter",
          caption: "Official confirmation of upper-intermediate and exam prep classes",
          downloadName: "ieli-exam-01.jpg",
        },
      ],
    },
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
    evidence: {
      title: "Shokoh Pouyan head teacher confirmation",
      description: "Letter confirming curriculum design and teacher leadership responsibilities at Shokoh Pouyan.",
      ctaLabel: "View Attachments",
      slides: [
        {
          src: "/images/career/head-teacher-shokoh.jpg",
          alt: "Shokoh Pouyan head teacher confirmation letter",
          caption: "Certification letter outlining course design and leadership duties.",
          downloadName: "head-teacher-shokoh.jpg",
        },
      ],
    },
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
    evidence: {
      title: "Marefat Novin part-time instructor letter",
      description: "Certificate confirming communicative English duties and provincial compliance.",
      ctaLabel: "View Attachments",
      slides: [
        {
          src: "/images/career/part-time-marefat.jpg",
          alt: "Marefat Novin Language Academy part-time instructor confirmation",
          caption: "Letter validating part-time communicative English instruction.",
          downloadName: "part-time-marefat.jpg",
        },
      ],
    },
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

function getPeriodSortValue(period: string): number {
  const normalized = period.toLowerCase();
  const years = Array.from(period.matchAll(/\d{4}/g)).map((match) => Number(match[0]));
  const latestYear = years.length ? Math.max(...years) : 0;
  const presentBoost = normalized.includes("present") ? 1000 : 0;
  return latestYear + presentBoost;
}

const sortedExperiences = [...experiences].sort(
  (a, b) => getPeriodSortValue(b.period) - getPeriodSortValue(a.period),
);

const typeLabels: Record<ExperienceType, string> = {
  teaching: "Teaching",
  management: "Management",
  professional: "Professional",
  research: "Research",
};

const fallbackSlides: Slide[] = [{ src: "/images/profile.jpg", alt: "Evidence placeholder" }];

const experienceSlides = (experience: Experience): Slide[] => {
  if (experience.evidence?.slides?.length) {
    return experience.evidence.slides.map((slide) => ({
      src: slide.src,
      alt: slide.alt,
      caption: slide.caption,
      downloadName: slide.downloadName,
    }));
  }
  return fallbackSlides;
};

export default function Career() {
  return (
    <div className="page-template-career">
      <div className="stack-gap-md">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Career History</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Professional experience anchored in classroom excellence, academic leadership, and conference engagement
          </p>
        </div>

        <div className="space-y-6">
          {sortedExperiences.map((experience) => (
            <CareerEvidenceCard
              key={experience.id}
              title={experience.title}
              organization={experience.organization}
              location={experience.location}
              period={experience.period}
              roleLabel={typeLabels[experience.type]}
              highlights={experience.responsibilities}
              slides={experienceSlides(experience)}
            />
          ))}
        </div>

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
      </div>
    </div>
  );
}


