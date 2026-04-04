export function FinalCTA() {
  return (
    <section className="relative py-24 object-cover overflow-hidden bg-[#F27A1A] font-sans">
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
         <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
          alt="People Grid"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-sm">
          Start Sending <span className="text-orange-100">Messages Today</span>
        </h2>
        
        <p className="text-white opacity-90 text-lg md:text-xl lg:text-2xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of businesses already enjoying seamless connectivity and professional communication with Leotek.
        </p>

        <button className="bg-white hover:bg-[#087DBA] text-[#087DBA] hover:text-white px-10 py-5 rounded-xl font-black text-lg md:text-xl max-w-sm mx-auto shadow-xl shadow-orange-900/20 transition-all uppercase tracking-normal mb-16 hover:scale-105 block w-full border-2 border-white">
          Get Started Now
        </button>

        <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/20 pt-10 text-center">
          <div>
            <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 drop-shadow-md">1,000+</p>
            <p className="text-sm md:text-base text-orange-100 font-bold tracking-widest uppercase">Trusted Businesses</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 drop-shadow-md">4.9/5</p>
            <p className="text-sm md:text-base text-orange-100 font-bold tracking-widest uppercase">Customer Rating</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 drop-shadow-md">99.9%</p>
            <p className="text-sm md:text-base text-orange-100 font-bold tracking-widest uppercase">Uptime Reliability</p>
          </div>
        </div>
      </div>
    </section>
  );
}