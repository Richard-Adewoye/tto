"use client";

import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';

export default function SecondSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }
  };

  const stats = [
    { value: " ", label: "Understanding built over time" },
    { value: " ", label: "Satisfied clients" },
    { value: " ", label: "Powerful stories" },
    { value: " ", label: "Rejuvenated people" },
  ];

  return (
    // Changed: bg-blue-50 -> bg-[#050a1f] (Deep Navy to match Top Bar)
    <section className="bg-[#050a1f] py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row items-center gap-10 mb-16"
        >
          
          {/* Left: Image Container */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
            }}
            className="relative w-full lg:w-5/12"
          >
            {/* Experience Badge - Compacted */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -top-4 -left-4 z-20 bg-blue-600 p-3 rounded-xl shadow-2xl"
            >
              <div className="text-white text-center">
                <div className="text-2xl font-bold leading-none"></div>
                <div className="text-[8px] uppercase font-black tracking-tighter"></div>
              </div>
            </motion.div>

            {/* Image with thinner border */}
            <div className="relative rounded-2xl overflow-hidden border-[8px] border-white/5 shadow-2xl">
              <img
                src="/img-6.png"
                alt="Our Team"
                className="object-cover h-[400px] w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Circular Rotating Badge - Smaller */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full p-1 shadow-2xl z-20 flex items-center justify-center border-4 border-[#050a1f]"
            >
              <img
                src="/img-4.jpg"
                alt="Badge"
                className="rounded-full w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div className="w-full lg:w-7/12 space-y-5">
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-sm rotate-45" />
                <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">Vision</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Guiding purposeful growth <span className="text-blue-500 text-shadow-glow">with care and clarity.</span>
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-blue-100/60 leading-relaxed text-sm max-w-xl">
              Moving ahead with purpose, staying open to change, 
              and supporting progress through integrated, considered ways of working.
            </motion.p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {["Mindful Growth", "Balanced Progress", "Intentional Change"].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants}
                  className="flex items-center gap-3 font-bold text-white text-xs"
                >
                  <div className="bg-blue-500/20 p-1 rounded-full"><Check size={14} className="text-blue-400" /></div>
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.button 
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="mt-4 bg-white text-[#050a1f] px-7 py-3 rounded-full font-bold text-xs flex items-center gap-3 hover:bg-blue-500 hover:text-white transition-all group"
            >
              Learn More <ArrowUpRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Statistics - Compact */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-white/5"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center md:text-left">
              <h3 className="text-3xl font-black text-white">{stat.value}</h3>
              <p className="text-blue-400 text-[9px] uppercase tracking-[0.2em] font-black">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}