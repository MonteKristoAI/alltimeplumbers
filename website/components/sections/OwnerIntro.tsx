import Image from "next/image";

export function OwnerIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-cream shadow-2xl bg-navy-mute flex items-center justify-center">
               <Image src="/images/pete_portrait.png" alt="Pete McNamara, Owner of All Time Plumbers" fill className="object-cover" />
            </div>
          </div>
          <div className="w-full md:w-3/5 space-y-6 text-center md:text-left">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink">Meet Pete McNamara, the Owner</h2>
            <p className="text-ink/80 text-lg leading-relaxed">
              When you call All Time Plumbers, you aren't getting a random technician dispatched by a corporate call center. You're getting an owner-operator who cares deeply about his reputation in the San Diego community.
            </p>
            <p className="text-ink/80 text-lg leading-relaxed">
              I started this business in 2018 with one goal: provide honest, high-quality plumbing without the typical upsells. We diagnose the problem accurately, give you a transparent price, and fix it right the first time.
            </p>
            <div className="pt-4">
               {/* Signature image placeholder */}
               <div className="font-display text-primary text-3xl italic font-bold">Pete McNamara</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
