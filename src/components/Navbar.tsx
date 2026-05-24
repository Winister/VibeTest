import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

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
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <Logo className="scale-90 origin-left transition-transform group-hover:scale-95" />
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
