import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Cloud, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 mr-2">
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
            <span className="font-display font-extrabold text-2xl tracking-[0.1em] text-black">STRATBYTE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  location.pathname === link.path ? 'text-brand-accent' : 'text-black/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/services" className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-primary/90 transition-all active:scale-95 shadow-lg shadow-brand-primary/20">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black/60 hover:text-black transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white border-b border-black/5"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-black/70 hover:text-brand-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3">
             <Link to="/services" onClick={() => setIsOpen(false)} className="w-full text-center flex items-center justify-center bg-brand-primary text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-brand-primary/90">
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
