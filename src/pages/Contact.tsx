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
    
    // Simulating the form submit for the static preview
    setTimeout(() => {
        setStatus('success');
        setMessage('');
        setTimeout(() => setStatus('idle'), 6000);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-40 min-h-screen bg-zinc-50 text-zinc-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid gap-16 lg:grid-cols-12 items-start relative z-10">
          
          {/* Left Column: Premium Brand & Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase leading-none">LUSAKA HQ</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-medium leading-[1.05] text-zinc-900 mb-6 tracking-tight">
              Let's craft your <br />
              <span className="text-zinc-500">Digital Presence</span>
            </h1>

            <div className="h-0.5 w-16 bg-zinc-900 mb-8" />

            {/* Google Form Urgent Callout Card */}
            <div className="bg-white border border-zinc-200 p-6 rounded-2xl mb-8 relative overflow-hidden shadow-sm">
              <h4 className="text-sm font-medium text-zinc-900 flex items-center gap-2 mb-2">
                <FileText size={16} className="text-zinc-500" />
                <span>Website Briefing Form</span>
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                Want to accelerate launch times? Access the official Google Form we use to collect precise details of desired pages, styles, and integrations.
              </p>
              
              <a 
                href={googleFormUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm px-5 py-3 rounded-xl transition-colors group"
              >
                <span>Fill out Web brief planner</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <h2 className="text-lg font-medium tracking-tight mb-6 text-zinc-900">
              Operational Channels
            </h2>
            
            <div className="space-y-4">
              {/* Phone Info */}
              <div className="flex items-center space-x-5 bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="p-3 bg-zinc-50 rounded-xl text-zinc-900 border border-zinc-100 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">Operation Desk</h4>
                  <p className="text-sm sm:text-base font-medium text-zinc-900">
                    <a href="tel:+260956450838" className="hover:text-zinc-600 transition-colors">+260 95 645 0838</a>
                  </p>
                </div>
              </div>

              {/* Email Info */}
              <div className="flex items-center space-x-5 bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="p-3 bg-zinc-50 rounded-xl text-zinc-900 border border-zinc-100 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">Mail Transmissions</h4>
                  <p className="text-sm sm:text-base font-medium text-zinc-900">
                    <a href="mailto:info@stratbyte.cloud" className="hover:text-zinc-600 transition-colors">info@stratbyte.cloud</a>
                  </p>
                </div>
              </div>

              {/* Address Info */}
              <div className="flex items-center space-x-5 bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="p-3 bg-zinc-50 rounded-xl text-zinc-900 border border-zinc-100 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">Headquarters</h4>
                  <p className="text-sm text-zinc-900">
                    Cooperative House, Cha Cha Cha Road, Lusaka
                  </p>
                </div>
              </div>
            </div>

            {/* Response guidelines */}
            <div className="mt-8 grid gap-4 grid-cols-2 bg-white border border-zinc-200 p-4 rounded-2xl">
              <div className="flex items-center space-x-2 text-sm text-zinc-600">
                <Clock size={16} className="text-zinc-900" />
                <span>Response &lt; 24 Hrs</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-zinc-600">
                <HelpCircle size={16} className="text-zinc-900" />
                <span>Consultation Desk</span>
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
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 lg:p-12 shadow-sm">
              <h3 className="text-2xl lg:text-3xl font-medium text-zinc-900 tracking-tight mb-4">Transmission Message Board</h3>
              <p className="text-sm text-zinc-500 mb-10 leading-relaxed">Fill out the general queries form below to send an integrated email directly to our developers.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-medium text-zinc-600 block">First Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full text-sm px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 focus:outline-none transition-colors"
                      placeholder="e.g., John"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-medium text-zinc-600 flex items-center justify-between">
                      <span>Company name</span>
                      <span className="text-[10px] text-zinc-400">optional</span>
                    </label>
                    <div className="relative">
                      <Building className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        className="w-full text-sm pl-4 pr-10 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 focus:outline-none transition-colors"
                        placeholder="e.g., StratByte Ltd"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium text-zinc-600 block">Work Email</label>
                  <input 
                    type="type" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full text-sm px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 focus:outline-none transition-colors"
                    placeholder="e.g., john@firm.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-medium text-zinc-600 block">Message Body</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-sm px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 focus:outline-none transition-colors resize-none"
                    placeholder="Outline spec requirements, general inquiries, or feedback coordinates here..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-4 px-6 rounded-xl text-sm font-medium transition-colors disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span>Send Message</span>
                      <Send size={16} />
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-5 bg-zinc-50 border border-zinc-200 rounded-xl flex items-start space-x-3 text-sm shadow-sm"
                    >
                      <CheckCircle2 size={20} className="shrink-0 text-zinc-900 mt-0.5" />
                      <div>
                        <strong className="block mb-1 font-medium text-zinc-900">Message Sent!</strong>
                        <span className="text-zinc-600">Your request document was dispatched securely.</span>
                      </div>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-5 bg-red-50 border border-red-100 rounded-xl flex items-start space-x-3 text-sm shadow-sm"
                    >
                      <AlertCircle size={20} className="shrink-0 text-red-600 mt-0.5" />
                      <div>
                        <strong className="block mb-1 font-medium text-red-900">Transmission Failed</strong>
                        <span className="text-red-700">An error occurred. Please contact us via phone or email.</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
