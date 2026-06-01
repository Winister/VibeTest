import { motion } from 'motion/react';
import { ArrowRight, Code, Smartphone, Users, MapPin, Phone, Mail, Sparkles, Flame, CheckCircle2, FileText, Database, Shield, Cpu, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ArchitectureConfigurator from '../components/ArchitectureConfigurator';

export default function Home() {
  useEffect(() => {
    document.title = "High-Quality Websites & Apps | StratByte Solutions";
  }, []);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdXGx6Km7SQNY4Fw59KlvBud_ZWtwhvHeUfVKE5i8u0qgtrtg/viewform?usp=publish-editor";

  return (
    <div className="pt-16 bg-white overflow-hidden">
      
      {/* 1. HERO SECTION (Flowbite inspired with Custom Interactive Vector Artwork) */}
      <section className="relative min-h-[90vh] flex items-center bg-white border-b border-gray-100 py-16 lg:py-24">
        {/* Decorative background vectors */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none" />
        
        {/* Fine Technical Grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #0099B9 1px, transparent 0)', backgroundSize: '24px 24px' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col justify-center text-left"
            >
              {/* Promo Flare Badge */}
              <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 w-fit mb-6 shadow-xs">
                <Flame size={14} className="text-amber-500 animate-pulse animate-bounce" />
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider font-sans">June Website Promo: Website for K500!</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight mb-5 leading-[1.0] text-gray-900 uppercase">
                Premium Custom <br />
                <span className="text-gradient">Websites & Apps</span> <br />
                For Zambian Teams
              </h1>
              
              <p className="text-lg text-gray-500 leading-relaxed font-semibold max-w-xl mb-8">
                StratByte Solutions is Zambia's elite engineering agency. We craft beautifully tailored corporate portfolios, mobile database applications, and precise IT blueprints that elevate operational output and customer conversions.
              </p>

              {/* Core Offerings Pill Matrix */}
              <div className="grid gap-3 sm:grid-cols-3 mb-8 w-full max-w-2xl bg-gray-50/50 p-4 rounded-3xl border border-gray-100">
                {[
                  { title: 'Website Dev', desc: 'Custom, high-speed & SEO ready', icon: <Code size={18} className="text-brand-primary" /> },
                  { title: 'App Systems', desc: 'Secure database portals & apps', icon: <Smartphone size={18} className="text-brand-accent" /> },
                  { title: 'IT Consultancy', desc: 'Architect advice & networking', icon: <Users size={18} className="text-blue-500" /> },
                ].map((offering) => (
                  <div key={offering.title} className="bg-white p-3.5 rounded-2xl border border-gray-100/80 hover:border-brand-primary/20 transition-all flex flex-col justify-between">
                    <div>
                      <div className="p-1.5 bg-gray-50 rounded-lg w-fit mb-2">{offering.icon}</div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-tight">{offering.title}</h4>
                      <p className="text-[10px] text-gray-500 mt-1 leading-snug">{offering.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Strategic Google Form CTA alongside normal page route */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={googleFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-brand-accent text-white px-8 py-4.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-brand-accent/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2 group"
                >
                  <FileText size={16} className="text-white group-hover:scale-110 transition-transform" />
                  <span>Start Website Brief Form</span>
                  <ArrowRight size={14} />
                </a>

                <Link 
                  to="/services" 
                  className="bg-white text-gray-700 border border-gray-200 px-8 py-4.5 rounded-full text-xs font-bold uppercase tracking-wider hover:border-brand-primary/30 hover:bg-gray-50 hover:-translate-y-0.5 transition-all flex items-center justify-center"
                >
                  Explore Solutions Catalog
                </Link>
              </div>
            </motion.div>

            {/* Right Fresh Visual Focus Column (Pristine SVG Vector Stock Graphic representation) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Premium Vector Brand Dashboard Frame */}
              <div className="bg-gray-50 border border-gray-200 rounded-[2.5rem] p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl" />

                <div className="flex justify-between items-center mb-6 relative z-10">
                  <span className="text-[10px] font-mono font-bold text-brand-primary bg-white px-3 py-1 rounded-full border border-gray-150 shadow-xs uppercase tracking-wider">
                    Creative Digital Studio Vector
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[9px] uppercase font-mono font-bold text-gray-400">SYS_ONLINE</span>
                  </div>
                </div>

                {/* Hand-Coded Vector SVG Illustration representing a modern responsive UI cluster, dashboard systems, and server nodes */}
                <div className="bg-white rounded-3xl p-5 border border-gray-150 shadow-sm relative overflow-hidden mb-6 flex flex-col items-center justify-center">
                  <svg viewBox="0 0 400 300" className="w-full max-w-[340px] h-auto drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background abstract connection lines */}
                    <path d="M50 150 L350 150" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M200 50 L200 250" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />
                    
                    {/* Floating Tech Orbs/Layers */}
                    {/* Database Node */}
                    <g transform="translate(60, 200)">
                      <circle cx="30" cy="30" r="30" fill="#EBF8FF" stroke="#3182CE" strokeWidth="1.5" />
                      <path d="M18 20 C18 16 42 16 42 20 M18 26 C18 22 42 22 42 26 M18 32 C18 28 42 28 42 32 M18 38 C18 34 42 34 42 38" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="30" cy="30" r="34" stroke="#90CDF4" strokeWidth="1" strokeDasharray="2 4" />
                    </g>
                    
                    {/* IT Consultancy Gear */}
                    <g transform="translate(280, 200)">
                      <circle cx="30" cy="30" r="30" fill="#FAF5FF" stroke="#805AD5" strokeWidth="1.5" />
                      <path d="M25 30 A5 5 0 1 1 35 30 A5 5 0 1 1 25 30" stroke="#805AD5" strokeWidth="2" />
                      <path d="M30 15 L30 20 M30 40 L30 45 M15 30 L20 30 M40 30 L45 30 M20 20 L24 24 M36 36 L40 40 M20 40 L24 36 M36 20 L40 24" stroke="#805AD5" strokeWidth="2.5" strokeLinecap="round" />
                    </g>

                    {/* Main UI Device Core (Focal point) */}
                    <g transform="translate(110, 50)">
                      {/* Responsive Web browser block */}
                      <rect width="180" height="120" rx="8" fill="#FFFFFF" stroke="#0099B9" strokeWidth="2" />
                      {/* Browser bar */}
                      <rect width="180" height="18" rx="8" fill="#F7FAFC" />
                      <line x1="0" y1="18" x2="180" y2="18" stroke="#E2E8F0" strokeWidth="1" />
                      <circle cx="10" cy="9" r="3" fill="#E53E3E" />
                      <circle cx="18" cy="9" r="3" fill="#DD6B20" />
                      <circle cx="26" cy="9" r="3" fill="#38A169" />
                      
                      {/* Browser inner layout wireframe (Vector art) */}
                      <rect x="12" y="28" width="60" height="30" rx="4" fill="#E6FFFA" stroke="#319795" strokeWidth="1" />
                      <circle cx="32" cy="43" r="8" fill="#319795" opacity="0.2" />
                      <line x1="50" y1="40" x2="64" y2="40" stroke="#319795" strokeWidth="1.5" />
                      <line x1="50" y1="46" x2="58" y2="46" stroke="#319795" strokeWidth="1.5" />

                      <rect x="80" y="28" width="88" height="30" rx="4" fill="#F7FAFC" />
                      <line x1="88" y1="36" x2="152" y2="36" stroke="#A0AEC0" strokeWidth="1.5" />
                      <line x1="88" y1="42" x2="160" y2="42" stroke="#A0AEC0" strokeWidth="1" />
                      <line x1="88" y1="48" x2="128" y2="48" stroke="#A0AEC0" strokeWidth="1" />
                      
                      {/* Interactive Website Score Bubble */}
                      <g transform="translate(12, 70)">
                        <rect width="156" height="38" rx="6" fill="#F0FFF4" stroke="#38A169" strokeWidth="1" />
                        <circle cx="24" cy="19" r="10" fill="#38A169" />
                        <text x="17" y="22" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">99</text>
                        <text x="42" y="18" fill="#22543D" fontSize="10" fontWeight="bold" fontFamily="sans-serif">SPEED SCORE</text>
                        <text x="42" y="28" fill="#38A169" fontSize="8" fontWeight="semibold" fontFamily="sans-serif">100% Mobile Ready</text>
                      </g>
                    </g>
                    
                    {/* Glowing system connectors lines */}
                    <path d="M90 200 L110 130" stroke="#0099B9" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M310 200 L290 130" stroke="#9955BB" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Highlight June Promo within layout */}
                  <div className="bg-gradient-to-r from-brand-accent/5 to-brand-accent/15 border border-brand-accent/20 p-5 rounded-3xl text-left">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-mono font-bold bg-brand-accent text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Promo Active
                      </span>
                      <Flame size={16} className="text-brand-accent animate-pulse" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-1">June Website Special: K500</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                      Beautiful corporate presentation pages crafted natively with high speed. Domain fee excluded. Web hosting starts from K50.
                    </p>
                    <a 
                      href={googleFormUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-3.5 w-full bg-brand-primary text-white py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-brand-primary/95 transition-all flex items-center justify-center gap-1 shadow-sm"
                    >
                      <Sparkles size={11} />
                      <span>Submit June Requirements Brief</span>
                    </a>
                  </div>
                </div>

              </div>
              
              {/* Desktop Floater details */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white border border-gray-150 p-4 rounded-2xl shadow-xl flex items-center space-x-3 hidden sm:flex"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h5 className="text-[9px] font-bold uppercase tracking-wider text-gray-400">Consultation desk</h5>
                  <p className="text-xs font-black text-gray-800">Lusaka-Based Engineers</p>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS BANNER (Flowbite Block) */}
      <section className="bg-gray-50 border-b border-gray-100 py-12 relative overflow-hidden text-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {[
              { label: 'Craft Standards', value: '100% Custom code', desc: 'No cookie-cutter templates' },
              { label: 'Deliveries', value: '30+ Deployments', desc: 'Trustworthy regional systems' },
              { label: 'AFFORDABILITY', value: 'From K500 ZMK', desc: 'No complex billing markup' },
              { label: 'SSD CLOUD WEB HOST', value: 'From K50 / Month', desc: 'Zambian domain support' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col space-y-1 border-l-2 border-brand-primary/20 pl-5 bg-white p-5 rounded-2xl shadow-xs"
              >
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-primary font-mono">{stat.label}</span>
                <span className="text-xl md:text-2xl font-display font-black text-gray-950 uppercase">{stat.value}</span>
                <span className="text-[10px] font-semibold text-gray-400 leading-tight mt-0.5">{stat.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SHOWCASE (Flowbite Feature Grid) */}
      <section id="services" className="py-20 lg:py-28 bg-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-primary font-bold text-sm uppercase tracking-widest block mb-2">Our Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-gray-950 uppercase tracking-tight leading-none">
            Tailored Engineering <br />
            <span className="text-brand-accent">For Dynamic Business</span>
          </h2>
          <p className="text-base text-gray-500 font-semibold leading-relaxed mt-4">
            We focus strictly on premium software structure, discarding bloated packages. Every pixel of our websites and database networks is written directly from scratch by local certified engineers.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Website Development Feature Block */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 bg-white border border-gray-150 rounded-[2rem] shadow-xs hover:shadow-lg hover:border-brand-primary/20 transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6">
                <Code size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-950 uppercase mb-3">Website Development</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold mb-6">
                Hallmark corporate websites, catalog showcases, and responsive landing setups. Fully integrated with standard search optimization algorithms, custom contact matrices, and high-speed delivery guarantees.
              </p>
              
              <ul className="space-y-2.5 mb-8 border-t border-gray-100 pt-4 text-xs font-semibold text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-brand-primary" /> <span>Mobile-responsive rendering</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-brand-primary" /> <span>Technical SEO pre-configured</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-brand-primary" /> <span>Custom UI layouts—no templates</span></li>
              </ul>
            </div>
            
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white py-3.5 px-5 rounded-xl text-xs font-bold uppercase hover:bg-brand-primary/95 transition-colors text-center w-full shadow-md"
            >
              <span>Submit Web Requirements</span>
              <ArrowRight size={12} />
            </a>
          </motion.div>

          {/* App & Database Systems Feature Block */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 bg-white border border-gray-150 rounded-[2rem] shadow-xs hover:shadow-lg hover:border-brand-accent/20 transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-2xl flex items-center justify-center mb-6">
                <Smartphone size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-950 uppercase mb-3">Custom Mobile Database Systems</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold mb-6">
                Bespoke software platforms configured on local databases. We build web portals, corporate reporting systems, and secure Android/iOS hybrid applications mapped perfectly around your existing workspace.
              </p>
              
              <ul className="space-y-2.5 mb-8 border-t border-gray-100 pt-4 text-xs font-semibold text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-brand-accent" /> <span>Offline database storage capability</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-brand-accent" /> <span>Mobile money gateway APIs</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-brand-accent" /> <span>Secure administrative logging</span></li>
              </ul>
            </div>
            
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 py-3.5 px-5 rounded-xl text-xs font-bold uppercase hover:bg-gray-50 transition-colors text-center w-full"
            >
              <span>Request Application Brief</span>
              <ArrowRight size={12} />
            </Link>
          </motion.div>

          {/* IT Consultancy Feature Block */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 bg-white border border-gray-150 rounded-[2rem] shadow-xs hover:shadow-lg hover:border-blue-500/20 transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-blue-50/70 text-blue-550 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
                <Users size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-950 uppercase mb-3">Strategic IT Consultancy</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold mb-6">
                Professional architectural guides and networking setup reviews. We assess legacy operations, assist corporate network security engineering, and design robust cloud models custom-adapted to local bandwidth.
              </p>
              
              <ul className="space-y-2.5 mb-8 border-t border-gray-100 pt-4 text-xs font-semibold text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-blue-500" /> <span>Equipment procurement advice</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-blue-500" /> <span>Cloud migration strategy sheets</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-blue-500" /> <span>Network bottleneck debugging</span></li>
              </ul>
            </div>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-gray-50 text-gray-700 hover:bg-gray-100 py-3.5 px-5 rounded-xl text-xs font-bold uppercase transition-colors text-center w-full"
            >
              <span>Schedule Architecture Audit</span>
            </Link>
          </motion.div>

        </div>

        {/* Low-Priority services disclaimer pill */}
        <div className="mt-12 bg-gray-50 p-4 rounded-2xl border border-gray-100 max-w-2xl mx-auto flex items-center justify-between gap-4">
          <p className="text-[10px] text-gray-400 font-bold text-left uppercase tracking-wider">
            * We also deliver low-latency web hosting (SSD from K50/month), Virtual Private Servers, and corporate secure VPN setups.
          </p>
          <Link to="/services" className="text-[10px] font-bold text-brand-primary hover:text-brand-accent uppercase shrink-0">
            View Hosting
          </Link>
        </div>
      </section>

      {/* 4. STRATEGIC WEBPAGE REQS FORM HERO BANNER (Highly noticeable Google Form CTA Block) */}
      <section className="py-16 bg-gradient-to-br from-[#0c2340] to-brand-primary text-white border-y border-brand-accent/20 relative overflow-hidden">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="max-w-xl">
            <span className="text-amber-300 font-bold text-xs uppercase tracking-widest block mb-2 font-mono">Collect Data & Get Started</span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase leading-tight mb-4 text-white">
              Planning your dynamic layout? <br />
              <span className="text-brand-accent">Submit your specifications.</span>
            </h2>
            <p className="text-sm text-gray-300 font-medium leading-relaxed">
              Skip complex emails. Access our standardized website development requirements planner form. Share your preferred menus, dynamic features, and styles to receive an instant blueprint quote.
            </p>
          </div>
          
          <div className="shrink-0 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-purple-950 px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <FileText size={16} />
              <span>Fill out Requirements Form</span>
            </a>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center"
            >
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC BUDGET & SCOPE ESTIMATOR PLAYGROUND */}
      <section id="estimator" className="py-20 bg-gray-50 relative border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="text-brand-accent font-bold text-sm uppercase tracking-widest block mb-1">Tailor Your Setup</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-950 uppercase tracking-tight leading-none">
              Interactive Estimator <br />
              <span className="text-brand-primary">& Architecture Blueprint</span>
            </h2>
            <p className="text-sm text-gray-500 font-semibold max-w-2xl mx-auto mt-4 leading-relaxed">
              Tweak core parameters, structural scopes, and systems. Compute a transparent draft budget and directly configure your specialized code blueprint with us.
            </p>
          </div>
          <ArchitectureConfigurator />
        </div>
      </section>

      {/* 6. TRUSTED CLIENTS MATRIX */}
      <section className="bg-white py-16 border-b border-gray-100/50">
        <div className="max-w-screen-xl mx-auto px-4">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
            PROUDLY TRUSTED BY INNOVATIVE LOCAL ENTERPRISES & SADC PARTNERS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {[
              { name: 'ZCF', fullName: 'Zambia Cooperative Federation Limited', type: 'Agriculture & Supply Chain' },
              { name: 'SHEK TECHNOLOGY', fullName: 'SHEK Technology', type: 'Tech & Automation' },
              { name: 'MERRYCURE.', fullName: 'Merrycure Healthcare Systems', type: 'Clinical Portals' },
              { name: 'TIGRIS SAFARI', fullName: 'Tigris Safari Tours', type: 'Travel & Ecosystem' },
              { name: 'BUDGET SAFARI TOURS', fullName: 'Budget Safari Tours', type: 'Logistics Infrastructure' },
            ].map((client) => (
              <div key={client.name} className="flex flex-col items-center bg-gray-50 hover:bg-white border border-gray-150 hover:border-brand-primary/20 hover:shadow-sm px-6 py-4.5 rounded-2xl transition-all text-center max-w-[200px] min-w-[170px]">
                <span className="font-display font-extrabold tracking-wider text-sm text-gray-800 leading-tight">
                  {client.name}
                </span>
                <span className="text-[9px] font-bold text-gray-400 mt-1.5 leading-none pl-1 text-center truncate w-full">
                  {client.fullName}
                </span>
                <span className="text-[7.5px] font-mono tracking-wider text-brand-primary uppercase mt-1">
                  {client.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA & LOCAL HQ DETAIL BLOCK (Flowbite contact panel with Chilanga location parameters) */}
      <section id="contact" className="py-20 lg:py-28 bg-white max-w-screen-xl mx-auto px-4">
        <div className="bg-gray-50 rounded-[3rem] p-8 lg:p-14 border border-gray-200 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-92 h-92 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-92 h-92 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black leading-[1.05] text-gray-900 uppercase tracking-tight mb-6">
              Let's construct <span className="text-brand-accent">your digital</span> <br /> 
              <span className="text-gradient">presence.</span>
            </h2>
            <p className="text-base text-gray-500 font-semibold mb-10 max-w-md mx-auto leading-relaxed">
              Speak directly with certified elite software architects in Chilanga to map custom layouts, mobile systems, or security setups.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <a 
                href={googleFormUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-primary hover:bg-brand-primary/95 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-2"
              >
                <FileText size={14} />
                <span>Submit Website Briefing Form</span>
              </a>

              <Link 
                to="/contact" 
                className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-gray-50 hover:-translate-y-0.5 transition-all text-center flex items-center justify-center shadow-xs"
              >
                Book Offline Meeting
              </Link>
            </div>
            
            {/* Quick coordinates cards info (Flowbite formatted) */}
            <div className="grid gap-6 md:grid-cols-3 text-left">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-primary/20 transition-all shadow-xs">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl text-brand-primary flex items-center justify-center mb-4 shrink-0">
                  <MapPin size={20} />
                </div>
                <h4 className="font-bold mb-2 text-gray-900 text-sm uppercase tracking-tight">HQ Location</h4>
                <p className="text-xs font-bold text-gray-500 leading-relaxed">Plot 217 Minyanya Close<br />Longridge Chilanga<br />Lusaka, Zambia</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-accent/20 transition-all shadow-xs">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-xl text-brand-accent flex items-center justify-center mb-4 shrink-0">
                  <Phone size={20} />
                </div>
                <h4 className="font-bold mb-2 text-gray-900 text-sm uppercase tracking-tight">Direct Calls</h4>
                <p className="text-xs font-bold text-gray-500 leading-relaxed">
                  Available Mon-Sat
                  <br />
                  <a href="tel:+260973602780" className="hover:text-brand-primary hover:underline transition-all">+260 97 360 2780</a>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-primary/20 transition-all shadow-xs">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl text-blue-500 flex items-center justify-center mb-4 shrink-0">
                  <Mail size={20} />
                </div>
                <h4 className="font-bold mb-2 text-gray-900 text-sm uppercase tracking-tight">Transmission Email</h4>
                <p className="text-xs font-bold text-gray-500 leading-relaxed">
                  General and Sales desk
                  <br />
                  <a href="mailto:info@stratbyte.cloud" className="hover:text-brand-primary hover:underline transition-all">info@stratbyte.cloud</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
