import { CalendarCheck, Truck, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-4">How It Works</h2>
          <p className="text-ink/70 text-lg">
            No surprise pricing. No hidden fees. Just straightforward, honest plumbing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border-mute"></div>

          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-cream flex items-center justify-center shadow-lg mb-6 z-10 text-primary">
              <CalendarCheck className="w-10 h-10" />
            </div>
            <h3 className="font-display font-bold text-xl text-ink mb-3">1. Book a Time</h3>
            <p className="text-ink/70 px-4">
              Schedule online or call us directly. We offer specific 2-hour arrival windows.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-cream flex items-center justify-center shadow-lg mb-6 z-10 text-primary">
              <Truck className="w-10 h-10" />
            </div>
            <h3 className="font-display font-bold text-xl text-ink mb-3">2. We Arrive</h3>
            <p className="text-ink/70 px-4">
              Our fully-stocked truck arrives. We diagnose the issue for an $89 service call fee.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-cream flex items-center justify-center shadow-lg mb-6 z-10 text-primary">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display font-bold text-xl text-ink mb-3">3. Fixed Price Quote</h3>
            <p className="text-ink/70 px-4">
              You get a transparent price before we start. If you approve, the $89 fee is waived.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
