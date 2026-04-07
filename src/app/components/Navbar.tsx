"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Logo = () => (
  <div className="flex items-center gap-2">
    <img src="/images/leotek.png" alt="Leotek Solutions" className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain transition-all duration-300" />
  </div>
);

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-lg lg:text-xl font-bold text-slate-700 absolute left-1/2 -translate-x-1/2">
            <a href="#" className="hover:text-[#F27A1A] transition-colors hover:scale-105 inline-block">Home</a>
            <a href="#mission" className="hover:text-[#F27A1A] transition-colors hover:scale-105 inline-block">Our Mission</a>
            <a href="#about" className="hover:text-[#F27A1A] transition-colors hover:scale-105 inline-block">About</a>
            <a href="#services" className="hover:text-[#F27A1A] transition-colors hover:scale-105 inline-block">Services</a>
          </nav>

          <div className="hidden md:block flex-shrink-0">
            <Button onClick={scrollToContact} className="bg-[#F27A1A] hover:bg-[#d96611] text-white px-8 py-6 rounded-xl font-bold transition-all shadow-md shadow-orange-500/20 text-lg">
              Contact Us
            </Button>
          </div>

          <button 
            className="md:hidden text-slate-700 hover:text-[#F27A1A] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[90px] left-0 right-0 bg-white border-b border-slate-100 shadow-2xl z-40 p-8 flex flex-col gap-6 animate-in slide-in-from-top-4 fade-in">
          <a href="#" className="text-2xl font-bold text-slate-700 hover:text-[#F27A1A] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#mission" className="text-2xl font-bold text-slate-700 hover:text-[#F27A1A] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Our Mission</a>
          <a href="#about" className="text-2xl font-bold text-slate-700 hover:text-[#F27A1A] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#services" className="text-2xl font-bold text-slate-700 hover:text-[#F27A1A] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <Button onClick={scrollToContact} className="bg-[#F27A1A] hover:bg-[#d96611] text-white px-6 py-6 rounded-xl font-bold transition-all shadow-md shadow-orange-500/20 text-xl w-full mt-4">
            Contact Us
          </Button>
        </div>
      )}
    </>
  );
}
