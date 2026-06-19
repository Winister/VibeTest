import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, MapPin, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-zinc-500 pt-24 pb-12 relative overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-200">
          
          {/* Brand Col */}
          <div className="md:col-span-5 text-left">
            <Link to="/" onClick={scrollToTop} className="inline-block mb-6">
              <Logo className="scale-100" />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-8">
              Zambia's premier elite technology firm specializing in beautiful custom web development, complex mobile database architectures, and certified IT operations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-zinc-200 rounded-lg hover:border-zinc-900 hover:text-zinc-900 transition-all text-zinc-500">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2 border border-zinc-200 rounded-lg hover:border-zinc-900 hover:text-zinc-900 transition-all text-zinc-500">
                <Github size={16} />
              </a>
              <a href="#" className="p-2 border border-zinc-200 rounded-lg hover:border-zinc-900 hover:text-zinc-900 transition-all text-zinc-500">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-1" />

          {/* Solutions Column */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-medium text-xs uppercase tracking-wider text-zinc-900 mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  Custom Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  IT Consultancy 
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  Fleet Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  Digital Procurement
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-medium text-xs uppercase tracking-wider text-zinc-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" onClick={scrollToTop} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" onClick={scrollToTop} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Stratbyte Solutions. All rights reserved.</p>
            <div className="hidden md:block w-1 h-1 bg-zinc-300 rounded-full" />
            <p className="flex items-center gap-2">
              <MapPin size={14} className="text-zinc-400 shrink-0" />
              <span>Lusaka, Zambia</span>
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 border border-zinc-200 rounded-lg text-xs font-medium text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 hover:bg-zinc-50 transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
