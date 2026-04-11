"use client";
import React, { useState } from "react";
import { Mail, Phone, MessageCircle, Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src="/images/leotek.png" alt="Leotek Solutions" className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-sm" />
  </div>
);

export function Footer() {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMessageSent(true);
    setTimeout(() => setIsMessageSent(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer id="contact" className="bg-white text-slate-900 py-10 px-6 font-sans border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-slate-500 mb-6 leading-relaxed max-w-sm font-medium text-base">
              Shaping the future of information technology and communication. 
              Providing seamless connectivity for businesses of all sizes through cutting-edge telecommunication solutions.
            </p>
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#F27A1A] rounded-full animate-pulse"></div>
              <span className="text-[#F27A1A] text-sm font-bold uppercase tracking-wide">Available 24/7</span>
            </div>

            {/* Social Medias */}
            <div className="flex gap-3 items-center mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#087DBA] hover:border-[#087DBA]/30 hover:shadow-md transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#087DBA] hover:border-[#087DBA]/30 hover:shadow-md transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#F27A1A] hover:border-[#F27A1A]/30 hover:shadow-md transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#087DBA] hover:border-[#087DBA]/30 hover:shadow-md transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter Form */}
            <div className="max-w-md pt-5 border-t border-slate-100">
              <h5 className="font-bold text-slate-900 mb-3 text-lg tracking-tight">Stay Updated</h5>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F27A1A] focus:ring-2 focus:ring-[#F27A1A]/20 transition-all font-medium bg-slate-50 focus:bg-white text-sm"
                  required
                />
                <button type="submit" className="bg-[#F27A1A] hover:bg-[#d96611] text-white px-5 py-3 rounded-xl font-bold transition-all shadow-md shadow-[#F27A1A]/20 uppercase tracking-widest text-xs">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-xl md:text-2xl font-extrabold mb-5 text-slate-900 tracking-tight">Get in Touch</h4>
            <div className="space-y-3 max-w-md">
              <a
                href="mailto:leoteksolutions@gmail.com"
                className="flex items-center gap-4 text-slate-600 hover:text-[#087DBA] transition-colors group bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-[#087DBA]/30 hover:shadow-md"
              >
                <div className="bg-[#F27A1A] w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-[#F27A1A]/20 shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-[#F27A1A] font-bold uppercase tracking-wider mb-0.5">Email</div>
                  <div className="font-semibold text-slate-900 text-base truncate">leoteksolutions@gmail.com</div>
                </div>
              </a>
              
              <a
                href="tel:09078914841"
                className="flex items-center gap-4 text-slate-600 hover:text-[#087DBA] transition-colors group bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-[#087DBA]/30 hover:shadow-md"
              >
                <div className="bg-[#087DBA] w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-[#087DBA]/20 shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                 </div>
                 <div>
                  <div className="text-xs text-[#087DBA] font-bold uppercase tracking-wider mb-0.5">Phone</div>
                  <div className="font-semibold text-slate-900 text-base">09078914841</div>
                 </div>
               </a>
               
               <a
                href="https://wa.me/09078914841"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-slate-600 hover:text-[#25D366] transition-colors group bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-[#25D366]/30 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <img src="/images/whatsapp.png" alt="WhatsApp" className="h-12 w-12 object-contain" />
                 </div>
                 <div>
                  <div className="text-xs text-[#25D366] font-bold uppercase tracking-wider mb-0.5">WhatsApp</div>
                   <div className="font-semibold text-slate-900 text-base">09078914841</div>
                 </div>
               </a>
               
               <div className="flex items-center gap-4 text-slate-600 group bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all">
                 <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-slate-700/20 shrink-0">
                   <MapPin className="h-5 w-5 text-white" />
                 </div>
                 <div>
                   <div className="text-xs text-slate-700 font-bold uppercase tracking-wider mb-0.5">Address</div>
                   <div className="font-semibold text-slate-900 text-sm leading-snug pr-2">No 1B, Adepele Street, off Simbiat Abiola way, Ikeja, Lagos.</div>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Drop a Message
          <div className="flex flex-col">
            <h4 className="text-xl md:text-2xl font-extrabold mb-5 text-slate-900 tracking-tight">Drop a Message</h4>
            <form className="space-y-3 max-w-md bg-white p-5 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/40" onSubmit={handleSendMessage}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087DBA] focus:ring-2 focus:ring-[#087DBA]/20 transition-all font-medium bg-slate-50 focus:bg-white text-sm"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087DBA] focus:ring-2 focus:ring-[#087DBA]/20 transition-all font-medium bg-slate-50 focus:bg-white text-sm"
                  required
                />
              </div>
              <div>
                <textarea 
                  placeholder="How can we help?" 
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087DBA] focus:ring-2 focus:ring-[#087DBA]/20 transition-all font-medium bg-slate-50 focus:bg-white resize-none text-sm"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-[#087DBA] hover:bg-[#066192] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md shadow-[#087DBA]/20 uppercase tracking-widest text-xs">
                Send Message
              </button>
              {isMessageSent && (
                <div className="text-center p-3 text-sm text-[#25D366] font-bold bg-[#25D366]/10 rounded-xl mt-2 animate-in fade-in slide-in-from-bottom-2">
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
          */}

        </div>

        <div className="border-t border-slate-100 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-400 font-medium pb-2 md:pb-0">
              © {new Date().getFullYear()} <span className="text-slate-800 font-bold">LeoTek</span>. All rights reserved.
            </p>
            <div className="flex gap-6 font-medium text-slate-400">
              <span className="hover:text-[#F27A1A] cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-[#F27A1A] cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}