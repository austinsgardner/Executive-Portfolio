import headshotPath from "@/assets/images/headshot.jpg";
import { Navigation } from "@/components/Navigation";
import { Section, SectionHeader } from "@/components/Section";
import { MetricsCard } from "@/components/MetricsCard";
import { ContactForm } from "@/components/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  Lightbulb, 
  Target, 
  Zap, 
  CheckCircle2, 
  Building2,
  Rocket,
  Send
} from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "“We miss you…it just feels like no one was more influential and could drive more results for our business than you.”",
    author: "Jeff S",
    role: "Tint World COO & former client",
    initials: "JS",
    color: "text-primary"
  },
  {
    quote: "“Austin is a tenacious leader without losing one bit of humility…he’s loved by clients, resourceful and ALWAYS solution oriented.”",
    author: "Yona P",
    role: "Enterprise CSM and former team member",
    initials: "YP",
    color: "text-purple-500"
  },
  {
    quote: "Austin made a real impact and brought some much needed calmness and poise during a season of transition and chaos at Higharc. He was instrumental in aligning our team, creating both structure and strategy. It's clear he has always been a strong advocate for our team and our customer's success.",
    author: "Kelly G",
    role: "Sr. CSM and former team member",
    initials: "KG",
    color: "text-emerald-500"
  },
  {
    quote: "Austin drove horizontal alignment across leadership, and was a strong player coach with his team to lead by example and elevate our customers’ experience. He established strong foundations and fostered customer-led growth.",
    author: "Travis B.",
    role: "COO & Former Manager",
    initials: "TB",
    color: "text-primary"
  },
  {
    quote: "He is a leader that can make significant impact on company goals while making each person on his team feel celebrated and successful. The most approachable leader I have ever worked for.",
    author: "Crissy W.",
    role: "Director of Payments & Former Team Member",
    initials: "CW",
    color: "text-purple-500"
  }
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleIndices = () => {
    const prev = (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    const next = (current + 1) % TESTIMONIALS.length;
    return [prev, current, next];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="relative h-[450px] md:h-[400px] w-full overflow-hidden px-4">
      {/* Edge Fading Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-background to-transparent pointer-events-none hidden md:block" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-background to-transparent pointer-events-none hidden md:block" />

      <div className="flex justify-center items-center h-full gap-4 md:gap-8">
        {visibleIndices.map((idx, i) => {
          const isCenter = i === 1;
          return (
            <motion.div
              key={`${idx}-${i}`}
              initial={false}
              animate={{
                scale: isCenter ? 1 : 0.85,
                opacity: isCenter ? 1 : 0.3,
                x: i === 0 ? -20 : i === 2 ? 20 : 0,
                zIndex: isCenter ? 10 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={cn(
                "glass-card p-6 md:p-10 rounded-3xl relative w-full max-w-[500px] flex-shrink-0",
                !isCenter && "blur-[1px]"
              )}
            >
              <div className="text-primary/20 absolute top-4 left-6 text-6xl font-serif">"</div>
              <p className={cn(
                "italic text-slate-200 relative z-10 mb-6 leading-relaxed",
                isCenter ? "text-lg md:text-xl" : "text-sm md:text-base line-clamp-4"
              )}>
                {TESTIMONIALS[idx].quote}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold shadow-inner ${TESTIMONIALS[idx].color}`}>
                  {TESTIMONIALS[idx].initials}
                </div>
                <div>
                  <p className="font-bold text-base text-white">{TESTIMONIALS[idx].author}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{TESTIMONIALS[idx].role}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === i ? "w-8 bg-primary" : "bg-slate-700 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Interactive Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
              </pattern>
              <radialGradient id="cursorGradient" r="300px" cx="var(--mouse-x, 50%)" cy="var(--mouse-y, 50%)" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#cursorGradient)" />
          </svg>
        </div>

        {/* Cursor Following Glow */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
          }}
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.1), transparent 80%)`,
          } as any}
        />
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.05),transparent_40%)]" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ y: -5 }}
              className="relative w-32 h-32 md:w-48 md:h-48 mb-8"
            >
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse" />
              <img 
                src={headshotPath} 
                alt="Austin Gardner" 
                className="relative w-full h-full object-cover rounded-full border-2 border-primary/40 shadow-[0_0_50px_rgba(59,130,246,0.2)] z-10"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for fractional & advisory roles
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Fractional <br />
              <span className="text-gradient">CX Executive</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              High-ROI automation, strategic frameworks, and data intelligence for startups and scale-ups. 
              Available on a <span className="text-primary font-semibold">fractional or contractual basis</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center gap-2 text-lg"
              >
                Let's Talk Strategy
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="https://bit.ly/4bsidlm"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600/20 text-blue-400 font-semibold rounded-xl border border-blue-500/30 hover:bg-blue-600/30 hover:border-blue-500/50 transition-all text-lg backdrop-blur-sm flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Career Chatbot
              </a>
            </div>
          </motion.div>

          {/* Hero Metrics */}
          <div className="mt-20 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 max-w-2xl mx-auto"
            >
              <p className="text-slate-400 leading-relaxed italic">
                Austin has led Customer Experience functions at several high-velocity startups, scaling from Series A to C, including past employers such as{" "}
                <a href="https://wpvip.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">Automattic/WordPress</a>,{" "}
                <a href="https://www.shopmonkey.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">Shopmonkey</a>,{" "}
                <a href="https://www.syncari.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">Syncari</a>, and{" "}
                <a href="https://www.higharc.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">Higharc</a>.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricsCard value="112%" label="NRR Achieved" delay={0.2} />
              <MetricsCard value="<1%" label="Churn Rate" delay={0.3} />
              <MetricsCard value="$100M+" label="Revenue Managed" delay={0.4} />
              <MetricsCard value="60+" label="Team Size" delay={0.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Engagement Models */}
      <Section id="engagement" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10">
          <SectionHeader
            title="Engagement Models"
            subtitle="Flexible ways to partner and drive immediate impact."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-12">
            {/* Package A */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl relative flex flex-col group hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">The Strategic Advisor</h3>
                <p className="text-primary font-medium">"The Sounding Board"</p>
              </div>
              <div className="text-3xl font-bold text-white mb-6">$3,500 <span className="text-sm text-slate-400 font-normal">/ month</span></div>
              <p className="text-slate-400 text-sm mb-6">For founders who have a team but need an executive navigator.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "2x Monthly Strategy Calls",
                  "Async Slack/Email support",
                  "Hiring & Org Design review",
                  "Quarterly Roadmap Audit"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-800 text-white font-bold text-center hover:bg-slate-700 transition-colors"
              >
                Book Strategic Audit
              </a>
            </motion.div>

            {/* Package B */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-3xl relative flex flex-col border-primary/50 bg-primary/5 group hover:border-primary transition-all hover:-translate-y-2 md:scale-105 z-10"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-widest">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">Fractional CCO / Head of CS</h3>
                <p className="text-primary font-medium">"Embedded Leadership"</p>
              </div>
              <div className="text-3xl font-bold text-white mb-6">Starting at $9,000 <span className="text-sm text-slate-400 font-normal">/ month</span></div>
              <p className="text-slate-400 text-sm mb-6">I act as an embedded executive 1 day per week to drive scale.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Churn & NRR Ownership",
                  "Full Playbook Architecture",
                  "Team Leadership & Coaching",
                  "AI-Ops Systems Implementation (n8n)",
                  "Board Deck CX Contribution"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-primary text-primary-foreground font-bold text-center hover:bg-primary/90 transition-colors"
              >
                Book Strategic Audit
              </a>
            </motion.div>

            {/* Package C */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-3xl relative flex flex-col group hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">CX + AI Ops Sprint</h3>
                <p className="text-primary font-medium">"The Infrastructure Build"</p>
              </div>
              <div className="text-3xl font-bold text-white mb-6">$20,000 <span className="text-sm text-slate-400 font-normal">(6-Week Sprint)</span></div>
              <p className="text-slate-400 text-sm mb-6">For startups with a "bleeding neck" problem needing immediate automation.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "End-to-end n8n Automation Build",
                  "Automated Onboarding Flows",
                  "Customer Health Score Setup",
                  "Tech-Stack Consolidation",
                  "Team Training"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-800 text-white font-bold text-center hover:bg-slate-700 transition-colors"
              >
                Book Strategic Audit
              </a>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Specialization Section */}
      <Section className="bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Industry Specialization</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Vertical SaaS", "PropTech", "Data Platforms", "B2B Tech", "FinTech"].map((spec) => (
              <span key={spec} className="px-8 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 font-semibold backdrop-blur-sm">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </Section>


      {/* About / Executive Summary */}
      <Section id="about" className="bg-slate-900/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader title="Fractional CX Leader" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With over 20 years of experience building revenue-driving Customer Experience organizations, I now partner with startups and scale-ups as a fractional leader.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I specialize in moving CX from "gut feel" to predictive data, automating post-sales machines that drive retention, expansion, and high ROI. I'm available for strategic advisory, interim leadership, or contractual project-based delivery.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                "Scaled Support teams from 5 to 50+ members",
                "Implemented AI-driven automation reducing response times by 40%",
                "Aligned CS and Product teams to reduce churn by 15% YoY"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-green-500/10 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-2xl border-l-4 border-l-primary"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Strategic Leadership
              </h3>
              <p className="text-muted-foreground">
                Vision setting, organizational design, and cross-functional alignment that connects CX goals to company revenue targets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 rounded-2xl border-l-4 border-l-purple-500"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Zap className="w-6 h-6 text-purple-500" />
                Operational Excellence
              </h3>
              <p className="text-muted-foreground">
                Process optimization, tech stack implementation, and metric-driven management to ensure scalable efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 rounded-2xl border-l-4 border-l-emerald-500"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-emerald-500" />
                Innovation
              </h3>
              <p className="text-muted-foreground">
                Leveraging AI, automation, and proactive support models to stay ahead of customer needs and market trends.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Testimonials/Quotes Section */}
      <Section id="testimonials" className="bg-slate-900/50">
        <SectionHeader 
          title="Leadership Impact" 
          subtitle="What clients and team members say about my leadership."
          centered
        />
        <div className="max-w-4xl mx-auto">
          <TestimonialCarousel />
        </div>
      </Section>

      {/* Frameworks & Models */}
      <Section id="frameworks">
        <SectionHeader 
          title="CX Architecture" 
          subtitle="Strategic frameworks I've built to scale customer organizations."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              CS Maturity Model
            </h3>
            <div className="flex justify-between items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="text-slate-500">Reactive</span>
              <ArrowRight className="w-3 h-3 text-slate-700" />
              <span className="text-slate-400">Informed</span>
              <ArrowRight className="w-3 h-3 text-slate-700" />
              <span className="text-slate-300">Proactive</span>
              <ArrowRight className="w-3 h-3 text-slate-700" />
              <span className="text-primary">Predictive</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A 4-stage evolution model for CX data maturity, moving from reactive firefighting to predictive customer intelligence.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-500" />
              Growth Pillars
            </h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {['Expansion', 'Retention', 'Adoption', 'Advocacy'].map(p => (
                <div key={p} className="bg-slate-800/50 py-1 px-2 rounded text-[10px] font-bold text-center border border-white/5">{p}</div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Core strategic pillars designed to turn post-sales functions into high-velocity revenue engines.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-500" />
              Value Velocity
            </h3>
            <div className="bg-emerald-500/10 rounded-lg p-3 mb-4 text-center">
              <span className="text-2xl font-bold text-emerald-500">50%</span>
              <p className="text-[10px] uppercase font-bold text-emerald-600">Reduction in TTV</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Standardized onboarding and value realization frameworks that cut Time-to-Value by half.
            </p>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <SectionHeader 
          title="Career Highlights" 
          subtitle="A track record of scaling high-performing teams."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              company: "Higharc",
              url: "https://higharc.com",
              role: "Head of Customer Experience",
              metric: "140% NRR",
              desc: "Led post-sales strategy for Series B homebuilding platform."
            },
            {
              company: "Syncari",
              url: "https://syncari.com",
              role: "VP of Customer Success",
              metric: "0% Churn",
              desc: "Built the CS function from ground up for data automation platform."
            },
            {
              company: "Shopmonkey",
              url: "https://shopmonkey.io",
              role: "Director of Support",
              metric: "98% CSAT",
              desc: "Scaled support org during hyper-growth phase."
            },
            {
              company: "WordPress VIP",
              url: "https://wpvip.com",
              role: "Director of Enterprise Support",
              metric: "Fortune 500",
              desc: "Managed global enterprise support for top-tier clients."
            }
          ].map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors group"
            >
              <a href={job.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 text-white group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{job.company}</h3>
              </a>
              <p className="text-sm font-semibold text-primary mb-3">{job.role}</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-white block">{job.metric}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Key Impact</span>
              </div>
              <p className="text-sm text-slate-400">{job.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Problem Solving / Target Opportunity */}
      <Section id="opportunity" className="bg-slate-900/30">
        <SectionHeader 
          title="Fractional Value" 
          subtitle="High-impact interventions for high-growth startups."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/10 rounded text-red-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Predictable Churn Prevention</h3>
              </div>
              <p className="text-muted-foreground">
                Move from "gut feel" to data-driven visibility. I build the systems that flag risk 60-90 days before renewal, delivering save-play playbooks to your team.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-500/10 rounded text-orange-400">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Scalable Onboarding</h3>
              </div>
              <p className="text-muted-foreground">
                Stop founder-led firefighting. I package my Higharc systems (built for 60 people) for your team of 5-10, cutting time-to-value by 45%+.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded text-blue-400">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Revenue-Engine CS</h3>
              </div>
              <p className="text-muted-foreground">
                Transform Customer Success from a cost center into a growth engine. I implement the expansion models that drove 112% NRR at Higharc and Syncari.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              CS & Operations
            </h3>
            <ul className="space-y-3">
              {["Customer Journey Mapping", "Org Structure Design", "Comp & Incentive Plans", "Capacity Planning", "Remote Team Leadership"].map(skill => (
                <li key={skill} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-purple-500" />
              Analytics & Strategy
            </h3>
            <ul className="space-y-3">
              {["Churn Analysis & Forecasting", "NRR/GRR Optimization", "Voice of Customer (VoC)", "Health Score Modeling", "Board Reporting"].map(skill => (
                <li key={skill} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-emerald-500" />
              Tech & Tools
            </h3>
            <ul className="space-y-3">
              {["Salesforce / HubSpot", "Gainsight / Catalyst", "Zendesk / Intercom", "Linear / Jira", "AI Implementation"].map(skill => (
                <li key={skill} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/5">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14 bg-gradient-to-br from-primary/20 to-slate-900 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something great.</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Whether you need a fractional CX leader, an advisor for your startup, or a full-time executive to scale your operations, I'm ready to help.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:austin.s.gardner@gmail.com" className="flex items-center gap-3 text-white hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Send className="w-4 h-4" />
                  </div>
                  austin.s.gardner@gmail.com
                </a>
                <a href="https://linkedin.com/in/austinsgardner" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  linkedin.com/in/austinsgardner
                </a>
              </div>
            </div>
            
            <div className="p-10 md:p-14 bg-slate-900/50">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Austin Gardner. All rights reserved.</p>
      </footer>
    </div>
  );
}
