import { PRICING } from "@/data/pricing";
import { Check } from "lucide-react";
import Link from "next/link";

export function PricingTiles() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-4">Transparent Pricing</h2>
          <p className="text-ink/70 text-lg">
            We don't believe in "free estimates" that hide the real cost. Here is what you can expect to pay for common jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 bg-cream border border-border rounded-xl shadow-sm flex flex-col">
            <h3 className="font-bold text-xl text-ink mb-2">Service Call</h3>
            <div className="text-3xl font-display font-extrabold text-primary mb-4">{PRICING.serviceCall}</div>
            <p className="text-sm text-ink/70 mb-6 flex-grow">Diagnostic visit. Fee is waived if you proceed with the quoted repair work.</p>
          </div>

          <div className="p-8 bg-cream border border-border rounded-xl shadow-sm flex flex-col">
            <h3 className="font-bold text-xl text-ink mb-2">Drain Clearing</h3>
            <div className="text-3xl font-display font-extrabold text-primary mb-4">{PRICING.drainClear}</div>
            <p className="text-sm text-ink/70 mb-6 flex-grow">Typical range for standard secondary drain or mainline snaking.</p>
          </div>

          <div className="p-8 bg-cream border border-border rounded-xl shadow-sm flex flex-col">
            <h3 className="font-bold text-xl text-ink mb-2">Water Heater Install</h3>
            <div className="text-3xl font-display font-extrabold text-primary mb-4">{PRICING.waterHeaterTank}</div>
            <p className="text-sm text-ink/70 mb-6 flex-grow">Standard 40/50-gallon tank installation, including haul-away.</p>
          </div>
          
          <div className="p-8 bg-cream border border-border rounded-xl shadow-sm flex flex-col">
            <h3 className="font-bold text-xl text-ink mb-2">Tankless Install</h3>
            <div className="text-3xl font-display font-extrabold text-primary mb-4">{PRICING.waterHeaterTankless}</div>
            <p className="text-sm text-ink/70 mb-6 flex-grow">Premium tankless water heater installation.</p>
          </div>

          <div className="p-8 bg-cream border border-border rounded-xl shadow-sm flex flex-col">
            <h3 className="font-bold text-xl text-ink mb-2">Slab Leak Detection</h3>
            <div className="text-3xl font-display font-extrabold text-primary mb-4">{PRICING.slabLeak}</div>
            <p className="text-sm text-ink/70 mb-6 flex-grow">Electronic pinpointing of under-foundation leaks.</p>
          </div>

          <div className="p-8 bg-navy-ink text-cream rounded-xl shadow-lg flex flex-col items-start justify-center">
            <h3 className="font-display font-bold text-2xl mb-4 text-white">Need a specific quote?</h3>
            <ul className="space-y-3 mb-8 text-cream/80 text-sm">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> No after-hours fee until 10PM</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> $150 emergency fee after 10PM</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Photos help us quote accurately</li>
            </ul>
            <Link href="/book" className="px-6 py-3 bg-primary text-white font-bold rounded hover:bg-primary-deep transition-colors w-full text-center">
              Request Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
