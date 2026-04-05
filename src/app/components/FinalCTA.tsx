"use client";
import React, { useEffect, useState, useRef } from "react";

function Counter({ end, suffix = "", decimals = 0, duration = 2000 }: { end: number, suffix?: string, decimals?: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
           setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(ease * end);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  // format comma for thousands
  const formattedCount = Number(count.toFixed(decimals)).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return <span ref={ref}>{formattedCount}{suffix}</span>;
}

export function FinalCTA() {
  return (
    <section className="relative py-12 md:py-16 object-cover overflow-hidden bg-[#F27A1A] font-sans">
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
         <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
          alt="People Grid"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-sm">
          Start Sending <span className="text-orange-100">Messages Today</span>
        </h2>
        
        <p className="text-white opacity-90 text-base md:text-lg lg:text-xl font-medium mb-6 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of businesses already enjoying seamless connectivity and professional communication with Leotek.
        </p>

        <button className="bg-white hover:bg-[#087DBA] text-[#087DBA] hover:text-white px-8 py-3 rounded-xl font-bold text-base md:text-lg mx-auto shadow-xl shadow-orange-900/20 transition-all uppercase tracking-wide mb-10 hover:-translate-y-1 inline-block border-2 border-white min-w-[200px]">
          Get Started Now
        </button>

        <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/20 pt-8 text-center">
          <div>
            <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 drop-shadow-md">
              <Counter end={1000} suffix="+" />
            </p>
            <p className="text-sm md:text-base text-orange-100 font-bold tracking-widest uppercase">Trusted Businesses</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 drop-shadow-md">
              <Counter end={4.9} decimals={1} suffix="/5" />
            </p>
            <p className="text-sm md:text-base text-orange-100 font-bold tracking-widest uppercase">Customer Rating</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 drop-shadow-md">
              <Counter end={99.9} decimals={1} suffix="%" />
            </p>
            <p className="text-sm md:text-base text-orange-100 font-bold tracking-widest uppercase">Uptime Reliability</p>
          </div>
        </div>
      </div>
    </section>
  );
}