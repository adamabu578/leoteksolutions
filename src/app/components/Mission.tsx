import { Target } from "lucide-react";

export function Mission() {
  return (
    <section id="mission" className="py-24 px-6 bg-[#087DBA] text-white font-sans relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F27A1A] rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#055c8a] rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/10">
          <Target className="w-8 h-8 text-orange-400" />
        </div>
        <h2 className="text-orange-400 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-8 flex items-center gap-2">
          Our Mission
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-snug lg:leading-tight tracking-tight text-white/95">
          To deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-[#F27A1A] font-extrabold">robust, scalable, and intuitive</span> call center solution and value added service that elevate enterprise communication globally.
        </h3>
      </div>
    </section>
  );
}
