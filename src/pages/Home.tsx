import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Code, 
  Cpu, 
  Activity, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Clock, 
  MessageSquare,
  CheckCircle2,
  Lock,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Stratbyte | Enterprise Systems & Software Dev";
  }, []);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      // Direct integration with formsubmit.co ajax simulation or live mail trigger
      const response = await fetch('https://formsubmit.co/ajax/jp.kapunda@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Client Inquiry - Stratbyte Web Portal'
        })
      });
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-[#0b0f19] text-slate-100 min-h-screen pt-20 overflow-hidden relative selection:bg-blue-600/30 selection:text-cyan-300">
      
      {/* 1. HIGH-IMPACT HERO SECTION WITH ANIMATED DEEP GLOW BACKGROUND */}
      <section className="relative min-h-[95vh] flex items-center justify-center py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#0d1527] to-[#0b0f19]">
        {/* Subtle animated floating ambient glowing elements */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse duration-10000" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse duration-7000" />
        
        {/* Fine Technical Grid background overlay */}
        <div className="absolute inset-0 technical-grid opacity-[0.95] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-left"
            >
              {/* Trust Badge Indicator */}
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300 font-mono">Certified IT Reliability Desks</span>
              </div>

              {/* Headline using Tailwind gradient text on key words */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight mb-6 leading-[1.05] text-white">
                Engineering <br />
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Digital Transformation</span> <br />
                With Absolute Reliability
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-350 font-medium leading-relaxed max-w-2xl mb-10">
                We design, deploy, and maintain custom high-conversion web architectures, scalable hybrid client software systems, and robust enterprise IT configurations for Zambia's most ambitious teams.
              </p>

              {/* Hero Call To Actions */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all active:scale-98 shadow-lg shadow-cyan-500/10 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} />
                  <span>Talk to an Expert</span>
                  <ArrowRight size={14} />
                </a>

                <a 
                  href="#services" 
                  className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center"
                >
                  Explore Services
                </a>
              </div>

              {/* Quick Tech Badges Row */}
              <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-wrap gap-x-8 gap-y-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-cyan-400" />
                  <span>100% Secure Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-yellow-400" />
                  <span>High-Performance Scaling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-400" />
                  <span>Active SLA Protection</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Premium Tech Concept Cluster Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-[420px] bg-slate-900/60 border border-slate-800/80 rounded-[2rem] p-6 lg:p-8 overflow-hidden shadow-2xl backdrop-blur-md">
                {/* Background glow orb inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
                
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-800/30 px-3 py-1 rounded-full">System Diagnostics</span>
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase">LIVE_MONITOR</span>
                  </div>
                </div>

                {/* Hand-Composed Graphic Elements representing an Advanced Cloud Server Infrastructure */}
                <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800/80 mb-6">
                  <div className="space-y-4">
                    {/* Database Portal Tracker Row */}
                    <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-lg border border-slate-800/40">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-blue-500/10 rounded text-blue-400">
                          <Cpu size={16} />
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] font-mono text-slate-400 uppercase">Main Core Node</p>
                          <p className="text-xs font-bold text-white">active-server-core</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/30 px-2.5 py-0.5 rounded border border-emerald-900/30">99.9% Efficiency</span>
                    </div>

                    {/* Network Packet Interface Row */}
                    <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-lg border border-slate-800/40">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-cyan-500/10 rounded text-cyan-400">
                          <Activity size={16} />
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] font-mono text-slate-400 uppercase">Traffic Routing</p>
                          <p className="text-xs font-bold text-white">secure-vpn-ingress</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-455 font-bold bg-cyan-950/30 px-2.5 py-0.5 rounded border border-cyan-900/30">Stable Inflow</span>
                    </div>

                    {/* Secure Lock Matrix */}
                    <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-lg border border-slate-800/40">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-yellow-500/10 rounded text-yellow-400">
                          <Lock size={16} />
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] font-mono text-slate-400 uppercase">Encryption Lock</p>
                          <p className="text-xs font-bold text-white">sha-256-database</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-yellow-455 font-bold bg-yellow-950/30 px-2.5 py-0.5 rounded border border-yellow-900/30">Protected Logs</span>
                    </div>
                  </div>
                </div>

                {/* Micro Stat Dashboard */}
                <div className="text-left">
                  <div className="flex items-baseline space-x-1.5 mb-1.5">
                    <span className="text-3xl font-display font-black text-white">48hr</span>
                    <span className="text-xs text-slate-450 uppercase font-bold">Standard turnaround</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
                    We specialize in high-efficiency deployment models, enabling local businesses to launch custom responsive operations rapidly.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CHROME-FINISHED TRUST BADGES ROW */}
      <section className="bg-slate-950 border-y border-slate-900 py-12 relative">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-slate-300/80 mb-6 font-mono">
            Directly supporting prominent local businesses & tech ecosystems
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-80">
            {['ZCF Limited', 'SHEK Tech', 'Merrycure healthcare', 'Tigris Safaris', 'Budget Tours'].map((client) => (
              <div key={client} className="px-6 py-3 rounded-xl border border-slate-800/40 bg-slate-900/20 text-slate-200 text-xs font-bold tracking-widest uppercase hover:border-cyan-500/20 transition-all cursor-default">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PREMIUM SERVICES CATALOG SECTION WITH DESKTOP 3-COL GRID */}
      <section id="services" className="py-24 lg:py-32 relative bg-[#0b0f19]">
        {/* Abstract glowing sphere */}
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header element using bold requested heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/25 rounded-full px-4 py-1 mb-4">
              <span className="text-[9px] font-bold tracking-widest text-cyan-400 uppercase font-mono">Systems Capability</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight mb-5">
              Engineered for Performance. <br />
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">Built for Growth.</span>
            </h2>
            
            <div className="h-[2px] w-20 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mb-6" />
            
            <p className="text-slate-350 font-medium leading-relaxed max-w-xl mx-auto text-xs sm:text-sm">
              We deploy highly targeted components to build bulletproof business solutions. Zero templates, custom responsive architectures only.
            </p>
          </div>

          {/* Grid Layout - 3 columns on desktop, 1 on mobile */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
            
            {/* Service 1 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-blue-600/15 text-blue-400 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                  <Code size={24} />
                </div>
                <h3 className="text-lg font-display font-black text-white uppercase tracking-tight mb-3">Custom Web & Software Dev</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold mb-6">
                  Fast, modern, and fully scalable web applications written directly from the ground up. Mapped with pristine layouts, technical search marketing settings, and safe infrastructure.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-800/30 flex items-center justify-between text-[11px] font-mono text-cyan-400 font-bold">
                <span>Enterprise Scale Ready</span>
                <ArrowRight size={13} />
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-cyan-600/15 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
                  <Cpu size={24} />
                </div>
                <h3 className="text-lg font-display font-black text-white uppercase tracking-tight mb-3">IT Consultancy & Systems Admin</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold mb-6">
                  Optimizing infrastructure, server management, and technical workflows. High-efficiency system modeling with active administration audits and transparent network guides.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-800/30 flex items-center justify-between text-[11px] font-mono text-cyan-400 font-bold">
                <span>99.9% Uptime Design</span>
                <ArrowRight size={13} />
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-emerald-600/15 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                  <Activity size={24} />
                </div>
                <h3 className="text-lg font-display font-black text-white uppercase tracking-tight mb-3">Vehicle Diagnostics & Fleet Tech</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold mb-6">
                  Advanced OBD2 scanning, industrial ecu software updates, fleet vehicle location routing layouts, and custom automotive tech integrations engineered to limit transport downtime.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-800/30 flex items-center justify-between text-[11px] font-mono text-cyan-400 font-bold">
                <span>Automotive Certified</span>
                <ArrowRight size={13} />
              </div>
            </motion.div>

            {/* Service 4 - Placed elegantly inside the grid layout */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-card p-8 flex flex-col justify-between lg:col-span-1"
            >
              <div>
                <div className="w-12 h-12 bg-purple-600/15 text-purple-400 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-lg font-display font-black text-white uppercase tracking-tight mb-3">Marketing & Growth Campaigns</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold mb-6">
                  High-volume social media visibility optimization, direct customer acquisition funnels, and robust analytical lead generation pipelines mapped to boost Zambia business profit margin.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-800/30 flex items-center justify-between text-[11px] font-mono text-cyan-400 font-bold">
                <span>High Conversion Rates</span>
                <ArrowRight size={13} />
              </div>
            </motion.div>

            {/* Service Action Promo Grid Callout Card */}
            <div className="bg-gradient-to-br from-blue-900/40 to-slate-900/60 border border-blue-500/20 rounded-[1.5rem] p-8 flex flex-col justify-between relative overflow-hidden lg:col-span-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              <div>
                <span className="text-[9px] font-bold font-mono tracking-widest text-cyan-400 uppercase bg-blue-950/60 border border-blue-850/40 px-2.5 py-1 rounded w-fit block mb-4">Limited Period Deal</span>
                <h3 className="text-xl font-display font-extrabold text-white uppercase mb-2">Need a custom responsive corporate landing page?</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-semibold max-w-xl">
                  We deploy beautiful, lightning-speed digital storefronts tailored specifically for resume portals and regional business teams across Lusaka. Connect directly with our lead developers to request high efficiency.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdXGx6Km7SQNY4Fw59KlvBud_ZWtwhvHeUfVKE5i8u0qgtrtg/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Submit Client Intake Brief</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. 'ABOUT STRATBYTE' SPLIT LAYOUT SECTION WITH TRUST BADGES */}
      <section className="py-24 lg:py-32 bg-slate-950 border-t border-slate-900 overflow-hidden relative">
        {/* Cyber layout visual orbs */}
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            
            {/* Left Column: Authoritative Text block explaining high competitive edge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 text-left"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[9px] font-bold font-mono tracking-widest text-cyan-300 uppercase">Operational DNA</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-none mb-6">
                Bridging Bold <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Strategy</span> <br />
                With Tech Execution
              </h2>

              <div className="h-[2px] w-16 bg-cyan-400 mb-8" />

              <p className="text-slate-300 font-semibold mb-6 text-sm lg:text-base leading-relaxed">
                At Stratbyte, we don't believe in generic templates or rigid off-the-shelf software. We understand that actual business growth requires custom-architected infrastructure. 
              </p>

              <p className="text-slate-400 font-medium text-xs sm:text-sm leading-relaxed mb-8">
                By bridging enterprise-grade technology with precise execution methodologies, we build systems designed to operate at maximum efficiency. Our goal is to empower local enterprises and expanding operations in Zambia and across the SADC region with fast-loading, highly-secure digital assets that reduce operational friction and drive measurable profit.
              </p>

              {/* Direct call coordinates */}
              <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-800/80 p-4.5 rounded-2xl max-w-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Zambian Operations Direct</h4>
                  <p className="text-xs font-bold text-white">
                    <a href="tel:+260973602780" className="hover:text-cyan-400 transition-colors">+260 97 360 2780</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Key Trust Badges & Metrics Grid with high contrast design */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="grid gap-6">
                
                {/* Metric Badge 1 */}
                <div className="bg-slate-900/80 border border-slate-800/80 p-6 rounded-2xl text-left hover:border-cyan-500/30 transition-all shadow-lg">
                  <div className="flex items-center space-x-3.5 mb-3">
                    <div className="w-9 h-9 bg-cyan-500/15 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                      <Cpu size={18} />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-300">SYSTEM PERFORMANCE</span>
                  </div>
                  <h4 className="text-lg font-display font-black text-white uppercase mb-1">99.9% Uptime Infrastructure</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Designed for maximum reliability and structural redundancy, preventing system blackouts and digital drop-offs.
                  </p>
                </div>

                {/* Metric Badge 2 */}
                <div className="bg-slate-900/80 border border-slate-800/80 p-6 rounded-2xl text-left hover:border-blue-500/30 transition-all shadow-lg">
                  <div className="flex items-center space-x-3.5 mb-3">
                    <div className="w-9 h-9 bg-blue-500/15 rounded-lg flex items-center justify-center text-blue-400 border border-blue-500/20">
                      <Code size={18} />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-300">CLEAN DEPLOYMENTS</span>
                  </div>
                  <h4 className="text-lg font-display font-black text-white uppercase mb-1">Custom Scalable Code</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Zero rigid automated templates. 100% bespoke scripts optimized for rapid layout updates, search visibility, and speed.
                  </p>
                </div>

                {/* Metric Badge 3 */}
                <div className="bg-slate-900/80 border border-slate-800/80 p-6 rounded-2xl text-left hover:border-purple-500/30 transition-all shadow-lg">
                  <div className="flex items-center space-x-3.5 mb-3">
                    <div className="w-9 h-9 bg-purple-500/15 rounded-lg flex items-center justify-center text-purple-400 border border-purple-500/20">
                      <Zap size={18} />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-300">LAUNCH VELOCITY</span>
                  </div>
                  <h4 className="text-lg font-display font-black text-white uppercase mb-1">Rapid 48-Hour Turnaround</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Dedicated local expert engineering teams addressing critical queries and system requirements with unmatched response speeds.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. CONTACT FORM & MULTI-PAGE DESK PORTAL */}
      <section id="contact" className="py-24 lg:py-32 bg-[#0b0f19] relative overflow-hidden">
        {/* Cyber tech network visual lines */}
        <div className="absolute inset-0 technical-grid opacity-[0.9] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            
            {/* Left Box: Simple Contact Card Displaying coordinates */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 text-left"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-[9px] font-bold font-mono tracking-widest text-cyan-300 uppercase">COMMUNICATION PLATFORM</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-none mb-6">
                Start Your <br />
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Digital Blueprint</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold mb-8">
                Tweak parameters, request detailed quotes, or review custom setups with lead systems administrators at Stratbyte. We respond inside 24 hours.
              </p>

              <div className="space-y-4">
                
                {/* Physical Location Card */}
                <div className="flex items-start space-x-4 bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="p-3 bg-blue-600/15 rounded-xl text-blue-400 shrink-0 border border-blue-500/20">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1">Corporate Headquarters</h4>
                    <p className="text-xs font-semibold leading-relaxed text-slate-200">
                      Plot 217 Minyanya Close, Longridge Chilanga, Lusaka, Zambia
                    </p>
                  </div>
                </div>

                {/* Direct Line Connection */}
                <div className="flex items-start space-x-4 bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl hover:border-cyan-500/20 transition-all">
                  <div className="p-3 bg-cyan-600/15 rounded-xl text-cyan-400 shrink-0 border border-cyan-500/20">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1">Operation Support desk</h4>
                    <p className="text-sm font-bold text-white">
                      <a href="tel:+260973602780" className="hover:text-cyan-400 transition-colors">+260 97 360 2780</a>
                    </p>
                  </div>
                </div>

                {/* Email Transmissions */}
                <div className="flex items-start space-x-4 bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="p-3 bg-purple-600/15 rounded-xl text-purple-400 shrink-0 border border-purple-500/20">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1">Secure Mail Server</h4>
                    <p className="text-sm font-bold text-white">
                      <a href="mailto:info@stratbyte.cloud" className="hover:text-cyan-400 transition-colors">info@stratbyte.cloud</a>
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Box: Clean, Responsive Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-[2rem] p-8 sm:p-10 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />
                
                <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mb-2">Message Gateway</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold mb-8">Dispatched securely to our systems administrators.</p>

                <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="client-name" className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block">First Name</label>
                      <input 
                        type="text" 
                        id="client-name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs font-semibold px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/25 outline-none transition-all"
                        placeholder="e.g. John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="client-email" className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block">Work Email</label>
                      <input 
                        type="email" 
                        id="client-email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs font-semibold px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/25 outline-none transition-all"
                        placeholder="e.g. john@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="client-message" className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block">Required system specifications</label>
                    <textarea 
                      id="client-message" 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs font-semibold px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/25 outline-none transition-all resize-none"
                      placeholder="Share details of requested features, page counts, or system performance preferences..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-98 disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? 'Transmitting Ingress Portals...' : 'Send Query Message'}
                  </button>

                  {formStatus === 'success' && (
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs font-medium leading-relaxed">
                      Message transmitted successfully! Our administration desk will reach out inside 24 hours. Check your inbox for a transmission confirmation.
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs font-medium leading-relaxed">
                      Ingress dispatch error. Please call +260 97 360 2780 or email info@stratbyte.cloud directly for an instant offline backup connection.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. WHATSAPP DIRECT CTAS & VISUAL CHANNELS */}
      <section className="py-12 bg-slate-950 border-t border-slate-900 text-center">
        <div className="max-w-screen-md mx-auto px-4">
          <h4 className="text-xs font-mono font-bold tracking-widest text-[#25D366] uppercase mb-1">Instant Connection</h4>
          <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mb-4">Prefer instant chat consultation?</h3>
          <p className="text-xs text-slate-400 font-semibold mb-6">
            Get instant architectural answers on your mobile device. Click the button below to connect with lead systems engineers directly on WhatsApp.
          </p>
          <a 
            href="https://wa.me/260973602780"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.453 4.8 1.454 5.4 0 9.8-4.4 9.8-9.8.0-2.6-1-5.1-2.9-6.9C16.4 2 13.9 1 11.4 1 6 1 1.6 5.4 1.6 10.8c0 1.9.5 3.7 1.4 5.3l-1 3.7 3.8-1-.2.2zM16.5 13.5c-.2-.1-1.4-.7-1.6-.7-.2-.1-.4-.1-.5.1-.2.3-.6.7-.8.9-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-.9-1-1.1-1.2-.2-.2-.0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.2.0-.3-.0-.4-.1-.2-.5-1.2-.7-1.6-.2-.4-.3-.3-.5-.3h-.4c-.2.0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.8 2.4 1 2.5c.1.1 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
}
