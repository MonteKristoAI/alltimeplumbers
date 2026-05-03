import Link from "next/link";
import Image from "next/image";
import { Phone, CalendarCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy-ink pt-20">
      <Image 
        src="/images/hero_bg.png" 
        alt="Modern bathroom plumbing" 
        fill 
        priority
        className="object-cover opacity-40 mix-blend-overlay"
      />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-ink/80 via-navy-ink/60 to-navy-ink"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            San Diego plumbing, <br className="hidden lg:block"/>
            when you need it.
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Fast response. Transparent pricing. Done right the first time. 
            <span className="block mt-2 font-semibold text-primary">CSLB Lic #1134776</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link 
              href="/book" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded hover:bg-primary-deep transition-colors shadow-lg"
            >
              <CalendarCheck className="w-5 h-5 mr-2" />
              Book a service
            </Link>
            <a 
              href="tel:+17602016461" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-navy-ink bg-transparent border-2 border-navy-ink rounded hover:bg-navy-ink hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (760) 201-6461
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            {/* Placeholder for Hero Image */}
            <div className="absolute inset-0 bg-navy-mute flex items-center justify-center">
              <span className="text-white/50 font-display font-bold text-2xl">Plumbing Service Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
