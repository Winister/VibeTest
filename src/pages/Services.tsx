import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, PRODUCTS } from '../constants';
import * as Icons from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Cpu, Database, Flame, FileText, ArrowRight, Server, Phone } from 'lucide-react';

export default function Services() {
  useEffect(() => {
    document.title = "Our Portfolio | StratByte Solutions";
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
    <div className="pt-24 pb-40 overflow-hidden bg-white text-gray-800">
      
      {/* Top Gradient Bar */}
      <div className="w-full h-1.5 bg-gradient-to-r from-brand-primary via-brand-accent to-blue-600" />

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-accent/5 border border-brand-accent/10 rounded-full px-4.5 py-1.5 mb-6 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-black text-brand-accent uppercase tracking-widest leading-none font-sans">Solutions Catalog</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight mb-6 uppercase text-gray-900 leading-[1.05]">
              Elite Services <br />
              <span className="text-gradient">& Custom Products</span>
            </h1>

            <div className="h-[2px] w-24 bg-brand-accent mx-auto mb-6" />

            <p className="text-base sm:text-lg text-gray-505 font-medium leading-relaxed max-w-2xl mx-auto">
              We design and deliver clean, hyper-responsive websites, hybrid mobile database platforms, and custom-tailored SSD hosting systems mapped directly for Zamian enterprises.
            </p>
          </motion.div>
        </div>

        {/* Categories Tab & Search Filter Row */}
        <div className="bg-gray-50 border border-gray-150 rounded-[2.5rem] p-4.5 mb-16 flex flex-col md:flex-row gap-4 items-center justify-between relative z-10 text-left">
          
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
                className={`px-5 py-2.5 rounded-full text-xs font-black tracking-tight uppercase transition-all flex items-center space-x-2 ${
                  activeCategory === tab.id 
                    ? 'bg-brand-primary text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:text-brand-primary border border-gray-150 hover:border-gray-250'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold ${activeCategory === tab.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400 font-mono'}`}>{tab.count}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-bold pl-11 pr-5 py-3 rounded-full border border-gray-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 outline-none transition-all bg-white text-gray-800"
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
                <div className="flex items-center space-x-3 mb-10 border-b border-gray-100 pb-5">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-black text-gray-900 uppercase tracking-tight">Core Engineering Offerings</h2>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Our premium solutions engineered from scratch</p>
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
                          className="bg-white border border-gray-200 hover:border-brand-primary/35 rounded-[2rem] p-7 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between h-full group"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <div className="w-12 h-12 bg-gray-50 text-brand-primary border border-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all group-hover:text-brand-accent">
                                <IconComponent size={21} />
                              </div>
                              <span className="text-[9px] font-mono font-bold bg-brand-primary/5 text-brand-primary px-2.5 py-1 rounded-full border border-brand-primary/10 flex items-center">
                                <ShieldCheck size={10} className="mr-1" />
                                <span>Core Elite Only</span>
                              </span>
                            </div>

                            <h3 className="text-lg font-display font-black text-gray-900 uppercase tracking-tight mb-2 group-hover:text-brand-primary transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                              {service.description}
                            </p>
                          </div>

                          <div className="pt-6 border-t border-gray-50 mt-6 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Configure Spec Blueprint</span>
                            <div className="text-brand-primary p-1 rounded-full bg-brand-primary/5 group-hover:bg-brand-primary group-hover:text-white transition-all">
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
                className="bg-gradient-to-r from-amber-50 to-brand-accent/5 border border-amber-250 p-8 rounded-[2.5rem] mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl" />
                <div className="flex items-start space-x-4">
                  <div className="p-3.5 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Flame size={24} className="animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Special Package Active</span>
                    <h3 className="text-xl font-display font-black text-gray-950 uppercase mt-1">June Promo: Corporate Website for K500</h3>
                    <p className="text-xs text-gray-500 font-semibold leading-relaxed max-w-xl">
                      Get a gorgeous, fast corporate landing page written from scratch for your small business or resume. Direct SSD web hosting is available for as low as K50/month. Domain name and registration excluded.
                    </p>
                  </div>
                </div>
                
                <a 
                  href={googleFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-brand-primary hover:bg-brand-primary/95 text-white font-bold uppercase text-xs tracking-wider px-6 py-4.5 rounded-full shadow-md text-nowrap flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
                >
                  <FileText size={15} />
                  <span>Submit June Promo Form</span>
                </a>
              </motion.div>
            )}

            {/* 3. CLOUD SYSTEMS, HOSTING & SECONDARY INFRASTRUCTURE SECTION (Highlighted less) */}
            {(activeCategory === 'all' || activeCategory === 'hosting') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                key="hosting-block"
                className="pt-12"
              >
                <div className="flex items-center space-x-3 mb-10 border-b border-gray-100 pb-5">
                  <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent shrink-0">
                    <Server size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-black text-gray-900 uppercase tracking-tight">Managed Cloud, VPNS & SSD Hosting</h2>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Elastic resources, private secure servers, from K50/mo</p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Secondary services */}
                  {secondaryCloudServices.filter(s => matchesSearch(s.title) || matchesSearch(s.description)).map((service, index) => {
                    const IconComponent = (Icons as any)[service.icon || 'Server'] || Icons.Server;
                    return (
                      <Link key={service.id} to={`/solution/service/${service.id}`}>
                        <motion.div
                          className="bg-white border border-gray-150 hover:border-brand-accent/25 rounded-3xl p-6 transition-all hover:shadow-md flex flex-col justify-between h-full group"
                        >
                          <div>
                            <div className="w-10 h-10 bg-gray-50 text-brand-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                              <IconComponent size={18} />
                            </div>
                            <h4 className="text-sm font-bold text-gray-950 uppercase tracking-tight mb-2 group-hover:text-brand-accent transition-colors">
                              {service.title}
                            </h4>
                            <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                          
                          <div className="pt-4 border-t border-gray-50 mt-4 flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider">
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
                          className="bg-white border border-gray-150 hover:border-brand-accent/25 rounded-3xl p-6 transition-all hover:shadow-md flex flex-col justify-between h-full group"
                        >
                          <div>
                            <div className="w-10 h-10 bg-gray-50 text-brand-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                              <IconComponent size={18} />
                            </div>
                            <h4 className="text-sm font-bold text-gray-950 uppercase tracking-tight mb-2 group-hover:text-brand-accent transition-colors">
                              {product.title}
                            </h4>
                            <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                              {product.description}
                            </p>
                          </div>
                          
                          <div className="pt-4 border-t border-gray-50 mt-4 flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider">
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

            {/* 4. PROCUREMENT HARDWARE SUPPLIES (Procurement supplies - cooling, printing, hvac, tools) */}
            {(activeCategory === 'all' || activeCategory === 'procurement') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                key="procure-block"
                className="pt-12"
              >
                <div className="flex items-center space-x-3 mb-10 border-b border-gray-100 pb-5">
                  <div className="w-10 h-10 bg-blue-50/70 text-blue-550 border border-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Database size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-black text-gray-900 uppercase tracking-tight">Enterprise Supplies & Procurement</h2>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">HVAC system conditioning, tools, audio-visual studio supplies, stationery</p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {generalProcurementProducts.filter(p => matchesSearch(p.title) || matchesSearch(p.description)).map((product) => {
                    const IconComponent = (Icons as any)[product.icon || 'Box'] || Icons.Box;
                    return (
                      <Link key={product.id} to={`/solution/product/${product.id}`}>
                        <motion.div
                          className="bg-white border border-gray-150 rounded-3xl p-6 transition-all hover:shadow-md hover:border-gray-250 flex flex-col justify-between h-full group"
                        >
                          <div>
                            <div className="w-10 h-10 bg-gray-50 text-gray-750 border border-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                              <IconComponent size={18} />
                            </div>
                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-tight mb-2 group-hover:text-brand-accent transition-colors">
                              {product.title}
                            </h4>
                            <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                              {product.description}
                            </p>
                          </div>
                          
                          <div className="pt-4 border-t border-gray-50 mt-4 flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider">
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

        {/* 5. FLOWBITE-STYLE WIDE HELP BANNER WITH DIRECT GOOGLE FORM BUTTON */}
        <section className="mt-32 text-center bg-gray-50 border border-gray-200 p-8 lg:p-12 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-xl sm:text-2xl font-display font-black text-gray-950 uppercase mb-4">Complete our Web Layout requirements form</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed mb-8">
              We leverage an integrated, 2-minute web developer questionnaire to collect your requested visual structure, design inspirations, pages, and dynamic database integrations. This streamlines our engineering timeline.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={googleFormUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent/90 text-white font-bold uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 group"
              >
                <FileText size={16} />
                <span>Open Google Planner Form</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-all" />
              </a>

              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-bold uppercase text-xs tracking-widest px-8 py-4 rounded-xl transition-all"
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
