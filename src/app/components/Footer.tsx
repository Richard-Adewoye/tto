"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const servicesLinks = ["Banking Risk", "Corporate Banking", "Insurance", "Tech Solutions"];
  const companyLinks = ["About Us", "Careers", "Press", "Partners", "Blog"];
  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Settings"];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-[#050a1f] text-white w-full overflow-hidden border-t border-white/5">
      {/* Decorative Slanted Accent (Matches Section 1 & 3) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[120px] -z-10" />
      <div className="absolute top-0 left-0 w-32 h-1 bg-blue-600" />
      
      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* 1. Brand Section (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 font-bold text-2xl">
              <span className="bg-blue-600 text-white px-2 py-1 rounded">Be</span>
              <span className="text-white">Rich</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Helping businesses become profitable through integrated innovation 
              and a uniquely collaborative culture. We believe bold steps define the future.
            </p>
            
            {/* Social Icons - Glass Style */}
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Facebook, Youtube].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -3, backgroundColor: "#2563eb" }}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Icon size={18} className="text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Services Section (Col 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              Services
            </h4>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <motion.li key={link} variants={itemVariants}>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-0 opacity-0 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* 3. Company Section (Col 7-8) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <motion.li key={link} variants={itemVariants}>
                  <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-0 opacity-0 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info (Col 9-12) */}
          <div className="lg:col-span-4 bg-white/5 p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            {/* Subtle geometric mask for the contact box */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/20 rounded-bl-full -mr-8 -mt-8" />
            
            <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <div className="text-sm">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-gray-200">info@berich.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <div className="text-sm">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-gray-200">+1 555 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin size={16} />
                </div>
                <div className="text-sm">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-gray-200">123 Financial Plaza, NY</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* -------------------- Copyright Row -------------------- */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs">
            © 2025 <span className="text-white font-bold">Be Rich</span> Consulting Group. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-500 hover:text-white text-xs transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}