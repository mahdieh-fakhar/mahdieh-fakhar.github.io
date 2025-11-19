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
  downloadUrl?: string;
  downloadLabel?: string;
  date?: string;
  abstract?: string;
  highlightsOverride?: string[];
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
    title: "Development, factor analysis, and validation of an EFL Teacher Change Scale (TCS)",
    authors: "Reza Khany, Mahdieh Fakhar Shahreza",
    year: "2016",
    venue: "Iranian Journal of Applied Language Studies",
    type: "journal",
    url: "https://ijals.usb.ac.ir/article_3083.html",
    urlLabel: "View Publication",
    downloadUrl: "https://ijals.usb.ac.ir/article_3083_9062a98dcedea78d0ee4cddead855e3f.pdf",
    downloadLabel: "Download",
    date: "2016-07-01",
    highlightsOverride: [
      "Authors  : Reza Khany, Mahdieh Fakhar Shahreza",
      "Publication date  : 2016/7/1",
      "Publisher  : University of Sistan and Baluchestan",
      "Description : The concept of teacher change is critical in second language teaching and English as a Foreign Language (EFL) context due largely to the fact that, almost, whatever we do in teacher education looks for initiating change of one sort or another. A substantial body of research has been dedicated to investigate teacher change (TC) from various perspectives.  However, having studied the related literature, we found no robust, valid and reliable measure for TC in EFL context. Accordingly, effort was made to develop and validate a reliable and valid measure that could assess TC in an EFL context. The review of the prior research resulted in the collection of 186 items affecting TC out of which a temporary data driven model of teacher change was developed. 324 Ph.D. and M.A. graduated EFL teachers took part in exploratory and confirmatory factor analyses of the initial measure. Finally, a 66-item scale consisting of three components and thirteen sub-components was developed.The results showed both factorial validity andinternal consistency reliability for the measure.The TCSsubscales also had strong validity evidence based on the associationsfound. This study has various applications for language teachers and practitioners in the field.",
    ],
  },
  {
    id: 9,
    title:
      "Social media in higher education: case studies, reflections and analysis: edited by C. Rowel, Open Book Publishers, Cambridge, UK, 2019, ISBN 978-1-78374-668-2 (paperback ...",
    authors: "Mahdieh Fakhar Shahreza",
    year: "2023",
    venue: "Open Learning: The Journal of Open, Distance and e-Learning",
    type: "review",
    description:
      "Publication date: 2023/1/2. Publisher: Routledge. HT The widespread use of social media (SM) in all types of organisations including Higher Education (HE) institutions is not a surprise anymore. In this regard, a multi-authored book on this subject is welcomed, especially a book with a wide variety of authors, from university professors, lecturers, managers, researchers and academic developers to journal editors, librarians, and bloggers. The main purpose of the book is to investigate the impacts of SM on HE. Across the chapters the authors tend to accentuate the positive aspects of SM, however, some important considerations, concerns, and controversial issues are also raised. The book consists of twenty-three chapters, each of which, except the second one on podcasting, explores the application of the most widely used SM tools in HE and provides a detailed explanation of their principal benefits. Generally, the book is divided into six broad themes representing ...",
    url: "https://www.tandfonline.com/doi/full/10.1080/02680513.2022.2135987",
    urlLabel: "View Publication",
    date: "2023-01-02",
    highlightsOverride: [
      "Authors  : Mahdieh Fakhar Shahreza",
      "Publication date  : 2023/1/2",
      "Source  : Open Learning: The Journal of Open, Distance and e-Learning",
      "Publisher  : Routledge",
      "Description : HT The widespread use of social media (SM) in all types of organisations including Higher Education (HE) institutions is not a surprise anymore. In this regard, a multi-authored book on this subject is welcomed, especially a book with a wide variety of authors, from university professors, lecturers, managers, researchers and academic developers to journal editors, librarians, and bloggers. The main purpose of the book is to investigate the impacts of SM on HE. Across the chapters the authors tend to accentuate the positive aspects of SM, however, some important considerations, concerns, and controversial issues are also raised. The book consists of twenty-three chapters, each of which, except the second one on podcasting, explores the application of the most widely used SM tools in HE and provides a detailed explanation of their principal benefits. Generally, the book is divided into six broad themes representing ...",
    ],
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
