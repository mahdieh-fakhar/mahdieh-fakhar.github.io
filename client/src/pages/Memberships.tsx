import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Building2 } from "lucide-react";

const memberships = [
  {
    id: 1,
    organization: "EPOS Journal of Philology, UNED",
    role: "Reviewer",
    period: "2022",
    description: "Peer review of academic articles in philology and language studies",
  },
  {
    id: 2,
    organization: "SAGE Open, SAGE Publishing, USA",
    role: "Reviewer",
    period: "2022",
    description: "International peer review for open access multidisciplinary journal",
  },
  {
    id: 3,
    organization: "IHUPA Research Institute",
    role: "Research Collaborator",
    period: "2021–2023",
    description: "Institute for Research in Humanities and Heritage, UNED-Alcañiz",
  },
  {
    id: 4,
    organization: "AGORA Project",
    role: "Research Team Member",
    period: "2022–2025",
    description: "Spanish Ministry of Science and Innovation funded project on language teaching innovations",
  },
  {
    id: 5,
    organization: "ATLAS Research Group, UNED",
    role: "Research Fellow",
    period: "2022",
    description: "6-month fellowship for research in language teaching and technology",
  },
];

export default function Memberships() {
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
            <Award className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Memberships</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Professional affiliations and academic collaborations
          </p>
        </div>

        {/* Memberships Grid */}
        <div className="auto-grid md:auto-grid-lg">
          {memberships.map((membership, index) => (
            <motion.div
              key={membership.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover-elevate transition-shadow h-full" data-testid={`card-membership-${index}`}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-muted-foreground mt-1" />
                    <div className="flex-1 space-y-2">
                      <CardTitle className="text-lg" data-testid={`text-organization-${index}`}>{membership.organization}</CardTitle>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="default" data-testid={`badge-role-${index}`}>{membership.role}</Badge>
                        <Badge variant="outline" data-testid={`badge-period-${index}`}>{membership.period}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground" data-testid={`text-description-${index}`}>{membership.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">Academic Contributions</h3>
            <p className="text-sm text-muted-foreground">
              Active participant in peer review processes and research collaborations across international 
              academic institutions. Contributing to the advancement of knowledge in language teaching, 
              educational technology, and data science research.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
