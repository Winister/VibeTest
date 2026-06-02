import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Shield, Calendar, Award, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SERVICES, PRODUCTS } from '../constants';

export default function SolutionDetail() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();
  
  const isService = type === 'service';
  const item = isService 
    ? SERVICES.find(s => s.id === id) 
    : PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    if (item) {
      document.title = `${item.title} | StratByte Solutions`;
    }
  }, [item]);

  if (!item) {
    return (
      <div className="pt-32 pb-40 text-center min-h-[60vh] flex flex-col items-center justify-center bg-[#0b0f19] text-white">
        <h1 className="text-4xl font-display font-black uppercase mb-4 text-white">Solution Not Found</h1>
        <button onClick={() => navigate('/services')} className="text-cyan-400 hover:underline flex items-center justify-center font-bold">
          <ArrowLeft className="mr-2" size={16} /> Back to Services
        </button>
      </div>
    );
  }

  const IconComponent = (Icons as any)[item.icon || (isService ? 'Cloud' : 'Box')] || Icons.Box;

  return (
    <div className="pt-24 pb-44 min-h-screen bg-[#0b0f19] text-slate-100 relative overflow-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      
      {/* Decorative fine-line technical top bar */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500" />

      {/* Cyber ambient glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
        
        {/* Sleek Breadcrumb/Back button with dynamic highlight */}
        <button 
          onClick={() => navigate('/services')}
          className="group inline-flex items-center text-xs font-black tracking-widest uppercase text-slate-400 hover:text-cyan-400 mb-10 transition-all text-left"
        >
          <div className="p-2 bg-slate-900 group-hover:bg-cyan-500 group-hover:text-slate-950 rounded-full border border-slate-800 transition-all mr-3 shrink-0">
            <ArrowLeft size={14} />
          </div>
          <span>Back to All Solutions</span>
        </button>

        {/* Hero Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-slate-900/60 rounded-[2.5rem] p-8 md:p-14 border border-slate-850 hover:border-slate-800 transition-all shadow-2xl relative overflow-hidden backdrop-blur-md"
        >
          {/* Top border strip */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 relative z-10 pb-8 border-b border-slate-800/80">
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="w-16 h-16 bg-slate-950 border border-slate-850 text-blue-400 rounded-2xl flex items-center justify-center shrink-0 mr-6 mb-4 sm:mb-0 shadow-lg relative">
                <IconComponent size={28} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <div className="text-left">
                <span className="text-[9px] font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-2">
                  {isService ? 'Professional Service' : 'Enterprise Product'}
                </span>
                <h1 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight leading-none">
                  {item.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Solution Highlight Block */}
          <div className="space-y-8 relative z-10 text-left">
            
            {/* Description Text */}
            <div className="bg-slate-950/40 border border-slate-850 p-6 md:p-8 rounded-2xl">
              <h3 className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-widest mb-3">EXECUTIVE SUMMARY</h3>
              <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-200 italic">
                "{item.description}"
              </p>
            </div>

            {/* Long details */}
            <div className="font-semibold text-xs leading-relaxed">
              <h4 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-3 font-mono">SPECIFICATIONS & SCOPE</h4>
              <p className="text-slate-300">
                {item.longDescription}
              </p>
            </div>

            {/* Premium service parameters grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="bg-slate-950/40 border border-slate-850/60 p-5 rounded-xl">
                <Shield size={18} className="text-blue-400 mb-2" />
                <h4 className="text-[10px] font-mono font-bold uppercase text-slate-450">Security Standard</h4>
                <p className="text-xs font-bold text-white mt-1 uppercase">ISO 27001 Compliant</p>
              </div>
              <div className="bg-slate-950/40 border border-slate-850/60 p-5 rounded-xl">
                <Calendar size={18} className="text-cyan-400 mb-2" />
                <h4 className="text-[10px] font-mono font-bold uppercase text-slate-450">Deployment SLA</h4>
                <p className="text-xs font-bold text-white mt-1 uppercase">Instant Execution</p>
              </div>
              <div className="bg-slate-950/40 border border-slate-850/60 p-5 rounded-xl">
                <Award size={18} className="text-blue-400 mb-2" />
                <h4 className="text-[10px] font-mono font-bold uppercase text-slate-450 font-mono">SADC Support Desk</h4>
                <p className="text-xs font-bold text-white mt-1 uppercase font-semibold">24/7 Engineers</p>
              </div>
            </div>

            {/* Quality Standard items */}
            <div className="pt-6 border-t border-slate-800/80">
              <h3 className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-widest mb-4">DELIVERY ASSURANCE</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Continuous Optimization & Health Checks',
                  'Enterprise Grade Network High Availability',
                  'Bespoke Deployment Tailored to SADC compliance',
                  'Rigorous Performance Auditing & Visual Reports'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs text-slate-300 font-semibold">
                    <CheckCircle2 className="text-cyan-400 shrink-0" size={14} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action panel */}
            <div className="bg-slate-950/40 border border-slate-850 rounded-2xl p-6 sm:p-8 mt-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              <p className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2">Configure this solution</p>
              <h3 className="text-xl font-display font-black text-white uppercase tracking-tight mb-4">Ready to implement?</h3>
              <p className="text-xs text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed font-semibold">
                Connect with an enterprise engineer in Lusaka to review the operational specifications, estimated band capability, and service integration terms.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => navigate('/contact', { state: { customMessage: `Hi, I am interested in procuring your ${item.title} solution. Please send us more details.` } })}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all shadow-md w-full sm:w-auto flex items-center justify-center"
                >
                  <span>Request Custom SLA</span>
                  <ChevronRight size={12} className="ml-1" />
                </button>
                <a 
                  href="tel:+260956450838"
                  className="bg-slate-900 border border-slate-800 text-slate-100 hover:text-cyan-400 hover:border-cyan-400/30 text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all w-full sm:w-auto"
                >
                  Call +260 95 645 0838
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
