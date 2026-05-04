"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "@/data/services";

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-neutral-950 relative overflow-hidden border-t border-white/10 section-shadow-top">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: 'url("/images/bg_gallery_interior.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950/90 pointer-events-none"></div>
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Our Work</h2>
          <h3 className="font-display font-extrabold text-4xl md:text-5xl text-white drop-shadow-lg">Project Gallery</h3>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">See the quality of our plumbing work across San Diego.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 group hover:border-white/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <Link href={service.href} className="flex flex-col h-full" onClick={() => window.scrollTo({ top: 0 })}>
                <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                  <Image 
                    src={service.image || "/images/gallery_1.png"} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-ink/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8 relative flex-1 flex flex-col justify-center">
                  <div className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">Service</div>
                  <h4 className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors">{service.title}</h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
