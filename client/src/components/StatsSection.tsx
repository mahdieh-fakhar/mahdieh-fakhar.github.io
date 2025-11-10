import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Stat = {
  value: string | number;
  label: string;
};

type StatsSectionProps = {
  stats: Stat[];
  className?: string;
};

export function StatsSection({ stats, className }: StatsSectionProps) {
  if (!stats.length) {
    return null;
  }

  return (
    <section
      className={cn(
        "rounded-[40px] bg-gradient-to-b from-background to-background/40 p-6 shadow-[0_40px_120px_rgba(37,15,7,0.08)]",
        className,
      )}
      aria-label="Key statistics"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-[32px] border border-white/60 bg-white/90 px-6 py-8 text-center shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
          >
            <p className="text-3xl font-semibold text-primary">{stat.value}</p>
            <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
