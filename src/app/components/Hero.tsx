"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 0,
    number: "01",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000",
    title: "Guiding towards mental wellbeing with understanding and patience",
    desc: "Creating personalized paths to mental wellbeing with care and understanding."
  },
  {
    id: 1,
    number: "02",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000",
    title: "Developing mindful strategies for future wellbeing.",
    desc: "Unlock new pathways to mental wellbeing and strengthen daily routines with thoughtful guidance."
  },
  {
    id: 2,
    number: "03",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000",
    title: "Empowering the growth of mindful, sustainable wellbeing.",
    desc: "Spotting promising areas and nurturing growth with clarity and patience."
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slideshow logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      {/* 1. Top Header Info */}
      <div className="fixed top-0 left-0 w-full z-[80] bg-[#050a1f] py-2.5 px-6 flex justify-between items-center text-[11px] font-medium text-blue-100/70 border-b border-white/5">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
            <Phone size={13} className="text-blue-500 group-hover:text-blue-400" />
            <span className="tracking-wide">Call: 0904 886 5177 </span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
            <MapPin size={13} className="text-blue-500 group-hover:text-blue-400" />
            <span className="tracking-wide">Oyo State, Ibadan</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-3 w-[1px] bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 cursor-pointer transition-opacity hover:text-blue-400">
                Client Login
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Hero Container */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slides[current].image}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.5, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 object-cover w-full h-full grayscale"
              alt="Hero background"
            />
          </AnimatePresence>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-blue-600/20 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 mt-20 flex flex-col md:flex-row justify-between items-start">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                  {slides[current].title.split(' businesses').map((part, i) => (
                    <React.Fragment key={i}>
                      {part}{i === 0 && ' businesses'}<br />
                    </React.Fragment>
                  ))}
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-md">
                  {slides[current].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <button className="border border-white/30 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-white hover:text-slate-900 transition-all">
              Get Solutions <ArrowUpRight size={18} />
            </button>

            {/* Category Tabs */}
            <div className="mt-16 flex gap-12 text-white/80 font-medium border-t border-white/10 pt-6">
              <span className="text-white border-b-2 border-blue-500 pb-2 cursor-pointer">
                Financial Service
              </span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Natural Resources
              </span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Advanced Manufacturing
              </span>
            </div>
          </div>

          {/* Slider Indicators (Clickable) */}
          <div className="hidden md:flex flex-col gap-4 items-center text-white/50 text-sm">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 flex items-center justify-center rounded-full ${
                  current === index 
                  ? "bg-blue-500 text-white w-8 h-8 font-bold" 
                  : "hover:text-white w-8 h-8"
                }`}
              >
                {slide.number}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Overlapping Feature Card */}
<div className="relative z-30 container mx-auto px-6 -mt-24">
  <div className="relative group">
    {/* Animated glow effect that follows the card */}
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
    
    <div className="relative bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/20 overflow-hidden">
      
      {/* Decorative inner elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
      
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-12">
        {/* Left Side: Content */}
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">Efficiency First</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Offering complete visibility through  <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              a single, trusted space.
            </span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium leading-relaxed max-w-sm">
            Nurturing balance through mindful structure and supportive features.
          </p>
        </div>

        {/* Right Side: Featured Logotypes */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-6 bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">
           Built on Care & Integrity
          </span>
          <div className="flex flex-wrap justify-center gap-8 items-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
             {/* Replace these with actual SVGs if possible */}
             <div className="text-xl font-black tracking-tighter text-slate-800">Confidential</div>
             <div className="text-xl font-serif italic font-bold text-slate-800 text-2xl">Secure</div>
             <div className="text-xl font-bold tracking-tight text-slate-800 underline underline-offset-4">Research-informed</div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Partner Ecosystem */}
      <div className="relative pt-8 border-t border-slate-100">
        <div className="flex flex-wrap justify-between items-center gap-6">
          {[" ", " ", " ", " ", " "].map((partner, i) => (
            <span 
              key={i} 
              className="text-sm font-bold tracking-widest text-slate-400 hover:text-blue-600 transition-colors cursor-default"
            >
              {partner}
            </span>
          ))}
          
          {/* Action Button inside the card for more "Life" */}
          <button className="hidden xl:flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Learn More <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}