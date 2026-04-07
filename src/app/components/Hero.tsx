"use client";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden font-sans bg-white border-b border-slate-100 pb-10">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-orange-50/50 to-orange-100/80 pointer-events-none"></div>
      
      {/* Mobile Background Image (Only visible on Mobile behind the text) */}
      <div className="absolute inset-0 z-0 block lg:hidden">
        <ImageWithFallback 
          src="/images/hero.jpg" 
          alt="Telecom Center Concept bg" 
          className="w-full h-full object-cover object-center opacity-15 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>
      </div>

      {/* Glowing elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#F27A1A] rounded-full blur-[140px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[50%] bg-[#087DBA] rounded-full blur-[140px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 pt-32 md:pt-40 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Column: Text */}
        <div className="w-full lg:w-[40%] text-center lg:text-left relative z-10">
          <h2 className="text-[#F27A1A] text-xl md:text-2xl font-semibold tracking-widest uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
            Shaping the future of IT & Communication
          </h2>
          
          <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.5rem] font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight drop-shadow-sm">
            CLOUDBASE CALL <br />
            <span className="whitespace-nowrap">CENTER SOLUTION</span> <br />
            AND <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27A1A] to-orange-400">VAS</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0">
            Seamless Connectivity, anytime, anywhere for businesses of all sizes.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full">
            <Button size="lg" onClick={scrollToContact} className="bg-[#F27A1A] hover:bg-orange-600 text-white px-5 py-6 md:px-10 md:py-7 rounded-xl font-black shadow-xl shadow-[#f27a1a]/30 w-full sm:w-auto text-base md:text-lg flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-5 h-5 md:w-5 md:h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-5 py-6 md:px-10 md:py-7 rounded-xl font-bold border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 w-full sm:w-auto text-base md:text-lg hover:border-slate-300 justify-center shadow-sm">
              View Services
            </Button>
          </div>

        </div>

        {/* Right Column: Image (Desktop Only) */}
        <div className="hidden lg:flex w-[60%] justify-end relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-[#F27A1A]/20 rounded-[3rem] z-0 blur-md translate-x-4 translate-y-4"></div>
          
          <div className="relative z-10 w-full min-h-[400px] aspect-[16/10] xl:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300/50 border-4 border-white">
            <ImageWithFallback 
              src="/images/hero.jpg" 
              alt="Telecom Center Concept" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Floating graphic to break the box */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 z-20 flex items-center gap-4">
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