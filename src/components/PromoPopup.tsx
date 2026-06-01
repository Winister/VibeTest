import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Flame, CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already dismissed the popup in this session or local storage
    const hasSeenPromo = localStorage.getItem('stratbyte_june_promo_dismissed');
    if (!hasSeenPromo) {
      // Delay popup by 2.5 seconds for premium user experience
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('stratbyte_june_promo_dismissed', 'true');
  };

  const handleClaim = () => {
    setIsOpen(false);
    localStorage.setItem('stratbyte_june_promo_dismissed', 'true');
    navigate('/contact', { 
      state: { 
        customMessage: "Hi StratByte team, I would love to claim the June Promo package for a K500 Website! Please get back to me with the details." 
      } 
    });
  };

  return (
    <>
      {/* Floating offer trigger badge in the bottom-left corner so users can retrieve it */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 bg-gradient-to-r from-brand-accent to-brand-primary text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 border border-white/20"
          id="promo-trigger"
        >
          <Flame size={14} className="text-amber-300 animate-pulse" />
          <span>June K500 Promo</span>
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
              id="promo-backdrop"
            />

            {/* Main Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-150 relative z-10"
              id="promo-modal"
            >
              {/* Premium Top Design Accent */}
              <div className="w-full h-2 bg-gradient-to-r from-brand-accent via-amber-400 to-brand-primary" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 z-20 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 p-2 rounded-full border border-gray-100 transition-colors"
                aria-label="Close promo modal"
              >
                <X size={18} />
              </button>

              {/* Content Body */}
              <div className="p-8 md:p-10 text-center relative">
                
                {/* Background glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
                
                {/* Promo Header Badge */}
                <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-6">
                  <Sparkles size={14} className="text-amber-500 animate-spin" />
                  <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest leading-none font-sans">Special June Promo Offer</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-black leading-tight text-gray-900 uppercase">
                  Fully Responsive <br />
                  Websites for <span className="text-gradient">K500 Only!</span>
                </h3>

                <p className="text-gray-500 text-sm mt-3 font-medium max-w-sm mx-auto font-sans">
                  Launch your stunning corporate webpage, resume, or business portfolio this June with Zambia's elite development engineers.
                </p>

                {/* Promotional Terms Matrix */}
                <div className="bg-gray-50/75 border border-gray-100 rounded-3xl p-6 my-8 text-left space-y-4 relative">
                  
                  {/* Huge Pricing Focal Point */}
                  <div className="flex items-baseline justify-center border-b border-gray-150 pb-5 mb-4">
                    <span className="text-sm font-black text-gray-400 uppercase tracking-wider mr-2 font-display">Investment:</span>
                    <span className="text-5xl font-display font-black text-gray-900">K500</span>
                    <span className="text-xs font-mono text-gray-400 font-bold ml-1">/ ONCE-OFF</span>
                  </div>

                  <div className="space-y-3.5">
                    <div className="flex items-start">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                      <p className="text-xs font-bold text-gray-700 ml-3 font-sans">
                        Custom landing page fully optimized for mobile devices and tablets
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                      <p className="text-xs font-bold text-gray-700 ml-3 font-sans font-bold">
                        High Speed setup & pristine layout crafted under our brand standards
                      </p>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                      <p className="text-xs font-semibold text-gray-500 ml-3 font-sans">
                        <strong className="text-gray-700">Domain Registration</strong>: Fee is not included (bring your own or register via our team)
                      </p>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="text-brand-primary shrink-0 mt-0.5" size={16} />
                      <p className="text-xs font-semibold text-gray-505 ml-3 font-sans">
                        <strong className="text-gray-700 font-bold">Reliable SSD Hosting</strong>: Starting at only <span className="text-brand-primary font-black">K50 per month!</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submitting buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleClaim}
                    className="flex-1 bg-brand-primary hover:bg-brand-primary/95 text-white py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 font-sans"
                  >
                    <span>Claim Promo Offer</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    onClick={handleClose}
                    className="sm:w-32 bg-white border border-gray-200 text-gray-600 hover:text-gray-900 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:bg-gray-50 font-sans"
                  >
                    Maybe Later
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-center space-x-1.5 text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                  <span>*Offer Valid June 1st - June 30th</span>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
