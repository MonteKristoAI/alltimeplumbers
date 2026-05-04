import { Metadata } from "next";
import { OwnerIntro } from "@/components/sections/OwnerIntro";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { AboutHero } from "@/components/sections/AboutHero";

export const metadata: Metadata = {
  title: "About Us | All Time Plumbers",
  description: "Learn about Pete and the team at All Time Plumbers.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OwnerIntro />
      <FinalCTA />
    </>
  );
}
