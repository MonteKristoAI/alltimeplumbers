import Image from "next/image";

export function GallerySection() {
  const images = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    title: `Plumbing Project ${i + 1}`,
    category: ["Repipe", "Water Heater", "Sewer Line"][i % 3]
  }));

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Our Work</h2>
          <h3 className="font-display font-extrabold text-4xl md:text-5xl text-ink">Project Gallery</h3>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">See the quality of our plumbing work across San Diego.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div key={img.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-video relative overflow-hidden flex items-center justify-center">
                <Image 
                  src={img.category === "Repipe" ? "/images/clean_pipes.png" : "/images/water_heater.png"} 
                  alt={img.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8 relative bg-white">
                <div className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">{img.category}</div>
                <h4 className="font-display font-bold text-xl text-ink group-hover:text-primary transition-colors">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
