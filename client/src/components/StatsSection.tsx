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
  return null;
}
