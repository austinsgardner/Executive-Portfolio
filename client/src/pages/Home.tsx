import headshotPath from "@/assets/images/headshot.jpg";
import { Navigation } from "@/components/Navigation";
import { Section, SectionHeader } from "@/components/Section";
import { MetricsCard } from "@/components/MetricsCard";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.1),transparent_40%)]" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-32 h-32 md:w-48 md:h-48 mb-8"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <img 
                src={headshotPath} 
                alt="Austin Gardner" 
                className="relative w-full h-full object-cover rounded-full border-2 border-primary/50 shadow-2xl z-10"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto">
            <MetricsCard value="112%" label="NRR Achieved" delay={0.2} />
            <MetricsCard value="<1%" label="Churn Rate" delay={0.3} />
            <MetricsCard value="$100M+" label="Revenue Managed" delay={0.4} />
            <MetricsCard value="60+" label="Team Size" delay={0.5} />
          </div>
        </div>
      </section>

      {/* Fractional Services / Initiatives */}
      <Section id="services" className="bg-slate-900/50">
        <SectionHeader 
          title="Fractional CX Initiatives" 
          subtitle="Strategic deliverables designed to scale your post-sales organization and drive ROI."
          centered
        />
        
        <div className="space-y-16 max-w-6xl mx-auto">
          {/* Category 1 */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Customer Intelligence & Health Systems</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Real-Time Health Engine",
                  desc: "Composite health scores pulling product usage, sentiment, and support data into automated n8n alerting pipelines."
                },
                {
                  title: "Expansion Propensity Model",
                  desc: "Usage-based analytics identifying upsell signals with AI-generated briefs for high-probability expansion."
                },
                {
                  title: "Early Warning System",
                  desc: "Automated pipelines correlating declining engagement to flag contraction risk 60-90 days before renewal."
                }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
                  <h4 className="font-bold mb-3 text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2 */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Onboarding & Time-to-Value</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Readiness Assessment",
                  desc: "Structured pre-implementation frameworks and automated intake workflows to eliminate Sales-to-CS friction."
                },
                {
                  title: "Implementation Machine",
                  desc: "Align → Setup → Active Customer frameworks with project plans, milestone tracking, and capacity dashboards."
                },
                {
                  title: "Digital-Touch Lifecycle",
                  desc: "Automated, AI-personalized journey content (emails/in-app) triggered by critical behavior milestones."
                }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
                  <h4 className="font-bold mb-3 text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Category 3 */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">CX Strategy & Infrastructure</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Executive Dashboards", desc: "Board-ready reporting for NRR, GRR, and team performance automated via n8n." },
                { title: "Journey Architecture", desc: "End-to-end strategic blueprints for post-sales stages and transitions." },
                { title: "VoC Feedback Loop", desc: "Structured systems surfacing customer insights directly to Product via AI." },
                { title: "AI-Powered Support", desc: "LLM-powered deflection systems reducing Tier 1 tickets by up to 90%." }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
                  <h4 className="font-bold mb-3 text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
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

      {/* Testimonials/Quotes */}
      <Section id="testimonials" className="bg-slate-900/50">
        <SectionHeader 
          title="Leadership Impact" 
          subtitle="What clients and team members say about my leadership."
          centered
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl relative"
          >
            <div className="text-primary/40 absolute top-4 left-4 text-6xl font-serif">"</div>
            <p className="text-lg italic text-slate-300 relative z-10 mb-6">
              Austin drove horizontal alignment across leadership, and was a strong player coach with his team to lead by example and elevate our customers’ experience. He established strong foundations and fostered customer-led growth.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-primary">TB</div>
              <div>
                <p className="font-bold">Travis B.</p>
                <p className="text-xs text-muted-foreground uppercase">COO & Former Manager</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl relative"
          >
            <div className="text-primary/40 absolute top-4 left-4 text-6xl font-serif">"</div>
            <p className="text-lg italic text-slate-300 relative z-10 mb-6">
              He is a leader that can make significant impact on company goals while making each person on his team feel celebrated and successful. The most approachable leader I have ever worked for.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-purple-500">CW</div>
              <div>
                <p className="font-bold">Crissy W.</p>
                <p className="text-xs text-muted-foreground uppercase">Director of Payments & Former Team Member</p>
              </div>
            </div>
          </motion.div>
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
