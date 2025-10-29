import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

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
    id: "academic-big-data",
    category: "Academic",
    title: "Master's Degree in Continuing Education in Big Data and Data Science",
    institution: "Universidad Internacional de La Rioja (UNIR)",
    location: "Madrid, Spain",
    period: "Dec 2025 - Present",
    status: "Studying",
    highlights: [
      "Focusing on large-scale data engineering, statistical learning, and AI product delivery for higher education projects.",
    ],
    metadata: [
      { label: "Mode", value: "Official - Online" },
      { label: "Start date", value: "17 Dec 2025" },
    ],
  },
  {
    id: "academic-phd-applied-linguistics",
    category: "Academic",
    title: "Ph.D. Programme in Applied Linguistics (Research Stage)",
    institution: "Universidad Nacional de Educacion a Distancia (UNED)",
    location: "Madrid, Spain",
    period: "Feb 2024 - Present",
    status: "Preparing comprehensive doctoral exam",
    description: "Advanced research on AI-assisted language pedagogy, academic literacies, and digital assessment within the Applied Linguistics doctoral track.",
    metadata: [
      { label: "Mode", value: "Official - Online" },
      { label: "Research focus", value: "Applied linguistics, AI feedback for language education" },
    ],
  },
  {
    id: "academic-ict-language",
    category: "Academic",
    title: "Official Master's in ICT for Language Teaching and Processing",
    institution: "Universidad Nacional de Educacion a Distancia (UNED)",
    location: "Madrid, Spain",
    period: "Sep 2022 - Sep 2024",
    status: "Completed",
    gpa: "9.29/10",
    distinction: "Distinction",
    thesis: "Improving Digital Competence Scales for 21st-Century English Teachers",
    thesisGrade: "9/10 (Distinction)",
    highlights: [
      "Selected among Spain's top 100 online Master's degrees (El Mundo 2023).",
      "Ranked 3rd nationally in the Education category.",
    ],
    metadata: [
      { label: "Mode", value: "Official - Online" },
    ],
    url: "https://www.elmundo.es/especiales/mejores-masters/",
    urlLabel: "View El Mundo ranking",
  },
  {
    id: "academic-tefl",
    category: "Academic",
    title: "Official Master's in Teaching English as a Foreign Language",
    institution: "University of Ilam",
    location: "Ilam, Iran",
    period: "Jul 2013 - Sep 2016",
    status: "Completed",
    gpa: "9.09/10",
    distinction: "Distinction",
    thesis: "Relationship Between Identity, Change, and Professional Development of English Teachers in Iran",
    thesisGrade: "19.80/20",
    metadata: [
      { label: "Mode", value: "Official - In person" },
    ],
  },
  {
    id: "academic-ba-translation",
    category: "Academic",
    title: "BA in English Translation Studies",
    institution: "Payame Noor University of Shahreza, Isfahan",
    location: "Isfahan, Iran",
    period: "Jun 2009 - Sep 2013",
    status: "Completed",
    gpa: "7.91/10",
    distinction: "Merit",
    thesis: "Translation of a Short Story Collection and Two Motivational Videos by Anthony Robbins",
    thesisGrade: "19.88/20",
    metadata: [
      { label: "Mode", value: "Official - In person" },
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
    highlights: [
      "Validated cloud fluency across AWS compute, networking, storage, and security services.",
      "Completed scenario-based labs covering governance, architecture patterns, and automation workflows.",
    ],
    metadata: [{ label: "Credential ID", value: "298b5e29-2f62-456b-b2f9-69419b0aa29d" }],
    url: "https://www.credly.com/badges/298b5e29-2f62-456b-b2f9-69419b0aa29d/public_url",
    urlLabel: "View digital credential",
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

  return (
    <div className="container py-12">
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
