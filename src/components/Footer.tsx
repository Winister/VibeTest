import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090d16] text-[#94a3b8] pt-24 pb-12 relative overflow-hidden border-t border-slate-900">
      {/* Dynamic ambient grid background */}
      <div className="absolute inset-0 technical-grid opacity-[0.5] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800/60">
          
          {/* Brand Col */}
          <div className="md:col-span-5 text-left">
            <Link to="/" onClick={scrollToTop} className="inline-block mb-6">
              <Logo className="scale-100" />
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-8">
              Zambia's premier elite technology firm specializing in beautiful custom web development, complex mobile database architectures, and certified IT operations. Discarding templates to write performance-optimized code block-by-block.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-slate-800 rounded-lg hover:border-cyan-400 hover:text-white transition-all text-slate-400">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2 border border-slate-800 rounded-lg hover:border-cyan-400 hover:text-white transition-all text-slate-400">
                <Github size={16} />
              </a>
              <a href="#" className="p-2 border border-slate-800 rounded-lg hover:border-cyan-400 hover:text-white transition-all text-slate-400">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-1" />

          {/* Solutions Column */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono font-bold text-[10px] uppercase tracking-widest text-white mb-6">Solutions Portal</h4>
            <ul className="space-y-3.5 text-xs">
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Custom Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-slate-400 hover:text-cyan-400 transition-colors">
                  IT Consultancy & Systems Admin
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Vehicle Diagnostics & Fleet Tech
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Digital Sourcing & Procurement
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono font-bold text-[10px] uppercase tracking-widest text-white mb-6">Company & Logs</h4>
            <ul className="space-y-3.5 text-xs">
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Our Corporate DNA
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Connect With Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" onClick={scrollToTop} className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Privacy Protocols
                </Link>
              </li>
              <li>
                <Link to="/terms" onClick={scrollToTop} className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Stratbyte Solutions. 100% Zambian Owned firm.</p>
            <div className="hidden md:block w-1.5 h-1.5 bg-slate-850 rounded-full" />
            <p className="flex items-center gap-2">
              <MapPin size={12} className="text-cyan-400 shrink-0" />
              <span>Cooperative House, Plot 692 Cha Cha Cha Road, Lusaka, Zambia</span>
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-bold text-slate-300 uppercase hover:border-cyan-400 hover:text-white transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
