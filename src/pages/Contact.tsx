import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Building, Clock, HelpCircle, FileText, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = "Connect With Us | Stratbyte";
    if (location.state && (location.state as any).customMessage) {
      setMessage((location.state as any).customMessage);
    }
  }, [location.state]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdXGx6Km7SQNY4Fw59KlvBud_ZWtwhvHeUfVKE5i8u0qgtrtg/viewform?usp=publish-editor";

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
    <div className="pt-24 pb-40 min-h-screen bg-[#0b0f19] text-slate-100 overflow-hidden relative selection:bg-blue-600/30 selection:text-cyan-300">
      
      {/* Visual Accent Top Bar */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12">
        {/* Ambient Gradient Blows */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid gap-16 lg:grid-cols-12 items-start relative z-10">
          
          {/* Left Column: Premium Brand & Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-left"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[9px] font-bold font-mono tracking-widest text-cyan-300 uppercase leading-none">LUSAKA HQ DESK</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold leading-[1.05] uppercase text-white mb-6 tracking-tight">
              Let's craft your <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Digital Presence</span>
            </h1>

            <div className="h-[2px] w-16 bg-cyan-400 mb-8" />

            {/* Google Form Urgent Callout Card */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-3xl mb-8 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl" />
              <h4 className="text-sm font-bold text-white uppercase tracking-tight flex items-center gap-2 mb-2">
                <FileText size={16} className="text-cyan-400" />
                <span>Website Briefing Form</span>
              </h4>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed mb-4">
                Want to accelerate launch times? Access the official Google Form we use to collect precise details of desired pages, styles, and integrations.
              </p>
              
              <a 
                href={googleFormUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold uppercase text-[10px] tracking-widest px-5 py-3 rounded-xl transition-all shadow-md group"
              >
                <span>Fill out Web brief planner</span>
                <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            <h2 className="text-lg font-display font-black uppercase tracking-tight mb-6 text-white text-left">
              Operational Channels
            </h2>
            
            <div className="space-y-4">
              {/* Phone Info */}
              <div className="flex items-center space-x-5 bg-slate-900/40 hover:bg-slate-900/80 p-5 rounded-2xl border border-slate-800/85 hover:border-cyan-500/20 transition-all shadow-lg group">
                <div className="p-3 bg-blue-500/10 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 rounded-xl text-blue-400 shrink-0 transition-all">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-450 mb-0.5 font-mono">Operation Desk</h4>
                  <p className="text-sm sm:text-base font-bold text-white">
                    <a href="tel:+260973602780" className="hover:text-cyan-400 transition-colors">+260 97 360 2780</a>
                  </p>
                </div>
              </div>

              {/* Email Info */}
              <div className="flex items-center space-x-5 bg-slate-900/40 hover:bg-slate-900/80 p-5 rounded-2xl border border-slate-800/85 hover:border-cyan-500/20 transition-all shadow-lg group">
                <div className="p-3 bg-cyan-500/10 group-hover:bg-cyan-500 group-hover:text-slate-950 rounded-xl text-cyan-400 shrink-0 transition-all">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-450 mb-0.5 font-mono">Mail Transmissions</h4>
                  <p className="text-sm sm:text-base font-bold text-white">
                    <a href="mailto:info@stratbyte.cloud" className="hover:text-cyan-400 transition-colors">info@stratbyte.cloud</a>
                  </p>
                </div>
              </div>

              {/* Address Info */}
              <div className="flex items-center space-x-5 bg-slate-900/40 hover:bg-slate-900/80 p-5 rounded-2xl border border-slate-800/85 transition-all shadow-lg group">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-450 mb-0.5 font-mono">Headquarters Coordinates</h4>
                  <p className="text-xs font-semibold leading-relaxed text-slate-300">
                    Plot 217 Minyanya Close, Longridge Chilanga, Lusaka, Zambia
                  </p>
                </div>
              </div>
            </div>

            {/* Response guidelines */}
            <div className="mt-8 grid gap-4 grid-cols-2 bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl text-left">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-400">
                <Clock size={14} className="text-cyan-455" />
                <span>Response &lt; 24 Hrs</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-400">
                <HelpCircle size={14} className="text-blue-455" />
                <span>Active Consultation Desk</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium validation form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 text-left">
                <h3 className="text-2xl lg:text-3xl font-display font-black text-white uppercase tracking-tight mb-2">Transmission Message Board</h3>
                <p className="text-xs text-slate-400 font-semibold mb-10 leading-relaxed">Fill out the general queries form below to send an integrated email directly to our developers.</p>

                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  {/* FormSubmit options */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission - Stratbyte" />
                  <input type="hidden" name="_template" value="box" />
                  
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-300 block">First Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full text-xs font-semibold px-4 py-3.5 rounded-xl border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/25 outline-none transition-all bg-slate-950 text-white placeholder-slate-500"
                        placeholder="e.g., John"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-slate-300 block flex items-center justify-between">
                        <span>Company name</span>
                        <span className="text-[9px] text-slate-500 uppercase font-bold font-mono">optional</span>
                      </label>
                      <div className="relative">
                        <Building className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          className="w-full text-xs font-semibold pl-4 pr-10 py-3.5 rounded-xl border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/25 outline-none transition-all bg-slate-950 text-white placeholder-slate-500"
                          placeholder="e.g., SHEK Technology Ltd"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-300 block">Work Email</label>
                    <input 
                      type="type" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full text-xs font-semibold px-4 py-3.5 rounded-xl border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/25 outline-none transition-all bg-slate-950 text-white placeholder-slate-500"
                      placeholder="e.g., john@firm.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-300 block">Message Body</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full text-xs font-semibold px-4 py-3.5 rounded-xl border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/25 outline-none transition-all bg-slate-950 text-white placeholder-slate-500 resize-none"
                      placeholder="Outline spec requirements, general inquiries, or feedback coordinates here..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-98 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center text-xs font-bold uppercase tracking-wider justify-center gap-1.5">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2500/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Transmitting Portals...
                      </span>
                    ) : (
                      <span className="text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                        <span>Send Query Message</span>
                        <Send size={14} />
                      </span>
                    )}
                  </button>

                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-start space-x-3 text-xs leading-relaxed font-semibold shadow-xs"
                      >
                        <CheckCircle2 size={18} className="shrink-0 text-emerald-400 mt-0.5" />
                        <div>
                          <strong className="block mb-0.5 font-bold text-white">Message Sent!</strong>
                          <span>Your request document was dispatched securely. If this is your first time using this system, check your inbox for an activation verification link from FormSubmit!</span>
                        </div>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-5 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl flex items-start space-x-3 text-xs leading-relaxed font-semibold shadow-xs"
                      >
                        <AlertCircle size={18} className="shrink-0 text-rose-400 mt-0.5" />
                        <div>
                          <strong className="block mb-0.5 font-bold text-white">Transmission Failed</strong>
                          <span>An error occurred. Please contact us via info@stratbyte.cloud or +260 97 360 2780 for immediate offline backup response.</span>
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
