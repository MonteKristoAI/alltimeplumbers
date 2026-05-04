import { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactHero } from "@/components/sections/ContactHero";

export const metadata: Metadata = {
  title: "Contact Us | All Time Plumbers",
  description: "Get in touch with All Time Plumbers. 24/7 emergency service available.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <FinalCTA />
    </>
  );
}
