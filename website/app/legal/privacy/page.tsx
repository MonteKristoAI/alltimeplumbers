import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | All Time Plumbers",
};

export default function PrivacyPage() {
  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-3xl space-y-6 text-ink/80">
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-8">Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>All Time Plumbers ("we", "our", "us") respects your privacy. This policy explains how we collect, use, and protect your information.</p>
        <h2 className="font-bold text-xl text-ink mt-8">Information We Collect</h2>
        <p>We collect information you provide directly to us when booking a service or contacting us (name, phone, address, email).</p>
        <h2 className="font-bold text-xl text-ink mt-8">How We Use Information</h2>
        <p>To provide plumbing services, communicate with you, and improve our website.</p>
        <h2 className="font-bold text-xl text-ink mt-8">Data Sharing</h2>
        <p>We do not sell your personal information. We may share information with trusted third parties to help us operate our business (e.g., booking software).</p>
      </div>
    </div>
  );
}
