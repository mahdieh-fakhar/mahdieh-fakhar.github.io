import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { BadgePanel } from "@/components/badges/BadgePanel";
import { getAllBadges } from "@/lib/badgeUtils";

export default function Certifications() {
  const badges = getAllBadges();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
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

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {badges.map((badge) => (
          <BadgePanel key={badge.id} badge={badge} layout="grid" />
        ))}
        {badges.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Add entries to <code>client/src/data/badges.json</code> to surface credentials here automatically.
          </p>
        )}
      </div>
    </div>
  );
}
