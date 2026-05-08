import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { MetricsCard } from "@/components/MetricsCard";
import { ArrowRight, ArrowLeft, CheckCircle2, Zap, BarChart3, BookOpen, Users, Layers } from "lucide-react";
import { Link } from "wouter";
import higharc_logo from "@assets/higharc_logo_1773258084228.png";
import askAgentGif from "@assets/AskAgent_demo_1773258084228.gif";
import llmModelsImg from "@assets/LLM_selectable_models_1773258084228.png";

const PHASES = [
  {
    num: "01",
    title: "Knowledge Capture & Architecture",
    color: "border-blue-500",
    labelColor: "text-blue-400",
    items: [
      "Knowledge Block System with tagging by product area, complexity & use case",
      "Transcription engine converting 125+ recorded training sessions into searchable text",
      "Bulk PDF upload & parsing of SOPs, guides, and documentation",
      "Multi-model chat interface across 8 LLMs (Claude, OpenAI, Gemini)"
    ]
  },
  {
    num: "02",
    title: "Content Sprint — 1,000 Blocks in 90 Days",
    color: "border-purple-500",
    labelColor: "text-purple-400",
    items: [
      "Training transcriptions decomposed into discrete instructional blocks",
      "Manual expert submissions from Implementation & Support engineers",
      "PDF documentation parsed into the knowledge base",
      "Knowledge block volume tracked as a department KPI (30%+ QoQ growth target)"
    ]
  },
  {
    num: "03",
    title: "Validation Hackathon",
    color: "border-emerald-500",
    labelColor: "text-emerald-400",
    items: [
      "16-person structured QA session across Implementation & Training org",
      "Participants scored responses: Accurate, Partially Accurate, or Inaccurate",
      "Flagged items routed back to knowledge block owners for immediate refinement",
      "Human-in-the-loop training cycle surfacing systemic accuracy gaps"
    ]
  },
  {
    num: "04",
    title: "Model Selection & Cost Optimization",
    color: "border-orange-500",
    labelColor: "text-orange-400",
    items: [
      "Continuous evaluation across output quality, context handling & cost efficiency",
      "Gemini models consistently outperformed on large document processing",
      "Multi-model architecture enabled agility as providers released updates",
      "Intelligent defaults set while keeping model switching for edge cases"
    ]
  },
  {
    num: "05",
    title: "Additive vs. Subtractive Training Breakthrough",
    color: "border-red-500",
    labelColor: "text-red-400",
    items: [
      "Additive: fill gaps with new blocks, transcriptions, documentation",
      "Subtractive: delete outdated, contradictory, or redundant blocks causing hallucinations",
      "Removing overlapping content that created retrieval confusion",
      "Framework: \"Additive fills gaps. Subtractive fixes hallucinations.\""
    ]
  }
];

const LEARNINGS = [
  { icon: <BookOpen className="w-5 h-5 text-primary" />, title: "Treat knowledge curation like product management", desc: "Knowledge blocks are a living product requiring roadmapping, QA, iteration, and deprecation — tracked as a department KPI." },
  { icon: <Zap className="w-5 h-5 text-purple-400" />, title: "Subtractive training is as important as additive", desc: "Contradictory, redundant, or outdated content causes hallucinations. Pruning is a discipline, not a failure." },
  { icon: <Layers className="w-5 h-5 text-emerald-400" />, title: "Multi-model architecture is a strategic advantage", desc: "LLM capabilities and pricing shift constantly. Model-agnostic architecture lets you optimize for quality and cost without rebuilding." },
  { icon: <Users className="w-5 h-5 text-orange-400" />, title: "Hackathons are structured QA, not team-building", desc: "Our 16-person sprint was a systematic human-in-the-loop evaluation that surfaced patterns no automated testing would catch." },
  { icon: <BarChart3 className="w-5 h-5 text-blue-400" />, title: "Transcription is an underrated knowledge unlock", desc: "Years of expertise was trapped in video recordings. A transcription pipeline converted dead assets into high-value RAG content." },
  { icon: <CheckCircle2 className="w-5 h-5 text-red-400" />, title: "Embed AI initiatives into existing OKRs", desc: "AskAgent succeeded because knowledge block contribution was a tracked metric, not a voluntary side project. Adoption follows accountability." }
];

export default function AskAgent() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20">

        {/* Back link */}
        <div className="container px-4 md:px-6 mb-10 max-w-5xl mx-auto">
          <Link href="/case-studies">
            <button className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </button>
          </Link>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden mb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]" />
          <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10"
            >
              <img
                src={higharc_logo}
                alt="Higharc"
                className="h-12 rounded-lg shrink-0 bg-white px-4 py-2"
              />
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["RAG / LLM", "AI Tooling", "Support Automation", "Knowledge Management"].map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-2">Higharc · Series B–C · PropTech · Head of Customer Experience</p>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  AskAgent — Building a RAG-Based LLM Support Tool from Zero to{" "}
                  <span className="text-gradient">90% Ticket Deflection</span>
                </h1>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics */}
        <section className="container px-4 md:px-6 max-w-5xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 text-center"
          >
            Outcomes at a Glance
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricsCard value="90%" label="Ticket Deflection Rate" delay={0.1} />
            <MetricsCard value="695+" label="Knowledge Blocks (Growing 30% QoQ)" delay={0.2} />
            <MetricsCard value="8" label="LLM Models Integrated" delay={0.3} />
            <MetricsCard value="16" label="Person Validation Hackathon" delay={0.4} />
          </div>
        </section>

        {/* Context & Challenge */}
        <section className="container px-4 md:px-6 max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Company Context</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The Scaling Problem</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Higharc is a Series B–C PropTech platform automating residential home design for production homebuilders. As Head of Customer Experience, I led a 60-person global organization spanning Implementation, Success, Training, Support, and Professional Services.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our customer base consisted of enterprise homebuilders averaging <span className="text-white font-semibold">$350K+ ARR</span> running multi-year implementations with steep learning curves.
              </p>
              <div className="space-y-3">
                {[
                  "Support ticket volume climbing with procedural 'how-to' questions",
                  "Training bottlenecked by limited SMEs and high demand",
                  "Time-to-value suffered as customers waited on human answers",
                  "Experienced staff burned answering the same questions repeatedly"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-red-500/10 rounded-full shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Demo GIF */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={askAgentGif}
                alt="AskAgent demo"
                className="w-full rounded-2xl border border-white/10 shadow-2xl"
              />
              <p className="text-xs text-slate-500 mt-3 text-center">AskAgent in action — real-time RAG-powered responses to customer support queries</p>
            </motion.div>
          </div>
        </section>

        {/* Solution Phases */}
        <section className="container px-4 md:px-6 max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">The Solution</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">AskAgent — Built in 5 Phases</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              A custom RAG-based LLM chatbot built on Replit, purpose-built to serve as Higharc's AI-powered support and enablement engine.
            </p>
          </motion.div>

          <div className="space-y-6">
            {PHASES.map((phase, i) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`glass-card p-6 md:p-8 rounded-2xl border-l-4 ${phase.color} border border-white/5`}
              >
                <div className="flex items-start gap-6">
                  <div className={`text-3xl font-bold ${phase.labelColor} shrink-0 font-mono`}>{phase.num}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-4">{phase.title}</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LLM Models Image */}
        <section className="container px-4 md:px-6 max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Multi-Model Architecture</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">8 Selectable LLM Models</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Integrating 8 models across OpenAI, Anthropic Claude, and Google Gemini families wasn't vanity — it was strategic. Model performance varies dramatically depending on task type.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                <span className="text-white font-semibold">Key finding:</span> Gemini models consistently outperformed on large text document processing and information synthesis — critical for knowledge blocks referencing lengthy training transcriptions and multi-step procedures.
              </p>
              <div className="bg-slate-800/50 rounded-xl p-5 border border-white/5">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Evaluation Dimensions</p>
                <div className="space-y-2">
                  {["Output quality — accuracy, completeness, coherence", "Processing capability — large context window handling", "Cost efficiency — token costs at scale"].map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-2xl" />
                <img
                  src={llmModelsImg}
                  alt="AskAgent selectable LLM models"
                  className="relative rounded-2xl border border-white/10 shadow-2xl max-w-xs w-full"
                />
              </div>
              <div className="sr-only">Screenshot of the 8 selectable LLM models in AskAgent</div>
            </motion.div>
          </div>
        </section>

        {/* Results Table */}
        <section className="container px-4 md:px-6 max-w-5xl mx-auto mb-20">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/5">
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Results</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Measurable Business Outcomes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { metric: "Ticket Deflection", value: "90%", desc: "Routine support queries resolved by AskAgent without human intervention" },
                { metric: "Knowledge Base Scale", value: "695+ blocks", desc: "Growing 30%+ QoQ from transcriptions, manual input, and PDF processing" },
                { metric: "Hackathon Validation", value: "16 users", desc: "Structured QA session identified and resolved systemic accuracy gaps" },
                { metric: "Model Coverage", value: "8 LLMs", desc: "Continuous cost/quality optimization as the model landscape evolved" },
                { metric: "Team Productivity", value: "Significant lift", desc: "Implementation and Training specialists freed from repetitive query handling" },
                { metric: "Training Sessions Captured", value: "125+ sessions", desc: "500+ learners' worth of institutional knowledge made searchable via RAG" }
              ].map((r, i) => (
                <motion.div
                  key={r.metric}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5"
                >
                  <div className="shrink-0">
                    <p className="text-xl font-bold text-primary">{r.value}</p>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{r.metric}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="container px-4 md:px-6 max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Takeaways</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Key Learnings</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {LEARNINGS.map((l, i) => (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/5 rounded-lg">{l.icon}</div>
                  <h3 className="font-bold text-white text-sm">{l.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{l.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="container px-4 md:px-6 max-w-5xl mx-auto mb-20">
          <div className="glass-card rounded-2xl p-8 border border-white/5">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Technical Stack</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Platform", value: "Replit (full-stack web app)" },
                { label: "LLM Integration", value: "OpenAI, Claude, Gemini (8 models)" },
                { label: "Architecture", value: "RAG with vector search" },
                { label: "Content Ingestion", value: "Transcription engine, PDF parser, manual input" },
                { label: "Knowledge Layer", value: "Custom block system with tagging & versioning" },
                { label: "Monitoring", value: "Dashboard — volume, usage & quality metrics" }
              ].map((t, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{t.label}</p>
                  <p className="text-sm text-white font-medium">{t.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want an AI support layer built for your team?</h2>
            <p className="text-slate-400 mb-8">Let's talk about how a RAG-based knowledge system can deflect tickets and scale your CX org without adding headcount.</p>
            <a
              href="https://calendar.app.google/xZGzrqrAT6J6fuKy8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all text-lg"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </section>

      </main>

      <footer className="py-8 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Austin Gardner. All rights reserved.</p>
      </footer>
    </div>
  );
}
