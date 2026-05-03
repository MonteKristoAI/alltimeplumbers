import { Metadata } from "next";
import { OwnerIntro } from "@/components/sections/OwnerIntro";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | All Time Plumbers",
  description: "Learn about Pete and the team at All Time Plumbers.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-cream pt-24 pb-12 text-center">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink">About Us</h1>
      </div>
      <OwnerIntro />
      <FinalCTA />
    </>
  );
}
