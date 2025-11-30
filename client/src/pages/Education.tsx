import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CareerEvidenceCard, type Slide } from "@/components/career/CareerEvidenceCard";
import { StatsSection } from "@/components/StatsSection";

type EducationCategory = "Academic" | "Courses" | "Workshops";

type EducationRecord = {
  id: string;
  category: EducationCategory;
  title: string;
  institution: string;
  location?: string;
  period?: string;
  status?: string;
  gpa?: string | null;
  distinction?: string | null;
  thesis?: string | null;
  thesisGrade?: string | null;
  highlights?: string[];
  description?: string;
  metadata?: Array<{ label: string; value: string }>;
  url?: string;
  urlLabel?: string;
  slides?: Slide[];
  roleLabel?: string;
};

type EducationNavItem = {
  label: string;
  slug: string;
  filter: EducationCategory | null;
  description: string;
};

type EducationRouteParams = {
  category?: string;
};

type EducationProps = {
  params?: EducationRouteParams;
};

const academicPrograms: EducationRecord[] = [
  {
    id: "academic-ma-ict-language-processing-2022",
    category: "Academic",
    title: "Master of Arts in ICT for Language Teaching and Language Processing",
    institution: "National Distance Education University (UNED)",
    location: "Madrid, Community of Madrid, Spain",
    period: "Jul 2022 - Jun 2024",
    status: "Graduated",
    metadata: [
      {
        label: "Program",
        value: "Information and Communication Technologies in Language Teaching and Language Processing",
      },
      { label: "Mode", value: "Formal, online" },
      { label: "Institution type", value: "Public distance university" },
    ],
  },
  {
    id: "academic-ma-applied-linguistics-2024",
    category: "Academic",
    title: "Master of Arts in Applied Linguistics",
    institution: "National Distance Education University (UNED)",
    location: "Madrid, Community of Madrid, Spain",
    period: "Oct 2024 - Present",
    status: "In progress",
    metadata: [
      { label: "Program", value: "Applied Linguistics" },
      { label: "Mode", value: "Formal, online" },
      { label: "Institution type", value: "Public distance university" },
    ],
  },
  {
    id: "academic-ma-big-data-2025",
    category: "Academic",
    title: "Master of Arts in Big Data and Data Science",
    institution: "International University of La Rioja",
    location: "Madrid, Community of Madrid, Spain",
    period: "Jan 2025 - Dec 2025 (expected)",
    status: "In progress",
    metadata: [
      { label: "Program", value: "Big Data and Data Science" },
      { label: "Mode", value: "Continuing education, online" },
      { label: "Institution type", value: "Private university" },
    ],
  },
  {
    id: "academic-ma-teaching-english-2009",
    category: "Academic",
    title: "Master of Arts in Teaching English / Teaching English as a Foreign Language",
    institution: "University of Ilam",
    location: "Ilam, Ilam Province, Iran",
    period: "Sep 2009 - Jul 2013",
    status: "Graduated",
    metadata: [
      { label: "Program", value: "Teaching English / Teaching English as a Foreign Language" },
      { label: "Mode", value: "Formal, in person and online" },
      { label: "Institution type", value: "Public university" },
    ],
  },
  {
    id: "academic-ba-english-translation-2005",
    category: "Academic",
    title: "Bachelor of Arts in English Translation",
    institution: "Payame Noor University, Shahreza",
    location: "Shahreza, Isfahan, Iran",
    period: "Sep 2005 - Jun 2009",
    status: "Graduated",
    metadata: [
      { label: "Program", value: "English Translation" },
      { label: "Mode", value: "Formal, in person" },
      { label: "Institution type", value: "Public university" },
    ],
  },
];
const coursePrograms: EducationRecord[] = [
  {
    id: "course-aws-cloud-quest",
    category: "Courses",
    title: "AWS Cloud Quest: Cloud Practitioner",
    institution: "Amazon Web Services (AWS)",
    period: "Issued Oct 2025",
    status: "Professional Certificate",
    roleLabel: "Cloud Credential",
    highlights: [
      "Validated cloud fluency across AWS compute, networking, storage, and security services.",
      "Completed scenario-based labs covering governance, architecture patterns, and automation workflows.",
    ],
    metadata: [{ label: "Credential ID", value: "298b5e29-2f62-456b-b2f9-69419b0aa29d" }],
    url: "https://www.credly.com/badges/298b5e29-2f62-456b-b2f9-69419b0aa29d/public_url",
    urlLabel: "View digital credential",
    slides: [
      {
        src: "/images/badges/aws-cloudquest-badge.png",
        alt: "AWS Cloud Quest official badge",
        caption: "Gamified AWS Cloud Quest badge awarded upon completion",
        downloadName: "aws-cloudquest-badge.png",
      },
      {
        src: "/images/badges/aws-cloudquest-certificate.jpg",
        alt: "Certificate of participation in the AWS CloudQuest Tournament at CSIC",
        caption: "Tournament completion certificate issued for AWS CloudQuest at CSIC",
        downloadName: "aws-cloudquest-certificate.jpg",
      },
    ],
  },
  {
    id: "course-nasle-farda-toefl-2010",
    category: "Courses",
    title: "TOEFL Certificate Program",
    institution: "Nasle Farda English Language Center",
    location: "Shahreza, Isfahan, Iran",
    period: "Mar 2010",
    status: "Language Certificate",
    roleLabel: "TOEFL Credential",
    highlights: [
      "Completed an intensive TOEFL-focused curriculum emphasizing academic reading, listening, writing, and speaking.",
      "Demonstrated readiness for international standardized testing with instructor-evaluated practice exams.",
    ],
    metadata: [
      { label: "Program Level", value: "TOEFL preparation, advanced track" },
      { label: "Delivery", value: "In-person classroom sessions" },
    ],
    slides: [
      {
        src: "/images/education/courses/nasle-farda-toefl-2010.jpg",
        alt: "Nasle Farda TOEFL certificate (March 2010)",
        caption: "Official completion certificate issued by Nasle Farda English Language Center",
        downloadName: "nasle-farda-toefl-2010.jpg",
      },
    ],
  },
  {
    id: "course-csic-ia-generativa-2025",
    category: "Courses",
    title: "Generative AI as an Ally at Work",
    institution: "Spanish National Research Council (CSIC)",
    location: "Madrid, Community of Madrid, Spain",
    period: "Apr 2025 - May 2025",
    status: "Professional Certificate",
    roleLabel: "1 ECTS Online Course",
    highlights: [
      "Explored advanced prompts, copilots, and GenAI tooling for research-quality translation, analysis, and automation.",
      "Produced guided exercises applying generative AI to scientific communication, data storytelling, and classroom practice.",
    ],
    metadata: [
      { label: "Duration", value: "25 hours (1 ECTS)" },
      { label: "Delivery Platform", value: "CSIC iAprende virtual campus" },
    ],
    slides: [
      {
        src: "/images/education/courses/csic-ia-generativa-1.jpg",
        alt: "Generative AI certificate issued by CSIC",
        caption: "Signed completion certificate from the CSIC Vice Presidency for Scientific and Technical Research",
        downloadName: "csic-ia-generativa-1.jpg",
      },
      {
        src: "/images/education/courses/csic-ia-generativa-2.jpg",
        alt: "Generative AI course syllabus from CSIC",
        caption: "Program objectives outlining generative AI topics reviewed throughout the course",
        downloadName: "csic-ia-generativa-2.jpg",
      },
    ],
  },
  {
    id: "course-csic-estadistica-2025",
    category: "Courses",
    title: "Advanced Applied Statistics with IBM SPSS Statistics",
    institution: "Spanish National Research Council (CSIC)",
    location: "Madrid, Community of Madrid, Spain",
    period: "Sep 2025",
    status: "In-person Training",
    roleLabel: "CSIC Professional Course",
    highlights: [
      "Completed multivariate analysis labs covering experimental design, mixed models, and classification methods.",
      "Worked through IBM SPSS Statistics workflows for advanced inference inside CSIC's Human Resources training plan.",
    ],
    metadata: [
      { label: "Program Code", value: "In-person course 2025DCEAAQ" },
      { label: "Duration", value: "20 contact hours" },
    ],
    slides: [
      {
        src: "/images/education/courses/csic-estadistica-aplicada-1.jpg",
        alt: "Advanced statistics certificate issued by CSIC",
        caption: "Official certificate confirming completion of the advanced applied statistics curriculum",
        downloadName: "csic-estadistica-aplicada-1.jpg",
      },
      {
        src: "/images/education/courses/csic-estadistica-aplicada-2.jpg",
        alt: "Advanced statistics certificate syllabus overview",
        caption: "Program modules covering both theoretical and SPSS-based practice sessions",
        downloadName: "csic-estadistica-aplicada-2.jpg",
      },
    ],
  },
  {
    id: "course-csic-machine-learning-2025",
    category: "Courses",
    title: "Machine Learning for Scientific Research: Classification and Regression Trees",
    institution: "Friends Society of the National Museum of Natural Sciences (CSIC)",
    location: "Madrid, Community of Madrid, Spain",
    period: "Jun 9-19, 2025",
    status: "Specialized Course",
    roleLabel: "Advanced Analytics Track",
    highlights: [
      "Learned supervised modeling techniques tailored to museum-led research data sets.",
      "Implemented classification and regression trees to accelerate scientific discovery workflows.",
    ],
    metadata: [
      { label: "Instruction Hours", value: "24 hours" },
      { label: "Instructor", value: "Prof. Manuel Mendoza Garcia" },
    ],
    slides: [
      {
        src: "/images/education/courses/csic-machine-learning-2025.jpg",
        alt: "Machine learning course certificate issued June 20 2025",
        caption: "Completion statement from the National Museum of Natural Sciences",
        downloadName: "csic-machine-learning-2025.jpg",
      },
    ],
  },
  {
    id: "course-csic-r-intro-2025",
    category: "Courses",
    title: "Introduction to R and RStudio for Data Analysis in Scientific Research",
    institution: "Friends Society of the National Museum of Natural Sciences (CSIC)",
    location: "Madrid, Community of Madrid, Spain",
    period: "May 19-29, 2025",
    status: "Specialized Course",
    roleLabel: "Data Science Foundations",
    highlights: [
      "Covered RStudio workflows for cleaning, transforming, and visualizing environmental research data.",
      "Practiced reproducible scripting habits to support CSIC-led investigations.",
    ],
    metadata: [
      { label: "Instruction Hours", value: "12 hours" },
      { label: "Facilitators", value: "Dr. Shaun Nielsen and Dr. Cristina Diez Vives" },
    ],
    slides: [
      {
        src: "/images/education/courses/csic-r-intro-2025.jpg",
        alt: "Certificate for the Introduction to R and RStudio course",
        caption: "Credential endorsed by the National Museum of Natural Sciences faculty",
        downloadName: "csic-r-intro-2025.jpg",
      },
    ],
  },
  {
    id: "course-csic-excel-advanced-2025",
    category: "Courses",
    title: "Excel 2016 Avanzado (Online)",
    institution: "Spanish National Research Council (CSIC)",
    location: "Madrid, Community of Madrid, Spain",
    period: "Sep 22 - Oct 24, 2025",
    status: "Professional Certificate",
    roleLabel: "Online Training (40 hours)",
    highlights: [
      "Completed the CSIC human resources training plan on advanced Excel workflows.",
      "Practiced secure sharing, advanced calculation functions, and productivity-focused tooling in Excel 2016.",
    ],
    metadata: [
      { label: "Duration", value: "40 hours" },
      { label: "Delivery", value: "Online, CSIC training plan" },
    ],
    slides: [
      {
        src: "/images/education/courses/csic-excel-advanced-2025-1.jpg",
        alt: "CSIC Excel avanzado online certificate page 1",
        caption: "Completion certificate for the CSIC Excel 2016 advanced online course",
        downloadName: "csic-excel-advanced-2025-1.jpg",
      },
      {
        src: "/images/education/courses/csic-excel-advanced-2025-2.jpg",
        alt: "CSIC Excel avanzado online syllabus page 2",
        caption: "Program topics covering advanced functions, security, and best practices in Excel 2016",
        downloadName: "csic-excel-advanced-2025-2.jpg",
      },
    ],
  },
];

const workshopPrograms: EducationRecord[] = [
  {
    id: "workshop-csic-momentum-session-2025",
    category: "Workshops",
    title: "Momentum CSIC: Digital Talent Session",
    institution: "Spanish National Research Council (CSIC)",
    location: "Madrid, Community of Madrid, Spain",
    period: "Apr 7, 2025",
    status: "Workshop Attendance",
    highlights: [
      "Participated in the Momentum CSIC individualized training plan focused on digital talent development.",
      "Explored cyber security practices, EOSC infrastructure, and PTI Digital Science programs with CSIC leadership.",
    ],
    metadata: [
      { label: "Duration", value: "7 hours, in person" },
      { label: "Program", value: "Plan Formativo Individualizado (PFI)" },
    ],
    slides: [
      {
        src: "/images/workshops/momentum-session-2025-1.jpg",
        alt: "Momentum CSIC participation certificate page 1",
        caption: "Certificate of participation issued by the CSIC Vice Presidency for Scientific and Technical Research",
        downloadName: "momentum-session-2025-1.jpg",
      },
      {
        src: "/images/workshops/momentum-session-2025-2.jpg",
        alt: "Momentum CSIC session agenda",
        caption: "Agenda covering cyber security, EOSC infrastructure, and PTI Digital Science initiatives",
        downloadName: "momentum-session-2025-2.jpg",
      },
    ],
  },
  {
    id: "workshop-csic-digital-labs-2025",
    category: "Workshops",
    title: "Momentum CSIC: Digital Labs Immersion",
    institution: "Spanish National Research Council (CSIC)",
    location: "Madrid, Community of Madrid, Spain",
    period: "Apr 7, 2025",
    status: "Workshop Attendance",
    highlights: [
      "Completed Momentum CSIC labs focused on digital transformation for research staff.",
      "Documented key takeaways related to resilience-building and talent acceleration within CSIC.",
    ],
    metadata: [
      { label: "Duration", value: "7 hours" },
      { label: "Format", value: "Momentum CSIC Digital Talent Program" },
    ],
    slides: [
      {
        src: "/images/workshops/momentum-digital-labs-2025-1.jpg",
        alt: "Momentum digital labs certificate page 1",
        caption: "Participation report summarizing the digital labs engagement at CSIC",
        downloadName: "momentum-digital-labs-2025-1.jpg",
      },
      {
        src: "/images/workshops/momentum-digital-labs-2025-2.jpg",
        alt: "Momentum digital labs content overview",
        caption: "Detailed agenda featuring program introduction, cyber security, and EOSC infrastructures",
        downloadName: "momentum-digital-labs-2025-2.jpg",
      },
    ],
  },
  {
    id: "workshop-cam-spss-2015",
    category: "Workshops",
    title: "SPSS Training Workshop",
    institution: "Ilam University - Student Scientific Association",
    location: "Ilam, Iran",
    period: "Dec 3, 2014",
    status: "Workshop Completion",
    highlights: [
      "Completed an eight-hour SPSS practicum delivered by the Jangal Student Scientific Association support committee.",
      "Developed advanced statistical analysis habits for academic research reporting.",
    ],
    metadata: [
      { label: "Duration", value: "8 hours" },
      { label: "Association", value: "Jangal Student Scientific Association" },
    ],
    slides: [
      {
        src: "/images/workshops/cam-2025-1401-1.jpg",
        alt: "SPSS training workshop certificate",
        caption: "Official certificate of participation confirming completion of SPSS training",
        downloadName: "cam-2025-1401-1.jpg",
      },
    ],
  },
  {
    id: "workshop-cam-entrepreneurship-2015",
    category: "Workshops",
    title: "Principles of Entrepreneurship",
    institution: "Elite Foundation of Ilam Province",
    location: "Ilam, Iran",
    period: "Nov 15, 2015",
    status: "Workshop Attendance",
    highlights: [
      "Attended an entrepreneurship fundamentals workshop dedicated to elite students.",
      "Explored pathways for launching new ventures supported by provincial innovation grants.",
    ],
    slides: [
      {
        src: "/images/workshops/cam-2025-1401-2.jpg",
        alt: "Certificate for principles of entrepreneurship workshop",
        caption: "Certificate confirming workshop attendance at the Elite Foundation of Ilam Province",
        downloadName: "cam-2025-1401-2.jpg",
      },
    ],
  },
  {
    id: "workshop-cam-reading-2015",
    category: "Workshops",
    title: "Institutionalizing Books and Reading",
    institution: "Elite Foundation of Ilam Province",
    location: "Ilam, Iran",
    period: "Dec 10, 2015",
    status: "Workshop Attendance",
    highlights: [
      "Learned strategies for cultivating sustained reading habits across university cohorts.",
      "Examined community engagement tactics for library programming and student outreach.",
    ],
    slides: [
      {
        src: "/images/workshops/cam-2025-1401-3.jpg",
        alt: "Workshop certificate on books and reading",
        caption: "Official Elite Foundation certificate detailing reading promotion methodologies",
        downloadName: "cam-2025-1401-3.jpg",
      },
    ],
  },
  {
    id: "workshop-cam-ethics-2016",
    category: "Workshops",
    title: "Professional Ethics in Research and the University",
    institution: "University of Ilam / Elite Foundation",
    location: "Ilam, Iran",
    period: "Nov 25, 2016",
    status: "Workshop Attendance",
    highlights: [
      "Discussed ethical conduct frameworks for academic research and campus leadership.",
      "Reviewed case studies on safeguarding academic integrity in collaborative projects.",
    ],
    slides: [
      {
        src: "/images/workshops/cam-2025-1401-4.jpg",
        alt: "Professional ethics workshop certificate",
        caption: "Certificate issued jointly by University of Ilam and Elite Foundation",
        downloadName: "cam-2025-1401-4.jpg",
      },
    ],
  },
  {
    id: "workshop-tellsi-pragmatics-2015",
    category: "Workshops",
    title: "Instructional Pragmatics: Teaching Students to Use Language Appropriately",
    institution: "13th International TELLSI Conference",
    location: "Lorestan University, Khorramabad, Iran",
    period: "Nov 17, 2015",
    status: "Workshop Attendance",
    highlights: [
      "Explored instructional pragmatics frameworks guided by Dr. Zohreh Eslami Rasekh and Dr. Noriko Ishihara.",
      "Studied practical classroom interventions to strengthen pragmatic competence among EFL learners.",
    ],
    slides: [
      {
        src: "/images/workshops/telli-2015-1.jpg",
        alt: "TELLSI workshop certificate on instructional pragmatics",
        caption: "Certificate verifying participation in TELLSI 13 instructional pragmatics workshop",
        downloadName: "telli-2015-1.jpg",
      },
    ],
  },
  {
    id: "workshop-tellsi-critical-pedagogy-2015",
    category: "Workshops",
    title: "Critical Pedagogy in Second Language Learning",
    institution: "13th International TELLSI Conference",
    location: "Lorestan University, Khorramabad, Iran",
    period: "Nov 17, 2015",
    status: "Workshop Attendance",
    highlights: [
      "Examined critical pedagogy applications for EFL classrooms under Dr. Goudarz Alibakhshi and Dr. Mola Miri.",
      "Designed reflective teaching routines to surface learner agency and social justice topics.",
    ],
    slides: [
      {
        src: "/images/workshops/telli-2015-2.jpg",
        alt: "TELLSI workshop certificate on critical pedagogy",
        caption: "Certificate documenting engagement in TELLSI 13 critical pedagogy workshop",
        downloadName: "telli-2015-2.jpg",
      },
    ],
  },
  {
    id: "workshop-ldp-pragmatics-2019",
    category: "Workshops",
    title: "Valid Pragmatics Research: Theory and Data",
    institution: "5th International Conference on Language, Discourse and Pragmatics",
    location: "Ahvaz, Iran",
    period: "Jan 30 - Feb 1, 2019",
    status: "Workshop Presentation",
    highlights: [
      "Presented research practices for conducting pragmatic studies with robust theoretical frameworks.",
      "Shared methodological lessons with international attendees to strengthen publication outcomes.",
    ],
    slides: [
      {
        src: "/images/workshops/workshop-2019-01-1.jpg",
        alt: "Pragmatics research workshop certificate",
        caption: "Certificate issued during the 5th LDP conference in Ahvaz, Iran",
        downloadName: "workshop-2019-01-1.jpg",
      },
    ],
  },
  {
    id: "workshop-ldp-planning-2019",
    category: "Workshops",
    title: "Planning Research in Applied Linguistics",
    institution: "5th International Conference on Language, Discourse and Pragmatics",
    location: "Ahvaz, Iran",
    period: "Jan 30 - Feb 1, 2019",
    status: "Workshop Presentation",
    highlights: [
      "Led a session on planning research pipelines for applied linguistics dissertations and articles.",
      "Guided early-career scholars through template-based planning for multi-method projects.",
    ],
    slides: [
      {
        src: "/images/workshops/workshop-2019-01-2.jpg",
        alt: "Planning research workshop certificate",
        caption: "Official certificate validating workshop facilitation at the LDP conference",
        downloadName: "workshop-2019-01-2.jpg",
      },
    ],
  },
  {
    id: "workshop-eurokd-psychology-2019",
    category: "Workshops",
    title: "Developmental Psychology without Positivistic Pretensions",
    institution: "International Conference on Education, Psychology, and Behavioral Science (EUROKD)",
    location: "Istanbul, Turkey",
    period: "Oct 25, 2019",
    status: "Workshop Attendance",
    highlights: [
      "Discussed developmental psychology paradigms with Prof. Willem Koops from the University of Utrecht.",
      "Investigated qualitative approaches for studying psychosocial development in education.",
    ],
    slides: [
      {
        src: "/images/workshops/workshop-2019-10-1.jpg",
        alt: "Developmental psychology workshop certificate",
        caption: "Attendance certificate issued during the EUROKD conference in Istanbul",
        downloadName: "workshop-2019-10-1.jpg",
      },
    ],
  },
  {
    id: "workshop-eurokd-analytics-2019",
    category: "Workshops",
    title: "Learning Analytics in Higher Education: Issues and Considerations",
    institution: "International Conference on Education, Psychology, and Behavioral Science (EUROKD)",
    location: "Istanbul, Turkey",
    period: "Oct 25, 2019",
    status: "Workshop Attendance",
    highlights: [
      "Explored learning analytics implementation challenges with Dr. Bronwen Swinnerton from the University of Leeds.",
      "Reviewed ethical data practices for monitoring learner engagement within universities.",
    ],
    slides: [
      {
        src: "/images/workshops/workshop-2019-10-2.jpg",
        alt: "Learning analytics workshop certificate",
        caption: "Official EUROKD certificate acknowledging completion of the learning analytics workshop",
        downloadName: "workshop-2019-10-2.jpg",
      },
    ],
  },
];

const allRecords: EducationRecord[] = [
  ...academicPrograms,
  ...coursePrograms,
  ...workshopPrograms,
];

const navItems: EducationNavItem[] = [
  {
    label: "Overview",
    slug: "overview",
    filter: null,
    description: "Overview with links to Academic, Courses, and Workshops",
  },
  {
    label: "Academic",
    slug: "academic",
    filter: "Academic",
    description: "Degree programmes and research training",
  },
  {
    label: "Courses",
    slug: "courses",
    filter: "Courses",
    description: "Professional certificates and micro-credentials",
  },
  {
    label: "Workshops",
    slug: "workshops",
    filter: "Workshops",
    description: "Specialised workshops and masterclasses",
  },
];

const categoryLabels: Record<EducationCategory, string> = {
  Academic: "Academic Pathways",
  Courses: "Courses & Certifications",
  Workshops: "Workshops & Masterclasses",
};

const educationStats = [
  { value: academicPrograms.length, label: "Academic Programs" },
  { value: coursePrograms.length, label: "Courses & Certificates" },
  { value: workshopPrograms.length, label: "Workshops" },
  { value: academicPrograms.length + coursePrograms.length + workshopPrograms.length, label: "Total Records" },
];

const academicFallbackSlides: Slide[] = [];
const courseFallbackSlides: Slide[] = [{ src: "/images/profile.jpg", alt: "Course evidence placeholder" }];
const workshopFallbackSlides: Slide[] = [{ src: "/images/profile.jpg", alt: "Workshop evidence placeholder" }];

function getAcademicSlides(record: EducationRecord): Slide[] {
  if (record.slides?.length) {
    return record.slides;
  }

  return academicFallbackSlides;
}

function getCourseSlides(record: EducationRecord): Slide[] {
  if (record.slides?.length) {
    return record.slides;
  }

  return courseFallbackSlides.map((slide) => ({
    ...slide,
    alt: `${record.title} credential preview`,
  }));
}

function getWorkshopSlides(record: EducationRecord): Slide[] {
  if (record.slides?.length) {
    return record.slides;
  }

  return workshopFallbackSlides.map((slide) => ({
    ...slide,
    alt: `${record.title} workshop documentation`,
  }));
}

function getAcademicHighlights(record: EducationRecord): string[] {
  const highlights: string[] = [];

  if (record.description) {
    highlights.push(record.description);
  }

  if (record.highlights?.length) {
    highlights.push(...record.highlights);
  }

  const detailEntries = getRecordDetailEntries(record);
  if (detailEntries.length) {
    highlights.push(...detailEntries.map((entry) => `${entry.label}: ${entry.value}`));
  }

  if (!highlights.length) {
    highlights.push("Program highlights will be available soon.");
  }

  return highlights;
}

function getCourseHighlights(record: EducationRecord): string[] {
  const highlights: string[] = [];

  if (record.description) {
    highlights.push(record.description);
  }

  if (record.highlights?.length) {
    highlights.push(...record.highlights);
  }

  const detailEntries = getRecordDetailEntries(record);
  if (detailEntries.length) {
    highlights.push(...detailEntries.map((entry) => `${entry.label}: ${entry.value}`));
  }

  if (!highlights.length) {
    highlights.push("Course details will be documented soon.");
  }

  return highlights;
}

function getWorkshopHighlights(record: EducationRecord): string[] {
  const highlights: string[] = [];

  if (record.description) {
    highlights.push(record.description);
  }

  if (record.highlights?.length) {
    highlights.push(...record.highlights);
  }

  const detailEntries = getRecordDetailEntries(record);
  if (detailEntries.length) {
    highlights.push(...detailEntries.map((entry) => `${entry.label}: ${entry.value}`));
  }

  if (!highlights.length) {
    highlights.push("Workshop documentation will be shared soon.");
  }

  return highlights;
}

function getRecordDetailEntries(record: EducationRecord): Array<{ label: string; value: string }> {
  const entries: Array<{ label: string; value: string }> = [];

  if (record.status) {
    entries.push({ label: "Status", value: record.status });
  }

  if (record.gpa) {
    entries.push({ label: "GPA", value: record.gpa });
  }

  if (record.distinction) {
    entries.push({ label: "Distinction", value: record.distinction });
  }

  if (record.thesis) {
    entries.push({
      label: "Thesis",
      value: record.thesisGrade ? `${record.thesis} (Grade: ${record.thesisGrade})` : record.thesis,
    });
  }

  if (record.metadata?.length) {
    entries.push(...record.metadata);
  }

  return entries;
}

const MONTH_LOOKUP: Record<string, number> = {
  january: 1,
  jan: 1,
  february: 2,
  feb: 2,
  march: 3,
  mar: 3,
  april: 4,
  apr: 4,
  may: 5,
  june: 6,
  jun: 6,
  july: 7,
  jul: 7,
  august: 8,
  aug: 8,
  september: 9,
  sept: 9,
  sep: 9,
  october: 10,
  oct: 10,
  november: 11,
  nov: 11,
  december: 12,
  dec: 12,
};

function getSortValueFromPeriod(period?: string): number {
  if (!period) {
    return 0;
  }

  const normalized = period
    .toLowerCase()
    .replace(/\u2013|\u2014/g, "-")
    .replace(/\s+/g, " ");

  const present = normalized.includes("present") || normalized.includes("in progress");
  const yearMatches = Array.from(normalized.matchAll(/\d{4}/g));

  if (!yearMatches.length) {
    return present ? Number.MAX_SAFE_INTEGER : 0;
  }

  const monthRegex =
    /(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t|tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)/g;

  const candidateDates = yearMatches.map((match) => {
    const year = Number(match[0]);
    const yearIndex = match.index ?? normalized.length;
    const searchWindowStart = Math.max(0, yearIndex - 40);
    const window = normalized.slice(searchWindowStart, yearIndex);
    const monthMatch = Array.from(window.matchAll(monthRegex)).pop();
    const monthLabel = monthMatch?.[0];
    const month = monthLabel ? MONTH_LOOKUP[monthLabel] ?? 12 : 12;
    const between = monthMatch ? window.slice(monthMatch.index ?? 0) : window;
    const dayMatches = Array.from(between.matchAll(/\d{1,2}/g));
    const day = dayMatches.length ? Number(dayMatches.at(-1)?.[0]) : 28;
    return Date.UTC(year, month - 1, day);
  });

  const latest = Math.max(...candidateDates);
  return present ? latest + 60 * 60 * 24 * 365 * 1000 : latest;
}

const academicSummaryStats = (() => {
  const totalPrograms = academicPrograms.length;
  const inProgress = academicPrograms.filter((program) =>
    `${program.status ?? program.period ?? ""}`.toLowerCase().includes("progress"),
  ).length;
  const completed = academicPrograms.filter((program) =>
    `${program.status ?? ""}`.toLowerCase().includes("graduated"),
  ).length;
  const regions = new Set(
    academicPrograms
      .map((program) => program.location?.split(",").pop()?.trim())
      .filter(Boolean) as string[],
  ).size;

  return [
    { id: "programs", label: "Academic Programs", value: String(totalPrograms), accent: "text-primary" },
    { id: "progress", label: "In Progress", value: String(inProgress), accent: "text-accent" },
    { id: "completed", label: "Completed Degrees", value: String(completed), accent: "text-ai-accent" },
    { id: "regions", label: "Regions Studied", value: String(regions), accent: "text-primary" },
  ] as const;
})();

const courseSummaryStats = (() => {
  const totalCertificates = coursePrograms.length;
  const inProgress = coursePrograms.filter((course) =>
    `${course.status ?? course.period ?? ""}`.toLowerCase().includes("progress"),
  ).length;
  const issued = coursePrograms.filter((course) =>
    `${course.status ?? course.period ?? ""}`.toLowerCase().includes("issued"),
  ).length;
  const vendors = new Set(coursePrograms.map((course) => course.institution)).size;

  return [
    { id: "courses", label: "Specialist Courses", value: String(totalCertificates), accent: "text-primary" },
    { id: "issued", label: "Issued Certificates", value: String(issued), accent: "text-accent" },
    { id: "progress", label: "Active Tracks", value: String(inProgress), accent: "text-ai-accent" },
    { id: "vendors", label: "Issuing Providers", value: String(vendors), accent: "text-primary" },
  ] as const;
})();

export default function Education({ params }: EducationProps = {}) {
  const [location, setLocation] = useLocation();

  const categorySlug = params?.category ? params.category.toLowerCase() : "overview";

  useEffect(() => {
    const normalizedLocation = location.replace(/\/+$/, "");
    if (!params?.category && normalizedLocation !== "/education") {
      setLocation("/education", { replace: true });
    }
  }, [location, params?.category, setLocation]);

  useEffect(() => {
    if (params?.category === "all" || params?.category === "overview") {
      setLocation("/education", { replace: true });
    }
  }, [params?.category, setLocation]);

  const activeItem = navItems.find((item) => item.slug === categorySlug) ?? navItems[0];

  const filteredRecords =
    activeItem.filter === null ? [] : allRecords.filter((record) => record.category === activeItem.filter);

  const renderCards = (records: EducationRecord[]) => (
    <div className="stack-gap-md">
      {records.map((record, index) => {
        const metaParts = [
          record.location,
          record.period,
          record.gpa ? `GPA ${record.gpa}` : null,
        ].filter(Boolean) as string[];

        const badges = [
          { label: record.category, variant: "outline" as const },
          record.status ? { label: record.status, variant: "default" as const } : null,
          record.distinction ? { label: record.distinction, variant: "secondary" as const } : null,
        ].filter(Boolean) as Array<{ label: string; variant: "outline" | "default" | "secondary" }>;

        return (
          <motion.div
            key={record.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className="overflow-hidden border border-primary/25 bg-card/95 shadow-lg shadow-primary/15 backdrop-blur">
              <CardHeader className="space-y-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{record.title}</CardTitle>
                    <p className="text-sm font-semibold text-primary">{record.institution}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    {badges.map((badge) => (
                      <Badge key={badge.label} variant={badge.variant} className="uppercase">
                        {badge.label}
                      </Badge>
                    ))}
                  </div>
                </div>
                {metaParts.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    {metaParts.map((part, partIndex) => (
                      <span key={part}>
                        {partIndex > 0 ? <span className="px-1">|</span> : null}
                        {part}
                      </span>
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                {record.description && <p>{record.description}</p>}

                {record.thesis && (
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-foreground">Thesis</h4>
                    <p className="italic text-muted-foreground">"{record.thesis}"</p>
                    {record.thesisGrade && <p>Grade: {record.thesisGrade}</p>}
                  </div>
                )}

                {record.highlights && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Highlights</h4>
                    <ul className="space-y-1">
                      {record.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {record.metadata && record.metadata.length > 0 && (
                  <dl className="grid gap-2 md:grid-cols-2">
                    {record.metadata.map((item) => (
                      <div key={item.label} className="flex flex-col">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-foreground">
                          {item.label}
                        </dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {record.url && (
                  <a
                    href={record.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-primary transition hover:text-primary/80"
                  >
                    {record.urlLabel ?? "Learn more"}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );

  const renderOverview = () => {
    const glanceItems = [
      { emoji: "🎓", label: "Formal education", detail: "Advanced degrees and academic research focus." },
      { emoji: "📚", label: "Courses", detail: "Designed and taught specialised courses with clear outcomes." },
      { emoji: "🛠", label: "Workshops", detail: "Hands-on trainings tailored to applied, real-world practice." },
    ];

    const overviewCards = [
      {
        title: "Academic",
        body:
          "Discover formal education, degrees, research focus areas, thesis work, and academic achievements that shaped my foundation.",
        href: "/education/academic",
        cta: "View Academic Background →",
      },
      {
        title: "Courses",
        body:
          "Browse courses I have designed or taught, covering objectives, target audiences, formats, and learning outcomes.",
        href: "/education/courses",
        cta: "Browse Courses →",
      },
      {
        title: "Workshops",
        body:
          "Explore practical workshops and short-format trainings, their audiences, delivery modes, and hands-on focus areas.",
        href: "/education/workshops",
        cta: "Explore Workshops →",
      },
    ];

    const howToUse = [
      "Explore formal academic background in Academic.",
      "Discover the Courses I have designed or taught.",
      "Learn about practical, hands-on Workshops I have delivered.",
    ];

    return (
      <div className="stack-gap-xl">
        <section className="grid gap-4 rounded-2xl border border-primary/20 bg-muted/40 p-6 sm:grid-cols-3">
          {glanceItems.map((item) => (
            <div key={item.label} className="space-y-2 rounded-xl border border-transparent p-3">
              <div className="text-2xl">{item.emoji}</div>
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </section>

        <section className="stack-gap-md">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-foreground">Choose your path</h2>
            <p className="text-sm text-muted-foreground">
              Jump straight into the detailed views that match what you are looking for.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {overviewCards.map((card) => (
              <Card key={card.title} className="h-full border border-primary/25 bg-background/90 shadow-sm">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.body}</p>
                  </div>
                  <Link
                    href={card.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                  >
                    {card.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-2xl border border-primary/20 bg-card/90 p-6 sm:grid-cols-[1.1fr_1fr]">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">How to use this section</h2>
            <p className="text-sm text-muted-foreground">
              In this Education section, you can quickly understand what is available and move to the right place.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {howToUse.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">Navigation</h3>
            <pre className="overflow-x-auto rounded-lg bg-background/80 p-4 text-xs text-muted-foreground">
{`Education
├── Overview (this page)
├── Academic
├── Courses
└── Workshops`}
            </pre>
            <div className="flex flex-wrap gap-2 text-sm font-semibold text-primary">
              <Link href="/education/academic" className="rounded-full border border-primary/30 px-3 py-1 hover:bg-primary/10">
                Academic
              </Link>
              <Link href="/education/courses" className="rounded-full border border-primary/30 px-3 py-1 hover:bg-primary/10">
                Courses
              </Link>
              <Link href="/education/workshops" className="rounded-full border border-primary/30 px-3 py-1 hover:bg-primary/10">
                Workshops
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const renderActiveCategory = () => {
    if (activeItem.filter === null) {
      return renderOverview();
    }

    if (activeItem.filter === "Academic") {
      return renderAcademicTimeline();
    }

    if (activeItem.filter === "Courses") {
      return renderCourseTimeline();
    }

    if (activeItem.filter === "Workshops") {
      return renderWorkshopTimeline();
    }

    if (filteredRecords.length === 0) {
      return (
        <div
          className="rounded-2xl border border-dashed border-primary/40 bg-muted/40 p-10 text-center text-sm text-muted-foreground"
          data-testid={`section-education-${activeItem.slug}`}
        >
          No records found for {activeItem.label.toLowerCase()} yet.
        </div>
      );
    }

    return (
      <section
        className="space-y-4"
        data-testid={`section-education-${activeItem.slug}`}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
          {categoryLabels[activeItem.filter]}
        </div>
        {renderCards(filteredRecords)}
      </section>
    );
  };

  const renderAcademicTimeline = () => {
    if (!academicPrograms.length) {
      return (
        <div
          className="rounded-2xl border border-dashed border-primary/40 bg-muted/40 p-10 text-center text-sm text-muted-foreground"
          data-testid="section-education-academic"
        >
          Academic programs will appear here soon.
        </div>
      );
    }

    const sortedPrograms = [...academicPrograms].sort(
      (a, b) => getSortValueFromPeriod(b.period) - getSortValueFromPeriod(a.period),
    );

    return (
      <section className="space-y-6" data-testid="section-education-academic">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
          {categoryLabels.Academic}
        </div>

        <div className="space-y-6">
          {sortedPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              data-testid={`card-academic-${index}`}
            >
              <CareerEvidenceCard
                title={program.title}
                organization={program.institution}
                location={program.location ?? "Remote / Hybrid"}
                period={program.period ?? "Ongoing"}
                roleLabel={program.roleLabel ?? program.status ?? "Academic Program"}
                highlights={getAcademicHighlights(program)}
                slides={getAcademicSlides(program)}
                referenceUrl={program.url}
                referenceLabel={program.urlLabel ?? "Program details"}
              />
            </motion.div>
          ))}
        </div>

        <div className="auto-grid md:auto-grid-lg">
          {academicSummaryStats.map((stat) => (
            <Card key={stat.id} data-testid={`card-academic-stat-${stat.id}`}>
              <CardContent className="p-6 text-center">
                <p className={`text-3xl font-bold ${stat.accent}`} data-testid={`text-academic-stat-${stat.id}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  };

  const renderCourseTimeline = () => {
    if (!coursePrograms.length) {
      return (
        <div
          className="rounded-2xl border border-dashed border-primary/40 bg-muted/40 p-10 text-center text-sm text-muted-foreground"
          data-testid="section-education-courses"
        >
          Course records will appear here soon.
        </div>
      );
    }

    const sortedCourses = [...coursePrograms].sort(
      (a, b) => getSortValueFromPeriod(b.period) - getSortValueFromPeriod(a.period),
    );

    return (
      <section className="space-y-6" data-testid="section-education-courses">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
          {categoryLabels.Courses}
        </div>

        <div className="space-y-6">
          {sortedCourses.map((course) => (
            <CareerEvidenceCard
              key={course.id}
              title={course.title}
              organization={course.institution}
              location={course.location ?? "Remote"}
              period={course.period ?? "Date unavailable"}
              roleLabel={course.roleLabel ?? course.status ?? "Professional Certificate"}
              highlights={getCourseHighlights(course)}
              referenceUrl={course.url}
              referenceLabel={course.urlLabel}
              slides={getCourseSlides(course)}
            />
          ))}
        </div>

        <div className="auto-grid md:auto-grid-lg">
          {courseSummaryStats.map((stat) => (
            <Card key={stat.id} data-testid={`card-course-stat-${stat.id}`}>
              <CardContent className="p-6 text-center">
                <p className={`text-3xl font-bold ${stat.accent}`} data-testid={`text-course-stat-${stat.id}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  };

  const renderWorkshopTimeline = () => {
    if (!workshopPrograms.length) {
      return (
        <div
          className="rounded-2xl border border-dashed border-primary/40 bg-muted/40 p-10 text-center text-sm text-muted-foreground"
          data-testid="section-education-workshops"
        >
          Workshop records will appear here soon.
        </div>
      );
    }

    const sortedWorkshops = [...workshopPrograms].sort(
      (a, b) => getSortValueFromPeriod(b.period) - getSortValueFromPeriod(a.period),
    );

    return (
      <section className="space-y-6" data-testid="section-education-workshops">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
          {categoryLabels.Workshops}
        </div>

        <div className="space-y-6">
          {sortedWorkshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              data-testid={`card-workshop-${index}`}
            >
              <CareerEvidenceCard
                title={workshop.title}
                organization={workshop.institution}
                location={workshop.location ?? "On-site / Remote"}
                period={workshop.period ?? "Date unavailable"}
                roleLabel={workshop.roleLabel ?? workshop.status ?? "Workshop"}
                highlights={getWorkshopHighlights(workshop)}
                slides={getWorkshopSlides(workshop)}
                referenceUrl={workshop.url}
                referenceLabel={workshop.urlLabel ?? "Workshop details"}
              />
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  const heroTitle =
    activeItem.slug === "academic"
      ? "Academic"
      : activeItem.slug === "courses"
        ? "Courses"
        : activeItem.slug === "workshops"
          ? "Workshops"
          : "Overview";

  const heroSubtitle =
    activeItem.slug === "academic"
      ? "Formal education, degrees, research focus areas, and thesis work underpinning my academic trajectory."
      : activeItem.slug === "courses"
        ? "Designed and taught courses with clear learning outcomes, delivery formats, and audience alignment."
        : activeItem.slug === "workshops"
          ? "Hands-on workshops and short trainings crafted for applied learning, real-world scenarios, and collaborative practice."
          : "A concise overview of my academic background, teaching activities, and learning initiatives across academic studies, courses, and workshops.";

  return (
    <div className="page-template-career">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-lg"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">{heroTitle}</h1>
          </div>
          <p className="text-xl text-muted-foreground">{heroSubtitle}</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <nav
            className="flex flex-wrap justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-sm mobile:flex-nowrap mobile:justify-center mobile:overflow-x-auto mobile:pr-2"
            role="tablist"
            aria-label="Education sections"
          >
            {navItems.map((item) => {
              const href = item.slug === "overview" ? "/education" : `/education/${item.slug}`;
              const isActive = item.slug === activeItem.slug;

              return (
                <Link
                  key={item.slug}
                  href={href}
                  className={cn(
                    "inline-flex items-center rounded-full border-2 px-4 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/40"
                      : "border-primary/30 text-primary/80 hover:border-primary hover:text-primary",
                  )}
                  data-testid={`link-education-${item.slug}`}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {renderActiveCategory()}
      </motion.div>
    </div>
  );
}
