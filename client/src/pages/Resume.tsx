import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Mail, Linkedin, Github, MapPin } from "lucide-react";
import { BadgePanel } from "@/components/badges/BadgePanel";
import { getBadges } from "@/lib/badgeUtils";

export default function Resume() {
  const resumeBadges = getBadges({ page: "resume" }).filter((badge) => badge.placements.includes("resume"));
  const educationHighlights = [
    "Master's in Big Data & Data Science (In Progress) - UNIR",
    "Master's in ICT for Language Teaching - UNED (GPA: 9.29/10)",
    "Master's in TEFL - University of Ilam (GPA: 9.09/10)",
    "BA in English Translation - Payame Noor (GPA: 7.91/10)",
  ];
  const keySkills = [
    "Data Analysis: R, Python, SPSS, Excel",
    "Visualization: Tableau, Data Dashboards",
    "Research: SEM, Bibliometric Analysis, VOSviewer",
    "Languages: English (C1+), Spanish (C1), Persian (Native)",
  ];
  const experienceSummary = [
    "13+ years teaching experience",
    "Two leadership positions in language institutions",
    "Research collaborator at UNED (IHUPA, AGORA)",
    "Published researcher with 5+ journal articles",
  ];
  const recentAchievements = [
    "Top 100 Master's program in Spain (El Mundo 2023)",
    "EUR 4,000 research fellowship (Iran Ministry of Science)",
    "13+ conference presentations",
    "Reviewer for SAGE Open & EPOS journals",
  ];
  const handleDownload = () => {
    // This will trigger download of a CV file
    // In a real implementation, you would have a PDF file hosted
    alert("CV download functionality will be implemented with actual PDF file");
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Resume</h1>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-xl text-muted-foreground">
              Curriculum Vitae
            </p>
            <Button onClick={handleDownload} className="gap-2" data-testid="button-download-cv">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Personal Information */}
        <Card data-testid="card-personal-info">
          <CardHeader>
            <CardTitle className="text-2xl" data-testid="text-name">MAHDIEH FAKHAR SHAHREZA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span data-testid="text-location">Madrid, Spain</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:mfsh.intl@gmail.com" className="hover:text-primary" data-testid="link-email">
                  mfsh.intl@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="https://www.linkedin.com/in/mahdieh-fakhar-b7319a1a5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  data-testid="link-linkedin"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Github className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="https://github.com/mahdieh-fakhar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  data-testid="link-github"
                >
                  GitHub
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground pt-2" data-testid="text-dob">
              Date of Birth: June 8, 1991
            </p>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card data-testid="card-summary">
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground" data-testid="text-summary">
              Data scientist and researcher with advanced expertise in big data analytics, machine learning, 
              and bibliometric analysis. Currently pursuing Master's in Data Science at UNIR with a strong 
              background in ICT for language teaching. Proficient in R, Python, SPSS, and various statistical 
              analysis tools. Experienced in academic research, teaching, and educational leadership across 
              international institutions.
            </p>
          </CardContent>
        </Card>

        {/* Quick Summary Sections */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card data-testid="card-education-highlights">
            <CardHeader>
              <CardTitle className="text-lg">Education Highlights</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="list-disc space-y-1 pl-5 marker:text-primary">
                {educationHighlights.map((item, index) => (
                  <li key={item} data-testid={`text-education-highlight-${index}`}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card data-testid="card-key-skills">
            <CardHeader>
              <CardTitle className="text-lg">Key Skills</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="list-disc space-y-1 pl-5 marker:text-primary">
                {keySkills.map((item, index) => (
                  <li key={item} data-testid={`text-skill-item-${index}`}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card data-testid="card-experience-summary">
            <CardHeader>
              <CardTitle className="text-lg">Experience Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="list-disc space-y-1 pl-5 marker:text-primary">
                {experienceSummary.map((item, index) => (
                  <li key={item} data-testid={`text-experience-item-${index}`}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card data-testid="card-achievements">
            <CardHeader>
              <CardTitle className="text-lg">Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="list-disc space-y-1 pl-5 marker:text-primary">
                {recentAchievements.map((item, index) => (
                  <li key={item} data-testid={`text-achievement-item-${index}`}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Full CV Notice */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5" data-testid="card-cv-notice">
          <CardContent className="p-6 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              For a comprehensive view of my academic achievements, publications, and professional experience, 
              please download the full CV or explore the detailed sections of this portfolio.
            </p>
            <Button onClick={handleDownload} size="lg" className="gap-2" data-testid="button-download-cv-full">
              <Download className="h-4 w-4" />
              Download Complete CV
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
