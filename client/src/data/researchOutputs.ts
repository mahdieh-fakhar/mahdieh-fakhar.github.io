export type PublicationType = "journal" | "book" | "review";

export type Publication = {
  id: number;
  title: string;
  authors: string;
  year: string;
  venue: string;
  type: PublicationType;
  status?: string;
  description?: string;
  url?: string;
  urlLabel?: string;
  date?: string;
};

export const publications: Publication[] = [
  {
    id: 1,
    title: "Approaches on Machine Translation",
    authors: "Fakhar Shahreza, M., Vilhelm, M., & D\u00E1ez-Arca\u00EDn, P.",
    year: "2025",
    venue: "Journal of Translation and Translanguaging in Multilingual Contexts",
    type: "journal",
    description: "Special issue on approaches to machine translation in multilingual contexts.",
    date: "2025-04-01",
  },
  {
    id: 2,
    title: "Two Decades of Technology-Mediated Reading",
    authors: "Fakhar Shahreza, M.",
    year: "2025",
    venue: "Peter Lang",
    type: "book",
    status: "In Press",
    description: "Comprehensive analysis of technology-mediated reading practices over 20 years.",
    date: "2025-01-15",
  },
  {
    id: 3,
    title: "Duolingo & Language Learning",
    authors: "Fakhar Shahreza, M., Barcena Madera, E., & Khany, R.",
    year: "2023",
    venue: "Comares",
    type: "book",
    description: "Research on language learning effectiveness using Duolingo platform.",
    date: "2023-02-01",
  },
  {
    id: 4,
    title: "Rasch-Preselected Items: An Optimal Approach in Item-based Evaluation",
    authors: "Reza Khany, Mahdieh Fakhar Shahreza, & Elena Barcena",
    year: "October 2023",
    venue: "National University of Distance Education (UNED)",
    type: "journal",
    description: "Introduces a Rasch-based workflow that selects optimal items for evaluation-heavy research.",
    url: "https://www.researchgate.net/publication/370591206_Rasch-Preselected_Items_An_Optimal_Approach_in_Item-based_Evaluation",
    urlLabel: "Read on ResearchGate",
    date: "2023-10-01",
  },
  {
    id: 5,
    title: "Social Media in Higher Education: Reflections and Case Studies",
    authors: "Fakhar Shahreza, M.",
    year: "2022",
    venue: "Open Book Publishers / Taylor & Francis",
    type: "review",
    description: "Book review analyzing the role of social media in higher education settings.",
    date: "2022-06-01",
  },
  {
    id: 6,
    title: "Development of the EFL Teacher Change Scale",
    authors: "Khany, R. & Fakhar Shahreza, M.",
    year: "2016",
    venue: "Journal of Applied Linguistics Studies (JALS)",
    type: "journal",
    description:
      "Development and validation of a scale measuring teacher change in EFL contexts.",
    date: "2016-01-01",
  },
];

export const conferenceProceedings: string[] = [
  "TELLSI International Conferences (Iran)",
  "International Conferences on Language, Discourse, and Pragmatics (Iran)",
  "EUROKD Conference (Turkey)",
  "Online Teaching and MALL Studies",
];

export const researchFocusAreas: string[] = [
  "Machine Translation",
  "Language Learning Technology",
  "Digital Competence",
  "Teacher Development",
  "Bibliometric Analysis",
  "Educational Technology",
  "Data-Driven Research",
];
