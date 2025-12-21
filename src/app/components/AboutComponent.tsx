"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';

export default function DetailedAboutSection() {
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
    { value: "95%", label: "Customer satisfaction" },
    { value: "10+", label: "Years of innovation" },
    { value: "$10m", label: "Financial efficiency" },
  ];

  return (
    <section className="bg-slate-50 py-20 px-6 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100 relative overflow-hidden"
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-sm rotate-45" />
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">About Our Firm</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  Driving excellence with <span className="text-blue-600 text-shadow-glow">tailored expertise.</span>
                </h2>
                <p className="text-slate-500 leading-relaxed text-sm max-w-lg">
                  At our firm, we deliver solutions that empower businesses to thrive. 
                  With years of experience across industries, our team is committed 
                  to driving growth and operational excellence through bold steps.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-blue-200 group">
                  Get Started <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-xs transition-all">
                  Free Trial
                </button>
              </motion.div>

              {/* Stats Row - Styled like SecondSection bottom stats */}
              <div className="pt-10 border-t border-slate-100 grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-[9px] text-blue-600 font-black uppercase tracking-widest leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Image Column */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
              }}
              className="relative"
            >
              {/* Experience Badge - Reused from SecondSection */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute -top-4 -right-4 z-20 bg-blue-600 p-4 rounded-2xl shadow-xl"
              >
                <div className="text-white text-center">
                  <div className="text-2xl font-bold leading-none">15+</div>
                  <div className="text-[8px] uppercase font-black tracking-widest">Awards</div>
                </div>
              </motion.div>

              {/* Styled Image Frame */}
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden border-[10px] border-slate-50 shadow-2xl">
                <Image
                  src="/professional-team.jpg" 
                  alt="Professional Excellence"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>

              {/* Rotating Badge - Smaller decoration */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500/10 border-2 border-blue-500/20 rounded-full flex items-center justify-center -z-10"
              />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}