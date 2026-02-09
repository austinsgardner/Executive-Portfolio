import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32 relative", className)}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 md:mb-20", centered && "text-center max-w-2xl mx-auto")}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 bg-gradient-to-r from-primary to-transparent mt-6 rounded-full",
        centered && "mx-auto"
      )} />
    </motion.div>
  );
}
