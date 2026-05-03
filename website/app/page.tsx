import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingTiles } from "@/components/sections/PricingTiles";
import { AreasMap } from "@/components/sections/AreasMap";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { OwnerIntro } from "@/components/sections/OwnerIntro";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HOME_FAQS } from "@/data/faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <HowItWorks />
      <PricingTiles />
      <AreasMap />
      <ReviewsCarousel />
      <OwnerIntro />
      <FAQ faqs={HOME_FAQS} />
      <FinalCTA />
    </>
  );
}
