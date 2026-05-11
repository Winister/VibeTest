import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('stratbyte_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('stratbyte_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('stratbyte_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-[100] md:max-w-sm bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden"
        >
          <div className="bg-brand-primary h-1.5 w-full" />
          <div className="p-6 relative">
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={18} />
            </button>
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center mr-3 text-brand-primary shrink-0">
                <Cookie size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">We use cookies</h3>
            </div>
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              We use cookies to improve your experience, analyze traffic, and personalize content. By continuing to use our site, you agree to our <Link to="/privacy" className="text-brand-accent hover:underline font-bold">Privacy Policy</Link>.
            </p>
            <div className="flex space-x-3">
              <button 
                onClick={handleAccept}
                className="flex-1 bg-brand-primary text-white py-2.5 rounded-xl font-bold text-sm hover:bg-brand-primary/90 transition-all shadow-md active:scale-95"
              >
                Accept All
              </button>
              <button 
                onClick={handleDecline}
                className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all active:scale-95"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
