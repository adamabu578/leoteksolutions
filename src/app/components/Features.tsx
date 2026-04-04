import { Zap, Route, Mic, Shield } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Single, Easy-to-Remember Number",
      description: "One number that customers can easily recall and dial to reach your organization.",
    },
    {
      icon: Route,
      title: "Call Routing & Forwarding",
      description: "Automatically route calls to the right department or person based on customer needs.",
    },
    {
      icon: Mic,
      title: "Custom Greetings & IVR",
      description: "Interactive Voice Response system with customized greetings for a professional touch.",
    },
    {
      icon: Shield,
      title: "Professional Image",
      description: "Present a unified, professional front to all your customers and partners.",
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-slate-50 relative font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#F27A1A] text-sm font-bold tracking-widest uppercase mb-4 block">
            POWERFUL TECH STACK
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 max-w-2xl mx-auto leading-tight">
            Enterprise-grade features for modern businesses
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            if (index === 0) {
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#F27A1A] to-[#d96611] rounded-3xl p-8 shadow-xl shadow-orange-500/30 transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-orange-50 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200 border border-slate-100 transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${index % 2 === 0 ? "bg-orange-100 text-[#F27A1A]" : "bg-blue-100 text-[#087DBA]"}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}