import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BlogHero } from "@/components/sections/BlogHero";

export const metadata: Metadata = {
  title: "Plumbing Blog | All Time Plumbers",
  description: "Expert plumbing tips and advice for San Diego homeowners.",
};

const posts = [
  {
    slug: "how-to-prevent-slab-leaks",
    title: "How to Prevent Slab Leaks in Older Homes",
    excerpt: "Slab leaks are a common and costly issue in San Diego. Learn the warning signs and preventative measures.",
    date: "May 1, 2026"
  },
  {
    slug: "tankless-vs-traditional-water-heaters",
    title: "Tankless vs. Traditional Water Heaters: Which is Right for You?",
    excerpt: "Weighing the pros and cons of upgrading your water heater to a tankless system.",
    date: "April 15, 2026"
  },
  {
    slug: "what-to-do-in-a-plumbing-emergency",
    title: "What to Do When You Have a Plumbing Emergency",
    excerpt: "Before the plumber arrives, take these critical steps to minimize water damage in your home.",
    date: "March 28, 2026"
  }
];

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      
      <section className="py-24 bg-neutral-950 relative overflow-hidden border-t border-white/10 section-shadow-top">
        {/* Background Image */}
        <Image src="/images/bg_gallery.webp" alt="" fill aria-hidden sizes="100vw" className="absolute inset-0 opacity-25 pointer-events-none mix-blend-luminosity object-cover" />
        
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950/90 pointer-events-none"></div>

        {/* Static Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-white/10 pb-12 last:border-0 relative">
                <div className="text-sm font-semibold text-primary mb-3 tracking-widest uppercase">{post.date}</div>
                <h2 className="font-display font-extrabold text-2xl md:text-4xl text-white mb-4 hover:text-primary transition-colors drop-shadow-md">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-xl text-white/70 mb-6 font-light leading-relaxed">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-white font-bold hover:text-primary transition-colors inline-flex items-center text-sm uppercase tracking-wider group">
                  Read article <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
