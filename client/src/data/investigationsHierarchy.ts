type CategoryBlueprint = {
  label: string;
  slug: string;
  description?: string;
  children?: CategoryBlueprint[];
};

export type InvestigationNode = {
  label: string;
  slug: string;
  description?: string;
  path: string[];
  children: InvestigationNode[];
};

const investigationsBlueprint: CategoryBlueprint = {
  label: "Investigations",
  slug: "",
  description: "Complete directory of publications, theses, books, and reference handbooks.",
  children: [
    {
      label: "All",
      slug: "all",
      description: "Panoramic view across every investigation category.",
    },
    {
      label: "Articles",
      slug: "articles",
      description: "Published manuscripts spanning journals, conferences, and preprint archives.",
      children: [
        { label: "All", slug: "all", description: "All article formats and venues." },
        {
          label: "Journal Articles",
          slug: "journal-articles",
          description: "Peer-reviewed journal outputs across disciplines.",
          children: [
            { label: "All", slug: "all", description: "All journal article formats." },
            { label: "Original Research", slug: "original-research" },
            {
              label: "Review Articles",
              slug: "review-articles",
              description: "Syntheses of existing literature and evidence bases.",
              children: [
                { label: "All", slug: "all", description: "All review article types." },
                { label: "Systematic Reviews", slug: "systematic-reviews" },
                { label: "Meta-analyses", slug: "meta-analyses" },
                { label: "Scoping Reviews", slug: "scoping-reviews" },
                { label: "Narrative Reviews", slug: "narrative-reviews" },
              ],
            },
            { label: "Short/Brief Reports", slug: "short-brief-reports" },
            { label: "Case Reports & Case Series", slug: "case-reports-case-series" },
            { label: "Methods & Protocols", slug: "methods-protocols" },
            { label: "Data Articles", slug: "data-articles" },
            { label: "Replication & Negative Results", slug: "replication-negative-results" },
            { label: "Registered Reports", slug: "registered-reports" },
            { label: "Letters & Correspondence", slug: "letters-correspondence" },
            { label: "Editorials & Commentaries", slug: "editorials-commentaries" },
          ],
        },
        {
          label: "Conference Publications",
          slug: "conference-publications",
          description: "Outputs presented at scholarly conferences and symposia.",
          children: [
            { label: "All", slug: "all", description: "All conference publication formats." },
            { label: "Full Papers", slug: "full-papers" },
            { label: "Short Papers", slug: "short-papers" },
            { label: "Posters", slug: "posters" },
            { label: "Abstracts", slug: "abstracts" },
            { label: "Workshop Papers", slug: "workshop-papers" },
            { label: "Demo Papers", slug: "demo-papers" },
            { label: "Doctoral Consortium", slug: "doctoral-consortium" },
          ],
        },
        {
          label: "Preprints & Working Papers",
          slug: "preprints-working-papers",
          description: "Early-distribution manuscripts and exploratory findings.",
          children: [
            { label: "All", slug: "all", description: "All early-release manuscripts." },
            { label: "Preprints", slug: "preprints" },
            { label: "Working Papers", slug: "working-papers" },
          ],
        },
      ],
    },
    {
      label: "Theses & Dissertations",
      slug: "theses-dissertations",
      description: "Graduate and doctoral research outputs organized by level and format.",
      children: [
        { label: "All", slug: "all", description: "All thesis and dissertation formats." },
        {
          label: "Bachelor’s Theses",
          slug: "bachelors-theses",
          children: [
            { label: "All", slug: "all" },
            { label: "Honors Theses", slug: "honors-theses" },
            { label: "Capstone Projects", slug: "capstone-projects" },
          ],
        },
        {
          label: "Master’s Theses",
          slug: "masters-theses",
          children: [
            { label: "All", slug: "all" },
            { label: "Research Thesis (Monograph)", slug: "research-thesis-monograph" },
            { label: "Project / Practicum", slug: "project-practicum" },
            { label: "Article-based Thesis", slug: "article-based-thesis" },
          ],
        },
        {
          label: "Doctoral Dissertations (PhD)",
          slug: "doctoral-dissertations",
          children: [
            { label: "All", slug: "all" },
            { label: "Monograph Dissertation", slug: "monograph-dissertation" },
            { label: "Cumulative / Article-based Dissertation", slug: "cumulative-article-based-dissertation" },
            { label: "PhD by Publication", slug: "phd-by-publication" },
          ],
        },
        {
          label: "Professional Doctorates",
          slug: "professional-doctorates",
          children: [
            { label: "All", slug: "all" },
            { label: "EdD Dissertations", slug: "edd-dissertations" },
            { label: "DBA Dissertations", slug: "dba-dissertations" },
            { label: "DNP Projects", slug: "dnp-projects" },
            { label: "EngD Theses", slug: "engd-theses" },
          ],
        },
        {
          label: "MPhil & Research Master’s",
          slug: "mphil-research-masters",
          children: [
            { label: "All", slug: "all" },
            { label: "MPhil Theses", slug: "mphil-theses" },
            { label: "MRes Dissertations", slug: "mres-dissertations" },
          ],
        },
        {
          label: "By Methodology",
          slug: "by-methodology",
          children: [
            { label: "All", slug: "all" },
            { label: "Quantitative", slug: "quantitative" },
            { label: "Qualitative", slug: "qualitative" },
            { label: "Mixed Methods", slug: "mixed-methods" },
          ],
        },
        {
          label: "By Access & Status",
          slug: "by-access-status",
          children: [
            { label: "All", slug: "all" },
            { label: "Open Access", slug: "open-access" },
            { label: "Embargoed / Restricted", slug: "embargoed-restricted" },
            { label: "Published as Book", slug: "published-as-book" },
          ],
        },
        {
          label: "By Language",
          slug: "by-language",
          children: [
            { label: "All", slug: "all" },
            { label: "English", slug: "english" },
            { label: "Multilingual", slug: "multilingual" },
          ],
        },
        {
          label: "By Format",
          slug: "by-format",
          children: [
            { label: "All", slug: "all" },
            { label: "Traditional / Print", slug: "traditional-print" },
            { label: "Digital / Multimedia", slug: "digital-multimedia" },
            { label: "With Dataset / Software Companion", slug: "with-dataset-software-companion" },
          ],
        },
      ],
    },
    {
      label: "Books",
      slug: "books",
      description: "Long-form scholarly publications and curated volumes.",
      children: [
        { label: "All", slug: "all", description: "All book formats and series." },
        {
          label: "Monographs",
          slug: "monographs",
          children: [
            { label: "All", slug: "all" },
            { label: "Research Monographs", slug: "research-monographs" },
            { label: "Short Monographs", slug: "short-monographs" },
          ],
        },
        {
          label: "Edited Volumes",
          slug: "edited-volumes",
          children: [
            { label: "All", slug: "all" },
            { label: "Thematic Collections", slug: "thematic-collections" },
            { label: "Festschrifts", slug: "festschrifts" },
          ],
        },
        {
          label: "Textbooks",
          slug: "textbooks",
          children: [
            { label: "All", slug: "all" },
            { label: "Undergraduate", slug: "undergraduate" },
            { label: "Graduate", slug: "graduate" },
            { label: "Advanced / Professional", slug: "advanced-professional" },
          ],
        },
        {
          label: "Reference Works",
          slug: "reference-works",
          children: [
            { label: "All", slug: "all" },
            { label: "Encyclopedias", slug: "encyclopedias" },
            { label: "Dictionaries & Glossaries", slug: "dictionaries-glossaries" },
            { label: "Atlases", slug: "atlases" },
            { label: "Handbooks (see Handbooks branch)", slug: "handbooks-reference" },
          ],
        },
        {
          label: "Conference Proceedings (Books)",
          slug: "conference-proceedings-books",
          children: [
            { label: "All", slug: "all" },
            { label: "Full Proceedings", slug: "full-proceedings" },
            { label: "Lecture Notes / Proceedings Series", slug: "lecture-notes-proceedings-series" },
          ],
        },
        {
          label: "Book Series",
          slug: "book-series",
          children: [
            { label: "All", slug: "all" },
            { label: "Ongoing Series", slug: "ongoing-series" },
            { label: "Lecture Notes Series", slug: "lecture-notes-series" },
          ],
        },
        {
          label: "Reports & White Papers (Book-length)",
          slug: "reports-white-papers",
          children: [
            { label: "All", slug: "all" },
            { label: "Technical Reports", slug: "technical-reports" },
            { label: "Policy Reports", slug: "policy-reports" },
          ],
        },
        {
          label: "Catalogs & Compendia",
          slug: "catalogs-compendia",
          children: [
            { label: "All", slug: "all" },
            { label: "Data Compendia", slug: "data-compendia" },
            { label: "Bibliographies", slug: "bibliographies" },
          ],
        },
      ],
    },
    {
      label: "Handbooks",
      slug: "handbooks",
      description: "Applied reference guides for methods, practice, and discipline-specific workflows.",
      children: [
        { label: "All", slug: "all", description: "All handbook categories." },
        {
          label: "General & Comprehensive",
          slug: "general-comprehensive",
          children: [
            { label: "All", slug: "all" },
            { label: "Multi-volume Compendia", slug: "multi-volume-compendia" },
            { label: "Single-volume Overviews", slug: "single-volume-overviews" },
          ],
        },
        {
          label: "Methods & Protocols",
          slug: "methods-protocols",
          children: [
            { label: "All", slug: "all" },
            { label: "Experimental Methods", slug: "experimental-methods" },
            { label: "Protocols & SOPs", slug: "protocols-sops" },
            { label: "Measurement & Instrumentation", slug: "measurement-instrumentation" },
          ],
        },
        {
          label: "Statistical & Data Analysis",
          slug: "statistical-data-analysis",
          children: [
            { label: "All", slug: "all" },
            { label: "Statistics", slug: "statistics" },
            { label: "Data Science & Machine Learning", slug: "data-science-machine-learning" },
            { label: "Study Design & Meta-analysis", slug: "study-design-meta-analysis" },
          ],
        },
        {
          label: "Computational & Software",
          slug: "computational-software",
          children: [
            { label: "All", slug: "all" },
            { label: "Algorithms & Modeling", slug: "algorithms-modeling" },
            { label: "Scientific Computing", slug: "scientific-computing" },
            { label: "Software Tools & Workflows", slug: "software-tools-workflows" },
          ],
        },
        {
          label: "Clinical & Practice",
          slug: "clinical-practice",
          children: [
            { label: "All", slug: "all" },
            { label: "Diagnostics & Treatment", slug: "diagnostics-treatment" },
            { label: "Guidelines & Best Practices", slug: "guidelines-best-practices" },
            { label: "Pharmacy & Therapeutics", slug: "pharmacy-therapeutics" },
          ],
        },
        {
          label: "Field & Laboratory",
          slug: "field-laboratory",
          children: [
            { label: "All", slug: "all" },
            { label: "Field Guides", slug: "field-guides" },
            { label: "Laboratory Techniques", slug: "laboratory-techniques" },
            { label: "Safety & Compliance", slug: "safety-compliance" },
          ],
        },
        {
          label: "Industry & Engineering",
          slug: "industry-engineering",
          children: [
            { label: "All", slug: "all" },
            { label: "Materials & Manufacturing", slug: "materials-manufacturing" },
            { label: "Energy & Environment", slug: "energy-environment" },
            { label: "Standards & Codes", slug: "standards-codes" },
          ],
        },
        {
          label: "Policy & Guidelines",
          slug: "policy-guidelines",
          children: [
            { label: "All", slug: "all" },
            { label: "Regulatory & Compliance", slug: "regulatory-compliance" },
            { label: "Ethics & Responsible Research", slug: "ethics-responsible-research" },
            { label: "Funding & Project Management", slug: "funding-project-management" },
          ],
        },
        {
          label: "Teaching & Pedagogy",
          slug: "teaching-pedagogy",
          children: [
            { label: "All", slug: "all" },
            { label: "Curriculum & Instruction", slug: "curriculum-instruction" },
            { label: "Assessment & Evaluation", slug: "assessment-evaluation" },
            { label: "Communication & Outreach", slug: "communication-outreach" },
          ],
        },
        {
          label: "Discipline-specific",
          slug: "discipline-specific",
          children: [
            { label: "All", slug: "all" },
            { label: "Life Sciences", slug: "life-sciences" },
            { label: "Physical Sciences", slug: "physical-sciences" },
            { label: "Computer & Information Sciences", slug: "computer-information-sciences" },
            { label: "Engineering", slug: "engineering" },
            { label: "Medicine & Health", slug: "medicine-health" },
            { label: "Social Sciences", slug: "social-sciences" },
            { label: "Interdisciplinary", slug: "interdisciplinary" },
          ],
        },
      ],
    },
  ],
};

export const investigationsRoot = buildTree(investigationsBlueprint);

export function buildTree(
  blueprint: CategoryBlueprint,
  parentPath: string[] = [],
): InvestigationNode {
  const path = blueprint.slug ? [...parentPath, blueprint.slug] : parentPath;

  return {
    label: blueprint.label,
    slug: blueprint.slug,
    description: blueprint.description,
    path,
    children: blueprint.children?.map((child) => buildTree(child, path)) ?? [],
  };
}

export function nodeHref(node: InvestigationNode): string {
  if (node.path.length === 0) {
    return "/investigations/all";
  }
  return `/investigations/${node.path.join("/")}`;
}

export function findInvestigationNode(
  pathSegments: string[],
  current: InvestigationNode = investigationsRoot,
  breadcrumbs: InvestigationNode[] = [investigationsRoot],
): { node: InvestigationNode; breadcrumbs: InvestigationNode[]; exact: boolean } {
  if (pathSegments.length === 0) {
    return { node: current, breadcrumbs, exact: true };
  }

  const [head, ...rest] = pathSegments;
  const child = current.children.find((c) => c.slug === head);

  if (!child) {
    return { node: current, breadcrumbs, exact: false };
  }

  return findInvestigationNode(rest, child, [...breadcrumbs, child]);
}

export function flattenInvestigations(node: InvestigationNode): InvestigationNode[] {
  return [node, ...node.children.flatMap((child) => flattenInvestigations(child))];
}
