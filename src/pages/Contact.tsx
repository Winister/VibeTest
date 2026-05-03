import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
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
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="pt-32 pb-40 min-h-screen flex flex-col justify-center">
      <section className="bg-brand-accent text-white rounded-r-[4rem] rounded-l-none md:rounded-l-[8rem] ml-0 md:ml-12 overflow-hidden relative py-20 lg:py-32 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-medium leading-[0.9] mb-4 tracking-tight italic">
                Thank You!
              </h1>
              
              <div className="w-full h-48 md:h-64 rounded-[4rem] overflow-hidden my-12 relative shadow-2xl border-4 border-white/20 hidden sm:block">
                 <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Office Workers" />
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold leading-[0.9] mb-8 tracking-tight">
                Our Contact:
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                  <div className="p-3 bg-brand-primary rounded-full text-white shrink-0 shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-bold leading-relaxed text-white pt-2">
                       +260 768 407 072
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-primary rounded-full text-white shrink-0 shadow-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-bold leading-relaxed text-white pt-2">
                      <a href="mailto:info@stratbyte.cloud" className="hover:text-white/80 transition-colors">info@stratbyte.cloud</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-primary rounded-full text-white shrink-0 shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white/90 leading-relaxed pt-2">
                      Plot 217 Minyanya Close,<br />
                      Longridge Chilanga,<br />
                      Lusaka, Zambia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white text-black p-8 md:p-10 rounded-3xl shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-black/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-3xl font-bold mb-2">Send a Message</h3>
              <p className="text-black/60 mb-8 text-sm">We typically respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - StratByte" />
                <input type="hidden" name="_template" value="box" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold block">First Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-bold block">Company</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold block">Work Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold block">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-accent text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-accent/90 transition-all active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-xl flex items-start space-x-3 text-sm font-medium"
                  >
                    <CheckCircle2 size={20} className="shrink-0 text-green-500" />
                    <span>Message sent successfully! We will get back to you soon. Please check your email inbox to activate FormSubmit if this is your first time using it!</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 text-red-700 rounded-xl flex items-start space-x-3 text-sm font-medium"
                  >
                    <AlertCircle size={20} className="shrink-0 text-red-500" />
                    <span>Oops! Something went wrong. Please try again later.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
        
        {/* Decorative background circles */}
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-black/10 rounded-full" />
        <div className="absolute top-1/4 -left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full pointer-events-none" />
      </section>
    </div>
  );
}
