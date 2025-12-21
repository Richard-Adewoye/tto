"use client";

import React from 'react';
import { MapPin, PhoneCall, Mail, Clock, MessageSquare, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    label: "LOCATION",
    title: "Visit Us At",
    lines: ["60th Street, Los Angeles,", "3rd Street, San Andreas."],
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-blue-600" />,
    label: "24/7 SERVICE",
    title: "Call Us On",
    lines: ["Tel : +01-234-546745", "Mob : +01-723-877413"],
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    label: "DROP A LINE",
    title: "Mail Address",
    lines: ["info@domain.com", "contact@company.com"],
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    label: "OFFICE HOURS",
    title: "Opening Time",
    lines: ["Mon - Fri : 9am - 5pm", "Sunday (Closed)"],
  },
];

export default function BlueContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      {/* Upper Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">Contact Info</span>
          <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Contact <span className="text-blue-600">&</span> Join Together
        </h1>
        
        <p className="text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed">
          Sint mosectetur fcaero delectus corupti consequuntur, monummy doloasda! 
          Nam officiis, id natus non nihil provident justo.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="mb-4 p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {/* Clone element to change color on hover */}
                {React.cloneElement(item.icon, { className: "w-6 h-6 transition-colors duration-300 group-hover:text-white" })}
              </div>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">{item.label}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              {item.lines.map((line, i) => (
                <p key={i} className="text-sm text-slate-500 font-medium">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Lower Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image & Blue Chat Box */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                    alt="Customer Support" 
                    className="w-full h-auto object-cover"
                />
            </div>
            
            {/* Blue Floating Chat Box */}
            <div className="absolute bottom-8 -left-4 md:-left-8 z-20 bg-blue-700 text-white p-8 rounded-[2.5rem] max-w-[260px] shadow-2xl shadow-blue-900/40 border border-white/10 backdrop-blur-sm">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                    <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">Chat With Live!</h4>
                <p className="text-xs text-blue-100 leading-relaxed mb-6 opacity-90">
                    Sint, cum pruda adpici quibusam facidus tam vedeis! Iste, aceu servie du non Placeat.
                </p>
                <button className="w-full bg-white text-blue-700 text-[11px] font-black py-3 rounded-xl uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-lg">
                    Start Chatting
                </button>
            </div>
          </div>

          {/* Right Side: Blue Accent Form */}
          <div className="lg:w-1/2 w-full">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">Contact Us</span>
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            </div>

            <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
              Reach <span className="text-blue-600">&</span> Get In Touch With Us!
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Your Name*" 
                    className="w-full bg-white border-2 border-slate-100 rounded-xl px-6 py-4 focus:border-blue-600 focus:bg-white transition-all outline-none text-sm placeholder:text-slate-400"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Your Email*" 
                    className="w-full bg-white border-2 border-slate-100 rounded-xl px-6 py-4 focus:border-blue-600 focus:bg-white transition-all outline-none text-sm placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Number*" 
                  className="w-full bg-white border-2 border-slate-100 rounded-xl px-6 py-4 focus:border-blue-600 focus:bg-white transition-all outline-none text-sm placeholder:text-slate-400"
                />
                <input 
                  type="text" 
                  placeholder="Your Subject*" 
                  className="w-full bg-white border-2 border-slate-100 rounded-xl px-6 py-4 focus:border-blue-600 focus:bg-white transition-all outline-none text-sm placeholder:text-slate-400"
                />
              </div>
              <textarea 
                rows={5} 
                placeholder="Enter Message" 
                className="w-full bg-white border-2 border-slate-100 rounded-xl px-6 py-4 focus:border-blue-600 focus:bg-white transition-all outline-none text-sm placeholder:text-slate-400 resize-none"
              />
              <button className="group bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-10 rounded-xl transition-all shadow-xl shadow-blue-200 flex items-center gap-3 uppercase text-xs tracking-widest">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}