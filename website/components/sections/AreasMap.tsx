import { AREAS } from "@/data/areas";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export function AreasMap() {
  return (
    <section className="py-20 bg-cream-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink">Areas We Serve</h2>
            <p className="text-ink/70 text-lg leading-relaxed">
              Based in San Diego, we proudly serve homeowners and businesses across North County and the greater metro area. Fast, local response when you need it most.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {AREAS.map((area) => (
                <Link 
                  key={area.name} 
                  href={area.href}
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-border text-sm font-semibold text-ink hover:border-primary hover:text-primary transition-colors shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-navy-ink rounded-2xl overflow-hidden shadow-xl flex items-center justify-center border-4 border-white">
              <Image src="/images/map_illustration.png" alt="San Diego Service Area Map" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
