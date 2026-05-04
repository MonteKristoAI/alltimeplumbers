import Image from "next/image";

export function GallerySection() {
  const images = [
    {
      id: 1,
      title: "Kitchen Sink Repair",
      category: "Fixture Installation",
      src: "/images/gallery_1.png"
    },
    {
      id: 2,
      title: "Copper Pipe Soldering",
      category: "Pipe Repair",
      src: "/images/gallery_2.png"
    },
    {
      id: 3,
      title: "Tankless Heater Setup",
      category: "Water Heater",
      src: "/images/gallery_3.png"
    },
    {
      id: 4,
      title: "Sewer Line Inspection",
      category: "Camera Inspection",
      src: "/images/gallery_4.png"
    },
    {
      id: 5,
      title: "Modern Faucet Install",
      category: "Bathroom Fixtures",
      src: "/images/gallery_5.png"
    },
    {
      id: 6,
      title: "Full Bathroom Remodel",
      category: "Remodeling",
      src: "/images/gallery_6.png"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-navy-ink relative overflow-hidden">
      {/* Texture Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("/images/section_bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Our Work</h2>
          <h3 className="font-display font-extrabold text-4xl md:text-5xl text-white drop-shadow-lg">Project Gallery</h3>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">See the quality of our plumbing work across San Diego.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div key={img.id} className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 group hover:border-white/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-ink/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8 relative">
                <div className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">{img.category}</div>
                <h4 className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
