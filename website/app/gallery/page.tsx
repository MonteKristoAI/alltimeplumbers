import { Metadata } from "next";
import Image from "next/image";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Before & After Gallery | All Time Plumbers",
  description: "See the quality of our plumbing work across San Diego.",
};

export default function GalleryPage() {
  const images = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    title: `Plumbing Project ${i + 1}`,
    category: ["Repipe", "Water Heater", "Sewer Line"][i % 3]
  }));

  return (
    <>
      <div className="bg-navy-ink py-24 text-center text-cream">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6 text-white">Project Gallery</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">Real results from our work in San Diego homes.</p>
      </div>
      
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div key={img.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border group">
                <div className="aspect-video relative overflow-hidden flex items-center justify-center">
                  <Image 
                    src={img.category === "Repipe" ? "/images/clean_pipes.png" : "/images/water_heater.png"} 
                    alt={img.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{img.category}</div>
                  <h3 className="font-display font-bold text-lg text-ink">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
