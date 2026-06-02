import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Flame, CheckCircle, ArrowRight } from 'lucide-react';
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
          className="fixed bottom-6 left-6 z-40 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-black uppercase tracking-widest px-5 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 border border-white/20"
          id="promo-trigger"
        >
          <Flame size={14} className="text-amber-400 animate-pulse" />
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
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              id="promo-backdrop"
            />

            {/* Main Modal Card (Resized and customized into sleek dark space card) */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative bg-slate-900 w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden border border-slate-800 relative z-10 text-slate-100"
              id="promo-modal"
            >
              {/* Premium Top Design Accent */}
              <div className="w-full h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 z-20 text-slate-400 hover:text-white bg-slate-950/50 hover:bg-slate-950 p-2 rounded-full border border-slate-800 transition-colors"
                aria-label="Close promo modal"
              >
                <X size={16} />
              </button>

              {/* Content Body */}
              <div className="p-6 sm:p-8 text-center relative">
                
                {/* Background glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                
                {/* Promo Header Badge */}
                <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/25 rounded-full px-3.5 py-1 mb-5">
                  <Sparkles size={12} className="text-cyan-400 animate-spin" />
                  <span className="text-[9px] font-black text-cyan-300 uppercase tracking-widest leading-none font-mono">Special June Promo Offer</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-black leading-tight text-white uppercase tracking-tight">
                  Fully Responsive <br />
                  Websites for <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">K500 Only!</span>
                </h3>

                <p className="text-slate-350 text-xs mt-3 font-medium max-w-xs mx-auto leading-relaxed">
                  Launch your stunning corporate webpage, resume, or business portfolio this June with Zambia's elite development team.
                </p>

                {/* Promotional Terms Matrix */}
                <div className="bg-slate-950/50 border border-slate-850 rounded-2xl p-5 my-6 text-left space-y-3.5 relative">
                  
                  {/* Huge Pricing Focal Point */}
                  <div className="flex items-baseline justify-center border-b border-slate-800/65 pb-4 mb-3">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2 font-mono">Investment:</span>
                    <span className="text-4xl font-display font-black text-white">K500</span>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold ml-1.5 uppercase">/ Once-off</span>
                  </div>

                  <div className="space-y-2.5 text-[11px] font-semibold leading-relaxed">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={14} />
                      <p className="text-slate-200 ml-2.5">
                        Custom landing page fully optimized for mobile devices and tablets
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={14} />
                      <p className="text-slate-200 ml-2.5">
                        High Speed setup & pristine layout crafted under our brand standards
                      </p>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="text-slate-500 shrink-0 mt-0.5" size={14} />
                      <p className="text-slate-400 ml-2.5">
                        <strong className="text-slate-200 font-bold">Domain Name</strong>: Not included (bring your own or register with us)
                      </p>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="text-blue-400 shrink-0 mt-0.5" size={14} />
                      <p className="text-slate-300 ml-2.5">
                        <strong className="text-white">Reliable SSD Hosting</strong>: Starting from only <span className="text-cyan-300 font-bold">K50 per month!</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submitting buttons */}
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={handleClaim}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white py-3 px-5 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>Claim Promo Offer</span>
                    <ArrowRight size={12} />
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full bg-slate-950 hover:bg-slate-920 border border-slate-800 text-slate-400 hover:text-white py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
                  >
                    Maybe Later
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-center space-x-1.5 text-[8px] font-mono text-slate-550 uppercase tracking-widest">
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
