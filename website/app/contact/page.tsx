import { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Contact Us | All Time Plumbers",
  description: "Get in touch with All Time Plumbers. 24/7 emergency service available.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-cream pt-24 pb-12 text-center">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink">Contact Us</h1>
      </div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-xl text-ink/80 mb-8">
            The fastest way to reach us is by phone or by booking online.
          </p>
          <div className="space-y-4 text-lg">
            <p><strong>Phone:</strong> <a href="tel:+17602016461" className="text-primary hover:underline">(760) 201-6461</a></p>
            <p><strong>Service Area:</strong> San Diego & North County</p>
            <p><strong>Hours:</strong> 24/7 Emergency Service</p>
            <p><strong>License:</strong> CSLB #1134776</p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
