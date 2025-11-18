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
  abstract?: string;
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
    urlLabel: "View Publication",
    date: "2023-10-01",
  },
  {
    id: 5,
    title: "Visualized Network of Online Interactions in an Ed-Tech Enhanced EFL Language Learning Context Using Gephi Software",
    authors: "Reza Khany & Mahdieh Fakhar Shahreza",
    year: "May 2023",
    venue:
      "18th International TELLSI Conference - Universidad de Tarbiat Modares & Universidad de Islamic Azad, Iran",
    type: "journal",
    status: "Conference Paper",
    description:
      "Applies social network analysis to 12-session Moodle-based PBL cohorts, mapping learner interactions with Gephi.",
    url: "https://www.researchgate.net/publication/370591278_Visualized_Network_of_Online_Interactions_in_an_Ed-Tech_Enhanced_EFL_Language_Learning_Context_Using_Gephi_Software",
    urlLabel: "View Publication",
    date: "2023-05-01",
    abstract:
      "Background. The importance of Social Network Analysis (SNA) in the study of relations, interactions, communications, and collaborations has been the focus of many technology-assisted language learning studies in general and computer-supported collaborative learning (CSCL) investigations in particular. Although there is a wealth of research on problem-based learning (PBL), little if any has scrutinized the collaborative aspect of PBL processes visible by taking advantage of SNA software. Purpose. The main purpose of the current study was to provide automated visual and mathematical analysis of Iranian EFL students' and teachers' interaction processes, types, and patterns while examining correlations among interactivity variables and group academic performance. Method. Thirty Iranian EFL university students and two instructors were randomly assigned to two PBL groups and participated in a 12-session Moodle-based online PBL course. Researchers captured all interaction data and calculated SNA variables at individual and group network levels using Gephi version 9.2. Results. Analysis of 1,240 online student-to-student interactions showed a positive correlation between the students' level of interactivity with teachers and their academic performance while identifying roles for isolated and highly active participants. Conclusions. SNA as a common methodology within CSCL research can reliably monitor collaborative interactions and present a richer picture of PBL processes.",
  },
  {
    id: 6,
    title:
      "The study of EFL Students' Self-Regulation, Locus of Control, and Academic Achievement through Mobile-Assisted Language Learning; The Case of Duolingo App",
    authors: "Mahdieh Fakhar Shahreza, Elena Barcena, & Reza Khany",
    year: "May 2023",
    venue: "Mobile-Assisted Language Learning Research Study",
    type: "journal",
    status: "Article",
    description:
      "Quasi-experimental Duolingo study comparing self-regulation, locus of control, and academic achievement across treatment and control cohorts.",
    url: "https://www.researchgate.net/publication/370591338_The_study_of_EFL_Students'_Self-Regulation_Locus_of_Control_and_Academic_Achievement_through_Mobile-Assisted_Language_Learning_The_Case_of_DuolingoR_App",
    urlLabel: "View Publication",
    date: "2023-05-15",
    abstract:
      "This study scrutinized the effectiveness of the Duolingo mobile language learning app on students' academic achievement in light of self-regulation and locus of control. Sixty-two Iranian learners studying Spanish were divided into a control group receiving traditional instruction and an experimental group integrating Duolingo sessions. Paired and independent sample t-tests revealed that the experimental group benefited more and demonstrated stronger self-regulation strategies. Locus of control also differed meaningfully, with Duolingo participants becoming more internal. Recommendations for deploying the app effectively are provided.",
  },
  {
    id: 7,
    title:
      "Investigating the effects of teachers' self-leadership on their professional development and change",
    authors: "Reza Khany & Mahdieh Fakhar Shahreza",
    year: "May 2023",
    venue:
      "3rd International Conference on New Trends in English Language Teaching and Testing - Tehran University, Iran",
    type: "journal",
    status: "Conference Paper",
    description:
      "SEM-based study exploring how self-leadership predicts professional development and change among Iranian EFL teachers.",
    url: "https://www.researchgate.net/publication/370591582_Investigating_the_effects_of_teachers'_self-leadership_on_their_professional_development_and_change",
    urlLabel: "View Publication",
    date: "2023-05-10",
    abstract:
      "This study examined associations among EFL teachers' self-leadership, professional development, and professional change. Two hundred forty-six Iranian EFL teachers completed standardized questionnaires and the collected data were analyzed via structural equation modeling. Results indicated that self-leadership significantly relates to both development and change with acceptable fit indices, while contextual factors contribute to intra/inter-individual differences. Subcategories of professional development can affect professional change, and the findings highlight implications for teachers, language planners, and practitioners.",
  },
  {
    id: 8,
    title: "Social Media in Higher Education: Reflections and Case Studies",
    authors: "Fakhar Shahreza, M.",
    year: "2022",
    venue: "Open Book Publishers / Taylor & Francis",
    type: "review",
    description: "Book review analyzing the role of social media in higher education settings.",
    date: "2022-06-01",
  },
  {
    id: 9,
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
