import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { CareerEvidenceCard, type Slide } from "@/components/career/CareerEvidenceCard";

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
    period: "Issued Aug 2024",
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
        src: "/images/profile.jpg",
        alt: "AWS Cloud Quest certificate preview",
        caption: "AWS Cloud Quest – official badge preview",
        downloadName: "aws-cloud-quest-1.jpg",
      },
      {
        src: "/images/logo.png",
        alt: "AWS Cloud Quest credential seal",
        caption: "AWS official seal",
        downloadName: "aws-cloud-quest-2.jpg",
      },
    ],
  },
];

const workshopPrograms: EducationRecord[] = [
  {
    id: "workshop-critical-pedagogy",
    category: "Workshops",
    title: "Critical Pedagogy in Second Language Learning",
    institution: "13th International TELLSI Conference",
    location: "Lorestan University, Khorramabad, Iran",
    period: "Nov 2015",
    status: "Workshop Attendance",
    highlights: [
      "Participated in a faculty development workshop led by Dr. Goudarz Alibakhshi and Dr. Mola Miri.",
      "Explored reflective practices for embedding critical pedagogy into EFL classroom routines.",
    ],
  },
  {
    id: "workshop-ict-language-learning",
    category: "Workshops",
    title: "Language Learning Through WhatsApp or Telegram",
    institution: "First English-French Conference on Applied Linguistics and Literature",
    location: "University of Kurdistan, Iran",
    period: "May 2016",
    status: "Workshop Presentation",
    highlights: [
      "Delivered comparative analysis of mobile messaging platforms for blended language instruction.",
      "Showcased learner engagement dashboards and formative assessment tactics for social apps.",
    ],
  },
];

const allRecords: EducationRecord[] = [
  ...academicPrograms,
  ...coursePrograms,
  ...workshopPrograms,
];

const categoryOrder: EducationCategory[] = ["Academic", "Courses", "Workshops"];

const navItems: EducationNavItem[] = [
  {
    label: "All",
    slug: "all",
    filter: null,
    description: "Complete academic journey",
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

function getSortValueFromPeriod(period?: string): number {
  if (!period) {
    return 0;
  }

  const normalized = period.toLowerCase();
  const years = Array.from(period.matchAll(/\d{4}/g)).map((match) => Number(match[0]));
  const latestYear = years.length ? Math.max(...years) : 0;
  const presentBoost = normalized.includes("present") || normalized.includes("in progress") ? 1000 : 0;
  return latestYear + presentBoost;
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

  useEffect(() => {
    const normalizedLocation = location.replace(/\/+$/, "");
    if (!params?.category && normalizedLocation === "/education") {
      setLocation("/education/all", { replace: true });
    }
  }, [location, params?.category, setLocation]);

  const activeSlug = params?.category ? params.category.toLowerCase() : "all";
  const activeItem = navItems.find((item) => item.slug === activeSlug) ?? navItems[0];

  const groupedRecords = useMemo(
    () =>
      categoryOrder.map((category) => ({
        category,
        label: categoryLabels[category],
        items: allRecords.filter((record) => record.category === category),
      })),
    [],
  );

  const filteredRecords =
    activeItem.filter === null
      ? allRecords
      : allRecords.filter((record) => record.category === activeItem.filter);

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
                        {partIndex > 0 ? <span className="px-1">•</span> : null}
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

  const renderAllCategories = () => {
    const hasAnyRecords = groupedRecords.some((group) => group.items.length > 0);

    if (!hasAnyRecords) {
      return (
        <div className="rounded-2xl border border-dashed border-primary/40 bg-muted/40 p-10 text-center text-sm text-muted-foreground">
          Education records will appear here soon.
        </div>
      );
    }

    return groupedRecords.map((group) =>
      group.items.length === 0 ? null : (
        <section
          key={group.category}
          className="space-y-4"
          data-testid={`section-education-${group.category.toLowerCase()}`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
            {group.label}
          </div>
          {renderCards(group.items)}
        </section>
      ),
    );
  };

  const renderActiveCategory = () => {
    if (activeItem.filter === "Academic") {
      return renderAcademicTimeline();
    }

    if (activeItem.filter === "Courses") {
      return renderCourseTimeline();
    }

    if (activeItem.filter === null) {
      return renderAllCategories();
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

        <div className="relative space-y-8">
          <div className="absolute left-8 top-0 bottom-0 hidden w-0.5 bg-border md:block" />

          {sortedPrograms.map((program, index) => {
            const detailEntries = getRecordDetailEntries(program);
            const statusVariant = program.status?.toLowerCase().includes("progress") ? "secondary" : "default";

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="md:ml-20" data-testid={`card-academic-${index}`}>
                  <div className="absolute -left-12 top-6 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary md:flex">
                    <GraduationCap className="h-4 w-4 text-primary-foreground" />
                  </div>

                  <CardHeader>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-xl" data-testid={`text-academic-title-${index}`}>
                          {program.title}
                        </CardTitle>
                        <p className="text-base font-medium text-primary" data-testid={`text-academic-institution-${index}`}>
                          {program.institution}
                        </p>
                      </div>
                      {program.status && (
                        <Badge variant={statusVariant} className="w-fit" data-testid={`badge-academic-status-${index}`}>
                          {program.status}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      {program.location && <span data-testid={`text-academic-location-${index}`}>{program.location}</span>}
                      {(program.location || program.period) && <span aria-hidden="true">|</span>}
                      {program.period && <span data-testid={`text-academic-period-${index}`}>{program.period}</span>}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="space-y-3 md:col-span-2">
                        {program.description && (
                          <p className="text-sm text-muted-foreground" data-testid={`text-academic-description-${index}`}>
                            {program.description}
                          </p>
                        )}
                        {program.highlights?.length ? (
                          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                            {program.highlights.map((highlight) => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                        ) : null}
                        {detailEntries.length ? (
                          <div className="rounded-lg border border-dashed border-muted-foreground/40 bg-muted/10 p-4 text-sm text-muted-foreground">
                            <dl className="space-y-2 text-left">
                              {detailEntries.map((entry) => (
                                <div key={`${program.id}-${entry.label}`} className="flex flex-col">
                                  <dt className="text-xs font-semibold uppercase tracking-wide text-foreground">
                                    {entry.label}
                                  </dt>
                                  <dd>{entry.value}</dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-6 space-y-3 md:col-span-1 md:mt-0 md:-mt-6">
                        <div className="flex h-full flex-col justify-center rounded-lg border border-dashed border-muted-foreground/40 bg-muted/10 p-4 text-sm text-muted-foreground text-center">
                          <span className="font-medium text-foreground">Attachments</span>
                          <span>Add supporting documents to showcase credentials.</span>
                        </div>
                        {program.url && (
                          <a
                            href={program.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 px-3 py-2 text-xs font-medium text-primary transition hover:bg-primary/10"
                            data-testid={`link-academic-url-${index}`}
                          >
                            {program.urlLabel ?? "Program details"}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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
          {sortedCourses.map((course) => {
            const slides = course.slides?.length
              ? course.slides
              : [
                  {
                    src: "/images/profile.jpg",
                    alt: `${course.title} credential preview`,
                    caption: course.title,
                  },
                ];

            return (
              <CareerEvidenceCard
                key={course.id}
                title={course.title}
                organization={course.institution}
                location={course.location ?? "Remote"}
                period={course.period ?? "Date unavailable"}
                roleLabel={course.roleLabel ?? course.status ?? "Professional Certificate"}
                highlights={course.highlights ?? []}
                referenceUrl={course.url}
                referenceLabel={course.urlLabel}
                slides={slides}
              />
            );
          })}
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
            <h1 className="text-4xl font-bold text-foreground">Education</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Explore academic milestones, professional courses, and immersive workshops shaping ongoing expertise.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-sm mobile:justify-start">
          <nav
            className="flex flex-wrap justify-center gap-2 mobile:flex-nowrap mobile:justify-start mobile:overflow-x-auto mobile:pr-2"
            role="tablist"
            aria-label="Education sections"
          >
            {navItems.map((item) => {
              const href = item.slug === "all" ? "/education/all" : `/education/${item.slug}`;
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
          <span className="text-muted-foreground normal-case tracking-normal">
            {activeItem.description}
          </span>
        </div>

        {renderActiveCategory()}
      </motion.div>
    </div>
  );
}
