import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { MetricsCard } from "@/components/MetricsCard";
import { ArrowRight, ArrowLeft, Zap, RefreshCw, BarChart3, Search } from "lucide-react";
import { Link } from "wouter";
import logoPath from "@assets/Smoky_mountains_lodge_logo_-_circle_1773255012438.png";
import automationImagePath from "@assets/n8n_automation_1773254968583.jpeg";

const PIPELINE_STEPS = [
  {
    icon: <RefreshCw className="w-5 h-5 text-blue-400" />,
    title: "Weekly Trigger",
    desc: "Automated Monday scheduler fires the pipeline without any manual input."
  },
  {
    icon: <Search className="w-5 h-5 text-orange-400" />,
    title: "Event Scraping",
    desc: "Apify hunts for high-traffic upcoming events in Gatlinburg & Pigeon Forge."
  },
  {
    icon: <Zap className="w-5 h-5 text-purple-400" />,
    title: "AI Filtering",
    desc: "Google Gemini isolates events matching the 'Smoky Mountain Window' — ideal 3-4 night stays."
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
    title: "Content Generation",
    desc: "A secondary AI agent drafts an 800-word 'Ultimate Guide' in 'Modern Mountain' brand voice."
  },
  {
    icon: <ArrowRight className="w-5 h-5 text-primary" />,
    title: "Zero-Touch Deploy",
    desc: "Auto-formats HTML and pushes to WordPress, then sends a 30-second review notification."
  }
];

export default function SmokeyMountainsLodge() {
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
                src={logoPath}
                alt="Smoky Mountains Lodge"
                className="w-24 h-24 rounded-full border border-white/10 shadow-lg shrink-0"
              />
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Revenue Operations", "Programmatic SEO", "AI Automation"].map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-2">Client · Smoky Mountains Lodge · Luxury Short-Term Rentals</p>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Automating Intent: How an AI-Powered SEO Flywheel Drives a Forecasted{" "}
                  <span className="text-gradient">30% Increase in Direct Bookings</span>
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
            <MetricsCard value="+30%" label="Direct Bookings (Forecasted)" delay={0.1} />
            <MetricsCard value="+30%" label="Organic Traffic (Forecasted)" delay={0.2} />
            <MetricsCard value="100%" label="Automated Content Pipeline" delay={0.3} />
            <MetricsCard value="-15%" label="OTA Fee Dependency" delay={0.4} />
          </div>
        </section>

        {/* Challenge */}
        <section className="container px-4 md:px-6 max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">The Challenge</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The "Accommodation vs. Asset" Trap
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                In the highly saturated Smoky Mountains market, most short-term rentals rely entirely on platforms like Airbnb and VRBO — sacrificing up to <span className="text-white font-semibold">15% of their revenue</span> to platform fees.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                The challenge was clear: how do we transform a property into a high-yield financial instrument by capturing guests <em>before they ever open an OTA app?</em>
              </p>
              <p className="text-slate-400 leading-relaxed">
                Capturing this audience requires hyper-local, high-intent content (e.g., <span className="text-white italic">"Where to stay for the Pigeon Forge Fall Rod Run 2026"</span>). However, manually researching events, writing SEO guides, and publishing consistently is a massive drain on operational resources.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={automationImagePath}
                alt="n8n automation pipeline for Smoky Mountains Lodge"
                className="rounded-2xl border border-white/10 shadow-2xl w-full object-cover"
              />
              <p className="text-xs text-slate-500 mt-3 text-center">The "Event Horizon" Engine — built with n8n, Apify, Google Gemini & WordPress</p>
            </motion.div>
          </div>
        </section>

        {/* Solution Pipeline */}
        <section className="container px-4 md:px-6 max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">The Solution</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              The "Event Horizon" Engine
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              A fully autonomous programmatic SEO flywheel architected using n8n, Apify, Google Gemini, and the WordPress REST API — requiring zero manual labor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PIPELINE_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 rounded-2xl border border-white/5 hover:border-primary/30 transition-all relative"
              >
                {i < PIPELINE_STEPS.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
                <div className="p-2 bg-white/5 rounded-lg w-fit mb-3">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Step {i + 1}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CX & Revenue Impact */}
        <section className="container px-4 md:px-6 max-w-5xl mx-auto mb-20">
          <div className="glass-card rounded-3xl p-10 md:p-14 border border-white/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">The CX & Revenue Impact</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">From Reactive Accommodation to Proactive Local Expertise</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="font-bold text-white mb-2">Top-of-Funnel Ownership</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Travelers searching for event logistics find a comprehensive, well-designed guide rather than a standard booking page. This builds immediate trust and authority before any commercial intent.
                  </p>
                </div>
                <div className="border-l-2 border-purple-500 pl-6">
                  <h3 className="font-bold text-white mb-2">Frictionless Conversion</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Guides transition into Lodge amenities — private barrel sauna, flat parking for show cars — paired with a 15% direct-booking savings incentive. The conversion becomes natural and compelling.
                  </p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-6">
                  <h3 className="font-bold text-white mb-2">Compounding SEO Advantage</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The automation guarantees perpetual fresh, relevant content — creating a compounding SEO advantage that keeps Smoky Mountains Lodge dominant in local search while operators focus on wealth-building.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want a similar system built for your business?</h2>
            <p className="text-slate-400 mb-8">Let's talk about how AI-powered automation can drive direct revenue for your operation.</p>
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
