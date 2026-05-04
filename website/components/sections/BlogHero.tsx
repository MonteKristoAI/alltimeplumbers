"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function BlogHero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy-ink pt-28 pb-24"
    >
      <Image 
        src="/images/bg_faq.png" 
        alt="Plumbing advice and insights" 
        fill 
        priority
        className="object-cover opacity-30 mix-blend-luminosity scale-105"
      />
      
      {/* Animated Red Glow Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(191,34,53,0.8)]"
        ></motion.div>
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute left-[50%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(191,34,53,0.8)]"
        ></motion.div>
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1.5 }}
          className="absolute left-[85%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(191,34,53,0.8)]"
        ></motion.div>
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[30%] h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(191,34,53,0.8)]"
        ></motion.div>
      </div>

      {/* Complex cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-ink/60 via-transparent to-navy-ink/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,30,58,0.7)_100%)]"></div>
      
      {/* Central Glow effect behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-2 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="text-xs font-semibold text-white tracking-widest uppercase">Insights & Advice</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight drop-shadow-2xl">
            Plumbing Blog
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Expert plumbing tips, maintenance guides, and practical advice to help San Diego homeowners protect their property and save money.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
