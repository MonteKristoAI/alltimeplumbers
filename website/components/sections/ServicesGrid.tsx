"use client";

import { SERVICES } from "@/data/services";
import Link from "next/link";
import { ArrowRight, Wind, Flame, Droplet, Wrench, AlarmClock } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  Wind: <Wind className="w-10 h-10 text-primary group-hover:text-white transition-colors" />,
  Flame: <Flame className="w-10 h-10 text-primary group-hover:text-white transition-colors" />,
  Droplet: <Droplet className="w-10 h-10 text-primary group-hover:text-white transition-colors" />,
  Wrench: <Wrench className="w-10 h-10 text-primary group-hover:text-white transition-colors" />,
  AlarmClock: <AlarmClock className="w-10 h-10 text-primary group-hover:text-white transition-colors" />,
};

export function ServicesGrid() {
  return (
    <section className="py-24 bg-navy-ink relative overflow-hidden">
      {/* Animated Gradient Backgrounds */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/4"
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">What We Do</h2>
          <h3 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6">Our Core Plumbing Services</h3>
          <p className="text-white/70 text-lg font-light">
            We handle everything from minor repairs to whole-home plumbing solutions across San Diego. 
            Honest pricing, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link 
                href={service.href}
                className="group flex flex-col items-center text-center p-8 h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="bg-navy-ink/50 group-hover:bg-primary rounded-full p-4 mb-6 shadow-sm transition-colors duration-300 border border-white/5">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60 group-hover:text-white/90 mb-8 flex-grow transition-colors">
                  {service.shortDesc}
                </p>
                <div className="flex items-center text-primary group-hover:text-white font-bold text-sm transition-colors mt-auto">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
