"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-navy-ink pt-20">
      <Image 
        src="/images/hero_bg.png" 
        alt="Modern bathroom plumbing" 
        fill 
        priority
        className="object-cover opacity-30 mix-blend-overlay scale-105"
      />
      {/* Complex cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-ink/80 via-transparent to-navy-ink"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,30,58,0.8)_100%)]"></div>
      
      {/* Glow effect behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-white tracking-widest uppercase">24/7 Emergency Service</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight drop-shadow-2xl">
            San Diego plumbing, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">when you need it.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Fast response. Transparent pricing. Done right the first time. 
            <span className="block mt-4 text-sm font-semibold tracking-widest text-primary/90 uppercase">CSLB Lic #1134776</span>
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link 
              href="/book" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-full hover:bg-primary-deep transition-all duration-300 shadow-[0_0_40px_rgba(191,34,53,0.4)] hover:shadow-[0_0_60px_rgba(191,34,53,0.6)] hover:-translate-y-1"
            >
              <CalendarCheck className="w-5 h-5 mr-2" />
              Book a service
            </Link>
            <a 
              href="tel:+17602016461" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/5 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (760) 201-6461
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent"></div>
    </section>
  );
}
