import { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Plumbing Services | All Time Plumbers",
  description: "Comprehensive plumbing services in San Diego. Drain cleaning, water heaters, leak repair, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-cream pt-24 pb-12 text-center">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink">Our Services</h1>
      </div>
      <ServicesGrid />
      <FinalCTA />
    </>
  );
}
