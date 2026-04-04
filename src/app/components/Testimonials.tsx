import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-slate-50 relative font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#F27A1A] text-sm font-bold tracking-widest uppercase mb-4 block">
            SOCIAL PROOF
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Join thousands of satisfied customers transforming their communication
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white border border-slate-100 rounded-3xl p-10 md:p-14 shadow-2xl shadow-slate-200/50 max-w-4xl w-full relative overflow-hidden">
            <Quote className="absolute top-10 left-10 text-orange-50 w-24 h-24 -z-0" />
            
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="w-32 h-32 shrink-0 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-orange-500/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                  alt="Customer Service Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#F27A1A] fill-[#F27A1A]" />
                  ))}
                </div>
                <p className="text-lg md:text-xl lg:text-2xl text-slate-700 italic leading-relaxed mb-6 font-medium">
                  "This platform helped us reach 5,000 customers easily!"
                </p>
                <div>
                  <p className="font-bold text-lg md:text-xl text-slate-900">John Doe</p>
                  <p className="text-[#087DBA] font-bold text-base">CEO, Tech Solutions Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}