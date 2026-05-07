"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceProps {
  service: {
    id: string;
    title: string;
    shortDesc: string;
    fullDesc?: string;
    image?: string;
  };
}

export function ServiceDetailHero({ service }: ServiceProps) {
  return (
    <section 
      className="relative min-h-[80vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary-deep pt-32 lg:pt-28 pb-24"
    >
      <Image 
        src={service.image || "/images/bg_services_hero.webp"} 
        alt={service.title}
        fill 
        priority
        className="object-cover opacity-40 mix-blend-luminosity scale-105"
      />
      
      {/* Animated Blue Glow Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-50 hidden lg:block">
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)]"
        ></motion.div>
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute left-[50%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)]"
        ></motion.div>
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1.5 }}
          className="absolute left-[85%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)]"
        ></motion.div>
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[30%] h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)]"
        ></motion.div>
      </div>

      {/* Complex cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/80 via-black/40 to-black/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Central Glow effect behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container relative z-20 mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <span className="text-xs font-semibold text-white tracking-widest uppercase">Expert Service</span>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight drop-shadow-2xl">
              {service.title}
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
              {service.fullDesc || service.shortDesc}
            </p>
          </motion.div>

          {/* Right Side: Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary-deep text-white font-bold px-10 py-8 text-xl rounded-full shadow-[0_0_30px_rgba(191,34,53,0.5)] hover:shadow-[0_0_40px_rgba(191,34,53,0.7)] transition-all hover:-translate-y-1 group">
              <Link href={`/book?service=${service.id}`}>
                Book a Service
                <svg className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
