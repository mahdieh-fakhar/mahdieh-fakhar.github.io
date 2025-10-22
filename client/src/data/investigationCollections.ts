export type ThesisRecord = {
  id: string;
  title: string;
  degree: string;
  institution: string;
  year: string;
  focus: string;
  summary: string;
};

export type HandbookEntry = {
  id: string;
  title: string;
  domain: string;
  format: "Guide" | "Protocol" | "Toolkit";
  summary: string;
};

export const thesisRecords: ThesisRecord[] = [
  {
    id: "phd-teacher-change",
    title: "Teacher Change in EFL Contexts",
    degree: "PhD in Applied Linguistics",
    institution: "Azad University, Tehran",
    year: "2016",
    focus: "MA and PhD supervision portfolio",
    summary:
      "Designed a mixed-methods scale to capture behavioural and attitudinal shifts across 200+ secondary school English teachers participating in national reform programmes.",
  },
  {
    id: "masters-technology-reading",
    title: "Technology-Mediated Reading Continuum",
    degree: "M.A. in Educational Technology",
    institution: "Universidad Internacional de La Rioja (UNIR)",
    year: "2024",
    focus: "Digital literacy ecosystems & AI annotation",
    summary:
      "Mapped two decades of classroom pilots that combine adaptive platforms, blended reading labs, and AI feedback loops to drive comprehension gains in Spanish secondary schools.",
  },
  {
    id: "masters-bilingual-policy",
    title: "Bilingual Policy Implementation Playbook",
    degree: "M.A. in Applied Linguistics",
    institution: "Allameh Tabataba'i University",
    year: "2012",
    focus: "Curriculum transformation within CLIL frameworks",
    summary:
      "Delivered a policy and training blueprint that helped three regional education boards transition to bilingual content delivery through CLIL-aligned lesson design.",
  },
];

export const handbookEntries: HandbookEntry[] = [
  {
    id: "ai-lab-guide",
    title: "AI Lab Deployment Guide",
    domain: "Innovation Labs",
    format: "Toolkit",
    summary:
      "Step-by-step playbook covering infrastructure, governance, and impact measurement for universities launching applied AI laboratories.",
  },
  {
    id: "bibliometrics-protocol",
    title: "Bibliometrics & Scientometrics Protocol",
    domain: "Research Analytics",
    format: "Protocol",
    summary:
      "Reusable methodology for citation mining, co-authorship mapping, and research trend forecasting across multilingual corpora.",
  },
  {
    id: "digital-competence-handbook",
    title: "Digital Competence for Educators",
    domain: "Professional Development",
    format: "Guide",
    summary:
      "Modular handbook aligning UNESCO's digital literacy framework with practical classroom scenarios and assessment rubrics.",
  },
];
