import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-20 relative overflow-hidden">
      {/* Geometric accent to mimic top right of page 2 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent origin-bottom-left rotate-45 translate-x-32 -translate-y-32 z-0"></div>
      <div className="absolute top-0 right-0 w-64 h-64 border-[32px] border-white/20 origin-bottom-left rotate-45 translate-x-[9rem] -translate-y-[10rem] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-8">
              <div className="bg-white p-3 rounded-2xl w-fit shadow-lg shadow-white/10 hover:shadow-xl hover:scale-105 transition-all">
                <Logo className="scale-100" />
              </div>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              Empowering enterprises with cutting-edge, resilient cloud architectures and intelligent automation. Built for infinite scale, designed for absolute security.
            </p>
            <div className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-5 shadow-sm max-w-xs">
              <div className="flex items-start space-x-3 text-white/70">
                <MapPin size={18} className="shrink-0 mt-1 text-brand-accent" />
                <span className="text-sm leading-relaxed font-medium">
                  Plot 217 Minyanya Close,<br />
                  Longridge Chilanga,<br />
                  Lusaka, Zambia
                </span>
              </div>
              <div className="h-[1px] bg-white/10 w-full" />
              <div className="flex items-center space-x-3 text-white/70">
                <Phone size={18} className="shrink-0 text-brand-accent" />
                <a href="tel:+260973602780" className="text-sm font-bold hover:text-white transition-colors">
                  +260 97 360 2780
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail size={18} className="shrink-0 text-brand-accent" />
                <a href="mailto:info@stratbyte.cloud" className="text-sm font-bold hover:text-white transition-colors">
                  info@stratbyte.cloud
                </a>
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
