import { Link } from 'react-router-dom';
import { Cloud, Github, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-20 relative overflow-hidden">
      {/* Geometric accent to mimic top right of page 2 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent origin-bottom-left rotate-45 translate-x-32 -translate-y-32 z-0"></div>
      <div className="absolute top-0 right-0 w-64 h-64 border-[32px] border-white/20 origin-bottom-left rotate-45 translate-x-[9rem] -translate-y-[10rem] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="relative flex items-center justify-center w-8 h-8 mr-1 bg-white rounded-full p-1.5 pt-2">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-primary">
                   <circle cx="50" cy="50" r="16" className="fill-brand-accent" />
                   <circle cx="20" cy="30" r="10" />
                   <circle cx="80" cy="30" r="10" />
                   <circle cx="28" cy="75" r="10" />
                   <circle cx="72" cy="75" r="10" />
                   <circle cx="12" cy="55" r="7" className="fill-brand-accent" />
                   <circle cx="88" cy="55" r="7" className="fill-brand-accent" />
                   <circle cx="50" cy="20" r="8" className="fill-brand-primary" />
                   <circle cx="50" cy="82" r="8" className="fill-brand-accent" />
                </svg>
              </div>
              <span className="font-display font-bold text-2xl tracking-[0.1em] text-white">STRATBYTE</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">
              Empowering enterprises with cutting-edge cloud architectures and DevOps automation. Built for scale, designed for security.
            </p>
            <div className="space-y-4 shadow-sm">
              <div className="flex items-start space-x-3 text-white/60">
                <MapPin size={18} className="shrink-0 mt-0.5 text-brand-accent" />
                <span className="text-sm max-w-[200px]">Cooperative House Plot 692 Cha Cha Cha Road, Lusaka, Zambia</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60">
                <Phone size={18} className="shrink-0 text-brand-accent" />
                <span className="text-sm">+260 97 3602780</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60">
                <Mail size={18} className="shrink-0 text-brand-accent" />
                <span className="text-sm"><a href="mailto:info@stratbyte.cloud" className="hover:text-white transition-colors">info@stratbyte.cloud</a></span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white/40 mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-sm text-white/70 hover:text-brand-accent transition-colors">Migration</Link></li>
              <li><Link to="/services" className="text-sm text-white/70 hover:text-brand-accent transition-colors">Cloud Native</Link></li>
              <li><Link to="/services" className="text-sm text-white/70 hover:text-brand-accent transition-colors">Serverless</Link></li>
              <li><Link to="/services" className="text-sm text-white/70 hover:text-brand-accent transition-colors">DevOps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white/40 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-white/70 hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white/40 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-sm text-white/70 hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-white/70 hover:text-brand-accent transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="flex space-x-4 mt-8">
              <Twitter size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Github size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} StratByte Cloud Solutions. All rights reserved.
          </p>
          <p className="text-white/20 text-xs mt-4 md:mt-0">
            Precision in every byte.
          </p>
        </div>
      </div>
    </footer>
  );
}
