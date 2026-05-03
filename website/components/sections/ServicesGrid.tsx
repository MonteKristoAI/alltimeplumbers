import { SERVICES } from "@/data/services";
import Link from "next/link";
import { ArrowRight, Wind, Flame, Droplet, Wrench, AlarmClock } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Wind: <Wind className="w-10 h-10 text-primary group-hover:text-white transition-colors" />,
  Flame: <Flame className="w-10 h-10 text-primary group-hover:text-white transition-colors" />,
  Droplet: <Droplet className="w-10 h-10 text-primary group-hover:text-white transition-colors" />,
  Wrench: <Wrench className="w-10 h-10 text-primary group-hover:text-white transition-colors" />,
  AlarmClock: <AlarmClock className="w-10 h-10 text-primary group-hover:text-white transition-colors" />,
};

export function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-4">Our Core Plumbing Services</h2>
          <p className="text-ink/70 text-lg">
            We handle everything from minor repairs to whole-home plumbing solutions across San Diego. 
            Honest pricing, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICES.map((service) => (
            <Link 
              key={service.id} 
              href={service.href}
              className="group flex flex-col items-center text-center p-8 bg-cream border border-border rounded-xl hover:bg-navy-ink hover:border-navy-ink transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="bg-white group-hover:bg-primary rounded-full p-4 mb-6 shadow-sm transition-colors duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-display font-bold text-lg text-ink group-hover:text-white mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-ink/70 group-hover:text-cream/80 mb-6 flex-grow transition-colors">
                {service.shortDesc}
              </p>
              <div className="flex items-center text-primary group-hover:text-primary-soft font-semibold text-sm transition-colors mt-auto">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
