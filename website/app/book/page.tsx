import { Metadata } from "next";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { BookHero } from "@/components/sections/BookHero";

export const metadata: Metadata = {
  title: "Book Online | All Time Plumbers",
  description: "Schedule your plumbing service online. We offer 2-hour arrival windows and transparent pricing.",
};

export default function BookPage() {
  return (
    <>
      <BookHero />
    </>
  );
}
