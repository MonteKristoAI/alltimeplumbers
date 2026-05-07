import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | All Time Plumbers",
};

export default function TermsPage() {
  return (
    <div className="bg-cream min-h-screen pt-32 lg:pt-28 pb-24">
      <div className="container mx-auto px-4 max-w-3xl space-y-6 text-ink/80">
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-8">Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>Welcome to All Time Plumbers. By using our website and services, you agree to these terms.</p>
        <h2 className="font-bold text-xl text-ink mt-8">Service Calls & Estimates</h2>
        <p>We charge a standard $89 diagnostic/service call fee. This fee is waived if you approve the quoted work.</p>
        <h2 className="font-bold text-xl text-ink mt-8">Cancellations</h2>
        <p>Please cancel appointments at least 24 hours in advance.</p>
        <h2 className="font-bold text-xl text-ink mt-8">Liability</h2>
        <p>We are fully licensed (CSLB #1134776) and insured. We guarantee our workmanship but cannot be held liable for pre-existing faulty plumbing systems.</p>
      </div>
    </div>
  );
}
