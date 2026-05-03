"use client";

import { Phone, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStickyCTA } from "@/hooks/useStickyCTA";

export function StickyCallBar() {
  const isVisible = useStickyCTA();
  const pathname = usePathname();

  if (pathname === "/book") {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex h-[64px] md:hidden transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href="tel:+17602016461"
        className="flex h-full w-[60%] items-center justify-center gap-2 bg-primary text-white font-bold tracking-wide"
      >
        <Phone className="h-5 w-5 fill-current" />
        Call now
      </a>
      <Link
        href="/book"
        className="flex h-full w-[40%] items-center justify-center gap-2 bg-cream text-ink border-t-2 border-border font-semibold shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
      >
        <CalendarCheck className="h-5 w-5" />
        Book online
      </Link>
    </div>
  );
}
