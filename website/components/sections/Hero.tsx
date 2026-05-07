"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-navy-ink pt-32 lg:pt-20"
    >
      <Image 
        src="/images/hero_bg.webp" 
        alt="Modern bathroom plumbing" 
        fill 
        priority
        className="object-cover opacity-40 mix-blend-luminosity scale-105"
      />
      
      {/* Animated Red Glow Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 hidden lg:block">
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

      {/* Complex cinematic gradient overlay (reduced to show background better) */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-ink/60 via-transparent to-navy-ink/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,30,58,0.7)_100%)]"></div>
      
      {/* Central Glow effect behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            <span className="text-xs font-semibold text-white tracking-widest uppercase">24/7 Emergency Service</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight drop-shadow-2xl">
            San Diego plumbing, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">when you need it.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Fast response. Transparent pricing. Done right the first time. 
            <span className="block mt-4 text-sm font-semibold tracking-widest text-primary uppercase">CSLB Lic #1134776</span>
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link 
              href="/book" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-base font-bold text-white bg-primary rounded-full hover:bg-primary-deep transition-all duration-300 shadow-[0_0_40px_rgba(191,34,53,0.4)] hover:shadow-[0_0_60px_rgba(191,34,53,0.6)] hover:-translate-y-1"
            >
              <CalendarCheck className="w-5 h-5 mr-2" />
              Book a service
            </Link>
            <a 
              href="tel:+17602016461" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-base font-bold text-white bg-white/5 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (760) 201-6461
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
