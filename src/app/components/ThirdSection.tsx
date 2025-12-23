"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronUp, ChevronDown, ArrowUpRight, Landmark, Briefcase, ShieldCheck } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Mental Health Services",
    icon: <Landmark size={20} />,
    description: "I support people and institutions, from small practices to larger care networks, in managing complexities and fostering growth.",
    features: [
      "Emotional Resilience",
      "Structured Support",
      "Organized Care",
      "Protective Guidance"
    ],
    image: "https://images.unsplash.com/photo-1600880212340-02d956553908?q=80&w=1000"
  },
];

export default function ThirdSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentService = services[activeIndex];

  return (
    // Changed: bg-[#f8faff] -> bg-blue-100/50 (A bit darker, dustier blue)
    <section className="bg-blue-100/50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-slate-900 rounded-bl-xl" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600 rounded-tr-lg" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900">Guided Support options</h2>
        </motion.div>

        {/* Main Services Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Top Folder Tab Decoration */}
          <div className="absolute -top-6 left-0 flex items-end">
            {/* Changed: bg-white -> bg-blue-50 (Matches darker surround) */}
            <div className="bg-blue-50 h-8 w-40 rounded-t-2xl shadow-sm border-x border-t border-blue-200/50" />
            <div className="bg-blue-600 h-3 w-[60%] rounded-tr-xl mb-0" />
          </div>

          {/* Dark Content Box */}
          <div className="bg-[#050a1f] rounded-tr-[40px] rounded-b-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-12 overflow-hidden shadow-2xl">
            
            {/* Left Rail: Icon Navigation */}
            <div className="flex md:flex-col gap-4 order-2 md:order-1">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                    activeIndex === idx 
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20" 
                    : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10"
                  }`}
                >
                  {service.icon}
                </button>
              ))}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-white/30 cursor-not-allowed">
                <Briefcase size={20} />
              </div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-white/30 cursor-not-allowed">
                <ShieldCheck size={20} />
              </div>
            </div>

            {/* Middle: Content Area */}
            <div className="flex-1 text-white order-3 md:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">{currentService.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                    {currentService.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 gap-4 mb-10">
                    {currentService.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-gray-300 font-medium"
                      >
                        <ChevronRight size={18} className="text-blue-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-md flex items-center gap-2 font-semibold hover:bg-blue-500 transition-colors"
                  >
                    Read more <ArrowUpRight size={18} />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Image & Slider Controls */}
            <div className="relative flex flex-col md:flex-row gap-8 order-1 md:order-3">
              <div className="relative w-full md:w-[350px] h-[300px] rounded-b-2xl rounded-tl-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#050a1f] z-10 rounded-bl-full translate-x-4 -translate-y-4 border-l-4 border-b-4 border-white/10" />
                
                <div className="absolute top-6 right-6 z-20 text-blue-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" />
                  </svg>
                </div>

                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Vertical Slider UI */}
              <div className="flex flex-col items-center justify-center gap-4 text-white/40">
                <button className="hover:text-blue-500 transition-colors"><ChevronUp size={24} /></button>
                <div className="flex flex-col items-center">
                   <motion.span 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl font-bold text-white border-y border-white/10 py-2"
                   >
                    {currentService.id}
                   </motion.span>
                </div>
                <button className="hover:text-blue-500 transition-colors"><ChevronDown size={24} /></button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}