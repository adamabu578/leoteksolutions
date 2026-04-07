import { PhoneCall, Smartphone, Route, Mic, Briefcase } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: PhoneCall,
      title: "Call center solution",
      description: "We help businesses manage customer calls efficiently handling incoming and outgoing calls, routing them to the right agents, and improving customer support and communication.",
    },
    {
      icon: Smartphone,
      title: "Sales of Voip phones",
      description: "Make and receive calls over the internet instead of traditional phone lines, making communication more flexible and cost-effective.",
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
      icon: Briefcase,
      title: "CAC Registration",
      description: "Register your business with the CAC to obtain legal recognition, a business name, and a certificate of incorporation. This allows the business to operate legally, open bank accounts, sign contracts, and be recognized as a corporate entity.",
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-slate-50 relative font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#F27A1A] text-base md:text-lg font-extrabold tracking-widest uppercase mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 max-w-4xl mx-auto leading-tight tracking-tight">
            What we provide
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Cloud-Based Call Center Solutions, Sales and configuration of Softphones, VoIP phone (for Inbound and outbound calls), Land Lines, Customized numbers resale, Web-design and general merchandise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            if (index === 0) {
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#F27A1A] to-[#d96611] rounded-3xl p-8 shadow-xl shadow-orange-500/30 transform hover:-translate-y-2 transition-transform duration-300 sm:col-span-2 lg:col-span-1"
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