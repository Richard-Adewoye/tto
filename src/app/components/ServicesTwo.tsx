"use client";

import React from 'react';
import { Lightbulb, Briefcase, ArrowUpRight, Target } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';

const milestones = [
  {
    title: "Individual Therapy",
    description: "One-on-one sessions to explore thoughts, emotions, and coping strategies.",
    icon: <Lightbulb size={20} />,
    isActive: true,
  },
  {
    title: "Group Support",
    description: "Facilitated sessions providing connection, shared experience, and guidance.",
    icon: <Briefcase size={20} />,
    isActive: false,
  },
  {
    title: "Wellness Coaching",
    description: "Personalized guidance to develop healthy routines, resilience, and balanced living.",
    icon: <Target size={20} />,
    isActive: false,
  },
];

export default function MilestonesSection() {
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
    // bg-slate-50 is a "soft" white that isn't jarring on the eyes
    <section className="bg-slate-50 py-20 px-6 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded-sm rotate-45 shadow-sm" />
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Milestones</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight max-w-xl">
              So Far: What has been<span className="text-blue-600"> accomplished</span>
            </h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-slate-500 max-w-md text-sm leading-relaxed">
            Discover the significant milestones that have shaped how we work. Each one reflecting commitment to excellence and growth.
          </motion.p>
        </motion.div>

        {/* Milestone Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-[2rem] transition-all duration-500 group overflow-hidden ${
                milestone.isActive 
                  ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-blue-100' 
                  : 'bg-white/40 border border-slate-200 hover:bg-white hover:shadow-xl hover:border-blue-200'
              }`}
            >
              {/* Subtle accent line for active card */}
              {milestone.isActive && (
                <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600" />
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 ${
                milestone.isActive 
                  ? 'bg-blue-600 text-white shadow-blue-200 shadow-lg' 
                  : 'bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg'
              }`}>
                {milestone.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 transition-colors group-hover:text-blue-600">
                {milestone.title}
              </h3>
              
              <p className="text-sm leading-relaxed mb-8 text-slate-500 group-hover:text-slate-600 transition-colors">
                {milestone.description}
              </p>

              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-blue-600">
                View Details <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}