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
    <section className="py-20 bg-navy-ink text-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">Don't just take our word for it</h2>
          <div className="flex items-center justify-center gap-2 text-primary font-bold text-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            5.0 Average Rating
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white text-ink p-8 rounded-xl shadow-lg flex flex-col h-full border-t-4 border-primary"
            >
              <div className="flex text-primary mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-ink/80 text-base leading-relaxed mb-6 italic flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                <div className="font-bold text-sm text-ink">{review.name}</div>
                <div className="text-xs font-semibold text-ink/50 bg-cream px-2 py-1 rounded">
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
