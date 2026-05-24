import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Building, Clock, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = "Connect With Us | StratByte Solutions";
    if (location.state && (location.state as any).customMessage) {
      setMessage((location.state as any).customMessage);
    }
  }, [location.state]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/jp.kapunda@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 6000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <div className="pt-24 pb-40 min-h-screen bg-white">
      {/* Top Graphic Bar Accent */}
      <div className="w-full h-1.5 bg-gradient-to-r from-brand-accent via-brand-primary to-blue-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12">
        {/* Ambient Gradient Orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
          
          {/* Left Column: Premium Brand & Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-black text-brand-primary uppercase tracking-widest leading-none">LUSAKA HQ DESK</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-black leading-[1.05] uppercase text-gray-900 mb-6 tracking-tight">
              Let's craft your <br />
              <span className="text-brand-primary">Cloud Future</span>
            </h1>

            <div className="h-[2px] w-20 bg-brand-accent mb-8" />

            {/* Hand-selected high quality professional image representing Young Zambian Tech People */}
            <div className="w-full h-64 md:h-80 rounded-[2.5rem] overflow-hidden my-8 relative shadow-md hidden sm:block border border-gray-150 group">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                 alt="Young African Tech Engineers and Innovators Designing Infrastructure" 
                 referrerPolicy="no-referrer" 
               />
               <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
               <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-100 flex items-center justify-between">
                 <div>
                   <h5 className="text-[11px] font-black uppercase text-gray-805">StratByte Architects</h5>
                   <p className="text-[9px] font-medium text-gray-450 mt-0.5">Direct Engineering Support from Chilanga</p>
                 </div>
                 <span className="text-[9px] font-mono bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-black">ACTIVE</span>
               </div>
            </div>

            <h2 className="text-lg font-display font-black uppercase tracking-tight mb-6 text-gray-805">
              Contact Architecture desk
            </h2>
            
            <div className="space-y-4">
              {/* Phone info card */}
              <div className="flex items-center space-x-5 bg-gray-50/50 hover:bg-white p-5 rounded-2xl border border-gray-100 hover:border-brand-primary/20 transition-all shadow-xs group">
                <div className="p-3 bg-brand-primary/10 group-hover:bg-brand-primary group-hover:text-white rounded-xl text-brand-primary shrink-0 transition-all">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Operational Line</h4>
                  <p className="text-base font-black text-gray-800">
                    <a href="tel:+260973602780" className="hover:text-brand-primary transition-colors">+260 97 360 2780</a>
                  </p>
                </div>
              </div>

              {/* Email info card */}
              <div className="flex items-center space-x-5 bg-gray-50/50 hover:bg-white p-5 rounded-2xl border border-gray-100 hover:border-brand-accent/20 transition-all shadow-xs group">
                <div className="p-3 bg-brand-accent/10 group-hover:bg-brand-accent group-hover:text-white rounded-xl text-brand-accent shrink-0 transition-all">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">General & Sales Enquiries</h4>
                  <p className="text-base font-black text-gray-800">
                    <a href="mailto:info@stratbyte.cloud" className="hover:text-brand-primary transition-colors">info@stratbyte.cloud</a>
                  </p>
                </div>
              </div>

              {/* Address info card */}
              <div className="flex items-center space-x-5 bg-gray-50/50 hover:bg-white p-5 rounded-2xl border border-gray-100 transition-all shadow-xs group">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Headquarters Coordinate</h4>
                  <p className="text-sm font-bold text-gray-600 leading-relaxed">
                    Plot 217 Minyanya Close, Longridge Chilanga, Lusaka, Zambia
                  </p>
                </div>
              </div>
            </div>

            {/* Response standard details */}
            <div className="mt-8 grid grid-cols-2 gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50">
              <div className="flex items-center space-x-2 text-xs font-bold text-gray-550">
                <Clock size={14} className="text-brand-primary" />
                <span>Response &lt; 24 Hrs</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold text-gray-550">
                <HelpCircle size={14} className="text-brand-accent" />
                <span>No Consultation Fee</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form with validation indicator feedback */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-gray-150 rounded-[3rem] p-8 lg:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl/40" />

              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-display font-black text-brand-primary uppercase tracking-tight mb-2">Configure Request Letter</h3>
                <p className="text-xs text-gray-450 font-medium mb-10">Use the formal digital mailboard below to transmit message notes safely.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* FormSubmit routing options */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission - StratByte" />
                  <input type="hidden" name="_template" value="box" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-black uppercase tracking-wider text-gray-600 block">First Name</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required 
                          className="w-full text-xs font-semibold px-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all bg-white text-gray-800"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-black uppercase tracking-wider text-gray-600 block flex items-center justify-between">
                        <span>Company Name</span>
                        <span className="text-[10px] text-brand-primary lowercase italic font-normal">Zambian corporate</span>
                      </label>
                      <div className="relative">
                        <Building className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          className="w-full text-xs font-semibold pl-4 pr-10 py-3.5 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all bg-white text-gray-800"
                          placeholder="e.g., Liquid Intelligent Technologies"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-black uppercase tracking-wider text-gray-600 block">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full text-xs font-semibold px-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all bg-white text-gray-800"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-black uppercase tracking-wider text-gray-600 block">Message Body</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full text-xs font-semibold px-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all bg-white text-gray-800 resize-none"
                      placeholder="Outline your requirements or cloud constraints here..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-primary text-white py-4.5 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-primary/95 transition-all shadow-md active:scale-98 disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center text-xs font-black uppercase tracking-wider">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Transmitting Packets...
                      </span>
                    ) : (
                      <span className="text-xs font-black uppercase tracking-widest flex items-center justify-center">
                        <span>Send Transmission</span>
                        <Send size={14} className="ml-2" />
                      </span>
                    )}
                  </button>

                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-5 bg-emerald-50 border border-emerald-100 text-emerald-850 rounded-2xl flex items-start space-x-3 text-xs leading-relaxed font-semibold shadow-xs"
                      >
                        <CheckCircle2 size={18} className="shrink-0 text-emerald-550 mt-0.5" />
                        <div>
                          <strong className="block mb-0.5 font-bold text-emerald-950">Transmission Succeeded!</strong>
                          <span>Your request document was dispatched securely. If this is your first time using this sender system, please keep an eye out for a verification request from FormSubmit to activate delivery!</span>
                        </div>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-5 bg-rose-50 border border-rose-150 text-rose-850 rounded-2xl flex items-start space-x-3 text-xs leading-relaxed font-semibold shadow-xs"
                      >
                        <AlertCircle size={18} className="shrink-0 text-rose-550 mt-0.5" />
                        <div>
                          <strong className="block mb-0.5 font-bold text-rose-950">Transmission Failed</strong>
                          <span>A packet error occurred. Feel free to reach out directly via info@stratbyte.cloud or dial +260 97 360 2780 for immediate response.</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
