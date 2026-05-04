"use client";

import { PRICING } from "@/data/pricing";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function PricingTiles() {
  return (
    <section className="py-24 bg-navy-ink relative overflow-hidden">
      {/* Animated Gradient Backgrounds */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[150px] pointer-events-none translate-y-1/3 translate-x-1/4"
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">No Surprises</h2>
          <h3 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6">Transparent Pricing</h3>
          <p className="text-white/70 text-lg font-light">
            We don't believe in "free estimates" that hide the real cost. Here is what you can expect to pay for common jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col hover:bg-white/10 transition-colors duration-300"
          >
            <h3 className="font-bold text-xl text-white mb-2">Service Call</h3>
            <div className="text-3xl font-display font-extrabold text-primary mb-4">{PRICING.serviceCall}</div>
            <p className="text-sm text-white/60 mb-6 flex-grow">Diagnostic visit. Fee is waived if you proceed with the quoted repair work.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col hover:bg-white/10 transition-colors duration-300"
          >
            <h3 className="font-bold text-xl text-white mb-2">Drain Clearing</h3>
            <div className="text-3xl font-display font-extrabold text-primary mb-4">{PRICING.drainClear}</div>
            <p className="text-sm text-white/60 mb-6 flex-grow">Typical range for standard secondary drain or mainline snaking.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col hover:bg-white/10 transition-colors duration-300"
          >
            <h3 className="font-bold text-xl text-white mb-2">Water Heater Install</h3>
            <div className="text-3xl font-display font-extrabold text-primary mb-4">{PRICING.waterHeaterTank}</div>
            <p className="text-sm text-white/60 mb-6 flex-grow">Standard 40/50-gallon tank installation, including haul-away.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col hover:bg-white/10 transition-colors duration-300"
          >
            <h3 className="font-bold text-xl text-white mb-2">Tankless Install</h3>
            <div className="text-3xl font-display font-extrabold text-primary mb-4">{PRICING.waterHeaterTankless}</div>
            <p className="text-sm text-white/60 mb-6 flex-grow">Premium tankless water heater installation.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col hover:bg-white/10 transition-colors duration-300"
          >
            <h3 className="font-bold text-xl text-white mb-2">Slab Leak Detection</h3>
            <div className="text-3xl font-display font-extrabold text-primary mb-4">{PRICING.slabLeak}</div>
            <p className="text-sm text-white/60 mb-6 flex-grow">Electronic pinpointing of under-foundation leaks.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="p-8 bg-gradient-to-br from-primary/90 to-primary-deep text-white rounded-2xl shadow-[0_15px_40px_rgba(191,34,53,0.4)] flex flex-col items-start justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/images/section_bg.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="font-display font-bold text-2xl mb-4 text-white">Need a specific quote?</h3>
              <ul className="space-y-3 mb-8 text-white/90 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> No after-hours fee until 10PM</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> $150 emergency fee after 10PM</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> Photos help us quote accurately</li>
              </ul>
              <Link href="/book" className="px-6 py-4 bg-white text-primary font-bold rounded-full hover:bg-cream transition-colors w-full text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-block">
                Request Service
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
