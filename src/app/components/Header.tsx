"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Changed: top-6 -> top-14 (Moves it lower to clear the fixed top bar)
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[100]">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-blue-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
        
        {/* Dark Glass Container */}
        <div className="relative bg-[#050a1f]/80 backdrop-blur-xl rounded-full shadow-2xl px-4 py-2 flex items-center justify-between border border-white/10">
          
          {/* Brand/Logo */}
          <div className="flex items-center gap-2 ml-4">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">Dr.</div>
             <span className="font-extrabold text-white tracking-tight hidden md:block">Oyenike Adeleke</span>
          </div>

          {/* Middle: Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="group flex items-center gap-1 text-[14px] font-bold text-white/90 hover:text-blue-400 transition-colors"
              >
                {item.name}
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 opacity-30" />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-white/80">
              <Search size={18} />
            </button>

            <div className="hidden lg:block h-6 w-[1px] bg-white/10 mx-1" />

            {/* CTA Button */}
            <Link 
              href="/get-started"
              className="bg-white text-[#050a1f] px-6 py-2.5 rounded-full text-[14px] font-bold hover:bg-blue-600 hover:text-white transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-white/5"
            >
              Get Started
            </Link>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Dark Glass) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-[#050a1f]/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 flex flex-col gap-4 border border-white/10 mx-2"
          >
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-lg font-bold text-white hover:text-blue-400 px-4 py-2 hover:bg-white/5 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;