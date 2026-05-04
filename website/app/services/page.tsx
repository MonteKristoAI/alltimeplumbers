import { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServicesHero } from "@/components/sections/ServicesHero";

export const metadata: Metadata = {
  title: "Plumbing Services | All Time Plumbers",
  description: "Comprehensive plumbing services in San Diego. Drain cleaning, water heaters, leak repair, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <FinalCTA />
    </>
  );
}
