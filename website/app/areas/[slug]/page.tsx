import { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

import { AREAS } from "@/data/areas";

export function generateStaticParams() {
  return AREAS.map(a => ({ slug: a.href.replace('/areas/', '') }));
}

export const metadata: Metadata = {
  title: "San Diego Plumber | Service Area | All Time Plumbers",
  description: "Serving the greater San Diego area with 24/7 plumbing services.",
};

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <>
      <div className="bg-navy-ink py-24 text-center text-cream">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6 text-white capitalize">{slug.replace('-', ' ')} Plumbing</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">Fast, local, and honest plumbing services for your community.</p>
      </div>
      <ServicesGrid />
      <FinalCTA />
    </>
  );
}
