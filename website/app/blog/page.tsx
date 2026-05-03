import { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";

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
      <div className="bg-cream pt-24 pb-12 text-center">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink">Plumbing Blog</h1>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-border pb-12 last:border-0">
                <div className="text-sm font-semibold text-primary mb-3">{post.date}</div>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-ink mb-4 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-lg text-ink/70 mb-6">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-navy-ink font-bold hover:text-primary transition-colors inline-flex items-center">
                  Read article &rarr;
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
