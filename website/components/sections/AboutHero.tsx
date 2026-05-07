"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary-deep pt-28 pb-24"
    >
      <Image 
        src="/images/team_of_plumbers.webp" 
        alt="Team of professional plumbers from All Time Plumbers" 
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-2 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="text-xs font-semibold text-white tracking-widest uppercase">Local & Trusted</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight drop-shadow-2xl">
            About Us
          </h1>
          
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
              Plumbing problems can disrupt your day in an instant. And at All Time Plumbers, Inc., we're here to make sure they never slow you down for long. As a locally owned and operated plumbing company in San Diego, CA, we provide fast, professional, and affordable service backed by many years of hands-on experience. So whether you're dealing with a water heater issue, a slab leak, or a plumbing emergency, our skilled team is ready to step in and make things right.
            </p>
            <p className="text-lg sm:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Our plumbing company knows what it means to live and work in San Diego. From the coastal neighborhoods near Pacific Beach to the family homes of North County, we've helped homeowners and businesses handle every kind of plumbing issue imaginable. Our focus is simple: deliver quality workmanship with honest pricing and personalized plumbing services you can trust.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
