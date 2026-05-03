import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/data/services";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PricingTiles } from "@/components/sections/PricingTiles";
import { createServiceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  return {
    title: `${service?.title || 'Service'} | All Time Plumbers`,
    description: service?.shortDesc || `Professional plumbing service in San Diego.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.id === slug);
  
  if (!service) {
    notFound();
  }

  const schema = createServiceSchema(service.title, service.shortDesc, `https://alltimeplumbers.com/services/${slug}`, service.price);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-cream py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink mb-6">{service.title}</h1>
          <p className="text-xl text-ink/80">{service.shortDesc}</p>
        </div>
      </div>
      <PricingTiles />
      <FinalCTA />
    </>
  );
}
