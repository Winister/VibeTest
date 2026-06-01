import { motion } from 'motion/react';
import { ShieldCheck, Target, Lightbulb, Users, Award, Zap, Check, ArrowRight, FileText, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    document.title = "Our Corporate DNA | Stratbyte";
  }, []);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdXGx6Km7SQNY4Fw59KlvBud_ZWtwhvHeUfVKE5i8u0qgtrtg/viewform?usp=publish-editor";

  return (
    <div className="pt-24 pb-40 bg-[#0b0f19] text-slate-100 overflow-hidden relative selection:bg-blue-600/30 selection:text-cyan-300">
      
      {/* Decorative fine-line technical top bar */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500" />

      {/* Cyber ambient glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12">
        
        {/* 1. HERO DESCRIPTION SPLIT */}
        <div className="py-12 lg:py-20 relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            
            {/* Left Content Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/25 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[9px] font-bold font-mono tracking-widest text-cyan-300 uppercase leading-none">Corporate DNA</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-6 leading-[1.05] text-white">
                Pioneering <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Digital Craft</span> <br />
                Across Zambia & SADC
              </h1>

              <div className="h-[2px] w-16 bg-cyan-400 mb-8" />

              <p className="text-base sm:text-lg text-slate-300 font-semibold leading-relaxed mb-8 max-w-2xl">
                Stratbyte is an elite technology firm specializing in beautiful custom web development, complex mobile database architectures, and certified IT operations. We help ambitious companies translate legacy struggles into lightning-fast, secure digital solutions.
              </p>

              {/* Stats Bento Matrix */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 bg-slate-900/40 border border-slate-800/80 p-6 rounded-[1.5rem]">
                <div>
                  <h4 className="text-3xl font-display font-black text-white uppercase">100%</h4>
                  <p className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-wider mt-1">Zambian Owned</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display font-black text-cyan-455 uppercase">30+</h4>
                  <p className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-wider mt-1">Delivered Portals</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="text-3xl font-display font-black text-blue-550 uppercase">SLA</h4>
                  <p className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-wider mt-1">Active Guarantees</p>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Card Deck representing high engineering workflow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
                <div className="absolute inset-0 technical-grid opacity-[0.4]" />
                
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 text-left mb-6">Execution values</p>

                <div className="space-y-4 text-left">
                  
                  {/* Item 1 */}
                  <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800/60 flex items-start space-x-4">
                    <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-450 shrink-0">
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-tight mb-1">Customer Obsessed Blueprint</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">Guiding regional enterprises and local farms with tailored expert engineering consulting plans.</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800/60 flex items-start space-x-4">
                    <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-450 shrink-0">
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-tight mb-1">Elite Engineering Standards</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">Dedicated local experts directly supporting your custom hosting, designs, and databases.</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 2. PHILOSOPHY HIGHLIGHT BANNER */}
        <section className="my-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/40 p-8 sm:p-14 text-center max-w-5xl mx-auto rounded-[2.5rem] border border-slate-800/80 overflow-hidden relative shadow-lg"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <Lightbulb size={36} className="mx-auto text-cyan-400 mb-6 animate-pulse" />
            
            <h2 className="text-white text-xl md:text-3xl font-display font-black uppercase tracking-tight leading-tight max-w-3xl mx-auto mb-6">
              "We embrace custom coding as a core value, discarding templates to write responsive interfaces for every layout we launch."
            </h2>
            
            <p className="text-xs md:text-sm font-semibold leading-relaxed max-w-2xl mx-auto text-slate-400">
              By investing systematically in elite, clean layouts and prioritizing fast loading times for mobile devices, our team minimizes customer drop-offs and crafts high-converting platforms that elevate user trust of local businesses.
            </p>
          </motion.div>
        </section>

        {/* 3. MISSION & VISION GRID */}
        <section className="py-16 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2 font-mono">Our Foundation</span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight">
              Mission, Vision & <span className="text-cyan-445">Values</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 text-left">
            
            {/* Mission Box */}
            <motion.div
              className="lg:col-span-6 bg-slate-900/60 border border-slate-800/80 rounded-[2rem] p-8 hover:border-cyan-500/30 transition-all shadow-xl relative overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/5 rounded-full blur-2xl" />
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl text-blue-400 flex items-center justify-center mb-6 border border-blue-500/20">
                <Target size={24} />
              </div>
              
              <h3 className="text-xl font-display font-black text-white uppercase mb-4">Our Mission</h3>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed mb-8">
                To build long-term, direct partnerships with enterprise teams and small businesses in Zambia, equipping them with gorgeous custom websites, scalable hybrid mobile databases, and transparent IT guides to unlock actual profit.
              </p>

              <div className="flex items-center justify-between text-slate-500">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest">LOCAL ENGINEERING TRUTHS</span>
                <span className="text-cyan-400 font-bold text-xs font-mono">01</span>
              </div>
            </motion.div>

            {/* Vision Box */}
            <motion.div
              className="lg:col-span-6 bg-slate-900/60 border border-slate-800/80 rounded-[2rem] p-8 hover:border-cyan-500/30 transition-all shadow-xl relative overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 rounded-full blur-2xl" />
              <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl text-cyan-400 flex items-center justify-center mb-6 border border-cyan-500/20">
                <Lightbulb size={24} />
              </div>
              
              <h3 className="text-xl font-display font-black text-white uppercase mb-4">Our Vision</h3>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed mb-8">
                To be the primary pillar of premium digital craftsmanship, web development excellence, and local SSD hosting across Southern Africa. We inspire and trigger tech ecosystems with transparent costs and absolute security.
              </p>

              <div className="flex items-center justify-between text-slate-500">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest">SADC REGIONAL VALUE</span>
                <span className="text-cyan-400 font-bold text-xs font-mono">02</span>
              </div>
            </motion.div>

            {/* Values Banner */}
            <motion.div
              className="lg:col-span-12 bg-gradient-to-br from-slate-900 to-[#0e172a] border border-slate-800 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-lg group"
            >
              <div className="absolute inset-0 technical-grid opacity-[0.25] pointer-events-none" />
              
              <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-5">
                  <div className="w-12 h-12 bg-cyan-500/15 rounded-xl flex items-center justify-center mb-5 border border-cyan-500/20">
                    <ShieldCheck size={22} className="text-cyan-455" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase leading-none mb-4">Values We Code By</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-semibold max-w-sm">
                    Our engineering values dictate how we write systems, how we handle hosting security, and how we deliver on time. There are no shortcuts on the path to master craft.
                  </p>
                </div>

                <div className="lg:col-span-1" />

                <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: 'Trustworthiness', desc: 'No complex billing markup or sudden developer fees. Precise estimates adapted for Zambia.' },
                    { title: 'Hand-Craftsmanship', desc: 'We write layout code block-by-block. No rigid automated templates that hurt SEO.' },
                    { title: 'Security Safeguard', desc: 'Secure database portals with robust encryption codes to secure corporate logs.' },
                    { title: 'Customer Alignment', desc: 'We only evaluate our outcomes by the actual visual performance of your live site.' }
                  ].map((val) => (
                    <div key={val.title} className="bg-slate-950/40 border border-slate-850/60 p-5 rounded-2xl hover:bg-slate-950/80 transition-all">
                      <div className="flex items-center space-x-2.5 mb-2">
                        <Check size={14} className="text-cyan-400 bg-cyan-500/10 p-0.5 rounded-full shrink-0" />
                        <span className="font-display font-black tracking-tight text-xs uppercase">{val.title}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 4. CALL TO ACTION FOR INTAKE BRIEF */}
        <section className="mt-16 text-center max-w-3xl mx-auto bg-slate-900/60 border border-slate-800/80 p-8 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl" />
          <h3 className="text-xl font-display font-black text-white uppercase mb-3">Ready to plan your website layout?</h3>
          <p className="text-xs text-slate-400 font-semibold mb-6 max-w-xl mx-auto leading-relaxed">
            Take 2 minutes to submit your required features, pages, and menus. Complete our specialized website development brief on Google Forms to get immediate pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md flex items-center gap-2 group transition-all"
            >
              <FileText size={14} />
              <span>Submit Web Requirements Form</span>
            </a>
            
            <Link to="/services" className="text-xs font-bold text-slate-350 hover:text-cyan-400 uppercase tracking-wider py-2">
              Browse Services
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
