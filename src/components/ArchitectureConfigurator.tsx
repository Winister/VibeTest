import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, Smartphone, Users, Globe, CheckCircle2, 
  ArrowRight, Sparkles, Sliders, DollarSign, Calendar, Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FeatureItem {
  id: string;
  label: string;
  price: number;
  description: string;
}

export default function ArchitectureConfigurator() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'website' | 'app' | 'consultancy'>('website');
  
  // Website Level selection
  const [webType, setWebType] = useState<'promo' | 'corporate' | 'ecommerce'>('promo');
  
  // App Level selection
  const [appType, setAppType] = useState<'standard-web' | 'mobile-hybrid' | 'saas-enterprise'>('mobile-hybrid');
  
  // Consultancy Selection
  const [consultType, setConsultType] = useState<'one-off' | 'recurrent-sla' | 'setup-audit'>('one-off');

  // Addons
  const [features, setFeatures] = useState<Record<string, boolean>>({
    seo: true,
    cms: false,
    payments: false,
    analytics: true,
    speedOptimize: true
  });

  // Derived state
  const [estimatedCost, setEstimatedCost] = useState<number>(500);
  const [estimatedDuration, setEstimatedDuration] = useState<string>('5 - 7 Days');
  const [hostingCost, setHostingCost] = useState<number>(50);

  const websiteFeatures: FeatureItem[] = [
    { id: 'seo', label: 'Advanced SEO & Google Indexing', price: 150, description: 'Rank high for local search keywords' },
    { id: 'cms', label: 'Easy CMS Dashboard', price: 250, description: 'Directly edit text and blog posts yourself' },
    { id: 'payments', label: 'payment gateway (Mobile Money & Card)', price: 400, description: 'Direct MTN/Airtel & Visa integration' },
  ];

  const appFeatures: FeatureItem[] = [
    { id: 'analytics', label: 'User Behavior & CRM Panel', price: 300, description: 'Track signups, active users and usage metrics' },
  ];

  useEffect(() => {
    let base = 0;
    let duration = '2 - 3 Weeks';
    let baseHosting = 0;

    switch (activeTab) {
      case 'website':
        if (webType === 'promo') {
          base = 500;
          duration = '3 - 5 Days';
          baseHosting = 50; 
        } else if (webType === 'corporate') {
          base = 1500;
          duration = '7 - 10 Days';
          baseHosting = 99;
        } else {
          base = 3200;
          duration = '12 - 18 Days';
          baseHosting = 199;
        }
        break;
      case 'app':
        if (appType === 'standard-web') {
          base = 4500;
          duration = '3 - 4 Weeks';
          baseHosting = 250;
        } else if (appType === 'mobile-hybrid') {
          base = 6800;
          duration = '4 - 6 Weeks';
          baseHosting = 350;
        } else {
          base = 12000;
          duration = '8 - 12 Weeks';
          baseHosting = 599;
        }
        break;
      case 'consultancy':
        if (consultType === 'one-off') {
          base = 800;
          duration = '1 - 3 Days';
          baseHosting = 0;
        } else if (consultType === 'setup-audit') {
          base = 2500;
          duration = '5 - 8 Days';
          baseHosting = 0;
        } else {
          base = 4500; // Monthly SLA or similar
          duration = 'Ongoing';
          baseHosting = 0;
        }
        break;
    }

    // Add features calculations
    let addonTotal = 0;
    if (activeTab === 'website') {
      if (webType !== 'promo') {
        if (features.seo) addonTotal += 150;
        if (features.cms) addonTotal += 250;
        if (features.payments) {
          addonTotal += 400;
          baseHosting += 50; // complexity adds slightly to hosting index
        }
      } else {
        // June Promo features are hardlocked or custom-negotiated 
      }
    } else if (activeTab === 'app') {
      if (features.analytics) addonTotal += 300;
    }

    setEstimatedCost(base + addonTotal);
    setEstimatedDuration(duration);
    setHostingCost(baseHosting);
  }, [activeTab, webType, appType, consultType, features]);

  const toggleFeature = (id: string) => {
    setFeatures(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCreateDraft = () => {
    let focusText = '';
    let scopeText = '';
    
    if (activeTab === 'website') {
      focusText = 'Website Development';
      scopeText = webType === 'promo' ? 'June K500 Promotional Website Package' : `${webType} Website Design`;
    } else if (activeTab === 'app') {
      focusText = 'Mobile & Web App Development';
      scopeText = `${appType} Platform`;
    } else {
      focusText = 'IT Consultancy';
      scopeText = `${consultType} Consultation Tier`;
    }

    const message = `Hi StratByte, I drafted a customized proposal using your Interactive Budget Estimator!
Primary Focus: ${focusText}
Project Scope Setup: ${scopeText}
Estimated Cost Draft: K${estimatedCost}
Monthly Hosting / Operations: K${hostingCost > 0 ? `K${hostingCost}/month` : 'Not Applicable'}
Timeline Estimate: ${estimatedDuration}
Please finalize this proposal and send me a formal quote!`;

    navigate('/contact', { state: { customMessage: message } });
  };

  return (
    <div className="w-full relative bg-white/80 backdrop-blur-md border border-gray-150 rounded-[3rem] p-6 lg:p-10 shadow-xl overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle grids */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #0099B9 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10 grid gap-10 lg:grid-cols-12">
        
        {/* Controls Column */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">
              <Sparkles size={14} className="text-brand-accent animate-pulse" />
              <span>Tailor Your Solution</span>
            </div>
            
            <h3 className="text-3xl font-display font-black text-brand-primary uppercase mb-3 leading-none">
              Interactive <span className="text-brand-accent">Quotes</span> Configurator
            </h3>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
              We design robust corporate platforms. Select your product focus and scope parameters below to compute instant budget expectations.  
            </p>

            {/* TAB SELECTOR */}
            <div className="grid gap-2 grid-cols-3 bg-gray-50 p-1.5 rounded-2xl border border-gray-100 mb-8">
              {[
                { id: 'website', label: 'Websites', icon: Code },
                { id: 'app', label: 'Apps', icon: Smartphone },
                { id: 'consultancy', label: 'IT Consulting', icon: Users }
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex flex-col sm:flex-row items-center justify-center p-3 sm:py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all gap-1.5 ${
                      isSelected 
                        ? 'bg-white text-brand-primary shadow-sm border border-gray-150' 
                        : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100/50'
                    }`}
                  >
                    <TabIcon size={14} className={isSelected ? 'text-brand-accent' : 'text-gray-400'} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENT SPECS */}
            <AnimatePresence mode="wait">
              {activeTab === 'website' && (
                <motion.div
                  key="website"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs uppercase font-black text-gray-400 tracking-wider block mb-3.5">Select Website Tier</span>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        { id: 'promo', label: 'K500 Promo', desc: 'Special June Package' },
                        { id: 'corporate', label: 'Corporate', desc: 'Sleek custom layout' },
                        { id: 'ecommerce', label: 'E-commerce', desc: 'Cart + Payment integration' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setWebType(item.id as any)}
                          className={`p-4 rounded-2xl border-2 text-left transition-all ${
                            webType === item.id 
                              ? 'border-brand-primary bg-brand-primary/5' 
                              : 'border-gray-100 hover:border-gray-200'
                          }`}
                        >
                          <span className="font-black text-xs uppercase tracking-tight text-gray-900 block">{item.label}</span>
                          <span className="text-[10px] text-gray-500 leading-none mt-1 block">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {webType !== 'promo' ? (
                    <div>
                      <span className="text-xs uppercase font-black text-gray-400 tracking-wider block mb-3.5">A-la-Carte Feature Add-ons</span>
                      <div className="space-y-2.5">
                        {websiteFeatures.map((feat) => (
                          <button
                            key={feat.id}
                            onClick={() => toggleFeature(feat.id)}
                            className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                              features[feat.id] 
                                ? 'border-brand-primary bg-brand-primary/5' 
                                : 'border-gray-100 hover:bg-gray-50'
                            }`}
                          >
                            <div className="pr-4">
                              <span className="font-bold text-xs uppercase tracking-tight text-gray-800 block">{feat.label}</span>
                              <span className="text-[10px] text-gray-500 leading-none mt-1 block">{feat.description}</span>
                            </div>
                            <span className="text-xs font-mono font-bold bg-white px-2.5 py-1 rounded-full border border-gray-150 shrink-0 text-brand-primary">
                              + K{feat.price}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-100 text-left">
                      <span className="text-xs font-black uppercase text-amber-700 tracking-widest block mb-1">June Promo Hardlocks</span>
                      <p className="text-[11px] text-amber-800 leading-relaxed font-semibold">
                        The K500 Promotional Website package is pre-optimized for rapid, standard landing setup to provide ultimate local affordability. Extra custom databases or elaborate custom workflows require standard Business/Corporate tiers. Hosting is billed separately starting at only K50 per month.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'app' && (
                <motion.div
                  key="app"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs uppercase font-black text-gray-400 tracking-wider block mb-3.5">Select Application Scope</span>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        { id: 'standard-web', label: 'SaaS Platform', desc: 'Secure custom portal' },
                        { id: 'mobile-hybrid', label: 'iOS & Android App', desc: 'Stores publishing ready' },
                        { id: 'saas-enterprise', label: 'Enterprise Stack', desc: 'High concurrency cluster' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setAppType(item.id as any)}
                          className={`p-4 rounded-2xl border-2 text-left transition-all ${
                            appType === item.id 
                              ? 'border-brand-accent bg-brand-accent/5' 
                              : 'border-gray-100 hover:border-gray-200'
                          }`}
                        >
                          <span className="font-black text-xs uppercase tracking-tight text-gray-900 block">{item.label}</span>
                          <span className="text-[10px] text-gray-400 leading-none mt-1 block">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-black text-gray-400 tracking-wider block mb-3.5">Custom Feature Tuning</span>
                    <div className="space-y-2.5">
                      {appFeatures.map((feat) => (
                        <button
                          key={feat.id}
                          onClick={() => toggleFeature(feat.id)}
                          className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                            features[feat.id] 
                              ? 'border-brand-accent bg-brand-accent/5' 
                              : 'border-gray-100 hover:bg-gray-50'
                          }`}
                        >
                          <div className="pr-4">
                            <span className="font-bold text-xs uppercase tracking-tight text-gray-800 block">{feat.label}</span>
                            <span className="text-[10px] text-gray-500 leading-none mt-1 block">{feat.description}</span>
                          </div>
                          <span className="text-xs font-mono font-bold bg-white px-2.5 py-1 rounded-full border border-gray-150 shrink-0 text-brand-accent">
                            + K{feat.price}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'consultancy' && (
                <motion.div
                  key="consultancy"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs uppercase font-black text-gray-400 tracking-wider block mb-3.5">Consultation Format Requirements</span>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        { id: 'one-off', label: 'Strategy Session', desc: '1-to-1 Architecture mapping' },
                        { id: 'setup-audit', label: 'Systems Assessment', desc: 'Complete code & security audit' },
                        { id: 'recurrent-sla', label: 'Continuous SLA Support', desc: 'Dedicated remote support' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setConsultType(item.id as any)}
                          className={`p-4 rounded-2xl border-2 text-left transition-all ${
                            consultType === item.id 
                              ? 'border-brand-primary bg-brand-primary/5' 
                              : 'border-gray-100 hover:border-gray-200'
                          }`}
                        >
                          <span className="font-black text-xs uppercase tracking-tight text-gray-900 block">{item.label}</span>
                          <span className="text-[10px] text-gray-400 leading-none mt-1 block">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 text-left">
                    <span className="text-xs font-black uppercase text-gray-700 tracking-widest block mb-1">StratByte Guarantee</span>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                      Our elite consultancy packages assign senior systems architects to analyze, evaluate, and structurally audit your network infrastructure, cloud topology, or codebase.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-150">
            <button
              onClick={handleCreateDraft}
              className="w-full bg-brand-primary text-white py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-brand-primary/95 transition-all shadow-md hover:-translate-y-0.5 active:scale-95"
            >
              <span>Adopt this Estimate Draft</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Visual Estimates Breakdown Card */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 text-white rounded-[2.5rem] p-8 relative overflow-hidden border border-white/10 shadow-2xl">
            {/* Background absolute glows */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute top-5 right-5 text-white/20 select-none font-display font-black text-8xl tracking-tighter opacity-15">
              EST
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 block mb-1">
              Estimated Pricing Overview
            </span>
            <h4 className="text-xl font-display font-black text-white uppercase tracking-tight mb-8">
              Project <span className="text-brand-primary">Draft</span> Specs
            </h4>

            {/* Principal Visual Indicator */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8 text-center relative z-10">
              <span className="text-[9px] uppercase font-black text-brand-primary tracking-widest block mb-1">Estimated Direct Investment</span>
              <div className="flex items-baseline justify-center">
                <span className="text-sm font-bold text-gray-400 mr-1.5 font-sans leading-none">k</span>
                <span className="text-5xl md:text-6xl font-display font-black text-white leading-none tracking-tight">
                  {estimatedCost}
                </span>
                <span className="text-xs font-mono text-gray-400 font-bold ml-1.5 uppercase leading-none">once-off</span>
              </div>
            </div>

            {/* Matrix details */}
            <div className="space-y-4 pt-1 pb-5 relative z-10 border-b border-white/10 mb-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-accent">
                    <Clock size={14} />
                  </div>
                  <span className="text-xs font-bold text-gray-300">Estimated Timeline</span>
                </div>
                <span className="text-xs font-mono font-bold text-white bg-white/10 px-3 py-1 rounded-full">
                  {estimatedDuration}
                </span>
              </div>

              {hostingCost > 0 && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-primary">
                      <Globe size={14} />
                    </div>
                    <span className="text-xs font-bold text-gray-300">Operation hosting</span>
                  </div>
                  <span className="text-xs font-mono font-black text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
                    K{hostingCost} / month
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-xs font-bold text-gray-300">Responsiveness Tier</span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400">
                  Adaptive Mobile Ready
                </span>
              </div>

            </div>

            {/* Technical items tags summary */}
            <div className="space-y-3 relative z-10 text-left">
              <span className="text-[9px] uppercase font-black text-gray-450 tracking-widest block mb-2 font-mono">Assigned Blueprint Elements</span>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] font-mono font-bold bg-white/5 text-gray-300 px-2.5 py-1.5 rounded-xl border border-white/5">
                  {activeTab === 'website' ? 'Web Platform Model' : activeTab === 'app' ? 'Digital Application Engine' : 'Consultancy Advisory SLA'}
                </span>
                
                {activeTab === 'website' && (
                  <span className="text-[9px] font-mono font-bold bg-white/5 text-gray-300 px-2.5 py-1.5 rounded-xl border border-white/5">
                    {webType === 'promo' ? 'June Affordable Promo Class' : webType === 'corporate' ? 'Corporate Standard Tier' : 'Premium E-Commerce Framework'}
                  </span>
                )}
                
                {activeTab === 'app' && (
                  <span className="text-[9px] font-mono font-bold bg-white/5 text-gray-300 px-2.5 py-1.5 rounded-xl border border-white/5">
                    {appType === 'standard-web' ? 'SaaS Backend Integration' : appType === 'mobile-hybrid' ? 'iOS + Android Native Containers' : 'Enterprise Scale Cloud Compute'}
                  </span>
                )}

                {activeTab === 'website' && webType !== 'promo' && (
                  <>
                    {features.seo && <span className="text-[9px] font-mono font-bold bg-brand-primary/10 text-brand-primary px-2.5 py-1.5 rounded-xl border border-brand-primary/20">SEO Optimization</span>}
                    {features.cms && <span className="text-[9px] font-mono font-bold bg-brand-accent/10 text-brand-accent px-2.5 py-1.5 rounded-xl border border-brand-accent/20">CMS Portal</span>}
                    {features.payments && <span className="text-[9px] font-mono font-bold bg-amber-400/10 text-amber-300 px-2.5 py-1.5 rounded-xl border border-amber-400/20">Payment Integrations</span>}
                  </>
                )}

                {activeTab === 'app' && features.analytics && (
                  <span className="text-[9px] font-mono font-bold bg-brand-accent/10 text-brand-accent px-2.5 py-1.5 rounded-xl border border-brand-accent/20">Intelligence Dashboard</span>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
