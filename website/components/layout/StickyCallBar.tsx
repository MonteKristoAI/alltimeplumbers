"use client";

import { CalendarCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStickyCTA } from "@/hooks/useStickyCTA";
import { motion, AnimatePresence } from "framer-motion";

export function StickyCallBar() {
  const isVisible = useStickyCTA();
  const pathname = usePathname();

  if (pathname === "/book") {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-50 flex items-center justify-center"
        >
          <Link
            href="/book"
            className="flex items-center gap-3 bg-primary text-white font-bold px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(191,34,53,0.5)] hover:bg-primary-deep hover:scale-105 transition-all duration-300 group border border-white/10"
          >
            <CalendarCheck className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Book a service</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
