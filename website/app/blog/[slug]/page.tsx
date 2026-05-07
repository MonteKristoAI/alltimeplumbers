import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/sections/FinalCTA";

const posts = [
  {
    slug: "how-to-prevent-slab-leaks",
    title: "How to Prevent Slab Leaks in Older Homes",
    excerpt: "Slab leaks are a common and costly issue in San Diego. Learn the warning signs and preventative measures.",
    content: "Slab leaks occur when pipes beneath your home's concrete foundation break or deteriorate. Since they happen out of sight, they can cause extensive damage before you even realize there's a problem.\n\n### Signs of a Slab Leak\n- An unexplained spike in your water bill\n- Damp spots or warm areas on your flooring\n- The sound of running water when fixtures are off\n- Cracks in your foundation or walls\n\n### How to Prevent Them\nThe best prevention is maintaining normal water pressure. High water pressure stresses your pipes and leads to leaks over time. Consider installing a pressure regulating valve (PRV). Additionally, avoid harsh chemical drain cleaners which can corrode old pipes.",
    date: "May 1, 2026",
    image: "/images/bg_services_plumbing.webp"
  },
  {
    slug: "tankless-vs-traditional-water-heaters",
    title: "Tankless vs. Traditional Water Heaters: Which is Right for You?",
    excerpt: "Weighing the pros and cons of upgrading your water heater to a tankless system.",
    content: "When it's time to replace your water heater, you have two main options: a traditional tank or a tankless system. Let's compare them.\n\n### Traditional Tank Heaters\n- **Pros:** Lower upfront cost, simpler installation.\n- **Cons:** Limited hot water supply, higher energy bills (since it constantly heats the water), shorter lifespan (10-12 years).\n\n### Tankless Water Heaters\n- **Pros:** Endless hot water, lower energy bills (heats on demand), saves space, longer lifespan (20+ years).\n- **Cons:** Higher upfront cost, may require upgrading your gas line.\n\nIf your home frequently runs out of hot water during morning showers, a tankless system might be the perfect upgrade.",
    date: "April 15, 2026",
    image: "/images/water_heater.webp"
  },
  {
    slug: "what-to-do-in-a-plumbing-emergency",
    title: "What to Do When You Have a Plumbing Emergency",
    excerpt: "Before the plumber arrives, take these critical steps to minimize water damage in your home.",
    content: "A plumbing emergency like a burst pipe or a severe backup can cause thousands of dollars in water damage in minutes. Here is exactly what you should do while you wait for us to arrive.\n\n### 1. Shut Off the Water\nIf it's an isolated leak (like under a sink or behind a toilet), turn the local shut-off valve clockwise. If you have a burst pipe or can't find the source, turn off your home's main water shut-off valve immediately.\n\n### 2. Turn Off the Water Heater\nIf you've turned off the main water supply, turn off your water heater to prevent it from overheating and causing further damage.\n\n### 3. Open Drains\nTurn on outside spigots to drain remaining water from the pipes.\n\n### 4. Call a Professional\nCall us immediately at (760) 201-6461. We are available 24/7 for emergencies across San Diego.",
    date: "March 28, 2026",
    image: "/images/bg_services_hero.webp"
  }
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return {
    title: `${post?.title || 'Blog'} | All Time Plumbers`,
    description: post?.excerpt || `Expert plumbing tips.`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-navy-ink pt-28 pb-24 section-shadow-top">
        <Image src={post.image} alt="" fill aria-hidden sizes="100vw" className="absolute inset-0 opacity-30 pointer-events-none mix-blend-luminosity object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-navy-ink/60 via-transparent to-navy-ink/90 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,30,58,0.7)_100%)] pointer-events-none"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="text-xs font-semibold text-white tracking-widest uppercase">{post.date}</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-2xl leading-tight">{post.title}</h1>
          <p className="text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">{post.excerpt}</p>
        </div>
      </section>
      
      <article className="py-24 bg-neutral-950 relative overflow-hidden border-t border-white/10">
        <Image src="/images/bg_gallery_interior.webp" alt="" fill aria-hidden sizes="100vw" className="absolute inset-0 opacity-10 pointer-events-none mix-blend-luminosity object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950/90 pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 max-w-3xl text-white/80 text-lg leading-relaxed font-light">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-2xl md:text-3xl font-display font-bold text-white mt-12 mb-6 drop-shadow-md">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n');
              return (
                <ul key={index} className="list-disc pl-6 mb-8 space-y-3">
                  {items.map((item, i) => {
                    const text = item.replace('- ', '');
                    if (text.includes('**')) {
                      const parts = text.split('**');
                      return <li key={i}><span className="font-bold text-primary">{parts[1]}</span>{parts[2]}</li>;
                    }
                    return <li key={i}>{text}</li>;
                  })}
                </ul>
              );
            }
            return <p key={index} className="mb-6">{paragraph}</p>;
          })}
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
