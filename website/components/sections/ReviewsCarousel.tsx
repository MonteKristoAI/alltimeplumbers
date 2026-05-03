"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "John D.",
    date: "2 months ago",
    text: "Pete was fantastic. Arrived on time, quickly diagnosed our slab leak, and gave a very fair price for the repair. Will definitely use All Time Plumbers again.",
    source: "Google"
  },
  {
    id: 2,
    name: "Sarah M.",
    date: "1 month ago",
    text: "Called them at 10 PM for a busted pipe. They were here within an hour. Extremely professional and got the water stopped and pipe fixed fast.",
    source: "Yelp"
  },
  {
    id: 3,
    name: "Mike T.",
    date: "3 weeks ago",
    text: "Best plumbing company in San Diego. Transparent pricing, no upselling, just honest work. Highly recommend Pete and his team.",
    source: "Google"
  }
];

export function ReviewsCarousel() {
  return (
    <section id="reviews" className="py-24 bg-navy-ink relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Testimonials</h2>
          <h3 className="font-display font-extrabold text-4xl md:text-5xl text-white">Don't just take our word for it</h3>
          <div className="flex items-center justify-center gap-2 text-primary font-bold text-lg mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-white">5.0 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white p-8 rounded-2xl flex flex-col h-full hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-8 italic flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                <div className="font-bold text-base text-white">{review.name}</div>
                <div className="text-xs font-bold text-primary tracking-wider uppercase bg-primary/10 px-3 py-1.5 rounded-full">
                  {review.source}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
