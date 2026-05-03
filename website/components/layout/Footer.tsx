import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-ink text-cream pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-2xl tracking-tight text-white">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">A</span>
              All Time Plumbers
            </Link>
            <p className="text-cream/80 text-sm leading-relaxed">
              Owner-operated San Diego plumbing company serving residential and commercial properties since 2018.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-primary/20 text-primary-soft border border-primary/30 px-3 py-1 rounded text-sm font-semibold tracking-wide">
                CSLB Lic #1134776
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display font-bold text-lg text-white">Company</h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Project Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Plumbing Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-lg text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="tel:+17602016461" className="hover:text-white transition-colors font-semibold">
                  (760) 201-6461
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>San Diego, CA 92127</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>24/7 Emergency Service Available</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-lg text-white">Services</h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li><Link href="/services/drain-cleaning" className="hover:text-white transition-colors">Drain Cleaning</Link></li>
              <li><Link href="/services/water-heater" className="hover:text-white transition-colors">Water Heater Repair & Install</Link></li>
              <li><Link href="/services/leak-repair" className="hover:text-white transition-colors">Leak Detection & Repair</Link></li>
              <li><Link href="/services/repipe" className="hover:text-white transition-colors">Whole-Home Repipe</Link></li>
              <li><Link href="/services/emergency" className="hover:text-white transition-colors text-primary-soft">24/7 Emergency Plumber</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-lg text-white">Service Areas</h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li><Link href="/areas/san-diego" className="hover:text-white transition-colors">San Diego</Link></li>
              <li><Link href="/areas/san-diego" className="hover:text-white transition-colors">Rancho Bernardo</Link></li>
              <li><Link href="/areas/san-diego" className="hover:text-white transition-colors">Poway</Link></li>
              <li><Link href="/areas/san-diego" className="hover:text-white transition-colors">4S Ranch</Link></li>
              <li><Link href="/areas/san-diego" className="hover:text-white transition-colors">Escondido</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/60">
          <p>&copy; {new Date().getFullYear()} All Time Plumbers, Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
