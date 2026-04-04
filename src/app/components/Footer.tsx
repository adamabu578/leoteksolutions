import { Mail, Phone } from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src="/images/leotek.png" alt="Leotek Solutions" className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto object-contain drop-shadow-sm" />
  </div>
);

export function Footer() {
  return (
    <footer id="contact" className="bg-white text-slate-900 py-16 px-6 font-sans border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed max-w-sm font-medium text-lg">
              Shaping the future of information technology and communication. 
              Providing seamless connectivity for businesses of all sizes through cutting-edge telecommunication solutions.
            </p>
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-5 py-2">
              <div className="w-2 h-2 bg-[#F27A1A] rounded-full animate-pulse"></div>
              <span className="text-[#F27A1A] text-base font-bold uppercase tracking-wide">Available 24/7</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl md:text-3xl font-extrabold mb-6 text-slate-900 tracking-tight">Get in Touch</h4>
            <div className="space-y-4 max-w-md">
              <a
                href="mailto:leoteksolutions@gmail.com"
                className="flex items-center gap-4 text-slate-600 hover:text-[#087DBA] transition-colors group bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-[#087DBA]/30 hover:shadow-md"
              >
                <div className="bg-[#F27A1A] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-[#F27A1A]/20">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#F27A1A] font-bold uppercase tracking-wider mb-0.5">Email</div>
                  <div className="font-semibold text-slate-900 text-lg">leoteksolutions@gmail.com</div>
                </div>
              </a>
              
              <a
                href="tel:09078914841"
                className="flex items-center gap-4 text-slate-600 hover:text-[#087DBA] transition-colors group bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-[#087DBA]/30 hover:shadow-md"
              >
                <div className="bg-[#087DBA] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-[#087DBA]/20">
                  <Phone className="h-5 w-5 text-white" />
                 </div>
                 <div>
                  <div className="text-sm text-[#087DBA] font-bold uppercase tracking-wider mb-0.5">Phone</div>
                  <div className="font-semibold text-slate-900 text-lg">09078914841</div>
                 </div>
               </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 font-medium text-base">
              © {new Date().getFullYear()} <span className="text-slate-800 font-bold">LeoTek</span>. All rights reserved.
            </p>
            <div className="flex gap-8 text-base font-medium text-slate-400">
              <span className="hover:text-[#F27A1A] cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-[#F27A1A] cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}