"use client";

import { CalendarCheck, Truck, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // The line scales from 0 to 1 as we scroll through the section
  const scaleX = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 bg-navy-ink relative overflow-hidden">
      {/* Texture Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("/images/section_bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      {/* Floating Animated Background Blobs */}
      <motion.div 
        animate={{ 
          y: [-20, 20, -20],
          x: [-20, 20, -20],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none"
      ></motion.div>
      <motion.div 
        animate={{ 
          y: [20, -20, 20],
          x: [20, -20, 20],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Simple Process</h2>
          <h3 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6">How It Works</h3>
          <p className="text-white/70 text-lg font-light">
            No surprise pricing. No hidden fees. Just straightforward, honest plumbing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Base Connector Line (Dim) */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-white/10"></div>
          
          {/* Animated Fill Connector Line */}
          <motion.div 
            style={{ scaleX, transformOrigin: "left" }}
            className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary-deep shadow-[0_0_15px_rgba(191,34,53,0.8)]"
          ></motion.div>

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative flex flex-col items-center text-center group"
          >
            <div className="w-32 h-32 rounded-full bg-navy-ink border-2 border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-8 z-10 text-white relative overflow-hidden group-hover:border-primary/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CalendarCheck className="w-12 h-12 relative z-10 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">1. Book a Time</h3>
            <p className="text-white/60 px-4 leading-relaxed font-light">
              Schedule online or call us directly. We offer specific 2-hour arrival windows.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative flex flex-col items-center text-center group"
          >
            <div className="w-32 h-32 rounded-full bg-navy-ink border-2 border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-8 z-10 text-white relative overflow-hidden group-hover:border-primary/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Truck className="w-12 h-12 relative z-10 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">2. We Arrive</h3>
            <p className="text-white/60 px-4 leading-relaxed font-light">
              Our fully-stocked truck arrives. We diagnose the issue for an $89 service call fee.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative flex flex-col items-center text-center group"
          >
            <div className="w-32 h-32 rounded-full bg-navy-ink border-2 border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-8 z-10 text-white relative overflow-hidden group-hover:border-primary/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CheckCircle2 className="w-12 h-12 relative z-10 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">3. Fixed Price Quote</h3>
            <p className="text-white/60 px-4 leading-relaxed font-light">
              You get a transparent price before we start. If you approve, the $89 fee is waived.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
