"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Logo = () => (
  <div className="flex items-center gap-2">
    <img src="/images/leotek.png" alt="Leotek Solutions" className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain" />
  </div>
);

export function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="relative overflow-hidden font-sans bg-white border-b border-slate-100 pb-10">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-orange-50/50 to-orange-100/80 pointer-events-none"></div>
      
      {/* Glowing elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#F27A1A] rounded-full blur-[140px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[50%] bg-[#087DBA] rounded-full blur-[140px] opacity-[0.03] pointer-events-none"></div>

      <header className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <Logo />
        <nav className="hidden md:flex items-center gap-10 text-xl font-bold text-slate-600">
          <a href="#" className="hover:text-[#F27A1A] transition-colors hover:scale-105 inline-block">Home</a>
          <a href="#about" className="hover:text-[#F27A1A] transition-colors hover:scale-105 inline-block">About</a>
          <a href="#services" className="hover:text-[#F27A1A] transition-colors hover:scale-105 inline-block">Services</a>
        </nav>
        <div className="hidden md:block">
          <Button onClick={scrollToContact} className="bg-[#F27A1A] hover:bg-[#d96611] text-white px-8 py-6 rounded-xl font-bold transition-all shadow-md shadow-orange-500/20 text-lg">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-700 hover:text-[#F27A1A] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[100px] left-0 right-0 bg-white border-b border-slate-100 shadow-2xl z-50 p-8 flex flex-col gap-6 animate-in slide-in-from-top-4 fade-in">
          <a href="#" className="text-2xl font-bold text-slate-700 hover:text-[#F27A1A] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="text-2xl font-bold text-slate-700 hover:text-[#F27A1A] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#services" className="text-2xl font-bold text-slate-700 hover:text-[#F27A1A] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <Button onClick={scrollToContact} className="bg-[#F27A1A] hover:bg-[#d96611] text-white px-6 py-6 rounded-xl font-bold transition-all shadow-md shadow-orange-500/20 text-xl w-full mt-4">
            Contact Us
          </Button>
        </div>
      )}

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-16 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Column: Text */}
        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <h2 className="text-[#F27A1A] text-xl md:text-2xl font-semibold tracking-widest uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
            Shaping the future of IT & Comm
          </h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight drop-shadow-sm">
            Value Added <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27A1A] to-orange-400">Services.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8 max-w-xl leading-relaxed">
            Seamless Connectivity, anytime, anywhere for businesses of all sizes.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-10 w-full">
            <Button size="lg" onClick={scrollToContact} className="bg-[#F27A1A] hover:bg-orange-600 text-white px-10 py-7 rounded-xl font-black shadow-xl shadow-[#f27a1a]/30 w-full sm:w-auto text-lg flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-10 py-7 rounded-xl font-bold border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 w-full sm:w-auto text-lg hover:border-slate-300 justify-center">
              View Services
            </Button>
          </div>

          <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-6 text-left shadow-sm mx-auto lg:mx-0">
            <h3 className="font-bold text-slate-900 mb-2 flex items-center justify-center lg:justify-start gap-2 text-base md:text-lg">
              <div className="w-2.5 h-2.5 bg-[#F27A1A] rounded-full shadow-[0_0_10px_rgba(242,122,26,0.3)]"></div> What we provide
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium text-center lg:text-left">
              VAS (0700/0800 Customized Numbers), Cloud-Based Call Center Solutions, Softphones, VoIP, Land Lines, and full CAC Registration services.
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full lg:w-[60%] flex justify-center lg:justify-end relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-[#F27A1A]/20 rounded-[3rem] z-0 blur-md translate-x-4 translate-y-4"></div>
          
          <div className="relative z-10 w-full min-h-[400px] aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/10] xl:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300/50 border-4 border-white">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1600" 
              alt="Telecom Center Concept" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Floating graphic to break the box */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 z-20 hidden md:flex items-center gap-4">
             <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="w-3 h-3 bg-[#F27A1A] rounded-full"></div>
             </div>
             <div>
                <p className="font-bold text-slate-900 text-sm md:text-base">Active Connections</p>
                <p className="text-[#F27A1A] font-black text-lg md:text-xl">99.9% Uptime</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}