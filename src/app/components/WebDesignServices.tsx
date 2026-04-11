import { Monitor, Smartphone, Zap, Search, CheckCircle2, Globe } from "lucide-react";

export function WebDesignServices() {
  const benefits = [
    "Lightning-fast load times for better UX",
    "Mobile-first responsive design",
    "SEO-optimized content structure",
    "Modern, intuitive user interfaces",
  ];

  return (
    <section id="web-design" className="py-24 px-6 bg-white relative font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div>
            <span className="text-[#087DBA] text-base md:text-lg font-extrabold tracking-widest uppercase mb-4 block">
              Digital Presence
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Stunning Web Design & Development
            </h2>
            <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
              We build more than just websites; we create digital experiences that captivate your audience, drive conversions, and elevate your brand's online presence. 
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Monitor className="w-6 h-6 text-[#087DBA]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Custom Design</h4>
                  <p className="text-sm text-slate-500">Tailored perfectly to your brand identity.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6 text-[#F27A1A]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Responsive</h4>
                  <p className="text-sm text-slate-500">Flawless functionality across all devices.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <Search className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">SEO Optimized</h4>
                  <p className="text-sm text-slate-500">Built to rank high in search engine results.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <Zap className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">High Performance</h4>
                  <p className="text-sm text-slate-500">Lightning fast load speeds for better UX.</p>
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#F27A1A]" />
                  </div>
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Side */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#087DBA]/10 to-[#F27A1A]/10 rounded-full blur-3xl -z-10" />
            
            <div className="relative w-full max-w-lg mx-auto lg:mx-0 z-10">
              {/* Glow effect behind the browser window */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F27A1A] to-[#087DBA] rounded-[2.2rem] opacity-20 blur-xl" />
              
              {/* Browser mockup */}
              <div className="relative bg-white border border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden transform transition-transform hover:-translate-y-2 duration-500">
                {/* Browser Header */}
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 bg-white border border-slate-200 rounded-md py-1.5 px-3 flex-1 flex items-center gap-2">
                     <Globe className="w-3.5 h-3.5 text-slate-400" />
                     <div className="h-1.5 w-32 bg-slate-200 rounded-full" />
                  </div>
                </div>
                
                {/* Browser Body */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-center mb-8">
                     <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#087DBA] to-blue-400 shadow-md" />
                     <div className="flex gap-4">
                       <div className="w-12 h-2 bg-slate-100 rounded-full" />
                       <div className="w-12 h-2 bg-slate-100 rounded-full" />
                       <div className="w-12 h-2 bg-slate-100 rounded-full hidden sm:block" />
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                     <div className="space-y-4 pt-2">
                       <div className="h-8 w-4/5 bg-slate-800 rounded-lg" />
                       <div className="space-y-2">
                         <div className="h-3 w-full bg-slate-200 rounded-md" />
                         <div className="h-3 w-5/6 bg-slate-200 rounded-md" />
                         <div className="h-3 w-4/6 bg-slate-200 rounded-md" />
                       </div>
                       <div className="flex gap-3 mt-6">
                         <div className="h-10 w-28 bg-gradient-to-r from-[#F27A1A] to-orange-500 shadow-sm rounded-lg" />
                         <div className="h-10 w-28 bg-slate-100 rounded-lg" />
                       </div>
                     </div>
                     <div className="bg-slate-50 rounded-2xl h-40 border border-slate-200 overflow-hidden relative group">
                        {/* Placeholder graphic inside the skeleton box */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50" />
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-tl-full opacity-50" />
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-white/60 backdrop-blur-sm" />
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                     <div className="h-24 bg-blue-50/50 rounded-xl border border-blue-100 flex items-center justify-center group hover:bg-blue-50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <div className="w-4 h-4 rounded-sm bg-blue-400" />
                        </div>
                     </div>
                     <div className="h-24 bg-orange-50/50 rounded-xl border border-orange-100 flex items-center justify-center group hover:bg-orange-50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <div className="w-4 h-4 rounded-full bg-orange-400" />
                        </div>
                     </div>
                     <div className="h-24 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center group hover:bg-slate-100 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <div className="w-4 h-4 rounded-br-lg rounded-tl-lg bg-slate-400" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Element 1 - Performance Badge */}
              <div className="hidden sm:flex absolute -right-8 md:-right-12 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 items-center gap-4 transform hover:-translate-y-1 transition-transform duration-300 z-20">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-800">99.9%</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Uptime</div>
                </div>
              </div>

              {/* Floating Element 2 - SEO Badge */}
              <div className="hidden sm:flex absolute -left-8 md:-left-12 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 items-center gap-4 transform hover:-translate-y-1 transition-transform duration-300 z-20">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-800">SEO</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
