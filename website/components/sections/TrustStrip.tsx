import { Shield, Clock, Wrench, Star } from "lucide-react";

import { Shield, Clock, Wrench, Star } from "lucide-react";

export function TrustStrip() {
  return (
    <section className="bg-navy-ink py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
          <div className="flex flex-col items-center gap-3 px-4 group">
            <Shield className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white/90 font-bold text-sm tracking-widest uppercase">CSLB Lic #1134776</span>
          </div>
          <div className="flex flex-col items-center gap-3 px-4 group">
            <Wrench className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white/90 font-bold text-sm tracking-widest uppercase">Owner-Operated Since 2018</span>
          </div>
          <div className="flex flex-col items-center gap-3 px-4 group">
            <Star className="w-10 h-10 text-primary fill-current group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white/90 font-bold text-sm tracking-widest uppercase">5.0 Google Rating</span>
          </div>
          <div className="flex flex-col items-center gap-3 px-4 group">
            <Clock className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white/90 font-bold text-sm tracking-widest uppercase">24/7 Emergency Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
