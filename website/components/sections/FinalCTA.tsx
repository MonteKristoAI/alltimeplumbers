"use client";

import { Phone, CalendarCheck, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-navy-ink text-white relative overflow-hidden">
      {/* Texture Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("/images/section_bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Get in Touch</h2>
              <h3 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Ready to fix your plumbing?
              </h3>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Don't wait until a small leak becomes a major disaster. Fill out the form or give us a call for fast, professional service in San Diego.
              </p>
            </div>

            <div className="space-y-6 pt-4">
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
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl relative">
            <h4 className="font-display font-bold text-2xl text-ink mb-6">Request a Service</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-ink">Full Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-cream border-border focus-visible:ring-primary text-ink" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-ink">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="(760) 555-0123" className="bg-cream border-border focus-visible:ring-primary text-ink" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-ink">Email Address</label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-cream border-border focus-visible:ring-primary text-ink" />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-ink">Type of Service</label>
                <select id="service" className="flex h-10 w-full rounded-md border border-border bg-cream px-3 py-2 text-sm text-ink ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select a service...</option>
                  <option value="leak">Leak Repair</option>
                  <option value="water-heater">Water Heater</option>
                  <option value="drain">Drain Cleaning</option>
                  <option value="other">Other Plumbing Issue</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-ink">How can we help?</label>
                <Textarea id="message" placeholder="Describe your plumbing issue..." className="bg-cream border-border focus-visible:ring-primary min-h-[120px] text-ink" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-deep text-white font-bold py-6 text-lg rounded-full mt-4 transition-all hover:-translate-y-1 hover:shadow-xl">
                Send Request
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
