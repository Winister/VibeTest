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
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-1.5 bg-brand-accent rounded-lg text-white transform transition-transform group-hover:rotate-12">
              <Cloud size={24} />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter">STRATBYTE</span>
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
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition-all active:scale-95">
              Get Started
            </button>
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
             <button className="w-full bg-black text-white px-5 py-3 rounded-xl text-sm font-medium">
              Get Started
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
