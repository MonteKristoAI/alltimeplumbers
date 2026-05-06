"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

export function ContactHero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-950 pt-28 pb-24"
    >
      <Image 
        src="/images/bg_contact.png" 
        alt="Contact All Time Plumbers" 
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
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,30,58,0.7)_100%)]"></div>
      
      {/* Central Glow effect behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-2 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            <span className="text-xs font-semibold text-white tracking-widest uppercase">We Are Available 24/7</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight drop-shadow-2xl">
            Contact Us
          </h1>
          
          <div className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light space-y-4">
            <p>
              The fastest way to reach us is by phone or by booking online.
            </p>
            <div className="text-lg text-white/70 space-y-2 pt-4">
              <p><strong className="text-white">Service Area:</strong> San Diego & North County</p>
              <p><strong className="text-white">Hours:</strong> 24/7 Emergency Service</p>
              <p><strong className="text-white">License:</strong> CSLB #1134776</p>
            </div>
          </div>

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
