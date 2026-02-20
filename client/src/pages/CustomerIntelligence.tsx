import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Section, SectionHeader } from "@/components/Section";
import { BarChart3, ArrowRight, CheckCircle2, TrendingUp, PieChart, Activity } from "lucide-react";

const USE_CASES = [
  {
    title: "Real-Time Health Engine",
    desc: "Composite health scores pulling product usage, sentiment, and support data into automated alerting pipelines.",
    roi: "25% improvement in proactive intervention rates",
    icon: Activity
  },
  {
    title: "Expansion Propensity Model",
    desc: "Usage-based analytics identifying upsell signals with AI-generated briefs for high-probability expansion.",
    roi: "15% increase in expansion revenue within 6 months",
    icon: TrendingUp
  },
  {
    title: "Early Warning System",
    desc: "Automated pipelines correlating declining engagement to flag contraction risk 60-90 days before renewal.",
    roi: "20% reduction in preventable churn",
    icon: PieChart
  }
];

const PROCESS_STEPS = [
  {
    title: "Audit & Data Mapping",
    desc: "Identifying fragmented customer data across Salesforce, Zendesk, and product logs."
  },
  {
    title: "Signal Engineering",
    desc: "Defining the 'Golden Signals' that actually correlate with customer success or churn."
  },
  {
    title: "Automation Build",
    desc: "Deploying n8n or Zapier workflows to push real-time alerts to Slack/CRM."
  },
  {
    title: "Enablement",
    desc: "Training the team on how to act on health signals for maximum impact."
  }
];

export default function CustomerIntelligence() {
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
              title="Customer Intelligence & Health Systems" 
              subtitle="Moving from 'gut feel' to predictive, data-driven customer management."
            />
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {USE_CASES.map((item, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all">
                  <item.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{item.desc}</p>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Target ROI</p>
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
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
