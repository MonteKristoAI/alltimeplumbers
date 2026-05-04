"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const isBookPage = pathname === "/book";
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-cream/90 backdrop-blur-lg supports-[backdrop-filter]:bg-cream/70 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-24 items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex items-center relative w-24 sm:w-32">
          <Link href="/" className="block absolute -top-4 sm:-top-6 left-0 z-50">
            <div className="relative h-28 w-28 sm:h-36 sm:w-36 transition-transform duration-300 hover:scale-105 drop-shadow-2xl">
              <Image 
                src="/images/logo_alltime.png" 
                alt="All Time Plumbers" 
                fill 
                className="object-contain" 
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {['Services', 'Blog', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`/${item.toLowerCase()}`} 
              className="relative text-sm font-bold text-ink uppercase tracking-wider group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button asChild className={`hidden sm:flex rounded-full px-6 py-6 font-bold tracking-wide transition-all hover:-translate-y-0.5 group ${isBookPage ? "bg-navy hover:bg-navy-mute text-white border-2 border-navy-mute shadow-[0_0_15px_rgba(27,46,85,0.3)] hover:shadow-[0_0_25px_rgba(27,46,85,0.5)]" : "bg-primary hover:bg-primary-deep text-white shadow-[0_0_15px_rgba(191,34,53,0.3)] hover:shadow-[0_0_25px_rgba(191,34,53,0.5)]"}`}>
            <a href="tel:+17602016461">
              <Phone className="mr-2 h-5 w-5 fill-current group-hover:animate-bounce" />
              (760) 201-6461
            </a>
          </Button>
          <Button variant="outline" size="icon" className="lg:hidden border-border bg-white text-ink">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>

      </div>
    </header>
  );
}
