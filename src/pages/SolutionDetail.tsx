import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Shield, Calendar, Award, Star, Settings, ChevronRight } from 'lucide-react';
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
      <div className="pt-32 pb-40 text-center min-h-[60vh] flex flex-col items-center justify-center bg-white">
        <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
        <button onClick={() => navigate('/services')} className="text-brand-accent hover:underline flex items-center">
          <ArrowLeft className="mr-2" /> Back to Services
        </button>
      </div>
    );
  }

  const IconComponent = (Icons as any)[item.icon || (isService ? 'Cloud' : 'Box')] || Icons.Box;

  return (
    <div className="pt-24 pb-44 min-h-screen bg-white relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
        
        {/* Sleek Breadcrumb/Back button with dynamic highlight */}
        <button 
          onClick={() => navigate('/services')}
          className="group inline-flex items-center text-xs font-black tracking-widest uppercase text-gray-400 hover:text-brand-primary mb-10 transition-colors"
        >
          <div className="p-2 bg-gray-50 group-hover:bg-brand-primary group-hover:text-white rounded-full border border-gray-100 transition-all mr-3 shrink-0">
            <ArrowLeft size={14} />
          </div>
          <span>Back to All Solutions</span>
        </button>

        {/* Hero Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[3rem] p-8 md:p-14 border border-gray-150 hover:border-gray-200 transition-all shadow-xl shadow-brand-primary/5 overflow-hidden relative"
        >
          {/* Subtle design header bars */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-primary via-brand-accent to-blue-500" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 relative z-10 pb-8 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="w-16 h-16 bg-gray-50 border border-gray-100 text-brand-primary rounded-2xl flex items-center justify-center shrink-0 mr-6 mb-4 sm:mb-0 shadow-xs relative">
                <IconComponent size={30} />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-accent animate-ping" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-black text-brand-accent bg-brand-accent/5 border border-brand-accent/10 px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-2">
                  {isService ? 'Professional Service' : 'Enterprise Product'}
                </span>
                <h1 className="text-3xl md:text-5xl font-display font-black text-gray-900 uppercase tracking-tight">
                  {item.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Solution Highlight Block */}
          <div className="space-y-8 relative z-10">
            
            {/* Description Text */}
            <div className="bg-gray-50/70 border border-gray-100 p-6 md:p-8 rounded-3xl">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">EXECUTIVE SUMMARY</h3>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-800 italic">
                "{item.description}"
              </p>
            </div>

            {/* Long details */}
            <div>
              <h3 className="text-xs font-black text-brand-primary uppercase tracking-widest mb-4">DETAILED CAPABILITIES</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {item.longDescription}
              </p>
            </div>

            {/* Premium service parameters grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white border border-gray-150 p-5 rounded-2xl">
                <Shield size={20} className="text-brand-primary mb-2" />
                <h4 className="text-xs font-bold uppercase text-gray-400">Security Standard</h4>
                <p className="text-sm font-black text-gray-800 mt-1">ISO 27001 Compliant</p>
              </div>
              <div className="bg-white border border-gray-150 p-5 rounded-2xl">
                <Calendar size={20} className="text-brand-accent mb-2" />
                <h4 className="text-xs font-bold uppercase text-gray-400">Deployment SLA</h4>
                <p className="text-sm font-black text-gray-800 mt-1">Instant Execution</p>
              </div>
              <div className="bg-white border border-gray-150 p-5 rounded-2xl">
                <Award size={20} className="text-blue-600 mb-2" />
                <h4 className="text-xs font-bold uppercase text-gray-400">SADC Support Desk</h4>
                <p className="text-sm font-black text-gray-800 mt-1">24/7 Engineers</p>
              </div>
            </div>

            {/* Quality Standard items */}
            <div className="pt-6 border-t border-gray-55">
              <h3 className="text-xs font-black text-gray-450 uppercase tracking-widest mb-4">DELIVERY ASSURANCE</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Continuous Optimization & Health Checks',
                  'Enterprise Grade Network High Availability',
                  'Bespoke Deployment Tailored to SADC compliance',
                  'Rigorous Performance Auditing & Visual Reports'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-gray-600 font-bold">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action panel */}
            <div className="bg-gray-50 border border-gray-150 rounded-2xl p-8 mt-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-xs font-black text-brand-primary uppercase tracking-widest mb-2">Configure this solution</p>
              <h3 className="text-2xl font-display font-black text-gray-900 uppercase tracking-tight mb-4">Ready to implement?</h3>
              <p className="text-sm text-gray-500 mb-8 max-w-xl mx-auto leading-relaxed font-semibold">
                Connect with an enterprise engineer in Lusaka to review the operational specifications, estimated band capability, and service integration terms.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => navigate('/contact', { state: { customMessage: `Hi, I am interested in procuring your ${item.title} solution. Please send us more details.` } })}
                  className="bg-brand-primary text-white text-xs font-black uppercase tracking-widest px-8 py-4.5 rounded-full hover:bg-brand-primary/95 hover:-translate-y-0.5 transition-all shadow-md w-full sm:w-auto flex items-center justify-center"
                >
                  <span>Request Custom SLA</span>
                  <ChevronRight size={14} className="ml-1" />
                </button>
                <a 
                  href="tel:+260973602780"
                  className="bg-white text-gray-700 hover:text-brand-primary border border-gray-200 text-xs font-black uppercase tracking-widest px-8 py-4.5 rounded-full transition-all w-full sm:w-auto"
                >
                  Call +260 97 360 2780
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
