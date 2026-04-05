import { Target, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white font-sans relative overflow-hidden text-slate-900 border-b border-slate-100">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <span className="text-[#F27A1A] text-lg md:text-xl font-bold tracking-widest uppercase mb-4 block">
              About Leotek
            </span>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Pioneering Seamless <span className="text-[#087DBA]">Communication</span> Solutions.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              We are dedicated to transforming how organizations connect with their customers. 
              With a passion for excellence and innovation, Leotek bridges the gap between complex technology 
              and effortless user experiences, empowering businesses to thrive in the digital age.
            </p>

            <div className="space-y-6 text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-[#F27A1A]" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900 mb-1">Our Mission</h4>
                  <p className="text-slate-500 leading-relaxed">
                    To deliver robust, scalable, and intuitive value-added services that elevate enterprise communication globally.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#087DBA]" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900 mb-1">Expert Team</h4>
                  <p className="text-slate-500 leading-relaxed">
                    Backed by seasoned telecom professionals committed to creating tailor-made solutions tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#087DBA]/20 to-[#F27A1A]/20 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 blur-sm"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-4 border-white aspect-[4/3] w-full">
              <ImageWithFallback 
                src="/images/team.jpg" 
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-10 hidden sm:flex">
              <div className="w-12 h-12 bg-[#087DBA] rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[#F27A1A] font-black text-2xl">3+ Years</p>
                <p className="text-slate-600 font-bold text-sm uppercase tracking-wider">Experience</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
