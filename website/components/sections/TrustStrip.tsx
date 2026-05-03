import { Shield, Clock, Wrench, Star } from "lucide-react";

export function TrustStrip() {
  return (
    <section className="bg-navy-ink py-8 border-t border-b border-navy-mute">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/10">
          <div className="flex flex-col items-center gap-2 px-4">
            <Shield className="w-8 h-8 text-primary mb-1" />
            <span className="text-white font-bold text-sm tracking-wide">CSLB Lic #1134776</span>
          </div>
          <div className="flex flex-col items-center gap-2 px-4">
            <Wrench className="w-8 h-8 text-primary mb-1" />
            <span className="text-white font-bold text-sm tracking-wide">Owner-Operated Since 2018</span>
          </div>
          <div className="flex flex-col items-center gap-2 px-4">
            <Star className="w-8 h-8 text-primary mb-1 fill-current" />
            <span className="text-white font-bold text-sm tracking-wide">5.0 Google Rating</span>
          </div>
          <div className="flex flex-col items-center gap-2 px-4">
            <Clock className="w-8 h-8 text-primary mb-1" />
            <span className="text-white font-bold text-sm tracking-wide">24/7 Emergency Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
