import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Section, SectionHeader } from "@/components/Section";
import { Target, Layout, MessageSquare, Cpu, BarChart, Settings } from "lucide-react";

const USE_CASES = [
  {
    title: "Executive Dashboards",
    desc: "Board-ready reporting for NRR, GRR, and team performance automated via n8n/BI tools.",
    roi: "10+ hours saved weekly on manual reporting",
    icon: BarChart
  },
  {
    title: "Journey Architecture",
    desc: "End-to-end strategic blueprints for post-sales stages and transitions.",
    roi: "Unified customer experience across all touchpoints",
    icon: Layout
  },
  {
    title: "VoC Feedback Loop",
    desc: "Structured systems surfacing customer insights directly to Product via AI classification.",
    roi: "Product roadmap alignment with top 20% of revenue",
    icon: MessageSquare
  },
  {
    title: "AI-Powered Support",
    desc: "LLM-powered deflection systems and automated triage for global support orgs.",
    roi: "90% reduction in Tier 1 ticket volume",
    icon: Cpu
  }
];

const PROCESS_STEPS = [
  {
    title: "Infrastructure Audit",
    desc: "Evaluating the current tech stack (CRM, Support, BI) for scalability bottlenecks."
  },
  {
    title: "Strategic Alignment",
    desc: "Mapping CX outcomes to executive-level business goals (NRR, EBITDA)."
  },
  {
    title: "System Integration",
    desc: "Connecting disparate data sources into a single source of truth for the CX team."
  },
  {
    title: "Scale Modeling",
    desc: "Planning the headcount and automation mix for the next 12-24 months of growth."
  }
];

export default function CXStrategy() {
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
              title="CX Strategy & Infrastructure" 
              subtitle="Building the foundation for a world-class, scalable Customer Experience organization."
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {USE_CASES.map((item, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all">
                  <item.icon className="w-10 h-10 text-purple-400 mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{item.desc}</p>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-1">Target ROI</p>
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-xl">
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
