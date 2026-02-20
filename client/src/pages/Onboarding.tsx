import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Section, SectionHeader } from "@/components/Section";
import { Zap, Clock, Rocket, ShieldCheck, Timer, MousePointer2 } from "lucide-react";

const USE_CASES = [
  {
    title: "Readiness Assessment",
    desc: "Structured pre-implementation frameworks and automated intake workflows to eliminate Sales-to-CS friction.",
    roi: "40% reduction in handoff delays",
    icon: ShieldCheck
  },
  {
    title: "Implementation Machine",
    desc: "Align → Setup → Active Customer frameworks with project plans, milestone tracking, and capacity dashboards.",
    roi: "50% faster time-to-first-value (TTFV)",
    icon: Rocket
  },
  {
    title: "Digital-Touch Lifecycle",
    desc: "Automated, AI-personalized journey content (emails/in-app) triggered by critical behavior milestones.",
    roi: "30% increase in feature adoption rates",
    icon: MousePointer2
  }
];

const PROCESS_STEPS = [
  {
    title: "Journey Mapping",
    desc: "Visualizing the ideal customer path from contract signature to first value."
  },
  {
    title: "Friction Audit",
    desc: "Identifying where customers get stuck or drop off during the first 30 days."
  },
  {
    title: "Framework Design",
    desc: "Building the standard operating procedures (SOPs) for implementation and training."
  },
  {
    title: "Automation Implementation",
    desc: "Setting up automated welcome sequences and milestone tracking."
  }
];

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20">
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader 
              title="Onboarding & Time-to-Value" 
              subtitle="Building the 'Implementation Machine' that secures the second sale during the first 30 days."
            />
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {USE_CASES.map((item, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all">
                  <item.icon className="w-10 h-10 text-emerald-400 mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{item.desc}</p>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-1">Target ROI</p>
                    <p className="text-white font-medium">{item.roi}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-10 text-center">The Delivery Process</h3>
              <div className="space-y-6">
                {PROCESS_STEPS.map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-xl bg-slate-900/50 border border-white/5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-xl">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Section>
      </div>
    </div>
  );
}
