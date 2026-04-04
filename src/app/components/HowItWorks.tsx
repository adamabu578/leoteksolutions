import { UserPlus, Upload, Send, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Create an account",
      description: "Sign up in minutes and get instant access to our cloud platform",
      number: "01",
    },
    {
      icon: Upload,
      title: "Upload contacts",
      description: "Import your contacts and configure intelligent call routing",
      number: "02",
    },
    {
      icon: Send,
      title: "Send messages instantly",
      description: "Start connecting with customers through seamless communication",
      number: "03",
    }
  ];

  return (
    <section className="py-24 px-6 bg-white font-sans pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#F27A1A] text-sm font-bold tracking-widest uppercase mb-4 block">
            PROCESS
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-[40px] left-[15%] w-[70%] h-[2px] bg-gradient-to-r from-orange-100 via-[#F27A1A] to-orange-100 z-0 border-t border-dashed border-[#F27A1A]/30"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-orange-50 shadow-xl mb-6 group-hover:scale-110 group-hover:border-[#087DBA] transition-all duration-300 relative">
                <step.icon className="h-8 w-8 text-[#F27A1A] group-hover:text-[#087DBA] transition-colors" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#087DBA] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {step.number}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-[#F27A1A] transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed max-w-xs text-base font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}