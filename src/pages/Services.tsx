import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, PRODUCTS } from '../constants';
import * as Icons from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Cpu, ShieldCheck, Truck, BookOpen } from 'lucide-react';

export default function Services() {
  useEffect(() => {
    document.title = "Our Portfolio | StratByte Solutions";
  }, []);

  const [activeCategory, setActiveCategory] = useState<'all' | 'services' | 'products' | 'hardware'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Group or classify items
  const filteredServices = SERVICES.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProducts = PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Classify products into high-tech vs general office supplies/HVAC
  const techProductsList = filteredProducts.filter(p => 
    ['compute', 'developer-tools', 'managed-databases', 'networking', 'storage', 'data-backups'].includes(p.id)
  );

  const physicalSuppliesList = filteredProducts.filter(p => 
    !['compute', 'developer-tools', 'managed-databases', 'networking', 'storage', 'data-backups'].includes(p.id)
  );

  return (
    <div className="pt-24 pb-40 overflow-hidden bg-white">
      {/* Dynamic Background Layout */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Precision Grid Background Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1a1a1a 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Page Title & Mission Intro */}
        <div className="pt-16 pb-12 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Service Counter Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-accent/5 border border-brand-accent/10 rounded-full px-4.5 py-1.5 mb-6 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-black text-brand-accent uppercase tracking-widest leading-none">Complete Catalog Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight mb-6 uppercase text-gray-900 leading-[1.0]">
              Enterprise <br />
              <span className="text-brand-primary">Solutions & Products</span>
            </h1>

            <div className="h-[2px] w-24 bg-brand-accent mx-auto mb-8" />

            <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
              From mission-critical virtual cloud computing networks to certified hardware procurement, we equip Zambian and regional enterprises with absolute operational readiness.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Navigation, Category Filter & Search row */}
        <div className="bg-gray-50/80 border border-gray-150 rounded-[2.5rem] p-4.5 mb-16 flex flex-col md:flex-row gap-4 items-center justify-between relative z-10">
          
          {/* Categories Tabbed layout */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Portfolio', count: SERVICES.length + PRODUCTS.length },
              { id: 'services', label: 'Consulting & Cloud Services', count: SERVICES.length },
              { id: 'products', label: 'Cloud Infrastructure', count: techProductsList.length },
              { id: 'hardware', label: 'Enterprise Procurement', count: physicalSuppliesList.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-black tracking-tight uppercase transition-all flex items-center space-x-2 ${
                  activeCategory === tab.id 
                    ? 'bg-brand-primary text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:text-brand-primary border border-gray-100 hover:border-gray-250'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold ${activeCategory === tab.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>{tab.count}</span>
              </button>
            ))}
          </div>

          {/* Search bar layout */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-bold pl-11 pr-5 py-3 rounded-full border border-gray-150 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 outline-none transition-all bg-white text-gray-800"
            />
          </div>
        </div>

        {/* Dynamic Display area using Framer Motion */}
        <div className="space-y-24">
          
          <AnimatePresence mode="wait">
            {/* Segment 1: Consultancy & Cloud Services */}
            {(activeCategory === 'all' || activeCategory === 'services') && filteredServices.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                key="services-block"
              >
                <div className="flex items-center space-x-3 mb-10 border-b border-gray-100 pb-5">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-black text-gray-900 uppercase tracking-tight">Managed Cloud & Solutions</h2>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Strategic consulting, software engineering & hypervisors</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service, index) => {
                    const IconComponent = (Icons as any)[service.icon || 'Cloud'] || Icons.Cloud;
                    return (
                      <Link key={service.id} to={`/solution/service/${service.id}`}>
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.04 }}
                          className="bg-white border border-gray-150 hover:border-brand-primary/35 rounded-[2rem] p-7 transition-all hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between h-full group cursor-pointer"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <div className="w-12 h-12 bg-gray-50 text-brand-primary border border-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform group-hover:text-brand-accent">
                                <IconComponent size={22} />
                              </div>
                              <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-brand-primary/5 text-brand-primary px-2.5 py-1 rounded-full border border-brand-primary/10 flex items-center space-x-1">
                                <ShieldCheck size={10} className="mr-0.5" />
                                <span>SLA Backed</span>
                              </span>
                            </div>

                            <h3 className="text-lg font-display font-black text-gray-800 uppercase tracking-tight mb-2 group-hover:text-brand-primary transition-colors">
                              {service.title}
                            </h3>
                            
                            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                              {service.description}
                            </p>
                          </div>

                          <div className="pt-6 border-t border-gray-50 mt-6 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Explore Blueprint</span>
                            <div className="text-brand-primary p-1 rounded-full bg-brand-primary/5 group-hover:bg-brand-primary group-hover:text-white transition-all">
                              <Icons.ChevronRight size={14} />
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Segment 2: Cloud Infrastructure (High-tech products) */}
            {(activeCategory === 'all' || activeCategory === 'products') && techProductsList.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                key="cloud-tech-block"
                className="mt-16"
              >
                <div className="flex items-center space-x-3 mb-10 border-b border-gray-100 pb-5">
                  <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                    <Icons.Database size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-black text-gray-900 uppercase tracking-tight">Cloud Infrastructure Products</h2>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Infinite storage, load balancers & redundant computing</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techProductsList.map((product, index) => {
                    const IconComponent = (Icons as any)[product.icon || 'Box'] || Icons.Box;
                    return (
                      <Link key={product.id} to={`/solution/product/${product.id}`}>
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.04 }}
                          className="bg-white border border-gray-150 hover:border-brand-accent/35 rounded-[2rem] p-7 transition-all hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between h-full group cursor-pointer"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <div className="w-12 h-12 bg-gray-50 text-brand-accent border border-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform group-hover:text-brand-primary">
                                <IconComponent size={22} />
                              </div>
                              <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-brand-accent/5 text-brand-accent px-2.5 py-1 rounded-full border border-brand-accent/10">
                                Elastic Setup
                              </span>
                            </div>

                            <h3 className="text-lg font-display font-black text-gray-800 uppercase tracking-tight mb-2 group-hover:text-brand-primary transition-colors">
                              {product.title}
                            </h3>
                            
                            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                              {product.description}
                            </p>
                          </div>

                          <div className="pt-6 border-t border-gray-50 mt-6 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Review Tech Deck</span>
                            <div className="text-brand-accent p-1 rounded-full bg-brand-accent/5 group-hover:bg-brand-accent group-hover:text-white transition-all">
                              <Icons.ChevronRight size={14} />
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Segment 3: General Enterprise Supplies (Supplies, Print, cooling distribution logic) */}
            {(activeCategory === 'all' || activeCategory === 'hardware') && physicalSuppliesList.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                key="hardware-block"
                className="mt-16"
              >
                <div className="flex items-center space-x-3 mb-10 border-b border-gray-100 pb-5">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                    <Truck size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-black text-gray-900 uppercase tracking-tight">Enterprise & Office Procurement</h2>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Industrial tools, HVAC server chilling, audio-visual studio equipment & stationery</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {physicalSuppliesList.map((product, index) => {
                    const IconComponent = (Icons as any)[product.icon || 'Box'] || Icons.Box;
                    return (
                      <Link key={product.id} to={`/solution/product/${product.id}`}>
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.04 }}
                          className="bg-white border border-gray-150 hover:border-gray-250 rounded-[2rem] p-7 transition-all hover:-translate-y-1.5 hover:shadow-md flex flex-col justify-between h-full group cursor-pointer"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <div className="w-12 h-12 bg-gray-50 text-gray-700 border border-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform group-hover:text-brand-accent">
                                <IconComponent size={21} />
                              </div>
                              <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full flex items-center">
                                <Truck size={10} className="mr-1" />
                                <span>Lusaka Express</span>
                              </span>
                            </div>

                            <h3 className="text-lg font-display font-black text-gray-800 uppercase tracking-tight mb-2 group-hover:text-brand-accent transition-colors">
                              {product.title}
                            </h3>
                            
                            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                              {product.description}
                            </p>
                          </div>

                          <div className="pt-6 border-t border-gray-50 mt-6 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Procurement Specs</span>
                            <div className="text-gray-550 p-1 rounded-full bg-gray-550/5 group-hover:bg-brand-primary group-hover:text-white transition-all">
                              <Icons.ChevronRight size={14} />
                            </div>
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

        {/* Dynamic Consultation Callout Panel */}
        <div className="mt-32 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-tr from-[#0F172A] to-[#1E293B] hover:to-[#0F172A] text-white p-12 lg:p-16 rounded-[3.5rem] relative overflow-hidden shadow-2xl transition-all duration-700"
          >
            {/* Ambient glows inside CTA */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/15 rounded-full blur-3xl" />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0099B9 1px, transparent 0)', backgroundSize: '16px 16px' }} />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-brand-accent font-mono text-xs uppercase tracking-widest block mb-4">DEDICATED SYSTEMS INTELLIGENCE</span>
              
              <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight mb-6">
                Need a Custom <br /><span className="text-brand-accent">Hybrid Setup?</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-350 leading-relaxed font-medium mb-10">
                If your operations require combining Kubernetes server containers with high-capacity conditioning cooling and office machinery distribution setups, we can curate a custom turn-key SLA contract. Let's arrange a dedicated strategy meeting in Chilanga.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link to="/contact" className="bg-brand-accent text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider hover:bg-brand-accent/90 transition-all shadow-lg active:scale-95 flex items-center">
                  <span>Contact Strategic Desk</span>
                  <Icons.ArrowRight size={16} className="ml-2" />
                </Link>
                <a href="tel:+260973602780" className="bg-white/10 hover:bg-white/15 px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider transition-all border border-white/10 text-white">
                  Call Direct SLA Team
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
