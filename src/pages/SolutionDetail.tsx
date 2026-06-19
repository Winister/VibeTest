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
      <div className="pt-32 pb-40 text-center min-h-[60vh] flex flex-col items-center justify-center bg-zinc-50 text-zinc-900">
        <h1 className="text-3xl font-medium tracking-tight mb-4">Solution Not Found</h1>
        <button onClick={() => navigate('/services')} className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center justify-center font-medium">
          <ArrowLeft className="mr-2" size={16} /> Back to Services
        </button>
      </div>
    );
  }

  const IconComponent = (Icons as any)[item.icon || (isService ? 'Cloud' : 'Box')] || Icons.Box;

  return (
    <div className="pt-24 pb-44 min-h-screen bg-zinc-50 text-zinc-900">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Back button */}
        <button 
          onClick={() => navigate('/services')}
          className="group inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-10 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Solutions</span>
        </button>

        {/* Hero Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 md:p-14 border border-zinc-200 shadow-sm"
        >
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 pb-8 border-b border-zinc-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 bg-zinc-50 border border-zinc-100 text-zinc-900 rounded-2xl flex items-center justify-center shrink-0">
                <IconComponent size={28} />
              </div>
              <div>
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider block mb-2">
                  {isService ? 'Professional Service' : 'Enterprise Product'}
                </span>
                <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900">
                  {item.title}
                </h1>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            
            {/* Description Text */}
            <div className="bg-zinc-50 p-6 md:p-8 rounded-2xl">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">EXECUTIVE SUMMARY</h3>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed italic">
                "{item.description}"
              </p>
            </div>

            {/* Long details */}
            <div>
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-3">SPECIFICATIONS & SCOPE</h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {item.longDescription}
              </p>
            </div>

            {/* Parameters grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white border border-zinc-200 p-5 rounded-xl">
                <Shield size={18} className="text-zinc-900 mb-2" />
                <h4 className="text-xs font-medium text-zinc-500">Security Standard</h4>
                <p className="text-sm font-medium text-zinc-900 mt-1">ISO 27001 Compliant</p>
              </div>
              <div className="bg-white border border-zinc-200 p-5 rounded-xl">
                <Calendar size={18} className="text-zinc-900 mb-2" />
                <h4 className="text-xs font-medium text-zinc-500">Deployment SLA</h4>
                <p className="text-sm font-medium text-zinc-900 mt-1">Instant Execution</p>
              </div>
              <div className="bg-white border border-zinc-200 p-5 rounded-xl">
                <Award size={18} className="text-zinc-900 mb-2" />
                <h4 className="text-xs font-medium text-zinc-500">Support Desk</h4>
                <p className="text-sm font-medium text-zinc-900 mt-1">24/7 Engineers</p>
              </div>
            </div>

            {/* Quality Standard items */}
            <div className="pt-8 border-t border-zinc-100">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">DELIVERY ASSURANCE</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Continuous Optimization & Health Checks',
                  'Enterprise Grade Network High Availability',
                  'Bespoke Deployment Tailored to compliance',
                  'Rigorous Performance Auditing & Visual Reports'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-zinc-600">
                    <CheckCircle2 className="text-zinc-900 shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action panel */}
            <div className="bg-zinc-900 rounded-2xl p-8 sm:p-10 text-center text-white">
              <h3 className="text-2xl font-medium tracking-tight mb-4">Ready to implement?</h3>
              <p className="text-sm text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Connect with an enterprise engineer in Lusaka to review the operational specifications, estimated band capability, and service integration terms.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => navigate('/contact', { state: { customMessage: `Hi, I am interested in procuring your ${item.title} solution. Please send us more details.` } })}
                  className="bg-white text-zinc-900 text-sm font-medium px-8 py-3 rounded-lg hover:bg-zinc-100 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <span>Request Custom SLA</span>
                  <ChevronRight size={16} />
                </button>
                <a 
                  href="tel:+260956450838"
                  className="bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium px-8 py-3 rounded-lg transition-colors w-full sm:w-auto"
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
