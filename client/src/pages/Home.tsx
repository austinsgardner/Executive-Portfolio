import headshotPath from "@/assets/images/headshot.jpg";
import { Navigation } from "@/components/Navigation";
import { Section, SectionHeader } from "@/components/Section";
import { MetricsCard } from "@/components/MetricsCard";
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
      
      {/* 1. Above the Fold */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
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

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ y: -5 }}
              className="relative w-24 h-24 md:w-32 md:h-32 mb-4"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for fractional & advisory roles
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
              Fractional <br />
              <span className="text-gradient">CX Executive</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              High-ROI automation, strategic frameworks, and data intelligence for startups and scale-ups. 
              Available on a <span className="text-primary font-semibold">fractional or contractual basis</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center gap-2 text-base"
              >
                Let's Talk Strategy
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="https://gemini.google.com/gem/1gTpBiVNyXDzbPVl6Q1TlREIufe6ToH1d?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600/20 text-blue-400 font-semibold rounded-xl border border-blue-500/30 hover:bg-blue-600/30 hover:border-blue-500/50 transition-all text-base backdrop-blur-sm flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Ask Austin AI
              </a>
            </div>
          </motion.div>

          {/* Hero Metrics */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricsCard value="112%" label="NRR Achieved" delay={0.2} />
              <MetricsCard value="<1%" label="Churn Rate" delay={0.3} />
              <MetricsCard value="$100M+" label="Revenue Managed" delay={0.4} />
              <MetricsCard value="60+" label="Team Size" delay={0.5} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Consulting Value (Merged) */}
      <Section id="about" className="bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Fractional CX Value" 
            subtitle="Strategic leadership and operational excellence for high-growth startups."
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 20 years of experience building revenue-driving Customer Experience organizations, I now partner with startups and scale-ups as a fractional leader.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I specialize in moving CX from "gut feel" to predictive data, automating post-sales machines that drive retention, expansion, and high ROI.
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
            
            <div className="space-y-8">
              {/* Skills Section Integrated */}
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "CS & Operations", icon: <Users className="text-primary" />, skills: ["Customer Journey Mapping", "Org Structure Design", "Comp & Incentive Plans", "Capacity Planning"] },
                  { title: "Analytics & Strategy", icon: <BarChart3 className="text-purple-500" />, skills: ["Churn Analysis & Forecasting", "NRR/GRR Optimization", "Voice of Customer (VoC)", "Health Score Modeling"] },
                  { title: "Tech & Tools", icon: <Zap className="text-emerald-500" />, skills: ["Salesforce / HubSpot", "Gainsight / Catalyst", "Zendesk / Intercom", "n8n AI Automation"] }
                ].map((group, i) => (
                  <motion.div 
                    key={group.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 rounded-2xl border-l-4 border-l-primary"
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      {group.icon}
                      {group.title}
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {group.skills.map(skill => (
                        <li key={skill} className="flex items-center gap-2 text-sm text-slate-300">
                          <div className="w-1 h-1 rounded-full bg-slate-500" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. CX Architecture */}
      <Section id="services" className="bg-background">
        <SectionHeader 
          title="CX Architecture" 
          subtitle="Strategic deliverables designed to scale your post-sales organization and drive ROI."
          centered
        />
        
        <div className="space-y-16 max-w-6xl mx-auto mt-12">
          {/* Category 1 */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Customer Intelligence & Health Systems</h3>
              </div>
              <Link href="/services/customer-intelligence">
                <button className="text-primary hover:text-white transition-colors flex items-center gap-2 text-sm font-bold group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Real-Time Health Engine", desc: "Composite health scores pulling product usage, sentiment, and support data into n8n pipelines.", roi: "25% improvement in proactive intervention" },
                { title: "Expansion Propensity", desc: "Usage-based analytics identifying upsell signals with AI-generated briefs.", roi: "15% increase in expansion revenue" },
                { title: "Early Warning System", desc: "Automated pipelines correlating declining engagement to flag contraction risk.", roi: "20% reduction in preventable churn" }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
                  <h4 className="font-bold mb-3 text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Target ROI</p>
                    <p className="text-xs text-white font-medium">{item.roi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2 */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Onboarding & Time-to-Value</h3>
              </div>
              <Link href="/services/onboarding">
                <button className="text-emerald-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Readiness Assessment", desc: "Structured pre-implementation frameworks and automated intake workflows.", roi: "40% reduction in handoff delays" },
                { title: "Implementation Machine", desc: "Align → Setup → Active Customer frameworks with milestone tracking.", roi: "50% faster time-to-first-value" },
                { title: "Digital-Touch Lifecycle", desc: "Automated journey content triggered by critical behavior milestones.", roi: "30% increase in feature adoption" }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
                  <h4 className="font-bold mb-3 text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Target ROI</p>
                    <p className="text-xs text-white font-medium">{item.roi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Career Highlights */}
      <Section id="experience" className="bg-slate-900/50">
        <SectionHeader 
          title="Career Highlights" 
          subtitle="A track record of scaling high-performing teams."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              company: "Higharc",
              url: "https://higharc.com",
              role: "Head of Customer Experience",
              metric: "112% NRR",
              desc: "Led 60-person global CX organization across Implementation, Success, and Support."
            },
            {
              company: "Syncari",
              url: "https://syncari.com",
              role: "Head of Customer Experience",
              metric: "50% Reduction",
              desc: "Cut Time-To-Value by 50% while achieving 110%+ NRR over 4 consecutive quarters."
            },
            {
              company: "Shopmonkey",
              url: "https://shopmonkey.io",
              role: "Head of Customer Success & Payments",
              metric: "3x Expansion",
              desc: "Built CS and Payments teams from zero, delivering 3x YoY revenue growth."
            },
            {
              company: "WordPress VIP",
              url: "https://wpvip.com",
              role: "Director, Cloud Platform Sales",
              metric: "30% Growth",
              desc: "Exceeded new revenue bookings quota by 30-40% QoQ across 6 consecutive quarters."
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
              <p className="text-sm text-slate-400 min-h-[40px]">{job.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. Engagement Models */}
      <Section id="engagement" className="relative overflow-hidden bg-background">
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
                {["2x Monthly Strategy Calls", "Async Slack/Email support", "Hiring & Org Design review", "Quarterly Roadmap Audit"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://calendar.app.google/xZGzrqrAT6J6fuKy8" target="_blank" className="w-full py-3 px-4 rounded-xl bg-slate-800 text-white font-bold text-center hover:bg-slate-700 transition-colors">Book Strategic Audit</a>
            </motion.div>

            {/* Package B */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-3xl relative flex flex-col border-primary/50 bg-primary/5 group hover:border-primary transition-all hover:-translate-y-2 md:scale-105 z-10"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-widest">Most Popular</div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">Fractional CCO / Head of CS</h3>
                <p className="text-primary font-medium">"Embedded Leadership"</p>
              </div>
              <div className="text-3xl font-bold text-white mb-6">Starting at $9,000 <span className="text-sm text-slate-400 font-normal">/ month</span></div>
              <p className="text-slate-400 text-sm mb-6">I act as an embedded executive 1 day per week to drive scale.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {["Churn & NRR Ownership", "Full Playbook Architecture", "Team Leadership & Coaching", "AI-Ops Systems Implementation", "Board Deck CX Contribution"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://calendar.app.google/xZGzrqrAT6J6fuKy8" target="_blank" className="w-full py-3 px-4 rounded-xl bg-primary text-primary-foreground font-bold text-center hover:bg-primary/90 transition-colors">Book Strategic Audit</a>
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
              <div className="text-3xl font-bold text-white mb-6">Starting at $20,000 <span className="text-sm text-slate-400 font-normal">(6-Week Sprint)</span></div>
              <p className="text-slate-400 text-sm mb-6">For startups needing immediate automation build-out.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {["End-to-end n8n Automation Build", "Automated Onboarding Flows", "Customer Health Score Setup", "Tech-Stack Consolidation", "Team Training"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://calendar.app.google/xZGzrqrAT6J6fuKy8" target="_blank" className="w-full py-3 px-4 rounded-xl bg-slate-800 text-white font-bold text-center hover:bg-slate-700 transition-colors">Book Strategic Audit</a>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 6. Leadership Impact */}
      <Section id="testimonials" className="bg-slate-900/50">
        <SectionHeader 
          title="Leadership Impact" 
          subtitle="Direct feedback from founders and teams I've partnered with."
          centered
        />
        <div className="mt-12">
          <TestimonialCarousel />
        </div>
      </Section>

      {/* Industry Specialization */}
      <Section className="bg-background">
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

      {/* Contact CTA */}
      <Section id="contact" className="bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title="Let's Build the Future of Your CX" 
            subtitle="Schedule a free consultation to discuss your scaling goals."
            centered
          />
          <div className="glass-card p-12 rounded-3xl border-primary/20 mt-8">
            <h3 className="text-2xl font-bold text-white mb-6">Book a Free Strategy Consultation</h3>
            <a 
              href="https://calendar.app.google/xZGzrqrAT6J6fuKy8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all text-xl"
            >
              <Users className="w-6 h-6" />
              Book 30-Min Consultation
              <ArrowRight className="w-6 h-6" />
            </a>
            <p className="mt-8 text-sm text-slate-500">
              Prefer email? Reach out at <a href="mailto:austin.s.gardner@gmail.com" className="text-primary hover:underline">austin.s.gardner@gmail.com</a>
            </p>
          </div>
        </div>
      </Section>

      <footer className="py-8 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Austin Gardner. All rights reserved.</p>
      </footer>
    </div>
  );
}
