import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { getAllBadges } from "@/lib/badgeUtils";
import { CareerEvidenceCard, type Slide } from "@/components/career/CareerEvidenceCard";
import { StatsSection } from "@/components/StatsSection";

export default function Certifications() {
  const badges = getAllBadges();
  const issuerCount = new Set(badges.map((badge) => badge.issuer)).size;
  const uniqueSkills = new Set(badges.flatMap((badge) => badge.skills ?? [])).size;
  const latestYear = badges
    .map((badge) => Number(badge.issueDate?.slice(0, 4)))
    .filter((year) => Number.isFinite(year))
    .sort((a, b) => b - a)[0];
  const certificationsStats = [
    { value: badges.length, label: "Verified Credentials" },
    { value: issuerCount, label: "Issuing Bodies" },
    { value: uniqueSkills, label: "Unique Skill Tags" },
    { value: latestYear ?? "—", label: "Latest Issued Year" },
  ];

  const badgeCards = badges.map((badge) => {
    const highlights = [
      `Issuer: ${badge.issuer}`,
      badge.issueDate ? `Issued: ${badge.issueDate}` : "Issued date available on issuer portal",
      badge.summary ?? "Verified digital credential.",
      badge.skills?.length ? `Skills: ${badge.skills.join(", ")}` : "Skills: General professional development",
    ];

    const slides: Slide[] = [
      {
        src: badge.image,
        alt: badge.imageAlt,
        caption: badge.title,
        downloadName: `${badge.slug}.png`,
      },
    ];

    return {
      id: badge.id,
      card: (
        <CareerEvidenceCard
          key={badge.id}
          title={badge.title}
          organization={badge.issuer}
          location="Digital credential"
          period={badge.issueDate ?? "Issued on request"}
          roleLabel="Certification"
          highlights={highlights}
          slides={slides}
          referenceUrl={badge.url}
          referenceLabel="View credential"
        />
      ),
    };
  });

  return (
    <div className="page-template-career">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-primary" />
          <h1 className="text-4xl font-bold">Certifications</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          A living catalogue of verified credentials maintained entirely through the badge data layer.
        </p>
      </motion.div>

      <div className="mt-10 space-y-6">
        {badgeCards.length > 0 ? (
          badgeCards.map(({ id, card }) => <div key={id}>{card}</div>)
        ) : (
          <p className="text-sm text-muted-foreground">
            Add entries to <code>client/src/data/badges.json</code> to surface credentials here automatically.
          </p>
        )}
      </div>
      <StatsSection className="mt-10" stats={certificationsStats} />
    </div>
  );
}
