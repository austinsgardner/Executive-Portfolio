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
              Global Customer <br />
              <span className="text-gradient">Experience Leader</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Transforming post-sales teams into revenue engines. 
              Driving growth through operational excellence and strategic innovation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center gap-2 text-lg"
              >
                Let's Talk Strategy
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-lg backdrop-blur-sm"
              >
                View Experience
              </button>
            </div>
          </motion.div>

          {/* Hero Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto">
            <MetricsCard value="112%" label="NRR Achieved" delay={0.2} />
            <MetricsCard value="<1%" label="Churn Rate" delay={0.3} />
            <MetricsCard value="$100M+" label="Revenue Managed" delay={0.4} />
            <MetricsCard value="50+" label="Team Size" delay={0.5} />
          </div>
        </div>
      </section>

      {/* About / Executive Summary */}
      <Section id="about" className="bg-slate-900/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader title="Executive Summary" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With over 20 years of experience building revenue-driving Customer Experience organizations, I specialize in scaling operations for high-growth SaaS companies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My approach combines data-driven strategy with human-centric leadership. I don't just fix support tickets; I build ecosystems where customer success drives product innovation and recurring revenue.
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
              role: "Head of Customer Experience",
              metric: "140% NRR",
              desc: "Led post-sales strategy for Series B homebuilding platform."
            },
            {
              company: "Syncari",
              role: "VP of Customer Success",
              metric: "0% Churn",
              desc: "Built the CS function from ground up for data automation platform."
            },
            {
              company: "Shopmonkey",
              role: "Director of Support",
              metric: "98% CSAT",
              desc: "Scaled support org during hyper-growth phase."
            },
            {
              company: "WordPress VIP",
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
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 text-white group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-1">{job.company}</h3>
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
          title="Problems I Solve" 
          subtitle="Where I deliver the most value for organizations."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/10 rounded text-red-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">High Churn</h3>
              </div>
              <p className="text-muted-foreground">
                I identify leakage points in the customer journey and implement proactive health monitoring to save at-risk accounts before they leave.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-500/10 rounded text-orange-400">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Firefighting Mode</h3>
              </div>
              <p className="text-muted-foreground">
                Transitioning teams from reactive ticket-closing to proactive value-driving. Implementing playbooks that standardize excellence.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded text-blue-400">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Scaling Pains</h3>
              </div>
              <p className="text-muted-foreground">
                Building the infrastructure (people, process, technology) needed to go from $10M to $50M ARR without breaking the customer experience.
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
                <a href="mailto:hello@example.com" className="flex items-center gap-3 text-white hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Send className="w-4 h-4" />
                  </div>
                  austin@example.com
                </a>
                <a href="#" className="flex items-center gap-3 text-white hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  linkedin.com/in/austingardner
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
