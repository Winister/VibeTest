import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Building, Clock, HelpCircle, FileText, ArrowRight } from 'lucide-react';
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
    <div className="pt-24 pb-40 min-h-screen bg-white overflow-hidden">
      
      {/* Visual Accent Top Bar */}
      <div className="w-full h-1.5 bg-gradient-to-r from-brand-accent via-brand-primary to-blue-600" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12">
        {/* Ambient Gradient Blows */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid gap-16 lg:grid-cols-12 items-start relative z-10">
          
          {/* Left Column: Premium Brand & Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-left"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-black text-brand-primary uppercase tracking-widest leading-none font-sans">LUSAKA HQ DESK</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-black leading-[1.05] uppercase text-gray-900 mb-6 tracking-tight">
              Let's craft your <br />
              <span className="text-brand-primary font-extrabold">Digital Presence</span>
            </h1>

            <div className="h-[2px] w-20 bg-brand-accent mb-8" />

            {/* Google Form Urgent Callout Card (Strategic placement) */}
            <div className="bg-gradient-to-br from-brand-accent/5 to-brand-primary/5 border border-brand-accent/20 p-6 rounded-3xl mb-8 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/10 rounded-full blur-xl" />
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight flex items-center gap-2 mb-2">
                <FileText size={16} className="text-brand-accent" />
                <span>Website Briefing Form</span>
              </h4>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed mb-4">
                Want to accelerate launch times? Access the official Google Form we use to collect precise details of desired pages, styles, and integrations.
              </p>
              
              <a 
                href={googleFormUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold uppercase text-[10px] tracking-widest px-5 py-3 rounded-xl transition-all shadow-md group"
              >
                <span>Fill out Web brief planner</span>
                <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            {/* Hand-coded custom SVG Vector Stock Illustration depicting tech communication routing nodes (100% Vector representation) */}
            <div className="w-full h-fit py-6 bg-gray-50 rounded-[2rem] border border-gray-150 mb-8 flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #9955BB 1px, transparent 0)', backgroundSize: '16px 16px' }} />
              
              <svg viewBox="0 0 320 200" className="w-full max-w-[280px] h-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connector dots backgrounds */}
                <circle cx="160" cy="100" r="45" fill="#FAF5FF" stroke="#D6BCFA" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="160" cy="100" r="30" fill="#E6FFFA" stroke="#81E6D9" strokeWidth="1.5" />
                
                {/* Central server transmission array */}
                <rect x="142" y="85" width="36" height="30" rx="4" fill="#FFFFFF" stroke="#0099B9" strokeWidth="2" />
                <line x1="148" y1="95" x2="172" y2="95" stroke="#0099B9" strokeWidth="2" strokeLinecap="round" />
                <line x1="148" y1="105" x2="164" y2="105" stroke="#0099B9" strokeWidth="2" strokeLinecap="round" />
                <circle cx="170" cy="105" r="2" fill="#38A169" />

                {/* External nodes */}
                {/* Customer Node */}
                <g transform="translate(40, 40)">
                  <circle cx="20" cy="20" r="20" fill="#EBF8FF" stroke="#3182CE" strokeWidth="1.5" />
                  <path d="M12 25 C12 20 28 20 28 25" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="20" cy="14" r="4" fill="#3182CE" />
                </g>
                <path d="M80 60 L130 90" stroke="#CBD5E0" strokeWidth="1.5" strokeDasharray="2 2" />

                {/* Support Node */}
                <g transform="translate(240, 40)">
                  <circle cx="20" cy="20" r="20" fill="#F0FFF4" stroke="#38A169" strokeWidth="1.5" />
                  <path d="M14 20 L18 24 L26 16" stroke="#38A169" strokeWidth="2" strokeLinecap="round" />
                </g>
                <path d="M240 60 L190 90" stroke="#CBD5E0" strokeWidth="1.5" strokeDasharray="2 2" />

                {/* Database Node */}
                <g transform="translate(140, 150)">
                  <rect width="40" height="25" rx="3" fill="#FFF5F5" stroke="#E53E3E" strokeWidth="1.5" />
                  <line x1="8" y1="6" x2="32" y2="6" stroke="#E53E3E" strokeWidth="2" />
                  <line x1="8" y1="12" x2="32" y2="12" stroke="#E53E3E" strokeWidth="2" />
                  <line x1="8" y1="18" x2="24" y2="18" stroke="#E53E3E" strokeWidth="2" />
                </g>
                <path d="M160 120 L160 150" stroke="#CBD5E0" strokeWidth="1.5" />
              </svg>
            </div>

            <h2 className="text-lg font-display font-black uppercase tracking-tight mb-6 text-gray-900">
              Operational Channels
            </h2>
            
            <div className="space-y-4">
              {/* Phone Info */}
              <div className="flex items-center space-x-5 bg-gray-50/50 hover:bg-white p-5 rounded-2xl border border-gray-150 hover:border-brand-primary/20 transition-all shadow-xs group">
                <div className="p-3 bg-brand-primary/10 group-hover:bg-brand-primary group-hover:text-white rounded-xl text-brand-primary shrink-0 transition-all">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5 font-mono">Operation Desk</h4>
                  <p className="text-base font-black text-gray-950">
                    <a href="tel:+260973602780" className="hover:text-brand-primary transition-colors">+260 97 360 2780</a>
                  </p>
                </div>
              </div>

              {/* Email Info */}
              <div className="flex items-center space-x-5 bg-gray-50/50 hover:bg-white p-5 rounded-2xl border border-gray-150 hover:border-brand-accent/20 transition-all shadow-xs group">
                <div className="p-3 bg-brand-accent/10 group-hover:bg-brand-accent group-hover:text-white rounded-xl text-brand-accent shrink-0 transition-all">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5 font-mono">Mail Transmissions</h4>
                  <p className="text-base font-black text-gray-950">
                    <a href="mailto:info@stratbyte.cloud" className="hover:text-brand-primary transition-colors">info@stratbyte.cloud</a>
                  </p>
                </div>
              </div>

              {/* Address Info */}
              <div className="flex items-center space-x-5 bg-gray-50/50 hover:bg-white p-5 rounded-2xl border border-gray-150 transition-all shadow-xs group">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5 font-mono">Headquarters Coordinates</h4>
                  <p className="text-xs font-bold text-gray-500 leading-relaxed">
                    Plot 217 Minyanya Close, Longridge Chilanga, Lusaka, Zambia
                  </p>
                </div>
              </div>
            </div>

            {/* Standard Response times */}
            <div className="mt-8 grid gap-4 grid-cols-2 bg-gray-50 p-4 rounded-2xl border border-gray-150 text-left">
              <div className="flex items-center space-x-2 text-xs font-bold text-gray-550">
                <Clock size={14} className="text-brand-primary" />
                <span>Response &lt; 24 Hrs</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold text-gray-550">
                <HelpCircle size={14} className="text-brand-accent" />
                <span>Zero Consultation Fee</span>
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
            <div className="bg-white border border-gray-200 rounded-[3rem] p-8 lg:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl" />

              <div className="relative z-10 text-left">
                <h3 className="text-2xl lg:text-3xl font-display font-black text-gray-950 uppercase tracking-tight mb-2">Transmission Message Board</h3>
                <p className="text-xs text-gray-450 font-medium mb-10 leading-relaxed">Fill out the general queries form below to send an integrated email directly to our developers.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* FormSubmit options */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission - StratByte" />
                  <input type="hidden" name="_template" value="box" />
                  
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-black uppercase tracking-wider text-gray-600 block">First Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full text-xs font-semibold px-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all bg-white text-gray-800"
                        placeholder="e.g., John"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-black uppercase tracking-wider text-gray-600 block flex items-center justify-between">
                        <span>Company name</span>
                        <span className="text-[9px] text-gray-400 uppercase font-bold font-mono">optional</span>
                      </label>
                      <div className="relative">
                        <Building className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          className="w-full text-xs font-semibold pl-4 pr-10 py-3.5 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all bg-white text-gray-800"
                          placeholder="e.g., SHEK Technology Ltd"
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
                      placeholder="e.g., john@firm.com"
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
                      placeholder="Outline outline plans, general inquiries, or feedback coordinates here..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-primary/95 transition-all shadow-md active:scale-98 disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center text-xs font-black uppercase tracking-wider">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Transmitting Portals...
                      </span>
                    ) : (
                      <span className="text-xs font-black uppercase tracking-widest flex items-center justify-center">
                        <span>Send Query Message</span>
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
                        <CheckCircle2 size={18} className="shrink-0 text-emerald-555 mt-0.5" />
                        <div>
                          <strong className="block mb-0.5 font-bold text-emerald-950">Message Sent!</strong>
                          <span>Your request document was dispatched securely. If this is your first time using this system, check your inbox for an activation verification link from FormSubmit!</span>
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
                        <AlertCircle size={18} className="shrink-0 text-rose-555 mt-0.5" />
                        <div>
                          <strong className="block mb-0.5 font-bold text-rose-950">Transmission Failed</strong>
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
