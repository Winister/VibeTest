import { motion } from 'motion/react';
import { ShieldCheck, Target, Lightbulb, Users, Award, Zap, Check, ArrowRight, FileText } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    document.title = "Our DNA | StratByte Solutions";
  }, []);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdXGx6Km7SQNY4Fw59KlvBud_ZWtwhvHeUfVKE5i8u0qgtrtg/viewform?usp=publish-editor";

  return (
    <div className="pt-24 pb-40 bg-white overflow-hidden">
      
      {/* Structural accent bar */}
      <div className="w-full h-1.5 bg-gradient-to-r from-brand-primary via-brand-accent to-blue-600" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12">
        {/* Dynamic abstract glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

        {/* 1. HERO CONCEPT VIEW */}
        <div className="py-12 lg:py-20 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                <span className="text-xs font-black text-brand-primary uppercase tracking-widest leading-none font-sans">Corporate DNA</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight mb-6 leading-[1.0] uppercase text-gray-900">
                Pioneering <span className="text-brand-primary">Digital Craft</span><br />
                Across <span className="text-brand-accent">SADC Region</span>
              </h1>

              <div className="h-[2px] w-20 bg-brand-accent mb-8" />

              <p className="text-lg md:text-xl text-gray-505 font-medium leading-relaxed mb-8 max-w-2xl">
                StratByte Solutions is an elite, 100% Zambian-owned technology firm specializing in beautiful custom web development, complex mobile database architectures, and certified IT operations. We help ambitious companies translate legacy struggles into lightning-fast, secure digital solutions.
              </p>

              {/* Unique stats bento element inside about */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 bg-gray-50 border border-gray-150 p-6 rounded-[2rem]">
                <div>
                  <h4 className="text-3xl font-display font-black text-brand-primary uppercase">100%</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Zambian Owned</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display font-black text-brand-accent uppercase">30+</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Projects Delivered</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="text-3xl font-display font-black text-blue-600 uppercase">Enterprise</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Grade Architecture</p>
                </div>
              </div>
            </motion.div>

            {/* Visual Vector Stock Illustration represented via custom geometric code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-[2.5rem] p-8 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #0099B9 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">STRUCTURE PROTOCOL</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                </div>

                <div className="space-y-5 relative z-10">
                  
                  {/* Service Card style 1 */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-start space-x-4 shadow-sm hover:border-brand-primary/20 transition-all">
                    <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary shrink-0">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-gray-900 uppercase tracking-tight mb-1">Customer Obsessed Blueprint</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">Guiding regional enterprises and local farms with tailored expert engineering consulting plans.</p>
                    </div>
                  </div>

                  {/* Service Card style 2 */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-start space-x-4 shadow-sm hover:border-brand-accent/20 transition-all">
                    <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-gray-900 uppercase tracking-tight mb-1">Elite Engineering Standards</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">Dedicated local experts directly supporting your custom hosting and databases.</p>
                    </div>
                  </div>

                  {/* Service Card style 3 */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-start space-x-4 shadow-sm hover:border-blue-500/10 transition-all">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 shrink-0">
                      <Zap size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-gray-900 uppercase tracking-tight mb-1">Zambian Cloud Infrastructure</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">Ensuring high speed database response tunnels for prominent tech ecosystems in Lusaka.</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 2. PHILOSOPHY CALLOUT (Flowbite banner) */}
        <section className="my-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 sm:p-14 text-center max-w-5xl mx-auto rounded-[3rem] border border-gray-200 overflow-hidden relative shadow-xs"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl" />
            
            <Lightbulb size={36} className="mx-auto text-brand-accent mb-6 animate-pulse" />
            
            <h2 className="text-gray-900 text-2xl md:text-3xl font-display font-black uppercase tracking-tight leading-tight max-w-3xl mx-auto mb-6">
              "We embrace modern design as a core value, discarding templates to write custom responsive code for every layout we launch."
            </h2>
            
            <p className="text-xs md:text-sm font-semibold leading-relaxed max-w-2xl mx-auto text-gray-505">
              By investing systematically in elite, clean layouts and prioritizing fast loading times for mobile devices, our team minimizes customer drop-offs and crafts high-converting platforms that elevate user trust of local businesses.
            </p>
          </motion.div>
        </section>

        {/* 3. BENTO STRUCTURE (Mission, Vision, Values) */}
        <section className="py-16 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold text-sm uppercase tracking-widest block mb-2">Our Foundation</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-950 uppercase tracking-tight">
              Mission, Vision & <span className="text-brand-accent">Values</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            
            {/* Box 1: Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 bg-white border border-gray-200 rounded-[2.5rem] p-8 hover:border-brand-primary/30 hover:shadow-lg transition-all shadow-xs relative group overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-primary/5 rounded-full blur-2xl" />
              <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl text-brand-primary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Target size={24} />
              </div>
              
              <h3 className="text-xl font-display font-black text-gray-950 uppercase mb-4">Our Mission</h3>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                To build long-term, direct partnerships with enterprise teams and small businesses in Zambia, equipping them with gorgeous custom websites, scalable hybrid mobile databases, and transparent IT guides to unlock actual profit.
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest">LOCAL ENGINEERING TRUTHS</span>
                <span className="text-brand-primary font-bold text-xs font-mono">01</span>
              </div>
            </motion.div>

            {/* Box 2: Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 bg-white border border-gray-200 rounded-[2.5rem] p-8 hover:border-brand-accent/30 hover:shadow-lg transition-all shadow-xs relative group overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-accent/5 rounded-full blur-2xl" />
              <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl text-brand-accent flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Lightbulb size={24} />
              </div>
              
              <h3 className="text-xl font-display font-black text-gray-950 uppercase mb-4">Our Vision</h3>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                To be the primary pillar of premium digital craftsmanship, web development excellence, and local SSD hosting across Southern Africa. We inspire and trigger tech ecosystems with transparent costs and absolute security.
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest">SADC REGIONAL VALUE</span>
                <span className="text-brand-accent font-bold text-xs font-mono">02</span>
              </div>
            </motion.div>

            {/* Box 3: Values Core Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-12 bg-gradient-to-br from-brand-primary to-[#0e274c] rounded-[3rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-sm text-left group"
            >
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
              
              <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-5">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5 border border-white/10">
                    <ShieldCheck size={22} className="text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black uppercase leading-none mb-4">Values We Code By</h3>
                  <p className="text-xs text-white/80 leading-relaxed font-semibold max-w-sm">
                    Our engineering values dictate how we write systems, how we handle hosting security, and how we deliver on time. There are no safe shortcuts on the path to master craft.
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
                    <div key={val.title} className="bg-white/10 border border-white/10 p-5 rounded-2xl hover:bg-white/15 transition-all">
                      <div className="flex items-center space-x-2.5 mb-2">
                        <Check size={14} className="text-white bg-white/15 p-0.5 rounded-full shrink-0" />
                        <span className="font-display font-black tracking-tight text-xs uppercase">{val.title}</span>
                      </div>
                      <p className="text-[10px] text-white/80 leading-relaxed font-semibold">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 4. CALL TO ACTION BRINGING IN GOOGLE FORM LINK */}
        <section className="mt-16 text-center max-w-3xl mx-auto bg-gray-50 border border-gray-200 p-8 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full blur-2xl" />
          <h3 className="text-xl font-display font-black text-gray-900 uppercase mb-3">Ready to plan your website layout?</h3>
          <p className="text-xs text-gray-500 font-semibold mb-6 max-w-xl mx-auto leading-relaxed">
            Take 2 minutes to submit your required features, pages, and menus. Complete our specialized website development brief on Google Forms to get immediate pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand-accent hover:bg-brand-accent/90 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md flex items-center gap-2 group transition-all"
            >
              <FileText size={14} className="group-hover:scale-105 transition-all" />
              <span>Submit Web Requirements Form</span>
            </a>
            
            <Link to="/services" className="text-xs font-bold text-gray-750 hover:text-brand-primary uppercase tracking-wider py-2">
              Browse Services
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
