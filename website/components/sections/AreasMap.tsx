import { AREAS } from "@/data/areas";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export function AreasMap() {
  return (
    <section id="areas" className="py-24 bg-navy-ink relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Service Areas</h2>
              <h3 className="font-display font-extrabold text-4xl md:text-5xl text-white">Where we work</h3>
            </div>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Based in San Diego, we proudly serve homeowners and businesses across North County and the greater metro area. Fast, local response when you need it most.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {AREAS.map((area) => (
                <Link 
                  key={area.name} 
                  href={area.href}
                  className="inline-flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/10 text-sm font-semibold text-white/90 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-primary group-hover:text-white" />
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[4/3] bg-navy-ink rounded-2xl overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <Image src="/images/areas_map_sandiego.png" alt="San Diego Service Area Map" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
