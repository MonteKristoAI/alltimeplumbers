import Image from "next/image";

export function OwnerIntro() {
  return (
    <section className="py-24 bg-navy-ink relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="w-full md:w-2/5 flex justify-center relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[50px] scale-90"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)] bg-navy-mute flex items-center justify-center group">
               <Image src="/images/pete_portrait.png" alt="Pete McNamara, Owner of All Time Plumbers" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 border-8 border-navy-ink rounded-full pointer-events-none"></div>
            </div>
          </div>
          <div className="w-full md:w-3/5 space-y-6 text-center md:text-left">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Local & Reliable</h2>
            <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white">Meet Pete McNamara, the Owner</h3>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              When you call All Time Plumbers, you aren't getting a random technician dispatched by a corporate call center. You're getting an owner-operator who cares deeply about his reputation in the San Diego community.
            </p>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              I started this business in 2018 with one goal: provide honest, high-quality plumbing without the typical upsells. We diagnose the problem accurately, give you a transparent price, and fix it right the first time.
            </p>
            <div className="pt-6">
               <div className="font-display text-primary text-4xl italic font-bold tracking-wider drop-shadow-[0_0_15px_rgba(191,34,53,0.3)]">Pete McNamara</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
