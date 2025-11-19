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
    id: 18,
    title: "Paralogism, ambiguity, and circumlocution: do compensation strategies help?",
    authors: "Reza Khany, Mahdieh Fakhar Shahreza",
    year: "May 2017",
    venue:
      "Fourth International Conference on Language, Discourse, and Pragmatics - Shahid Chamran University, Ahvaz, Iran",
    type: "journal",
    status: "Conference Paper",
    date: "2017-05-01",
    url: "https://www.researchgate.net/publication/370591594_Paralogism_ambiguity_and_circumlocution_do_compensation_strategies_help",
    urlLabel: "View Publication",
    description:
      "Investigates whether circumlocution as a compensation strategy mitigates intentional and unintentional paralogisms and ambiguities in spoken EFL communication.",
    abstract:
      "As one of the main functions of spoken language is transference of information, it is essential that interlocutors in the conversations be able to express what they really want without any ambiguity. Hence, the present study intends to investigate why and to what extent people use different kinds of paralogisms or false argumentations and paralogistic sentences and how the ambiguities in peoples' utterances can be removed by using a compensation strategy known as circumlocution to prevent misunderstanding. To this end, 150 Iranian EFL students with the age range of 18 to 26 took three standardized questionnaires. The collected data were analyzed using Statistical Package for the Social Science (SPSS, Version 21). The findings revealed that there are some intentional and unintentional reasons for using paralogistic words and sentences to mislead people. Furthermore, the results showed that people use different categories of circumlocution (Salazar, 2006) to solve communication problems, among which some of them were more frequently used. This study has various implications for language practitioners and language users.",
  },
  {
    id: 17,
    title:
      "An Ecological Exploration of Iranian EFL Students' Self-change, Self-construal, and Change Management through Classroom Communication Tasks",
    authors: "Reza Khany, Mahdieh Fakhar Shahreza",
    year: "May 2018",
    venue:
      "16th International Conference of English Language & Literature - Shiraz University, Iran",
    type: "journal",
    status: "Conference Paper",
    date: "2018-05-01",
    url: "https://www.researchgate.net/publication/370591641_An_Ecological_Exploration_of_Iranian_EFL_Students'_Self-change_Self-construal_and_Change_Management_through_Classroom_Communication_Tasks",
    urlLabel: "View Publication",
    description:
      "Ecological case study following university students over eight months to analyze self-change, self-construal, and change management dynamics in Iranian EFL classrooms.",
    abstract:
      "The main purpose of this study was to scrutinize factors affecting students' self-change (SCH), self-construal (SC), and change management (CM) in English as a foreign language (EFL) classroom in Iran. To this end, eight university students took part in this study; semi-structured interviews, learning journals, and classroom observations over eight months were applied to collect the data. The collected data were qualitatively content analyzed by MAXQDA software based on Bronfenbrenner's (1979, 1993) nested ecosystems model as an analytical framework. Having analyzed the collected data, researchers found six factors influencing students' SCH, SC, and CM at the microsystemic level: students' beliefs, cognitive elements, linguistic knowledge, emotional factors, motivation, and classroom setting. The effect of meso-, exo-, and macrosystem on students' self, were also investigated. The findings, also provided socioculturally constructed evidence as a function of individual interactions and environmental elements.",
  },
  {
    id: 16,
    title:
      "An Exploration of Iranian EFL Stakeholders' Attitudes and Knowledge of Different Types of MOOCs",
    authors: "Reza Khany, Mahdieh Fakhar Shahreza",
    year: "September 2019",
    venue:
      "17th International TELLSI Conference on New Horizons in Language Studies - Islamic Azad University of Tabriz, Iran",
    type: "journal",
    status: "Conference Paper",
    date: "2019-09-01",
    url: "https://www.researchgate.net/publication/370591431_An_Exploration_of_Iranian_EFL_Stakeholders'_Attitudes_and_Knowledge_of_Different",
    urlLabel: "View Publication",
    description:
      "Surveys 326 Iranian EFL stakeholders' familiarity with and attitudes toward different MOOC types, surfacing challenges for classroom integration.",
    abstract:
      "This study was an attempt to scrutinize Iranian EFL stakeholders' attitudes and knowledge of different types massive open online courses (MOOCs). The participants' main challenges and concerns regarding the integration of these new educational technologies in their classrooms were also investigated. Hence, 326 Iranian EFL stakeholders (i.e. 34 teacher trainers, 85 teacher educators, and 206 EFL teachers teaching English at schools, universities, and private language centers) were randomly selected to take part in the study. A researcher-made questionnaire was used to collect the required data. The analyzed data revealed that these three groups of participants were significantly different regarding their attitudes and familiarity with various types of MOOCs; amongst them, teacher trainers were at the highest level of familiarity. However, all the participants indicated highly positive attitudes towards the application and integration of MOOCs in their classrooms. It was further indicated that participants' attitudes and level of familiarity were drastically influenced by their educational degrees, age, and sex. This study has various implications for language teachers, practitioners, and policy makers.",
  },
  {
    id: 15,
    title:
      "Subjectivity and Objectivity in Discussion Sections of Iranian M.A. Thesis and Ph.D. Dissertations; the Case of Hard and Soft Science Fields of Studies",
    authors: "Reza Khany, Mahdieh Fakhar Shahreza",
    year: "October 2019",
    venue:
      "5th International Conference on Language, Discourse, and Pragmatics (LDP) - Shahid Chamran University, Ahvaz, Iran",
    type: "journal",
    status: "Conference Paper",
    date: "2019-10-01",
    url: "https://www.researchgate.net/publication/370591526_Subjectivity_and_Objectivity_in_Discussion_Sections_of_Iranian_MA_Thesis_and_PhD_Dissertations_the_Case_of_Hard_and_Soft_Science_Fields_of_Studies",
    urlLabel: "View Publication",
    description:
      "Examines lexical, syntactic, and rhetorical patterns of subjectivity vs. objectivity markers in discussion sections of Iranian M.A. theses and Ph.D. dissertations across hard and soft science majors.",
    abstract:
      "In this study attempt was made to investigate how subjectivity and objectivity in discussion sections of students' M.A. thesis and Ph.D. dissertations in hard and soft science fields of studies were lexically, syntactically, and rhetorically structured. To this end, 30 M.A. thesis and 30 Ph.D. dissertations from six different majors were randomly selected to be investigated. Thematic analysis (Braun and Clarke, 2006) was used to provide and codify a list of subjective and objective (S & O) markers in the discussion sections. Having applied MAXQDA software, the collected data were analyzed. The findings revealed that there were drastic differences in frequency of using objective markers between hard vs. soft science majors. It was also found that objective markers outperformed in hard science thesis discussion sections; while subjective markers were mostly used in soft science. Furthermore, with regard to the academic levels, improvements were observed at the Ph.D. level as long as the appropriate use of markers was concerned. This study has various implications for researchers, scholars, and higher education students.",
  },
  {
    id: 14,
    title:
      "Research on Educational Technology Evaluation in Journal of Computer and Education; Implications for English Language Teaching.",
    authors: "Reza Khany, Mahdieh Fakhar Shahreza",
    year: "November 2019",
    venue:
      "First International Conference on English Language Studies - Isfahan University, Iran (http://icels.ui.ac.ir/en/)",
    type: "journal",
    status: "Conference Paper",
    date: "2019-11-01",
    url: "https://www.researchgate.net/publication/370591346_Research_on_Educational_Technology_Evaluation_in_Journal_of_Computer_and_Education_Implications_for_English_Language_Teaching",
    urlLabel: "View Publication",
    description:
      "Reviews 2015-2019 Computer & Education journal articles on educational technology evaluation to surface implications for English language teaching research agendas.",
    abstract:
      "Much has been written on the improvements, innovations, applications, and importance of Educational Technologies (ETs) in the field of English Language Teaching (ELT) during the last decade. Hence, the present study aimed at scrutinizing and reviewing the published research articles in the journal of Computer & Education between the years of 2015-2019 to see how the use of ETs is evaluated. In so doing, having determined some inclusion criteria, 732 full-text research articles were included, codified, and tabulated by the researchers to be examined in the analyzing process. The collected data were qualitatively content analyzed using MAXQDA version 12. The analyzed data revealed that the usage design and procedure of more than half of the studies were experimental, testing the application of a new ET by a pre-test and post-test. In addition, it was further found that many new scales and questionnaires were developed, validated, and tested for different dimensions of ETs in ELT. This study has various implications for language teachers, teacher educators, material developers, and researchers.",
  },
  {
    id: 13,
    title:
      "Iranian University Students' Familiarity with Digital Portfolio Creation Tools during the COVID-19 Pandemic: Merits, Demerits",
    authors: "Mohammad Aliakbari, Mahdieh Fakhar Shahreza",
    year: "May 2021",
    venue:
      'International Conference of "Current Trends in the Middle East" - Virtual International Joint Conference on COVID-19, University of Technology, Malaysia & Ilam University, Iran',
    type: "journal",
    status: "Conference Paper",
    date: "2021-05-01",
    url: "https://www.researchgate.net/publication/370591287_Iranian_University_Students'_Familiarity_with_Digital_Portfolio_Creation_Tools_during_the_COVID-19_Pandemic_Merits_Demerits",
    urlLabel: "View Publication",
    description:
      "Assesses how Iranian university students adopted digital portfolio creation tools during COVID-19 virtual instruction, identifying perceived merits and demerits for remote language learning.",
    highlightsOverride: [
      "Authors  : Mohammad Aliakbari, Mahdieh Fakhar Shahreza",
      "Publication date  : May 2021",
      'Conference  : International Conference of "Current Trends in the Middle East": Virtual International Joint Conference on COVID-19, University of Technology, Malaysia and Ilam University, Iran. At: University of Technology, Malaysia and Ilam University, Iran.',
      "Description : Assesses how Iranian university students adopted digital portfolio creation tools during COVID-19 virtual instruction, identifying perceived merits and demerits for remote language learning.",
    ],
  },
  {
    id: 12,
    title:
      "Investigating the Impacts of an Online Writing Platform on EFL Students' Writing and Critical Thinking Skills; The Case of Medium App",
    authors: "Reza Khany, Mahdieh Fakhar Shahreza",
    year: "September 2022",
    venue: "19th International TELLSI Conference - Birjand University, Iran",
    type: "journal",
    status: "Conference Paper",
    date: "2022-09-01",
    url: "https://www.researchgate.net/publication/370591344_Investigating_the_Impacts_of_an_Online_Writing_Platform_on_EFLStudents'_Writing_and_Critical_Thinking_Skills_The_Case_of_Medium_App",
    urlLabel: "View Publication",
    description:
      "Quasi-experimental TELLSI study gauging how a learner-contributed Medium workflow shapes Iranian EFL students' writing quality and critical thinking.",
    abstract:
      "This study set out to investigate the impacts of Medium as an online social media writing platform on Iranian EFL Students' writing skills and to see whether the app is helpful for the development of critical thinking skills among the participating students. In doing so, having taken an open assessment pedagogy, a quasi-experimental design was used, and a total of 62 Iranian EFL students were assigned into an experimental and a control group. The experimental group received their instruction through the app, while the control group took part in face-to-face classroom instruction, taking advantage of traditional language learning activities. Paired and independent sample t-tests were used to analyze the collected data. The results revealed that the experimental group benefited more from the instruction than the control group. Further analysis showed that the students' development of writing and critical thinking skills were more in line with using the app in the experimental group than those in the control group. More specifically, being informed by a learner-contributed approach, the Medium app enabled the students to post their writing assignments in the app and to actively participate in a cyclic process of editing and reediting their assignments while keeping in mind their audience. This could, in turn, motivate them to have a critical perspective toward their own writing and to see how their thinking has changed. Although there are some potential challenges and pitfalls, suggestions regarding the effective deployment of the app are provided.",
  },
  {
    id: 11,
    title: "Teacher Training in Rural Settings: Enhancing Spanish Language Competence through Text-based Pedagogy",
    authors: "G Portol\\u00E9s L\\u00E1zaro, B Sedano Cuevasz, M Fakhar Shahreza",
    year: "2025",
    venue: "Bilingual Publishing Group",
    type: "journal",
    date: "2025-06-11",
    url: "https://doi.org/10.30564/fls.v7i12.9393",
    urlLabel: "View Publication",
    highlightsOverride: [
      "Source  : Bilingual Publishing Group",
      "Authors  : G Portol\\u00E9s L\\u00E1zaro B Sedano Cuevasz, M Fakhar Shahreza",
      "Publication date  : 2025/6/11",
    ],
  },
  {
    id: 10,
    title: "Introduction: Approaches to Machine Translation.",
    authors: "Mahdieh Fakhar, Monica Vilhelm, Paz D\\u00EDez-Arc\\u00F3n",
    year: "2025",
    venue: "Translation & Translanguaging in Multilingual Contexts (TTMC)",
    type: "journal",
    date: "2025-01-01",
    url: "https://search.ebscohost.com/login.aspx?direct=true&profile=ehost&scope=site&authtype=crawler&jrnl=23521805&asa=N&AN=182124521&h=rJc2FcJOU6SpTEACVmfKSNdLKHpOBe%2BK7B1fTUaF3ENE8Qs6rccMsoHHV1eqWr0w%2F1IXkc0CZrUERFgSkexR7w%3D%3D&crl=c",
    urlLabel: "View Publication",
    description:
      "Editorial introduction surveying AI-enabled advances in machine translation, emotion-aware MT, and sector-specific deployment ranging from TEFL to cognitive science.",
    highlightsOverride: [
      "Authors  : Mahdieh Fakhar, Monica Vilhelm, Paz D\\u00EDez-Arc\\u00F3n",
      "Publication date  : 2025/1/1",
      "Description : The article discusses the advancements in Machine Translation (MT) due to Artificial Intelligence (AI) and Computational Linguistics, leading to more accurate and efficient translation systems. It highlights the importance of understanding emotions in translation technology and the integration of MT in various fields like cognitive science and psychology. The special issue focuses on knowledge representation, emotional narrative methodology in Machine Translation Post-editing (MTPE), quality assessment, comparative analysis of Neural Machine Translation (NMT) systems, and the application of NMT technology in Teaching English as a Foreign Language (TEFL). The papers in the issue explore topics such as predicting ternary-compound bracketing, emotional narratives in MTPE, quality assessment in tourism reviews, comparative analysis of NMT systems, and the application of NMT in teaching business English \u2026",
    ],
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
