import { Radio, PhoneCall } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-24 px-6 bg-slate-50 font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* The Problem */}
        <div className="flex-1 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 font-bold uppercase tracking-wider text-base mb-6 flex items-center gap-2">
             <div className="w-2 h-2 bg-slate-400 rounded-full"></div> The Challenge
          </p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Messy, disconnected communication.</h3>
          <ul className="text-slate-600 leading-relaxed space-y-4 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 shrink-0"></div>
              <span>Customers often cannot reach the right department, leading to frustration and lost opportunities.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 shrink-0"></div>
              <span>Confusion arises when an organization has several numbers or platforms, making it hard to know whom to contact.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 shrink-0"></div>
              <span>Without a centralized communication system, queries take much longer to resolve.</span>
            </li>
          </ul>
        </div>

        {/* The Solution */}
        <div className="flex-1 bg-[#F27A1A] p-8 md:p-12 rounded-3xl text-white shadow-xl shadow-[#F27A1A]/10">
          <p className="text-orange-200 font-bold uppercase tracking-wider text-base mb-6 flex items-center gap-2">
             <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div> The Solution
          </p>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight">A seamless, professional system.</h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-xl md:text-2xl mb-1 mt-1">Single SMAT Number</h4>
                <p className="text-orange-50 text-base leading-relaxed opacity-90">
                  One easy-to-remember number that connects customers to the right department instantly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                <PhoneCall className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-xl md:text-2xl mb-1 mt-1">Simultaneous Call Handling</h4>
                <p className="text-orange-50 text-base leading-relaxed opacity-90">
                  Handles multiple calls simultaneously without missing any connection.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-white/20">
             <p className="text-orange-50 font-medium italic text-base md:text-lg">
                "We transform messy, slow communication into a seamless, professional, and efficient system, making it effortless for clients to reach the organization."
             </p>
          </div>
        </div>

      </div>
    </section>
  );
}