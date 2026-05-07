"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookingFlow } from "@/components/booking/BookingFlow";

export function BookHero() {
  return (
    <section 
      className="relative min-h-[80vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary-deep pt-32 lg:pt-28 pb-24"
    >
      <Image 
        src="/images/bg_book_hero.webp" 
        alt="Booking plumbing service online" 
        fill 
        priority
        className="object-cover opacity-40 mix-blend-luminosity scale-105"
      />
      
      {/* Animated Blue Glow Lines (Contrasting the Red Background) */}
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

      {/* Complex cinematic gradient overlay in Red tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/80 via-black/40 to-black/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Central Glow effect behind text (Blue glow for contrast) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="text-xs font-semibold text-white tracking-widest uppercase">Fast & Reliable</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight drop-shadow-2xl">
            Book a Service
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            Need a plumber right away? Fill out the form below to secure your 2-hour arrival window. For immediate emergencies, please call <a href="tel:+17602016461" className="font-bold text-white hover:text-blue-200 transition-colors underline decoration-blue-400 decoration-2 underline-offset-4">(760) 201-6461</a>.
          </p>
        </motion.div>

        <div className="w-full mt-4">
          <BookingFlow />
        </div>
      </div>
    </section>
  );
}
