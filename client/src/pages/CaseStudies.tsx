import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Section, SectionHeader } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Zap, Target, Users, Sparkles, Clock, Database, Layers, ExternalLink, Maximize2 } from "lucide-react";

const CASE_STUDIES = [
  {
    title: "Higharc: Scaling Global CX to 112% NRR",
    company: "Higharc",
    period: "2024 - 2025",
    challenge: "Scaling a post-sales organization for a high-velocity Series B homebuilding platform with $350K+ ACV accounts.",
    solution: "Built a 60-person global organization across Implementation, Success, and Support. Implemented data-driven health frameworks and automated executive reporting.",
    results: [
      "112% Net Revenue Retention (NRR)",
      "<1% Logo Churn",
      "45% reduction in Time-to-Value",
      "$1M+ in new Professional Services revenue"
    ],
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    tags: ["Scaling", "NRR", "Global Teams"]
  },
  {
    title: "Syncari: 50% TTV Reduction via Automation",
    company: "Syncari",
    period: "2022 - 2024",
    challenge: "Complex data automation platform with long implementation cycles and friction in the Sales-to-CS handoff.",
    solution: "Reorganized CX functions and built an 'Implementation Machine'. Developed standardized readiness frameworks and n8n-powered automation.",
    results: [
      "50% reduction in Time-to-Value",
      "110%+ NRR for 4 consecutive quarters",
      "3x expansion revenue growth",
      "Board-level CX dashboard implementation"
    ],
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    tags: ["Automation", "TTV", "Data Ops"]
  },
  {
    title: "Shopmonkey: Building the CS & Payments Engine",
    company: "Shopmonkey",
    period: "2020 - 2022",
    challenge: "Hyper-growth Series A-to-C startup needing a scalable Success function and new revenue streams.",
    solution: "Built the CS function from zero to 16 members. Launched the Payments team to integrate fintech solutions into the core SaaS product.",
    results: [
      "3x YoY Revenue Expansion",
      "99% Gross Retention on $21M+ portfolio",
      "8x MRR growth via integrated Payments",
      "Scaled CSM team from 3 to 16"
    ],
    icon: <Target className="w-6 h-6 text-purple-400" />,
    tags: ["Fintech", "Hyper-growth", "Team Building"]
  }
];

const HERO_STATS = [
  { label: "Brief to live prototype", value: "20 min", icon: <Clock className="w-5 h-5" /> },
  { label: "Data sources unified", value: "5", icon: <Database className="w-5 h-5" /> },
  { label: "Accounts modeled", value: "200", icon: <Users className="w-5 h-5" /> },
  { label: "Operating views", value: "5", icon: <Layers className="w-5 h-5" /> },
];

const DATA_SOURCES = [
  { name: "Product Telemetry", detail: "Module adoption, DAU, document volume, API & CRM connectivity" },
  { name: "Support Tickets", detail: "Volume, category, CSAT, resolution time, AI deflection rate" },
  { name: "Customer Health", detail: "Composite score from adoption × NPS × engagement × support burden" },
  { name: "Renewal & CRM", detail: "Contract dates, renewal likelihood, expansion opportunities, CSQLs" },
  { name: "CSM Activity", detail: "Book of business, capacity utilization, NDR by motion, dedicated vs. pooled" },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20">
        {/* ===== Featured Prototype: CX Health Intelligence Dashboard ===== */}
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Prototype · Built with Claude Code
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              CX Health Intelligence: <span className="text-gradient">20 Minutes from Brief to Live Dashboard</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              An interactive operating view that unifies product telemetry, support tickets, customer health, renewal pipeline, and CRM signals — built end-to-end in a single Claude Code session. Click any tab, hover any chart, drill into any account.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent mt-6 rounded-full" />
          </motion.div>

          {/* Hero stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-6xl mx-auto"
          >
            {HERO_STATS.map((stat) => (
              <Card key={stat.label} className="glass-card border-white/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    {stat.icon}
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Brief / Build / Data sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto"
          >
            <Card className="glass-card border-white/5">
              <CardContent className="p-6">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">The Brief</p>
                <p className="text-slate-300 leading-relaxed text-sm">
                  A CX Ops leader needs the full health picture across product, support, success, and renewal — but the data lives in five different systems. Build the unified operating view, and make it interactive enough to answer real executive questions.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/5">
              <CardContent className="p-6">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Built in Claude Code</p>
                <p className="text-slate-300 leading-relaxed text-sm">
                  One conversation, one single-file artifact: ~1,700 lines including a deterministic data generator (200 accounts, 500 tickets, 12 CSMs, 12 months of trend), 12 Chart.js visualizations, sortable tables, account drill-down modals, and a global filter bar. No build step, no backend, no external dependencies beyond Chart.js.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/5">
              <CardContent className="p-6">
                <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">Why This Matters</p>
                <p className="text-slate-300 leading-relaxed text-sm">
                  The leverage isn't the dashboard — it's the speed. What used to take a quarter, a BI vendor, and three integration projects now takes a morning. CX Ops leaders can prototype, share, and iterate operating views in real time. AI-native ops is no longer a future capability — it's a current advantage.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Data sources detail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 max-w-6xl mx-auto"
          >
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Data Sources Unified</p>
            <div className="grid md:grid-cols-5 gap-3">
              {DATA_SOURCES.map((src) => (
                <div key={src.name} className="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-primary/30 transition-colors">
                  <p className="font-bold text-white text-sm mb-1">{src.name}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{src.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Live embedded dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-12 max-w-7xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Live Interactive Prototype</p>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Try it yourself — click tabs, hover charts, drill into accounts
                </h3>
              </div>
              <a
                href="/cx-health-dashboard.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary text-sm font-semibold transition-all"
              >
                <Maximize2 className="w-4 h-4" />
                Open in full screen
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 bg-slate-950">
              <iframe
                src="/cx-health-dashboard.html"
                title="CX Health Intelligence Dashboard"
                className="w-full"
                style={{ height: "85vh", minHeight: "720px", border: 0 }}
                loading="lazy"
              />
            </div>
            <p className="text-xs text-slate-500 mt-3 text-center">
              Tip: this is a live, fully interactive HTML artifact — all 200 simulated accounts, 500 tickets, 12 CSMs, and 12 months of trend data are deterministically generated client-side. No backend.
            </p>
          </motion.div>
        </Section>

        {/* ===== Existing Case Studies ===== */}
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
            {CASE_STUDIES.map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass-card overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-500">
                  <div className="grid md:grid-cols-5 h-full">
                    <div className="md:col-span-2 bg-slate-900/50 p-8 flex flex-col justify-between border-r border-white/5">
                      <div>
                        <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit">
                          {study.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">{study.company}</h2>
                        <p className="text-primary font-medium mb-4">{study.period}</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {study.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-white/5 text-slate-300">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-6 border-t border-white/5">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Key Results</p>
                        <ul className="space-y-3">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-emerald-400 font-semibold">
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
                        <p className="text-slate-300 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                      <button className="mt-10 inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group">
                        Inquire about similar results
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
