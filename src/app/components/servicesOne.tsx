"use client";

import React from 'react';
import Image from 'next/image';
import { Check, ArrowUpRight } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';

const features = [
  "Proven results",
  "Innovative solutions",
  "Customized strategies",
  "Expert guidance",
  "Long-term Support"
];

export default function AboutSection() {
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

  return (
    <section className="bg-[#050a1f] py-16 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          
          {/* Left: Image Container (Styled like SecondSection) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
            }}
            className="relative w-full lg:w-1/2"
          >
            {/* Blue Decorative Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -top-4 -left-4 z-20 bg-blue-600 p-4 rounded-xl shadow-2xl"
            >
              <Check className="text-white" size={24} />
            </motion.div>

            {/* Image Frame */}
            <div className="relative rounded-2xl overflow-hidden border-[8px] border-white/5 shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              <Image 
                src="/img-1.jpg" 
                alt="Expertise"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Decorative Square */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500 rounded-lg rotate-12 -z-10 opacity-50" />
          </motion.div>

          {/* Right: Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-sm rotate-45" />
                <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">Expertise</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Leveraging expertise to support <span className="text-blue-500 text-shadow-glow">growth and meaningful outcomes.</span>
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-blue-100/60 leading-relaxed text-sm">
              Bringing insight and intentional approaches to guide growth.
               I tailor support to meet unique needs across different environments.
            </motion.p>

            {/* Feature Grid (Styled like SecondSection Lists) */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {features.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants}
                  className="flex items-center gap-3 font-bold text-white text-xs group"
                >
                  <div className="bg-blue-500/20 p-1 rounded-full group-hover:bg-blue-500 transition-colors">
                    <Check size={14} className="text-blue-400 group-hover:text-white" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.button 
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="mt-6 bg-white text-[#050a1f] px-8 py-4 rounded-full font-bold text-xs flex items-center gap-3 hover:bg-blue-500 hover:text-white transition-all group"
            >
              Learn More<ArrowUpRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}