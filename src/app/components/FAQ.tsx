import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Is it easy to use?",
      answer: "Yes, very simple! Our platform is designed with user-friendliness in mind. You can set up your account and start using our services within minutes, with no technical expertise required."
    },
    {
      question: "How fast is delivery?",
      answer: "Instant! Once your system is configured, calls are routed immediately. There's no delay in connecting your customers to the right department."
    },
    {
      question: "Is my data secure?",
      answer: "100% secure. We use industry-standard encryption and security protocols to protect your data. Your customer information and call records are stored securely and are never shared with third parties."
    },
    {
      question: "Can I customize my call routing?",
      answer: "Absolutely! You have full control over how calls are routed. Set up department-specific routing, time-based forwarding, and custom IVR menus to match your business needs."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer comprehensive support ranging from email support in our Basic plan to 24/7 dedicated support in our Premium plan. Our team is always ready to help you maximize your communication system."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. We make it easy to scale your services up or down based on your business needs."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 relative font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#F27A1A] text-lg md:text-xl font-bold tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium">
            Got questions? We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl px-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 data-[state=open]:border-[#F27A1A]/50 data-[state=open]:shadow-orange-500/10"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-bold text-slate-900 text-xl md:text-2xl group-hover:text-[#F27A1A] transition-colors pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6 leading-relaxed font-medium text-lg md:text-xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}