import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Zap, Target, Sparkles, Workflow, Bot } from "lucide-react";

const CASE_STUDIES = [
  {
    title: "CX Health Intelligence Dashboard",
    company: "AI-Native CX Ops Prototype",
    period: "Built with Claude Code · 2026",
    challenge:
      "Unify product telemetry, support tickets, customer health, renewal pipeline, and CRM signals into a single live operating view that an executive could actually use.",
    solution:
      "Designed and built an end-to-end interactive dashboard in a 20-minute Claude Code session — 5 tabs, 12 visualizations, sortable tables, account drill-down modals, and global filters in a single 1,700-line HTML artifact.",
    results: [
      "20-minute brief-to-prototype build",
      "5 data sources unified into one view",
      "200 accounts, 500 tickets simulated",
      "Live, click-through interactive demo",
    ],
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    tags: ["AI-Native Ops", "Claude Code", "Prototype"],
    href: "/case-studies/cx-health-dashboard",
    featured: true,
    cta: "View live prototype",
  },
  {
    title: "Smoky Mountains Lodge: AI-Powered SEO Flywheel",
    company: "Smoky Mountains Lodge",
    period: "2026 · Luxury Short-Term Rentals",
    challenge:
      "Short-term rental operator losing up to 15% of revenue to OTA platform fees, with no scalable way to capture high-intent travelers searching for local events before they ever opened Airbnb or VRBO.",
    solution:
      "Architected the 'Event Horizon' engine — a fully autonomous programmatic SEO pipeline using n8n, Apify, and Google Gemini. Weekly trigger scrapes high-traffic local events, AI filters and drafts an 800-word branded guide, then auto-publishes to WordPress with zero manual touch.",
    results: [
      "+30% Forecasted Direct Bookings",
      "+30% Forecasted Organic Traffic",
      "100% Automated Content Pipeline",
      "-15% OTA Fee Dependency",
    ],
    icon: <Workflow className="w-6 h-6 text-blue-400" />,
    tags: ["AI Automation", "Programmatic SEO", "Revenue Ops"],
    href: "/case-studies/smoky-mountains-lodge",
    cta: "Read the full case study",
  },
  {
    title: "AskAgent: 90% Ticket Deflection via RAG-Based LLM",
    company: "Higharc",
    period: "2025 · AI Support Tooling",
    challenge:
      "A high-velocity Series B–C platform was generating support tickets faster than human capacity could absorb. Institutional knowledge lived in 125+ recorded training sessions, scattered SOPs, and PDF documentation — none of it searchable, none of it deflecting load.",
    solution:
      "Designed and shipped AskAgent, a custom RAG-based LLM support tool built on Replit. Captured expertise into 695+ tagged knowledge blocks, ran a 16-person validation hackathon, and architected a multi-model interface across 8 LLMs (Claude, OpenAI, Gemini) with cost-optimized intelligent defaults.",
    results: [
      "90% Ticket Deflection",
      "695+ Knowledge Blocks Curated",
      "125+ Training Sessions Transcribed",
      "8-LLM Multi-Model Architecture",
    ],
    icon: <Bot className="w-6 h-6 text-emerald-400" />,
    tags: ["RAG / LLM", "AI Tooling", "Support Automation"],
    href: "/case-studies/ask-agent",
    cta: "Read the full case study",
  },
  {
    title: "Higharc: Scaling Global CX to 112% NRR",
    company: "Higharc",
    period: "2024 - 2025",
    challenge:
      "Scaling a post-sales organization for a high-velocity Series B homebuilding platform with $350K+ ACV accounts.",
    solution:
      "Built a 60-person global organization across Implementation, Success, and Support. Implemented data-driven health frameworks and automated executive reporting.",
    results: [
      "112% Net Revenue Retention (NRR)",
      "<1% Logo Churn",
      "45% reduction in Time-to-Value",
      "$1M+ in new Professional Services revenue",
    ],
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    tags: ["Scaling", "NRR", "Global Teams"],
  },
  {
    title: "Syncari: 50% TTV Reduction via Automation",
    company: "Syncari",
    period: "2022 - 2024",
    challenge:
      "Complex data automation platform with long implementation cycles and friction in the Sales-to-CS handoff.",
    solution:
      "Reorganized CX functions and built an 'Implementation Machine'. Developed standardized readiness frameworks and n8n-powered automation.",
    results: [
      "50% reduction in Time-to-Value",
      "110%+ NRR for 4 consecutive quarters",
      "3x expansion revenue growth",
      "Board-level CX dashboard implementation",
    ],
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    tags: ["Automation", "TTV", "Data Ops"],
  },
  {
    title: "Shopmonkey: Building the CS & Payments Engine",
    company: "Shopmonkey",
    period: "2020 - 2022",
    challenge:
      "Hyper-growth Series A-to-C startup needing a scalable Success function and new revenue streams.",
    solution:
      "Built the CS function from zero to 16 members. Launched the Payments team to integrate fintech solutions into the core SaaS product.",
    results: [
      "3x YoY Revenue Expansion",
      "99% Gross Retention on $21M+ portfolio",
      "8x MRR growth via integrated Payments",
      "Scaled CSM team from 3 to 16",
    ],
    icon: <Target className="w-6 h-6 text-purple-400" />,
    tags: ["Fintech", "Hyper-growth", "Team Building"],
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20">
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title="Executive Case Studies"
              subtitle="Deep dives into strategic interventions and the measurable results they delivered."
              centered
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-12 mt-16 max-w-5xl mx-auto">
            {CASE_STUDIES.map((study, i) => {
              const cardInner = (
                <Card
                  className={`glass-card overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-500 ${
                    study.href ? "cursor-pointer hover:shadow-2xl hover:shadow-primary/10" : ""
                  }`}
                >
                  <div className="grid md:grid-cols-5 h-full">
                    <div className="md:col-span-2 bg-slate-900/50 p-8 flex flex-col justify-between border-r border-white/5">
                      <div>
                        <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit">{study.icon}</div>
                        {study.featured && (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
                            <Sparkles className="w-3 h-3" />
                            Featured · Interactive Prototype
                          </div>
                        )}
                        <h2 className="text-2xl font-bold text-white mb-2">{study.company}</h2>
                        <p className="text-primary font-medium mb-4">{study.period}</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {study.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-white/5 text-slate-300"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-6 border-t border-white/5">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                          Key Results
                        </p>
                        <ul className="space-y-3">
                          {study.results.map((result, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-sm text-emerald-400 font-semibold"
                            >
                              <ArrowRight className="w-3 h-3" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="md:col-span-3 p-8 md:p-12">
                      <div className="mb-8">
                        <h3 className="text-lg font-bold text-white mb-3">The Challenge</h3>
                        <p className="text-slate-400 leading-relaxed italic">
                          "{study.challenge}"
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3">Strategic Intervention</h3>
                        <p className="text-slate-300 leading-relaxed">{study.solution}</p>
                      </div>
                      <span className="mt-10 inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group">
                        {study.cta || "Inquire about similar results"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Card>
              );

              return (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {study.href ? (
                    <Link href={study.href}>
                      <a className="block">{cardInner}</a>
                    </Link>
                  ) : (
                    cardInner
                  )}
                </motion.div>
              );
            })}
          </div>
        </Section>
      </main>
    </div>
  );
}
