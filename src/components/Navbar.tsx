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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f19]/85 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <Logo className="scale-100 origin-left transition-transform group-hover:scale-102" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-tight transition-colors hover:text-cyan-400 ${
                  location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/services" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all active:scale-95 shadow-md shadow-blue-500/20">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white transition-colors"
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
        className="md:hidden overflow-hidden bg-[#0c1222] border-b border-slate-800"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 text-base font-semibold transition-colors ${
                location.pathname === link.path ? 'text-cyan-400 bg-slate-900/40' : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3">
             <Link to="/services" onClick={() => setIsOpen(false)} className="w-full text-center flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
