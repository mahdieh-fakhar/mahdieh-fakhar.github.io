import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CredlyBadge } from "@/components/CredlyBadge";
import { Languages, MapPin, Sparkles, Target, Award } from "lucide-react";

export default function About() {
  const languages = [
    { name: "English", level: "C1+ / IELTS Certified" },
    { name: "Spanish", level: "C1" },
    { name: "Persian", level: "Native" },
  ];

  const interests = [
    "Analyzing data with advanced statistical methods",
    "Scientometric and bibliometric analysis",
    "Learning new software and applications for data analysis",
    "Data visualization and interactive dashboards",
    "Machine learning applications in research",
    "Database automatization and digitalization",
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-ai-accent" />
            <h1 className="text-4xl font-bold" data-testid="heading-about">About Me</h1>
          </div>
          <p className="text-xl text-muted-foreground" data-testid="text-subtitle">
            Data Scientist & Researcher
          </p>
        </div>

        {/* Bio Section */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed" data-testid="text-summary-1">
              I'm currently a Momentum master student of data science and big data at Universidad Internacional 
              de La Rioja (UNIR), Spain. I enjoy analyzing data, doing scientometric and bibliometric analysis, 
              and learning new software.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-summary-2">
              I am passionate about learning new software and applications employed in data analysis. By leveraging 
              my research and analysis experience, I continually look for new and better ways to take advantage of 
              technology in favor of analysis in general and humankind in particular.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground pt-2">
              <MapPin className="h-4 w-4" />
              <span data-testid="text-location">Based in Madrid, Spain</span>
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="h-5 w-5" />
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {languages.map((lang, index) => (
                <div key={lang.name} className="space-y-1" data-testid={`item-language-${index}`}>
                  <p className="font-medium" data-testid={`text-language-name-${index}`}>{lang.name}</p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-language-level-${index}`}>{lang.level}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Research Interests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Research Interests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <Badge key={interest} variant="secondary" className="text-sm" data-testid={`badge-interest-${index}`}>
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Credly Certification */}
        <Card className="bg-gradient-to-br from-secondary/10 via-background to-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Verified Credentials
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Credly hosts my authenticated certifications, highlighting continued professional growth
              across data science and analytics.
            </p>
            <CredlyBadge />
          </CardContent>
        </Card>

        {/* Current Work */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle data-testid="heading-current-doing">What I'm Currently Doing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold" data-testid="heading-current-studying">🎓 Studying</h3>
              <p className="text-muted-foreground" data-testid="text-current-studying">
                Master's in Big Data and Data Science at UNIR, focusing on advanced analytics, 
                machine learning, and data-driven decision making.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold" data-testid="heading-current-working">💼 Working</h3>
              <p className="text-muted-foreground" data-testid="text-current-working">
                Data analysis and digitalization of databases, applying cutting-edge techniques 
                to transform raw data into actionable insights.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold" data-testid="heading-current-learning">📚 Learning</h3>
              <p className="text-muted-foreground" data-testid="text-current-learning">
                Continuously expanding my knowledge in data analysis with R, Python, and Artificial Intelligence, 
                as well as exploring new tools for data visualization and database automatization.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold" data-testid="heading-current-looking">🔍 Looking For</h3>
              <p className="text-muted-foreground" data-testid="text-current-looking">
                Opportunities to participate in courses on data analysis, data visualization, AI in data analysis, 
                and digitalization of databases to further enhance my expertise.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
