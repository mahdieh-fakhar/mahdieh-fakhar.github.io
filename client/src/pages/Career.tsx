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
  startDate: string;
  endDate?: string;
};

const experiences: Experience[] = [
  {
    id: 9,
    title: "Graduate Translator & Interpreter (Digital Research Programs)",
    organization: "Spanish National Research Council (CSIC)",
    location: "Madrid, Spain",
    period: "Feb 3 2025 - Feb 2 2029",
    type: "professional",
    responsibilities: [
      "Full-time FC1 appointment within the CSIC Vice-Presidency for Technical Scientific Research funded by the EU Recovery and Resilience Facility",
      "Translate and interpret for research stakeholders while digitising programme management, integrating internal and external data sources, and sustaining the Momentum 240 ECTS deliverable stream",
      "Develop research databases and expert systems for tribunal configuration, expert identification, and prospective analysis of CSIC investigation fronts with strict confidentiality and anti-fraud compliance",
    ],
    startDate: "2025-02-03",
    endDate: "2029-02-02",
    evidence: {
      title: "CSIC full-time translation & interpretation contract (2025-2029)",
      description: "Spanish-language employment contract confirming full-time FC1 duties supporting CSIC digital research programmes.",
      ctaLabel: "View Contract",
      slides: [
        {
          src: "/Contents/Logo/CSIC.svg.png",
          alt: "CSIC translation and interpretation contract",
          caption: "Contract for FC1 graduate translation and interpretation services at CSIC Vice-Presidency for Technical Scientific Research (Madrid).",
          downloadName: "csic-contract-2025.png",
        },
      ],
    },
  },
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
    startDate: "2022-01-01",
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
    startDate: "2017-01-01",
    endDate: "2019-12-31",
    evidence: {
      title: "University of Ilam adjunct lecturer appointment",
      description: "Digitised teaching forms confirming adjunct lecturer duties across humanities and engineering faculties.",
      ctaLabel: "View Attachments",
      slides: [
        {
          src: "/images/career/ilam-university-logo.png",
          alt: "University of Ilam official logo",
          caption: "Official University of Ilam insignia for adjunct lecturer appointment.",
          downloadName: "ilam-university-logo.png",
        },
        {
          src: "/images/career/career-2025-1345-4.jpg",
          alt: "University of Ilam adjunct lecturer confirmation letter page 1",
          caption: "Teaching form confirming humanities and engineering teaching assignments.",
          downloadName: "career-2025-1345-4.jpg",
        },
        {
          src: "/images/career/career-2025-1345-5.jpg",
          alt: "University of Ilam adjunct lecturer confirmation letter page 2",
          caption: "Teaching hours and unit summary signed by university administration.",
          downloadName: "career-2025-1345-5.jpg",
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
    startDate: "2014-01-01",
    endDate: "2019-12-31",
    evidence: {
      title: "ILI instructor appointment & evaluation letters",
      description: "Official Ilam Branch letters confirming IELTS/TOEFL instruction quality and multi-branch assignments.",
      ctaLabel: "View Attachments",
      slides: [
        {
          src: "/images/career/career-2025-1345-6.jpg",
          alt: "ILI Ilam Branch instructor appointment letter page 1",
          caption: "Page 1 - Class schedule confirmation and branch stamps.",
          downloadName: "career-2025-1345-6.jpg",
        },
        {
          src: "/images/career/career-2025-1345-7.jpg",
          alt: "ILI instructor letter with exam preparation plan",
          caption: "Page 2 - TOEFL/IELTS preparation duties and signature.",
          downloadName: "career-2025-1345-7.jpg",
        },
        {
          src: "/images/career/career-2025-1345-8.jpg",
          alt: "ILI instructor evaluation notes page 3",
          caption: "Page 3 - Performance evaluation and branch accreditation.",
          downloadName: "career-2025-1345-8.jpg",
        },
        {
          src: "/images/career/career-2025-1345-9.jpg",
          alt: "ILI instructor schedule letter page 4",
          caption: "Page 4 - Class timing details and seal.",
          downloadName: "career-2025-1345-9.jpg",
        },
        {
          src: "/images/career/career-2025-1345-10.jpg",
          alt: "ILI instructor quality letter page 5",
          caption: "Page 5 - Final sign-off for Ilam Sister & Baradar centres.",
          downloadName: "career-2025-1345-10.jpg",
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
    startDate: "2014-07-07",
    endDate: "2018-12-23",
    evidence: {
      title: "IELI upper-intermediate appointment letter",
      description: "CamScanner-certified letter summarising IELI duties and compliance with ILI academic management.",
      ctaLabel: "View Attachments",
      slides: [
        {
          src: "/images/career/career-2025-1345-2.jpg",
          alt: "IELI upper-intermediate instructor confirmation letter",
          caption: "Official confirmation of upper-intermediate and exam prep classes",
          downloadName: "career-2025-1345-2.jpg",
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
    startDate: "2018-01-01",
    endDate: "2021-12-31",
    evidence: {
      title: "Safir Danesh Language Institute branding",
      description: "Official mark representing Safir Danesh leadership and curriculum oversight.",
      ctaLabel: "View Branding",
      slides: [
        {
          src: "/images/career/Safir.jpg",
          alt: "Safir Danesh leadership portrait",
          caption: "Portrait representing branch coordination at Safir Danesh Language Institute.",
          downloadName: "Safir.jpg",
        },
        {
          src: "/images/career/safir-academy-logo.jpg",
          alt: "Safir Danesh Language Institute logo",
          caption: "Safir Danesh Language Institute brand mark for Ilam branch coordination.",
          downloadName: "safir-academy-logo.jpg",
        },
      ],
    },
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
    startDate: "2012-01-01",
    endDate: "2014-12-31",
    evidence: {
      title: "Shokoh Pouyan head teacher confirmation",
      description: "Letter confirming curriculum design and teacher leadership responsibilities at Shokoh Pouyan.",
      ctaLabel: "View Attachments",
      slides: [
        {
          src: "/images/career/career-2025-1345-3.jpg",
          alt: "Shokoh Pouyan head teacher confirmation letter",
          caption: "Certification letter outlining course design and leadership duties.",
          downloadName: "career-2025-1345-3.jpg",
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
    startDate: "2010-10-01",
    endDate: "2012-12-31",
    evidence: {
      title: "Marefat Novin part-time instructor letter",
      description: "Certificate confirming communicative English duties and provincial compliance.",
      ctaLabel: "View Attachments",
      slides: [
        {
          src: "/images/career/career-2025-1345-1.jpg",
          alt: "Marefat Novin Language Academy part-time instructor confirmation",
          caption: "Letter validating part-time communicative English instruction.",
          downloadName: "career-2025-1345-1.jpg",
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
    startDate: "2018-04-01",
    endDate: "2018-04-01",
  },
];

function parseDateString(dateString: string): number {
  const timestamp = Date.parse(dateString);
  return Number.isNaN(timestamp) ? -Infinity : timestamp;
}

const sortedExperiences = [...experiences].sort((a, b) => {
  const endA = a.endDate ? parseDateString(a.endDate) : Number.POSITIVE_INFINITY;
  const endB = b.endDate ? parseDateString(b.endDate) : Number.POSITIVE_INFINITY;

  if (endA !== endB) {
    return endB - endA;
  }

  const startA = parseDateString(a.startDate);
  const startB = parseDateString(b.startDate);

  return startB - startA;
});

const careerStats = (() => {
  const totalRoles = experiences.length;
  const teachingRoles = experiences.filter((experience) => experience.type === "teaching").length;
  const evidenceBacked = experiences.filter((experience) => experience.evidence?.slides.length).length;
  const locations = new Set(
    experiences
      .map((experience) => experience.location.split(",").pop()?.trim())
      .filter(Boolean) as string[],
  ).size;

  return [
    { value: totalRoles, label: "Documented Roles" },
    { value: teachingRoles, label: "Teaching Posts" },
    { value: evidenceBacked, label: "Evidence-backed Records" },
    { value: locations, label: "Cities Worked" },
  ];
})();

const typeLabels: Record<ExperienceType, string> = {
  teaching: "Teaching",
  management: "Management",
  professional: "Professional",
  research: "Research",
};

const fallbackSlides: Slide[] = [{ src: "/images/logo-mfs.png", alt: "Evidence placeholder" }];

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
      </div>
    </div>
  );
}
