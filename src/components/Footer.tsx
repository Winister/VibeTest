import { Link } from 'react-router-dom';
import { Cloud, Github, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-1.5 bg-brand-accent rounded-lg text-white">
                <Cloud size={24} />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">STRATBYTE</span>
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
              <li><Link to="/blog" className="text-sm text-white/70 hover:text-brand-accent transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-sm text-white/70 hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-white/70 hover:text-brand-accent transition-colors">Careers</Link></li>
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
