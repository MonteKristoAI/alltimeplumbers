import Link from "next/link";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-ink">
            <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">A</span>
            All Time Plumbers
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/services" className="text-sm font-medium text-ink hover:text-primary transition-colors">Services</Link>
            <Link href="/areas/san-diego" className="text-sm font-medium text-ink hover:text-primary transition-colors">Areas</Link>
            <Link href="/reviews" className="text-sm font-medium text-ink hover:text-primary transition-colors">Reviews</Link>
            <Link href="/gallery" className="text-sm font-medium text-ink hover:text-primary transition-colors">Gallery</Link>
            <Link href="/blog" className="text-sm font-medium text-ink hover:text-primary transition-colors">Blog</Link>
            <Link href="/about" className="text-sm font-medium text-ink hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium text-ink hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="hidden sm:flex rounded-full px-6 font-bold tracking-wide">
            <a href="tel:+17602016461">
              <Phone className="mr-2 h-4 w-4 fill-current" />
              (760) 201-6461
            </a>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
