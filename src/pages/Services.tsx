import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, PRODUCTS } from '../constants';
import * as Icons from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Cpu, Database, Flame, FileText, ArrowRight, Server } from 'lucide-react';

export default function Services() {
  useEffect(() => {
    document.title = "Our Solutions & Catalog | Stratbyte";
  }, []);

  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'hosting' | 'procurement'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdXGx6Km7SQNY4Fw59KlvBud_ZWtwhvHeUfVKE5i8u0qgtrtg/viewform?usp=publish-editor";

  // Core three services
  const coreThree = SERVICES.filter(s => ['web-development', 'app-development', 'it-consulting'].includes(s.id));
  
  // Secondary Cloud & hosting services
  const secondaryCloudServices = SERVICES.filter(s => !['web-development', 'app-development', 'it-consulting'].includes(s.id));

  // Procurement products split
  const cloudProducts = PRODUCTS.filter(p => ['compute', 'developer-tools', 'managed-databases', 'networking', 'storage', 'data-backups'].includes(p.id));
  const generalProcurementProducts = PRODUCTS.filter(p => !['compute', 'developer-tools', 'managed-databases', 'networking', 'storage', 'data-backups'].includes(p.id));

  // Simple matches helper
  const matchesSearch = (text: string = '') => text.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    <div className="pt-24 pb-40 bg-zinc-50 text-zinc-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight mb-6 text-zinc-900">
              Solutions Catalog
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed">
              We design and deliver clean, hyper-responsive websites, hybrid mobile database platforms, and custom-tailored hosting blueprints mapped directly for Zambian enterprises.
            </p>
          </motion.div>
        </div>

        {/* Categories Tab & Search Filter Row */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-16">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Offerings' },
              { id: 'core', label: 'Core Engineering' },
              { id: 'hosting', label: 'Managed Cloud' },
              { id: 'procurement', label: 'Procurement' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === tab.id 
                    ? 'bg-zinc-900 text-white' 
                    : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all"
            />
          </div>
        </div>

        {/* DISPLAY BLOCKS */}
        <div className="space-y-24">
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
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
                    <Cpu size={16} />
                  </div>
                  <h2 className="text-2xl font-medium tracking-tight text-zinc-900">Core Engineering Offerings</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {coreThree.filter(s => matchesSearch(s.title) || matchesSearch(s.description)).map((service, index) => {
                    const IconComponent = (Icons as any)[service.icon || 'Cloud'] || Icons.Cloud;
                    return (
                      <Link key={service.id} to={`/solution/service/${service.id}`}>
                        <div className="h-full bg-white border border-zinc-200 p-8 rounded-2xl hover:border-zinc-300 transition-colors group flex flex-col">
                          <div className="mb-6">
                            <div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-4 group-hover:scale-105 transition-transform">
                              <IconComponent size={20} />
                            </div>
                            <h3 className="text-lg font-medium text-zinc-900 mb-2">{service.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
                          </div>
                          <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between text-sm text-zinc-500 group-hover:text-zinc-900 transition-colors">
                            <span>Configure Blueprint</span>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* 2. SPECIFIC SPECIAL PROMO */}
            {activeCategory === 'all' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 p-8 sm:p-12 rounded-3xl mt-12 text-white flex flex-col sm:flex-row gap-8 items-center justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800 rounded-full text-xs font-medium text-zinc-300 mb-4">
                    <Flame size={14} />
                    <span>Special Package Active</span>
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight mb-3">June Promo: Corporate Website for K500</h3>
                  <p className="text-zinc-400 max-w-xl leading-relaxed">
                    Get a fast corporate landing page written from scratch for your small business. Direct SSD web hosting is available for as low as K50/month. Domain excluded.
                  </p>
                </div>
                
                <a 
                  href={googleFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="shrink-0 bg-white text-zinc-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
                >
                  <FileText size={16} />
                  <span>Submit Promo Form</span>
                </a>
              </motion.div>
            )}

            {/* 3. CLOUD SYSTEMS & HOSTING */}
            {(activeCategory === 'all' || activeCategory === 'hosting') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                key="hosting-block"
                className="pt-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
                    <Server size={16} />
                  </div>
                  <h2 className="text-2xl font-medium tracking-tight text-zinc-900">Managed Cloud & SSD Hosting</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {secondaryCloudServices.filter(s => matchesSearch(s.title) || matchesSearch(s.description)).map((service) => {
                    const IconComponent = (Icons as any)[service.icon || 'Server'] || Icons.Server;
                    return (
                      <Link key={service.id} to={`/solution/service/${service.id}`}>
                        <div className="h-full bg-white border border-zinc-200 p-6 rounded-2xl hover:border-zinc-300 transition-colors group flex flex-col">
                          <div className="mb-4">
                            <div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-4 group-hover:scale-105 transition-transform">
                              <IconComponent size={20} />
                            </div>
                            <h4 className="text-base font-medium text-zinc-900 mb-2">{service.title}</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}

                  {cloudProducts.filter(p => matchesSearch(p.title) || matchesSearch(p.description)).map((product) => {
                    const IconComponent = (Icons as any)[product.icon || 'Database'] || Icons.Database;
                    return (
                      <Link key={product.id} to={`/solution/product/${product.id}`}>
                        <div className="h-full bg-white border border-zinc-200 p-6 rounded-2xl hover:border-zinc-300 transition-colors group flex flex-col">
                          <div className="mb-4">
                            <div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-4 group-hover:scale-105 transition-transform">
                              <IconComponent size={20} />
                            </div>
                            <h4 className="text-base font-medium text-zinc-900 mb-2">{product.title}</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">{product.description}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* 4. PROCUREMENT */}
            {(activeCategory === 'all' || activeCategory === 'procurement') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                key="procure-block"
                className="pt-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
                    <Database size={16} />
                  </div>
                  <h2 className="text-2xl font-medium tracking-tight text-zinc-900">Enterprise Supplies</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {generalProcurementProducts.filter(p => matchesSearch(p.title) || matchesSearch(p.description)).map((product) => {
                    const IconComponent = (Icons as any)[product.icon || 'Box'] || Icons.Box;
                    return (
                      <Link key={product.id} to={`/solution/product/${product.id}`}>
                        <div className="h-full bg-white border border-zinc-200 p-6 rounded-2xl hover:border-zinc-300 transition-colors group flex flex-col">
                          <div className="mb-4">
                            <div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-4 group-hover:scale-105 transition-transform">
                              <IconComponent size={20} />
                            </div>
                            <h4 className="text-base font-medium text-zinc-900 mb-2">{product.title}</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">{product.description}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 5. BRIEF FORM SECTION */}
        <section className="mt-24 p-8 sm:p-12 bg-white border border-zinc-200 rounded-3xl text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">Ready to start?</h3>
            <p className="text-zinc-500 mb-8">
              Complete our 2-minute web developer questionnaire to collect your requested visual structure, design inspirations, pages, and integrations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={googleFormUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm px-8 py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <FileText size={16} />
                <span>Open Requirements Form</span>
              </a>

              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-zinc-50 hover:bg-zinc-100 text-zinc-900 border border-zinc-200 font-medium text-sm px-8 py-3 rounded-xl transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
