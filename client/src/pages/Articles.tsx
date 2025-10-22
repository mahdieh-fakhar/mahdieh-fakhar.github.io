import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";
import {
  publications,
  conferenceProceedings,
  researchFocusAreas,
  type Publication,
} from "@/data/researchOutputs";

const publicationTypeVariant: Record<Publication["type"], "default" | "secondary" | "outline"> = {
  journal: "default",
  book: "secondary",
  review: "outline",
};

const PublicationCards = ({ items }: { items: Publication[] }) => (
  <div className="stack-gap-md">
    {items.map((pub, index) => (
      <motion.div
        key={pub.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
      >
        <Card className="hover-elevate transition-shadow" data-testid={`card-publication-${index}`}>
          <CardHeader>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <CardTitle className="text-lg">{pub.title}</CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant={publicationTypeVariant[pub.type]} className="capitalize">
                  {pub.type}
                </Badge>
                {pub.status && <Badge variant="outline">{pub.status}</Badge>}
                <Badge variant="outline">{pub.year}</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{pub.authors}</p>
            <p className="text-sm font-medium text-primary">{pub.venue}</p>
          </CardHeader>
          {pub.description && (
            <CardContent>
              <p className="text-sm text-muted-foreground">{pub.description}</p>
            </CardContent>
          )}
        </Card>
      </motion.div>
    ))}
  </div>
);

export default function Articles() {
  const journalPublications = publications.filter((pub) => pub.type === "journal");
  const reviewPublications = publications.filter((pub) => pub.type === "review");

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
            <BookOpen className="h-6 w-6 text-accent" />
            <h1 className="text-4xl font-bold">Publications & Articles</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Research contributions to academic literature
          </p>
        </div>

        {/* Journal Publications */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Indexed Journal Publications</h2>
          <PublicationCards items={journalPublications} />
        </div>

        {/* Conference Proceedings */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Conference Proceedings</h2>
          <Card>
            <CardHeader>
              <CardTitle>Notable Conferences (13+ papers)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Full conference paper list available in digital portfolio
              </p>
              <div className="auto-grid">
                {conferenceProceedings.map((conf, index) => (
                  <div
                    key={conf}
                    className="flex items-center gap-2 text-sm"
                    data-testid={`text-conference-${index}`}
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <span>{conf}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Review Articles */}
        {reviewPublications.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Book Reviews & Commentaries</h2>
            <PublicationCards items={reviewPublications} />
          </div>
        )}

        {/* Research Focus Areas */}
        <Card className="bg-gradient-to-br from-accent/5 to-primary/5">
          <CardHeader>
            <CardTitle>Research Focus Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mobile:flex-nowrap mobile:overflow-x-auto mobile:pr-2">
              {researchFocusAreas.map((area) => (
                <Badge key={area} variant="secondary">
                  {area}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
