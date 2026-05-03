import { Metadata } from "next";
import { BookingFlow } from "@/components/booking/BookingFlow";

export const metadata: Metadata = {
  title: "Book Online | All Time Plumbers",
  description: "Schedule your plumbing service online. We offer 2-hour arrival windows and transparent pricing.",
};

export default function BookPage() {
  return (
    <div className="bg-cream min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink mb-6">Book a Service</h1>
          <p className="text-lg text-ink/70">
            Need a plumber? Fill out the form below and we'll confirm your appointment shortly. For immediate emergencies, please call <a href="tel:+17602016461" className="text-primary font-bold hover:underline">(760) 201-6461</a>.
          </p>
        </div>
        
        <BookingFlow />
      </div>
    </div>
  );
}
