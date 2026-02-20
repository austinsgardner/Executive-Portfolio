import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface MetricsCardProps {
  value: string;
  label: string;
  description?: string;
  delay?: number;
}

function CountUp({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  // Extract number and suffix (e.g., "112" and "%")
  const numericMatch = value.match(/(\d+)/);
  const numberValue = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = value.replace(String(numberValue), "");
  const prefix = value.match(/^[^\d]+/)?.[0] || "";
  const cleanSuffix = suffix.replace(prefix, "");

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numberValue);
    }
  }, [isInView, spring, numberValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplayValue(Math.floor(latest).toLocaleString());
    });
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{cleanSuffix}
    </span>
  );
}

export function MetricsCard({ value, label, description, delay = 0 }: MetricsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover-elevate group"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors tracking-tight">
        <CountUp value={value} />
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
