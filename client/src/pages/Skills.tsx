import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, BarChart3, Languages, Sparkles } from "lucide-react";

const skillCategories = [
  {
    id: 1,
    category: "Data Analysis & Statistics",
    icon: BarChart3,
    color: "text-primary",
    skills: [
      { name: "R", proficiency: 90 },
      { name: "Python", proficiency: 85 },
      { name: "SPSS", proficiency: 95 },
      { name: "Excel (Advanced)", proficiency: 95 },
      { name: "Statistical Analysis", proficiency: 90 },
    ],
  },
  {
    id: 2,
    category: "Data Visualization",
    icon: BarChart3,
    color: "text-accent",
    skills: [
      { name: "Tableau", proficiency: 85 },
      { name: "Data Visualization", proficiency: 88 },
      { name: "Interactive Dashboards", proficiency: 80 },
    ],
  },
  {
    id: 3,
    category: "Research & Analysis Tools",
    icon: Database,
    color: "text-ai-accent",
    skills: [
      { name: "Structural Equation Modeling (SEM)", proficiency: 90 },
      { name: "Smart-PLS4", proficiency: 88 },
      { name: "Lisrel", proficiency: 85 },
      { name: "Amos", proficiency: 85 },
      { name: "VOSviewer", proficiency: 92 },
      { name: "Nvivo", proficiency: 85 },
      { name: "MAXQDA", proficiency: 83 },
      { name: "Mendeley", proficiency: 90 },
      { name: "Comprehensive Meta-Analysis (CMA)", proficiency: 87 },
    ],
  },
  {
    id: 4,
    category: "Database & Programming",
    icon: Code2,
    color: "text-primary",
    skills: [
      { name: "SQL", proficiency: 80 },
      { name: "Database Automatization", proficiency: 85 },
      { name: "Web Design", proficiency: 78 },
    ],
  },
  {
    id: 5,
    category: "Specialized Analysis",
    icon: Sparkles,
    color: "text-accent",
    skills: [
      { name: "Bibliometric Analysis", proficiency: 95 },
      { name: "Scientometric Analysis", proficiency: 93 },
      { name: "Machine Learning for Research", proficiency: 82 },
      { name: "AI in Data Analysis", proficiency: 80 },
    ],
  },
];

const languageSkills = [
  { language: "English", level: "C1+", certification: "IELTS Certified", proficiency: 95 },
  { language: "Spanish", level: "C1", proficiency: 90 },
  { language: "Persian", level: "Native", proficiency: 100 },
];

export default function Skills() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="stack-gap-md"
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Skills & Expertise</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Technical proficiencies and analytical capabilities
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <div className="stack-gap-md">
            {skillCategories.map((category, catIndex) => {
              const Icon = category.icon;
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <Card className="hover-elevate transition-shadow" data-testid={`card-skill-category-${catIndex}`}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon className={`h-6 w-6 ${category.color}`} />
                        <CardTitle data-testid={`text-category-${catIndex}`}>{category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="auto-grid sm:auto-grid-lg">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="space-y-2" data-testid={`text-skill-${catIndex}-${skillIndex}`}>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <Badge variant="outline" className="text-xs" data-testid={`badge-proficiency-${catIndex}-${skillIndex}`}>
                                {skill.proficiency}%
                              </Badge>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden" data-testid={`progress-${catIndex}-${skillIndex}`}>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.proficiency}%` }}
                                transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                className="h-full bg-gradient-to-r from-primary to-accent"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Language Skills */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Languages className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-semibold">Languages</h2>
          </div>
          <div className="auto-grid md:auto-grid-lg">
            {languageSkills.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-elevate transition-shadow" data-testid={`card-language-${index}`}>
                  <CardContent className="p-6 text-center space-y-3">
                    <h3 className="text-lg font-semibold" data-testid={`text-language-${index}`}>{lang.language}</h3>
                    <Badge variant="default" className="text-sm" data-testid={`badge-level-${index}`}>{lang.level}</Badge>
                    {lang.certification && (
                      <p className="text-xs text-muted-foreground" data-testid={`text-certification-${index}`}>{lang.certification}</p>
                    )}
                    <div className="pt-2">
                      <div className="h-2 bg-muted rounded-full overflow-hidden" data-testid={`progress-language-${index}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.proficiency}%` }}
                          transition={{ duration: 1, delay: index * 0.15 }}
                          className="h-full bg-gradient-to-r from-accent to-primary"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Competencies */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle>Core Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mobile:flex-nowrap mobile:overflow-x-auto mobile:pr-2">
              <Badge variant="secondary" data-testid="badge-competency-advanced-statistical-analysis">Advanced Statistical Analysis</Badge>
              <Badge variant="secondary" data-testid="badge-competency-data-visualization">Data Visualization</Badge>
              <Badge variant="secondary" data-testid="badge-competency-machine-learning">Machine Learning</Badge>
              <Badge variant="secondary" data-testid="badge-competency-database-management">Database Management</Badge>
              <Badge variant="secondary" data-testid="badge-competency-bibliometric-research">Bibliometric Research</Badge>
              <Badge variant="secondary" data-testid="badge-competency-scientific-computing">Scientific Computing</Badge>
              <Badge variant="secondary" data-testid="badge-competency-research-methodology">Research Methodology</Badge>
              <Badge variant="secondary" data-testid="badge-competency-multilingual-communication">Multilingual Communication</Badge>
              <Badge variant="secondary" data-testid="badge-competency-academic-writing">Academic Writing</Badge>
              <Badge variant="secondary" data-testid="badge-competency-data-driven-decision-making">Data-Driven Decision Making</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
