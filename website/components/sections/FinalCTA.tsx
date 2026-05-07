"use client";

import { Phone, CalendarCheck, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-navy-ink text-white relative overflow-hidden">
      {/* Texture Background */}
      <Image src="/images/bg_contact.webp" alt="" fill aria-hidden sizes="100vw" className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay object-cover" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-primary font-bold tracking-widest uppercase text-sm mb-3"
              >
                Get in Touch
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
              >
                Ready to fix your plumbing?
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-lg text-white/70 font-light leading-relaxed"
              >
                Don't wait until a small leak becomes a major disaster. Fill out the form or give us a call for fast, professional service in San Diego.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="space-y-6 pt-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Call Us 24/7</h4>
                  <a href="tel:+17602016461" className="text-white/70 hover:text-primary transition-colors">(760) 201-6461</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Email Us</h4>
                  <a href="mailto:service@alltimeplumbers.com" className="text-white/70 hover:text-primary transition-colors">service@alltimeplumbers.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Service Area</h4>
                  <p className="text-white/70">San Diego County & North County</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

            <h4 className="font-display font-bold text-2xl text-white mb-6 relative z-10">Request a Service</h4>
            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white placeholder:text-white/30 backdrop-blur-sm" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-white/80">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="(760) 555-0123" className="bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white placeholder:text-white/30 backdrop-blur-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white placeholder:text-white/30 backdrop-blur-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Type of Service</label>
                <Select>
                  <SelectTrigger className="w-full bg-white/5 border-white/10 text-white data-[placeholder]:text-white/30 cursor-pointer backdrop-blur-sm focus:ring-primary h-10">
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-ink border border-white/10 text-white">
                    <SelectItem value="leak" className="focus:bg-primary/20 focus:text-white cursor-pointer">Leak Repair</SelectItem>
                    <SelectItem value="water-heater" className="focus:bg-primary/20 focus:text-white cursor-pointer">Water Heater</SelectItem>
                    <SelectItem value="drain" className="focus:bg-primary/20 focus:text-white cursor-pointer">Drain Cleaning</SelectItem>
                    <SelectItem value="other" className="focus:bg-primary/20 focus:text-white cursor-pointer">Other Plumbing Issue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">How can we help?</label>
                <Textarea id="message" placeholder="Describe your plumbing issue..." className="bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary min-h-[120px] text-white placeholder:text-white/30 backdrop-blur-sm resize-none" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-deep text-white font-bold py-7 text-lg rounded-full mt-4 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(191,34,53,0.4)] cursor-pointer">
                Send Request
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
