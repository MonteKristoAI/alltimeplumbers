"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function OwnerIntro() {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden border-t border-white/10 section-shadow-top">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: 'url("/images/bg_owner.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950/90 pointer-events-none"></div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="w-full md:w-2/5 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[50px] scale-90"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)] bg-navy-mute flex items-center justify-center group">
               <Image src="/images/pete_portrait.png" alt="Pete McNamara, Owner of All Time Plumbers" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 border-8 border-navy-ink rounded-full pointer-events-none"></div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-3/5 space-y-6 text-center md:text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-2"
            >
              Local & Reliable
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="font-display font-extrabold text-3xl md:text-4xl text-white"
            >
              Meet Pete McNamara, the Owner
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-white/70 text-lg leading-relaxed font-light"
            >
              When you call All Time Plumbers, you aren't getting a random technician dispatched by a corporate call center. You're getting an owner-operator who cares deeply about his reputation in the San Diego community.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-white/70 text-lg leading-relaxed font-light"
            >
              I started this business in 2018 with one goal: provide honest, high-quality plumbing without the typical upsells. We diagnose the problem accurately, give you a transparent price, and fix it right the first time.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-6"
            >
               <div className="font-display text-primary text-4xl italic font-bold tracking-wider drop-shadow-[0_0_15px_rgba(191,34,53,0.3)]">Pete McNamara</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
