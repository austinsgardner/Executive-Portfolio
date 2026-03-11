import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Zap, Target, Users } from "lucide-react";
import { Link } from "wouter";
import logoPath from "@assets/Smoky_mountains_lodge_logo_-_circle_1773255012438.png";
import automationImagePath from "@assets/n8n_automation_1773254968583.jpeg";

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

          {/* Featured: Smoky Mountains Lodge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-5xl mx-auto mb-6"
          >
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Featured Case Study</p>
            <Link href="/case-studies/smoky-mountains-lodge">
              <div className="glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 cursor-pointer group">
                <div className="grid md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={automationImagePath}
                      alt="Smoky Mountains Lodge n8n automation"
                      className="w-full h-full object-cover min-h-[260px] group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60 md:block hidden" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <img src={logoPath} alt="Smoky Mountains Lodge" className="w-14 h-14 rounded-full border border-white/10" />
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-widest">Client</p>
                          <p className="font-bold text-white">Smoky Mountains Lodge</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["AI Automation", "Programmatic SEO", "Revenue Ops"].map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border border-primary/20 text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug group-hover:text-primary transition-colors">
                        Automating Intent: How an AI-Powered SEO Flywheel Drives a Forecasted 30% Increase in Direct Bookings
                      </h2>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        A fully autonomous content pipeline using n8n, Apify, and Google Gemini that intercepts travelers at the top of the funnel — capturing them before they ever open an OTA app.
                      </p>
                    </div>
                    <div className="mt-8">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {[
                          { value: "+30%", label: "Direct Bookings" },
                          { value: "100%", label: "Automated Pipeline" }
                        ].map(m => (
                          <div key={m.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                            <p className="text-2xl font-bold text-primary">{m.value}</p>
                            <p className="text-xs text-slate-400 uppercase tracking-wider">{m.label}</p>
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                        Read the Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Executive Case Studies */}
          <div className="max-w-5xl mx-auto mb-8 mt-16">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Executive Leadership Case Studies</p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-4 max-w-5xl mx-auto">
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
