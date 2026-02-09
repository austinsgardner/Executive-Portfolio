import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MetricsCardProps {
  value: string;
  label: string;
  description?: string;
  delay?: number;
}

export function MetricsCard({ value, label, description, delay = 0 }: MetricsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors tracking-tight">
        {value}
      </div>
      <div className="text-lg font-medium text-blue-200 mb-2">{label}</div>
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
