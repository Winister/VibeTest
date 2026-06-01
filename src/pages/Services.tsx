import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, PRODUCTS } from '../constants';
import * as Icons from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Cpu, Database, Flame, FileText, ArrowRight, Server, Phone } from 'lucide-react';

export default function Services() {
  useEffect(() => {
    document.title = "Our Solutions & Catalog | Stratbyte";
  }, []);

  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'hosting' | 'procurement'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdXGx6Km7SQNY4Fw59KlvBud_ZWtwhvHeUfVKE5i8u0qgtrtg/viewform?usp=publish-editor";

  // Core three services
  const coreThree = SERVICES.filter(s => ['web-development', 'app-development', 'it-consulting'].includes(s.id));
  
  // Secondary Cloud & hosting services (hosting/vps/vpn/analytics/eccomerce/etc)
  const secondaryCloudServices = SERVICES.filter(s => !['web-development', 'app-development', 'it-consulting'].includes(s.id));

  // Procurement products split
  const cloudProducts = PRODUCTS.filter(p => ['compute', 'developer-tools', 'managed-databases', 'networking', 'storage', 'data-backups'].includes(p.id));
  const generalProcurementProducts = PRODUCTS.filter(p => !['compute', 'developer-tools', 'managed-databases', 'networking', 'storage', 'data-backups'].includes(p.id));

  // Simple matches helper
  const matchesSearch = (text: string = '') => text.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    <div className="pt-24 pb-40 overflow-hidden bg-[#0b0f19] text-slate-150 min-h-screen relative selection:bg-blue-600/30 selection:text-cyan-300">
      
      {/* Top Gradient Bar */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500" />

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/25 rounded-full px-4.5 py-1.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest leading-none font-mono">Solutions Catalog</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight mb-6 uppercase text-white leading-[1.05]">
              Elite Services <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">& Custom Products</span>
            </h1>

            <div className="h-[2px] w-20 bg-cyan-400 mx-auto mb-6" />

            <p className="text-sm sm:text-base text-slate-300 font-semibold leading-relaxed max-w-2xl mx-auto">
              We design and deliver clean, hyper-responsive websites, hybrid mobile database platforms, and custom-tailored hosting blueprints mapped directly for Zambian enterprises.
            </p>
          </motion.div>
        </div>

        {/* Categories Tab & Search Filter Row */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-[2rem] p-4.5 mb-16 flex flex-col md:flex-row gap-4 items-center justify-between relative z-10 text-left backdrop-blur-md">
          
          {/* Categories Tabed Layout */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Offerings', count: SERVICES.length + PRODUCTS.length },
              { id: 'core', label: 'Core Engineering (3)', count: coreThree.length },
              { id: 'hosting', label: 'Managed Cloud & Hosting', count: secondaryCloudServices.length + cloudProducts.length },
              { id: 'procurement', label: 'Enterprise Procurement', count: generalProcurementProducts.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-tight uppercase transition-all flex items-center space-x-2 border ${
                  activeCategory === tab.id 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-md shadow-blue-500/10' 
                    : 'bg-slate-950/60 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full flex items-center justify-center font-bold font-mono ${activeCategory === tab.id ? 'bg-white/20 text-white' : 'bg-slate-900 text-slate-500'}`}>{tab.count}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-bold pl-11 pr-5 py-3.5 rounded-full border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/25 outline-none transition-all bg-slate-950 text-white placeholder-slate-500"
            />
          </div>
        </div>

        {/* DISPLAY BLOCKS */}
        <div className="space-y-24 text-left">
          
          <AnimatePresence mode="wait">
            
            {/* 1. CORE THREE SERVICES SECTION */}
            {(activeCategory === 'all' || activeCategory === 'core') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                key="core-block"
              >
                <div className="flex items-center space-x-3 mb-10 border-b border-slate-800/80 pb-5">
                  <div className="w-10 h-10 bg-blue-600/15 text-blue-400 border border-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight">Core Engineering Offerings</h2>
                    <p className="text-[10px] font-bold text-slate-405 uppercase tracking-wider font-mono">Our premium solutions engineered from scratch</p>
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {coreThree.filter(s => matchesSearch(s.title) || matchesSearch(s.description)).map((service, index) => {
                    const IconComponent = (Icons as any)[service.icon || 'Cloud'] || Icons.Cloud;
                    return (
                      <Link key={service.id} to={`/solution/service/${service.id}`}>
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="glass-card p-8 transition-all hover:-translate-y-1 flex flex-col justify-between h-full group"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <div className="w-12 h-12 bg-slate-950 text-blue-400 border border-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all group-hover:text-cyan-400">
                                <IconComponent size={21} />
                              </div>
                              <span className="text-[9px] font-mono font-bold bg-blue-500/10 text-cyan-300 px-2.5 py-1 rounded-full border border-blue-500/15 flex items-center">
                                <ShieldCheck size={10} className="mr-1" />
                                <span>Core Elite Only</span>
                              </span>
                            </div>

                            <h3 className="text-lg font-display font-black text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                              {service.description}
                            </p>
                          </div>

                          <div className="pt-6 border-t border-slate-800/40 mt-6 flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Configure Spec Blueprint</span>
                            <div className="text-cyan-400 p-1.5 rounded-full bg-cyan-500/10 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
                              <Icons.ChevronRight size={13} />
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* 2. SPECIFIC SPECIAL JUNE PROMO EMBED AT INTERSECT */}
            {activeCategory === 'all' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0c162e] to-slate-900 border border-blue-500/20 p-8 rounded-[2.5rem] mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
                <div className="flex items-start space-x-4 text-left">
                  <div className="p-3.5 bg-blue-500/10 border border-blue-500/20 text-cyan-400 rounded-2xl flex items-center justify-center shrink-0">
                    <Flame size={24} className="animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-950 text-cyan-400 border border-blue-900/35 px-2 py-0.5 rounded">Special Package Active</span>
                    <h3 className="text-xl font-display font-black text-white uppercase mt-1">June Promo: Corporate Website for K500</h3>
                    <p className="text-xs text-slate-400 font-semibold leading-relaxed max-w-xl">
                      Get a gorgeous, fast corporate landing page written from scratch for your small business or resume. Direct SSD web hosting is available for as low as K50/month. Domain name and registration excluded.
                    </p>
                  </div>
                </div>
                
                <a 
                  href={googleFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold uppercase text-xs tracking-wider px-6 py-4.5 rounded-xl shadow-md text-nowrap flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
                >
                  <FileText size={15} />
                  <span>Submit June Promo Form</span>
                </a>
              </motion.div>
            )}

            {/* 3. CLOUD SYSTEMS, HOSTING & SECONDARY INFRASTRUCTURE SECTION */}
            {(activeCategory === 'all' || activeCategory === 'hosting') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                key="hosting-block"
                className="pt-12"
              >
                <div className="flex items-center space-x-3 mb-10 border-b border-slate-800/80 pb-5">
                  <div className="w-10 h-10 bg-cyan-600/15 text-cyan-400 border border-cyan-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <Server size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight">Managed Cloud, VPNS & SSD Hosting</h2>
                    <p className="text-[10px] font-bold text-slate-450 uppercase tracking-wider font-mono">Elastic resources, private secure servers, from K50/mo</p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Secondary services */}
                  {secondaryCloudServices.filter(s => matchesSearch(s.title) || matchesSearch(s.description)).map((service, index) => {
                    const IconComponent = (Icons as any)[service.icon || 'Server'] || Icons.Server;
                    return (
                      <Link key={service.id} to={`/solution/service/${service.id}`}>
                        <motion.div
                          className="glass-card p-6 flex flex-col justify-between h-full group"
                        >
                          <div>
                            <div className="w-10 h-10 bg-slate-950 text-cyan-400 border border-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                              <IconComponent size={18} />
                            </div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                              {service.title}
                            </h4>
                            <p className="text-[11px] text-slate-400 font-semibold leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                          
                          <div className="pt-4 border-t border-slate-800/40 mt-4 flex items-center justify-between text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                            <span>View Cloud Info</span>
                            <Icons.ChevronRight size={11} />
                          </div>
                        </motion.div>
                      </Link>
                    );
                  })}

                  {/* Cloud compute products */}
                  {cloudProducts.filter(p => matchesSearch(p.title) || matchesSearch(p.description)).map((product) => {
                    const IconComponent = (Icons as any)[product.icon || 'Database'] || Icons.Database;
                    return (
                      <Link key={product.id} to={`/solution/product/${product.id}`}>
                        <motion.div
                          className="glass-card p-6 flex flex-col justify-between h-full group"
                        >
                          <div>
                            <div className="w-10 h-10 bg-slate-950 text-cyan-300 border border-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                              <IconComponent size={18} />
                            </div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                              {product.title}
                            </h4>
                            <p className="text-[11px] text-slate-400 font-semibold leading-relaxed">
                              {product.description}
                            </p>
                          </div>
                          
                          <div className="pt-4 border-t border-slate-800/40 mt-4 flex items-center justify-between text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                            <span>SLA Specifications</span>
                            <Icons.ChevronRight size={11} />
                          </div>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* 4. PROCUREMENT HARDWARE SUPPLIES */}
            {(activeCategory === 'all' || activeCategory === 'procurement') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                key="procure-block"
                className="pt-12"
              >
                <div className="flex items-center space-x-3 mb-10 border-b border-slate-800/80 pb-5">
                  <div className="w-10 h-10 bg-blue-600/15 text-blue-400 border border-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <Database size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight">Enterprise Supplies & Procurement</h2>
                    <p className="text-[10px] font-bold text-slate-450 uppercase tracking-wider font-mono">HVAC systems, tools, studio, stationery</p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 font-semibold">
                  {generalProcurementProducts.filter(p => matchesSearch(p.title) || matchesSearch(p.description)).map((product) => {
                    const IconComponent = (Icons as any)[product.icon || 'Box'] || Icons.Box;
                    return (
                      <Link key={product.id} to={`/solution/product/${product.id}`}>
                        <motion.div
                          className="glass-card p-6 flex flex-col justify-between h-full group text-left"
                        >
                          <div>
                            <div className="w-10 h-10 bg-slate-950 text-slate-350 border border-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                              <IconComponent size={18} />
                            </div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                              {product.title}
                            </h4>
                            <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
                              {product.description}
                            </p>
                          </div>
                          
                          <div className="pt-4 border-t border-slate-800/40 mt-4 flex items-center justify-between text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                            <span>Sourcing Logistics</span>
                            <Icons.ChevronRight size={11} />
                          </div>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

        {/* 5. INTEGRATED BRIEF FORM SECTION */}
        <section className="mt-32 text-center bg-slate-900/40 border border-slate-800/80 p-8 lg:p-12 rounded-[2.5rem] relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase mb-4">Complete our Web Layout requirements form</h3>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold leading-relaxed mb-8">
              We leverage an integrated, 2-minute web developer questionnaire to collect your requested visual structure, design inspirations, pages, and dynamic database integrations. This streamlines our engineering timeline.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={googleFormUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 group"
              >
                <FileText size={16} />
                <span>Open Google Planner Form</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-all" />
              </a>

              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800 font-bold uppercase text-xs tracking-widest px-8 py-4 rounded-xl transition-all"
              >
                Schedule Direct Consultation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
