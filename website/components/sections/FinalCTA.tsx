import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6">Ready to fix your plumbing?</h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Don't wait until a small leak becomes a major disaster. Get professional, honest service today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/book" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-ink bg-white rounded hover:bg-cream-deep transition-colors shadow-xl"
          >
            <CalendarCheck className="w-5 h-5 mr-2 text-primary" />
            Book Online
          </Link>
          <a 
            href="tel:+17602016461" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-transparent border-2 border-white rounded hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call (760) 201-6461
          </a>
        </div>
      </div>
    </section>
  );
}
