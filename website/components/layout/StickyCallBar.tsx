"use client";

import { CalendarCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStickyCTA } from "@/hooks/useStickyCTA";
import { useMobileMenuOpen } from "@/hooks/useMobileMenu";
import { motion, AnimatePresence } from "framer-motion";

export function StickyCallBar() {
  const isVisible = useStickyCTA();
  const isMobileMenuOpen = useMobileMenuOpen();
  const pathname = usePathname();

  if (pathname === "/book" || pathname === "/contact" || (pathname.startsWith("/services/") && pathname !== "/services")) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && !isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center justify-center"
        >
          <Link
            href="/book"
            className="flex items-center gap-2 sm:gap-3 bg-primary text-white font-bold h-14 px-5 sm:px-8 text-sm sm:text-base rounded-full shadow-[0_10px_40px_rgba(191,34,53,0.5)] hover:bg-primary-deep hover:scale-105 transition-all duration-300 group border border-white/10"
          >
            <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Book a service</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
