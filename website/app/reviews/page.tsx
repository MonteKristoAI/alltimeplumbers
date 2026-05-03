import { Metadata } from "next";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Reviews | All Time Plumbers",
  description: "Read what our San Diego customers have to say about our plumbing services.",
};

export default function ReviewsPage() {
  return (
    <>
      <div className="bg-cream pt-24 pb-12 text-center">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink">Customer Reviews</h1>
      </div>
      <ReviewsCarousel />
      <FinalCTA />
    </>
  );
}
