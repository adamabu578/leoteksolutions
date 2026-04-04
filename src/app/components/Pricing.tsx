import { Check, Zap, Rocket, Crown } from "lucide-react";
import { Button } from "./ui/button";

export function Pricing() {
  const plans = [
    {
      name: "Basic Plan",
      icon: Zap,
      price: "₦15,000",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Single VAS Number",
        "Up to 100 calls/month",
        "Basic call routing",
        "Email support",
        "Standard IVR"
      ],
      highlighted: false,
    },
    {
      name: "Standard Plan",
      icon: Rocket,
      price: "₦35,000",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Basic",
        "Up to 500 calls/month",
        "Advanced call routing",
        "Custom greetings & IVR",
        "Priority support",
        "Call analytics"
      ],
      highlighted: true,
    },
    {
      name: "Premium Plan",
      icon: Crown,
      price: "₦75,000",
      period: "/month",
      description: "For enterprises with high volume",
      features: [
        "Everything in Standard",
        "Unlimited calls",
        "Multiple VAS numbers",
        "Dedicated account manager",
        "24/7 support",
        "Advanced analytics",
        "API access"
      ],
      highlighted: false,
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#F27A1A] text-sm font-bold tracking-widest uppercase mb-4 block">
            PRICING PLANS
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Choose the plan that scales with your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 border hover:-translate-y-2 transition-transform duration-300 relative bg-white ${
                plan.highlighted
                  ? "border-[#F27A1A] shadow-2xl shadow-[#f27a1a]/10 lg:scale-105 z-10"
                  : "border-slate-100 shadow-xl shadow-slate-100 z-0"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 w-full flex justify-center left-0">
                  <span className="bg-[#087DBA] text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-[#087DBA]/20">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.highlighted ? "bg-[#F27A1A] text-white shadow-lg shadow-[#F27A1A]/20" : "bg-orange-50 text-[#F27A1A]"}`}>
                <plan.icon className="h-7 w-7" />
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-slate-500 mb-6 text-base">{plan.description}</p>
              
              <div className="mb-8 flex items-baseline">
                <span className="text-4xl md:text-5xl font-black text-slate-900">{plan.price}</span>
                <span className="text-slate-400 ml-2 font-bold">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-orange-50 rounded-full p-1 mr-3 shrink-0 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-[#F27A1A] font-bold" />
                    </div>
                    <span className="text-slate-600 text-base font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full py-6 rounded-xl font-bold uppercase tracking-wide transition-all ${
                  plan.highlighted
                    ? "bg-[#F27A1A] hover:bg-orange-600 text-white shadow-xl shadow-[#f27a1a]/30"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}