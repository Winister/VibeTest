import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Server, Globe, Cpu, MapPin, Phone, Mail } from 'lucide-react';
import { REASONS_TO_CHOOSE } from '../constants';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ArchitectureConfigurator from '../components/ArchitectureConfigurator';

export default function Home() {
  useEffect(() => {
    document.title = "Home | StratByte Solutions";
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section - Matching Cover Page aesthetic */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20 lg:pt-0">
        
        {/* Dynamic ambient backgrounds */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Fine-grain Technical Grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #0099B9 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col justify-center text-left"
            >
              {/* Feature Badge */}
              <div className="inline-flex items-center space-x-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4.5 py-1.5 w-fit mb-8 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest leading-none">Next-Gen Enterprise Cloud Solutions</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-display font-black tracking-tight mb-6 leading-[0.95] uppercase text-gray-900">
                <span className="text-gradient">StratByte</span><br /> 
                <span className="text-brand-primary">Solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-xl mb-10">
                We design and deploy flexible, high-capacity, and enterprise-grade IT infrastructure designed to seamlessly adapt to your scaling requirements.
              </p>

              {/* Core Values Minimal Blocks */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 bg-gray-50/50 border border-gray-100 p-5 rounded-3xl w-fit">
                {['Trust', 'Collaboration', 'Accountability', 'Client Success'].map((value) => (
                  <div key={value} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl shadow-xs border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <span className="text-xs font-black text-gray-700 tracking-tight">{value}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
                <Link to="/services" className="bg-brand-primary text-white px-9 py-4.5 rounded-full text-base sm:text-lg font-black hover:bg-brand-primary/90 hover:-translate-y-1 transition-all shadow-[0_12px_36px_rgba(0,153,185,0.25)] flex items-center justify-center w-full sm:w-auto">
                  Explore Solutions <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/about" className="bg-white text-gray-700 border border-gray-200 px-9 py-4.5 rounded-full text-base sm:text-lg font-black hover:border-brand-primary/30 hover:bg-gray-50 hover:-translate-y-1 transition-all flex items-center justify-center w-full sm:w-auto shadow-xs">
                  About the Team
                </Link>
              </div>
            </motion.div>

            {/* Right Interactive Telemetry Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Backplane Box */}
              <div className="bg-gray-50 rounded-[3rem] p-8 border border-gray-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #9955BB 1px, transparent 0)', backgroundSize: '16px 16px' }} />

                <div className="flex justify-between items-center mb-8 relative z-10">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs uppercase font-black text-gray-400 tracking-wider font-mono">NODE INTEGRITY: OK</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-primary bg-white px-3 py-1 rounded-full border border-gray-100 shadow-xs">
                    TLS 1.3 SECURE
                  </span>
                </div>

                {/* Active Graph Simulator representation */}
                <div className="h-32 bg-white rounded-2xl border border-gray-100 p-4 mb-6 relative overflow-hidden flex items-end">
                  <div className="absolute top-3 left-3 flex justify-between w-[90%]">
                    <span className="text-[10px] uppercase font-black tracking-wider text-gray-400">Simulation Cluster Load</span>
                    <span className="text-xs font-mono font-black text-brand-accent">0.03ms Latency</span>
                  </div>
                  {/* Decorative bar shapes mimicking a server graph */}
                  <div className="w-full h-16 flex items-end justify-between space-x-1 relative z-10 pt-2">
                    {[30, 45, 35, 60, 50, 75, 90, 65, 40, 55, 70, 85, 95, 60, 40, 50, 65].map((val, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ height: 0 }}
                        animate={{ height: `${val}%` }}
                        transition={{ duration: 1, delay: idx * 0.04, repeat: Infinity, repeatType: 'reverse' }}
                        className={`w-full rounded-xs ${idx % 2 === 0 ? 'bg-brand-primary/50' : 'bg-brand-accent/40'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Technical status tags */}
                <div className="space-y-4 relative z-10">
                  <div className="bg-white p-4.5 rounded-2xl border border-gray-100 flex justify-between items-center shadow-xs">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center">
                        <Server size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider">Active Deployments</h4>
                        <p className="text-base font-black text-gray-800">4,281 Global Containers</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full font-bold">100% Core Uptime</span>
                  </div>

                  <div className="bg-white p-4.5 rounded-2xl border border-gray-100 flex justify-between items-center shadow-xs">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 bg-brand-accent/10 text-brand-accent rounded-xl flex items-center justify-center">
                        <Cpu size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider">Managed Bandwidth</h4>
                        <p className="text-base font-black text-gray-800">12.8 Gb / Sec Peak</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono bg-brand-accent/5 text-brand-accent px-2.5 py-1 rounded-full font-bold">Zero-Downtime</span>
                  </div>
                </div>

              </div>
              
              {/* Outer floating badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white border border-gray-100 p-4.5 rounded-2xl shadow-xl flex items-center space-x-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#EBF8FA] flex items-center justify-center text-brand-primary">
                  <Globe size={16} />
                </div>
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Regional Footprint</h5>
                  <p className="text-xs font-black text-gray-800">Lusaka & International Edge</p>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section with Brand Color */}
      <section className="bg-gray-50 text-gray-800 py-20 overflow-hidden relative border-y border-gray-100">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0099B9 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Uptime', value: '99.99%', icon: <Server size={20} /> },
              { label: 'Locations', value: '24+', icon: <Globe size={20} /> },
              { label: 'Efficiency', value: '85%', icon: <Cpu size={20} /> },
              { label: 'Security', value: 'Zero Trust', icon: <ChevronRight size={20} /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col space-y-2 border-l-2 border-gray-200 pl-6 bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm"
              >
                <div className="flex items-center text-brand-accent mb-1">
                  {stat.icon}
                  <span className="text-xs font-bold uppercase tracking-widest ml-2">{stat.label}</span>
                </div>
                <span className="text-3xl md:text-5xl font-display font-black text-brand-primary">{stat.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="bg-white py-14 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 mb-8">
            TRUSTED BY LEADING ENTERPRISES & PARTNERS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-75 hover:opacity-100 transition-opacity">
            {[
              { name: 'ZCF', fullName: 'Zambia Cooperative Federation Limited', type: 'Agriculture & Supply Chain' },
              { name: 'SHEK TECHNOLOGY', fullName: 'SHEK Technology', type: 'Tech & Automation' },
              { name: 'MERRYCURE.', fullName: 'Merrycure', type: 'Healthcare Systems' },
              { name: 'TIGRIS SAFARI', fullName: 'Tigris Safari', type: 'Travel & Eco-Tours' },
              { name: 'BUDGET SAFARI TOURS', fullName: 'Budget Safari Tours', type: 'Tourism Infrastructure' },
            ].map((client) => (
              <div key={client.name} className="flex flex-col items-center bg-gray-50/50 hover:bg-white border border-gray-100/50 hover:border-brand-primary/20 hover:shadow-sm px-6 py-4.5 rounded-2xl transition-all text-center max-w-[200px] min-w-[170px]">
                <span className="font-display font-black tracking-widest text-sm text-gray-800 leading-tight">
                  {client.name}
                </span>
                <span className="text-[9px] font-medium text-gray-500 mt-1 line-clamp-1">
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

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <span className="text-brand-primary font-bold text-xl uppercase tracking-widest block mb-2">Why</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-accent uppercase mb-8 leading-tight">
              Choose Us?
            </h2>
            <div className="w-16 h-1 bg-brand-accent mb-8" />
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              We provide tools and expertise to make your cloud journey smooth and fully optimized. Predictable pricing with the best support suitable for growing businesses.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {REASONS_TO_CHOOSE.map((reason, index) => {
              const IconComponent = (Icons as any)[reason.icon] || Icons.Cloud;
              return (
                <motion.div
                  key={reason.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 group hover:border-brand-accent transition-colors"
                >
                  <div className="w-16 h-16 bg-brand-accent rounded-full text-white flex items-center justify-center mb-6 ring-8 ring-brand-accent/10 group-hover:scale-110 transition-transform">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-brand-accent uppercase">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Infrastructure Sandbox Section */}
      <section className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold text-lg uppercase tracking-widest block mb-2">Configure Your Setup</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-brand-primary uppercase tracking-tight mb-6">
              Interactive cloud <span className="text-brand-accent">canvas</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Take complete architectural control. Connect computing blocks, estimate traffic capabilities, and map your operational footprint before speaking with one of our certified cloud architects.
            </p>
          </div>
          <ArchitectureConfigurator />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 lg:py-32 bg-gray-50 text-gray-800 rounded-[3rem] mx-4 sm:mx-8 mb-24 overflow-hidden relative border border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] mb-8 tracking-tight uppercase">
            Ready to <span className="text-brand-accent">modernize</span> <br /> 
            <span className="text-brand-primary">your stack?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed font-medium">
            Join the elite teams building the future on StratByte's managed infrastructure.
          </p>
          <div className="flex justify-center mb-16">
            <Link to="/contact" className="bg-brand-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:-translate-y-1 transition-all shadow-[0_10px_30px_rgba(0,153,185,0.3)] inline-block">
              Book a Consultation
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left relative z-10">
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-brand-primary/20 hover:shadow-lg transition-all shadow-sm">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-full text-brand-primary flex items-center justify-center mb-6 shrink-0">
                 <MapPin size={28} />
              </div>
              <h4 className="font-bold mb-3 text-gray-900 text-lg">Visit Us</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Plot 217 Minyanya Close<br />Longridge Chilanga<br />Lusaka, Zambia</p>
            </div>
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-brand-primary/20 hover:shadow-lg transition-all shadow-sm">
              <div className="w-14 h-14 bg-brand-accent/10 rounded-full text-brand-accent flex items-center justify-center mb-6 shrink-0">
                 <Phone size={28} />
              </div>
              <h4 className="font-bold mb-3 text-gray-900 text-lg">Call Us</h4>
              <p className="text-sm text-gray-500 leading-relaxed"><br />
                <a href="tel:+260973602780" className="hover:text-brand-primary font-bold transition-colors">+260 97 360 2780</a>
                <br /><span className="opacity-0">.</span>
              </p>
            </div>
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-brand-primary/20 hover:shadow-lg transition-all shadow-sm">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full text-blue-500 flex items-center justify-center mb-6 shrink-0">
                 <Mail size={28} />
              </div>
              <h4 className="font-bold mb-3 text-gray-900 text-lg">Email Us</h4>
              <p className="text-sm text-gray-500 leading-relaxed"><br /><a href="mailto:info@stratbyte.cloud" className="hover:text-brand-primary transition-colors">info@stratbyte.cloud</a><br /><span className="opacity-0">.</span></p>
            </div>
          </div>
        </div>
        {/* Decorative background circle */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      </section>
    </div>
  );
}
