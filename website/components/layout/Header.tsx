"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const isBookPage = pathname === "/book";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-3 sm:px-4 pt-3 sm:pt-4 pointer-events-none">
      <motion.div
        layout
        transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
        className={`pointer-events-auto w-full flex items-center justify-between transition-[background-color,box-shadow,border-color] duration-300 ${
          isScrolled
            ? "max-w-6xl bg-cream/95 backdrop-blur-xl border border-ink/10 rounded-full py-3 px-4 sm:px-5 shadow-[0_10px_30px_rgba(4,17,34,0.12)] mt-1"
            : "max-w-[88rem] bg-cream/70 backdrop-blur-md border border-white/50 rounded-3xl py-5 px-5 sm:px-7 shadow-[0_6px_24px_rgba(4,17,34,0.08)]"
        }`}
      >
        {/* Logo — protrudes at top, snaps into pill when scrolled */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <motion.div
            layout
            className={`relative drop-shadow-[0_6px_18px_rgba(4,17,34,0.25)] transition-all duration-300 ${
              isScrolled
                ? "h-12 w-12 sm:h-14 sm:w-14"
                : "h-20 w-20 sm:h-28 sm:w-28 -my-4 sm:-my-7"
            }`}
          >
            <Image
              src="/images/logo_alltime.png"
              alt="All Time Plumbers"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-bold text-ink uppercase tracking-wider group py-1 transition-[font-size] duration-300 ${
                  isScrolled ? "text-sm" : "text-base"
                }`}
              >
                <span className={active ? "text-primary" : "group-hover:text-primary transition-colors"}>
                  {item.name}
                </span>
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right cluster: phone pill + mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a
            href="tel:+17602016461"
            className={`hidden sm:inline-flex items-center gap-2 rounded-full font-bold tracking-wide transition-all hover:-translate-y-0.5 group ${
              isScrolled ? "py-2 px-4 text-sm" : "py-3 px-6 text-base"
            } ${
              isBookPage
                ? "bg-navy hover:bg-navy-mute text-white shadow-[0_0_15px_rgba(27,46,85,0.3)] hover:shadow-[0_0_25px_rgba(27,46,85,0.5)]"
                : "bg-primary hover:bg-primary-deep text-white shadow-[0_0_15px_rgba(191,34,53,0.3)] hover:shadow-[0_0_25px_rgba(191,34,53,0.5)]"
            }`}
          >
            <Phone className={`fill-current group-hover:animate-bounce ${isScrolled ? "h-4 w-4" : "h-5 w-5"}`} />
            <span className="hidden md:inline">(760) 201-6461</span>
            <span className="md:hidden">Call</span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-ink hover:bg-ink/5 transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.div>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-cream lg:hidden flex flex-col pointer-events-auto"
          >
            <div className="px-6 py-5 flex justify-between items-center border-b border-ink/10">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center"
              >
                <div className="relative h-12 w-12">
                  <Image
                    src="/images/logo_alltime.png"
                    alt="All Time Plumbers"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full text-ink hover:bg-ink/5 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col px-8 py-10 gap-2 flex-grow"
            >
              {navItems.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-4 text-3xl font-display font-extrabold tracking-tight transition-colors ${
                        active ? "text-primary" : "text-ink hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                className="mt-auto pt-8"
              >
                <a
                  href="tel:+17602016461"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary-deep text-white font-bold py-5 rounded-full text-lg shadow-[0_0_20px_rgba(191,34,53,0.4)] transition-all"
                >
                  <Phone className="h-5 w-5 fill-current" />
                  (760) 201-6461
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
